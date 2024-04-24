const axios = require('axios');
const core = require('@actions/core');

const analyzeURL = core.getInput('analyzeURL', { required: true });
const recommendURL = core.getInput('recommendURL', { required: true });
const myjson = core.getInput('result', { required: true });

//const myjson = {}
const jsondata = JSON.stringify(myjson)
//const analyzeURL = "https://fl35fg7b.clj5khk.gcp.restack.it/api/v1/prediction/29e6fd2f-deb5-4026-812d-6bc3e7456345"
//const recommendURL = "https://fl35fg7b.clj5khk.gcp.restack.it/api/v1/prediction/49ac5901-d159-4a75-8097-2a9f8e160e61"

var analyzeData = {}
var recommendData = {}
var resultData = ""

let payload = {
    "question" : jsondata
}
let getAnalyze = axios.post(analyzeURL, payload)
.then(res => {
    if (res.status === 200) {
        const analyzeData = res.data.text
        console.log("-------------------------------------------------")
        console.log(analyzeData)
        console.log("-------------------------------------------------\n")
        const analyzePayload = {
            "question" : analyzeData
        }
        let getRecommend = axios.post(recommendURL, analyzePayload)
        .then(resRecommend => {
            if (res.status === 200) {
                //console.log(resRecommend.data)
                //let myData = JSON.stringify(res.data)
                const recommendData = resRecommend.data.text
                console.log("-------------------------------------------------\n")
                console.log(recommendData)
                console.log("-------------------------------------------------\n")
                resultData = "# K6.io Performance & Stress Test Report\n" + "\n## Reports\n"+ analyzeData + "\n## Recommendation\n" + recommendData + "\n";
                console.log("-------------------------------------------------\n")
                console.log(resultData)

                core.setOutput('jawapan', resultData);
            }
        })
    }
})
.catch(err => {
    console.error(err); 
})