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

import * as path from 'path';
import * as util from 'util';

import {APIList, ServiceOptions} from '../lib/api';

const APIS: APIList = {
  abusiveexperiencereport: {
    'v1': require('./abusiveexperiencereport/v1'),
  },
  acceleratedmobilepageurl: {
    'v1': require('./acceleratedmobilepageurl/v1'),
  },
  adexchangebuyer: {
    'v1.2': require('./adexchangebuyer/v1.2'),
    'v1.3': require('./adexchangebuyer/v1.3'),
    'v1.4': require('./adexchangebuyer/v1.4'),
  },
  adexchangebuyer2: {
    'v2beta1': require('./adexchangebuyer2/v2beta1'),
  },
  adexchangeseller: {
    'v1.1': require('./adexchangeseller/v1.1'),
    'v1': require('./adexchangeseller/v1'),
    'v2.0': require('./adexchangeseller/v2.0'),
  },
  adexperiencereport: {
    'v1': require('./adexperiencereport/v1'),
  },
  admin: {
    'datatransfer_v1': require('./admin/datatransfer_v1'),
    'directory_v1': require('./admin/directory_v1'),
    'reports_v1': require('./admin/reports_v1'),
  },
  adsense: {
    'v1.4': require('./adsense/v1.4'),
  },
  adsensehost: {
    'v4.1': require('./adsensehost/v4.1'),
  },
  analytics: {
    'v2.4': require('./analytics/v2.4'),
    'v3': require('./analytics/v3'),
  },
  analyticsreporting: {
    'v4': require('./analyticsreporting/v4'),
  },
  androiddeviceprovisioning: {
    'v1': require('./androiddeviceprovisioning/v1'),
  },
  androidenterprise: {
    'v1': require('./androidenterprise/v1'),
  },
  androidmanagement: {
    'v1': require('./androidmanagement/v1'),
  },
  androidpublisher: {
    'v1.1': require('./androidpublisher/v1.1'),
    'v1': require('./androidpublisher/v1'),
    'v2': require('./androidpublisher/v2'),
  },
  appengine: {
    'v1': require('./appengine/v1'),
    'v1alpha': require('./appengine/v1alpha'),
    'v1beta': require('./appengine/v1beta'),
    'v1beta4': require('./appengine/v1beta4'),
    'v1beta5': require('./appengine/v1beta5'),
  },
  appsactivity: {
    'v1': require('./appsactivity/v1'),
  },
  appstate: {
    'v1': require('./appstate/v1'),
  },
  bigquery: {
    'v2': require('./bigquery/v2'),
  },
  bigquerydatatransfer: {
    'v1': require('./bigquerydatatransfer/v1'),
  },
  blogger: {
    'v2': require('./blogger/v2'),
    'v3': require('./blogger/v3'),
  },
  books: {
    'v1': require('./books/v1'),
  },
  calendar: {
    'v3': require('./calendar/v3'),
  },
  chat: {
    'v1': require('./chat/v1'),
  },
  civicinfo: {
    'v2': require('./civicinfo/v2'),
  },
  classroom: {
    'v1': require('./classroom/v1'),
  },
  cloudbilling: {
    'v1': require('./cloudbilling/v1'),
  },
  cloudbuild: {
    'v1': require('./cloudbuild/v1'),
  },
  clouddebugger: {
    'v2': require('./clouddebugger/v2'),
  },
  clouderrorreporting: {
    'v1beta1': require('./clouderrorreporting/v1beta1'),
  },
  cloudfunctions: {
    'v1': require('./cloudfunctions/v1'),
    'v1beta2': require('./cloudfunctions/v1beta2'),
  },
  cloudiot: {
    'v1': require('./cloudiot/v1'),
  },
  cloudkms: {
    'v1': require('./cloudkms/v1'),
  },
  cloudresourcemanager: {
    'v1': require('./cloudresourcemanager/v1'),
    'v1beta1': require('./cloudresourcemanager/v1beta1'),
    'v2beta1': require('./cloudresourcemanager/v2beta1'),
  },
  cloudshell: {
    'v1': require('./cloudshell/v1'),
    'v1alpha1': require('./cloudshell/v1alpha1'),
  },
  cloudtasks: {
    'v2beta2': require('./cloudtasks/v2beta2'),
  },
  cloudtrace: {
    'v1': require('./cloudtrace/v1'),
    'v2': require('./cloudtrace/v2'),
  },
  clouduseraccounts: {
    'alpha': require('./clouduseraccounts/alpha'),
    'beta': require('./clouduseraccounts/beta'),
    'vm_alpha': require('./clouduseraccounts/vm_alpha'),
    'vm_beta': require('./clouduseraccounts/vm_beta'),
  },
  compute: {
    'alpha': require('./compute/alpha'),
    'beta': require('./compute/beta'),
    'v1': require('./compute/v1'),
  },
  container: {
    'v1': require('./container/v1'),
    'v1beta1': require('./container/v1beta1'),
  },
  content: {
    'v2': require('./content/v2'),
    'v2sandbox': require('./content/v2sandbox'),
  },
  customsearch: {
    'v1': require('./customsearch/v1'),
  },
  dataflow: {
    'v1b3': require('./dataflow/v1b3'),
  },
  dataproc: {
    'v1': require('./dataproc/v1'),
    'v1beta2': require('./dataproc/v1beta2'),
  },
  datastore: {
    'v1': require('./datastore/v1'),
    'v1beta1': require('./datastore/v1beta1'),
    'v1beta3': require('./datastore/v1beta3'),
  },
  deploymentmanager: {
    'alpha': require('./deploymentmanager/alpha'),
    'v2': require('./deploymentmanager/v2'),
    'v2beta': require('./deploymentmanager/v2beta'),
  },
  dfareporting: {
    'v2.8': require('./dfareporting/v2.8'),
    'v3.0': require('./dfareporting/v3.0'),
  },
  dialogflow: {
    'v2beta1': require('./dialogflow/v2beta1'),
  },
  digitalassetlinks: {
    'v1': require('./digitalassetlinks/v1'),
  },
  discovery: {
    'v1': require('./discovery/v1'),
  },
  dlp: {
    'v2beta1': require('./dlp/v2beta1'),
    'v2beta2': require('./dlp/v2beta2'),
  },
  dns: {
    'v1': require('./dns/v1'),
    'v1beta2': require('./dns/v1beta2'),
    'v2beta1': require('./dns/v2beta1'),
  },
  doubleclickbidmanager: {
    'v1': require('./doubleclickbidmanager/v1'),
  },
  doubleclicksearch: {
    'v2': require('./doubleclicksearch/v2'),
  },
  drive: {
    'v2': require('./drive/v2'),
    'v3': require('./drive/v3'),
  },
  firebasedynamiclinks: {
    'v1': require('./firebasedynamiclinks/v1'),
  },
  firebaserules: {
    'v1': require('./firebaserules/v1'),
  },
  firestore: {
    'v1beta1': require('./firestore/v1beta1'),
  },
  fitness: {
    'v1': require('./fitness/v1'),
  },
  fusiontables: {
    'v1': require('./fusiontables/v1'),
    'v2': require('./fusiontables/v2'),
  },
  games: {
    'v1': require('./games/v1'),
  },
  gamesConfiguration: {
    'v1configuration': require('./gamesConfiguration/v1configuration'),
  },
  gamesManagement: {
    'v1management': require('./gamesManagement/v1management'),
  },
  genomics: {
    'v1': require('./genomics/v1'),
    'v1alpha2': require('./genomics/v1alpha2'),
    'v2alpha1': require('./genomics/v2alpha1'),
  },
  gmail: {
    'v1': require('./gmail/v1'),
  },
  groupsmigration: {
    'v1': require('./groupsmigration/v1'),
  },
  groupssettings: {
    'v1': require('./groupssettings/v1'),
  },
  iam: {
    'v1': require('./iam/v1'),
  },
  identitytoolkit: {
    'v3': require('./identitytoolkit/v3'),
  },
  kgsearch: {
    'v1': require('./kgsearch/v1'),
  },
  language: {
    'v1': require('./language/v1'),
    'v1beta1': require('./language/v1beta1'),
    'v1beta2': require('./language/v1beta2'),
  },
  licensing: {
    'v1': require('./licensing/v1'),
  },
  logging: {
    'v2': require('./logging/v2'),
    'v2beta1': require('./logging/v2beta1'),
  },
  manufacturers: {
    'v1': require('./manufacturers/v1'),
  },
  mirror: {
    'v1': require('./mirror/v1'),
  },
  ml: {
    'v1': require('./ml/v1'),
  },
  monitoring: {
    'v3': require('./monitoring/v3'),
  },
  oauth2: {
    'v1': require('./oauth2/v1'),
    'v2': require('./oauth2/v2'),
  },
  oslogin: {
    'v1': require('./oslogin/v1'),
    'v1alpha': require('./oslogin/v1alpha'),
    'v1beta': require('./oslogin/v1beta'),
  },
  pagespeedonline: {
    'v1': require('./pagespeedonline/v1'),
    'v2': require('./pagespeedonline/v2'),
  },
  partners: {
    'v2': require('./partners/v2'),
  },
  people: {
    'v1': require('./people/v1'),
  },
  playcustomapp: {
    'v1': require('./playcustomapp/v1'),
  },
  plus: {
    'v1': require('./plus/v1'),
  },
  plusDomains: {
    'v1': require('./plusDomains/v1'),
  },
  poly: {
    'v1': require('./poly/v1'),
  },
  prediction: {
    'v1.2': require('./prediction/v1.2'),
    'v1.3': require('./prediction/v1.3'),
    'v1.4': require('./prediction/v1.4'),
    'v1.5': require('./prediction/v1.5'),
    'v1.6': require('./prediction/v1.6'),
  },
  proximitybeacon: {
    'v1beta1': require('./proximitybeacon/v1beta1'),
  },
  pubsub: {
    'v1': require('./pubsub/v1'),
    'v1beta1a': require('./pubsub/v1beta1a'),
    'v1beta2': require('./pubsub/v1beta2'),
  },
  replicapool: {
    'v1beta1': require('./replicapool/v1beta1'),
    'v1beta2': require('./replicapool/v1beta2'),
  },
  replicapoolupdater: {
    'v1beta1': require('./replicapoolupdater/v1beta1'),
  },
  reseller: {
    'v1': require('./reseller/v1'),
  },
  resourceviews: {
    'v1beta1': require('./resourceviews/v1beta1'),
    'v1beta2': require('./resourceviews/v1beta2'),
  },
  runtimeconfig: {
    'v1': require('./runtimeconfig/v1'),
    'v1beta1': require('./runtimeconfig/v1beta1'),
  },
  safebrowsing: {
    'v4': require('./safebrowsing/v4'),
  },
  script: {
    'v1': require('./script/v1'),
  },
  searchconsole: {
    'v1': require('./searchconsole/v1'),
  },
  serviceconsumermanagement: {
    'v1': require('./serviceconsumermanagement/v1'),
  },
  servicecontrol: {
    'v1': require('./servicecontrol/v1'),
  },
  servicemanagement: {
    'v1': require('./servicemanagement/v1'),
  },
  serviceusage: {
    'v1': require('./serviceusage/v1'),
  },
  serviceuser: {
    'v1': require('./serviceuser/v1'),
  },
  sheets: {
    'v4': require('./sheets/v4'),
  },
  siteVerification: {
    'v1': require('./siteVerification/v1'),
  },
  slides: {
    'v1': require('./slides/v1'),
  },
  sourcerepo: {
    'v1': require('./sourcerepo/v1'),
  },
  spanner: {
    'v1': require('./spanner/v1'),
  },
  spectrum: {
    'v1explorer': require('./spectrum/v1explorer'),
  },
  speech: {
    'v1': require('./speech/v1'),
    'v1beta1': require('./speech/v1beta1'),
  },
  sqladmin: {
    'v1beta3': require('./sqladmin/v1beta3'),
    'v1beta4': require('./sqladmin/v1beta4'),
  },
  storage: {
    'v1': require('./storage/v1'),
    'v1beta1': require('./storage/v1beta1'),
    'v1beta2': require('./storage/v1beta2'),
  },
  storagetransfer: {
    'v1': require('./storagetransfer/v1'),
  },
  streetviewpublish: {
    'v1': require('./streetviewpublish/v1'),
  },
  surveys: {
    'v2': require('./surveys/v2'),
  },
  tagmanager: {
    'v1': require('./tagmanager/v1'),
    'v2': require('./tagmanager/v2'),
  },
  taskqueue: {
    'v1beta1': require('./taskqueue/v1beta1'),
    'v1beta2': require('./taskqueue/v1beta2'),
  },
  tasks: {
    'v1': require('./tasks/v1'),
  },
  testing: {
    'v1': require('./testing/v1'),
  },
  toolresults: {
    'v1beta3': require('./toolresults/v1beta3'),
  },
  tpu: {
    'v1alpha1': require('./tpu/v1alpha1'),
  },
  translate: {
    'v2': require('./translate/v2'),
  },
  urlshortener: {
    'v1': require('./urlshortener/v1'),
  },
  vault: {
    'v1': require('./vault/v1'),
  },
  videointelligence: {
    'v1beta1': require('./videointelligence/v1beta1'),
  },
  vision: {
    'v1': require('./vision/v1'),
    'v1p1beta1': require('./vision/v1p1beta1'),
    'v1p2beta1': require('./vision/v1p2beta1'),
  },
  webfonts: {
    'v1': require('./webfonts/v1'),
  },
  webmasters: {
    'v3': require('./webmasters/v3'),
  },
  youtube: {
    'v3': require('./youtube/v3'),
  },
  youtubeAnalytics: {
    'v1': require('./youtubeAnalytics/v1'),
    'v1beta1': require('./youtubeAnalytics/v1beta1'),
  },
  youtubereporting: {
    'v1': require('./youtubereporting/v1'),
  },
};

