import { RRule, RRuleSet, rrulestr } from 'rrule'

// Create a rule:
const rule = new RRule({
  freq: RRule.WEEKLY,
  interval: 5,
  byweekday: [RRule.MO, RRule.FR],
  dtstart: new Date(Date.UTC(2012, 1, 1, 10, 30)),
  until: new Date(Date.UTC(2012, 12, 31))
})
