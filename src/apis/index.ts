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

import {ServiceOptions} from '../lib/api';

import {abusiveexperiencereport_v1} from './abusiveexperiencereport/v1';
import {acceleratedmobilepageurl_v1} from './acceleratedmobilepageurl/v1';
import {adexchangebuyer_v1_2} from './adexchangebuyer/v1.2';
import {adexchangebuyer_v1_3} from './adexchangebuyer/v1.3';
import {adexchangebuyer_v1_4} from './adexchangebuyer/v1.4';
import {adexchangebuyer2_v2beta1} from './adexchangebuyer2/v2beta1';
import {adexchangeseller_v1} from './adexchangeseller/v1';
import {adexchangeseller_v1_1} from './adexchangeseller/v1.1';
import {adexchangeseller_v2_0} from './adexchangeseller/v2.0';
import {adexperiencereport_v1} from './adexperiencereport/v1';
import {admin_datatransfer_v1} from './admin/datatransfer_v1';
import {admin_directory_v1} from './admin/directory_v1';
import {admin_reports_v1} from './admin/reports_v1';
import {adsense_v1_4} from './adsense/v1.4';
import {adsensehost_v4_1} from './adsensehost/v4.1';
import {analytics_v2_4} from './analytics/v2.4';
import {analytics_v3} from './analytics/v3';
import {analyticsreporting_v4} from './analyticsreporting/v4';
import {androiddeviceprovisioning_v1} from './androiddeviceprovisioning/v1';
import {androidenterprise_v1} from './androidenterprise/v1';
import {androidmanagement_v1} from './androidmanagement/v1';
import {androidpublisher_v1} from './androidpublisher/v1';
import {androidpublisher_v1_1} from './androidpublisher/v1.1';
import {androidpublisher_v2} from './androidpublisher/v2';
import {appengine_v1} from './appengine/v1';
import {appengine_v1alpha} from './appengine/v1alpha';
import {appengine_v1beta} from './appengine/v1beta';
import {appengine_v1beta4} from './appengine/v1beta4';
import {appengine_v1beta5} from './appengine/v1beta5';
import {appsactivity_v1} from './appsactivity/v1';
import {appstate_v1} from './appstate/v1';
import {bigquery_v2} from './bigquery/v2';
import {bigquerydatatransfer_v1} from './bigquerydatatransfer/v1';
import {blogger_v2} from './blogger/v2';
import {blogger_v3} from './blogger/v3';
import {books_v1} from './books/v1';
import {calendar_v3} from './calendar/v3';
import {chat_v1} from './chat/v1';
import {civicinfo_v2} from './civicinfo/v2';
import {classroom_v1} from './classroom/v1';
import {cloudbilling_v1} from './cloudbilling/v1';
import {cloudbuild_v1} from './cloudbuild/v1';
import {clouddebugger_v2} from './clouddebugger/v2';
import {clouderrorreporting_v1beta1} from './clouderrorreporting/v1beta1';
import {cloudfunctions_v1} from './cloudfunctions/v1';
import {cloudfunctions_v1beta2} from './cloudfunctions/v1beta2';
import {cloudiot_v1} from './cloudiot/v1';
import {cloudkms_v1} from './cloudkms/v1';
import {cloudresourcemanager_v1} from './cloudresourcemanager/v1';
import {cloudresourcemanager_v1beta1} from './cloudresourcemanager/v1beta1';
import {cloudresourcemanager_v2} from './cloudresourcemanager/v2';
import {cloudresourcemanager_v2beta1} from './cloudresourcemanager/v2beta1';
import {cloudshell_v1} from './cloudshell/v1';
import {cloudshell_v1alpha1} from './cloudshell/v1alpha1';
import {cloudtasks_v2beta2} from './cloudtasks/v2beta2';
import {cloudtrace_v1} from './cloudtrace/v1';
import {cloudtrace_v2} from './cloudtrace/v2';
import {composer_v1beta1} from './composer/v1beta1';
import {compute_alpha} from './compute/alpha';
import {compute_beta} from './compute/beta';
import {compute_v1} from './compute/v1';
import {container_v1} from './container/v1';
import {container_v1beta1} from './container/v1beta1';
import {content_v2} from './content/v2';
import {content_v2sandbox} from './content/v2sandbox';
import {customsearch_v1} from './customsearch/v1';
import {dataflow_v1b3} from './dataflow/v1b3';
import {dataproc_v1} from './dataproc/v1';
import {dataproc_v1beta2} from './dataproc/v1beta2';
import {datastore_v1} from './datastore/v1';
import {datastore_v1beta1} from './datastore/v1beta1';
import {datastore_v1beta3} from './datastore/v1beta3';
import {deploymentmanager_alpha} from './deploymentmanager/alpha';
import {deploymentmanager_v2} from './deploymentmanager/v2';
import {deploymentmanager_v2beta} from './deploymentmanager/v2beta';
import {dfareporting_v2_8} from './dfareporting/v2.8';
import {dfareporting_v3_0} from './dfareporting/v3.0';
import {dialogflow_v2} from './dialogflow/v2';
import {dialogflow_v2beta1} from './dialogflow/v2beta1';
import {digitalassetlinks_v1} from './digitalassetlinks/v1';
import {discovery_v1} from './discovery/v1';
import {dlp_v2} from './dlp/v2';
import {dns_v1} from './dns/v1';
import {dns_v1beta2} from './dns/v1beta2';
import {dns_v2beta1} from './dns/v2beta1';
import {doubleclickbidmanager_v1} from './doubleclickbidmanager/v1';
import {doubleclicksearch_v2} from './doubleclicksearch/v2';
import {drive_v2} from './drive/v2';
import {drive_v3} from './drive/v3';
import {firebasedynamiclinks_v1} from './firebasedynamiclinks/v1';
import {firebaserules_v1} from './firebaserules/v1';
import {firestore_v1beta1} from './firestore/v1beta1';
import {fitness_v1} from './fitness/v1';
import {fusiontables_v1} from './fusiontables/v1';
import {fusiontables_v2} from './fusiontables/v2';
import {games_v1} from './games/v1';
import {gamesConfiguration_v1configuration} from './gamesConfiguration/v1configuration';
import {gamesManagement_v1management} from './gamesManagement/v1management';
import {genomics_v1} from './genomics/v1';
import {genomics_v1alpha2} from './genomics/v1alpha2';
import {genomics_v2alpha1} from './genomics/v2alpha1';
import {gmail_v1} from './gmail/v1';
import {groupsmigration_v1} from './groupsmigration/v1';
import {groupssettings_v1} from './groupssettings/v1';
import {iam_v1} from './iam/v1';
import {identitytoolkit_v3} from './identitytoolkit/v3';
import {kgsearch_v1} from './kgsearch/v1';
import {language_v1} from './language/v1';
import {language_v1beta1} from './language/v1beta1';
import {language_v1beta2} from './language/v1beta2';
import {licensing_v1} from './licensing/v1';
import {logging_v2} from './logging/v2';
import {logging_v2beta1} from './logging/v2beta1';
import {manufacturers_v1} from './manufacturers/v1';
import {mirror_v1} from './mirror/v1';
import {ml_v1} from './ml/v1';
import {monitoring_v3} from './monitoring/v3';
import {oauth2_v1} from './oauth2/v1';
import {oauth2_v2} from './oauth2/v2';
import {oslogin_v1} from './oslogin/v1';
import {oslogin_v1alpha} from './oslogin/v1alpha';
import {oslogin_v1beta} from './oslogin/v1beta';
import {pagespeedonline_v1} from './pagespeedonline/v1';
import {pagespeedonline_v2} from './pagespeedonline/v2';
import {pagespeedonline_v4} from './pagespeedonline/v4';
import {partners_v2} from './partners/v2';
import {people_v1} from './people/v1';
import {playcustomapp_v1} from './playcustomapp/v1';
import {plus_v1} from './plus/v1';
import {plusDomains_v1} from './plusDomains/v1';
import {poly_v1} from './poly/v1';
import {proximitybeacon_v1beta1} from './proximitybeacon/v1beta1';
import {pubsub_v1} from './pubsub/v1';
import {pubsub_v1beta1a} from './pubsub/v1beta1a';
import {pubsub_v1beta2} from './pubsub/v1beta2';
import {redis_v1beta1} from './redis/v1beta1';
import {replicapool_v1beta1} from './replicapool/v1beta1';
import {replicapool_v1beta2} from './replicapool/v1beta2';
import {replicapoolupdater_v1beta1} from './replicapoolupdater/v1beta1';
import {reseller_v1} from './reseller/v1';
import {resourceviews_v1beta1} from './resourceviews/v1beta1';
import {resourceviews_v1beta2} from './resourceviews/v1beta2';
import {runtimeconfig_v1} from './runtimeconfig/v1';
import {runtimeconfig_v1beta1} from './runtimeconfig/v1beta1';
import {safebrowsing_v4} from './safebrowsing/v4';
import {script_v1} from './script/v1';
import {searchconsole_v1} from './searchconsole/v1';
import {servicebroker_v1} from './servicebroker/v1';
import {servicebroker_v1alpha1} from './servicebroker/v1alpha1';
import {servicebroker_v1beta1} from './servicebroker/v1beta1';
import {serviceconsumermanagement_v1} from './serviceconsumermanagement/v1';
import {servicecontrol_v1} from './servicecontrol/v1';
import {servicemanagement_v1} from './servicemanagement/v1';
import {serviceusage_v1beta1} from './serviceusage/v1beta1';
import {serviceuser_v1} from './serviceuser/v1';
import {sheets_v4} from './sheets/v4';
import {siteVerification_v1} from './siteVerification/v1';
import {slides_v1} from './slides/v1';
import {sourcerepo_v1} from './sourcerepo/v1';
import {spanner_v1} from './spanner/v1';
import {spectrum_v1explorer} from './spectrum/v1explorer';
import {speech_v1} from './speech/v1';
import {speech_v1beta1} from './speech/v1beta1';
import {sqladmin_v1beta3} from './sqladmin/v1beta3';
import {sqladmin_v1beta4} from './sqladmin/v1beta4';
import {storage_v1} from './storage/v1';
import {storage_v1beta1} from './storage/v1beta1';
import {storage_v1beta2} from './storage/v1beta2';
import {storagetransfer_v1} from './storagetransfer/v1';
import {streetviewpublish_v1} from './streetviewpublish/v1';
import {surveys_v2} from './surveys/v2';
import {tagmanager_v1} from './tagmanager/v1';
import {tagmanager_v2} from './tagmanager/v2';
import {tasks_v1} from './tasks/v1';
import {testing_v1} from './testing/v1';
import {texttospeech_v1beta1} from './texttospeech/v1beta1';
import {toolresults_v1beta3} from './toolresults/v1beta3';
import {tpu_v1alpha1} from './tpu/v1alpha1';
import {translate_v2} from './translate/v2';
import {urlshortener_v1} from './urlshortener/v1';
import {vault_v1} from './vault/v1';
import {videointelligence_v1} from './videointelligence/v1';
import {videointelligence_v1beta1} from './videointelligence/v1beta1';
import {videointelligence_v1beta2} from './videointelligence/v1beta2';
import {vision_v1} from './vision/v1';
import {vision_v1p1beta1} from './vision/v1p1beta1';
import {vision_v1p2beta1} from './vision/v1p2beta1';
import {webfonts_v1} from './webfonts/v1';
import {webmasters_v3} from './webmasters/v3';
import {websecurityscanner_v1alpha} from './websecurityscanner/v1alpha';
import {youtube_v3} from './youtube/v3';
import {youtubeAnalytics_v1} from './youtubeAnalytics/v1';
import {youtubeAnalytics_v1beta1} from './youtubeAnalytics/v1beta1';
import {youtubeAnalytics_v2} from './youtubeAnalytics/v2';
import {youtubereporting_v1} from './youtubereporting/v1';

