import sso from "../sso.png";
import finance from "../finance.png";
import hmrs from "../hmrs.png";


export const integrationsData = [
    {
      "title": "HRMS Systems",
      "description": "We can integrate with any HRMS as long as the employee master can be made available to us over SFTP/API. We are already deeply integrated with PeopleStrong and others are coming up.",
      "image_source": `${hmrs}`,
      "type":"hrms"
    },
    {
      "title": "Finance Systems",
      "description": "Connect us with your finance systems to get all cost centers mapped, and all data reconciled on a periodic/regular basis. Open APIs available to connect.",
      "image_source": `${finance}`,
      "type":"finance"
    },
    {
      "title": "Single Sign-on Systems",
      "description": "We can integrate to ensure that your users don’t have to log in multiple times into different logins. SSO is possible with any system that offers it.",
      "image_source": `${sso}`,
      "type":"sso"
    }
  ]
  