import { getLine } from "@/lib/parse/utils/line";

import { convertIcsRecurrenceRule } from "@/lib/parse/recurrenceRule";

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule =
    "RRULE:FREQ=YEARLY;INTERVAL=2;BYMONTH=1;BYDAY=SU;BYHOUR=8,9;BYMINUTE=30";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = "RRULE:FREQ=DAILY;COUNT=10;INTERVAL=2";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = "RRULE:FREQ=DAILY;COUNT=10";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = "RRULE:FREQ=DAILY;UNTIL=19971224T000000Z";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = "RRULE:FREQ=DAILY;INTERVAL=2";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = "RRULE:FREQ=DAILY;INTERVAL=10;COUNT=5";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = "RRULE:FREQ=DAILY;UNTIL=20000131T140000Z;BYMONTH=1";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = "RRULE:FREQ=WEEKLY;UNTIL=19971224T000000Z";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = "RRULE:FREQ=WEEKLY;INTERVAL=2;WKST=SU";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = "RRULE:FREQ=WEEKLY;UNTIL=19971007T000000Z;WKST=SU;BYDAY=TU,TH";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule =
    "RRULE:FREQ=WEEKLY;INTERVAL=2;UNTIL=19971224T000000Z;WKST=SU;BYDAY=MO,WE,FR";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = "RRULE:FREQ=WEEKLY;INTERVAL=2;COUNT=8;WKST=SU;BYDAY=TU,TH";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = "RRULE:FREQ=MONTHLY;COUNT=10;BYMONTHDAY=1,-1";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = "RRULE:FREQ=YEARLY;INTERVAL=3;COUNT=10;BYYEARDAY=1,100,200";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = `RRULE:FREQ=YEARLY;INTERVAL=4;BYMONTH=11;BYDAY=TU;
  BYMONTHDAY=2,3,4,5,6,7,8`;

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = "RRULE:FREQ=MONTHLY;BYDAY=MO,TU,WE,TH,FR;BYSETPOS=-2";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = "RRULE:FREQ=MINUTELY;INTERVAL=90;COUNT=4";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule Parse", async () => {
  const rRule = "RRULE:FREQ=WEEKLY;INTERVAL=2;COUNT=4;BYDAY=TU,SU;WKST=MO";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});

it("Test Ics Recurrence Rule - Until is a date", async () => {
  const rRule = "RRULE:FREQ=WEEKLY;UNTIL=20241015";

  const { line } = getLine(rRule);

  expect(() => convertIcsRecurrenceRule(undefined, line)).not.toThrow();
});
