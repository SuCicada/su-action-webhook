import * as core from '@actions/core'
import * as github from '@actions/github'
import {http} from './http'

async function run() {
  const url = core.getInput('url')
    ? core.getInput('url')
    : process.env.WEBHOOK_URL
      ? process.env.WEBHOOK_URL
      : ''
  // core.info(JSON.stringify(process.env))
  const headers = core.getInput('headers')
    ? core.getInput('headers')
    : process.env.headers
      ? process.env.headers
      : null

  // const body = core.getInput('body')
  //   ? core.getInput('body')
  //   : process.env.data
  //   ? process.env.data
  //   : null
  //   const octokit = github.getOctokit("myToken")
  const jobInfo = JSON.parse(core.getInput('job'))
  const githubInfo = JSON.parse(core.getInput('github'))
  // console.log(job)
  const body = JSON.stringify({
    env: process.env,
    github: githubInfo,
    job: jobInfo
  })
  // core.debug(`job: ${body.job}`)
  core.debug(`body: ${body}`)

  const insecure = core.getInput('insecure')
    ? core.getInput('insecure') == 'true'
    : process.env.insecure
      ? process.env.insecure == 'true'
      : false

  if (!url) {
    // validate a url
    core.setFailed('A url is required to run this action.')
    // error
    throw new Error('A url is required to run this action.')
  }

  core.info(`Sending webhook request to ${url}`)

  // make the request
  http
    .make(url, body, headers, insecure)
    .then(async (res: Response) => {
      // if the status code is not 2xx
      if (res.status >= 400) {
        // throw an error
        error(res.status)
        return
      }
      // console.log("env---", process.env)
      // console.log(await res.text())

    })
    .catch(err => {
      core.info(`Error: ${err}`);
      error(err.status)
      return
    })
}

function error(statusCode) {
  // set the action to failed
  core.setFailed(`Received status code: ${statusCode}`)
  // throw an error
  throw new Error(`Request failed with status code: ${statusCode}`)
}

run()
