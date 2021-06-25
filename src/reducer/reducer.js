import {combineReducers} from 'redux'
import pro from './appPanel/product/proreducer'
import sku from './appPanel/product/sku'
import sub from './appPanel/subreducer'
import skuDetail from './appPanel/product/skudetail'
import subscriberAnalytics from './analytics/subscriptionReducer'
import Reasons from './appPanel/cancellation'

export const reducer = combineReducers({
   sub: sub,
   pro: pro,
   sku: sku,
   skuDetail: skuDetail,
   subscriberAnalytics: subscriberAnalytics,
   reasons: Reasons,
})