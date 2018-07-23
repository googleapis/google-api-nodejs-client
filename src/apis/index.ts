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
import * as cloudprofiler from './cloudprofiler';
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
import * as iamcredentials from './iamcredentials';
import * as iap from './iap';
import * as identitytoolkit from './identitytoolkit';
import * as indexing from './indexing';
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
  cloudprofiler: cloudprofiler.VERSIONS,
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
  iamcredentials: iamcredentials.VERSIONS,
  iap: iap.VERSIONS,
  identitytoolkit: identitytoolkit.VERSIONS,
  indexing: indexing.VERSIONS,
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
  abusiveexperiencereport = abusiveexperiencereport.abusiveexperiencereport;
  acceleratedmobilepageurl = acceleratedmobilepageurl.acceleratedmobilepageurl;
  adexchangebuyer = adexchangebuyer.adexchangebuyer;
  adexchangebuyer2 = adexchangebuyer2.adexchangebuyer2;
  adexchangeseller = adexchangeseller.adexchangeseller;
  adexperiencereport = adexperiencereport.adexperiencereport;
  admin = admin.admin;
  adsense = adsense.adsense;
  adsensehost = adsensehost.adsensehost;
  analytics = analytics.analytics;
  analyticsreporting = analyticsreporting.analyticsreporting;
  androiddeviceprovisioning =
      androiddeviceprovisioning.androiddeviceprovisioning;
  androidenterprise = androidenterprise.androidenterprise;
  androidmanagement = androidmanagement.androidmanagement;
  androidpublisher = androidpublisher.androidpublisher;
  appengine = appengine.appengine;
  appsactivity = appsactivity.appsactivity;
  appstate = appstate.appstate;
  bigquery = bigquery.bigquery;
  bigquerydatatransfer = bigquerydatatransfer.bigquerydatatransfer;
  blogger = blogger.blogger;
  books = books.books;
  calendar = calendar.calendar;
  chat = chat.chat;
  civicinfo = civicinfo.civicinfo;
  classroom = classroom.classroom;
  cloudbilling = cloudbilling.cloudbilling;
  cloudbuild = cloudbuild.cloudbuild;
  clouddebugger = clouddebugger.clouddebugger;
  clouderrorreporting = clouderrorreporting.clouderrorreporting;
  cloudfunctions = cloudfunctions.cloudfunctions;
  cloudiot = cloudiot.cloudiot;
  cloudkms = cloudkms.cloudkms;
  cloudprofiler = cloudprofiler.cloudprofiler;
  cloudresourcemanager = cloudresourcemanager.cloudresourcemanager;
  cloudshell = cloudshell.cloudshell;
  cloudtasks = cloudtasks.cloudtasks;
  cloudtrace = cloudtrace.cloudtrace;
  composer = composer.composer;
  compute = compute.compute;
  container = container.container;
  content = content.content;
  customsearch = customsearch.customsearch;
  dataflow = dataflow.dataflow;
  dataproc = dataproc.dataproc;
  datastore = datastore.datastore;
  deploymentmanager = deploymentmanager.deploymentmanager;
  dfareporting = dfareporting.dfareporting;
  dialogflow = dialogflow.dialogflow;
  digitalassetlinks = digitalassetlinks.digitalassetlinks;
  discovery = discovery.discovery;
  dlp = dlp.dlp;
  dns = dns.dns;
  doubleclickbidmanager = doubleclickbidmanager.doubleclickbidmanager;
  doubleclicksearch = doubleclicksearch.doubleclicksearch;
  drive = drive.drive;
  firebasedynamiclinks = firebasedynamiclinks.firebasedynamiclinks;
  firebaserules = firebaserules.firebaserules;
  firestore = firestore.firestore;
  fitness = fitness.fitness;
  fusiontables = fusiontables.fusiontables;
  games = games.games;
  gamesConfiguration = gamesConfiguration.gamesConfiguration;
  gamesManagement = gamesManagement.gamesManagement;
  genomics = genomics.genomics;
  gmail = gmail.gmail;
  groupsmigration = groupsmigration.groupsmigration;
  groupssettings = groupssettings.groupssettings;
  iam = iam.iam;
  iamcredentials = iamcredentials.iamcredentials;
  iap = iap.iap;
  identitytoolkit = identitytoolkit.identitytoolkit;
  indexing = indexing.indexing;
  jobs = jobs.jobs;
  kgsearch = kgsearch.kgsearch;
  language = language.language;
  licensing = licensing.licensing;
  logging = logging.logging;
  manufacturers = manufacturers.manufacturers;
  mirror = mirror.mirror;
  ml = ml.ml;
  monitoring = monitoring.monitoring;
  oauth2 = oauth2.oauth2;
  oslogin = oslogin.oslogin;
  pagespeedonline = pagespeedonline.pagespeedonline;
  partners = partners.partners;
  people = people.people;
  playcustomapp = playcustomapp.playcustomapp;
  plus = plus.plus;
  plusDomains = plusDomains.plusDomains;
  poly = poly.poly;
  proximitybeacon = proximitybeacon.proximitybeacon;
  pubsub = pubsub.pubsub;
  redis = redis.redis;
  replicapool = replicapool.replicapool;
  replicapoolupdater = replicapoolupdater.replicapoolupdater;
  reseller = reseller.reseller;
  runtimeconfig = runtimeconfig.runtimeconfig;
  safebrowsing = safebrowsing.safebrowsing;
  script = script.script;
  searchconsole = searchconsole.searchconsole;
  servicebroker = servicebroker.servicebroker;
  serviceconsumermanagement =
      serviceconsumermanagement.serviceconsumermanagement;
  servicecontrol = servicecontrol.servicecontrol;
  servicemanagement = servicemanagement.servicemanagement;
  serviceusage = serviceusage.serviceusage;
  serviceuser = serviceuser.serviceuser;
  sheets = sheets.sheets;
  siteVerification = siteVerification.siteVerification;
  slides = slides.slides;
  sourcerepo = sourcerepo.sourcerepo;
  spanner = spanner.spanner;
  spectrum = spectrum.spectrum;
  speech = speech.speech;
  sqladmin = sqladmin.sqladmin;
  storage = storage.storage;
  storagetransfer = storagetransfer.storagetransfer;
  streetviewpublish = streetviewpublish.streetviewpublish;
  surveys = surveys.surveys;
  tagmanager = tagmanager.tagmanager;
  tasks = tasks.tasks;
  testing = testing.testing;
  texttospeech = texttospeech.texttospeech;
  toolresults = toolresults.toolresults;
  tpu = tpu.tpu;
  translate = translate.translate;
  urlshortener = urlshortener.urlshortener;
  vault = vault.vault;
  videointelligence = videointelligence.videointelligence;
  vision = vision.vision;
  webfonts = webfonts.webfonts;
  webmasters = webmasters.webmasters;
  websecurityscanner = websecurityscanner.websecurityscanner;
  youtube = youtube.youtube;
  youtubeAnalytics = youtubeAnalytics.youtubeAnalytics;
  youtubereporting = youtubereporting.youtubereporting;
  constructor() {
    this.abusiveexperiencereport = this.abusiveexperiencereport.bind(this);
    this.acceleratedmobilepageurl = this.acceleratedmobilepageurl.bind(this);
    this.adexchangebuyer = this.adexchangebuyer.bind(this);
    this.adexchangebuyer2 = this.adexchangebuyer2.bind(this);
    this.adexchangeseller = this.adexchangeseller.bind(this);
    this.adexperiencereport = this.adexperiencereport.bind(this);
    this.admin = this.admin.bind(this);
    this.adsense = this.adsense.bind(this);
    this.adsensehost = this.adsensehost.bind(this);
    this.analytics = this.analytics.bind(this);
    this.analyticsreporting = this.analyticsreporting.bind(this);
    this.androiddeviceprovisioning = this.androiddeviceprovisioning.bind(this);
    this.androidenterprise = this.androidenterprise.bind(this);
    this.androidmanagement = this.androidmanagement.bind(this);
    this.androidpublisher = this.androidpublisher.bind(this);
    this.appengine = this.appengine.bind(this);
    this.appsactivity = this.appsactivity.bind(this);
    this.appstate = this.appstate.bind(this);
    this.bigquery = this.bigquery.bind(this);
    this.bigquerydatatransfer = this.bigquerydatatransfer.bind(this);
    this.blogger = this.blogger.bind(this);
    this.books = this.books.bind(this);
    this.calendar = this.calendar.bind(this);
    this.chat = this.chat.bind(this);
    this.civicinfo = this.civicinfo.bind(this);
    this.classroom = this.classroom.bind(this);
    this.cloudbilling = this.cloudbilling.bind(this);
    this.cloudbuild = this.cloudbuild.bind(this);
    this.clouddebugger = this.clouddebugger.bind(this);
    this.clouderrorreporting = this.clouderrorreporting.bind(this);
    this.cloudfunctions = this.cloudfunctions.bind(this);
    this.cloudiot = this.cloudiot.bind(this);
    this.cloudkms = this.cloudkms.bind(this);
    this.cloudprofiler = this.cloudprofiler.bind(this);
    this.cloudresourcemanager = this.cloudresourcemanager.bind(this);
    this.cloudshell = this.cloudshell.bind(this);
    this.cloudtasks = this.cloudtasks.bind(this);
    this.cloudtrace = this.cloudtrace.bind(this);
    this.composer = this.composer.bind(this);
    this.compute = this.compute.bind(this);
    this.container = this.container.bind(this);
    this.content = this.content.bind(this);
    this.customsearch = this.customsearch.bind(this);
    this.dataflow = this.dataflow.bind(this);
    this.dataproc = this.dataproc.bind(this);
    this.datastore = this.datastore.bind(this);
    this.deploymentmanager = this.deploymentmanager.bind(this);
    this.dfareporting = this.dfareporting.bind(this);
    this.dialogflow = this.dialogflow.bind(this);
    this.digitalassetlinks = this.digitalassetlinks.bind(this);
    this.discovery = this.discovery.bind(this);
    this.dlp = this.dlp.bind(this);
    this.dns = this.dns.bind(this);
    this.doubleclickbidmanager = this.doubleclickbidmanager.bind(this);
    this.doubleclicksearch = this.doubleclicksearch.bind(this);
    this.drive = this.drive.bind(this);
    this.firebasedynamiclinks = this.firebasedynamiclinks.bind(this);
    this.firebaserules = this.firebaserules.bind(this);
    this.firestore = this.firestore.bind(this);
    this.fitness = this.fitness.bind(this);
    this.fusiontables = this.fusiontables.bind(this);
    this.games = this.games.bind(this);
    this.gamesConfiguration = this.gamesConfiguration.bind(this);
    this.gamesManagement = this.gamesManagement.bind(this);
    this.genomics = this.genomics.bind(this);
    this.gmail = this.gmail.bind(this);
    this.groupsmigration = this.groupsmigration.bind(this);
    this.groupssettings = this.groupssettings.bind(this);
    this.iam = this.iam.bind(this);
    this.iamcredentials = this.iamcredentials.bind(this);
    this.iap = this.iap.bind(this);
    this.identitytoolkit = this.identitytoolkit.bind(this);
    this.indexing = this.indexing.bind(this);
    this.jobs = this.jobs.bind(this);
    this.kgsearch = this.kgsearch.bind(this);
    this.language = this.language.bind(this);
    this.licensing = this.licensing.bind(this);
    this.logging = this.logging.bind(this);
    this.manufacturers = this.manufacturers.bind(this);
    this.mirror = this.mirror.bind(this);
    this.ml = this.ml.bind(this);
    this.monitoring = this.monitoring.bind(this);
    this.oauth2 = this.oauth2.bind(this);
    this.oslogin = this.oslogin.bind(this);
    this.pagespeedonline = this.pagespeedonline.bind(this);
    this.partners = this.partners.bind(this);
    this.people = this.people.bind(this);
    this.playcustomapp = this.playcustomapp.bind(this);
    this.plus = this.plus.bind(this);
    this.plusDomains = this.plusDomains.bind(this);
    this.poly = this.poly.bind(this);
    this.proximitybeacon = this.proximitybeacon.bind(this);
    this.pubsub = this.pubsub.bind(this);
    this.redis = this.redis.bind(this);
    this.replicapool = this.replicapool.bind(this);
    this.replicapoolupdater = this.replicapoolupdater.bind(this);
    this.reseller = this.reseller.bind(this);
    this.runtimeconfig = this.runtimeconfig.bind(this);
    this.safebrowsing = this.safebrowsing.bind(this);
    this.script = this.script.bind(this);
    this.searchconsole = this.searchconsole.bind(this);
    this.servicebroker = this.servicebroker.bind(this);
    this.serviceconsumermanagement = this.serviceconsumermanagement.bind(this);
    this.servicecontrol = this.servicecontrol.bind(this);
    this.servicemanagement = this.servicemanagement.bind(this);
    this.serviceusage = this.serviceusage.bind(this);
    this.serviceuser = this.serviceuser.bind(this);
    this.sheets = this.sheets.bind(this);
    this.siteVerification = this.siteVerification.bind(this);
    this.slides = this.slides.bind(this);
    this.sourcerepo = this.sourcerepo.bind(this);
    this.spanner = this.spanner.bind(this);
    this.spectrum = this.spectrum.bind(this);
    this.speech = this.speech.bind(this);
    this.sqladmin = this.sqladmin.bind(this);
    this.storage = this.storage.bind(this);
    this.storagetransfer = this.storagetransfer.bind(this);
    this.streetviewpublish = this.streetviewpublish.bind(this);
    this.surveys = this.surveys.bind(this);
    this.tagmanager = this.tagmanager.bind(this);
    this.tasks = this.tasks.bind(this);
    this.testing = this.testing.bind(this);
    this.texttospeech = this.texttospeech.bind(this);
    this.toolresults = this.toolresults.bind(this);
    this.tpu = this.tpu.bind(this);
    this.translate = this.translate.bind(this);
    this.urlshortener = this.urlshortener.bind(this);
    this.vault = this.vault.bind(this);
    this.videointelligence = this.videointelligence.bind(this);
    this.vision = this.vision.bind(this);
    this.webfonts = this.webfonts.bind(this);
    this.webmasters = this.webmasters.bind(this);
    this.websecurityscanner = this.websecurityscanner.bind(this);
    this.youtube = this.youtube.bind(this);
    this.youtubeAnalytics = this.youtubeAnalytics.bind(this);
    this.youtubereporting = this.youtubereporting.bind(this);
  }
}
