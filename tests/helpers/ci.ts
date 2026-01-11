import { test as bunTest } from "bun:test"

const isGithubActions = process.env.GITHUB_ACTIONS === "true"
const isCi = process.env.CI === "true" || isGithubActions
const allowIntegration = process.env.HACK_TEST_INTEGRATION === "1"
const allowNetwork = process.env.HACK_TEST_NETWORK === "1"

const shouldRunIntegration = !isCi || allowIntegration
const shouldRunNetwork = !isCi || allowNetwork

const testIntegration = shouldRunIntegration ? bunTest : bunTest.skip
const testNetwork = shouldRunNetwork ? bunTest : bunTest.skip

export {
  allowIntegration,
  allowNetwork,
  isCi,
  isGithubActions,
  shouldRunIntegration,
  shouldRunNetwork,
  testIntegration,
  testNetwork
}
