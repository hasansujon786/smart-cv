import ReactDOMServer from 'react-dom/server'
import React from 'react'

import Base1 from '../pdf-templates/src/templates/old/pro/Base1'
import MBase1 from '../pdf-templates/src/templates/old/modern/MBase1'
import MBase2 from '../pdf-templates/src/templates/old/modern/MBase2'
import MBase3 from '../pdf-templates/src/templates/old/modern/MBase3'
import MBase4 from '../pdf-templates/src/templates/old/modern/MBase4'
import TemplateK from '../pdf-templates/src/templates/K'
import TemplateL from '../pdf-templates/src/templates/L'
import TemplateM from '../pdf-templates/src/templates/M'
import TemplateN from '../pdf-templates/src/templates/N'
import TemplateO from '../pdf-templates/src/templates/O'
import TemplateP from '../pdf-templates/src/templates/P'
import TemplateQ from '../pdf-templates/src/templates/Q'
import TemplateR from '../pdf-templates/src/templates/R'
import TemplateS from '../pdf-templates/src/templates/S'
import TemplateT from '../pdf-templates/src/templates/T'
import TemplateU from '../pdf-templates/src/templates/U'
import TemplateV from '../pdf-templates/src/templates/V'
import TemplateW from '../pdf-templates/src/templates/W'

const jsxComponents = {
  A: (profile) => <Base1 templateId='A' profile={profile} />,
  B: (profile) => <Base1 templateId='B' profile={profile} />,
  C: (profile) => <Base1 templateId='C' profile={profile} />,
  D: (profile) => <Base1 templateId='D' profile={profile} />,
  E: (profile) => <Base1 templateId='E' profile={profile} />,
  F: (profile) => <MBase1 templateId='F' profile={profile} />,
  G: (profile) => <MBase1 templateId='G' profile={profile} />,
  H: (profile) => <MBase2 templateId='H' profile={profile} />,
  I: (profile) => <MBase3 templateId='I' profile={profile} />,
  J: (profile) => <MBase4 templateId='J' profile={profile} />,
  K: (profile) => <TemplateK templateId='K' profile={profile} />,
  L: (profile) => <TemplateL templateId='L' profile={profile} />,
  M: (profile) => <TemplateM templateId='M' profile={profile} />,
  N: (profile) => <TemplateN templateId='N' profile={profile} />,
  O: (profile) => <TemplateO templateId='O' profile={profile} />,
  P: (profile) => <TemplateP templateId='P' profile={profile} />,
  Q: (profile) => <TemplateQ templateId='Q' profile={profile} />,
  R: (profile) => <TemplateR templateId='R' profile={profile} />,
  S: (profile) => <TemplateS templateId='S' profile={profile} />,
  T: (profile) => <TemplateT templateId='T' profile={profile} />,
  U: (profile) => <TemplateU templateId='U' profile={profile} />,
  V: (profile) => <TemplateV templateId='V' profile={profile} />,
  W: (profile) => <TemplateW templateId='W' profile={profile} />,
}

function selectTemplate(templateId, profile) {
  return jsxComponents[templateId](profile)
}

export const getHtml = async (selectedTemplateId, profile) => {
  return ReactDOMServer.renderToStaticMarkup(selectTemplate(selectedTemplateId, profile))
}
