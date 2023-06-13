import { createSelector } from 'reselect'
// import { Bid } from '@dcl/schemas'
import { getData as getBidData } from '../../../bid/selectors'
import { RootState } from '../../../reducer'
// import { BidState } from '../../../bid/reducer'
// import { BidUIState } from './reducer'

export const getState = (state: RootState) => state.ui.nft.bid

// export const getSellerBids = createSelector<
//   RootState,
//   BidUIState,
//   BidState['data'],
//   Bid[]
// >(getState, getBidData, (bid, bidsById) => bid.seller.map(id => bidsById[id]))

export const getSellerBids = createSelector(
  getState,
  getBidData,
  (bid, bidsById) => bid.seller.map(id => bidsById[id])
)

// <
//   RootState,
//   BidUIState,
//   BidState['data'],
//   Bid[]
// >
export const getBidderBids = createSelector(
  getState,
  getBidData,
  (ui, bidsById) => ui.bidder.map(id => bidsById[id])
)

export const getArchivedBidIds = (state: RootState) => getState(state).archived

// <
//   RootState,
//   BidUIState,
//   BidState['data'],
//   Bid[]
// >
export const getNFTBids = createSelector(
  getState,
  getBidData,
  (bid, bidsById) => bid.nft.map(id => bidsById[id])
)
