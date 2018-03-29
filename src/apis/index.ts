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

import * as abusiveexperiencereport_v1 from './abusiveexperiencereport/v1';
import * as acceleratedmobilepageurl_v1 from './acceleratedmobilepageurl/v1';
import * as adexchangebuyer_v1_2 from './adexchangebuyer/v1.2';
import * as adexchangebuyer_v1_3 from './adexchangebuyer/v1.3';
import * as adexchangebuyer_v1_4 from './adexchangebuyer/v1.4';
import * as adexchangebuyer2_v2beta1 from './adexchangebuyer2/v2beta1';
import * as adexchangeseller_v1 from './adexchangeseller/v1';
import * as adexchangeseller_v1_1 from './adexchangeseller/v1.1';
import * as adexchangeseller_v2_0 from './adexchangeseller/v2.0';
import * as adexperiencereport_v1 from './adexperiencereport/v1';
import * as admin_datatransfer_v1 from './admin/datatransfer_v1';
import * as admin_directory_v1 from './admin/directory_v1';
import * as admin_reports_v1 from './admin/reports_v1';
import * as adsense_v1_4 from './adsense/v1.4';
import * as adsensehost_v4_1 from './adsensehost/v4.1';
import * as analytics_v2_4 from './analytics/v2.4';
import * as analytics_v3 from './analytics/v3';
import * as analyticsreporting_v4 from './analyticsreporting/v4';
import * as androiddeviceprovisioning_v1 from './androiddeviceprovisioning/v1';
import * as androidenterprise_v1 from './androidenterprise/v1';
import * as androidmanagement_v1 from './androidmanagement/v1';
import * as androidpublisher_v1 from './androidpublisher/v1';
import * as androidpublisher_v1_1 from './androidpublisher/v1.1';
import * as androidpublisher_v2 from './androidpublisher/v2';
import * as appengine_v1 from './appengine/v1';
import * as appengine_v1alpha from './appengine/v1alpha';
import * as appengine_v1beta from './appengine/v1beta';
import * as appengine_v1beta4 from './appengine/v1beta4';
import * as appengine_v1beta5 from './appengine/v1beta5';
import * as appsactivity_v1 from './appsactivity/v1';
import * as appstate_v1 from './appstate/v1';
import * as bigquery_v2 from './bigquery/v2';
import * as bigquerydatatransfer_v1 from './bigquerydatatransfer/v1';
import * as blogger_v2 from './blogger/v2';
import * as blogger_v3 from './blogger/v3';
import * as books_v1 from './books/v1';
import * as calendar_v3 from './calendar/v3';
import * as chat_v1 from './chat/v1';
import * as civicinfo_v2 from './civicinfo/v2';
import * as classroom_v1 from './classroom/v1';
import * as cloudbilling_v1 from './cloudbilling/v1';
import * as cloudbuild_v1 from './cloudbuild/v1';
import * as clouddebugger_v2 from './clouddebugger/v2';
import * as clouderrorreporting_v1beta1 from './clouderrorreporting/v1beta1';
import * as cloudfunctions_v1 from './cloudfunctions/v1';
import * as cloudfunctions_v1beta2 from './cloudfunctions/v1beta2';
import * as cloudiot_v1 from './cloudiot/v1';
import * as cloudkms_v1 from './cloudkms/v1';
import * as cloudresourcemanager_v1 from './cloudresourcemanager/v1';
import * as cloudresourcemanager_v1beta1 from './cloudresourcemanager/v1beta1';
import * as cloudresourcemanager_v2 from './cloudresourcemanager/v2';
import * as cloudresourcemanager_v2beta1 from './cloudresourcemanager/v2beta1';
import * as cloudshell_v1 from './cloudshell/v1';
import * as cloudshell_v1alpha1 from './cloudshell/v1alpha1';
import * as cloudtasks_v2beta2 from './cloudtasks/v2beta2';
import * as cloudtrace_v1 from './cloudtrace/v1';
import * as cloudtrace_v2 from './cloudtrace/v2';
import * as compute_alpha from './compute/alpha';
import * as compute_beta from './compute/beta';
import * as compute_v1 from './compute/v1';
import * as container_v1 from './container/v1';
import * as container_v1beta1 from './container/v1beta1';
import * as content_v2 from './content/v2';
import * as content_v2sandbox from './content/v2sandbox';
import * as customsearch_v1 from './customsearch/v1';
import * as dataflow_v1b3 from './dataflow/v1b3';
import * as dataproc_v1 from './dataproc/v1';
import * as dataproc_v1beta2 from './dataproc/v1beta2';
import * as datastore_v1 from './datastore/v1';
import * as datastore_v1beta1 from './datastore/v1beta1';
import * as datastore_v1beta3 from './datastore/v1beta3';
import * as deploymentmanager_alpha from './deploymentmanager/alpha';
import * as deploymentmanager_v2 from './deploymentmanager/v2';
import * as deploymentmanager_v2beta from './deploymentmanager/v2beta';
import * as dfareporting_v2_8 from './dfareporting/v2.8';
import * as dfareporting_v3_0 from './dfareporting/v3.0';
import * as dialogflow_v2 from './dialogflow/v2';
import * as dialogflow_v2beta1 from './dialogflow/v2beta1';
import * as digitalassetlinks_v1 from './digitalassetlinks/v1';
import * as discovery_v1 from './discovery/v1';
import * as dlp_v2 from './dlp/v2';
import * as dlp_v2beta1 from './dlp/v2beta1';
import * as dlp_v2beta2 from './dlp/v2beta2';
import * as dns_v1 from './dns/v1';
import * as dns_v1beta2 from './dns/v1beta2';
import * as dns_v2beta1 from './dns/v2beta1';
import * as doubleclickbidmanager_v1 from './doubleclickbidmanager/v1';
import * as doubleclicksearch_v2 from './doubleclicksearch/v2';
import * as drive_v2 from './drive/v2';
import * as drive_v3 from './drive/v3';
import * as firebasedynamiclinks_v1 from './firebasedynamiclinks/v1';
import * as firebaserules_v1 from './firebaserules/v1';
import * as firestore_v1beta1 from './firestore/v1beta1';
import * as fitness_v1 from './fitness/v1';
import * as fusiontables_v1 from './fusiontables/v1';
import * as fusiontables_v2 from './fusiontables/v2';
import * as games_v1 from './games/v1';
import * as gamesConfiguration_v1configuration from './gamesConfiguration/v1configuration';
import * as gamesManagement_v1management from './gamesManagement/v1management';
import * as genomics_v1 from './genomics/v1';
import * as genomics_v1alpha2 from './genomics/v1alpha2';
import * as genomics_v2alpha1 from './genomics/v2alpha1';
import * as gmail_v1 from './gmail/v1';
import * as groupsmigration_v1 from './groupsmigration/v1';
import * as groupssettings_v1 from './groupssettings/v1';
import * as iam_v1 from './iam/v1';
import * as identitytoolkit_v3 from './identitytoolkit/v3';
import * as kgsearch_v1 from './kgsearch/v1';
import * as language_v1 from './language/v1';
import * as language_v1beta1 from './language/v1beta1';
import * as language_v1beta2 from './language/v1beta2';
import * as licensing_v1 from './licensing/v1';
import * as logging_v2 from './logging/v2';
import * as logging_v2beta1 from './logging/v2beta1';
import * as manufacturers_v1 from './manufacturers/v1';
import * as mirror_v1 from './mirror/v1';
import * as ml_v1 from './ml/v1';
import * as monitoring_v3 from './monitoring/v3';
import * as oauth2_v1 from './oauth2/v1';
import * as oauth2_v2 from './oauth2/v2';
import * as oslogin_v1 from './oslogin/v1';
import * as oslogin_v1alpha from './oslogin/v1alpha';
import * as oslogin_v1beta from './oslogin/v1beta';
import * as pagespeedonline_v1 from './pagespeedonline/v1';
import * as pagespeedonline_v2 from './pagespeedonline/v2';
import * as pagespeedonline_v4 from './pagespeedonline/v4';
import * as partners_v2 from './partners/v2';
import * as people_v1 from './people/v1';
import * as playcustomapp_v1 from './playcustomapp/v1';
import * as plus_v1 from './plus/v1';
import * as plusDomains_v1 from './plusDomains/v1';
import * as poly_v1 from './poly/v1';
import * as prediction_v1_2 from './prediction/v1.2';
import * as prediction_v1_3 from './prediction/v1.3';
import * as prediction_v1_4 from './prediction/v1.4';
import * as prediction_v1_5 from './prediction/v1.5';
import * as prediction_v1_6 from './prediction/v1.6';
import * as proximitybeacon_v1beta1 from './proximitybeacon/v1beta1';
import * as pubsub_v1 from './pubsub/v1';
import * as pubsub_v1beta1a from './pubsub/v1beta1a';
import * as pubsub_v1beta2 from './pubsub/v1beta2';
import * as replicapool_v1beta1 from './replicapool/v1beta1';
import * as replicapool_v1beta2 from './replicapool/v1beta2';
import * as replicapoolupdater_v1beta1 from './replicapoolupdater/v1beta1';
import * as reseller_v1 from './reseller/v1';
import * as resourceviews_v1beta1 from './resourceviews/v1beta1';
import * as resourceviews_v1beta2 from './resourceviews/v1beta2';
import * as runtimeconfig_v1 from './runtimeconfig/v1';
import * as runtimeconfig_v1beta1 from './runtimeconfig/v1beta1';
import * as safebrowsing_v4 from './safebrowsing/v4';
import * as script_v1 from './script/v1';
import * as searchconsole_v1 from './searchconsole/v1';
import * as serviceconsumermanagement_v1 from './serviceconsumermanagement/v1';
import * as servicecontrol_v1 from './servicecontrol/v1';
import * as servicemanagement_v1 from './servicemanagement/v1';
import * as serviceusage_v1beta1 from './serviceusage/v1beta1';
import * as serviceuser_v1 from './serviceuser/v1';
import * as sheets_v4 from './sheets/v4';
import * as siteVerification_v1 from './siteVerification/v1';
import * as slides_v1 from './slides/v1';
import * as sourcerepo_v1 from './sourcerepo/v1';
import * as spanner_v1 from './spanner/v1';
import * as spectrum_v1explorer from './spectrum/v1explorer';
import * as speech_v1 from './speech/v1';
import * as speech_v1beta1 from './speech/v1beta1';
import * as sqladmin_v1beta3 from './sqladmin/v1beta3';
import * as sqladmin_v1beta4 from './sqladmin/v1beta4';
import * as storage_v1 from './storage/v1';
import * as storage_v1beta1 from './storage/v1beta1';
import * as storage_v1beta2 from './storage/v1beta2';
import * as storagetransfer_v1 from './storagetransfer/v1';
import * as streetviewpublish_v1 from './streetviewpublish/v1';
import * as surveys_v2 from './surveys/v2';
import * as tagmanager_v1 from './tagmanager/v1';
import * as tagmanager_v2 from './tagmanager/v2';
import * as taskqueue_v1beta1 from './taskqueue/v1beta1';
import * as taskqueue_v1beta2 from './taskqueue/v1beta2';
import * as tasks_v1 from './tasks/v1';
import * as testing_v1 from './testing/v1';
import * as texttospeech_v1beta1 from './texttospeech/v1beta1';
import * as toolresults_v1beta3 from './toolresults/v1beta3';
import * as tpu_v1alpha1 from './tpu/v1alpha1';
import * as translate_v2 from './translate/v2';
import * as urlshortener_v1 from './urlshortener/v1';
import * as vault_v1 from './vault/v1';
import * as videointelligence_v1beta1 from './videointelligence/v1beta1';
import * as vision_v1 from './vision/v1';
import * as vision_v1p1beta1 from './vision/v1p1beta1';
import * as vision_v1p2beta1 from './vision/v1p2beta1';
import * as webfonts_v1 from './webfonts/v1';
import * as webmasters_v3 from './webmasters/v3';
import * as youtube_v3 from './youtube/v3';
import * as youtubeAnalytics_v1 from './youtubeAnalytics/v1';
import * as youtubeAnalytics_v1beta1 from './youtubeAnalytics/v1beta1';
import * as youtubereporting_v1 from './youtubereporting/v1';

