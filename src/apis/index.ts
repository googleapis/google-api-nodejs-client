// Copyright 2012-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

import {getAPI, ServiceOptions} from '../shared/src';

import * as abusiveexperiencereport from './abusiveexperiencereport';
import * as acceleratedmobilepageurl from './acceleratedmobilepageurl';
import * as adexchangebuyer from './adexchangebuyer';
import * as adexchangebuyer2 from './adexchangebuyer2';
import * as adexchangeseller from './adexchangeseller';
import * as adexperiencereport from './adexperiencereport';
import * as admin from './admin';
import * as adsense from './adsense';
import * as adsensehost from './adsensehost';
import * as analytics from './analytics';
import * as analyticsreporting from './analyticsreporting';
import * as androiddeviceprovisioning from './androiddeviceprovisioning';
import * as androidenterprise from './androidenterprise';
import * as androidmanagement from './androidmanagement';
import * as androidpublisher from './androidpublisher';
import * as appengine from './appengine';
import * as appsactivity from './appsactivity';
import * as appstate from './appstate';
import * as bigquery from './bigquery';
import * as bigquerydatatransfer from './bigquerydatatransfer';
import * as blogger from './blogger';
import * as books from './books';
import * as calendar from './calendar';
import * as chat from './chat';
import * as civicinfo from './civicinfo';
import * as classroom from './classroom';
import * as cloudbilling from './cloudbilling';
import * as cloudbuild from './cloudbuild';
import * as clouddebugger from './clouddebugger';
import * as clouderrorreporting from './clouderrorreporting';
import * as cloudfunctions from './cloudfunctions';
import * as cloudiot from './cloudiot';
import * as cloudkms from './cloudkms';
import * as cloudresourcemanager from './cloudresourcemanager';
import * as cloudshell from './cloudshell';
import * as cloudtasks from './cloudtasks';
import * as cloudtrace from './cloudtrace';
import * as composer from './composer';
import * as compute from './compute';
import * as container from './container';
import * as content from './content';
import * as customsearch from './customsearch';
import * as dataflow from './dataflow';
import * as dataproc from './dataproc';
import * as datastore from './datastore';
import * as deploymentmanager from './deploymentmanager';
import * as dfareporting from './dfareporting';
import * as dialogflow from './dialogflow';
import * as digitalassetlinks from './digitalassetlinks';
import * as discovery from './discovery';
import * as dlp from './dlp';
import * as dns from './dns';
import * as doubleclickbidmanager from './doubleclickbidmanager';
import * as doubleclicksearch from './doubleclicksearch';
import * as drive from './drive';
import * as firebasedynamiclinks from './firebasedynamiclinks';
import * as firebaserules from './firebaserules';
import * as firestore from './firestore';
import * as fitness from './fitness';
import * as fusiontables from './fusiontables';
import * as games from './games';
import * as gamesConfiguration from './gamesConfiguration';
import * as gamesManagement from './gamesManagement';
import * as genomics from './genomics';
import * as gmail from './gmail';
import * as groupsmigration from './groupsmigration';
import * as groupssettings from './groupssettings';
import * as iam from './iam';
import * as identitytoolkit from './identitytoolkit';
import * as jobs from './jobs';
import * as kgsearch from './kgsearch';
import * as language from './language';
import * as licensing from './licensing';
import * as logging from './logging';
import * as manufacturers from './manufacturers';
import * as mirror from './mirror';
import * as ml from './ml';
import * as monitoring from './monitoring';
import * as oauth2 from './oauth2';
import * as oslogin from './oslogin';
import * as pagespeedonline from './pagespeedonline';
import * as partners from './partners';
import * as people from './people';
import * as playcustomapp from './playcustomapp';
import * as plus from './plus';
import * as plusDomains from './plusDomains';
import * as poly from './poly';
import * as proximitybeacon from './proximitybeacon';
import * as pubsub from './pubsub';
import * as redis from './redis';
import * as replicapool from './replicapool';
import * as replicapoolupdater from './replicapoolupdater';
import * as reseller from './reseller';
import * as runtimeconfig from './runtimeconfig';
import * as safebrowsing from './safebrowsing';
import * as script from './script';
import * as searchconsole from './searchconsole';
import * as servicebroker from './servicebroker';
import * as serviceconsumermanagement from './serviceconsumermanagement';
import * as servicecontrol from './servicecontrol';
import * as servicemanagement from './servicemanagement';
import * as serviceusage from './serviceusage';
import * as serviceuser from './serviceuser';
import * as sheets from './sheets';
import * as siteVerification from './siteVerification';
import * as slides from './slides';
import * as sourcerepo from './sourcerepo';
import * as spanner from './spanner';
import * as spectrum from './spectrum';
import * as speech from './speech';
import * as sqladmin from './sqladmin';
import * as storage from './storage';
import * as storagetransfer from './storagetransfer';
import * as streetviewpublish from './streetviewpublish';
import * as surveys from './surveys';
import * as tagmanager from './tagmanager';
import * as tasks from './tasks';
import * as testing from './testing';
import * as texttospeech from './texttospeech';
import * as toolresults from './toolresults';
import * as tpu from './tpu';
import * as translate from './translate';
import * as urlshortener from './urlshortener';
import * as vault from './vault';
import * as videointelligence from './videointelligence';
import * as vision from './vision';
import * as webfonts from './webfonts';
import * as webmasters from './webmasters';
import * as websecurityscanner from './websecurityscanner';
import * as youtube from './youtube';
import * as youtubeAnalytics from './youtubeAnalytics';
import * as youtubereporting from './youtubereporting';

