const { authenticate } = require('ldap-authentication')


const sh = require('shelljs')

async function auth() {
  // auth with admin
  let server = "localhost:5389"
  
  let options = {
    ldapOpts: {
      url: 'ldap://' + server,
      // tlsOptions: { rejectUnauthorized: false }
    },
    adminDn: 'cn=read-only-admin,dc=tab,dc=local',
    adminPassword: 'password',
    userPassword: 'password',
    userSearchBase: 'dc=tab,dc=local',
    usernameAttribute: 'uid',
    username: 'cloud',
    // starttls: false
  }

  let user = await authenticate(options)
  console.log(user)

  // auth with regular user
  options = {
    ldapOpts: {
      url: 'ldap://ldap.forumsys.com',
      // tlsOptions: { rejectUnauthorized: false }
    },
    userDn: 'uid=terminal,dc=tab,dc=local',
    userPassword: process.env.
    ,
    userSearchBase: 'dc=tab,dc=local',
    usernameAttribute: 'uid',
    username: 'tpa',
    // starttls: false
  }

  user = await authenticate(options)
  console.log(user)
}

auth()
