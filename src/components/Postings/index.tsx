import React, { useState, useEffect } from "react"
import { IPosting } from '../../interfaces/IPosting'
import { Posting } from '../Posting'
import { data } from "./data"
import "./styles.scss"

export const Postings: React.FC = () => {
  const [postings, setPostings] = useState<IPosting[]>(data)
  const [loading, setLoading] = useState<boolean>(true)

  /**
   * Fetch job postings and update the state
   * 
   * Note: async functions always returns a Promise
   */
  const getPostings = async (): Promise<void> => {
    setLoading(true)

    try {
      const postings = await new Promise<IPosting[]>((resolve) => {
        setTimeout(() => {
          resolve(data)
        }, 1000)
      })

      setPostings(postings)
    } catch (e) {
      // @TODO - what to do in case of error and client-side monitoring
      console.log('Could not fetch job postings - ', e)
    }

    setLoading(false)
  }

  /**
   * useEffect hook to fetch data on page load
   */
  useEffect(() => {
    getPostings()
  }, [postings])

  const renderLoadingState = () => {
    return <div>Loading</div>
  }

  const renderEmptyState = () => {
    return <div>Sorry, there are no jobs postings at the moment</div>
  }

  const renderOkState = () => {
    return (
      postings.map((posting: IPosting) => {
        return (
          <Posting
            key={posting.id}
            id={posting.id}
            title={posting.role}
            company={posting.company}
            salary={posting.rate}
          />
        )
      })
    )
  }

  const determineAndRenderState = () => {
    if (loading) {
      return renderLoadingState()
    }

    return (
      <div className="c-light-section c-container" id="postings">
        <h3 className="c-light-section__title">Jobs</h3>
        {!postings.length ? renderEmptyState() : renderOkState()}
      </div>
    )
  }

  return determineAndRenderState()
}