export interface APIList {
  // tslint:disable-next-line: no-any
  [index: string]: {[index: string]: any};
}

export const APIS: APIList = {
  abusiveexperiencereport: abusiveexperiencereport.VERSIONS,
  acceleratedmobilepageurl: acceleratedmobilepageurl.VERSIONS,
  adexchangebuyer: adexchangebuyer.VERSIONS,
  adexchangebuyer2: adexchangebuyer2.VERSIONS,
  adexchangeseller: adexchangeseller.VERSIONS,
  adexperiencereport: adexperiencereport.VERSIONS,
  admin: admin.VERSIONS,
  adsense: adsense.VERSIONS,
  adsensehost: adsensehost.VERSIONS,
  analytics: analytics.VERSIONS,
  analyticsreporting: analyticsreporting.VERSIONS,
  androiddeviceprovisioning: androiddeviceprovisioning.VERSIONS,
  androidenterprise: androidenterprise.VERSIONS,
  androidmanagement: androidmanagement.VERSIONS,
  androidpublisher: androidpublisher.VERSIONS,
  appengine: appengine.VERSIONS,
  appsactivity: appsactivity.VERSIONS,
  appstate: appstate.VERSIONS,
  bigquery: bigquery.VERSIONS,
  bigquerydatatransfer: bigquerydatatransfer.VERSIONS,
  blogger: blogger.VERSIONS,
  books: books.VERSIONS,
  calendar: calendar.VERSIONS,
  chat: chat.VERSIONS,
  civicinfo: civicinfo.VERSIONS,
  classroom: classroom.VERSIONS,
  cloudbilling: cloudbilling.VERSIONS,
  cloudbuild: cloudbuild.VERSIONS,
  clouddebugger: clouddebugger.VERSIONS,
  clouderrorreporting: clouderrorreporting.VERSIONS,
  cloudfunctions: cloudfunctions.VERSIONS,
  cloudiot: cloudiot.VERSIONS,
  cloudkms: cloudkms.VERSIONS,
  cloudresourcemanager: cloudresourcemanager.VERSIONS,
  cloudshell: cloudshell.VERSIONS,
  cloudtasks: cloudtasks.VERSIONS,
  cloudtrace: cloudtrace.VERSIONS,
  composer: composer.VERSIONS,
  compute: compute.VERSIONS,
  container: container.VERSIONS,
  content: content.VERSIONS,
  customsearch: customsearch.VERSIONS,
  dataflow: dataflow.VERSIONS,
  dataproc: dataproc.VERSIONS,
  datastore: datastore.VERSIONS,
  deploymentmanager: deploymentmanager.VERSIONS,
  dfareporting: dfareporting.VERSIONS,
  dialogflow: dialogflow.VERSIONS,
  digitalassetlinks: digitalassetlinks.VERSIONS,
  discovery: discovery.VERSIONS,
  dlp: dlp.VERSIONS,
  dns: dns.VERSIONS,
  doubleclickbidmanager: doubleclickbidmanager.VERSIONS,
  doubleclicksearch: doubleclicksearch.VERSIONS,
  drive: drive.VERSIONS,
  firebasedynamiclinks: firebasedynamiclinks.VERSIONS,
  firebaserules: firebaserules.VERSIONS,
  firestore: firestore.VERSIONS,
  fitness: fitness.VERSIONS,
  fusiontables: fusiontables.VERSIONS,
  games: games.VERSIONS,
  gamesConfiguration: gamesConfiguration.VERSIONS,
  gamesManagement: gamesManagement.VERSIONS,
  genomics: genomics.VERSIONS,
  gmail: gmail.VERSIONS,
  groupsmigration: groupsmigration.VERSIONS,
  groupssettings: groupssettings.VERSIONS,
  iam: iam.VERSIONS,
  identitytoolkit: identitytoolkit.VERSIONS,
  jobs: jobs.VERSIONS,
  kgsearch: kgsearch.VERSIONS,
  language: language.VERSIONS,
  licensing: licensing.VERSIONS,
  logging: logging.VERSIONS,
  manufacturers: manufacturers.VERSIONS,
  mirror: mirror.VERSIONS,
  ml: ml.VERSIONS,
  monitoring: monitoring.VERSIONS,
  oauth2: oauth2.VERSIONS,
  oslogin: oslogin.VERSIONS,
  pagespeedonline: pagespeedonline.VERSIONS,
  partners: partners.VERSIONS,
  people: people.VERSIONS,
  playcustomapp: playcustomapp.VERSIONS,
  plus: plus.VERSIONS,
  plusDomains: plusDomains.VERSIONS,
  poly: poly.VERSIONS,
  proximitybeacon: proximitybeacon.VERSIONS,
  pubsub: pubsub.VERSIONS,
  redis: redis.VERSIONS,
  replicapool: replicapool.VERSIONS,
  replicapoolupdater: replicapoolupdater.VERSIONS,
  reseller: reseller.VERSIONS,
  runtimeconfig: runtimeconfig.VERSIONS,
  safebrowsing: safebrowsing.VERSIONS,
  script: script.VERSIONS,
  searchconsole: searchconsole.VERSIONS,
  servicebroker: servicebroker.VERSIONS,
  serviceconsumermanagement: serviceconsumermanagement.VERSIONS,
  servicecontrol: servicecontrol.VERSIONS,
  servicemanagement: servicemanagement.VERSIONS,
  serviceusage: serviceusage.VERSIONS,
  serviceuser: serviceuser.VERSIONS,
  sheets: sheets.VERSIONS,
  siteVerification: siteVerification.VERSIONS,
  slides: slides.VERSIONS,
  sourcerepo: sourcerepo.VERSIONS,
  spanner: spanner.VERSIONS,
  spectrum: spectrum.VERSIONS,
  speech: speech.VERSIONS,
  sqladmin: sqladmin.VERSIONS,
  storage: storage.VERSIONS,
  storagetransfer: storagetransfer.VERSIONS,
  streetviewpublish: streetviewpublish.VERSIONS,
  surveys: surveys.VERSIONS,
  tagmanager: tagmanager.VERSIONS,
  tasks: tasks.VERSIONS,
  testing: testing.VERSIONS,
  texttospeech: texttospeech.VERSIONS,
  toolresults: toolresults.VERSIONS,
  tpu: tpu.VERSIONS,
  translate: translate.VERSIONS,
  urlshortener: urlshortener.VERSIONS,
  vault: vault.VERSIONS,
  videointelligence: videointelligence.VERSIONS,
  vision: vision.VERSIONS,
  webfonts: webfonts.VERSIONS,
  webmasters: webmasters.VERSIONS,
  websecurityscanner: websecurityscanner.VERSIONS,
  youtube: youtube.VERSIONS,
  youtubeAnalytics: youtubeAnalytics.VERSIONS,
  youtubereporting: youtubereporting.VERSIONS,
};

