// Copyright 2020 Google LLC
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

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosResponseWithHTTP2,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace mybusinesslodging_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * My Business Lodging API
   *
   * The My Business Lodging API enables managing lodging business information on Google. Note - If you have a quota of 0 after enabling the API, please request for GBP API access.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const mybusinesslodging = google.mybusinesslodging('v1');
   * ```
   */
  export class Mybusinesslodging {
    context: APIRequestContext;
    locations: Resource$Locations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.locations = new Resource$Locations(this.context);
    }
  }

  /**
   * Physical adaptations made to the property in consideration of varying levels of human physical ability.
   */
  export interface Schema$Accessibility {
    /**
     * Mobility accessible. Throughout the property there are physical adaptations to ease the stay of a person in a wheelchair, such as auto-opening doors, wide elevators, wide bathrooms or ramps.
     */
    mobilityAccessible?: boolean | null;
    /**
     * Mobility accessible elevator. A lift that transports people from one level to another and is built to accommodate a wheelchair-using passenger owing to the width of its doors and placement of call buttons.
     */
    mobilityAccessibleElevator?: boolean | null;
    /**
     * Mobility accessible elevator exception.
     */
    mobilityAccessibleElevatorException?: string | null;
    /**
     * Mobility accessible exception.
     */
    mobilityAccessibleException?: string | null;
    /**
     * Mobility accessible parking. The presence of a marked, designated area of prescribed size in which only registered, labeled vehicles transporting a person with physical challenges may park.
     */
    mobilityAccessibleParking?: boolean | null;
    /**
     * Mobility accessible parking exception.
     */
    mobilityAccessibleParkingException?: string | null;
    /**
     * Mobility accessible pool. A swimming pool equipped with a mechanical chair that can be lowered and raised for the purpose of moving physically challenged guests into and out of the pool. May be powered by electricity or water. Also known as pool lift.
     */
    mobilityAccessiblePool?: boolean | null;
    /**
     * Mobility accessible pool exception.
     */
    mobilityAccessiblePoolException?: string | null;
  }
  /**
   * Amenities and features related to leisure and play.
   */
  export interface Schema$Activities {
    /**
     * Beach access. The hotel property is in close proximity to a beach and offers a way to get to that beach. This can include a route to the beach such as stairs down if hotel is on a bluff, or a short trail. Not the same as beachfront (with beach access, the hotel's proximity is close to but not right on the beach).
     */
    beachAccess?: boolean | null;
    /**
     * Beach access exception.
     */
    beachAccessException?: string | null;
    /**
     * Breach front. The hotel property is physically located on the beach alongside an ocean, sea, gulf, or bay. It is not on a lake, river, stream, or pond. The hotel is not separated from the beach by a public road allowing vehicular, pedestrian, or bicycle traffic.
     */
    beachFront?: boolean | null;
    /**
     * Beach front exception.
     */
    beachFrontException?: string | null;
    /**
     * Bicycle rental. The hotel owns bicycles that it permits guests to borrow and use. Can be free or for a fee.
     */
    bicycleRental?: boolean | null;
    /**
     * Bicycle rental exception.
     */
    bicycleRentalException?: string | null;
    /**
     * Boutique stores. There are stores selling clothing, jewelry, art and decor either on hotel premises or very close by. Does not refer to the hotel gift shop or convenience store.
     */
    boutiqueStores?: boolean | null;
    /**
     * Boutique stores exception.
     */
    boutiqueStoresException?: string | null;
    /**
     * Casino. A space designated for gambling and gaming featuring croupier-run table and card games, as well as electronic slot machines. May be on hotel premises or located nearby.
     */
    casino?: boolean | null;
    /**
     * Casino exception.
     */
    casinoException?: string | null;
    /**
     * Free bicycle rental. The hotel owns bicycles that it permits guests to borrow and use for free.
     */
    freeBicycleRental?: boolean | null;
    /**
     * Free bicycle rental exception.
     */
    freeBicycleRentalException?: string | null;
    /**
     * Free watercraft rental. The hotel owns watercraft that it permits guests to borrow and use for free.
     */
    freeWatercraftRental?: boolean | null;
    /**
     * Free Watercraft rental exception.
     */
    freeWatercraftRentalException?: string | null;
    /**
     * Game room. There is a room at the hotel containing electronic machines for play such as pinball, prize machines, driving simulators, and other items commonly found at a family fun center or arcade. May also include non-electronic games like pool, foosball, darts, and more. May or may not be designed for children. Also known as arcade, fun room, or family fun center.
     */
    gameRoom?: boolean | null;
    /**
     * Game room exception.
     */
    gameRoomException?: string | null;
    /**
     * Golf. There is a golf course on hotel grounds or there is a nearby, independently run golf course that allows use by hotel guests. Can be free or for a fee.
     */
    golf?: boolean | null;
    /**
     * Golf exception.
     */
    golfException?: string | null;
    /**
     * Horseback riding. The hotel has a horse barn onsite or an affiliation with a nearby barn to allow for guests to sit astride a horse and direct it to walk, trot, cantor, gallop and/or jump. Can be in a riding ring, on designated paths, or in the wilderness. May or may not involve instruction.
     */
    horsebackRiding?: boolean | null;
    /**
     * Horseback riding exception.
     */
    horsebackRidingException?: string | null;
    /**
     * Nightclub. There is a room at the hotel with a bar, a dance floor, and seating where designated staffers play dance music. There may also be a designated area for the performance of live music, singing and comedy acts.
     */
    nightclub?: boolean | null;
    /**
     * Nightclub exception.
     */
    nightclubException?: string | null;
    /**
     * Private beach. The beach which is in close proximity to the hotel is open only to guests.
     */
    privateBeach?: boolean | null;
    /**
     * Private beach exception.
     */
    privateBeachException?: string | null;
    /**
     * Scuba. The provision for guests to dive under naturally occurring water fitted with a self-contained underwater breathing apparatus (SCUBA) for the purpose of exploring underwater life. Apparatus consists of a tank providing oxygen to the diver through a mask. Requires certification of the diver and supervision. The hotel may have the activity at its own waterfront or have an affiliation with a nearby facility. Required equipment is most often supplied to guests. Can be free or for a fee. Not snorkeling. Not done in a swimming pool.
     */
    scuba?: boolean | null;
    /**
     * Scuba exception.
     */
    scubaException?: string | null;
    /**
     * Snorkeling. The provision for guests to participate in a recreational water activity in which swimmers wear a diving mask, a simple, shaped breathing tube and flippers/swim fins for the purpose of exploring below the surface of an ocean, gulf or lake. Does not usually require user certification or professional supervision. Equipment may or may not be available for rent or purchase. Not scuba diving.
     */
    snorkeling?: boolean | null;
    /**
     * Snorkeling exception.
     */
    snorkelingException?: string | null;
    /**
     * Tennis. The hotel has the requisite court(s) on site or has an affiliation with a nearby facility for the purpose of providing guests with the opportunity to play a two-sided court-based game in which players use a stringed racquet to hit a ball across a net to the side of the opposing player. The court can be indoors or outdoors. Instructors, racquets and balls may or may not be provided.
     */
    tennis?: boolean | null;
    /**
     * Tennis exception.
     */
    tennisException?: string | null;
    /**
     * Watercraft rental. The hotel owns water vessels that it permits guests to borrow and use. Can be free or for a fee. Watercraft may include boats, pedal boats, rowboats, sailboats, powerboats, canoes, kayaks, or personal watercraft (such as a Jet Ski).
     */
    watercraftRental?: boolean | null;
    /**
     * Watercraft rental exception.
     */
    watercraftRentalException?: string | null;
    /**
     * Water skiing. The provision of giving guests the opportunity to be pulled across naturally occurring water while standing on skis and holding a tow rope attached to a motorboat. Can occur on hotel premises or at a nearby waterfront. Most often performed in a lake or ocean.
     */
    waterSkiing?: boolean | null;
    /**
     * Water skiing exception.
     */
    waterSkiingException?: string | null;
  }
  /**
   * Features of the property of specific interest to the business traveler.
   */
  export interface Schema$Business {
    /**
     * Business center. A designated room at the hotel with one or more desks and equipped with guest-use computers, printers, fax machines and/or photocopiers. May or may not be open 24/7. May or may not require a key to access. Not a meeting room or conference room.
     */
    businessCenter?: boolean | null;
    /**
     * Business center exception.
     */
    businessCenterException?: string | null;
    /**
     * Meeting rooms. Rooms at the hotel designated for business-related gatherings. Rooms are usually equipped with tables or desks, office chairs and audio/visual facilities to allow for presentations and conference calls. Also known as conference rooms.
     */
    meetingRooms?: boolean | null;
    /**
     * Meeting rooms count. The number of meeting rooms at the property.
     */
    meetingRoomsCount?: number | null;
    /**
     * Meeting rooms count exception.
     */
    meetingRoomsCountException?: string | null;
    /**
     * Meeting rooms exception.
     */
    meetingRoomsException?: string | null;
  }
  /**
   * The ways in which the property provides guests with the ability to access the internet.
   */
  export interface Schema$Connectivity {
    /**
     * Free wifi. The hotel offers guests wifi for free.
     */
    freeWifi?: boolean | null;
    /**
     * Free wifi exception.
     */
    freeWifiException?: string | null;
    /**
     * Public area wifi available. Guests have the ability to wirelessly connect to the internet in the areas of the hotel accessible to anyone. Can be free or for a fee.
     */
    publicAreaWifiAvailable?: boolean | null;
    /**
     * Public area wifi available exception.
     */
    publicAreaWifiAvailableException?: string | null;
    /**
     * Public internet terminal. An area of the hotel supplied with computers and designated for the purpose of providing guests with the ability to access the internet.
     */
    publicInternetTerminal?: boolean | null;
    /**
     * Public internet terminal exception.
     */
    publicInternetTerminalException?: string | null;
    /**
     * Wifi available. The hotel provides the ability for guests to wirelessly connect to the internet. Can be in the public areas of the hotel and/or in the guest rooms. Can be free or for a fee.
     */
    wifiAvailable?: boolean | null;
    /**
     * Wifi available exception.
     */
    wifiAvailableException?: string | null;
  }
  /**
   * An eco certificate awarded to the hotel. Deprecated: this message is no longer populated. All certification data is now provided by BeCause.
   */
  export interface Schema$EcoCertification {
    /**
     * Whether the eco certificate was awarded or not.
     */
    awarded?: boolean | null;
    /**
     * Awarded exception.
     */
    awardedException?: string | null;
    /**
     * Required. The eco certificate.
     */
    ecoCertificate?: string | null;
  }
  /**
   * Energy efficiency practices implemented at the hotel.
   */
  export interface Schema$EnergyEfficiency {
    /**
     * Carbon free energy sources. Property sources carbon-free electricity via at least one of the following methods: on-site clean energy generation, power purchase agreement(s) with clean energy generators, green power provided by electricity supplier, or purchases of Energy Attribute Certificates (such as Renewable Energy Certificates or Guarantees of Origin).
     */
    carbonFreeEnergySources?: boolean | null;
    /**
     * Carbon free energy sources exception.
     */
    carbonFreeEnergySourcesException?: string | null;
    /**
     * Energy conservation program. The property tracks corporate-level Scope 1 and 2 GHG emissions, and Scope 3 emissions if available. The property has a commitment to implement initiatives that reduce GHG emissions year over year. The property has shown an absolute reduction in emissions for at least 2 years. Emissions are either verfied by a third-party and/or published in external communications.
     */
    energyConservationProgram?: boolean | null;
    /**
     * Energy conservation program exception.
     */
    energyConservationProgramException?: string | null;
    /**
     * Energy efficient heating and cooling systems. The property doesn't use chlorofluorocarbon (CFC)-based refrigerants in heating, ventilating, and air-conditioning systems unless a third-party audit shows it's not economically feasible. The CFC-based refrigerants which are used should have a Global Warming Potential (GWP) ≤ 10. The property uses occupancy sensors on HVAC systems in back-of-house spaces, meeting rooms, and other low-traffic areas.
     */
    energyEfficientHeatingAndCoolingSystems?: boolean | null;
    /**
     * Energy efficient heating and cooling systems exception.
     */
    energyEfficientHeatingAndCoolingSystemsException?: string | null;
    /**
     * Energy efficient lighting. At least 75% of the property's lighting is energy efficient, using lighting that is more than 45 lumens per watt – typically LED or CFL lightbulbs.
     */
    energyEfficientLighting?: boolean | null;
    /**
     * Energy efficient lighting exception.
     */
    energyEfficientLightingException?: string | null;
    /**
     * Energy saving thermostats. The property installed energy-saving thermostats throughout the building to conserve energy when rooms or areas are not in use. Energy-saving thermostats are devices that control heating/cooling in the building by learning temperature preferences and automatically adjusting to energy-saving temperatures as the default. The thermostats are automatically set to a temperature between 68-78 degrees F (20-26 °C), depending on seasonality. In the winter, set the thermostat to 68°F (20°C) when the room is occupied, lowering room temperature when unoccupied. In the summer, set the thermostat to 78°F (26°C) when the room is occupied.
     */
    energySavingThermostats?: boolean | null;
    /**
     * Energy saving thermostats exception.
     */
    energySavingThermostatsException?: string | null;
    /**
     * Output only. Green building design. True if the property has been awarded a relevant certification.
     */
    greenBuildingDesign?: boolean | null;
    /**
     * Output only. Green building design exception.
     */
    greenBuildingDesignException?: string | null;
    /**
     * Independent organization audits energy use. The property conducts an energy audit at least every 5 years, the results of which are either verified by a third-party and/or published in external communications. An energy audit is a detailed assessment of the facility which provides recommendations to existing operations and procedures to improve energy efficiency, available incentives or rebates,and opportunities for improvements through renovations or upgrades. Examples of organizations that conduct credible third party audits include: Engie Impact, DNV GL (EU), Dexma, and local utility providers (they often provide energy and water audits).
     */
    independentOrganizationAuditsEnergyUse?: boolean | null;
    /**
     * Independent organization audits energy use exception.
     */
    independentOrganizationAuditsEnergyUseException?: string | null;
  }
  /**
   * Enhanced cleaning measures implemented by the hotel during COVID-19.
   */
  export interface Schema$EnhancedCleaning {
    /**
     * Commercial-grade disinfectant used to clean the property.
     */
    commercialGradeDisinfectantCleaning?: boolean | null;
    /**
     * Commercial grade disinfectant cleaning exception.
     */
    commercialGradeDisinfectantCleaningException?: string | null;
    /**
     * Enhanced cleaning of common areas.
     */
    commonAreasEnhancedCleaning?: boolean | null;
    /**
     * Common areas enhanced cleaning exception.
     */
    commonAreasEnhancedCleaningException?: string | null;
    /**
     * Employees trained in COVID-19 cleaning procedures.
     */
    employeesTrainedCleaningProcedures?: boolean | null;
    /**
     * Employees trained cleaning procedures exception.
     */
    employeesTrainedCleaningProceduresException?: string | null;
    /**
     * Employees trained in thorough hand-washing.
     */
    employeesTrainedThoroughHandWashing?: boolean | null;
    /**
     * Employees trained thorough hand washing exception.
     */
    employeesTrainedThoroughHandWashingException?: string | null;
    /**
     * Employees wear masks, face shields, and/or gloves.
     */
    employeesWearProtectiveEquipment?: boolean | null;
    /**
     * Employees wear protective equipment exception.
     */
    employeesWearProtectiveEquipmentException?: string | null;
    /**
     * Enhanced cleaning of guest rooms.
     */
    guestRoomsEnhancedCleaning?: boolean | null;
    /**
     * Guest rooms enhanced cleaning exception.
     */
    guestRoomsEnhancedCleaningException?: string | null;
  }
  /**
   * Services and amenities for families and young guests.
   */
  export interface Schema$Families {
    /**
     * Babysitting. Child care that is offered by hotel staffers or coordinated by hotel staffers with local child care professionals. Can be free or for a fee.
     */
    babysitting?: boolean | null;
    /**
     * Babysitting exception.
     */
    babysittingException?: string | null;
    /**
     * Kids activities. Recreational options such as sports, films, crafts and games designed for the enjoyment of children and offered at the hotel. May or may not be supervised. May or may not be at a designated time or place. Cab be free or for a fee.
     */
    kidsActivities?: boolean | null;
    /**
     * Kids activities exception.
     */
    kidsActivitiesException?: string | null;
    /**
     * Kids club. An organized program of group activities held at the hotel and designed for the enjoyment of children. Facilitated by hotel staff (or staff procured by the hotel) in an area(s) designated for the purpose of entertaining children without their parents. May include games, outings, water sports, team sports, arts and crafts, and films. Usually has set hours. Can be free or for a fee. Also known as Kids Camp or Kids program.
     */
    kidsClub?: boolean | null;
    /**
     * Kids club exception.
     */
    kidsClubException?: string | null;
    /**
     * Kids friendly. The hotel has one or more special features for families with children, such as reduced rates, child-sized beds, kids' club, babysitting service, or suitable place to play on premises.
     */
    kidsFriendly?: boolean | null;
    /**
     * Kids friendly exception.
     */
    kidsFriendlyException?: string | null;
  }
  /**
   * Meals, snacks, and beverages available at the property.
   */
  export interface Schema$FoodAndDrink {
    /**
     * Bar. A designated room, lounge or area of an on-site restaurant with seating at a counter behind which a hotel staffer takes the guest's order and provides the requested alcoholic drink. Can be indoors or outdoors. Also known as Pub.
     */
    bar?: boolean | null;
    /**
     * Bar exception.
     */
    barException?: string | null;
    /**
     * Breakfast available. The morning meal is offered to all guests. Can be free or for a fee.
     */
    breakfastAvailable?: boolean | null;
    /**
     * Breakfast available exception.
     */
    breakfastAvailableException?: string | null;
    /**
     * Breakfast buffet. Breakfast meal service where guests serve themselves from a variety of dishes/foods that are put out on a table.
     */
    breakfastBuffet?: boolean | null;
    /**
     * Breakfast buffet exception.
     */
    breakfastBuffetException?: string | null;
    /**
     * Buffet. A type of meal where guests serve themselves from a variety of dishes/foods that are put out on a table. Includes lunch and/or dinner meals. A breakfast-only buffet is not sufficient.
     */
    buffet?: boolean | null;
    /**
     * Buffet exception.
     */
    buffetException?: string | null;
    /**
     * Dinner buffet. Dinner meal service where guests serve themselves from a variety of dishes/foods that are put out on a table.
     */
    dinnerBuffet?: boolean | null;
    /**
     * Dinner buffet exception.
     */
    dinnerBuffetException?: string | null;
    /**
     * Free breakfast. Breakfast is offered for free to all guests. Does not apply if limited to certain room packages.
     */
    freeBreakfast?: boolean | null;
    /**
     * Free breakfast exception.
     */
    freeBreakfastException?: string | null;
    /**
     * Restaurant. A business onsite at the hotel that is open to the public as well as guests, and offers meals and beverages to consume at tables or counters. May or may not include table service. Also known as cafe, buffet, eatery. A "breakfast room" where the hotel serves breakfast only to guests (not the general public) does not count as a restaurant.
     */
    restaurant?: boolean | null;
    /**
     * Restaurant exception.
     */
    restaurantException?: string | null;
    /**
     * Restaurants count. The number of restaurants at the hotel.
     */
    restaurantsCount?: number | null;
    /**
     * Restaurants count exception.
     */
    restaurantsCountException?: string | null;
    /**
     * Room service. A hotel staffer delivers meals prepared onsite to a guest's room as per their request. May or may not be available during specific hours. Services should be available to all guests (not based on rate/room booked/reward program, etc).
     */
    roomService?: boolean | null;
    /**
     * Room service exception.
     */
    roomServiceException?: string | null;
    /**
     * Table service. A restaurant in which a staff member is assigned to a guest's table to take their order, deliver and clear away food, and deliver the bill, if applicable. Also known as sit-down restaurant.
     */
    tableService?: boolean | null;
    /**
     * Table service exception.
     */
    tableServiceException?: string | null;
    /**
     * 24hr room service. Room service is available 24 hours a day.
     */
    twentyFourHourRoomService?: boolean | null;
    /**
     * 24hr room service exception.
     */
    twentyFourHourRoomServiceException?: string | null;
    /**
     * Vending machine. A glass-fronted mechanized cabinet displaying and dispensing snacks and beverages for purchase by coins, paper money and/or credit cards.
     */
    vendingMachine?: boolean | null;
    /**
     * Vending machine exception.
     */
    vendingMachineException?: string | null;
  }
  /**
   * Response message for LodgingService.GetGoogleUpdatedLodging
   */
  export interface Schema$GetGoogleUpdatedLodgingResponse {
    /**
     * Required. The fields in the Lodging that have been updated by Google. Repeated field items are not individually specified.
     */
    diffMask?: string | null;
    /**
     * Required. The Google updated Lodging.
     */
    lodging?: Schema$Lodging;
  }
  /**
   * Features and available amenities in the guest unit.
   */
  export interface Schema$GuestUnitFeatures {
    /**
     * Bungalow or villa. An independent structure that is part of a hotel or resort that is rented to one party for a vacation stay. The hotel or resort may be completely comprised of bungalows or villas, or they may be one of several guestroom options. Guests in the bungalows or villas most often have the same, if not more, amenities and services offered to guests in other guestroom types.
     */
    bungalowOrVilla?: boolean | null;
    /**
     * Bungalow or villa exception.
     */
    bungalowOrVillaException?: string | null;
    /**
     * Connecting unit available. A guestroom type that features access to an adjacent guestroom for the purpose of booking both rooms. Most often used by families who need more than one room to accommodate the number of people in their group.
     */
    connectingUnitAvailable?: boolean | null;
    /**
     * Connecting unit available exception.
     */
    connectingUnitAvailableException?: string | null;
    /**
     * Executive floor. A floor of the hotel where the guestrooms are only bookable by members of the hotel's frequent guest membership program. Benefits of this room class include access to a designated lounge which may or may not feature free breakfast, cocktails or other perks specific to members of the program.
     */
    executiveFloor?: boolean | null;
    /**
     * Executive floor exception.
     */
    executiveFloorException?: string | null;
    /**
     * Max adult occupants count. The total number of adult guests allowed to stay overnight in the guestroom.
     */
    maxAdultOccupantsCount?: number | null;
    /**
     * Max adult occupants count exception.
     */
    maxAdultOccupantsCountException?: string | null;
    /**
     * Max child occupants count. The total number of children allowed to stay overnight in the room.
     */
    maxChildOccupantsCount?: number | null;
    /**
     * Max child occupants count exception.
     */
    maxChildOccupantsCountException?: string | null;
    /**
     * Max occupants count. The total number of guests allowed to stay overnight in the guestroom.
     */
    maxOccupantsCount?: number | null;
    /**
     * Max occupants count exception.
     */
    maxOccupantsCountException?: string | null;
    /**
     * Private home. A privately owned home (house, townhouse, apartment, cabin, bungalow etc) that may or not serve as the owner's residence, but is rented out in its entirety or by the room(s) to paying guest(s) for vacation stays. Not for lease-based, long-term residency.
     */
    privateHome?: boolean | null;
    /**
     * Private home exception.
     */
    privateHomeException?: string | null;
    /**
     * Suite. A guestroom category that implies both a bedroom area and a separate living area. There may or may not be full walls and doors separating the two areas, but regardless, they are very distinct. Does not mean a couch or chair in a bedroom.
     */
    suite?: boolean | null;
    /**
     * Suite exception.
     */
    suiteException?: string | null;
    /**
     * Tier. Classification of the unit based on available features/amenities. A non-standard tier is only permitted if at least one other unit type falls under the standard tier.
     */
    tier?: string | null;
    /**
     * Tier exception.
     */
    tierException?: string | null;
    /**
     * Features available in the living areas in the guest unit.
     */
    totalLivingAreas?: Schema$LivingArea;
    /**
     * Views available from the guest unit itself.
     */
    views?: Schema$ViewsFromUnit;
  }
  /**
   * A specific type of unit primarily defined by its features.
   */
  export interface Schema$GuestUnitType {
    /**
     * Required. Unit or room code identifiers for a single GuestUnitType. Each code must be unique within a Lodging instance.
     */
    codes?: string[] | null;
    /**
     * Features and available amenities of the GuestUnitType.
     */
    features?: Schema$GuestUnitFeatures;
    /**
     * Required. Short, English label or name of the GuestUnitType. Target <50 chars.
     */
    label?: string | null;
  }
  /**
   * Health and safety measures implemented by the hotel during COVID-19.
   */
  export interface Schema$HealthAndSafety {
    /**
     * Enhanced cleaning measures implemented by the hotel during COVID-19.
     */
    enhancedCleaning?: Schema$EnhancedCleaning;
    /**
     * Increased food safety measures implemented by the hotel during COVID-19.
     */
    increasedFoodSafety?: Schema$IncreasedFoodSafety;
    /**
     * Minimized contact measures implemented by the hotel during COVID-19.
     */
    minimizedContact?: Schema$MinimizedContact;
    /**
     * Personal protection measures implemented by the hotel during COVID-19.
     */
    personalProtection?: Schema$PersonalProtection;
    /**
     * Physical distancing measures implemented by the hotel during COVID-19.
     */
    physicalDistancing?: Schema$PhysicalDistancing;
  }
  /**
   * Conveniences provided in guest units to facilitate an easier, more comfortable stay.
   */
  export interface Schema$Housekeeping {
    /**
     * Daily housekeeping. Guest units are cleaned by hotel staff daily during guest's stay.
     */
    dailyHousekeeping?: boolean | null;
    /**
     * Daily housekeeping exception.
     */
    dailyHousekeepingException?: string | null;
    /**
     * Housekeeping available. Guest units are cleaned by hotel staff during guest's stay. Schedule may vary from daily, weekly, or specific days of the week.
     */
    housekeepingAvailable?: boolean | null;
    /**
     * Housekeeping available exception.
     */
    housekeepingAvailableException?: string | null;
    /**
     * Turndown service. Hotel staff enters guest units to prepare the bed for sleep use. May or may not include some light housekeeping. May or may not include an evening snack or candy. Also known as evening service.
     */
    turndownService?: boolean | null;
    /**
     * Turndown service exception.
     */
    turndownServiceException?: string | null;
  }
  /**
   * Increased food safety measures implemented by the hotel during COVID-19.
   */
  export interface Schema$IncreasedFoodSafety {
    /**
     * Additional sanitation in dining areas.
     */
    diningAreasAdditionalSanitation?: boolean | null;
    /**
     * Dining areas additional sanitation exception.
     */
    diningAreasAdditionalSanitationException?: string | null;
    /**
     * Disposable flatware.
     */
    disposableFlatware?: boolean | null;
    /**
     * Disposable flatware exception.
     */
    disposableFlatwareException?: string | null;
    /**
     * Additional safety measures during food prep and serving.
     */
    foodPreparationAndServingAdditionalSafety?: boolean | null;
    /**
     * Food preparation and serving additional safety exception.
     */
    foodPreparationAndServingAdditionalSafetyException?: string | null;
    /**
     * Individually-packaged meals.
     */
    individualPackagedMeals?: boolean | null;
    /**
     * Individual packaged meals exception.
     */
    individualPackagedMealsException?: string | null;
    /**
     * Single-use menus.
     */
    singleUseFoodMenus?: boolean | null;
    /**
     * Single use food menus exception.
     */
    singleUseFoodMenusException?: string | null;
  }
  /**
   * Language spoken by at least one staff member.
   */
  export interface Schema$LanguageSpoken {
    /**
     * Required. The BCP-47 language code for the spoken language. Currently accepted codes: ar, de, en, es, fil, fr, hi, id, it, ja, ko, nl, pt, ru, vi, yue, zh.
     */
    languageCode?: string | null;
    /**
     * At least one member of the staff can speak the language.
     */
    spoken?: boolean | null;
    /**
     * Spoken exception.
     */
    spokenException?: string | null;
  }
  /**
   * An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit.
   */
  export interface Schema$LivingArea {
    /**
     * Accessibility features of the living area.
     */
    accessibility?: Schema$LivingAreaAccessibility;
    /**
     * Information about eating features in the living area.
     */
    eating?: Schema$LivingAreaEating;
    /**
     * Features in the living area.
     */
    features?: Schema$LivingAreaFeatures;
    /**
     * Information about the layout of the living area.
     */
    layout?: Schema$LivingAreaLayout;
    /**
     * Information about sleeping features in the living area.
     */
    sleeping?: Schema$LivingAreaSleeping;
  }
  /**
   * Accessibility features of the living area.
   */
  export interface Schema$LivingAreaAccessibility {
    /**
     * ADA compliant unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues, as determined by legislative policy. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged.
     */
    adaCompliantUnit?: boolean | null;
    /**
     * ADA compliant unit exception.
     */
    adaCompliantUnitException?: string | null;
    /**
     * Hearing-accessible doorbell. A visual indicator(s) of a knock or ring at the door.
     */
    hearingAccessibleDoorbell?: boolean | null;
    /**
     * Hearing-accessible doorbell exception.
     */
    hearingAccessibleDoorbellException?: string | null;
    /**
     * Hearing-accessible fire alarm. A device that gives warning of a fire through flashing lights.
     */
    hearingAccessibleFireAlarm?: boolean | null;
    /**
     * Hearing-accessible fire alarm exception.
     */
    hearingAccessibleFireAlarmException?: string | null;
    /**
     * Hearing-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with auditory issues.
     */
    hearingAccessibleUnit?: boolean | null;
    /**
     * Hearing-accessible unit exception.
     */
    hearingAccessibleUnitException?: string | null;
    /**
     * Mobility-accessible bathtub. A bathtub that accomodates the physically challenged with additional railings or hand grips, a transfer seat or lift, and/or a door to enable walking into the tub.
     */
    mobilityAccessibleBathtub?: boolean | null;
    /**
     * Mobility-accessible bathtub exception.
     */
    mobilityAccessibleBathtubException?: string | null;
    /**
     * Mobility-accessible shower. A shower with an enlarged door or access point to accommodate a wheelchair or a waterproof seat for the physically challenged.
     */
    mobilityAccessibleShower?: boolean | null;
    /**
     * Mobility-accessible shower exception.
     */
    mobilityAccessibleShowerException?: string | null;
    /**
     * Mobility-accessible toilet. A toilet with a higher seat, grab bars, and/or a larger area around it to accommodate the physically challenged.
     */
    mobilityAccessibleToilet?: boolean | null;
    /**
     * Mobility-accessible toilet exception.
     */
    mobilityAccessibleToiletException?: string | null;
    /**
     * Mobility-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged.
     */
    mobilityAccessibleUnit?: boolean | null;
    /**
     * Mobility-accessible unit exception.
     */
    mobilityAccessibleUnitException?: string | null;
  }
  /**
   * Information about eating features in the living area.
   */
  export interface Schema$LivingAreaEating {
    /**
     * Coffee maker. An electric appliance that brews coffee by heating and forcing water through ground coffee.
     */
    coffeeMaker?: boolean | null;
    /**
     * Coffee maker exception.
     */
    coffeeMakerException?: string | null;
    /**
     * Cookware. Kitchen pots, pans and utensils used in connection with the preparation of food.
     */
    cookware?: boolean | null;
    /**
     * Cookware exception.
     */
    cookwareException?: string | null;
    /**
     * Dishwasher. A counter-height electrical cabinet containing racks for dirty dishware, cookware and cutlery, and a dispenser for soap built into the pull-down door. The cabinet is attached to the plumbing system to facilitate the automatic cleaning of its contents.
     */
    dishwasher?: boolean | null;
    /**
     * Dishwasher exception.
     */
    dishwasherException?: string | null;
    /**
     * Indoor grill. Metal grates built into an indoor cooktop on which food is cooked over an open flame or electric heat source.
     */
    indoorGrill?: boolean | null;
    /**
     * Indoor grill exception.
     */
    indoorGrillException?: string | null;
    /**
     * Kettle. A covered container with a handle and a spout used for boiling water.
     */
    kettle?: boolean | null;
    /**
     * Kettle exception.
     */
    kettleException?: string | null;
    /**
     * Kitchen available. An area of the guestroom designated for the preparation and storage of food via the presence of a refrigerator, cook top, oven and sink, as well as cutlery, dishes and cookware. Usually includes small appliances such a coffee maker and a microwave. May or may not include an automatic dishwasher.
     */
    kitchenAvailable?: boolean | null;
    /**
     * Kitchen available exception.
     */
    kitchenAvailableException?: string | null;
    /**
     * Microwave. An electric oven that quickly cooks and heats food by microwave energy. Smaller than a standing or wall mounted oven. Usually placed on a kitchen counter, a shelf or tabletop or mounted above a cooktop.
     */
    microwave?: boolean | null;
    /**
     * Microwave exception.
     */
    microwaveException?: string | null;
    /**
     * Minibar. A small refrigerated cabinet in the guestroom containing bottles/cans of soft drinks, mini bottles of alcohol, and snacks. The items are most commonly available for a fee.
     */
    minibar?: boolean | null;
    /**
     * Minibar exception.
     */
    minibarException?: string | null;
    /**
     * Outdoor grill. Metal grates on which food is cooked over an open flame or electric heat source. Part of an outdoor apparatus that supports the grates. Also known as barbecue grill or barbecue.
     */
    outdoorGrill?: boolean | null;
    /**
     * Outdoor grill exception.
     */
    outdoorGrillException?: string | null;
    /**
     * Oven. A temperature controlled, heated metal cabinet powered by gas or electricity in which food is placed for the purpose of cooking or reheating.
     */
    oven?: boolean | null;
    /**
     * Oven exception.
     */
    ovenException?: string | null;
    /**
     * Refrigerator. A large, climate-controlled electrical cabinet with vertical doors. Built for the purpose of chilling and storing perishable foods.
     */
    refrigerator?: boolean | null;
    /**
     * Refrigerator exception.
     */
    refrigeratorException?: string | null;
    /**
     * Sink. A basin with a faucet attached to a water source and used for the purpose of washing and rinsing.
     */
    sink?: boolean | null;
    /**
     * Sink exception.
     */
    sinkException?: string | null;
    /**
     * Snackbar. A small cabinet in the guestroom containing snacks. The items are most commonly available for a fee.
     */
    snackbar?: boolean | null;
    /**
     * Snackbar exception.
     */
    snackbarException?: string | null;
    /**
     * Stove. A kitchen appliance powered by gas or electricity for the purpose of creating a flame or hot surface on which pots of food can be cooked. Also known as cooktop or hob.
     */
    stove?: boolean | null;
    /**
     * Stove exception.
     */
    stoveException?: string | null;
    /**
     * Tea station. A small area with the supplies needed to heat water and make tea.
     */
    teaStation?: boolean | null;
    /**
     * Tea station exception.
     */
    teaStationException?: string | null;
    /**
     * Toaster. A small, temperature controlled electric appliance with rectangular slots at the top that are lined with heated coils for the purpose of browning slices of bread products.
     */
    toaster?: boolean | null;
    /**
     * Toaster exception.
     */
    toasterException?: string | null;
  }
  /**
   * Features in the living area.
   */
  export interface Schema$LivingAreaFeatures {
    /**
     * Air conditioning. An electrical machine used to cool the temperature of the guestroom.
     */
    airConditioning?: boolean | null;
    /**
     * Air conditioning exception.
     */
    airConditioningException?: string | null;
    /**
     * Bathtub. A fixed plumbing feature set on the floor and consisting of a large container that accommodates the body of an adult for the purpose of seated bathing. Includes knobs or fixtures to control the temperature of the water, a faucet through which the water flows, and a drain that can be closed for filling and opened for draining.
     */
    bathtub?: boolean | null;
    /**
     * Bathtub exception.
     */
    bathtubException?: string | null;
    /**
     * Bidet. A plumbing fixture attached to a toilet or a low, fixed sink designed for the purpose of washing after toilet use.
     */
    bidet?: boolean | null;
    /**
     * Bidet exception.
     */
    bidetException?: string | null;
    /**
     * Dryer. An electrical machine designed to dry clothing.
     */
    dryer?: boolean | null;
    /**
     * Dryer exception.
     */
    dryerException?: string | null;
    /**
     * Electronic room key. A card coded by the check-in computer that is read by the lock on the hotel guestroom door to allow for entry.
     */
    electronicRoomKey?: boolean | null;
    /**
     * Electronic room key exception.
     */
    electronicRoomKeyException?: string | null;
    /**
     * Fireplace. A framed opening (aka hearth) at the base of a chimney in which logs or an electrical fire feature are burned to provide a relaxing ambiance or to heat the room. Often made of bricks or stone.
     */
    fireplace?: boolean | null;
    /**
     * Fireplace exception.
     */
    fireplaceException?: string | null;
    /**
     * Hairdryer. A handheld electric appliance that blows temperature-controlled air for the purpose of drying wet hair. Can be mounted to a bathroom wall or a freestanding device stored in the guestroom's bathroom or closet.
     */
    hairdryer?: boolean | null;
    /**
     * Hairdryer exception.
     */
    hairdryerException?: string | null;
    /**
     * Heating. An electrical machine used to warm the temperature of the guestroom.
     */
    heating?: boolean | null;
    /**
     * Heating exception.
     */
    heatingException?: string | null;
    /**
     * In-unit safe. A strong fireproof cabinet with a programmable lock, used for the protected storage of valuables in a guestroom. Often built into a closet.
     */
    inunitSafe?: boolean | null;
    /**
     * In-unit safe exception.
     */
    inunitSafeException?: string | null;
    /**
     * In-unit Wifi available. Guests can wirelessly connect to the Internet in the guestroom. Can be free or for a fee.
     */
    inunitWifiAvailable?: boolean | null;
    /**
     * In-unit Wifi available exception.
     */
    inunitWifiAvailableException?: string | null;
    /**
     * Ironing equipment. A device, usually with a flat metal base, that is heated to smooth, finish, or press clothes and a flat, padded, cloth-covered surface on which the clothes are worked.
     */
    ironingEquipment?: boolean | null;
    /**
     * Ironing equipment exception.
     */
    ironingEquipmentException?: string | null;
    /**
     * Pay per view movies. Televisions with channels that offer films that can be viewed for a fee, and have an interface to allow the viewer to accept the terms and approve payment.
     */
    payPerViewMovies?: boolean | null;
    /**
     * Pay per view movies exception.
     */
    payPerViewMoviesException?: string | null;
    /**
     * Private bathroom. A bathroom designated for the express use of the guests staying in a specific guestroom.
     */
    privateBathroom?: boolean | null;
    /**
     * Private bathroom exception.
     */
    privateBathroomException?: string | null;
    /**
     * Shower. A fixed plumbing fixture for standing bathing that features a tall spray spout or faucet through which water flows, a knob or knobs that control the water's temperature, and a drain in the floor.
     */
    shower?: boolean | null;
    /**
     * Shower exception.
     */
    showerException?: string | null;
    /**
     * Toilet. A fixed bathroom feature connected to a sewer or septic system and consisting of a water-flushed bowl with a seat, as well as a device that elicites the water-flushing action. Used for the process and disposal of human waste.
     */
    toilet?: boolean | null;
    /**
     * Toilet exception.
     */
    toiletException?: string | null;
    /**
     * TV. A television is available in the guestroom.
     */
    tv?: boolean | null;
    /**
     * TV casting. A television equipped with a device through which the video entertainment accessed on a personal computer, phone or tablet can be wirelessly delivered to and viewed on the guestroom's television.
     */
    tvCasting?: boolean | null;
    /**
     * TV exception.
     */
    tvCastingException?: string | null;
    /**
     * TV exception.
     */
    tvException?: string | null;
    /**
     * TV streaming. Televisions that embed a range of web-based apps to allow for watching media from those apps.
     */
    tvStreaming?: boolean | null;
    /**
     * TV streaming exception.
     */
    tvStreamingException?: string | null;
    /**
     * Universal power adapters. A power supply for electronic devices which plugs into a wall for the purpose of converting AC to a single DC voltage. Also know as AC adapter or charger.
     */
    universalPowerAdapters?: boolean | null;
    /**
     * Universal power adapters exception.
     */
    universalPowerAdaptersException?: string | null;
    /**
     * Washer. An electrical machine connected to a running water source designed to launder clothing.
     */
    washer?: boolean | null;
    /**
     * Washer exception.
     */
    washerException?: string | null;
  }
  /**
   * Information about the layout of the living area.
   */
  export interface Schema$LivingAreaLayout {
    /**
     * Balcony. An outdoor platform attached to a building and surrounded by a short wall, fence or other safety railing. The balcony is accessed through a door in a guestroom or suite and is for use by the guest staying in that room. May or may not include seating or outdoor furniture. Is not located on the ground floor. Also lanai.
     */
    balcony?: boolean | null;
    /**
     * Balcony exception.
     */
    balconyException?: string | null;
    /**
     * Living area sq meters. The measurement in meters of the area of a guestroom's living space.
     */
    livingAreaSqMeters?: number | null;
    /**
     * Living area sq meters exception.
     */
    livingAreaSqMetersException?: string | null;
    /**
     * Loft. A three-walled upper area accessed by stairs or a ladder that overlooks the lower area of a room.
     */
    loft?: boolean | null;
    /**
     * Loft exception.
     */
    loftException?: string | null;
    /**
     * Non smoking. A guestroom in which the smoking of cigarettes, cigars and pipes is prohibited.
     */
    nonSmoking?: boolean | null;
    /**
     * Non smoking exception.
     */
    nonSmokingException?: string | null;
    /**
     * Patio. A paved, outdoor area with seating attached to and accessed through a ground-floor guestroom for use by the occupants of the guestroom.
     */
    patio?: boolean | null;
    /**
     * Patio exception.
     */
    patioException?: string | null;
    /**
     * Stairs. There are steps leading from one level or story to another in the unit.
     */
    stairs?: boolean | null;
    /**
     * Stairs exception.
     */
    stairsException?: string | null;
  }
  /**
   * Information about sleeping features in the living area.
   */
  export interface Schema$LivingAreaSleeping {
    /**
     * Beds count. The number of permanent beds present in a guestroom. Does not include rollaway beds, cribs or sofabeds.
     */
    bedsCount?: number | null;
    /**
     * Beds count exception.
     */
    bedsCountException?: string | null;
    /**
     * Bunk beds count. The number of furniture pieces in which one framed mattress is fixed directly above another by means of a physical frame. This allows one person(s) to sleep in the bottom bunk and one person(s) to sleep in the top bunk. Also known as double decker bed.
     */
    bunkBedsCount?: number | null;
    /**
     * Bunk beds count exception.
     */
    bunkBedsCountException?: string | null;
    /**
     * Cribs count. The number of small beds for an infant or toddler that the guestroom can obtain. The bed is surrounded by a high railing to prevent the child from falling or climbing out of the bed
     */
    cribsCount?: number | null;
    /**
     * Cribs count exception.
     */
    cribsCountException?: string | null;
    /**
     * Double beds count. The number of medium beds measuring 53"W x 75"L (135cm x 191cm). Also known as full size bed.
     */
    doubleBedsCount?: number | null;
    /**
     * Double beds count exception.
     */
    doubleBedsCountException?: string | null;
    /**
     * Feather pillows. The option for guests to obtain bed pillows that are stuffed with the feathers and down of ducks or geese.
     */
    featherPillows?: boolean | null;
    /**
     * Feather pillows exception.
     */
    featherPillowsException?: string | null;
    /**
     * Hypoallergenic bedding. Bedding such as linens, pillows, mattress covers and/or mattresses that are made of materials known to be resistant to allergens such as mold, dust and dander.
     */
    hypoallergenicBedding?: boolean | null;
    /**
     * Hypoallergenic bedding exception.
     */
    hypoallergenicBeddingException?: string | null;
    /**
     * King beds count. The number of large beds measuring 76"W x 80"L (193cm x 102cm). Most often meant to accompany two people. Includes California king and super king.
     */
    kingBedsCount?: number | null;
    /**
     * King beds count exception.
     */
    kingBedsCountException?: string | null;
    /**
     * Memory foam pillows. The option for guests to obtain bed pillows that are stuffed with a man-made foam that responds to body heat by conforming to the body closely, and then recovers its shape when the pillow cools down.
     */
    memoryFoamPillows?: boolean | null;
    /**
     * Memory foam pillows exception.
     */
    memoryFoamPillowsException?: string | null;
    /**
     * Other beds count. The number of beds that are not standard mattress and boxspring setups such as Japanese tatami mats, trundle beds, air mattresses and cots.
     */
    otherBedsCount?: number | null;
    /**
     * Other beds count exception.
     */
    otherBedsCountException?: string | null;
    /**
     * Queen beds count. The number of medium-large beds measuring 60"W x 80"L (152cm x 102cm).
     */
    queenBedsCount?: number | null;
    /**
     * Queen beds count exception.
     */
    queenBedsCountException?: string | null;
    /**
     * Roll away beds count. The number of mattresses on wheeled frames that can be folded in half and rolled away for easy storage that the guestroom can obtain upon request.
     */
    rollAwayBedsCount?: number | null;
    /**
     * Roll away beds count exception.
     */
    rollAwayBedsCountException?: string | null;
    /**
     * Single or twin count beds. The number of smaller beds measuring 38"W x 75"L (97cm x 191cm) that can accommodate one adult.
     */
    singleOrTwinBedsCount?: number | null;
    /**
     * Single or twin beds count exception.
     */
    singleOrTwinBedsCountException?: string | null;
    /**
     * Sofa beds count. The number of specially designed sofas that can be made to serve as a bed by lowering its hinged upholstered back to horizontal position or by pulling out a concealed mattress.
     */
    sofaBedsCount?: number | null;
    /**
     * Sofa beds count exception.
     */
    sofaBedsCountException?: string | null;
    /**
     * Synthetic pillows. The option for guests to obtain bed pillows stuffed with polyester material crafted to reproduce the feel of a pillow stuffed with down and feathers.
     */
    syntheticPillows?: boolean | null;
    /**
     * Synthetic pillows exception.
     */
    syntheticPillowsException?: string | null;
  }
  /**
   * Lodging of a location that provides accomodations.
   */
  export interface Schema$Lodging {
    /**
     * Physical adaptations made to the property in consideration of varying levels of human physical ability.
     */
    accessibility?: Schema$Accessibility;
    /**
     * Amenities and features related to leisure and play.
     */
    activities?: Schema$Activities;
    /**
     * Output only. All units on the property have at least these attributes.
     */
    allUnits?: Schema$GuestUnitFeatures;
    /**
     * Features of the property of specific interest to the business traveler.
     */
    business?: Schema$Business;
    /**
     * Features of the shared living areas available in this Lodging.
     */
    commonLivingArea?: Schema$LivingArea;
    /**
     * The ways in which the property provides guests with the ability to access the internet.
     */
    connectivity?: Schema$Connectivity;
    /**
     * Services and amenities for families and young guests.
     */
    families?: Schema$Families;
    /**
     * Meals, snacks, and beverages available at the property.
     */
    foodAndDrink?: Schema$FoodAndDrink;
    /**
     * Individual GuestUnitTypes that are available in this Lodging.
     */
    guestUnits?: Schema$GuestUnitType[];
    /**
     * Health and safety measures implemented by the hotel during COVID-19.
     */
    healthAndSafety?: Schema$HealthAndSafety;
    /**
     * Conveniences provided in guest units to facilitate an easier, more comfortable stay.
     */
    housekeeping?: Schema$Housekeeping;
    /**
     * Required. Metadata for the lodging.
     */
    metadata?: Schema$LodgingMetadata;
    /**
     * Required. Google identifier for this location in the form: `locations/{location_id\}/lodging`
     */
    name?: string | null;
    /**
     * Parking options at the property.
     */
    parking?: Schema$Parking;
    /**
     * Policies regarding guest-owned animals.
     */
    pets?: Schema$Pets;
    /**
     * Property rules that impact guests.
     */
    policies?: Schema$Policies;
    /**
     * Swimming pool or recreational water facilities available at the hotel.
     */
    pools?: Schema$Pools;
    /**
     * General factual information about the property's physical structure and important dates.
     */
    property?: Schema$Property;
    /**
     * Conveniences or help provided by the property to facilitate an easier, more comfortable stay.
     */
    services?: Schema$Services;
    /**
     * Output only. Some units on the property have as much as these attributes.
     */
    someUnits?: Schema$GuestUnitFeatures;
    /**
     * Sustainability practices implemented at the hotel.
     */
    sustainability?: Schema$Sustainability;
    /**
     * Vehicles or vehicular services facilitated or owned by the property.
     */
    transportation?: Schema$Transportation;
    /**
     * Guest facilities at the property to promote or maintain health, beauty, and fitness.
     */
    wellness?: Schema$Wellness;
  }
  /**
   * Metadata for the Lodging.
   */
  export interface Schema$LodgingMetadata {
    /**
     * Required. The latest time at which the Lodging data is asserted to be true in the real world. This is not necessarily the time at which the request is made.
     */
    updateTime?: string | null;
  }
  /**
   * Minimized contact measures implemented by the hotel during COVID-19.
   */
  export interface Schema$MinimizedContact {
    /**
     * No-contact check-in and check-out.
     */
    contactlessCheckinCheckout?: boolean | null;
    /**
     * Contactless check-in check-out exception.
     */
    contactlessCheckinCheckoutException?: string | null;
    /**
     * Keyless mobile entry to guest rooms.
     */
    digitalGuestRoomKeys?: boolean | null;
    /**
     * Digital guest room keys exception.
     */
    digitalGuestRoomKeysException?: string | null;
    /**
     * Housekeeping scheduled by request only.
     */
    housekeepingScheduledRequestOnly?: boolean | null;
    /**
     * Housekeeping scheduled request only exception.
     */
    housekeepingScheduledRequestOnlyException?: string | null;
    /**
     * High-touch items, such as magazines, removed from common areas.
     */
    noHighTouchItemsCommonAreas?: boolean | null;
    /**
     * No high touch items common areas exception.
     */
    noHighTouchItemsCommonAreasException?: string | null;
    /**
     * High-touch items, such as decorative pillows, removed from guest rooms.
     */
    noHighTouchItemsGuestRooms?: boolean | null;
    /**
     * No high touch items guest rooms exception.
     */
    noHighTouchItemsGuestRoomsException?: string | null;
    /**
     * Plastic key cards are disinfected or discarded.
     */
    plasticKeycardsDisinfected?: boolean | null;
    /**
     * Plastic keycards disinfected exception.
     */
    plasticKeycardsDisinfectedException?: string | null;
    /**
     * Buffer maintained between room bookings.
     */
    roomBookingsBuffer?: boolean | null;
    /**
     * Room bookings buffer exception.
     */
    roomBookingsBufferException?: string | null;
  }
  /**
   * Parking options at the property.
   */
  export interface Schema$Parking {
    /**
     * Electric car charging stations. Electric power stations, usually located outdoors, into which guests plug their electric cars to receive a charge.
     */
    electricCarChargingStations?: boolean | null;
    /**
     * Electric car charging stations exception.
     */
    electricCarChargingStationsException?: string | null;
    /**
     * Free parking. The hotel allows the cars of guests to be parked for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff. Free parking must be available to all guests (limited conditions does not apply).
     */
    freeParking?: boolean | null;
    /**
     * Free parking exception.
     */
    freeParkingException?: string | null;
    /**
     * Free self parking. Guests park their own cars for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply.
     */
    freeSelfParking?: boolean | null;
    /**
     * Free self parking exception.
     */
    freeSelfParkingException?: string | null;
    /**
     * Free valet parking. Hotel staff member parks the cars of guests. Parking with this service is free.
     */
    freeValetParking?: boolean | null;
    /**
     * Free valet parking exception.
     */
    freeValetParkingException?: string | null;
    /**
     * Parking available. The hotel allows the cars of guests to be parked. Can be free or for a fee. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff.
     */
    parkingAvailable?: boolean | null;
    /**
     * Parking available exception.
     */
    parkingAvailableException?: string | null;
    /**
     * Self parking available. Guests park their own cars. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Can be free or for a fee.
     */
    selfParkingAvailable?: boolean | null;
    /**
     * Self parking available exception.
     */
    selfParkingAvailableException?: string | null;
    /**
     * Valet parking available. Hotel staff member parks the cars of guests. Parking with this service can be free or for a fee.
     */
    valetParkingAvailable?: boolean | null;
    /**
     * Valet parking available exception.
     */
    valetParkingAvailableException?: string | null;
  }
  /**
   * Forms of payment accepted at the property.
   */
  export interface Schema$PaymentOptions {
    /**
     * Cash. The hotel accepts payment by paper/coin currency.
     */
    cash?: boolean | null;
    /**
     * Cash exception.
     */
    cashException?: string | null;
    /**
     * Cheque. The hotel accepts a printed document issued by the guest's bank in the guest's name as a form of payment.
     */
    cheque?: boolean | null;
    /**
     * Cheque exception.
     */
    chequeException?: string | null;
    /**
     * Credit card. The hotel accepts payment by a card issued by a bank or credit card company. Also known as charge card, debit card, bank card, or charge plate.
     */
    creditCard?: boolean | null;
    /**
     * Credit card exception.
     */
    creditCardException?: string | null;
    /**
     * Debit card. The hotel accepts a bank-issued card that immediately deducts the charged funds from the guest's bank account upon processing.
     */
    debitCard?: boolean | null;
    /**
     * Debit card exception.
     */
    debitCardException?: string | null;
    /**
     * Mobile nfc. The hotel has the compatible computer hardware terminal that reads and charges a payment app on the guest's smartphone without requiring the two devices to make physical contact. Also known as Apple Pay, Google Pay, Samsung Pay.
     */
    mobileNfc?: boolean | null;
    /**
     * Mobile nfc exception.
     */
    mobileNfcException?: string | null;
  }
  /**
   * Personal protection measures implemented by the hotel during COVID-19.
   */
  export interface Schema$PersonalProtection {
    /**
     * Hand-sanitizer and/or sanitizing wipes are offered in common areas.
     */
    commonAreasOfferSanitizingItems?: boolean | null;
    /**
     * Common areas offer sanitizing items exception.
     */
    commonAreasOfferSanitizingItemsException?: string | null;
    /**
     * Masks required on the property.
     */
    faceMaskRequired?: boolean | null;
    /**
     * Face mask required exception.
     */
    faceMaskRequiredException?: string | null;
    /**
     * In-room hygiene kits with masks, hand sanitizer, and/or antibacterial wipes.
     */
    guestRoomHygieneKitsAvailable?: boolean | null;
    /**
     * Guest room hygiene kits available exception.
     */
    guestRoomHygieneKitsAvailableException?: string | null;
    /**
     * Masks and/or gloves available for guests.
     */
    protectiveEquipmentAvailable?: boolean | null;
    /**
     * Protective equipment available exception.
     */
    protectiveEquipmentAvailableException?: string | null;
  }
  /**
   * Policies regarding guest-owned animals.
   */
  export interface Schema$Pets {
    /**
     * Cats allowed. Domesticated felines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee.
     */
    catsAllowed?: boolean | null;
    /**
     * Cats allowed exception.
     */
    catsAllowedException?: string | null;
    /**
     * Dogs allowed. Domesticated canines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee.
     */
    dogsAllowed?: boolean | null;
    /**
     * Dogs allowed exception.
     */
    dogsAllowedException?: string | null;
    /**
     * Pets allowed. Household animals are allowed at the property and in the specific guest room of their owner. May or may not include dogs, cats, reptiles and/or fish. May or may not require a fee. Service animals are not considered to be pets, so not governed by this policy.
     */
    petsAllowed?: boolean | null;
    /**
     * Pets allowed exception.
     */
    petsAllowedException?: string | null;
    /**
     * Pets allowed free. Household animals are allowed at the property and in the specific guest room of their owner for free. May or may not include dogs, cats, reptiles, and/or fish.
     */
    petsAllowedFree?: boolean | null;
    /**
     * Pets allowed free exception.
     */
    petsAllowedFreeException?: string | null;
  }
  /**
   * Physical distancing measures implemented by the hotel during COVID-19.
   */
  export interface Schema$PhysicalDistancing {
    /**
     * Common areas arranged to maintain physical distancing.
     */
    commonAreasPhysicalDistancingArranged?: boolean | null;
    /**
     * Common areas physical distancing arranged exception.
     */
    commonAreasPhysicalDistancingArrangedException?: string | null;
    /**
     * Physical distancing required.
     */
    physicalDistancingRequired?: boolean | null;
    /**
     * Physical distancing required exception.
     */
    physicalDistancingRequiredException?: string | null;
    /**
     * Safety dividers at front desk and other locations.
     */
    safetyDividers?: boolean | null;
    /**
     * Safety dividers exception.
     */
    safetyDividersException?: string | null;
    /**
     * Guest occupancy limited within shared facilities.
     */
    sharedAreasLimitedOccupancy?: boolean | null;
    /**
     * Shared areas limited occupancy exception.
     */
    sharedAreasLimitedOccupancyException?: string | null;
    /**
     * Private spaces designated in spa and wellness areas.
     */
    wellnessAreasHavePrivateSpaces?: boolean | null;
    /**
     * Wellness areas have private spaces exception.
     */
    wellnessAreasHavePrivateSpacesException?: string | null;
  }
  /**
   * Property rules that impact guests.
   */
  export interface Schema$Policies {
    /**
     * All inclusive available. The hotel offers a rate option that includes the cost of the room, meals, activities, and other amenities that might otherwise be charged separately.
     */
    allInclusiveAvailable?: boolean | null;
    /**
     * All inclusive available exception.
     */
    allInclusiveAvailableException?: string | null;
    /**
     * All inclusive only. The only rate option offered by the hotel is a rate that includes the cost of the room, meals, activities and other amenities that might otherwise be charged separately.
     */
    allInclusiveOnly?: boolean | null;
    /**
     * All inclusive only exception.
     */
    allInclusiveOnlyException?: string | null;
    /**
     * Check-in time. The time of the day at which the hotel begins providing guests access to their unit at the beginning of their stay.
     */
    checkinTime?: Schema$TimeOfDay;
    /**
     * Check-in time exception.
     */
    checkinTimeException?: string | null;
    /**
     * Check-out time. The time of the day on the last day of a guest's reserved stay at which the guest must vacate their room and settle their bill. Some hotels may offer late or early check out for a fee.
     */
    checkoutTime?: Schema$TimeOfDay;
    /**
     * Check-out time exception.
     */
    checkoutTimeException?: string | null;
    /**
     * Kids stay free. The children of guests are allowed to stay in the room/suite of a parent or adult without an additional fee. The policy may or may not stipulate a limit of the child's age or the overall number of children allowed.
     */
    kidsStayFree?: boolean | null;
    /**
     * Kids stay free exception.
     */
    kidsStayFreeException?: string | null;
    /**
     * Max child age. The hotel allows children up to a certain age to stay in the room/suite of a parent or adult without an additional fee.
     */
    maxChildAge?: number | null;
    /**
     * Max child age exception.
     */
    maxChildAgeException?: string | null;
    /**
     * Max kids stay free count. The hotel allows a specific, defined number of children to stay in the room/suite of a parent or adult without an additional fee.
     */
    maxKidsStayFreeCount?: number | null;
    /**
     * Max kids stay free count exception.
     */
    maxKidsStayFreeCountException?: string | null;
    /**
     * Forms of payment accepted at the property.
     */
    paymentOptions?: Schema$PaymentOptions;
    /**
     * Smoke free property. Smoking is not allowed inside the building, on balconies, or in outside spaces. Hotels that offer a designated area for guests to smoke are not considered smoke-free properties.
     */
    smokeFreeProperty?: boolean | null;
    /**
     * Smoke free property exception.
     */
    smokeFreePropertyException?: string | null;
  }
  /**
   * Swimming pool or recreational water facilities available at the hotel.
   */
  export interface Schema$Pools {
    /**
     * Adult pool. A pool restricted for use by adults only. Can be indoors or outdoors.
     */
    adultPool?: boolean | null;
    /**
     * Adult pool exception.
     */
    adultPoolException?: string | null;
    /**
     * Hot tub. A man-made pool containing bubbling water maintained at a higher temperature and circulated by aerating jets for the purpose of soaking, relaxation and hydrotherapy. Can be indoors or outdoors. Not used for active swimming. Also known as Jacuzzi. Hot tub must be in a common area where all guests can access it. Does not apply to room-specific hot tubs that are only accessible to guest occupying that room.
     */
    hotTub?: boolean | null;
    /**
     * Hot tub exception.
     */
    hotTubException?: string | null;
    /**
     * Indoor pool. A pool located inside the hotel and available for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children.
     */
    indoorPool?: boolean | null;
    /**
     * Indoor pool exception.
     */
    indoorPoolException?: string | null;
    /**
     * Indoor pools count. The sum of all indoor pools at the hotel.
     */
    indoorPoolsCount?: number | null;
    /**
     * Indoor pools count exception.
     */
    indoorPoolsCountException?: string | null;
    /**
     * Lazy river. A man-made pool or several interconnected recreational pools built to mimic the shape and current of a winding river where guests float in the water on inflated rubber tubes. Can be indoors or outdoors.
     */
    lazyRiver?: boolean | null;
    /**
     * Lazy river exception.
     */
    lazyRiverException?: string | null;
    /**
     * Lifeguard. A trained member of the hotel staff stationed by the hotel's indoor or outdoor swimming area and responsible for the safety of swimming guests.
     */
    lifeguard?: boolean | null;
    /**
     * Lifeguard exception.
     */
    lifeguardException?: string | null;
    /**
     * Outdoor pool. A pool located outside on the grounds of the hotel and available for guests to use for swimming, soaking or recreation. Use may or may not be restricted to adults and/or children.
     */
    outdoorPool?: boolean | null;
    /**
     * Outdoor pool exception.
     */
    outdoorPoolException?: string | null;
    /**
     * Outdoor pools count. The sum of all outdoor pools at the hotel.
     */
    outdoorPoolsCount?: number | null;
    /**
     * Outdoor pools count exception.
     */
    outdoorPoolsCountException?: string | null;
    /**
     * Pool. The presence of a pool, either indoors or outdoors, for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children.
     */
    pool?: boolean | null;
    /**
     * Pool exception.
     */
    poolException?: string | null;
    /**
     * Pools count. The sum of all pools at the hotel.
     */
    poolsCount?: number | null;
    /**
     * Pools count exception.
     */
    poolsCountException?: string | null;
    /**
     * Wading pool. A shallow pool designed for small children to play in. Can be indoors or outdoors. Also known as kiddie pool.
     */
    wadingPool?: boolean | null;
    /**
     * Wading pool exception.
     */
    wadingPoolException?: string | null;
    /**
     * Water park. An aquatic recreation area with a large pool or series of pools that has features such as a water slide or tube, wavepool, fountains, rope swings, and/or obstacle course. Can be indoors or outdoors. Also known as adventure pool.
     */
    waterPark?: boolean | null;
    /**
     * Water park exception.
     */
    waterParkException?: string | null;
    /**
     * Waterslide. A continuously wetted chute positioned by an indoor or outdoor pool which people slide down into the water.
     */
    waterslide?: boolean | null;
    /**
     * Waterslide exception.
     */
    waterslideException?: string | null;
    /**
     * Wave pool. A large indoor or outdoor pool with a machine that produces water currents to mimic the ocean's crests.
     */
    wavePool?: boolean | null;
    /**
     * Wave pool exception.
     */
    wavePoolException?: string | null;
  }
  /**
   * General factual information about the property's physical structure and important dates.
   */
  export interface Schema$Property {
    /**
     * Built year. The year that construction of the property was completed.
     */
    builtYear?: number | null;
    /**
     * Built year exception.
     */
    builtYearException?: string | null;
    /**
     * Floors count. The number of stories the building has from the ground floor to the top floor that are accessible to guests.
     */
    floorsCount?: number | null;
    /**
     * Floors count exception.
     */
    floorsCountException?: string | null;
    /**
     * Last renovated year. The year when the most recent renovation of the property was completed. Renovation may include all or any combination of the following: the units, the public spaces, the exterior, or the interior.
     */
    lastRenovatedYear?: number | null;
    /**
     * Last renovated year exception.
     */
    lastRenovatedYearException?: string | null;
    /**
     * Rooms count. The total number of rooms and suites bookable by guests for an overnight stay. Does not include event space, public spaces, conference rooms, fitness rooms, business centers, spa, salon, restaurants/bars, or shops.
     */
    roomsCount?: number | null;
    /**
     * Rooms count exception.
     */
    roomsCountException?: string | null;
  }
  /**
   * Conveniences or help provided by the property to facilitate an easier, more comfortable stay.
   */
  export interface Schema$Services {
    /**
     * Baggage storage. A provision for guests to leave their bags at the hotel when they arrive for their stay before the official check-in time. May or may not apply for guests who wish to leave their bags after check-out and before departing the locale. Also known as bag dropoff.
     */
    baggageStorage?: boolean | null;
    /**
     * Baggage storage exception.
     */
    baggageStorageException?: string | null;
    /**
     * Concierge. Hotel staff member(s) responsible for facilitating an easy, comfortable stay through making reservations for meals, sourcing theater tickets, arranging tours, finding a doctor, making recommendations, and answering questions.
     */
    concierge?: boolean | null;
    /**
     * Concierge exception.
     */
    conciergeException?: string | null;
    /**
     * Convenience store. A shop at the hotel primarily selling snacks, drinks, non-prescription medicines, health and beauty aids, magazines and newspapers.
     */
    convenienceStore?: boolean | null;
    /**
     * Convenience store exception.
     */
    convenienceStoreException?: string | null;
    /**
     * Currency exchange. A staff member or automated machine tasked with the transaction of providing the native currency of the hotel's locale in exchange for the foreign currency provided by a guest.
     */
    currencyExchange?: boolean | null;
    /**
     * Currency exchange exception.
     */
    currencyExchangeException?: string | null;
    /**
     * Elevator. A passenger elevator that transports guests from one story to another. Also known as lift.
     */
    elevator?: boolean | null;
    /**
     * Elevator exception.
     */
    elevatorException?: string | null;
    /**
     * Front desk. A counter or desk in the lobby or the immediate interior of the hotel where a member of the staff greets guests and processes the information related to their stay (including check-in and check-out). May or may not be manned and open 24/7.
     */
    frontDesk?: boolean | null;
    /**
     * Front desk exception.
     */
    frontDeskException?: string | null;
    /**
     * Full service laundry. Laundry and dry cleaning facilitated and handled by the hotel on behalf of the guest. Does not include the provision for guests to do their own laundry in on-site machines.
     */
    fullServiceLaundry?: boolean | null;
    /**
     * Full service laundry exception.
     */
    fullServiceLaundryException?: string | null;
    /**
     * Gift shop. An on-site store primarily selling souvenirs, mementos and other gift items. May or may not also sell sundries, magazines and newspapers, clothing, or snacks.
     */
    giftShop?: boolean | null;
    /**
     * Gift shop exception.
     */
    giftShopException?: string | null;
    /**
     * Languages spoken by at least one staff member.
     */
    languagesSpoken?: Schema$LanguageSpoken[];
    /**
     * Self service laundry. On-site clothes washers and dryers accessible to guests for the purpose of washing and drying their own clothes. May or may not require payment to use the machines.
     */
    selfServiceLaundry?: boolean | null;
    /**
     * Self service laundry exception.
     */
    selfServiceLaundryException?: string | null;
    /**
     * Social hour. A reception with complimentary soft drinks, tea, coffee, wine and/or cocktails in the afternoon or evening. Can be hosted by hotel staff or guests may serve themselves. Also known as wine hour. The availability of coffee/tea in the lobby throughout the day does not constitute a social or wine hour.
     */
    socialHour?: boolean | null;
    /**
     * Social hour exception.
     */
    socialHourException?: string | null;
    /**
     * 24hr front desk. Front desk is staffed 24 hours a day.
     */
    twentyFourHourFrontDesk?: boolean | null;
    /**
     * 24hr front desk exception.
     */
    twentyFourHourFrontDeskException?: string | null;
    /**
     * Wake up calls. By direction of the guest, a hotel staff member will phone the guest unit at the requested hour. Also known as morning call.
     */
    wakeUpCalls?: boolean | null;
    /**
     * Wake up calls exception.
     */
    wakeUpCallsException?: string | null;
  }
  /**
   * Sustainability practices implemented at the hotel.
   */
  export interface Schema$Sustainability {
    /**
     * Energy efficiency practices implemented at the hotel.
     */
    energyEfficiency?: Schema$EnergyEfficiency;
    /**
     * Sustainability certifications the hotel has been awarded. Deprecated: this field is no longer populated. All certification data is now provided by BeCause.
     */
    sustainabilityCertifications?: Schema$SustainabilityCertifications;
    /**
     * Sustainable sourcing practices implemented at the hotel.
     */
    sustainableSourcing?: Schema$SustainableSourcing;
    /**
     * Waste reduction practices implemented at the hotel.
     */
    wasteReduction?: Schema$WasteReduction;
    /**
     * Water conservation practices implemented at the hotel.
     */
    waterConservation?: Schema$WaterConservation;
  }
  /**
   * Sustainability certifications the hotel has been awarded. Deprecated: this message is no longer populated. All certification data is now provided by BeCause.
   */
  export interface Schema$SustainabilityCertifications {
    /**
     * BREEAM certification.
     */
    breeamCertification?: string | null;
    /**
     * BREEAM certification exception.
     */
    breeamCertificationException?: string | null;
    /**
     * The eco certificates awarded to the hotel.
     */
    ecoCertifications?: Schema$EcoCertification[];
    /**
     * LEED certification.
     */
    leedCertification?: string | null;
    /**
     * LEED certification exception.
     */
    leedCertificationException?: string | null;
  }
  /**
   * Sustainable sourcing practices implemented at the hotel.
   */
  export interface Schema$SustainableSourcing {
    /**
     * Eco friendly toiletries. Soap, shampoo, lotion, and other toiletries provided for guests have a nationally or internationally recognized sustainability certification, such as USDA Organic, EU Organic, or cruelty-free.
     */
    ecoFriendlyToiletries?: boolean | null;
    /**
     * Eco friendly toiletries exception.
     */
    ecoFriendlyToiletriesException?: string | null;
    /**
     * Locally sourced food and beverages. Property sources locally in order to lower the environmental footprint from reduced transportation and to stimulate the local economy. Products produced less than 62 miles from the establishment are normally considered as locally produced.
     */
    locallySourcedFoodAndBeverages?: boolean | null;
    /**
     * Locally sourced food and beverages exception.
     */
    locallySourcedFoodAndBeveragesException?: string | null;
    /**
     * Organic cage free eggs. The property sources 100% certified organic and cage-free eggs (shell, liquid, and egg products). Cage-free means hens are able to walk, spread their wings and lay their eggs in nests).
     */
    organicCageFreeEggs?: boolean | null;
    /**
     * Organic cage free eggs exception.
     */
    organicCageFreeEggsException?: string | null;
    /**
     * Organic food and beverages. At least 25% of food and beverages, by spend, are certified organic. Organic means products that are certified to one of the organic standard listed in the IFOAM family of standards. Qualifying certifications include USDA Organic and EU Organic, among others.
     */
    organicFoodAndBeverages?: boolean | null;
    /**
     * Organic food and beverages exception.
     */
    organicFoodAndBeveragesException?: string | null;
    /**
     * Responsible purchasing policy. The property has a responsible procurement policy in place. Responsible means integration of social, ethical, and/or environmental performance factors into the procurement process when selecting suppliers.
     */
    responsiblePurchasingPolicy?: boolean | null;
    /**
     * Responsible purchasing policy exception.
     */
    responsiblePurchasingPolicyException?: string | null;
    /**
     * Responsibly sources seafood. The property does not source seafood from the Monterey Bay Aquarium Seafood Watch "avoid" list, and must sustainably source seafood listed as "good alternative," "eco-certified," and "best choice". The property has a policy outlining a commitment to source Marine Stewardship Council (MSC) and/or Aquaculture Stewardship Council (ASC) Chain of Custody certified seafood.
     */
    responsiblySourcesSeafood?: boolean | null;
    /**
     * Responsibly sources seafood exception.
     */
    responsiblySourcesSeafoodException?: string | null;
    /**
     * Vegan meals. The property provides vegan menu options for guests. Vegan food does not contain animal products or byproducts.
     */
    veganMeals?: boolean | null;
    /**
     * Vegan meals exception.
     */
    veganMealsException?: string | null;
    /**
     * Vegetarian meals. The property provides vegetarian menu options for guests. Vegetarian food does not contain meat, poultry, fish, or seafood.
     */
    vegetarianMeals?: boolean | null;
    /**
     * Vegetarian meals exception.
     */
    vegetarianMealsException?: string | null;
  }
  /**
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
  }
  /**
   * Vehicles or vehicular services facilitated or owned by the property.
   */
  export interface Schema$Transportation {
    /**
     * Airport shuttle. The hotel provides guests with a chauffeured van or bus to and from the airport. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them. Applies if the hotel has a third-party shuttle service (office/desk etc.) within the hotel. As long as hotel provides this service, it doesn't matter if it's directly with them or a third party they work with. Does not apply if guest has to coordinate with an entity outside/other than the hotel.
     */
    airportShuttle?: boolean | null;
    /**
     * Airport shuttle exception.
     */
    airportShuttleException?: string | null;
    /**
     * Car rental on property. A branch of a rental car company with a processing desk in the hotel. Available cars for rent may be awaiting at the hotel or in a nearby lot.
     */
    carRentalOnProperty?: boolean | null;
    /**
     * Car rental on property exception.
     */
    carRentalOnPropertyException?: string | null;
    /**
     * Free airport shuttle. Airport shuttle is free to guests. Must be free to all guests without any conditions.
     */
    freeAirportShuttle?: boolean | null;
    /**
     * Free airport shuttle exception.
     */
    freeAirportShuttleException?: string | null;
    /**
     * Free private car service. Private chauffeured car service is free to guests.
     */
    freePrivateCarService?: boolean | null;
    /**
     * Free private car service exception.
     */
    freePrivateCarServiceException?: string | null;
    /**
     * Local shuttle. A car, van or bus provided by the hotel to transport guests to destinations within a specified range of distance around the hotel. Usually shopping and/or convention centers, downtown districts, or beaches. Can be free or for a fee.
     */
    localShuttle?: boolean | null;
    /**
     * Local shuttle exception.
     */
    localShuttleException?: string | null;
    /**
     * Private car service. Hotel provides a private chauffeured car to transport guests to destinations. Passengers in the car are either alone or are known to one another and have requested the car together. Service can be free or for a fee and travel distance is usually limited to a specific range. Not a taxi.
     */
    privateCarService?: boolean | null;
    /**
     * Private car service exception.
     */
    privateCarServiceException?: string | null;
    /**
     * Transfer. Hotel provides a shuttle service or car service to take guests to and from the nearest airport or train station. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them.
     */
    transfer?: boolean | null;
    /**
     * Transfer exception.
     */
    transferException?: string | null;
  }
  /**
   * Views available from the guest unit itself.
   */
  export interface Schema$ViewsFromUnit {
    /**
     * Beach view. A guestroom that features a window through which guests can see the beach.
     */
    beachView?: boolean | null;
    /**
     * Beach view exception.
     */
    beachViewException?: string | null;
    /**
     * City view. A guestroom that features a window through which guests can see the buildings, parks and/or streets of the city.
     */
    cityView?: boolean | null;
    /**
     * City view exception.
     */
    cityViewException?: string | null;
    /**
     * Garden view. A guestroom that features a window through which guests can see a garden.
     */
    gardenView?: boolean | null;
    /**
     * Garden view exception.
     */
    gardenViewException?: string | null;
    /**
     * Lake view.
     */
    lakeView?: boolean | null;
    /**
     * Lake view exception.
     */
    lakeViewException?: string | null;
    /**
     * Landmark view. A guestroom that features a window through which guests can see a landmark such as the countryside, a golf course, the forest, a park, a rain forst, a mountain or a slope.
     */
    landmarkView?: boolean | null;
    /**
     * Landmark view exception.
     */
    landmarkViewException?: string | null;
    /**
     * Ocean view. A guestroom that features a window through which guests can see the ocean.
     */
    oceanView?: boolean | null;
    /**
     * Ocean view exception.
     */
    oceanViewException?: string | null;
    /**
     * Pool view. A guestroom that features a window through which guests can see the hotel's swimming pool.
     */
    poolView?: boolean | null;
    /**
     * Pool view exception.
     */
    poolViewException?: string | null;
    /**
     * Valley view. A guestroom that features a window through which guests can see over a valley.
     */
    valleyView?: boolean | null;
    /**
     * Valley view exception.
     */
    valleyViewException?: string | null;
  }
  /**
   * Waste reduction practices implemented at the hotel.
   */
  export interface Schema$WasteReduction {
    /**
     * Compostable food containers and cutlery. 100% of food service containers and to-go cutlery are compostable, and reusable utensils are offered wherever possible. Compostable materials are capable of undergoing biological decomposition in a compost site, such that material is not visually distinguishable and breaks down into carbon dioxide, water, inorganic compounds, and biomass.
     */
    compostableFoodContainersAndCutlery?: boolean | null;
    /**
     * Compostable food containers and cutlery exception.
     */
    compostableFoodContainersAndCutleryException?: string | null;
    /**
     * Composts excess food. The property has a program and/or policy for diverting waste from landfill by composting food and yard waste, either through compost collection and off-site processing or on-site compost processing.
     */
    compostsExcessFood?: boolean | null;
    /**
     * Composts excess food exception.
     */
    compostsExcessFoodException?: string | null;
    /**
     * Donates excess food. The property has a program and/or policy for diverting waste from landfill that may include efforts to donate for human consumption or divert food for animal feed.
     */
    donatesExcessFood?: boolean | null;
    /**
     * Donates excess food exception.
     */
    donatesExcessFoodException?: string | null;
    /**
     * Food waste reduction program. The property has established a food waste reduction and donation program, aiming to reduce food waste by half. These programs typically use tools such as the Hotel Kitchen Toolkit and others to track waste and measure progress.
     */
    foodWasteReductionProgram?: boolean | null;
    /**
     * Food waste reduction program exception.
     */
    foodWasteReductionProgramException?: string | null;
    /**
     * No single use plastic straws. The property bans single-use plastic straws.
     */
    noSingleUsePlasticStraws?: boolean | null;
    /**
     * No single use plastic straws exception.
     */
    noSingleUsePlasticStrawsException?: string | null;
    /**
     * No single use plastic water bottles. The property bans single-use plastic water bottles.
     */
    noSingleUsePlasticWaterBottles?: boolean | null;
    /**
     * No single use plastic water bottles exception.
     */
    noSingleUsePlasticWaterBottlesException?: string | null;
    /**
     * No styrofoam food containers. The property eliminates the use of Styrofoam in disposable food service items.
     */
    noStyrofoamFoodContainers?: boolean | null;
    /**
     * No styrofoam food containers exception.
     */
    noStyrofoamFoodContainersException?: string | null;
    /**
     * Recycling program. The property has a recycling program, aligned with LEED waste requirements, and a policy outlining efforts to send less than 50% of waste to landfill. The recycling program includes storage locations for recyclable materials, including mixed paper, corrugated cardboard, glass, plastics, and metals.
     */
    recyclingProgram?: boolean | null;
    /**
     * Recycling program exception.
     */
    recyclingProgramException?: string | null;
    /**
     * Refillable toiletry containers. The property has replaced miniature individual containers with refillable amenity dispensers for shampoo, conditioner, soap, and lotion.
     */
    refillableToiletryContainers?: boolean | null;
    /**
     * Refillable toiletry containers exception.
     */
    refillableToiletryContainersException?: string | null;
    /**
     * Safely disposes batteries. The property safely stores and disposes batteries.
     */
    safelyDisposesBatteries?: boolean | null;
    /**
     * Safely disposes batteries exception.
     */
    safelyDisposesBatteriesException?: string | null;
    /**
     * Safely disposes electronics. The property has a reputable recycling program that keeps hazardous electronic parts and chemical compounds out of landfills, dumps and other unauthorized abandonment sites, and recycles/reuses applicable materials. (e.g. certified electronics recyclers).
     */
    safelyDisposesElectronics?: boolean | null;
    /**
     * Safely disposes electronics exception.
     */
    safelyDisposesElectronicsException?: string | null;
    /**
     * Safely disposes lightbulbs. The property safely stores and disposes lightbulbs.
     */
    safelyDisposesLightbulbs?: boolean | null;
    /**
     * Safely disposes lightbulbs exception.
     */
    safelyDisposesLightbulbsException?: string | null;
    /**
     * Safely handles hazardous substances. The property has a hazardous waste management program aligned wit GreenSeal and LEED requirements, and meets all regulatory requirements for hazardous waste disposal and recycling. Hazardous means substances that are classified as "hazardous" by an authoritative body (such as OSHA or DOT), are labeled with signal words such as "Danger," "Caution," "Warning," or are flammable, corrosive, or ignitable. Requirements include: - The property shall maintain records of the efforts it has made to replace the hazardous substances it uses with less hazardous alternatives. - An inventory of the hazardous materials stored on-site. - Products intended for cleaning, dishwashing, laundry, and pool maintenance shall be stored in clearly labeled containers. These containers shall be checked regularly for leaks, and replaced a necessary. - Spill containment devices shall be installed to collect spills, drips, or leaching of chemicals.
     */
    safelyHandlesHazardousSubstances?: boolean | null;
    /**
     * Safely handles hazardous substances exception.
     */
    safelyHandlesHazardousSubstancesException?: string | null;
    /**
     * Soap donation program. The property participates in a soap donation program such as Clean the World or something similar.
     */
    soapDonationProgram?: boolean | null;
    /**
     * Soap donation program exception.
     */
    soapDonationProgramException?: string | null;
    /**
     * Toiletry donation program. The property participates in a toiletry donation program such as Clean the World or something similar.
     */
    toiletryDonationProgram?: boolean | null;
    /**
     * Toiletry donation program exception.
     */
    toiletryDonationProgramException?: string | null;
    /**
     * Water bottle filling stations. The property offers water stations throughout the building for guest use.
     */
    waterBottleFillingStations?: boolean | null;
    /**
     * Water bottle filling stations exception.
     */
    waterBottleFillingStationsException?: string | null;
  }
  /**
   * Water conservation practices implemented at the hotel.
   */
  export interface Schema$WaterConservation {
    /**
     * Independent organization audits water use. The property conducts a water conservation audit every 5 years, the results of which are either verified by a third-party and/or published in external communications. A water conservation audit is a detailed assessment of the facility, providing recommendations to existing operations and procedures to improve water efficiency, available incentives or rebates, and opportunities for improvements through renovations or upgrades. Examples of organizations who conduct credible third party audits include: Engie Impact, and local utility providers (they often provide energy and water audits).
     */
    independentOrganizationAuditsWaterUse?: boolean | null;
    /**
     * Independent organization audits water use exception.
     */
    independentOrganizationAuditsWaterUseException?: string | null;
    /**
     * Linen reuse program. The property offers a linen reuse program.
     */
    linenReuseProgram?: boolean | null;
    /**
     * Linen reuse program exception.
     */
    linenReuseProgramException?: string | null;
    /**
     * Towel reuse program. The property offers a towel reuse program.
     */
    towelReuseProgram?: boolean | null;
    /**
     * Towel reuse program exception.
     */
    towelReuseProgramException?: string | null;
    /**
     * Water saving showers. All of the property's guest rooms have shower heads that use no more than 2.0 gallons per minute (gpm).
     */
    waterSavingShowers?: boolean | null;
    /**
     * Water saving showers exception.
     */
    waterSavingShowersException?: string | null;
    /**
     * Water saving sinks. All of the property's guest rooms have bathroom faucets that use a maximum of 1.5 gallons per minute (gpm), public restroom faucets do not exceed 0.5 gpm, and kitchen faucets (excluding faucets used exclusively for filling operations) do not exceed 2.2 gpm.
     */
    waterSavingSinks?: boolean | null;
    /**
     * Water saving sinks exception.
     */
    waterSavingSinksException?: string | null;
    /**
     * Water saving toilets. All of the property's toilets use 1.6 gallons per flush, or less.
     */
    waterSavingToilets?: boolean | null;
    /**
     * Water saving toilets exception.
     */
    waterSavingToiletsException?: string | null;
  }
  /**
   * Guest facilities at the property to promote or maintain health, beauty, and fitness.
   */
  export interface Schema$Wellness {
    /**
     * Doctor on call. The hotel has a contract with a medical professional who provides services to hotel guests should they fall ill during their stay. The doctor may or may not have an on-site office or be at the hotel at all times.
     */
    doctorOnCall?: boolean | null;
    /**
     * Doctor on call exception.
     */
    doctorOnCallException?: string | null;
    /**
     * Elliptical machine. An electric, stationary fitness machine with pedals that simulates climbing, walking or running and provides a user-controlled range of speeds and tensions. May not have arm-controlled levers to work out the upper body as well. Commonly found in a gym, fitness room, health center, or health club.
     */
    ellipticalMachine?: boolean | null;
    /**
     * Elliptical machine exception.
     */
    ellipticalMachineException?: string | null;
    /**
     * Fitness center. A room or building at the hotel containing equipment to promote physical activity, such as treadmills, elliptical machines, stationary bikes, weight machines, free weights, and/or stretching mats. Use of the fitness center can be free or for a fee. May or may not be staffed. May or may not offer instructor-led classes in various styles of physical conditioning. May or may not be open 24/7. May or may not include locker rooms and showers. Also known as health club, gym, fitness room, health center.
     */
    fitnessCenter?: boolean | null;
    /**
     * Fitness center exception.
     */
    fitnessCenterException?: string | null;
    /**
     * Free fitness center. Guests may use the fitness center for free.
     */
    freeFitnessCenter?: boolean | null;
    /**
     * Free fitness center exception.
     */
    freeFitnessCenterException?: string | null;
    /**
     * Free weights. Individual handheld fitness equipment of varied weights used for upper body strength training or bodybuilding. Also known as barbells, dumbbells, or kettlebells. Often stored on a rack with the weights arranged from light to heavy. Commonly found in a gym, fitness room, health center, or health club.
     */
    freeWeights?: boolean | null;
    /**
     * Free weights exception.
     */
    freeWeightsException?: string | null;
    /**
     * Massage. A service provided by a trained massage therapist involving the physical manipulation of a guest's muscles in order to achieve relaxation or pain relief.
     */
    massage?: boolean | null;
    /**
     * Massage exception.
     */
    massageException?: string | null;
    /**
     * Salon. A room at the hotel where professionals provide hair styling services such as shampooing, blow drying, hair dos, hair cutting and hair coloring. Also known as hairdresser or beauty salon.
     */
    salon?: boolean | null;
    /**
     * Salon exception.
     */
    salonException?: string | null;
    /**
     * Sauna. A wood-paneled room heated to a high temperature where guests sit on built-in wood benches for the purpose of perspiring and relaxing their muscles. Can be dry or slightly wet heat. Not a steam room.
     */
    sauna?: boolean | null;
    /**
     * Sauna exception.
     */
    saunaException?: string | null;
    /**
     * Spa. A designated area, room or building at the hotel offering health and beauty treatment through such means as steam baths, exercise equipment, and massage. May also offer facials, nail care, and hair care. Services are usually available by appointment and for an additional fee. Does not apply if hotel only offers a steam room; must offer other beauty and/or health treatments as well.
     */
    spa?: boolean | null;
    /**
     * Spa exception.
     */
    spaException?: string | null;
    /**
     * Treadmill. An electric stationary fitness machine that simulates a moving path to promote walking or running within a range of user-controlled speeds and inclines. Also known as running machine. Commonly found in a gym, fitness room, health center, or health club.
     */
    treadmill?: boolean | null;
    /**
     * Treadmill exception.
     */
    treadmillException?: string | null;
    /**
     * Weight machine. Non-electronic fitness equipment designed for the user to target the exertion of different muscles. Usually incorporates a padded seat, a stack of flat weights and various bars and pulleys. May be designed for toning a specific part of the body or may involve different user-controlled settings, hardware and pulleys so as to provide an overall workout in one machine. Commonly found in a gym, fitness center, fitness room, or health club.
     */
    weightMachine?: boolean | null;
    /**
     * Weight machine exception.
     */
    weightMachineException?: string | null;
  }

  export class Resource$Locations {
    context: APIRequestContext;
    lodging: Resource$Locations$Lodging;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.lodging = new Resource$Locations$Lodging(this.context);
    }

    /**
     * Returns the Lodging of a specific location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinesslodging.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const mybusinesslodging = google.mybusinesslodging('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinesslodging.locations.getLodging({
     *     // Required. Google identifier for this location in the form: `locations/{location_id\}/lodging`
     *     name: 'locations/my-location/lodging',
     *     // Required. The specific fields to return. Use "*" to include all fields. Repeated field items cannot be individually specified.
     *     readMask: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessibility": {},
     *   //   "activities": {},
     *   //   "allUnits": {},
     *   //   "business": {},
     *   //   "commonLivingArea": {},
     *   //   "connectivity": {},
     *   //   "families": {},
     *   //   "foodAndDrink": {},
     *   //   "guestUnits": [],
     *   //   "healthAndSafety": {},
     *   //   "housekeeping": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "parking": {},
     *   //   "pets": {},
     *   //   "policies": {},
     *   //   "pools": {},
     *   //   "property": {},
     *   //   "services": {},
     *   //   "someUnits": {},
     *   //   "sustainability": {},
     *   //   "transportation": {},
     *   //   "wellness": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getLodging(
      params: Params$Resource$Locations$Getlodging,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getLodging(
      params?: Params$Resource$Locations$Getlodging,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Lodging>>;
    getLodging(
      params: Params$Resource$Locations$Getlodging,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getLodging(
      params: Params$Resource$Locations$Getlodging,
      options: MethodOptions | BodyResponseCallback<Schema$Lodging>,
      callback: BodyResponseCallback<Schema$Lodging>
    ): void;
    getLodging(
      params: Params$Resource$Locations$Getlodging,
      callback: BodyResponseCallback<Schema$Lodging>
    ): void;
    getLodging(callback: BodyResponseCallback<Schema$Lodging>): void;
    getLodging(
      paramsOrCallback?:
        | Params$Resource$Locations$Getlodging
        | BodyResponseCallback<Schema$Lodging>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Lodging>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Lodging>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Lodging>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Getlodging;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Getlodging;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinesslodging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Lodging>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Lodging>(parameters);
      }
    }

    /**
     * Updates the Lodging of a specific location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinesslodging.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const mybusinesslodging = google.mybusinesslodging('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinesslodging.locations.updateLodging({
     *     // Required. Google identifier for this location in the form: `locations/{location_id\}/lodging`
     *     name: 'locations/my-location/lodging',
     *     // Required. The specific fields to update. Use "*" to update all fields, which may include unsetting empty fields in the request. Repeated field items cannot be individually updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accessibility": {},
     *       //   "activities": {},
     *       //   "allUnits": {},
     *       //   "business": {},
     *       //   "commonLivingArea": {},
     *       //   "connectivity": {},
     *       //   "families": {},
     *       //   "foodAndDrink": {},
     *       //   "guestUnits": [],
     *       //   "healthAndSafety": {},
     *       //   "housekeeping": {},
     *       //   "metadata": {},
     *       //   "name": "my_name",
     *       //   "parking": {},
     *       //   "pets": {},
     *       //   "policies": {},
     *       //   "pools": {},
     *       //   "property": {},
     *       //   "services": {},
     *       //   "someUnits": {},
     *       //   "sustainability": {},
     *       //   "transportation": {},
     *       //   "wellness": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessibility": {},
     *   //   "activities": {},
     *   //   "allUnits": {},
     *   //   "business": {},
     *   //   "commonLivingArea": {},
     *   //   "connectivity": {},
     *   //   "families": {},
     *   //   "foodAndDrink": {},
     *   //   "guestUnits": [],
     *   //   "healthAndSafety": {},
     *   //   "housekeeping": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "parking": {},
     *   //   "pets": {},
     *   //   "policies": {},
     *   //   "pools": {},
     *   //   "property": {},
     *   //   "services": {},
     *   //   "someUnits": {},
     *   //   "sustainability": {},
     *   //   "transportation": {},
     *   //   "wellness": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateLodging(
      params: Params$Resource$Locations$Updatelodging,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateLodging(
      params?: Params$Resource$Locations$Updatelodging,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Lodging>>;
    updateLodging(
      params: Params$Resource$Locations$Updatelodging,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateLodging(
      params: Params$Resource$Locations$Updatelodging,
      options: MethodOptions | BodyResponseCallback<Schema$Lodging>,
      callback: BodyResponseCallback<Schema$Lodging>
    ): void;
    updateLodging(
      params: Params$Resource$Locations$Updatelodging,
      callback: BodyResponseCallback<Schema$Lodging>
    ): void;
    updateLodging(callback: BodyResponseCallback<Schema$Lodging>): void;
    updateLodging(
      paramsOrCallback?:
        | Params$Resource$Locations$Updatelodging
        | BodyResponseCallback<Schema$Lodging>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Lodging>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Lodging>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Lodging>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Updatelodging;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Updatelodging;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinesslodging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Lodging>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Lodging>(parameters);
      }
    }
  }

  export interface Params$Resource$Locations$Getlodging
    extends StandardParameters {
    /**
     * Required. Google identifier for this location in the form: `locations/{location_id\}/lodging`
     */
    name?: string;
    /**
     * Required. The specific fields to return. Use "*" to include all fields. Repeated field items cannot be individually specified.
     */
    readMask?: string;
  }
  export interface Params$Resource$Locations$Updatelodging
    extends StandardParameters {
    /**
     * Required. Google identifier for this location in the form: `locations/{location_id\}/lodging`
     */
    name?: string;
    /**
     * Required. The specific fields to update. Use "*" to update all fields, which may include unsetting empty fields in the request. Repeated field items cannot be individually updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Lodging;
  }

  export class Resource$Locations$Lodging {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the Google updated Lodging of a specific location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinesslodging.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const mybusinesslodging = google.mybusinesslodging('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinesslodging.locations.lodging.getGoogleUpdated({
     *     // Required. Google identifier for this location in the form: `locations/{location_id\}/lodging`
     *     name: 'locations/my-location/lodging',
     *     // Required. The specific fields to return. Use "*" to include all fields. Repeated field items cannot be individually specified.
     *     readMask: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "diffMask": "my_diffMask",
     *   //   "lodging": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getGoogleUpdated(
      params: Params$Resource$Locations$Lodging$Getgoogleupdated,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getGoogleUpdated(
      params?: Params$Resource$Locations$Lodging$Getgoogleupdated,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GetGoogleUpdatedLodgingResponse>>;
    getGoogleUpdated(
      params: Params$Resource$Locations$Lodging$Getgoogleupdated,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getGoogleUpdated(
      params: Params$Resource$Locations$Lodging$Getgoogleupdated,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetGoogleUpdatedLodgingResponse>,
      callback: BodyResponseCallback<Schema$GetGoogleUpdatedLodgingResponse>
    ): void;
    getGoogleUpdated(
      params: Params$Resource$Locations$Lodging$Getgoogleupdated,
      callback: BodyResponseCallback<Schema$GetGoogleUpdatedLodgingResponse>
    ): void;
    getGoogleUpdated(
      callback: BodyResponseCallback<Schema$GetGoogleUpdatedLodgingResponse>
    ): void;
    getGoogleUpdated(
      paramsOrCallback?:
        | Params$Resource$Locations$Lodging$Getgoogleupdated
        | BodyResponseCallback<Schema$GetGoogleUpdatedLodgingResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetGoogleUpdatedLodgingResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetGoogleUpdatedLodgingResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GetGoogleUpdatedLodgingResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Lodging$Getgoogleupdated;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Lodging$Getgoogleupdated;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinesslodging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getGoogleUpdated').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetGoogleUpdatedLodgingResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetGoogleUpdatedLodgingResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Locations$Lodging$Getgoogleupdated
    extends StandardParameters {
    /**
     * Required. Google identifier for this location in the form: `locations/{location_id\}/lodging`
     */
    name?: string;
    /**
     * Required. The specific fields to return. Use "*" to include all fields. Repeated field items cannot be individually specified.
     */
    readMask?: string;
  }
}
