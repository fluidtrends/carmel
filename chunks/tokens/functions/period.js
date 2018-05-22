const moment = require('moment')

const mainPeriodId = 'AirDrop'
const mainStartDate = '23 May 2018 00:00:00 PDT'
const mainStartTotalDays = 20
const mainStartTokens = 100
const mainStartDailyLimit = 5000
const mainDailyTokensDecrement = 5
const mainDailyLimitDecrement = 5000

const current = () => {
  const startDay = moment(`${mainStartDate}`)
  const today = moment()
  const day = today.diff(startDay, 'days')
  const hour = today.diff(startDay, 'hours')

  const tokens = mainStartTokens - (day * mainDailyTokensDecrement)
  const daysLeft = mainStartTotalDays - day - 1
  const dailySupply = mainStartDailyLimit - (day * mainDailyLimitDecrement)

  return ({ periodId: mainPeriodId, dailySupply, daysLeft, day, tokens, hour })
}

module.exports = {
  current
}