export class GeneratedAPIs {
  abusiveexperiencereport =
      abusiveexperiencereport.abusiveexperiencereport.bind(this);
  acceleratedmobilepageurl =
      acceleratedmobilepageurl.acceleratedmobilepageurl.bind(this);
  adexchangebuyer = adexchangebuyer.adexchangebuyer.bind(this);
  adexchangebuyer2 = adexchangebuyer2.adexchangebuyer2.bind(this);
  adexchangeseller = adexchangeseller.adexchangeseller.bind(this);
  adexperiencereport = adexperiencereport.adexperiencereport.bind(this);
  admin = admin.admin.bind(this);
  adsense = adsense.adsense.bind(this);
  adsensehost = adsensehost.adsensehost.bind(this);
  analytics = analytics.analytics.bind(this);
  analyticsreporting = analyticsreporting.analyticsreporting.bind(this);
  androiddeviceprovisioning =
      androiddeviceprovisioning.androiddeviceprovisioning.bind(this);
  androidenterprise = androidenterprise.androidenterprise.bind(this);
  androidmanagement = androidmanagement.androidmanagement.bind(this);
  androidpublisher = androidpublisher.androidpublisher.bind(this);
  appengine = appengine.appengine.bind(this);
  appsactivity = appsactivity.appsactivity.bind(this);
  appstate = appstate.appstate.bind(this);
  bigquery = bigquery.bigquery.bind(this);
  bigquerydatatransfer = bigquerydatatransfer.bigquerydatatransfer.bind(this);
  blogger = blogger.blogger.bind(this);
  books = books.books.bind(this);
  calendar = calendar.calendar.bind(this);
  chat = chat.chat.bind(this);
  civicinfo = civicinfo.civicinfo.bind(this);
  classroom = classroom.classroom.bind(this);
  cloudbilling = cloudbilling.cloudbilling.bind(this);
  cloudbuild = cloudbuild.cloudbuild.bind(this);
  clouddebugger = clouddebugger.clouddebugger.bind(this);
  clouderrorreporting = clouderrorreporting.clouderrorreporting.bind(this);
  cloudfunctions = cloudfunctions.cloudfunctions.bind(this);
  cloudiot = cloudiot.cloudiot.bind(this);
  cloudkms = cloudkms.cloudkms.bind(this);
  cloudresourcemanager = cloudresourcemanager.cloudresourcemanager.bind(this);
  cloudshell = cloudshell.cloudshell.bind(this);
  cloudtasks = cloudtasks.cloudtasks.bind(this);
  cloudtrace = cloudtrace.cloudtrace.bind(this);
  composer = composer.composer.bind(this);
  compute = compute.compute.bind(this);
  container = container.container.bind(this);
  content = content.content.bind(this);
  customsearch = customsearch.customsearch.bind(this);
  dataflow = dataflow.dataflow.bind(this);
  dataproc = dataproc.dataproc.bind(this);
  datastore = datastore.datastore.bind(this);
  deploymentmanager = deploymentmanager.deploymentmanager.bind(this);
  dfareporting = dfareporting.dfareporting.bind(this);
  dialogflow = dialogflow.dialogflow.bind(this);
  digitalassetlinks = digitalassetlinks.digitalassetlinks.bind(this);
  discovery = discovery.discovery.bind(this);
  dlp = dlp.dlp.bind(this);
  dns = dns.dns.bind(this);
  doubleclickbidmanager =
      doubleclickbidmanager.doubleclickbidmanager.bind(this);
  doubleclicksearch = doubleclicksearch.doubleclicksearch.bind(this);
  drive = drive.drive.bind(this);
  firebasedynamiclinks = firebasedynamiclinks.firebasedynamiclinks.bind(this);
  firebaserules = firebaserules.firebaserules.bind(this);
  firestore = firestore.firestore.bind(this);
  fitness = fitness.fitness.bind(this);
  fusiontables = fusiontables.fusiontables.bind(this);
  games = games.games.bind(this);
  gamesConfiguration = gamesConfiguration.gamesConfiguration.bind(this);
  gamesManagement = gamesManagement.gamesManagement.bind(this);
  genomics = genomics.genomics.bind(this);
  gmail = gmail.gmail.bind(this);
  groupsmigration = groupsmigration.groupsmigration.bind(this);
  groupssettings = groupssettings.groupssettings.bind(this);
  iam = iam.iam.bind(this);
  identitytoolkit = identitytoolkit.identitytoolkit.bind(this);
  jobs = jobs.jobs.bind(this);
  kgsearch = kgsearch.kgsearch.bind(this);
  language = language.language.bind(this);
  licensing = licensing.licensing.bind(this);
  logging = logging.logging.bind(this);
  manufacturers = manufacturers.manufacturers.bind(this);
  mirror = mirror.mirror.bind(this);
  ml = ml.ml.bind(this);
  monitoring = monitoring.monitoring.bind(this);
  oauth2 = oauth2.oauth2.bind(this);
  oslogin = oslogin.oslogin.bind(this);
  pagespeedonline = pagespeedonline.pagespeedonline.bind(this);
  partners = partners.partners.bind(this);
  people = people.people.bind(this);
  playcustomapp = playcustomapp.playcustomapp.bind(this);
  plus = plus.plus.bind(this);
  plusDomains = plusDomains.plusDomains.bind(this);
  poly = poly.poly.bind(this);
  proximitybeacon = proximitybeacon.proximitybeacon.bind(this);
  pubsub = pubsub.pubsub.bind(this);
  redis = redis.redis.bind(this);
  replicapool = replicapool.replicapool.bind(this);
  replicapoolupdater = replicapoolupdater.replicapoolupdater.bind(this);
  reseller = reseller.reseller.bind(this);
  runtimeconfig = runtimeconfig.runtimeconfig.bind(this);
  safebrowsing = safebrowsing.safebrowsing.bind(this);
  script = script.script.bind(this);
  searchconsole = searchconsole.searchconsole.bind(this);
  servicebroker = servicebroker.servicebroker.bind(this);
  serviceconsumermanagement =
      serviceconsumermanagement.serviceconsumermanagement.bind(this);
  servicecontrol = servicecontrol.servicecontrol.bind(this);
  servicemanagement = servicemanagement.servicemanagement.bind(this);
  serviceusage = serviceusage.serviceusage.bind(this);
  serviceuser = serviceuser.serviceuser.bind(this);
  sheets = sheets.sheets.bind(this);
  siteVerification = siteVerification.siteVerification.bind(this);
  slides = slides.slides.bind(this);
  sourcerepo = sourcerepo.sourcerepo.bind(this);
  spanner = spanner.spanner.bind(this);
  spectrum = spectrum.spectrum.bind(this);
  speech = speech.speech.bind(this);
  sqladmin = sqladmin.sqladmin.bind(this);
  storage = storage.storage.bind(this);
  storagetransfer = storagetransfer.storagetransfer.bind(this);
  streetviewpublish = streetviewpublish.streetviewpublish.bind(this);
  surveys = surveys.surveys.bind(this);
  tagmanager = tagmanager.tagmanager.bind(this);
  tasks = tasks.tasks.bind(this);
  testing = testing.testing.bind(this);
  texttospeech = texttospeech.texttospeech.bind(this);
  toolresults = toolresults.toolresults.bind(this);
  tpu = tpu.tpu.bind(this);
  translate = translate.translate.bind(this);
  urlshortener = urlshortener.urlshortener.bind(this);
  vault = vault.vault.bind(this);
  videointelligence = videointelligence.videointelligence.bind(this);
  vision = vision.vision.bind(this);
  webfonts = webfonts.webfonts.bind(this);
  webmasters = webmasters.webmasters.bind(this);
  websecurityscanner = websecurityscanner.websecurityscanner.bind(this);
  youtube = youtube.youtube.bind(this);
  youtubeAnalytics = youtubeAnalytics.youtubeAnalytics.bind(this);
  youtubereporting = youtubereporting.youtubereporting.bind(this);
}