export interface APIList {
  // tslint:disable-next-line: no-any
  [index: string]: {[index: string]: any};
}

export const APIS: APIList = {
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
  composer: {
    'v1beta1': composer_v1beta1.Composer,
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
  proximitybeacon: {
    'v1beta1': proximitybeacon_v1beta1.Proximitybeacon,
  },
  pubsub: {
    'v1': pubsub_v1.Pubsub,
    'v1beta1a': pubsub_v1beta1a.Pubsub,
    'v1beta2': pubsub_v1beta2.Pubsub,
  },
  redis: {
    'v1beta1': redis_v1beta1.Redis,
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
  servicebroker: {
    'v1': servicebroker_v1.Servicebroker,
    'v1alpha1': servicebroker_v1alpha1.Servicebroker,
    'v1beta1': servicebroker_v1beta1.Servicebroker,
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
    'v1': videointelligence_v1.Videointelligence,
    'v1beta1': videointelligence_v1beta1.Videointelligence,
    'v1beta2': videointelligence_v1beta2.Videointelligence,
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
  websecurityscanner: {
    'v1alpha': websecurityscanner_v1alpha.Websecurityscanner,
  },
  youtube: {
    'v3': youtube_v3.Youtube,
  },
  youtubeAnalytics: {
    'v1': youtubeAnalytics_v1.Youtubeanalytics,
    'v1beta1': youtubeAnalytics_v1beta1.Youtubeanalytics,
    'v2': youtubeAnalytics_v2.Youtubeanalytics,
  },
  youtubereporting: {
    'v1': youtubereporting_v1.Youtubereporting,
  },
};

export class GeneratedAPIs {
  // tslint:disable-next-line no-any
  private getAPI<T = any>(api: string, options: ServiceOptions|string) {
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
      return Object.freeze(ep) as T;
    } catch (e) {
      throw new Error(
          `Unable to load endpoint ${api}("${version}"): ${e.message}`);
    }
  }

  abusiveexperiencereport(version: 'v1'):
      abusiveexperiencereport_v1.Abusiveexperiencereport;
  abusiveexperiencereport(options: abusiveexperiencereport_v1.Options):
      abusiveexperiencereport_v1.Abusiveexperiencereport;
  abusiveexperiencereport<
      T = abusiveexperiencereport_v1.Abusiveexperiencereport>(
      versionOrOptions: 'v1'|abusiveexperiencereport_v1.Options) {
    return this.getAPI<T>('abusiveexperiencereport', versionOrOptions);
  }
  acceleratedmobilepageurl(version: 'v1'):
      acceleratedmobilepageurl_v1.Acceleratedmobilepageurl;
  acceleratedmobilepageurl(options: acceleratedmobilepageurl_v1.Options):
      acceleratedmobilepageurl_v1.Acceleratedmobilepageurl;
  acceleratedmobilepageurl<
      T = acceleratedmobilepageurl_v1.Acceleratedmobilepageurl>(
      versionOrOptions: 'v1'|acceleratedmobilepageurl_v1.Options) {
    return this.getAPI<T>('acceleratedmobilepageurl', versionOrOptions);
  }
  adexchangebuyer(version: 'v1_2'): adexchangebuyer_v1_2.Adexchangebuyer;
  adexchangebuyer(options: adexchangebuyer_v1_2.Options):
      adexchangebuyer_v1_2.Adexchangebuyer;
  adexchangebuyer(version: 'v1_3'): adexchangebuyer_v1_3.Adexchangebuyer;
  adexchangebuyer(options: adexchangebuyer_v1_3.Options):
      adexchangebuyer_v1_3.Adexchangebuyer;
  adexchangebuyer(version: 'v1_4'): adexchangebuyer_v1_4.Adexchangebuyer;
  adexchangebuyer(options: adexchangebuyer_v1_4.Options):
      adexchangebuyer_v1_4.Adexchangebuyer;
  adexchangebuyer<
      T = adexchangebuyer_v1_2.Adexchangebuyer |
          adexchangebuyer_v1_3.Adexchangebuyer |
          adexchangebuyer_v1_4.Adexchangebuyer>(
      versionOrOptions: 'v1_2'|
      adexchangebuyer_v1_2.Options|'v1_3'|
      adexchangebuyer_v1_3.Options|'v1_4'|adexchangebuyer_v1_4.Options) {
    return this.getAPI<T>('adexchangebuyer', versionOrOptions);
  }
  adexchangebuyer2(version: 'v2beta1'):
      adexchangebuyer2_v2beta1.Adexchangebuyer2;
  adexchangebuyer2(options: adexchangebuyer2_v2beta1.Options):
      adexchangebuyer2_v2beta1.Adexchangebuyer2;
  adexchangebuyer2<T = adexchangebuyer2_v2beta1.Adexchangebuyer2>(
      versionOrOptions: 'v2beta1'|adexchangebuyer2_v2beta1.Options) {
    return this.getAPI<T>('adexchangebuyer2', versionOrOptions);
  }
  adexchangeseller(version: 'v1_1'): adexchangeseller_v1_1.Adexchangeseller;
  adexchangeseller(options: adexchangeseller_v1_1.Options):
      adexchangeseller_v1_1.Adexchangeseller;
  adexchangeseller(version: 'v1'): adexchangeseller_v1.Adexchangeseller;
  adexchangeseller(options: adexchangeseller_v1.Options):
      adexchangeseller_v1.Adexchangeseller;
  adexchangeseller(version: 'v2_0'): adexchangeseller_v2_0.Adexchangeseller;
  adexchangeseller(options: adexchangeseller_v2_0.Options):
      adexchangeseller_v2_0.Adexchangeseller;
  adexchangeseller<
      T = adexchangeseller_v1_1.Adexchangeseller |
          adexchangeseller_v1.Adexchangeseller |
          adexchangeseller_v2_0.Adexchangeseller>(
      versionOrOptions: 'v1_1'|
      adexchangeseller_v1_1.Options|'v1'|
      adexchangeseller_v1.Options|'v2_0'|adexchangeseller_v2_0.Options) {
    return this.getAPI<T>('adexchangeseller', versionOrOptions);
  }
  adexperiencereport(version: 'v1'): adexperiencereport_v1.Adexperiencereport;
  adexperiencereport(options: adexperiencereport_v1.Options):
      adexperiencereport_v1.Adexperiencereport;
  adexperiencereport<T = adexperiencereport_v1.Adexperiencereport>(
      versionOrOptions: 'v1'|adexperiencereport_v1.Options) {
    return this.getAPI<T>('adexperiencereport', versionOrOptions);
  }
  admin(version: 'datatransfer_v1'): admin_datatransfer_v1.Admin;
  admin(options: admin_datatransfer_v1.Options): admin_datatransfer_v1.Admin;
  admin(version: 'directory_v1'): admin_directory_v1.Admin;
  admin(options: admin_directory_v1.Options): admin_directory_v1.Admin;
  admin(version: 'reports_v1'): admin_reports_v1.Admin;
  admin(options: admin_reports_v1.Options): admin_reports_v1.Admin;
  admin<
      T = admin_datatransfer_v1.Admin | admin_directory_v1.Admin |
          admin_reports_v1.Admin>(
      versionOrOptions: 'datatransfer_v1'|
      admin_datatransfer_v1.Options|'directory_v1'|
      admin_directory_v1.Options|'reports_v1'|admin_reports_v1.Options) {
    return this.getAPI<T>('admin', versionOrOptions);
  }
  adsense(version: 'v1_4'): adsense_v1_4.Adsense;
  adsense(options: adsense_v1_4.Options): adsense_v1_4.Adsense;
  adsense<T = adsense_v1_4.Adsense>(versionOrOptions: 'v1_4'|
                                    adsense_v1_4.Options) {
    return this.getAPI<T>('adsense', versionOrOptions);
  }
  adsensehost(version: 'v4_1'): adsensehost_v4_1.Adsensehost;
  adsensehost(options: adsensehost_v4_1.Options): adsensehost_v4_1.Adsensehost;
  adsensehost<T = adsensehost_v4_1.Adsensehost>(versionOrOptions: 'v4_1'|
                                                adsensehost_v4_1.Options) {
    return this.getAPI<T>('adsensehost', versionOrOptions);
  }
  analytics(version: 'v2_4'): analytics_v2_4.Analytics;
  analytics(options: analytics_v2_4.Options): analytics_v2_4.Analytics;
  analytics(version: 'v3'): analytics_v3.Analytics;
  analytics(options: analytics_v3.Options): analytics_v3.Analytics;
  analytics<T = analytics_v2_4.Analytics | analytics_v3.Analytics>(
      versionOrOptions: 'v2_4'|analytics_v2_4.Options|'v3'|
      analytics_v3.Options) {
    return this.getAPI<T>('analytics', versionOrOptions);
  }
  analyticsreporting(version: 'v4'): analyticsreporting_v4.Analyticsreporting;
  analyticsreporting(options: analyticsreporting_v4.Options):
      analyticsreporting_v4.Analyticsreporting;
  analyticsreporting<T = analyticsreporting_v4.Analyticsreporting>(
      versionOrOptions: 'v4'|analyticsreporting_v4.Options) {
    return this.getAPI<T>('analyticsreporting', versionOrOptions);
  }
  androiddeviceprovisioning(version: 'v1'):
      androiddeviceprovisioning_v1.Androiddeviceprovisioning;
  androiddeviceprovisioning(options: androiddeviceprovisioning_v1.Options):
      androiddeviceprovisioning_v1.Androiddeviceprovisioning;
  androiddeviceprovisioning<
      T = androiddeviceprovisioning_v1.Androiddeviceprovisioning>(
      versionOrOptions: 'v1'|androiddeviceprovisioning_v1.Options) {
    return this.getAPI<T>('androiddeviceprovisioning', versionOrOptions);
  }
  androidenterprise(version: 'v1'): androidenterprise_v1.Androidenterprise;
  androidenterprise(options: androidenterprise_v1.Options):
      androidenterprise_v1.Androidenterprise;
  androidenterprise<T = androidenterprise_v1.Androidenterprise>(
      versionOrOptions: 'v1'|androidenterprise_v1.Options) {
    return this.getAPI<T>('androidenterprise', versionOrOptions);
  }
  androidmanagement(version: 'v1'): androidmanagement_v1.Androidmanagement;
  androidmanagement(options: androidmanagement_v1.Options):
      androidmanagement_v1.Androidmanagement;
  androidmanagement<T = androidmanagement_v1.Androidmanagement>(
      versionOrOptions: 'v1'|androidmanagement_v1.Options) {
    return this.getAPI<T>('androidmanagement', versionOrOptions);
  }
  androidpublisher(version: 'v1_1'): androidpublisher_v1_1.Androidpublisher;
  androidpublisher(options: androidpublisher_v1_1.Options):
      androidpublisher_v1_1.Androidpublisher;
  androidpublisher(version: 'v1'): androidpublisher_v1.Androidpublisher;
  androidpublisher(options: androidpublisher_v1.Options):
      androidpublisher_v1.Androidpublisher;
  androidpublisher(version: 'v2'): androidpublisher_v2.Androidpublisher;
  androidpublisher(options: androidpublisher_v2.Options):
      androidpublisher_v2.Androidpublisher;
  androidpublisher<
      T = androidpublisher_v1_1.Androidpublisher |
          androidpublisher_v1.Androidpublisher |
          androidpublisher_v2.Androidpublisher>(
      versionOrOptions: 'v1_1'|
      androidpublisher_v1_1.Options|'v1'|
      androidpublisher_v1.Options|'v2'|androidpublisher_v2.Options) {
    return this.getAPI<T>('androidpublisher', versionOrOptions);
  }
  appengine(version: 'v1'): appengine_v1.Appengine;
  appengine(options: appengine_v1.Options): appengine_v1.Appengine;
  appengine(version: 'v1alpha'): appengine_v1alpha.Appengine;
  appengine(options: appengine_v1alpha.Options): appengine_v1alpha.Appengine;
  appengine(version: 'v1beta'): appengine_v1beta.Appengine;
  appengine(options: appengine_v1beta.Options): appengine_v1beta.Appengine;
  appengine(version: 'v1beta4'): appengine_v1beta4.Appengine;
  appengine(options: appengine_v1beta4.Options): appengine_v1beta4.Appengine;
  appengine(version: 'v1beta5'): appengine_v1beta5.Appengine;
  appengine(options: appengine_v1beta5.Options): appengine_v1beta5.Appengine;
  appengine<
      T = appengine_v1.Appengine | appengine_v1alpha.Appengine |
          appengine_v1beta.Appengine | appengine_v1beta4.Appengine |
          appengine_v1beta5.Appengine>(
      versionOrOptions: 'v1'|appengine_v1.Options|'v1alpha'|
      appengine_v1alpha.Options|'v1beta'|
      appengine_v1beta.Options|'v1beta4'|
      appengine_v1beta4.Options|'v1beta5'|appengine_v1beta5.Options) {
    return this.getAPI<T>('appengine', versionOrOptions);
  }
  appsactivity(version: 'v1'): appsactivity_v1.Appsactivity;
  appsactivity(options: appsactivity_v1.Options): appsactivity_v1.Appsactivity;
  appsactivity<T = appsactivity_v1.Appsactivity>(versionOrOptions: 'v1'|
                                                 appsactivity_v1.Options) {
    return this.getAPI<T>('appsactivity', versionOrOptions);
  }
  appstate(version: 'v1'): appstate_v1.Appstate;
  appstate(options: appstate_v1.Options): appstate_v1.Appstate;
  appstate<T = appstate_v1.Appstate>(versionOrOptions: 'v1'|
                                     appstate_v1.Options) {
    return this.getAPI<T>('appstate', versionOrOptions);
  }
  bigquery(version: 'v2'): bigquery_v2.Bigquery;
  bigquery(options: bigquery_v2.Options): bigquery_v2.Bigquery;
  bigquery<T = bigquery_v2.Bigquery>(versionOrOptions: 'v2'|
                                     bigquery_v2.Options) {
    return this.getAPI<T>('bigquery', versionOrOptions);
  }
  bigquerydatatransfer(version: 'v1'):
      bigquerydatatransfer_v1.Bigquerydatatransfer;
  bigquerydatatransfer(options: bigquerydatatransfer_v1.Options):
      bigquerydatatransfer_v1.Bigquerydatatransfer;
  bigquerydatatransfer<T = bigquerydatatransfer_v1.Bigquerydatatransfer>(
      versionOrOptions: 'v1'|bigquerydatatransfer_v1.Options) {
    return this.getAPI<T>('bigquerydatatransfer', versionOrOptions);
  }
  blogger(version: 'v2'): blogger_v2.Blogger;
  blogger(options: blogger_v2.Options): blogger_v2.Blogger;
  blogger(version: 'v3'): blogger_v3.Blogger;
  blogger(options: blogger_v3.Options): blogger_v3.Blogger;
  blogger<T = blogger_v2.Blogger | blogger_v3.Blogger>(
      versionOrOptions: 'v2'|blogger_v2.Options|'v3'|blogger_v3.Options) {
    return this.getAPI<T>('blogger', versionOrOptions);
  }
  books(version: 'v1'): books_v1.Books;
  books(options: books_v1.Options): books_v1.Books;
  books<T = books_v1.Books>(versionOrOptions: 'v1'|books_v1.Options) {
    return this.getAPI<T>('books', versionOrOptions);
  }
  calendar(version: 'v3'): calendar_v3.Calendar;
  calendar(options: calendar_v3.Options): calendar_v3.Calendar;
  calendar<T = calendar_v3.Calendar>(versionOrOptions: 'v3'|
                                     calendar_v3.Options) {
    return this.getAPI<T>('calendar', versionOrOptions);
  }
  chat(version: 'v1'): chat_v1.Chat;
  chat(options: chat_v1.Options): chat_v1.Chat;
  chat<T = chat_v1.Chat>(versionOrOptions: 'v1'|chat_v1.Options) {
    return this.getAPI<T>('chat', versionOrOptions);
  }
  civicinfo(version: 'v2'): civicinfo_v2.Civicinfo;
  civicinfo(options: civicinfo_v2.Options): civicinfo_v2.Civicinfo;
  civicinfo<T = civicinfo_v2.Civicinfo>(versionOrOptions: 'v2'|
                                        civicinfo_v2.Options) {
    return this.getAPI<T>('civicinfo', versionOrOptions);
  }
  classroom(version: 'v1'): classroom_v1.Classroom;
  classroom(options: classroom_v1.Options): classroom_v1.Classroom;
  classroom<T = classroom_v1.Classroom>(versionOrOptions: 'v1'|
                                        classroom_v1.Options) {
    return this.getAPI<T>('classroom', versionOrOptions);
  }
  cloudbilling(version: 'v1'): cloudbilling_v1.Cloudbilling;
  cloudbilling(options: cloudbilling_v1.Options): cloudbilling_v1.Cloudbilling;
  cloudbilling<T = cloudbilling_v1.Cloudbilling>(versionOrOptions: 'v1'|
                                                 cloudbilling_v1.Options) {
    return this.getAPI<T>('cloudbilling', versionOrOptions);
  }
  cloudbuild(version: 'v1'): cloudbuild_v1.Cloudbuild;
  cloudbuild(options: cloudbuild_v1.Options): cloudbuild_v1.Cloudbuild;
  cloudbuild<T = cloudbuild_v1.Cloudbuild>(versionOrOptions: 'v1'|
                                           cloudbuild_v1.Options) {
    return this.getAPI<T>('cloudbuild', versionOrOptions);
  }
  clouddebugger(version: 'v2'): clouddebugger_v2.Clouddebugger;
  clouddebugger(options: clouddebugger_v2.Options):
      clouddebugger_v2.Clouddebugger;
  clouddebugger<T = clouddebugger_v2.Clouddebugger>(versionOrOptions: 'v2'|
                                                    clouddebugger_v2.Options) {
    return this.getAPI<T>('clouddebugger', versionOrOptions);
  }
  clouderrorreporting(version: 'v1beta1'):
      clouderrorreporting_v1beta1.Clouderrorreporting;
  clouderrorreporting(options: clouderrorreporting_v1beta1.Options):
      clouderrorreporting_v1beta1.Clouderrorreporting;
  clouderrorreporting<T = clouderrorreporting_v1beta1.Clouderrorreporting>(
      versionOrOptions: 'v1beta1'|clouderrorreporting_v1beta1.Options) {
    return this.getAPI<T>('clouderrorreporting', versionOrOptions);
  }
  cloudfunctions(version: 'v1'): cloudfunctions_v1.Cloudfunctions;
  cloudfunctions(options: cloudfunctions_v1.Options):
      cloudfunctions_v1.Cloudfunctions;
  cloudfunctions(version: 'v1beta2'): cloudfunctions_v1beta2.Cloudfunctions;
  cloudfunctions(options: cloudfunctions_v1beta2.Options):
      cloudfunctions_v1beta2.Cloudfunctions;
  cloudfunctions<
      T = cloudfunctions_v1.Cloudfunctions |
          cloudfunctions_v1beta2.Cloudfunctions>(
      versionOrOptions: 'v1'|
      cloudfunctions_v1.Options|'v1beta2'|cloudfunctions_v1beta2.Options) {
    return this.getAPI<T>('cloudfunctions', versionOrOptions);
  }
  cloudiot(version: 'v1'): cloudiot_v1.Cloudiot;
  cloudiot(options: cloudiot_v1.Options): cloudiot_v1.Cloudiot;
  cloudiot<T = cloudiot_v1.Cloudiot>(versionOrOptions: 'v1'|
                                     cloudiot_v1.Options) {
    return this.getAPI<T>('cloudiot', versionOrOptions);
  }
  cloudkms(version: 'v1'): cloudkms_v1.Cloudkms;
  cloudkms(options: cloudkms_v1.Options): cloudkms_v1.Cloudkms;
  cloudkms<T = cloudkms_v1.Cloudkms>(versionOrOptions: 'v1'|
                                     cloudkms_v1.Options) {
    return this.getAPI<T>('cloudkms', versionOrOptions);
  }
  cloudresourcemanager(version: 'v1'):
      cloudresourcemanager_v1.Cloudresourcemanager;
  cloudresourcemanager(options: cloudresourcemanager_v1.Options):
      cloudresourcemanager_v1.Cloudresourcemanager;
  cloudresourcemanager(version: 'v1beta1'):
      cloudresourcemanager_v1beta1.Cloudresourcemanager;
  cloudresourcemanager(options: cloudresourcemanager_v1beta1.Options):
      cloudresourcemanager_v1beta1.Cloudresourcemanager;
  cloudresourcemanager(version: 'v2'):
      cloudresourcemanager_v2.Cloudresourcemanager;
  cloudresourcemanager(options: cloudresourcemanager_v2.Options):
      cloudresourcemanager_v2.Cloudresourcemanager;
  cloudresourcemanager(version: 'v2beta1'):
      cloudresourcemanager_v2beta1.Cloudresourcemanager;
  cloudresourcemanager(options: cloudresourcemanager_v2beta1.Options):
      cloudresourcemanager_v2beta1.Cloudresourcemanager;
  cloudresourcemanager<
      T = cloudresourcemanager_v1.Cloudresourcemanager |
          cloudresourcemanager_v1beta1.Cloudresourcemanager |
          cloudresourcemanager_v2.Cloudresourcemanager |
          cloudresourcemanager_v2beta1.Cloudresourcemanager>(
      versionOrOptions: 'v1'|
      cloudresourcemanager_v1.Options|'v1beta1'|
      cloudresourcemanager_v1beta1.Options|'v2'|
      cloudresourcemanager_v2.Options|'v2beta1'|
      cloudresourcemanager_v2beta1.Options) {
    return this.getAPI<T>('cloudresourcemanager', versionOrOptions);
  }
  cloudshell(version: 'v1'): cloudshell_v1.Cloudshell;
  cloudshell(options: cloudshell_v1.Options): cloudshell_v1.Cloudshell;
  cloudshell(version: 'v1alpha1'): cloudshell_v1alpha1.Cloudshell;
  cloudshell(options: cloudshell_v1alpha1.Options):
      cloudshell_v1alpha1.Cloudshell;
  cloudshell<T = cloudshell_v1.Cloudshell | cloudshell_v1alpha1.Cloudshell>(
      versionOrOptions: 'v1'|
      cloudshell_v1.Options|'v1alpha1'|cloudshell_v1alpha1.Options) {
    return this.getAPI<T>('cloudshell', versionOrOptions);
  }
  cloudtasks(version: 'v2beta2'): cloudtasks_v2beta2.Cloudtasks;
  cloudtasks(options: cloudtasks_v2beta2.Options):
      cloudtasks_v2beta2.Cloudtasks;
  cloudtasks<T = cloudtasks_v2beta2.Cloudtasks>(versionOrOptions: 'v2beta2'|
                                                cloudtasks_v2beta2.Options) {
    return this.getAPI<T>('cloudtasks', versionOrOptions);
  }
  cloudtrace(version: 'v1'): cloudtrace_v1.Cloudtrace;
  cloudtrace(options: cloudtrace_v1.Options): cloudtrace_v1.Cloudtrace;
  cloudtrace(version: 'v2'): cloudtrace_v2.Cloudtrace;
  cloudtrace(options: cloudtrace_v2.Options): cloudtrace_v2.Cloudtrace;
  cloudtrace<T = cloudtrace_v1.Cloudtrace | cloudtrace_v2.Cloudtrace>(
      versionOrOptions: 'v1'|cloudtrace_v1.Options|'v2'|cloudtrace_v2.Options) {
    return this.getAPI<T>('cloudtrace', versionOrOptions);
  }
  composer(version: 'v1beta1'): composer_v1beta1.Composer;
  composer(options: composer_v1beta1.Options): composer_v1beta1.Composer;
  composer<T = composer_v1beta1.Composer>(versionOrOptions: 'v1beta1'|
                                          composer_v1beta1.Options) {
    return this.getAPI<T>('composer', versionOrOptions);
  }
  compute(version: 'alpha'): compute_alpha.Compute;
  compute(options: compute_alpha.Options): compute_alpha.Compute;
  compute(version: 'beta'): compute_beta.Compute;
  compute(options: compute_beta.Options): compute_beta.Compute;
  compute(version: 'v1'): compute_v1.Compute;
  compute(options: compute_v1.Options): compute_v1.Compute;
  compute<
      T = compute_alpha.Compute | compute_beta.Compute | compute_v1.Compute>(
      versionOrOptions: 'alpha'|compute_alpha.Options|'beta'|
      compute_beta.Options|'v1'|compute_v1.Options) {
    return this.getAPI<T>('compute', versionOrOptions);
  }
  container(version: 'v1'): container_v1.Container;
  container(options: container_v1.Options): container_v1.Container;
  container(version: 'v1beta1'): container_v1beta1.Container;
  container(options: container_v1beta1.Options): container_v1beta1.Container;
  container<T = container_v1.Container | container_v1beta1.Container>(
      versionOrOptions: 'v1'|container_v1.Options|'v1beta1'|
      container_v1beta1.Options) {
    return this.getAPI<T>('container', versionOrOptions);
  }
  content(version: 'v2'): content_v2.Content;
  content(options: content_v2.Options): content_v2.Content;
  content(version: 'v2sandbox'): content_v2sandbox.Content;
  content(options: content_v2sandbox.Options): content_v2sandbox.Content;
  content<T = content_v2.Content | content_v2sandbox.Content>(
      versionOrOptions: 'v2'|content_v2.Options|'v2sandbox'|
      content_v2sandbox.Options) {
    return this.getAPI<T>('content', versionOrOptions);
  }
  customsearch(version: 'v1'): customsearch_v1.Customsearch;
  customsearch(options: customsearch_v1.Options): customsearch_v1.Customsearch;
  customsearch<T = customsearch_v1.Customsearch>(versionOrOptions: 'v1'|
                                                 customsearch_v1.Options) {
    return this.getAPI<T>('customsearch', versionOrOptions);
  }
  dataflow(version: 'v1b3'): dataflow_v1b3.Dataflow;
  dataflow(options: dataflow_v1b3.Options): dataflow_v1b3.Dataflow;
  dataflow<T = dataflow_v1b3.Dataflow>(versionOrOptions: 'v1b3'|
                                       dataflow_v1b3.Options) {
    return this.getAPI<T>('dataflow', versionOrOptions);
  }
  dataproc(version: 'v1'): dataproc_v1.Dataproc;
  dataproc(options: dataproc_v1.Options): dataproc_v1.Dataproc;
  dataproc(version: 'v1beta2'): dataproc_v1beta2.Dataproc;
  dataproc(options: dataproc_v1beta2.Options): dataproc_v1beta2.Dataproc;
  dataproc<T = dataproc_v1.Dataproc | dataproc_v1beta2.Dataproc>(
      versionOrOptions: 'v1'|dataproc_v1.Options|'v1beta2'|
      dataproc_v1beta2.Options) {
    return this.getAPI<T>('dataproc', versionOrOptions);
  }
  datastore(version: 'v1'): datastore_v1.Datastore;
  datastore(options: datastore_v1.Options): datastore_v1.Datastore;
  datastore(version: 'v1beta1'): datastore_v1beta1.Datastore;
  datastore(options: datastore_v1beta1.Options): datastore_v1beta1.Datastore;
  datastore(version: 'v1beta3'): datastore_v1beta3.Datastore;
  datastore(options: datastore_v1beta3.Options): datastore_v1beta3.Datastore;
  datastore<
      T = datastore_v1.Datastore | datastore_v1beta1.Datastore |
          datastore_v1beta3.Datastore>(
      versionOrOptions: 'v1'|datastore_v1.Options|'v1beta1'|
      datastore_v1beta1.Options|'v1beta3'|datastore_v1beta3.Options) {
    return this.getAPI<T>('datastore', versionOrOptions);
  }
  deploymentmanager(version: 'alpha'):
      deploymentmanager_alpha.Deploymentmanager;
  deploymentmanager(options: deploymentmanager_alpha.Options):
      deploymentmanager_alpha.Deploymentmanager;
  deploymentmanager(version: 'v2'): deploymentmanager_v2.Deploymentmanager;
  deploymentmanager(options: deploymentmanager_v2.Options):
      deploymentmanager_v2.Deploymentmanager;
  deploymentmanager(version: 'v2beta'):
      deploymentmanager_v2beta.Deploymentmanager;
  deploymentmanager(options: deploymentmanager_v2beta.Options):
      deploymentmanager_v2beta.Deploymentmanager;
  deploymentmanager<
      T = deploymentmanager_alpha.Deploymentmanager |
          deploymentmanager_v2.Deploymentmanager |
          deploymentmanager_v2beta.Deploymentmanager>(
      versionOrOptions: 'alpha'|
      deploymentmanager_alpha.Options|'v2'|
      deploymentmanager_v2.Options|'v2beta'|deploymentmanager_v2beta.Options) {
    return this.getAPI<T>('deploymentmanager', versionOrOptions);
  }
  dfareporting(version: 'v2_8'): dfareporting_v2_8.Dfareporting;
  dfareporting(options: dfareporting_v2_8.Options):
      dfareporting_v2_8.Dfareporting;
  dfareporting(version: 'v3_0'): dfareporting_v3_0.Dfareporting;
  dfareporting(options: dfareporting_v3_0.Options):
      dfareporting_v3_0.Dfareporting;
  dfareporting<
      T = dfareporting_v2_8.Dfareporting | dfareporting_v3_0.Dfareporting>(
      versionOrOptions: 'v2_8'|
      dfareporting_v2_8.Options|'v3_0'|dfareporting_v3_0.Options) {
    return this.getAPI<T>('dfareporting', versionOrOptions);
  }
  dialogflow(version: 'v2'): dialogflow_v2.Dialogflow;
  dialogflow(options: dialogflow_v2.Options): dialogflow_v2.Dialogflow;
  dialogflow(version: 'v2beta1'): dialogflow_v2beta1.Dialogflow;
  dialogflow(options: dialogflow_v2beta1.Options):
      dialogflow_v2beta1.Dialogflow;
  dialogflow<T = dialogflow_v2.Dialogflow | dialogflow_v2beta1.Dialogflow>(
      versionOrOptions: 'v2'|dialogflow_v2.Options|'v2beta1'|
      dialogflow_v2beta1.Options) {
    return this.getAPI<T>('dialogflow', versionOrOptions);
  }
  digitalassetlinks(version: 'v1'): digitalassetlinks_v1.Digitalassetlinks;
  digitalassetlinks(options: digitalassetlinks_v1.Options):
      digitalassetlinks_v1.Digitalassetlinks;
  digitalassetlinks<T = digitalassetlinks_v1.Digitalassetlinks>(
      versionOrOptions: 'v1'|digitalassetlinks_v1.Options) {
    return this.getAPI<T>('digitalassetlinks', versionOrOptions);
  }
  discovery(version: 'v1'): discovery_v1.Discovery;
  discovery(options: discovery_v1.Options): discovery_v1.Discovery;
  discovery<T = discovery_v1.Discovery>(versionOrOptions: 'v1'|
                                        discovery_v1.Options) {
    return this.getAPI<T>('discovery', versionOrOptions);
  }
  dlp(version: 'v2'): dlp_v2.Dlp;
  dlp(options: dlp_v2.Options): dlp_v2.Dlp;
  dlp<T = dlp_v2.Dlp>(versionOrOptions: 'v2'|dlp_v2.Options) {
    return this.getAPI<T>('dlp', versionOrOptions);
  }
  dns(version: 'v1'): dns_v1.Dns;
  dns(options: dns_v1.Options): dns_v1.Dns;
  dns(version: 'v1beta2'): dns_v1beta2.Dns;
  dns(options: dns_v1beta2.Options): dns_v1beta2.Dns;
  dns(version: 'v2beta1'): dns_v2beta1.Dns;
  dns(options: dns_v2beta1.Options): dns_v2beta1.Dns;
  dns<T = dns_v1.Dns | dns_v1beta2.Dns | dns_v2beta1.Dns>(
      versionOrOptions: 'v1'|dns_v1.Options|'v1beta2'|
      dns_v1beta2.Options|'v2beta1'|dns_v2beta1.Options) {
    return this.getAPI<T>('dns', versionOrOptions);
  }
  doubleclickbidmanager(version: 'v1'):
      doubleclickbidmanager_v1.Doubleclickbidmanager;
  doubleclickbidmanager(options: doubleclickbidmanager_v1.Options):
      doubleclickbidmanager_v1.Doubleclickbidmanager;
  doubleclickbidmanager<T = doubleclickbidmanager_v1.Doubleclickbidmanager>(
      versionOrOptions: 'v1'|doubleclickbidmanager_v1.Options) {
    return this.getAPI<T>('doubleclickbidmanager', versionOrOptions);
  }
  doubleclicksearch(version: 'v2'): doubleclicksearch_v2.Doubleclicksearch;
  doubleclicksearch(options: doubleclicksearch_v2.Options):
      doubleclicksearch_v2.Doubleclicksearch;
  doubleclicksearch<T = doubleclicksearch_v2.Doubleclicksearch>(
      versionOrOptions: 'v2'|doubleclicksearch_v2.Options) {
    return this.getAPI<T>('doubleclicksearch', versionOrOptions);
  }
  drive(version: 'v2'): drive_v2.Drive;
  drive(options: drive_v2.Options): drive_v2.Drive;
  drive(version: 'v3'): drive_v3.Drive;
  drive(options: drive_v3.Options): drive_v3.Drive;
  drive<T = drive_v2.Drive | drive_v3.Drive>(versionOrOptions: 'v2'|
                                             drive_v2.Options|'v3'|
                                             drive_v3.Options) {
    return this.getAPI<T>('drive', versionOrOptions);
  }
  firebasedynamiclinks(version: 'v1'):
      firebasedynamiclinks_v1.Firebasedynamiclinks;
  firebasedynamiclinks(options: firebasedynamiclinks_v1.Options):
      firebasedynamiclinks_v1.Firebasedynamiclinks;
  firebasedynamiclinks<T = firebasedynamiclinks_v1.Firebasedynamiclinks>(
      versionOrOptions: 'v1'|firebasedynamiclinks_v1.Options) {
    return this.getAPI<T>('firebasedynamiclinks', versionOrOptions);
  }
  firebaserules(version: 'v1'): firebaserules_v1.Firebaserules;
  firebaserules(options: firebaserules_v1.Options):
      firebaserules_v1.Firebaserules;
  firebaserules<T = firebaserules_v1.Firebaserules>(versionOrOptions: 'v1'|
                                                    firebaserules_v1.Options) {
    return this.getAPI<T>('firebaserules', versionOrOptions);
  }
  firestore(version: 'v1beta1'): firestore_v1beta1.Firestore;
  firestore(options: firestore_v1beta1.Options): firestore_v1beta1.Firestore;
  firestore<T = firestore_v1beta1.Firestore>(versionOrOptions: 'v1beta1'|
                                             firestore_v1beta1.Options) {
    return this.getAPI<T>('firestore', versionOrOptions);
  }
  fitness(version: 'v1'): fitness_v1.Fitness;
  fitness(options: fitness_v1.Options): fitness_v1.Fitness;
  fitness<T = fitness_v1.Fitness>(versionOrOptions: 'v1'|fitness_v1.Options) {
    return this.getAPI<T>('fitness', versionOrOptions);
  }
  fusiontables(version: 'v1'): fusiontables_v1.Fusiontables;
  fusiontables(options: fusiontables_v1.Options): fusiontables_v1.Fusiontables;
  fusiontables(version: 'v2'): fusiontables_v2.Fusiontables;
  fusiontables(options: fusiontables_v2.Options): fusiontables_v2.Fusiontables;
  fusiontables<T = fusiontables_v1.Fusiontables | fusiontables_v2.Fusiontables>(
      versionOrOptions: 'v1'|fusiontables_v1.Options|'v2'|
      fusiontables_v2.Options) {
    return this.getAPI<T>('fusiontables', versionOrOptions);
  }
  games(version: 'v1'): games_v1.Games;
  games(options: games_v1.Options): games_v1.Games;
  games<T = games_v1.Games>(versionOrOptions: 'v1'|games_v1.Options) {
    return this.getAPI<T>('games', versionOrOptions);
  }
  gamesConfiguration(version: 'v1configuration'):
      gamesConfiguration_v1configuration.Gamesconfiguration;
  gamesConfiguration(options: gamesConfiguration_v1configuration.Options):
      gamesConfiguration_v1configuration.Gamesconfiguration;
  gamesConfiguration<T = gamesConfiguration_v1configuration.Gamesconfiguration>(
      versionOrOptions: 'v1configuration'|
      gamesConfiguration_v1configuration.Options) {
    return this.getAPI<T>('gamesConfiguration', versionOrOptions);
  }
  gamesManagement(version: 'v1management'):
      gamesManagement_v1management.Gamesmanagement;
  gamesManagement(options: gamesManagement_v1management.Options):
      gamesManagement_v1management.Gamesmanagement;
  gamesManagement<T = gamesManagement_v1management.Gamesmanagement>(
      versionOrOptions: 'v1management'|gamesManagement_v1management.Options) {
    return this.getAPI<T>('gamesManagement', versionOrOptions);
  }
  genomics(version: 'v1'): genomics_v1.Genomics;
  genomics(options: genomics_v1.Options): genomics_v1.Genomics;
  genomics(version: 'v1alpha2'): genomics_v1alpha2.Genomics;
  genomics(options: genomics_v1alpha2.Options): genomics_v1alpha2.Genomics;
  genomics(version: 'v2alpha1'): genomics_v2alpha1.Genomics;
  genomics(options: genomics_v2alpha1.Options): genomics_v2alpha1.Genomics;
  genomics<
      T = genomics_v1.Genomics | genomics_v1alpha2.Genomics |
          genomics_v2alpha1.Genomics>(
      versionOrOptions: 'v1'|genomics_v1.Options|'v1alpha2'|
      genomics_v1alpha2.Options|'v2alpha1'|genomics_v2alpha1.Options) {
    return this.getAPI<T>('genomics', versionOrOptions);
  }
  gmail(version: 'v1'): gmail_v1.Gmail;
  gmail(options: gmail_v1.Options): gmail_v1.Gmail;
  gmail<T = gmail_v1.Gmail>(versionOrOptions: 'v1'|gmail_v1.Options) {
    return this.getAPI<T>('gmail', versionOrOptions);
  }
  groupsmigration(version: 'v1'): groupsmigration_v1.Groupsmigration;
  groupsmigration(options: groupsmigration_v1.Options):
      groupsmigration_v1.Groupsmigration;
  groupsmigration<T = groupsmigration_v1.Groupsmigration>(
      versionOrOptions: 'v1'|groupsmigration_v1.Options) {
    return this.getAPI<T>('groupsmigration', versionOrOptions);
  }
  groupssettings(version: 'v1'): groupssettings_v1.Groupssettings;
  groupssettings(options: groupssettings_v1.Options):
      groupssettings_v1.Groupssettings;
  groupssettings<T = groupssettings_v1.Groupssettings>(
      versionOrOptions: 'v1'|groupssettings_v1.Options) {
    return this.getAPI<T>('groupssettings', versionOrOptions);
  }
  iam(version: 'v1'): iam_v1.Iam;
  iam(options: iam_v1.Options): iam_v1.Iam;
  iam<T = iam_v1.Iam>(versionOrOptions: 'v1'|iam_v1.Options) {
    return this.getAPI<T>('iam', versionOrOptions);
  }
  identitytoolkit(version: 'v3'): identitytoolkit_v3.Identitytoolkit;
  identitytoolkit(options: identitytoolkit_v3.Options):
      identitytoolkit_v3.Identitytoolkit;
  identitytoolkit<T = identitytoolkit_v3.Identitytoolkit>(
      versionOrOptions: 'v3'|identitytoolkit_v3.Options) {
    return this.getAPI<T>('identitytoolkit', versionOrOptions);
  }
  kgsearch(version: 'v1'): kgsearch_v1.Kgsearch;
  kgsearch(options: kgsearch_v1.Options): kgsearch_v1.Kgsearch;
  kgsearch<T = kgsearch_v1.Kgsearch>(versionOrOptions: 'v1'|
                                     kgsearch_v1.Options) {
    return this.getAPI<T>('kgsearch', versionOrOptions);
  }
  language(version: 'v1'): language_v1.Language;
  language(options: language_v1.Options): language_v1.Language;
  language(version: 'v1beta1'): language_v1beta1.Language;
  language(options: language_v1beta1.Options): language_v1beta1.Language;
  language(version: 'v1beta2'): language_v1beta2.Language;
  language(options: language_v1beta2.Options): language_v1beta2.Language;
  language<
      T = language_v1.Language | language_v1beta1.Language |
          language_v1beta2.Language>(
      versionOrOptions: 'v1'|language_v1.Options|'v1beta1'|
      language_v1beta1.Options|'v1beta2'|language_v1beta2.Options) {
    return this.getAPI<T>('language', versionOrOptions);
  }
  licensing(version: 'v1'): licensing_v1.Licensing;
  licensing(options: licensing_v1.Options): licensing_v1.Licensing;
  licensing<T = licensing_v1.Licensing>(versionOrOptions: 'v1'|
                                        licensing_v1.Options) {
    return this.getAPI<T>('licensing', versionOrOptions);
  }
  logging(version: 'v2'): logging_v2.Logging;
  logging(options: logging_v2.Options): logging_v2.Logging;
  logging(version: 'v2beta1'): logging_v2beta1.Logging;
  logging(options: logging_v2beta1.Options): logging_v2beta1.Logging;
  logging<T = logging_v2.Logging | logging_v2beta1.Logging>(
      versionOrOptions: 'v2'|logging_v2.Options|'v2beta1'|
      logging_v2beta1.Options) {
    return this.getAPI<T>('logging', versionOrOptions);
  }
  manufacturers(version: 'v1'): manufacturers_v1.Manufacturers;
  manufacturers(options: manufacturers_v1.Options):
      manufacturers_v1.Manufacturers;
  manufacturers<T = manufacturers_v1.Manufacturers>(versionOrOptions: 'v1'|
                                                    manufacturers_v1.Options) {
    return this.getAPI<T>('manufacturers', versionOrOptions);
  }
  mirror(version: 'v1'): mirror_v1.Mirror;
  mirror(options: mirror_v1.Options): mirror_v1.Mirror;
  mirror<T = mirror_v1.Mirror>(versionOrOptions: 'v1'|mirror_v1.Options) {
    return this.getAPI<T>('mirror', versionOrOptions);
  }
  ml(version: 'v1'): ml_v1.Ml;
  ml(options: ml_v1.Options): ml_v1.Ml;
  ml<T = ml_v1.Ml>(versionOrOptions: 'v1'|ml_v1.Options) {
    return this.getAPI<T>('ml', versionOrOptions);
  }
  monitoring(version: 'v3'): monitoring_v3.Monitoring;
  monitoring(options: monitoring_v3.Options): monitoring_v3.Monitoring;
  monitoring<T = monitoring_v3.Monitoring>(versionOrOptions: 'v3'|
                                           monitoring_v3.Options) {
    return this.getAPI<T>('monitoring', versionOrOptions);
  }
  oauth2(version: 'v1'): oauth2_v1.Oauth2;
  oauth2(options: oauth2_v1.Options): oauth2_v1.Oauth2;
  oauth2(version: 'v2'): oauth2_v2.Oauth2;
  oauth2(options: oauth2_v2.Options): oauth2_v2.Oauth2;
  oauth2<T = oauth2_v1.Oauth2 | oauth2_v2.Oauth2>(
      versionOrOptions: 'v1'|oauth2_v1.Options|'v2'|oauth2_v2.Options) {
    return this.getAPI<T>('oauth2', versionOrOptions);
  }
  oslogin(version: 'v1'): oslogin_v1.Oslogin;
  oslogin(options: oslogin_v1.Options): oslogin_v1.Oslogin;
  oslogin(version: 'v1alpha'): oslogin_v1alpha.Oslogin;
  oslogin(options: oslogin_v1alpha.Options): oslogin_v1alpha.Oslogin;
  oslogin(version: 'v1beta'): oslogin_v1beta.Oslogin;
  oslogin(options: oslogin_v1beta.Options): oslogin_v1beta.Oslogin;
  oslogin<
      T = oslogin_v1.Oslogin | oslogin_v1alpha.Oslogin |
          oslogin_v1beta.Oslogin>(
      versionOrOptions: 'v1'|oslogin_v1.Options|'v1alpha'|
      oslogin_v1alpha.Options|'v1beta'|oslogin_v1beta.Options) {
    return this.getAPI<T>('oslogin', versionOrOptions);
  }
  pagespeedonline(version: 'v1'): pagespeedonline_v1.Pagespeedonline;
  pagespeedonline(options: pagespeedonline_v1.Options):
      pagespeedonline_v1.Pagespeedonline;
  pagespeedonline(version: 'v2'): pagespeedonline_v2.Pagespeedonline;
  pagespeedonline(options: pagespeedonline_v2.Options):
      pagespeedonline_v2.Pagespeedonline;
  pagespeedonline(version: 'v4'): pagespeedonline_v4.Pagespeedonline;
  pagespeedonline(options: pagespeedonline_v4.Options):
      pagespeedonline_v4.Pagespeedonline;
  pagespeedonline<
      T = pagespeedonline_v1.Pagespeedonline |
          pagespeedonline_v2.Pagespeedonline |
          pagespeedonline_v4.Pagespeedonline>(
      versionOrOptions: 'v1'|pagespeedonline_v1.Options|'v2'|
      pagespeedonline_v2.Options|'v4'|pagespeedonline_v4.Options) {
    return this.getAPI<T>('pagespeedonline', versionOrOptions);
  }
  partners(version: 'v2'): partners_v2.Partners;
  partners(options: partners_v2.Options): partners_v2.Partners;
  partners<T = partners_v2.Partners>(versionOrOptions: 'v2'|
                                     partners_v2.Options) {
    return this.getAPI<T>('partners', versionOrOptions);
  }
  people(version: 'v1'): people_v1.People;
  people(options: people_v1.Options): people_v1.People;
  people<T = people_v1.People>(versionOrOptions: 'v1'|people_v1.Options) {
    return this.getAPI<T>('people', versionOrOptions);
  }
  playcustomapp(version: 'v1'): playcustomapp_v1.Playcustomapp;
  playcustomapp(options: playcustomapp_v1.Options):
      playcustomapp_v1.Playcustomapp;
  playcustomapp<T = playcustomapp_v1.Playcustomapp>(versionOrOptions: 'v1'|
                                                    playcustomapp_v1.Options) {
    return this.getAPI<T>('playcustomapp', versionOrOptions);
  }
  plus(version: 'v1'): plus_v1.Plus;
  plus(options: plus_v1.Options): plus_v1.Plus;
  plus<T = plus_v1.Plus>(versionOrOptions: 'v1'|plus_v1.Options) {
    return this.getAPI<T>('plus', versionOrOptions);
  }
  plusDomains(version: 'v1'): plusDomains_v1.Plusdomains;
  plusDomains(options: plusDomains_v1.Options): plusDomains_v1.Plusdomains;
  plusDomains<T = plusDomains_v1.Plusdomains>(versionOrOptions: 'v1'|
                                              plusDomains_v1.Options) {
    return this.getAPI<T>('plusDomains', versionOrOptions);
  }
  poly(version: 'v1'): poly_v1.Poly;
  poly(options: poly_v1.Options): poly_v1.Poly;
  poly<T = poly_v1.Poly>(versionOrOptions: 'v1'|poly_v1.Options) {
    return this.getAPI<T>('poly', versionOrOptions);
  }
  proximitybeacon(version: 'v1beta1'): proximitybeacon_v1beta1.Proximitybeacon;
  proximitybeacon(options: proximitybeacon_v1beta1.Options):
      proximitybeacon_v1beta1.Proximitybeacon;
  proximitybeacon<T = proximitybeacon_v1beta1.Proximitybeacon>(
      versionOrOptions: 'v1beta1'|proximitybeacon_v1beta1.Options) {
    return this.getAPI<T>('proximitybeacon', versionOrOptions);
  }
  pubsub(version: 'v1'): pubsub_v1.Pubsub;
  pubsub(options: pubsub_v1.Options): pubsub_v1.Pubsub;
  pubsub(version: 'v1beta1a'): pubsub_v1beta1a.Pubsub;
  pubsub(options: pubsub_v1beta1a.Options): pubsub_v1beta1a.Pubsub;
  pubsub(version: 'v1beta2'): pubsub_v1beta2.Pubsub;
  pubsub(options: pubsub_v1beta2.Options): pubsub_v1beta2.Pubsub;
  pubsub<T = pubsub_v1.Pubsub | pubsub_v1beta1a.Pubsub | pubsub_v1beta2.Pubsub>(
      versionOrOptions: 'v1'|pubsub_v1.Options|'v1beta1a'|
      pubsub_v1beta1a.Options|'v1beta2'|pubsub_v1beta2.Options) {
    return this.getAPI<T>('pubsub', versionOrOptions);
  }
  redis(version: 'v1beta1'): redis_v1beta1.Redis;
  redis(options: redis_v1beta1.Options): redis_v1beta1.Redis;
  redis<T = redis_v1beta1.Redis>(versionOrOptions: 'v1beta1'|
                                 redis_v1beta1.Options) {
    return this.getAPI<T>('redis', versionOrOptions);
  }
  replicapool(version: 'v1beta1'): replicapool_v1beta1.Replicapool;
  replicapool(options: replicapool_v1beta1.Options):
      replicapool_v1beta1.Replicapool;
  replicapool(version: 'v1beta2'): replicapool_v1beta2.Replicapool;
  replicapool(options: replicapool_v1beta2.Options):
      replicapool_v1beta2.Replicapool;
  replicapool<
      T = replicapool_v1beta1.Replicapool | replicapool_v1beta2.Replicapool>(
      versionOrOptions: 'v1beta1'|
      replicapool_v1beta1.Options|'v1beta2'|replicapool_v1beta2.Options) {
    return this.getAPI<T>('replicapool', versionOrOptions);
  }
  replicapoolupdater(version: 'v1beta1'):
      replicapoolupdater_v1beta1.Replicapoolupdater;
  replicapoolupdater(options: replicapoolupdater_v1beta1.Options):
      replicapoolupdater_v1beta1.Replicapoolupdater;
  replicapoolupdater<T = replicapoolupdater_v1beta1.Replicapoolupdater>(
      versionOrOptions: 'v1beta1'|replicapoolupdater_v1beta1.Options) {
    return this.getAPI<T>('replicapoolupdater', versionOrOptions);
  }
  reseller(version: 'v1'): reseller_v1.Reseller;
  reseller(options: reseller_v1.Options): reseller_v1.Reseller;
  reseller<T = reseller_v1.Reseller>(versionOrOptions: 'v1'|
                                     reseller_v1.Options) {
    return this.getAPI<T>('reseller', versionOrOptions);
  }
  resourceviews(version: 'v1beta1'): resourceviews_v1beta1.Resourceviews;
  resourceviews(options: resourceviews_v1beta1.Options):
      resourceviews_v1beta1.Resourceviews;
  resourceviews(version: 'v1beta2'): resourceviews_v1beta2.Resourceviews;
  resourceviews(options: resourceviews_v1beta2.Options):
      resourceviews_v1beta2.Resourceviews;
  resourceviews<
      T = resourceviews_v1beta1.Resourceviews |
          resourceviews_v1beta2.Resourceviews>(
      versionOrOptions: 'v1beta1'|
      resourceviews_v1beta1.Options|'v1beta2'|resourceviews_v1beta2.Options) {
    return this.getAPI<T>('resourceviews', versionOrOptions);
  }
  runtimeconfig(version: 'v1'): runtimeconfig_v1.Runtimeconfig;
  runtimeconfig(options: runtimeconfig_v1.Options):
      runtimeconfig_v1.Runtimeconfig;
  runtimeconfig(version: 'v1beta1'): runtimeconfig_v1beta1.Runtimeconfig;
  runtimeconfig(options: runtimeconfig_v1beta1.Options):
      runtimeconfig_v1beta1.Runtimeconfig;
  runtimeconfig<
      T = runtimeconfig_v1.Runtimeconfig | runtimeconfig_v1beta1.Runtimeconfig>(
      versionOrOptions: 'v1'|
      runtimeconfig_v1.Options|'v1beta1'|runtimeconfig_v1beta1.Options) {
    return this.getAPI<T>('runtimeconfig', versionOrOptions);
  }
  safebrowsing(version: 'v4'): safebrowsing_v4.Safebrowsing;
  safebrowsing(options: safebrowsing_v4.Options): safebrowsing_v4.Safebrowsing;
  safebrowsing<T = safebrowsing_v4.Safebrowsing>(versionOrOptions: 'v4'|
                                                 safebrowsing_v4.Options) {
    return this.getAPI<T>('safebrowsing', versionOrOptions);
  }
  script(version: 'v1'): script_v1.Script;
  script(options: script_v1.Options): script_v1.Script;
  script<T = script_v1.Script>(versionOrOptions: 'v1'|script_v1.Options) {
    return this.getAPI<T>('script', versionOrOptions);
  }
  searchconsole(version: 'v1'): searchconsole_v1.Searchconsole;
  searchconsole(options: searchconsole_v1.Options):
      searchconsole_v1.Searchconsole;
  searchconsole<T = searchconsole_v1.Searchconsole>(versionOrOptions: 'v1'|
                                                    searchconsole_v1.Options) {
    return this.getAPI<T>('searchconsole', versionOrOptions);
  }
  servicebroker(version: 'v1'): servicebroker_v1.Servicebroker;
  servicebroker(options: servicebroker_v1.Options):
      servicebroker_v1.Servicebroker;
  servicebroker(version: 'v1alpha1'): servicebroker_v1alpha1.Servicebroker;
  servicebroker(options: servicebroker_v1alpha1.Options):
      servicebroker_v1alpha1.Servicebroker;
  servicebroker(version: 'v1beta1'): servicebroker_v1beta1.Servicebroker;
  servicebroker(options: servicebroker_v1beta1.Options):
      servicebroker_v1beta1.Servicebroker;
  servicebroker<
      T = servicebroker_v1.Servicebroker |
          servicebroker_v1alpha1.Servicebroker |
          servicebroker_v1beta1.Servicebroker>(
      versionOrOptions: 'v1'|
      servicebroker_v1.Options|'v1alpha1'|
      servicebroker_v1alpha1.Options|'v1beta1'|servicebroker_v1beta1.Options) {
    return this.getAPI<T>('servicebroker', versionOrOptions);
  }
  serviceconsumermanagement(version: 'v1'):
      serviceconsumermanagement_v1.Serviceconsumermanagement;
  serviceconsumermanagement(options: serviceconsumermanagement_v1.Options):
      serviceconsumermanagement_v1.Serviceconsumermanagement;
  serviceconsumermanagement<
      T = serviceconsumermanagement_v1.Serviceconsumermanagement>(
      versionOrOptions: 'v1'|serviceconsumermanagement_v1.Options) {
    return this.getAPI<T>('serviceconsumermanagement', versionOrOptions);
  }
  servicecontrol(version: 'v1'): servicecontrol_v1.Servicecontrol;
  servicecontrol(options: servicecontrol_v1.Options):
      servicecontrol_v1.Servicecontrol;
  servicecontrol<T = servicecontrol_v1.Servicecontrol>(
      versionOrOptions: 'v1'|servicecontrol_v1.Options) {
    return this.getAPI<T>('servicecontrol', versionOrOptions);
  }
  servicemanagement(version: 'v1'): servicemanagement_v1.Servicemanagement;
  servicemanagement(options: servicemanagement_v1.Options):
      servicemanagement_v1.Servicemanagement;
  servicemanagement<T = servicemanagement_v1.Servicemanagement>(
      versionOrOptions: 'v1'|servicemanagement_v1.Options) {
    return this.getAPI<T>('servicemanagement', versionOrOptions);
  }
  serviceusage(version: 'v1beta1'): serviceusage_v1beta1.Serviceusage;
  serviceusage(options: serviceusage_v1beta1.Options):
      serviceusage_v1beta1.Serviceusage;
  serviceusage<T = serviceusage_v1beta1.Serviceusage>(
      versionOrOptions: 'v1beta1'|serviceusage_v1beta1.Options) {
    return this.getAPI<T>('serviceusage', versionOrOptions);
  }
  serviceuser(version: 'v1'): serviceuser_v1.Serviceuser;
  serviceuser(options: serviceuser_v1.Options): serviceuser_v1.Serviceuser;
  serviceuser<T = serviceuser_v1.Serviceuser>(versionOrOptions: 'v1'|
                                              serviceuser_v1.Options) {
    return this.getAPI<T>('serviceuser', versionOrOptions);
  }
  sheets(version: 'v4'): sheets_v4.Sheets;
  sheets(options: sheets_v4.Options): sheets_v4.Sheets;
  sheets<T = sheets_v4.Sheets>(versionOrOptions: 'v4'|sheets_v4.Options) {
    return this.getAPI<T>('sheets', versionOrOptions);
  }
  siteVerification(version: 'v1'): siteVerification_v1.Siteverification;
  siteVerification(options: siteVerification_v1.Options):
      siteVerification_v1.Siteverification;
  siteVerification<T = siteVerification_v1.Siteverification>(
      versionOrOptions: 'v1'|siteVerification_v1.Options) {
    return this.getAPI<T>('siteVerification', versionOrOptions);
  }
  slides(version: 'v1'): slides_v1.Slides;
  slides(options: slides_v1.Options): slides_v1.Slides;
  slides<T = slides_v1.Slides>(versionOrOptions: 'v1'|slides_v1.Options) {
    return this.getAPI<T>('slides', versionOrOptions);
  }
  sourcerepo(version: 'v1'): sourcerepo_v1.Sourcerepo;
  sourcerepo(options: sourcerepo_v1.Options): sourcerepo_v1.Sourcerepo;
  sourcerepo<T = sourcerepo_v1.Sourcerepo>(versionOrOptions: 'v1'|
                                           sourcerepo_v1.Options) {
    return this.getAPI<T>('sourcerepo', versionOrOptions);
  }
  spanner(version: 'v1'): spanner_v1.Spanner;
  spanner(options: spanner_v1.Options): spanner_v1.Spanner;
  spanner<T = spanner_v1.Spanner>(versionOrOptions: 'v1'|spanner_v1.Options) {
    return this.getAPI<T>('spanner', versionOrOptions);
  }
  spectrum(version: 'v1explorer'): spectrum_v1explorer.Spectrum;
  spectrum(options: spectrum_v1explorer.Options): spectrum_v1explorer.Spectrum;
  spectrum<T = spectrum_v1explorer.Spectrum>(versionOrOptions: 'v1explorer'|
                                             spectrum_v1explorer.Options) {
    return this.getAPI<T>('spectrum', versionOrOptions);
  }
  speech(version: 'v1'): speech_v1.Speech;
  speech(options: speech_v1.Options): speech_v1.Speech;
  speech(version: 'v1beta1'): speech_v1beta1.Speech;
  speech(options: speech_v1beta1.Options): speech_v1beta1.Speech;
  speech<T = speech_v1.Speech | speech_v1beta1.Speech>(
      versionOrOptions: 'v1'|speech_v1.Options|'v1beta1'|
      speech_v1beta1.Options) {
    return this.getAPI<T>('speech', versionOrOptions);
  }
  sqladmin(version: 'v1beta3'): sqladmin_v1beta3.Sqladmin;
  sqladmin(options: sqladmin_v1beta3.Options): sqladmin_v1beta3.Sqladmin;
  sqladmin(version: 'v1beta4'): sqladmin_v1beta4.Sqladmin;
  sqladmin(options: sqladmin_v1beta4.Options): sqladmin_v1beta4.Sqladmin;
  sqladmin<T = sqladmin_v1beta3.Sqladmin | sqladmin_v1beta4.Sqladmin>(
      versionOrOptions: 'v1beta3'|
      sqladmin_v1beta3.Options|'v1beta4'|sqladmin_v1beta4.Options) {
    return this.getAPI<T>('sqladmin', versionOrOptions);
  }
  storage(version: 'v1'): storage_v1.Storage;
  storage(options: storage_v1.Options): storage_v1.Storage;
  storage(version: 'v1beta1'): storage_v1beta1.Storage;
  storage(options: storage_v1beta1.Options): storage_v1beta1.Storage;
  storage(version: 'v1beta2'): storage_v1beta2.Storage;
  storage(options: storage_v1beta2.Options): storage_v1beta2.Storage;
  storage<
      T = storage_v1.Storage | storage_v1beta1.Storage |
          storage_v1beta2.Storage>(
      versionOrOptions: 'v1'|storage_v1.Options|'v1beta1'|
      storage_v1beta1.Options|'v1beta2'|storage_v1beta2.Options) {
    return this.getAPI<T>('storage', versionOrOptions);
  }
  storagetransfer(version: 'v1'): storagetransfer_v1.Storagetransfer;
  storagetransfer(options: storagetransfer_v1.Options):
      storagetransfer_v1.Storagetransfer;
  storagetransfer<T = storagetransfer_v1.Storagetransfer>(
      versionOrOptions: 'v1'|storagetransfer_v1.Options) {
    return this.getAPI<T>('storagetransfer', versionOrOptions);
  }
  streetviewpublish(version: 'v1'): streetviewpublish_v1.Streetviewpublish;
  streetviewpublish(options: streetviewpublish_v1.Options):
      streetviewpublish_v1.Streetviewpublish;
  streetviewpublish<T = streetviewpublish_v1.Streetviewpublish>(
      versionOrOptions: 'v1'|streetviewpublish_v1.Options) {
    return this.getAPI<T>('streetviewpublish', versionOrOptions);
  }
  surveys(version: 'v2'): surveys_v2.Surveys;
  surveys(options: surveys_v2.Options): surveys_v2.Surveys;
  surveys<T = surveys_v2.Surveys>(versionOrOptions: 'v2'|surveys_v2.Options) {
    return this.getAPI<T>('surveys', versionOrOptions);
  }
  tagmanager(version: 'v1'): tagmanager_v1.Tagmanager;
  tagmanager(options: tagmanager_v1.Options): tagmanager_v1.Tagmanager;
  tagmanager(version: 'v2'): tagmanager_v2.Tagmanager;
  tagmanager(options: tagmanager_v2.Options): tagmanager_v2.Tagmanager;
  tagmanager<T = tagmanager_v1.Tagmanager | tagmanager_v2.Tagmanager>(
      versionOrOptions: 'v1'|tagmanager_v1.Options|'v2'|tagmanager_v2.Options) {
    return this.getAPI<T>('tagmanager', versionOrOptions);
  }
  tasks(version: 'v1'): tasks_v1.Tasks;
  tasks(options: tasks_v1.Options): tasks_v1.Tasks;
  tasks<T = tasks_v1.Tasks>(versionOrOptions: 'v1'|tasks_v1.Options) {
    return this.getAPI<T>('tasks', versionOrOptions);
  }
  testing(version: 'v1'): testing_v1.Testing;
  testing(options: testing_v1.Options): testing_v1.Testing;
  testing<T = testing_v1.Testing>(versionOrOptions: 'v1'|testing_v1.Options) {
    return this.getAPI<T>('testing', versionOrOptions);
  }
  texttospeech(version: 'v1beta1'): texttospeech_v1beta1.Texttospeech;
  texttospeech(options: texttospeech_v1beta1.Options):
      texttospeech_v1beta1.Texttospeech;
  texttospeech<T = texttospeech_v1beta1.Texttospeech>(
      versionOrOptions: 'v1beta1'|texttospeech_v1beta1.Options) {
    return this.getAPI<T>('texttospeech', versionOrOptions);
  }
  toolresults(version: 'v1beta3'): toolresults_v1beta3.Toolresults;
  toolresults(options: toolresults_v1beta3.Options):
      toolresults_v1beta3.Toolresults;
  toolresults<T = toolresults_v1beta3.Toolresults>(
      versionOrOptions: 'v1beta3'|toolresults_v1beta3.Options) {
    return this.getAPI<T>('toolresults', versionOrOptions);
  }
  tpu(version: 'v1alpha1'): tpu_v1alpha1.Tpu;
  tpu(options: tpu_v1alpha1.Options): tpu_v1alpha1.Tpu;
  tpu<T = tpu_v1alpha1.Tpu>(versionOrOptions: 'v1alpha1'|tpu_v1alpha1.Options) {
    return this.getAPI<T>('tpu', versionOrOptions);
  }
  translate(version: 'v2'): translate_v2.Translate;
  translate(options: translate_v2.Options): translate_v2.Translate;
  translate<T = translate_v2.Translate>(versionOrOptions: 'v2'|
                                        translate_v2.Options) {
    return this.getAPI<T>('translate', versionOrOptions);
  }
  urlshortener(version: 'v1'): urlshortener_v1.Urlshortener;
  urlshortener(options: urlshortener_v1.Options): urlshortener_v1.Urlshortener;
  urlshortener<T = urlshortener_v1.Urlshortener>(versionOrOptions: 'v1'|
                                                 urlshortener_v1.Options) {
    return this.getAPI<T>('urlshortener', versionOrOptions);
  }
  vault(version: 'v1'): vault_v1.Vault;
  vault(options: vault_v1.Options): vault_v1.Vault;
  vault<T = vault_v1.Vault>(versionOrOptions: 'v1'|vault_v1.Options) {
    return this.getAPI<T>('vault', versionOrOptions);
  }
  videointelligence(version: 'v1'): videointelligence_v1.Videointelligence;
  videointelligence(options: videointelligence_v1.Options):
      videointelligence_v1.Videointelligence;
  videointelligence(version: 'v1beta1'):
      videointelligence_v1beta1.Videointelligence;
  videointelligence(options: videointelligence_v1beta1.Options):
      videointelligence_v1beta1.Videointelligence;
  videointelligence(version: 'v1beta2'):
      videointelligence_v1beta2.Videointelligence;
  videointelligence(options: videointelligence_v1beta2.Options):
      videointelligence_v1beta2.Videointelligence;
  videointelligence<
      T = videointelligence_v1.Videointelligence |
          videointelligence_v1beta1.Videointelligence |
          videointelligence_v1beta2.Videointelligence>(
      versionOrOptions: 'v1'|
      videointelligence_v1.Options|'v1beta1'|
      videointelligence_v1beta1.Options|'v1beta2'|
      videointelligence_v1beta2.Options) {
    return this.getAPI<T>('videointelligence', versionOrOptions);
  }
  vision(version: 'v1'): vision_v1.Vision;
  vision(options: vision_v1.Options): vision_v1.Vision;
  vision(version: 'v1p1beta1'): vision_v1p1beta1.Vision;
  vision(options: vision_v1p1beta1.Options): vision_v1p1beta1.Vision;
  vision(version: 'v1p2beta1'): vision_v1p2beta1.Vision;
  vision(options: vision_v1p2beta1.Options): vision_v1p2beta1.Vision;
  vision<
      T = vision_v1.Vision | vision_v1p1beta1.Vision | vision_v1p2beta1.Vision>(
      versionOrOptions: 'v1'|vision_v1.Options|'v1p1beta1'|
      vision_v1p1beta1.Options|'v1p2beta1'|vision_v1p2beta1.Options) {
    return this.getAPI<T>('vision', versionOrOptions);
  }
  webfonts(version: 'v1'): webfonts_v1.Webfonts;
  webfonts(options: webfonts_v1.Options): webfonts_v1.Webfonts;
  webfonts<T = webfonts_v1.Webfonts>(versionOrOptions: 'v1'|
                                     webfonts_v1.Options) {
    return this.getAPI<T>('webfonts', versionOrOptions);
  }
  webmasters(version: 'v3'): webmasters_v3.Webmasters;
  webmasters(options: webmasters_v3.Options): webmasters_v3.Webmasters;
  webmasters<T = webmasters_v3.Webmasters>(versionOrOptions: 'v3'|
                                           webmasters_v3.Options) {
    return this.getAPI<T>('webmasters', versionOrOptions);
  }
  websecurityscanner(version: 'v1alpha'):
      websecurityscanner_v1alpha.Websecurityscanner;
  websecurityscanner(options: websecurityscanner_v1alpha.Options):
      websecurityscanner_v1alpha.Websecurityscanner;
  websecurityscanner<T = websecurityscanner_v1alpha.Websecurityscanner>(
      versionOrOptions: 'v1alpha'|websecurityscanner_v1alpha.Options) {
    return this.getAPI<T>('websecurityscanner', versionOrOptions);
  }
  youtube(version: 'v3'): youtube_v3.Youtube;
  youtube(options: youtube_v3.Options): youtube_v3.Youtube;
  youtube<T = youtube_v3.Youtube>(versionOrOptions: 'v3'|youtube_v3.Options) {
    return this.getAPI<T>('youtube', versionOrOptions);
  }
  youtubeAnalytics(version: 'v1'): youtubeAnalytics_v1.Youtubeanalytics;
  youtubeAnalytics(options: youtubeAnalytics_v1.Options):
      youtubeAnalytics_v1.Youtubeanalytics;
  youtubeAnalytics(version: 'v1beta1'):
      youtubeAnalytics_v1beta1.Youtubeanalytics;
  youtubeAnalytics(options: youtubeAnalytics_v1beta1.Options):
      youtubeAnalytics_v1beta1.Youtubeanalytics;
  youtubeAnalytics(version: 'v2'): youtubeAnalytics_v2.Youtubeanalytics;
  youtubeAnalytics(options: youtubeAnalytics_v2.Options):
      youtubeAnalytics_v2.Youtubeanalytics;
  youtubeAnalytics<
      T = youtubeAnalytics_v1.Youtubeanalytics |
          youtubeAnalytics_v1beta1.Youtubeanalytics |
          youtubeAnalytics_v2.Youtubeanalytics>(
      versionOrOptions: 'v1'|
      youtubeAnalytics_v1.Options|'v1beta1'|
      youtubeAnalytics_v1beta1.Options|'v2'|youtubeAnalytics_v2.Options) {
    return this.getAPI<T>('youtubeAnalytics', versionOrOptions);
  }
  youtubereporting(version: 'v1'): youtubereporting_v1.Youtubereporting;
  youtubereporting(options: youtubereporting_v1.Options):
      youtubereporting_v1.Youtubereporting;
  youtubereporting<T = youtubereporting_v1.Youtubereporting>(
      versionOrOptions: 'v1'|youtubereporting_v1.Options) {
    return this.getAPI<T>('youtubereporting', versionOrOptions);
  }
}
