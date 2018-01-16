'use strict'

const { expect } = require('chai')
const RepoName = require('..')

/** @test {RepoName} */
describe('RepoName', () => {
  /**
   * The instance of the module to test.
   * @type {RepoName}
   */
  let repoName

  /**
   * Hook for setting up the RepoName tests.
   * @type {Function}
   */
  before(() => {
    repoName = new RepoName()
  })

  /** @test {RepoName#foo} */
  it('should greet with a given parameter', () => {
    const res = repoName.foo('baz')
    expect(res).to.be.a('string')
    expect(res).to.equal('baz')
  })

  /** @test {RepoName#foo} */
  it('greet with the default parameter', () => {
    const res = repoName.foo()
    expect(res).to.be.a('string')
    expect(res).to.equal('bar')
  })

  /**
   * Hook for tearing down the RepoName tests.
   * @type {Function}
   */
  after(done => {
    done()
  })
})
