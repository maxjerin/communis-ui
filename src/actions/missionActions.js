import axios from 'axios';
import {GLOBAL_CONSTANT} from '../utils/constants';
import {getLocalToken} from './../utils/jwtTokenUtils';

export function fetchRegionTiers() {
    return function(dispatch) {
        axios({
            method: 'get',
            url: GLOBAL_CONSTANT.ENDPOINTS.MISSION_REGION_TIERS,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Auth-Token' : getLocalToken()
            }
        })
            .then((response) => {
                dispatch({type: 'FETCH_REGIONS_TIERS_FULFILLED', payload: response.data.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_REGIONS_TIERS_REJECTED", payload: err.response.data })
            })
    }
}

export function fetchRegions() {
    return function(dispatch) {
        axios({
            method: 'get',
            url: GLOBAL_CONSTANT.ENDPOINTS.MISSION_REGION,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Auth-Token' : getLocalToken()
            }
        })
            .then((response) => {
                dispatch({type: 'FETCH_REGIONS_FULFILLED', payload: response.data.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_REGIONS_REJECTED", payload: err.response.data })
            })
    }
}

export function fetchSubRegions(regionId) {
    return function(dispatch) {
        axios({
            method: 'get',
            url: GLOBAL_CONSTANT.ENDPOINTS.MISSION_SUB_REGION.replace('$regionId',regionId),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Auth-Token' : getLocalToken()
            }
        })
            .then((response) => {
                dispatch({type: 'FETCH_SUB_REGIONS_FULFILLED', payload: response.data.data, regionId: regionId})
            })
            .catch((err) => {
                dispatch({type: "FETCH_SUB_REGIONS_REJECTED", payload: err.response.data })
            })
    }
}

export function createRegion(region) {
    return function(dispatch) {
        axios({
            method: 'put',
            url: GLOBAL_CONSTANT.ENDPOINTS.MISSION_REGION,
            data: region,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Auth-Token' : getLocalToken()
            }
        })
            .then((response) => {
                dispatch({type: 'CREATE_REGIONS_FULFILLED', payload: response.data.data})
            })
            .catch((err) => {
                dispatch({type: "CREATE_REGIONS_REJECTED", payload: err.response.data })
            })
    }
}
