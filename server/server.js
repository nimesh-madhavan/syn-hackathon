var express = require('express');
var request = require('request');
var cors = require('cors');
var app = express();
app.use(cors());
const JobsPath = '/api/v1/label/job/values';
const MetadataPath = '/api/v1/targets/metadata?match_target={job="{0}"}';
String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
    function () {
        "use strict";
        var str = this.toString();
        if (arguments.length) {
            var t = typeof arguments[0];
            var key;
            var args = ("string" === t || "number" === t) ?
                Array.prototype.slice.call(arguments)
                : arguments[0];

            for (key in args) {
                str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
            }
        }

        return str;
    };
app.get('/', function (req, res) {
    res.send('Metrics api running on port: 3000');
});
var jobs = [];
app.get('/api/jobs/:prometheusUrl', function (req, res) {
    var prometheusUrl = req.params.prometheusUrl;
    if (prometheusUrl == undefined) {
        res.status(400).send('Host is undefined');
    }

    var jobRequestsUrl = "http://" + prometheusUrl + JobsPath;
    request.get(jobRequestsUrl, function (error, response, body) {
        if (error) {
            res.status(400).send(error);
        } else if (response.statusCode != 200) {
            res.status(response.statusCode).send('Failed to get jobs')
        } else {
            var jobsData = JSON.parse(body);
            if (jobsData.data && jobsData.data.length > 0) {
                for (i = 0; i < jobsData.data.length; i++) {
                    if (!jobs.includes(jobsData.data[i])) {
                        jobs.push(jobsData.data[i]);
                    }
                }
                res.status(200).send(jobs);
            } else {
                res.status(404).send('No jobs found');
            }
        }
    });
});

app.get('/api/jobs/:prometheusUrl/:jobName/metadata', function (req, res) {
    var jobName = req.params.jobName;
    var prometheusUrl = req.params.prometheusUrl;
    if (jobName == undefined) {
        res.status(400).send('Job Name is undefined');
    } else if (prometheusUrl == undefined) {
        res.status(400).send('Prometheus Url is undefined');
    }

    var metricsRequestUrl = "http://" + prometheusUrl + MetadataPath.formatUnicorn(jobName);
    request.get(metricsRequestUrl, function (error, response, body) {
        if (error) {
            res.status(400).send(error);
        } else if (response.statusCode != 200) {
            res.status(response.statusCode).send('Failed to get metrics for job: ' + jobName)
        } else {
            var metricsData = JSON.parse(body);
            if (metricsData.data && metricsData.data.length > 0) {
                res.status(200).send(metricsData.data);
            } else {
                res.status(404).send('No metrics found for job: ' + jobName);
            }
        }
    });
});
app.listen(3000, function () {
    console.log('Server listening on port: 3000');
});