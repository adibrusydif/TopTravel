import axios from 'axios'
const BASE_API_URL ='http://172.104.50.9:3000'

export const FETCH_DATA = 'FETCH_DATA'
export const fetchData = () => {
  return {
    type: FETCH_DATA
  }
}

export const FETCH_BANNERS = 'FETCH_BANNERS'
export const fetchBanners = () => {
  return {
    type: FETCH_BANNERS,
    payload: BannersList()
  }
}

const BannersList = () => {
  const url_banners = 'http://172.104.50.9:3000/api/banner_lists'
  return axios.get(url_banners)
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err)
    })
}

export const FETCH_DESTINATION = 'FETCH_DESTINATION'
export const fetchDest = () => {
  return {
    type: FETCH_DESTINATION,
    payload: DestinationList()
  }
}

const DestinationList = () => {
  const url_dest = 'http://172.104.50.9:3000/api/destination_lists'
  return axios.get(url_dest)
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err)
    })
}

export const FETCH_REVIEWERS = 'FETCH_REVIEWERS'
export const fetchReviewers = () => {
  return {
    type: FETCH_REVIEWERS,
    payload: ReviewersList()
  }
}
const ReviewersList = () => {
  const url_rev = 'http://172.104.50.9:3000/api/reviewer_lists'
  return axios.get(url_rev)
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err)
    })
}