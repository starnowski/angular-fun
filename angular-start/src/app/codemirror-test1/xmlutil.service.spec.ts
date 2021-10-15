import { TestBed } from '@angular/core/testing';

import { XmlutilService } from './xmlutil.service';

describe('XmlutilService', () => {
  let service: XmlutilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlutilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const expectedCorrectXmls: string[] = [
    `<?xml version="1.0" encoding="UTF-8"?>
    <note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
    </note>
    `,
    `
    <top>
    <child name="Simon"/>
    </top>
    `
  ];
  expectedCorrectXmls.forEach(function (expectedCorrectXml) {
  it('should confirm that xml is correct: ' + expectedCorrectXml, function() {
    // WHEN
    const result = service.validate(expectedCorrectXml);

    // THEN
    expect(result).toBeTrue();
  })
});

  const expectedInvalidXmls: string[] = [
    `<?xml version="1.0" encoding="UTF-8"?>
    <note>
    <to>
    </note>
    `,
    `
    <top>
    <child name="Simon"/>
    </top>
    <top1>
    <child name="Simon"/>
    </top1>
    `,
    `
    <top>
    <child name="Simon">
    </top1>
    `
  ];
  expectedInvalidXmls.forEach(function (expectedInvalidXml) {
  it('should confirm that xml is incorrect: ' + expectedInvalidXml, function() {
    // WHEN
    const result = service.validate(expectedInvalidXml);

    // THEN
    expect(result).toBeFalse();
  })
});

});
