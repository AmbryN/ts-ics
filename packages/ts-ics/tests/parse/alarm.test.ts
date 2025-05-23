import { convertIcsAlarm } from "@/lib/parse/alarm";
import { icsTestData } from "../utils";
import { z } from "zod";

it("Test Ics Alarm Parse", async () => {
  const alarm = icsTestData([
    "BEGIN:VALARM",
    "TRIGGER;VALUE=DATE-TIME:19970317T133000Z",
    "REPEAT:4",
    "DURATION:PT15M",
    "ACTION:AUDIO",
    "ATTACH;FMTTYPE=audio/basic:ftp://example.com/pub/sounds/bell-01.aud",
    "END:VALARM",
  ]);
  expect(() => convertIcsAlarm(undefined, alarm)).not.toThrow();
});

it("Test Ics Alarm Parse", async () => {
  const alarm = icsTestData([
    "BEGIN:VALARM",
    "TRIGGER:-PT30M",
    "REPEAT:2",
    "DURATION:PT15M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Breakfast meeting with executive\n",
    "  team at 8:30 AM EST.",
    "END:VALARM",
  ]);
  expect(() => convertIcsAlarm(undefined, alarm)).not.toThrow();
});

it("Test Ics Alarm Parse", async () => {
  const alarm = icsTestData([
    "BEGIN:VALARM",
    "TRIGGER;RELATED=END:-P2D",
    "ACTION:EMAIL",
    "ATTENDEE:mailto:john_doe@example.com",
    "SUMMARY:*** REMINDER: SEND AGENDA FOR WEEKLY STAFF MEETING ***",
    "DESCRIPTION:A draft agenda needs to be sent out to the attendees to the we",
    "  ekly managers meeting (MGR-LIST). Attached is a pointer the document templ",
    "  ate for the agenda file.",
    "ATTACH;FMTTYPE=application/msword:http://example.com/templates/agenda.doc",
    "END:VALARM",
  ]);
  expect(() => convertIcsAlarm(undefined, alarm)).not.toThrow();
});

it("Test non standard value", async () => {
  const nonStandardValue = "yeah";

  const alarmString = icsTestData([
    "BEGIN:VALARM",
    "TRIGGER;VALUE=DATE-TIME:19970317T133000Z",
    "REPEAT:4",
    "DURATION:PT15M",
    "ACTION:AUDIO",
    `X-WTF:${nonStandardValue}`,
    "ATTACH;FMTTYPE=audio/basic:ftp://example.com/pub/sounds/bell-01.aud",
    "END:VALARM",
  ]);

  const alarm = convertIcsAlarm(undefined, alarmString, {
    nonStandard: {
      wtf: {
        name: "X-WTF",
        convert: (line) => line.value,
        schema: z.string(),
      },
    },
  });

  expect(alarm.nonStandard?.wtf).toBe(nonStandardValue);
});
