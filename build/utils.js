'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.handleErrorMessage=handleErrorMessage;function handleErrorMessage(errorCode,error){switch(errorCode){case 5:throw new Error('Login error, VPN ?');case 12:throw new Error('Invalid login');case 11:throw new Error('Two-factor authentication needed: '+error.error.verification_url);default:throw new Error(error);}}