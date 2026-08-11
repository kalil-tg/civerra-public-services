# CIVERRA Case Study

## Summary

CIVERRA is a self-initiated technical case study for a fictional public-services portal. I designed and built an application journey that helps a resident resume, validate, save, and review a housing-support request.

Role: product design, front-end engineering, accessibility remediation, interaction design, and automated regression testing.

Stack: React, TypeScript, Vite, CSS, Playwright, and axe-core.

## Problem

Public-service forms combine high cognitive load with deadlines, document requirements, validation, and session-sensitive progress. Common barriers include unclear step state, errors that are only shown beside fields, small touch targets, inaccessible upload controls, and mobile layouts that hide context.

## Solution

The account dashboard makes application state, deadlines, documents, and official messages scannable without reducing them to a generic card grid. The form then provides semantic groups, a clear five-step path, focused error summary, linked inline errors, labelled native controls, an accessible upload trigger, save feedback, and a review confirmation.

## Verification

Five Playwright scenarios pass: controlled baseline defects, clean configured axe scans, dashboard-to-form focus movement, focused error handling, successful completion, first-focus skip navigation, and mobile overflow protection.

Automated checks apply only to the tested states and rules. Screen-reader validation and a full manual success-criterion audit remain separate work and are not claimed complete.

## Business value

- Reduces abandonment in a consequential application flow
- Gives residents clearer progress and recovery from errors
- Gives engineers reproducible regression evidence
- Preserves institutional trust while improving mobile usability