export interface APIList {
  // tslint:disable-next-line: no-any
  [index: string]: {[index: string]: any};
}

const APIS: APIList = {
  abusiveexperiencereport: {
    'v1': abusiveexperiencereport_v1.Abusiveexperiencereport,
  },
  acceleratedmobilepageurl: {
    'v1': acceleratedmobilepageurl_v1.Acceleratedmobilepageurl,
  },
  adexchangebuyer: {
    'v1.2': adexchangebuyer_v1_2.Adexchangebuyer,
    'v1.3': adexchangebuyer_v1_3.Adexchangebuyer,
    'v1.4': adexchangebuyer_v1_4.Adexchangebuyer,
  },
  adexchangebuyer2: {
    'v2beta1': adexchangebuyer2_v2beta1.Adexchangebuyer2,
  },
  adexchangeseller: {
    'v1.1': adexchangeseller_v1_1.Adexchangeseller,
    'v1': adexchangeseller_v1.Adexchangeseller,
    'v2.0': adexchangeseller_v2_0.Adexchangeseller,
  },
  adexperiencereport: {
    'v1': adexperiencereport_v1.Adexperiencereport,
  },
  admin: {
    'datatransfer_v1': admin_datatransfer_v1.Admin,
    'directory_v1': admin_directory_v1.Admin,
    'reports_v1': admin_reports_v1.Admin,
  },
  adsense: {
    'v1.4': adsense_v1_4.Adsense,
  },
  adsensehost: {
    'v4.1': adsensehost_v4_1.Adsensehost,
  },
  analytics: {
    'v2.4': analytics_v2_4.Analytics,
    'v3': analytics_v3.Analytics,
  },
  analyticsreporting: {
    'v4': analyticsreporting_v4.Analyticsreporting,
  },
  androiddeviceprovisioning: {
    'v1': androiddeviceprovisioning_v1.Androiddeviceprovisioning,
  },
  androidenterprise: {
    'v1': androidenterprise_v1.Androidenterprise,
  },
  androidmanagement: {
    'v1': androidmanagement_v1.Androidmanagement,
  },
  androidpublisher: {
    'v1.1': androidpublisher_v1_1.Androidpublisher,
    'v1': androidpublisher_v1.Androidpublisher,
    'v2': androidpublisher_v2.Androidpublisher,
  },
  appengine: {
    'v1': appengine_v1.Appengine,
    'v1alpha': appengine_v1alpha.Appengine,
    'v1beta': appengine_v1beta.Appengine,
    'v1beta4': appengine_v1beta4.Appengine,
    'v1beta5': appengine_v1beta5.Appengine,
  },
  appsactivity: {
    'v1': appsactivity_v1.Appsactivity,
  },
  appstate: {
    'v1': appstate_v1.Appstate,
  },
  bigquery: {
    'v2': bigquery_v2.Bigquery,
  },
  bigquerydatatransfer: {
    'v1': bigquerydatatransfer_v1.Bigquerydatatransfer,
  },
  blogger: {
    'v2': blogger_v2.Blogger,
    'v3': blogger_v3.Blogger,
  },
  books: {
    'v1': books_v1.Books,
  },
  calendar: {
    'v3': calendar_v3.Calendar,
  },
  chat: {
    'v1': chat_v1.Chat,
  },
  civicinfo: {
    'v2': civicinfo_v2.Civicinfo,
  },
  classroom: {
    'v1': classroom_v1.Classroom,
  },
  cloudbilling: {
    'v1': cloudbilling_v1.Cloudbilling,
  },
  cloudbuild: {
    'v1': cloudbuild_v1.Cloudbuild,
  },
  clouddebugger: {
    'v2': clouddebugger_v2.Clouddebugger,
  },
  clouderrorreporting: {
    'v1beta1': clouderrorreporting_v1beta1.Clouderrorreporting,
  },
  cloudfunctions: {
    'v1': cloudfunctions_v1.Cloudfunctions,
    'v1beta2': cloudfunctions_v1beta2.Cloudfunctions,
  },
  cloudiot: {
    'v1': cloudiot_v1.Cloudiot,
  },
  cloudkms: {
    'v1': cloudkms_v1.Cloudkms,
  },
  cloudresourcemanager: {
    'v1': cloudresourcemanager_v1.Cloudresourcemanager,
    'v1beta1': cloudresourcemanager_v1beta1.Cloudresourcemanager,
    'v2': cloudresourcemanager_v2.Cloudresourcemanager,
    'v2beta1': cloudresourcemanager_v2beta1.Cloudresourcemanager,
  },
  cloudshell: {
    'v1': cloudshell_v1.Cloudshell,
    'v1alpha1': cloudshell_v1alpha1.Cloudshell,
  },
  cloudtasks: {
    'v2beta2': cloudtasks_v2beta2.Cloudtasks,
  },
  cloudtrace: {
    'v1': cloudtrace_v1.Cloudtrace,
    'v2': cloudtrace_v2.Cloudtrace,
  },
  compute: {
    'alpha': compute_alpha.Compute,
    'beta': compute_beta.Compute,
    'v1': compute_v1.Compute,
  },
  container: {
    'v1': container_v1.Container,
    'v1beta1': container_v1beta1.Container,
  },
  content: {
    'v2': content_v2.Content,
    'v2sandbox': content_v2sandbox.Content,
  },
  customsearch: {
    'v1': customsearch_v1.Customsearch,
  },
  dataflow: {
    'v1b3': dataflow_v1b3.Dataflow,
  },
  dataproc: {
    'v1': dataproc_v1.Dataproc,
    'v1beta2': dataproc_v1beta2.Dataproc,
  },
  datastore: {
    'v1': datastore_v1.Datastore,
    'v1beta1': datastore_v1beta1.Datastore,
    'v1beta3': datastore_v1beta3.Datastore,
  },
  deploymentmanager: {
    'alpha': deploymentmanager_alpha.Deploymentmanager,
    'v2': deploymentmanager_v2.Deploymentmanager,
    'v2beta': deploymentmanager_v2beta.Deploymentmanager,
  },
  dfareporting: {
    'v2.8': dfareporting_v2_8.Dfareporting,
    'v3.0': dfareporting_v3_0.Dfareporting,
  },
  dialogflow: {
    'v2': dialogflow_v2.Dialogflow,
    'v2beta1': dialogflow_v2beta1.Dialogflow,
  },
  digitalassetlinks: {
    'v1': digitalassetlinks_v1.Digitalassetlinks,
  },
  discovery: {
    'v1': discovery_v1.Discovery,
  },
  dlp: {
    'v2': dlp_v2.Dlp,
    'v2beta1': dlp_v2beta1.Dlp,
    'v2beta2': dlp_v2beta2.Dlp,
  },
  dns: {
    'v1': dns_v1.Dns,
    'v1beta2': dns_v1beta2.Dns,
    'v2beta1': dns_v2beta1.Dns,
  },
  doubleclickbidmanager: {
    'v1': doubleclickbidmanager_v1.Doubleclickbidmanager,
  },
  doubleclicksearch: {
    'v2': doubleclicksearch_v2.Doubleclicksearch,
  },
  drive: {
    'v2': drive_v2.Drive,
    'v3': drive_v3.Drive,
  },
  firebasedynamiclinks: {
    'v1': firebasedynamiclinks_v1.Firebasedynamiclinks,
  },
  firebaserules: {
    'v1': firebaserules_v1.Firebaserules,
  },
  firestore: {
    'v1beta1': firestore_v1beta1.Firestore,
  },
  fitness: {
    'v1': fitness_v1.Fitness,
  },
  fusiontables: {
    'v1': fusiontables_v1.Fusiontables,
    'v2': fusiontables_v2.Fusiontables,
  },
  games: {
    'v1': games_v1.Games,
  },
  gamesConfiguration: {
    'v1configuration': gamesConfiguration_v1configuration.Gamesconfiguration,
  },
  gamesManagement: {
    'v1management': gamesManagement_v1management.Gamesmanagement,
  },
  genomics: {
    'v1': genomics_v1.Genomics,
    'v1alpha2': genomics_v1alpha2.Genomics,
    'v2alpha1': genomics_v2alpha1.Genomics,
  },
  gmail: {
    'v1': gmail_v1.Gmail,
  },
  groupsmigration: {
    'v1': groupsmigration_v1.Groupsmigration,
  },
  groupssettings: {
    'v1': groupssettings_v1.Groupssettings,
  },
  iam: {
    'v1': iam_v1.Iam,
  },
  identitytoolkit: {
    'v3': identitytoolkit_v3.Identitytoolkit,
  },
  kgsearch: {
    'v1': kgsearch_v1.Kgsearch,
  },
  language: {
    'v1': language_v1.Language,
    'v1beta1': language_v1beta1.Language,
    'v1beta2': language_v1beta2.Language,
  },
  licensing: {
    'v1': licensing_v1.Licensing,
  },
  logging: {
    'v2': logging_v2.Logging,
    'v2beta1': logging_v2beta1.Logging,
  },
  manufacturers: {
    'v1': manufacturers_v1.Manufacturers,
  },
  mirror: {
    'v1': mirror_v1.Mirror,
  },
  ml: {
    'v1': ml_v1.Ml,
  },
  monitoring: {
    'v3': monitoring_v3.Monitoring,
  },
  oauth2: {
    'v1': oauth2_v1.Oauth2,
    'v2': oauth2_v2.Oauth2,
  },
  oslogin: {
    'v1': oslogin_v1.Oslogin,
    'v1alpha': oslogin_v1alpha.Oslogin,
    'v1beta': oslogin_v1beta.Oslogin,
  },
  pagespeedonline: {
    'v1': pagespeedonline_v1.Pagespeedonline,
    'v2': pagespeedonline_v2.Pagespeedonline,
    'v4': pagespeedonline_v4.Pagespeedonline,
  },
  partners: {
    'v2': partners_v2.Partners,
  },
  people: {
    'v1': people_v1.People,
  },
  playcustomapp: {
    'v1': playcustomapp_v1.Playcustomapp,
  },
  plus: {
    'v1': plus_v1.Plus,
  },
  plusDomains: {
    'v1': plusDomains_v1.Plusdomains,
  },
  poly: {
    'v1': poly_v1.Poly,
  },
  prediction: {
    'v1.2': prediction_v1_2.Prediction,
    'v1.3': prediction_v1_3.Prediction,
    'v1.4': prediction_v1_4.Prediction,
    'v1.5': prediction_v1_5.Prediction,
    'v1.6': prediction_v1_6.Prediction,
  },
  proximitybeacon: {
    'v1beta1': proximitybeacon_v1beta1.Proximitybeacon,
  },
  pubsub: {
    'v1': pubsub_v1.Pubsub,
    'v1beta1a': pubsub_v1beta1a.Pubsub,
    'v1beta2': pubsub_v1beta2.Pubsub,
  },
  replicapool: {
    'v1beta1': replicapool_v1beta1.Replicapool,
    'v1beta2': replicapool_v1beta2.Replicapool,
  },
  replicapoolupdater: {
    'v1beta1': replicapoolupdater_v1beta1.Replicapoolupdater,
  },
  reseller: {
    'v1': reseller_v1.Reseller,
  },
  resourceviews: {
    'v1beta1': resourceviews_v1beta1.Resourceviews,
    'v1beta2': resourceviews_v1beta2.Resourceviews,
  },
  runtimeconfig: {
    'v1': runtimeconfig_v1.Runtimeconfig,
    'v1beta1': runtimeconfig_v1beta1.Runtimeconfig,
  },
  safebrowsing: {
    'v4': safebrowsing_v4.Safebrowsing,
  },
  script: {
    'v1': script_v1.Script,
  },
  searchconsole: {
    'v1': searchconsole_v1.Searchconsole,
  },
  serviceconsumermanagement: {
    'v1': serviceconsumermanagement_v1.Serviceconsumermanagement,
  },
  servicecontrol: {
    'v1': servicecontrol_v1.Servicecontrol,
  },
  servicemanagement: {
    'v1': servicemanagement_v1.Servicemanagement,
  },
  serviceusage: {
    'v1beta1': serviceusage_v1beta1.Serviceusage,
  },
  serviceuser: {
    'v1': serviceuser_v1.Serviceuser,
  },
  sheets: {
    'v4': sheets_v4.Sheets,
  },
  siteVerification: {
    'v1': siteVerification_v1.Siteverification,
  },
  slides: {
    'v1': slides_v1.Slides,
  },
  sourcerepo: {
    'v1': sourcerepo_v1.Sourcerepo,
  },
  spanner: {
    'v1': spanner_v1.Spanner,
  },
  spectrum: {
    'v1explorer': spectrum_v1explorer.Spectrum,
  },
  speech: {
    'v1': speech_v1.Speech,
    'v1beta1': speech_v1beta1.Speech,
  },
  sqladmin: {
    'v1beta3': sqladmin_v1beta3.Sqladmin,
    'v1beta4': sqladmin_v1beta4.Sqladmin,
  },
  storage: {
    'v1': storage_v1.Storage,
    'v1beta1': storage_v1beta1.Storage,
    'v1beta2': storage_v1beta2.Storage,
  },
  storagetransfer: {
    'v1': storagetransfer_v1.Storagetransfer,
  },
  streetviewpublish: {
    'v1': streetviewpublish_v1.Streetviewpublish,
  },
  surveys: {
    'v2': surveys_v2.Surveys,
  },
  tagmanager: {
    'v1': tagmanager_v1.Tagmanager,
    'v2': tagmanager_v2.Tagmanager,
  },
  taskqueue: {
    'v1beta1': taskqueue_v1beta1.Taskqueue,
    'v1beta2': taskqueue_v1beta2.Taskqueue,
  },
  tasks: {
    'v1': tasks_v1.Tasks,
  },
  testing: {
    'v1': testing_v1.Testing,
  },
  texttospeech: {
    'v1beta1': texttospeech_v1beta1.Texttospeech,
  },
  toolresults: {
    'v1beta3': toolresults_v1beta3.Toolresults,
  },
  tpu: {
    'v1alpha1': tpu_v1alpha1.Tpu,
  },
  translate: {
    'v2': translate_v2.Translate,
  },
  urlshortener: {
    'v1': urlshortener_v1.Urlshortener,
  },
  vault: {
    'v1': vault_v1.Vault,
  },
  videointelligence: {
    'v1beta1': videointelligence_v1beta1.Videointelligence,
  },
  vision: {
    'v1': vision_v1.Vision,
    'v1p1beta1': vision_v1p1beta1.Vision,
    'v1p2beta1': vision_v1p2beta1.Vision,
  },
  webfonts: {
    'v1': webfonts_v1.Webfonts,
  },
  webmasters: {
    'v3': webmasters_v3.Webmasters,
  },
  youtube: {
    'v3': youtube_v3.Youtube,
  },
  youtubeAnalytics: {
    'v1': youtubeAnalytics_v1.Youtubeanalytics,
    'v1beta1': youtubeAnalytics_v1beta1.Youtubeanalytics,
  },
  youtubereporting: {
    'v1': youtubereporting_v1.Youtubereporting,
  },
};