function getAPI(api: string, options: ServiceOptions|string) {
  let version: string;
  if (typeof options === 'string') {
    version = options;
    options = {};
  } else if (typeof options === 'object') {
    version = options.version!;
    delete options.version;
  } else {
    throw new Error('Argument error: Accepts only string or object');
  }
  try {
    const endpoint = APIS[api][path.basename(version)];
    const ep = new endpoint(options);
    ep.google = this;          // for drive.google.transporter
    return Object.freeze(ep);  // create new & freeze
  } catch (e) {
    throw new Error(
        `Unable to load endpoint ${api}("${version}"): ${e.message}`);
  }
}

export class GeneratedAPIs {
  abusiveexperiencereport(options: ServiceOptions|string) {
    return getAPI.call(this, 'abusiveexperiencereport', options);
  }
  acceleratedmobilepageurl(options: ServiceOptions|string) {
    return getAPI.call(this, 'acceleratedmobilepageurl', options);
  }
  adexchangebuyer(options: ServiceOptions|string) {
    return getAPI.call(this, 'adexchangebuyer', options);
  }
  adexchangebuyer2(options: ServiceOptions|string) {
    return getAPI.call(this, 'adexchangebuyer2', options);
  }
  adexchangeseller(options: ServiceOptions|string) {
    return getAPI.call(this, 'adexchangeseller', options);
  }
  adexperiencereport(options: ServiceOptions|string) {
    return getAPI.call(this, 'adexperiencereport', options);
  }
  admin(options: ServiceOptions|string) {
    return getAPI.call(this, 'admin', options);
  }
  adsense(options: ServiceOptions|string) {
    return getAPI.call(this, 'adsense', options);
  }
  adsensehost(options: ServiceOptions|string) {
    return getAPI.call(this, 'adsensehost', options);
  }
  analytics(options: ServiceOptions|string) {
    return getAPI.call(this, 'analytics', options);
  }
  analyticsreporting(options: ServiceOptions|string) {
    return getAPI.call(this, 'analyticsreporting', options);
  }
  androiddeviceprovisioning(options: ServiceOptions|string) {
    return getAPI.call(this, 'androiddeviceprovisioning', options);
  }
  androidenterprise(options: ServiceOptions|string) {
    return getAPI.call(this, 'androidenterprise', options);
  }
  androidmanagement(options: ServiceOptions|string) {
    return getAPI.call(this, 'androidmanagement', options);
  }
  androidpublisher(options: ServiceOptions|string) {
    return getAPI.call(this, 'androidpublisher', options);
  }
  appengine(options: ServiceOptions|string) {
    return getAPI.call(this, 'appengine', options);
  }
  appsactivity(options: ServiceOptions|string) {
    return getAPI.call(this, 'appsactivity', options);
  }
  appstate(options: ServiceOptions|string) {
    return getAPI.call(this, 'appstate', options);
  }
  bigquery(options: ServiceOptions|string) {
    return getAPI.call(this, 'bigquery', options);
  }
  bigquerydatatransfer(options: ServiceOptions|string) {
    return getAPI.call(this, 'bigquerydatatransfer', options);
  }
  blogger(options: ServiceOptions|string) {
    return getAPI.call(this, 'blogger', options);
  }
  books(options: ServiceOptions|string) {
    return getAPI.call(this, 'books', options);
  }
  calendar(options: ServiceOptions|string) {
    return getAPI.call(this, 'calendar', options);
  }
  chat(options: ServiceOptions|string) {
    return getAPI.call(this, 'chat', options);
  }
  civicinfo(options: ServiceOptions|string) {
    return getAPI.call(this, 'civicinfo', options);
  }
  classroom(options: ServiceOptions|string) {
    return getAPI.call(this, 'classroom', options);
  }
  cloudbilling(options: ServiceOptions|string) {
    return getAPI.call(this, 'cloudbilling', options);
  }
  cloudbuild(options: ServiceOptions|string) {
    return getAPI.call(this, 'cloudbuild', options);
  }
  clouddebugger(options: ServiceOptions|string) {
    return getAPI.call(this, 'clouddebugger', options);
  }
  clouderrorreporting(options: ServiceOptions|string) {
    return getAPI.call(this, 'clouderrorreporting', options);
  }
  cloudfunctions(options: ServiceOptions|string) {
    return getAPI.call(this, 'cloudfunctions', options);
  }
  cloudiot(options: ServiceOptions|string) {
    return getAPI.call(this, 'cloudiot', options);
  }
  cloudkms(options: ServiceOptions|string) {
    return getAPI.call(this, 'cloudkms', options);
  }
  cloudresourcemanager(options: ServiceOptions|string) {
    return getAPI.call(this, 'cloudresourcemanager', options);
  }
  cloudshell(options: ServiceOptions|string) {
    return getAPI.call(this, 'cloudshell', options);
  }
  cloudtasks(options: ServiceOptions|string) {
    return getAPI.call(this, 'cloudtasks', options);
  }
  cloudtrace(options: ServiceOptions|string) {
    return getAPI.call(this, 'cloudtrace', options);
  }
  clouduseraccounts(options: ServiceOptions|string) {
    return getAPI.call(this, 'clouduseraccounts', options);
  }
  compute(options: ServiceOptions|string) {
    return getAPI.call(this, 'compute', options);
  }
  container(options: ServiceOptions|string) {
    return getAPI.call(this, 'container', options);
  }
  content(options: ServiceOptions|string) {
    return getAPI.call(this, 'content', options);
  }
  customsearch(options: ServiceOptions|string) {
    return getAPI.call(this, 'customsearch', options);
  }
  dataflow(options: ServiceOptions|string) {
    return getAPI.call(this, 'dataflow', options);
  }
  dataproc(options: ServiceOptions|string) {
    return getAPI.call(this, 'dataproc', options);
  }
  datastore(options: ServiceOptions|string) {
    return getAPI.call(this, 'datastore', options);
  }
  deploymentmanager(options: ServiceOptions|string) {
    return getAPI.call(this, 'deploymentmanager', options);
  }
  dfareporting(options: ServiceOptions|string) {
    return getAPI.call(this, 'dfareporting', options);
  }
  dialogflow(options: ServiceOptions|string) {
    return getAPI.call(this, 'dialogflow', options);
  }
  digitalassetlinks(options: ServiceOptions|string) {
    return getAPI.call(this, 'digitalassetlinks', options);
  }
  discovery(options: ServiceOptions|string) {
    return getAPI.call(this, 'discovery', options);
  }
  dlp(options: ServiceOptions|string) {
    return getAPI.call(this, 'dlp', options);
  }
  dns(options: ServiceOptions|string) {
    return getAPI.call(this, 'dns', options);
  }
  doubleclickbidmanager(options: ServiceOptions|string) {
    return getAPI.call(this, 'doubleclickbidmanager', options);
  }
  doubleclicksearch(options: ServiceOptions|string) {
    return getAPI.call(this, 'doubleclicksearch', options);
  }
  drive(options: ServiceOptions|string) {
    return getAPI.call(this, 'drive', options);
  }
  firebasedynamiclinks(options: ServiceOptions|string) {
    return getAPI.call(this, 'firebasedynamiclinks', options);
  }
  firebaserules(options: ServiceOptions|string) {
    return getAPI.call(this, 'firebaserules', options);
  }
  firestore(options: ServiceOptions|string) {
    return getAPI.call(this, 'firestore', options);
  }
  fitness(options: ServiceOptions|string) {
    return getAPI.call(this, 'fitness', options);
  }
  fusiontables(options: ServiceOptions|string) {
    return getAPI.call(this, 'fusiontables', options);
  }
  games(options: ServiceOptions|string) {
    return getAPI.call(this, 'games', options);
  }
  gamesConfiguration(options: ServiceOptions|string) {
    return getAPI.call(this, 'gamesConfiguration', options);
  }
  gamesManagement(options: ServiceOptions|string) {
    return getAPI.call(this, 'gamesManagement', options);
  }
  genomics(options: ServiceOptions|string) {
    return getAPI.call(this, 'genomics', options);
  }
  gmail(options: ServiceOptions|string) {
    return getAPI.call(this, 'gmail', options);
  }
  groupsmigration(options: ServiceOptions|string) {
    return getAPI.call(this, 'groupsmigration', options);
  }
  groupssettings(options: ServiceOptions|string) {
    return getAPI.call(this, 'groupssettings', options);
  }
  iam(options: ServiceOptions|string) {
    return getAPI.call(this, 'iam', options);
  }
  identitytoolkit(options: ServiceOptions|string) {
    return getAPI.call(this, 'identitytoolkit', options);
  }
  kgsearch(options: ServiceOptions|string) {
    return getAPI.call(this, 'kgsearch', options);
  }
  language(options: ServiceOptions|string) {
    return getAPI.call(this, 'language', options);
  }
  licensing(options: ServiceOptions|string) {
    return getAPI.call(this, 'licensing', options);
  }
  logging(options: ServiceOptions|string) {
    return getAPI.call(this, 'logging', options);
  }
  manufacturers(options: ServiceOptions|string) {
    return getAPI.call(this, 'manufacturers', options);
  }
  mirror(options: ServiceOptions|string) {
    return getAPI.call(this, 'mirror', options);
  }
  ml(options: ServiceOptions|string) {
    return getAPI.call(this, 'ml', options);
  }
  monitoring(options: ServiceOptions|string) {
    return getAPI.call(this, 'monitoring', options);
  }
  oauth2(options: ServiceOptions|string) {
    return getAPI.call(this, 'oauth2', options);
  }
  oslogin(options: ServiceOptions|string) {
    return getAPI.call(this, 'oslogin', options);
  }
  pagespeedonline(options: ServiceOptions|string) {
    return getAPI.call(this, 'pagespeedonline', options);
  }
  partners(options: ServiceOptions|string) {
    return getAPI.call(this, 'partners', options);
  }
  people(options: ServiceOptions|string) {
    return getAPI.call(this, 'people', options);
  }
  playcustomapp(options: ServiceOptions|string) {
    return getAPI.call(this, 'playcustomapp', options);
  }
  plus(options: ServiceOptions|string) {
    return getAPI.call(this, 'plus', options);
  }
  plusDomains(options: ServiceOptions|string) {
    return getAPI.call(this, 'plusDomains', options);
  }
  poly(options: ServiceOptions|string) {
    return getAPI.call(this, 'poly', options);
  }
  prediction(options: ServiceOptions|string) {
    return getAPI.call(this, 'prediction', options);
  }
  proximitybeacon(options: ServiceOptions|string) {
    return getAPI.call(this, 'proximitybeacon', options);
  }
  pubsub(options: ServiceOptions|string) {
    return getAPI.call(this, 'pubsub', options);
  }
  replicapool(options: ServiceOptions|string) {
    return getAPI.call(this, 'replicapool', options);
  }
  replicapoolupdater(options: ServiceOptions|string) {
    return getAPI.call(this, 'replicapoolupdater', options);
  }
  reseller(options: ServiceOptions|string) {
    return getAPI.call(this, 'reseller', options);
  }
  resourceviews(options: ServiceOptions|string) {
    return getAPI.call(this, 'resourceviews', options);
  }
  runtimeconfig(options: ServiceOptions|string) {
    return getAPI.call(this, 'runtimeconfig', options);
  }
  safebrowsing(options: ServiceOptions|string) {
    return getAPI.call(this, 'safebrowsing', options);
  }
  script(options: ServiceOptions|string) {
    return getAPI.call(this, 'script', options);
  }
  searchconsole(options: ServiceOptions|string) {
    return getAPI.call(this, 'searchconsole', options);
  }
  serviceconsumermanagement(options: ServiceOptions|string) {
    return getAPI.call(this, 'serviceconsumermanagement', options);
  }
  servicecontrol(options: ServiceOptions|string) {
    return getAPI.call(this, 'servicecontrol', options);
  }
  servicemanagement(options: ServiceOptions|string) {
    return getAPI.call(this, 'servicemanagement', options);
  }
  serviceusage(options: ServiceOptions|string) {
    return getAPI.call(this, 'serviceusage', options);
  }
  serviceuser(options: ServiceOptions|string) {
    return getAPI.call(this, 'serviceuser', options);
  }
  sheets(options: ServiceOptions|string) {
    return getAPI.call(this, 'sheets', options);
  }
  siteVerification(options: ServiceOptions|string) {
    return getAPI.call(this, 'siteVerification', options);
  }
  slides(options: ServiceOptions|string) {
    return getAPI.call(this, 'slides', options);
  }
  sourcerepo(options: ServiceOptions|string) {
    return getAPI.call(this, 'sourcerepo', options);
  }
  spanner(options: ServiceOptions|string) {
    return getAPI.call(this, 'spanner', options);
  }
  spectrum(options: ServiceOptions|string) {
    return getAPI.call(this, 'spectrum', options);
  }
  speech(options: ServiceOptions|string) {
    return getAPI.call(this, 'speech', options);
  }
  sqladmin(options: ServiceOptions|string) {
    return getAPI.call(this, 'sqladmin', options);
  }
  storage(options: ServiceOptions|string) {
    return getAPI.call(this, 'storage', options);
  }
  storagetransfer(options: ServiceOptions|string) {
    return getAPI.call(this, 'storagetransfer', options);
  }
  streetviewpublish(options: ServiceOptions|string) {
    return getAPI.call(this, 'streetviewpublish', options);
  }
  surveys(options: ServiceOptions|string) {
    return getAPI.call(this, 'surveys', options);
  }
  tagmanager(options: ServiceOptions|string) {
    return getAPI.call(this, 'tagmanager', options);
  }
  taskqueue(options: ServiceOptions|string) {
    return getAPI.call(this, 'taskqueue', options);
  }
  tasks(options: ServiceOptions|string) {
    return getAPI.call(this, 'tasks', options);
  }
  testing(options: ServiceOptions|string) {
    return getAPI.call(this, 'testing', options);
  }
  toolresults(options: ServiceOptions|string) {
    return getAPI.call(this, 'toolresults', options);
  }
  tpu(options: ServiceOptions|string) {
    return getAPI.call(this, 'tpu', options);
  }
  translate(options: ServiceOptions|string) {
    return getAPI.call(this, 'translate', options);
  }
  urlshortener(options: ServiceOptions|string) {
    return getAPI.call(this, 'urlshortener', options);
  }
  vault(options: ServiceOptions|string) {
    return getAPI.call(this, 'vault', options);
  }
  videointelligence(options: ServiceOptions|string) {
    return getAPI.call(this, 'videointelligence', options);
  }
  vision(options: ServiceOptions|string) {
    return getAPI.call(this, 'vision', options);
  }
  webfonts(options: ServiceOptions|string) {
    return getAPI.call(this, 'webfonts', options);
  }
  webmasters(options: ServiceOptions|string) {
    return getAPI.call(this, 'webmasters', options);
  }
  youtube(options: ServiceOptions|string) {
    return getAPI.call(this, 'youtube', options);
  }
  youtubeAnalytics(options: ServiceOptions|string) {
    return getAPI.call(this, 'youtubeAnalytics', options);
  }
  youtubereporting(options: ServiceOptions|string) {
    return getAPI.call(this, 'youtubereporting', options);
  }
}