export class GeneratedAPIs {
  private getAPI(api: string, options: ServiceOptions|string) {
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
      const ep = new endpoint(options, this);
      return Object.freeze(ep);  // create new & freeze
    } catch (e) {
      throw new Error(
          `Unable to load endpoint ${api}("${version}"): ${e.message}`);
    }
  }

  abusiveexperiencereport(options: ServiceOptions|string) {
    return this.getAPI('abusiveexperiencereport', options);
  }
  acceleratedmobilepageurl(options: ServiceOptions|string) {
    return this.getAPI('acceleratedmobilepageurl', options);
  }
  adexchangebuyer(options: ServiceOptions|string) {
    return this.getAPI('adexchangebuyer', options);
  }
  adexchangebuyer2(options: ServiceOptions|string) {
    return this.getAPI('adexchangebuyer2', options);
  }
  adexchangeseller(options: ServiceOptions|string) {
    return this.getAPI('adexchangeseller', options);
  }
  adexperiencereport(options: ServiceOptions|string) {
    return this.getAPI('adexperiencereport', options);
  }
  admin(options: ServiceOptions|string) {
    return this.getAPI('admin', options);
  }
  adsense(options: ServiceOptions|string) {
    return this.getAPI('adsense', options);
  }
  adsensehost(options: ServiceOptions|string) {
    return this.getAPI('adsensehost', options);
  }
  analytics(options: ServiceOptions|string) {
    return this.getAPI('analytics', options);
  }
  analyticsreporting(options: ServiceOptions|string) {
    return this.getAPI('analyticsreporting', options);
  }
  androiddeviceprovisioning(options: ServiceOptions|string) {
    return this.getAPI('androiddeviceprovisioning', options);
  }
  androidenterprise(options: ServiceOptions|string) {
    return this.getAPI('androidenterprise', options);
  }
  androidmanagement(options: ServiceOptions|string) {
    return this.getAPI('androidmanagement', options);
  }
  androidpublisher(options: ServiceOptions|string) {
    return this.getAPI('androidpublisher', options);
  }
  appengine(options: ServiceOptions|string) {
    return this.getAPI('appengine', options);
  }
  appsactivity(options: ServiceOptions|string) {
    return this.getAPI('appsactivity', options);
  }
  appstate(options: ServiceOptions|string) {
    return this.getAPI('appstate', options);
  }
  bigquery(options: ServiceOptions|string) {
    return this.getAPI('bigquery', options);
  }
  bigquerydatatransfer(options: ServiceOptions|string) {
    return this.getAPI('bigquerydatatransfer', options);
  }
  blogger(options: ServiceOptions|string) {
    return this.getAPI('blogger', options);
  }
  books(options: ServiceOptions|string) {
    return this.getAPI('books', options);
  }
  calendar(options: ServiceOptions|string) {
    return this.getAPI('calendar', options);
  }
  chat(options: ServiceOptions|string) {
    return this.getAPI('chat', options);
  }
  civicinfo(options: ServiceOptions|string) {
    return this.getAPI('civicinfo', options);
  }
  classroom(options: ServiceOptions|string) {
    return this.getAPI('classroom', options);
  }
  cloudbilling(options: ServiceOptions|string) {
    return this.getAPI('cloudbilling', options);
  }
  cloudbuild(options: ServiceOptions|string) {
    return this.getAPI('cloudbuild', options);
  }
  clouddebugger(options: ServiceOptions|string) {
    return this.getAPI('clouddebugger', options);
  }
  clouderrorreporting(options: ServiceOptions|string) {
    return this.getAPI('clouderrorreporting', options);
  }
  cloudfunctions(options: ServiceOptions|string) {
    return this.getAPI('cloudfunctions', options);
  }
  cloudiot(options: ServiceOptions|string) {
    return this.getAPI('cloudiot', options);
  }
  cloudkms(options: ServiceOptions|string) {
    return this.getAPI('cloudkms', options);
  }
  cloudresourcemanager(options: ServiceOptions|string) {
    return this.getAPI('cloudresourcemanager', options);
  }
  cloudshell(options: ServiceOptions|string) {
    return this.getAPI('cloudshell', options);
  }
  cloudtasks(options: ServiceOptions|string) {
    return this.getAPI('cloudtasks', options);
  }
  cloudtrace(options: ServiceOptions|string) {
    return this.getAPI('cloudtrace', options);
  }
  compute(options: ServiceOptions|string) {
    return this.getAPI('compute', options);
  }
  container(options: ServiceOptions|string) {
    return this.getAPI('container', options);
  }
  content(options: ServiceOptions|string) {
    return this.getAPI('content', options);
  }
  customsearch(options: ServiceOptions|string) {
    return this.getAPI('customsearch', options);
  }
  dataflow(options: ServiceOptions|string) {
    return this.getAPI('dataflow', options);
  }
  dataproc(options: ServiceOptions|string) {
    return this.getAPI('dataproc', options);
  }
  datastore(options: ServiceOptions|string) {
    return this.getAPI('datastore', options);
  }
  deploymentmanager(options: ServiceOptions|string) {
    return this.getAPI('deploymentmanager', options);
  }
  dfareporting(options: ServiceOptions|string) {
    return this.getAPI('dfareporting', options);
  }
  dialogflow(options: ServiceOptions|string) {
    return this.getAPI('dialogflow', options);
  }
  digitalassetlinks(options: ServiceOptions|string) {
    return this.getAPI('digitalassetlinks', options);
  }
  discovery(options: ServiceOptions|string) {
    return this.getAPI('discovery', options);
  }
  dlp(options: ServiceOptions|string) {
    return this.getAPI('dlp', options);
  }
  dns(options: ServiceOptions|string) {
    return this.getAPI('dns', options);
  }
  doubleclickbidmanager(options: ServiceOptions|string) {
    return this.getAPI('doubleclickbidmanager', options);
  }
  doubleclicksearch(options: ServiceOptions|string) {
    return this.getAPI('doubleclicksearch', options);
  }
  drive(options: ServiceOptions|string) {
    return this.getAPI('drive', options);
  }
  firebasedynamiclinks(options: ServiceOptions|string) {
    return this.getAPI('firebasedynamiclinks', options);
  }
  firebaserules(options: ServiceOptions|string) {
    return this.getAPI('firebaserules', options);
  }
  firestore(options: ServiceOptions|string) {
    return this.getAPI('firestore', options);
  }
  fitness(options: ServiceOptions|string) {
    return this.getAPI('fitness', options);
  }
  fusiontables(options: ServiceOptions|string) {
    return this.getAPI('fusiontables', options);
  }
  games(options: ServiceOptions|string) {
    return this.getAPI('games', options);
  }
  gamesConfiguration(options: ServiceOptions|string) {
    return this.getAPI('gamesConfiguration', options);
  }
  gamesManagement(options: ServiceOptions|string) {
    return this.getAPI('gamesManagement', options);
  }
  genomics(options: ServiceOptions|string) {
    return this.getAPI('genomics', options);
  }
  gmail(options: ServiceOptions|string) {
    return this.getAPI('gmail', options);
  }
  groupsmigration(options: ServiceOptions|string) {
    return this.getAPI('groupsmigration', options);
  }
  groupssettings(options: ServiceOptions|string) {
    return this.getAPI('groupssettings', options);
  }
  iam(options: ServiceOptions|string) {
    return this.getAPI('iam', options);
  }
  identitytoolkit(options: ServiceOptions|string) {
    return this.getAPI('identitytoolkit', options);
  }
  kgsearch(options: ServiceOptions|string) {
    return this.getAPI('kgsearch', options);
  }
  language(options: ServiceOptions|string) {
    return this.getAPI('language', options);
  }
  licensing(options: ServiceOptions|string) {
    return this.getAPI('licensing', options);
  }
  logging(options: ServiceOptions|string) {
    return this.getAPI('logging', options);
  }
  manufacturers(options: ServiceOptions|string) {
    return this.getAPI('manufacturers', options);
  }
  mirror(options: ServiceOptions|string) {
    return this.getAPI('mirror', options);
  }
  ml(options: ServiceOptions|string) {
    return this.getAPI('ml', options);
  }
  monitoring(options: ServiceOptions|string) {
    return this.getAPI('monitoring', options);
  }
  oauth2(options: ServiceOptions|string) {
    return this.getAPI('oauth2', options);
  }
  oslogin(options: ServiceOptions|string) {
    return this.getAPI('oslogin', options);
  }
  pagespeedonline(options: ServiceOptions|string) {
    return this.getAPI('pagespeedonline', options);
  }
  partners(options: ServiceOptions|string) {
    return this.getAPI('partners', options);
  }
  people(options: ServiceOptions|string) {
    return this.getAPI('people', options);
  }
  playcustomapp(options: ServiceOptions|string) {
    return this.getAPI('playcustomapp', options);
  }
  plus(options: ServiceOptions|string) {
    return this.getAPI('plus', options);
  }
  plusDomains(options: ServiceOptions|string) {
    return this.getAPI('plusDomains', options);
  }
  poly(options: ServiceOptions|string) {
    return this.getAPI('poly', options);
  }
  prediction(options: ServiceOptions|string) {
    return this.getAPI('prediction', options);
  }
  proximitybeacon(options: ServiceOptions|string) {
    return this.getAPI('proximitybeacon', options);
  }
  pubsub(options: ServiceOptions|string) {
    return this.getAPI('pubsub', options);
  }
  replicapool(options: ServiceOptions|string) {
    return this.getAPI('replicapool', options);
  }
  replicapoolupdater(options: ServiceOptions|string) {
    return this.getAPI('replicapoolupdater', options);
  }
  reseller(options: ServiceOptions|string) {
    return this.getAPI('reseller', options);
  }
  resourceviews(options: ServiceOptions|string) {
    return this.getAPI('resourceviews', options);
  }
  runtimeconfig(options: ServiceOptions|string) {
    return this.getAPI('runtimeconfig', options);
  }
  safebrowsing(options: ServiceOptions|string) {
    return this.getAPI('safebrowsing', options);
  }
  script(options: ServiceOptions|string) {
    return this.getAPI('script', options);
  }
  searchconsole(options: ServiceOptions|string) {
    return this.getAPI('searchconsole', options);
  }
  serviceconsumermanagement(options: ServiceOptions|string) {
    return this.getAPI('serviceconsumermanagement', options);
  }
  servicecontrol(options: ServiceOptions|string) {
    return this.getAPI('servicecontrol', options);
  }
  servicemanagement(options: ServiceOptions|string) {
    return this.getAPI('servicemanagement', options);
  }
  serviceusage(options: ServiceOptions|string) {
    return this.getAPI('serviceusage', options);
  }
  serviceuser(options: ServiceOptions|string) {
    return this.getAPI('serviceuser', options);
  }
  sheets(options: ServiceOptions|string) {
    return this.getAPI('sheets', options);
  }
  siteVerification(options: ServiceOptions|string) {
    return this.getAPI('siteVerification', options);
  }
  slides(options: ServiceOptions|string) {
    return this.getAPI('slides', options);
  }
  sourcerepo(options: ServiceOptions|string) {
    return this.getAPI('sourcerepo', options);
  }
  spanner(options: ServiceOptions|string) {
    return this.getAPI('spanner', options);
  }
  spectrum(options: ServiceOptions|string) {
    return this.getAPI('spectrum', options);
  }
  speech(options: ServiceOptions|string) {
    return this.getAPI('speech', options);
  }
  sqladmin(options: ServiceOptions|string) {
    return this.getAPI('sqladmin', options);
  }
  storage(options: ServiceOptions|string) {
    return this.getAPI('storage', options);
  }
  storagetransfer(options: ServiceOptions|string) {
    return this.getAPI('storagetransfer', options);
  }
  streetviewpublish(options: ServiceOptions|string) {
    return this.getAPI('streetviewpublish', options);
  }
  surveys(options: ServiceOptions|string) {
    return this.getAPI('surveys', options);
  }
  tagmanager(options: ServiceOptions|string) {
    return this.getAPI('tagmanager', options);
  }
  taskqueue(options: ServiceOptions|string) {
    return this.getAPI('taskqueue', options);
  }
  tasks(options: ServiceOptions|string) {
    return this.getAPI('tasks', options);
  }
  testing(options: ServiceOptions|string) {
    return this.getAPI('testing', options);
  }
  texttospeech(options: ServiceOptions|string) {
    return this.getAPI('texttospeech', options);
  }
  toolresults(options: ServiceOptions|string) {
    return this.getAPI('toolresults', options);
  }
  tpu(options: ServiceOptions|string) {
    return this.getAPI('tpu', options);
  }
  translate(options: ServiceOptions|string) {
    return this.getAPI('translate', options);
  }
  urlshortener(options: ServiceOptions|string) {
    return this.getAPI('urlshortener', options);
  }
  vault(options: ServiceOptions|string) {
    return this.getAPI('vault', options);
  }
  videointelligence(options: ServiceOptions|string) {
    return this.getAPI('videointelligence', options);
  }
  vision(options: ServiceOptions|string) {
    return this.getAPI('vision', options);
  }
  webfonts(options: ServiceOptions|string) {
    return this.getAPI('webfonts', options);
  }
  webmasters(options: ServiceOptions|string) {
    return this.getAPI('webmasters', options);
  }
  youtube(options: ServiceOptions|string) {
    return this.getAPI('youtube', options);
  }
  youtubeAnalytics(options: ServiceOptions|string) {
    return this.getAPI('youtubeAnalytics', options);
  }
  youtubereporting(options: ServiceOptions|string) {
    return this.getAPI('youtubereporting', options);
  }
}
