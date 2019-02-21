// =========================================================
// Array of Country and Region names, with their codes used by geoNames:
// =========================================================

// country codes are ISO 3166-1 alpha-2 codes (two letter country codes)
// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

// region codes are usually FIPS region codes (check data returned for each country):
// https://en.wikipedia.org/wiki/List_of_FIPS_region_codes_(A%E2%80%93C)

// NOTE!! IF FIPS country code is different from ISO country code,
// COUNTRY CODE PORTION OF FIPS REGION CODES NEED TO BE MODIFIED:
// REPLACE FIPS COUNTRY CODE WITH ISO 3166-1 alpha-2 COUNTRY CODE IN REGION
// geoNames searched by "adminCode1:" property, NOT by "adminCodes1: ISO3166_2:" property
// IF ISO country code same as FIPS country code, no modification needed

// =========================================================

export default {
  countryArray: [
    // =========================================================
    // Earth (search entire planet)
    // =========================================================
    {
      name: "Earth",
      value: "XX"
    },
    // =========================================================
    // Afghanistan
    // =========================================================
    {
      name: "Afghanistan",
      value: "AF"
    },
    {
      name: "Badakhshan Province",
      value: "AF01"
    },
    {
      name: "Badghis Province",
      value: "AF02"
    },
    {
      name: "Baghlan Province",
      value: "AF03"
    },
    {
      name: "Bamyan Province",
      value: "AF05"
    },
    {
      name: "Farah Province",
      value: "AF06"
    },
    {
      name: "Faryab Province",
      value: "AF07"
    },
    {
      name: "Ghazni Province",
      value: "AF08"
    },
    {
      name: "Ghor Province",
      value: "AF09"
    },
    {
      name: "Helmand Province",
      value: "AF10"
    },
    {
      name: "Herat Province",
      value: "AF11"
    },
    {
      name: "Kabul Province",
      value: "AF13"
    },
    {
      name: "Kapisa Province",
      value: "AF14"
    },
    {
      name: "Lowgar Province",
      value: "AF17"
    },
    {
      name: "Nangarhar Province",
      value: "AF18"
    },
    {
      name: "Nimruz Province",
      value: "AF19"
    },
    {
      name: "Kandahar Province",
      value: "AF23"
    },
    {
      name: "Kondoz Province",
      value: "AF24"
    },
    {
      name: "Takhar Province",
      value: "AF26"
    },
    {
      name: "Vardak Province",
      value: "AF27"
    },
    {
      name: "Zabol Province",
      value: "AF28"
    },
    {
      name: "Paktika Province",
      value: "AF29"
    },
    {
      name: "Balkh Province",
      value: "AF30"
    },
    {
      name: "Jowzjan Province",
      value: "AF31"
    },
    {
      name: "Samangan Province",
      value: "AF32"
    },
    {
      name: "Sar-e Pol Province",
      value: "AF33"
    },
    {
      name: "Konar Province",
      value: "AF34"
    },
    {
      name: "Laghman Province",
      value: "AF35"
    },
    {
      name: "Paktia Province",
      value: "AF36"
    },
    {
      name: "Khost Province",
      value: "AF37"
    },
    {
      name: "Nurestan Province",
      value: "AF38"
    },
    {
      name: "Orūzgān Province",
      value: "AF39"
    },
    {
      name: "Parvān Province",
      value: "AF40"
    },
    {
      name: "Daykundi Province",
      value: "AF41"
    },
    {
      name: "Panjshīr Province",
      value: "AF42"
    },
    // =========================================================
    // Albania
    // =========================================================
    {
      name: "Albania",
      value: "AL"
    },
    {
      name: "Berat County",
      value: "AL40"
    },
    {
      name: "Dibër County",
      value: "AL41"
    },
    {
      name: "Durrës County",
      value: "AL42"
    },
    {
      name: "Elbasan County",
      value: "AL43"
    },
    {
      name: "Fier County",
      value: "AL44"
    },
    {
      name: "Gjirokastër County",
      value: "AL45"
    },
    {
      name: "Korçë County",
      value: "AL46"
    },
    {
      name: "Kukës County",
      value: "AL47"
    },
    {
      name: "Lezhë County",
      value: "AL48"
    },
    {
      name: "Shkodër County",
      value: "AL49"
    },
    {
      name: "Tirana County",
      value: "AL50"
    },
    {
      name: "Vlorë County",
      value: "AL51"
    },
    // =========================================================
    // Algeria
    // =========================================================
    {
      name: "Algeria",
      value: "DZ"
    },
    {
      name: "Alger Province",
      value: "DZ01"
      // value: "AG01"
    },
    {
      name: "Batna Province",
      value: "DZ03"
      // value: "AG03"
    },
    {
      name: "Constantine Province",
      value: "DZ04"
      // value: "AG04"
    },
    {
      name: "Médéa Province",
      value: "DZ06"
      // value: "AG06"
    },
    {
      name: "Mostaganem Province",
      value: "DZ07"
      // value: "AG07"
    },
    {
      name: "Oran Province",
      value: "DZ09"
      // value: "AG09"
    },
    {
      name: "Saïda Province",
      value: "DZ10"
      // value: "AG10"
    },
    {
      name: "Sétif Province",
      value: "DZ12"
      // value: "AG12"
    },
    {
      name: "Tiaret Province",
      value: "DZ13"
      // value: "AG13"
    },
    {
      name: "Tizi Ouzou Province",
      value: "DZ14"
      // value: "AG14"
    },
    {
      name: "Tlemcen Province",
      value: "DZ15"
      // value: "AG15"
    },
    {
      name: "Bejaïa Province",
      value: "DZ18"
      // value: "AG18"
    },
    {
      name: "Biskra Province",
      value: "DZ19"
      // value: "AG19"
    },
    {
      name: "Blida Province",
      value: "DZ20"
      // value: "AG20"
    },
    {
      name: "Bouira Province",
      value: "DZ21"
      // value: "AG21"
    },
    {
      name: "Djelfa Province",
      value: "DZ22"
      // value: "AG22"
    },
    {
      name: "Guelma Province",
      value: "DZ23"
      // value: "AG23"
    },
    {
      name: "Jijel Province",
      value: "DZ24"
      // value: "AG24"
    },
    {
      name: "Laghouat Province",
      value: "DZ25"
      // value: "AG25"
    },
    {
      name: "Muaskar Province",
      value: "DZ26"
      // value: "AG26"
    },
    {
      name: "M'Sila Province",
      value: "DZ27"
      // value: "AG27"
    },
    {
      name: "Oum el Bouaghi Province",
      value: "DZ29"
      // value: "AG29"
    },
    {
      name: "Sidi Bel Abbès Province",
      value: "DZ30"
      // value: "AG30"
    },
    {
      name: "Skikda Province",
      value: "DZ31"
      // value: "AG31"
    },
    {
      name: "Tébessa Province",
      value: "DZ33"
      // value: "AG33"
    },
    {
      name: "Adrar Province",
      value: "DZ34"
      // value: "AG34"
    },
    {
      name: "Aïn Defla Province",
      value: "DZ35"
      // value: "AG35"
    },
    {
      name: "Aïn Temouchent Province",
      value: "DZ36"
      // value: "AG36"
    },
    {
      name: "Annaba Province",
      value: "DZ37"
      // value: "AG37"
    },
    {
      name: "Béchar Province",
      value: "DZ38"
      // value: "AG38"
    },
    {
      name: "Bordj Bou Arréridj Province",
      value: "DZ39"
      // value: "AG39"
    },
    {
      name: "Boumerdes Province",
      value: "DZ40"
    },
    {
      name: "Chlef Province",
      value: "DZ41"
      // value: "AG41"
    },
    {
      name: "El Bayadh Province",
      value: "DZ42"
      // value: "AG42"
    },
    {
      name: "El Oued Province",
      value: "DZ43"
      // value: "AG43"
    },
    {
      name: "El Tarf Province",
      value: "DZ44"
      // value: "AG44"
    },
    {
      name: "Ghardaïa Province",
      value: "DZ45"
      // value: "AG45"
    },
    {
      name: "Illizi Province",
      value: "DZ46"
      // value: "AG46"
    },
    {
      name: "Khenchela Province",
      value: "DZ47"
      // value: "AG47"
    },
    {
      name: "Mila Province",
      value: "DZ48"
      // value: "AG48"
    },
    {
      name: "Naama Province",
      value: "DZ49"
      // value: "AG49"
    },
    {
      name: "Ouargla Province",
      value: "DZ50"
      // value: "AG50"
    },
    {
      name: "Relizane Province",
      value: "DZ51"
      // value: "AG51"
    },
    {
      name: "Souk Ahras Province",
      value: "DZ52"
      // value: "AG52"
    },
    {
      name: "Tamanghasset Province",
      value: "DZ53"
      // value: "AG53"
    },
    {
      name: "Tindouf Province",
      value: "DZ54"
      // value: "AG54"
    },
    {
      name: "Tipaza Province",
      value: "DZ55"
      // value: "AG55"
    },
    {
      name: "Tissemsilt Province",
      value: "DZ56"
      // value: "AG56"
    },
    // =========================================================
    // American Samoa
    // =========================================================
    {
      name: "American Samoa",
      value: "AS"
    },
    {
      name: "Eastern District",
      value: "AS010"
    },
    {
      name: "Manu'a",
      value: "AS020"
    },
    {
      name: "Rose Island",
      value: "AS030"
    },
    {
      name: "Swains Island",
      value: "AS040"
    },
    {
      name: "Western District",
      value: "AS050"
    },
    // =========================================================
    // Andorra
    // =========================================================
    {
      name: "Andorra",
      value: "AD"
    },
    {
      name: "Canillo Parish",
      value: "AD02"
      // value: "AN02"
    },
    {
      name: "Encamp Parish",
      value: "AD03"
      // value: "AN03"
    },
    {
      name: "La Massana Parish",
      value: "AD04"
      // value: "AN04"
    },
    {
      name: "Ordino Parish",
      value: "AD05"
      // value: "AN05"
    },
    {
      name: "Sant Julià de Lòria Parish",
      value: "AD06"
      // value: "AN06"
    },
    {
      name: "Andorra la Vella Parish",
      value: "AD07"
      // value: "AN07"
    },
    {
      name: "Escaldes-Engordany Parish",
      value: "AD08"
      // value: "AN08"
    },
    // =========================================================
    // Angola
    // =========================================================
    {
      name: "Angola",
      value: "AO"
    },
    {
      name: "Benguela Province",
      value: "AO01"
    },
    {
      name: "Bié Province",
      value: "AO02"
    },
    {
      name: "Cabinda Province",
      value: "AO03"
    },
    {
      name: "Cuando Cubango Province",
      value: "AO04"
    },
    {
      name: "Cuanza Norte Province",
      value: "AO05"
    },
    {
      name: "Cuanza Sul Province",
      value: "AO06"
    },
    {
      name: "Cunene Province",
      value: "AO07"
    },
    {
      name: "Huambo Province",
      value: "AO08"
    },
    {
      name: "Huíla Province",
      value: "AO09"
    },
    {
      name: "Malanje Province",
      value: "AO12"
    },
    {
      name: "Namibe Province",
      value: "AO13"
    },
    {
      name: "Moxico Province",
      value: "AO14"
    },
    {
      name: "Uíge Province",
      value: "AO15"
    },
    {
      name: "Zaire Province",
      value: "AO16"
    },
    {
      name: "Lunda Norte Province",
      value: "AO17"
    },
    {
      name: "Lunda Sul Province",
      value: "AO18"
    },
    {
      name: "Bengo Province",
      value: "AO19"
    },
    {
      name: "Luanda Province",
      value: "AO20"
    },
    // =========================================================
    // Anguilla
    // =========================================================
    {
      name: "Anguilla",
      // value: "AV"
      value: "AI"
    },
    {
      name: "Anguilla",
      // value: "AV"
      value: "AI00"
    },
    // =========================================================
    // Antarctica
    // =========================================================
    {
      name: "Antarctica",
      value: "AQ"
    },
    // =========================================================
    // Antigua and Barbuda
    // =========================================================
    {
      name: "Antigua and Barbuda",
      value: "AG"
    },
    {
      name: "Barbuda Dependency",
      value: "AG01"
      // value: "AC01"
    },
    {
      name: "Saint George Parish",
      value: "AG03"
      // value: "AC03"
    },
    {
      name: "Saint John Parish",
      value: "AG04"
      // value: "AC04"
    },
    {
      name: "Saint Mary Parish",
      value: "AG05"
      // value: "AC05"
    },
    {
      name: "Saint Paul Parish",
      value: "AG06"
      // value: "AC06"
    },
    {
      name: "Saint Peter Parish",
      value: "AG07"
      // value: "AC07"
    },
    {
      name: "Saint Philip Parish",
      value: "AG08"
      // value: "AC08"
    },
    {
      name: "Redonda Dependency",
      value: "AG09"
      // value: "AC09"
    },
    // =========================================================
    // Argentina
    // =========================================================
    {
      name: "Argentina",
      value: "AR"
    },
    {
      name: "Buenos Aires Province",
      value: "AR01"
    },
    {
      name: "Catamarca Province",
      value: "AR02"
    },
    {
      name: "Chaco Province",
      value: "AR03"
    },
    {
      name: "Chubut Province",
      value: "AR04"
    },
    {
      name: "Córdoba Province",
      value: "AR05"
    },
    {
      name: "Corrientes Province",
      value: "AR06"
    },
    {
      name: "Distrito Federal",
      value: "AR07"
    },
    {
      name: "Entre Ríos Province",
      value: "AR08"
    },
    {
      name: "Formosa Province",
      value: "AR09"
    },
    {
      name: "Jujuy Province",
      value: "AR10"
    },
    {
      name: "La Pampa Province",
      value: "AR11"
    },
    {
      name: "La Rioja Province",
      value: "AR12"
    },
    {
      name: "Mendoza Province",
      value: "AR13"
    },
    {
      name: "Misiones Province",
      value: "AR14"
    },
    {
      name: "Neuquén Province",
      value: "AR15"
    },
    {
      name: "Río Negro Province",
      value: "AR16"
    },
    {
      name: "Salta Province",
      value: "AR17"
    },
    {
      name: "San Juan Province",
      value: "AR18"
    },
    {
      name: "San Luis Province",
      value: "AR19"
    },
    {
      name: "Santa Cruz Province",
      value: "AR20"
    },
    {
      name: "Santa Fe Province",
      value: "AR21"
    },
    {
      name: "Santiago del Estero Province",
      value: "AR22"
    },
    {
      name: "Tierra del Fuego, Antártida e Islas del Atlántico Sur Province",
      value: "AR23"
    },
    {
      name: "Tucumán Province",
      value: "AR24"
    },
    // =========================================================
    // Armenia
    // =========================================================
    {
      name: "Armenia",
      value: "AM"
    },
    {
      name: "Aragatsotn Province",
      value: "AM01"
    },
    {
      name: "Ararat Province",
      value: "AM02"
    },
    {
      name: "Armavir Province",
      value: "AM03"
    },
    {
      name: "Geghark'unik' Province",
      value: "AM04"
    },
    {
      name: "Kotayk' Province",
      value: "AM05"
    },
    {
      name: "Lorri Province",
      value: "AM06"
    },
    {
      name: "Shirak Province",
      value: "AM07"
    },
    {
      name: "Syunik' Province",
      value: "AM08"
    },
    {
      name: "Tavush Province",
      value: "AM09"
    },
    {
      name: "Vayots' Dzor Province",
      value: "AM10"
    },
    {
      name: "Yerevan City",
      value: "AM11"
    },
    // =========================================================
    // Aruba
    // =========================================================
    {
      name: "Aruba",
      value: "AW"
    },
    {
      name: "Aruba",
      value: "AW00"
    },
    // =========================================================
    // Australia
    // =========================================================
    {
      name: "Australia",
      value: "AU"
    },
    {
      name: "Australian Capital Territory",
      value: "AU01"
      // value: "AS01"
    },
    {
      name: "New South Wales State",
      value: "AU02"
      // value: "AS02"
    },
    {
      name: "Northern Territory",
      value: "AU03"
      // value: "AS03"
    },
    {
      name: "Queensland State",
      value: "AU04"
      // value: "AS04"
    },
    {
      name: "South Australia State",
      value: "AU05"
      // value: "AS05"
    },
    {
      name: "Tasmania State",
      value: "AU06"
      // value: "AS06"
    },
    {
      name: "Victoria State",
      value: "AU07"
      // value: "AS07"
    },
    {
      name: "Western Australia State",
      value: "AU08"
      // value: "AS08"
    },
    // =========================================================
    // Austria
    // =========================================================
    {
      name: "Austria",
      value: "AT"
    },
    {
      name: "Burgenland State",
      value: "AT01"
      // value: "AU01"
    },
    {
      name: "Kärnten State",
      value: "AT02"
      // value: "AU02"
    },
    {
      name: "Niederösterreich State",
      value: "AT03"
      // value: "AU03"
    },
    {
      name: "Oberösterreich State",
      value: "AT04"
      // value: "AU04"
    },
    {
      name: "Salzburg State",
      value: "AT05"
      // value: "AU05"
    },
    {
      name: "Steiermark State",
      value: "AT06"
      // value: "AU06"
    },
    {
      name: "Tirol State",
      value: "AT07"
      // value: "AU07"
    },
    {
      name: "Vorarlberg State",
      value: "AT08"
      // value: "AU08"
    },
    {
      name: "Wien State",
      value: "AT09"
      // value: "AU09"
    },
    // =========================================================
    // Azerbaijan
    // =========================================================
    {
      name: "Azerbaijan",
      value: "AZ"
    },
    {
      name: "Abşeron Rayon",
      value: "AZ01"
      // value: "AJ01"
    },
    {
      name: "Ağcabǝdi Rayon",
      value: "AZ02"
      // value: "AJ02"
    },
    {
      name: "Ağdam Rayon",
      value: "AZ03"
      // value: "AJ03"
    },
    {
      name: "Ağdaş Rayon",
      value: "AZ04"
      // value: "AJ04"
    },
    {
      name: "Ağstafa Rayon",
      value: "AZ05"
      // value: "AJ05"
    },
    {
      name: "Ağsu Rayon",
      value: "AZ06"
      // value: "AJ06"
    },
    {
      name: "Əli Bayramlı City",
      value: "AZ07"
      // value: "AJ07"
    },
    {
      name: "Astara Rayon",
      value: "AZ08"
      // value: "AJ08"
    },
    {
      name: "Bakı City",
      value: "AZ09"
      // value: "AJ09"
    },
    {
      name: "Balakǝn Rayon",
      value: "AZ10"
      // value: "AJ10"
    },
    {
      name: "Bǝrdǝ Rayon",
      value: "AZ11"
      // value: "AJ11"
    },
    {
      name: "Beylǝqan Rayon",
      value: "AZ12"
      // value: "AJ12"
    },
    {
      name: "Biläsuvar Rayon",
      value: "AZ13"
      // value: "AJ13"
    },
    {
      name: "Cǝbrayıl Rayon",
      value: "AZ14"
      // value: "AJ14"
    },
    {
      name: "Cǝlilabad Rayon",
      value: "AZ15"
      // value: "AJ15"
    },
    {
      name: "Daşkǝsǝn Rayon",
      value: "AZ16"
      // value: "AJ16"
    },
    {
      name: "Dǝvǝçi Rayon",
      value: "AZ17"
      // value: "AJ17"
    },
    {
      name: "Füzuli Rayon",
      value: "AZ18"
      // value: "AJ18"
    },
    {
      name: "Gǝdǝbǝy Rayon",
      value: "AZ19"
      // value: "AJ19"
    },
    {
      name: "Gǝncǝ City",
      value: "AZ20"
      // value: "AJ20"
    },
    {
      name: "Goranboy Rayon",
      value: "AZ21"
      // value: "AJ21"
    },
    {
      name: "Göyçay Rayon",
      value: "AZ22"
      // value: "AJ22"
    },
    {
      name: "Hacıqabul Rayon",
      value: "AZ23"
      // value: "AJ23"
    },
    {
      name: "İmişli Rayon",
      value: "AZ24"
      // value: "AJ24"
    },
    {
      name: "İsmayıllı Rayon",
      value: "AZ25"
      // value: "AJ25"
    },
    {
      name: "Kǝlbǝcǝr Rayon",
      value: "AZ26"
      // value: "AJ26"
    },
    {
      name: "Kürdämir Rayon",
      value: "AZ27"
      // value: "AJ27"
    },
    {
      name: "Laçın Rayon",
      value: "AZ28"
      // value: "AJ28"
    },
    {
      name: "Lǝnkǝran Rayon",
      value: "AZ29"
      // value: "AJ29"
    },
    {
      name: "Lǝnkǝran City",
      value: "AZ30"
      // value: "AJ30"
    },
    {
      name: "Lerik Rayon",
      value: "AZ31"
      // value: "AJ31"
    },
    {
      name: "Masallı Rayon",
      value: "AZ32"
      // value: "AJ32"
    },
    {
      name: "Mingǝcevir City",
      value: "AZ33"
      // value: "AJ33"
    },
    {
      name: "Naftalan City",
      value: "AZ34"
      // value: "AJ34"
    },
    {
      name: "Nakhichevan Autonomous Republic",
      value: "AZ35"
      // value: "AJ35"
    },
    {
      name: "Neftçala Rayon",
      value: "AZ36"
      // value: "AJ36"
    },
    {
      name: "Oğuz Rayon",
      value: "AZ37"
      // value: "AJ37"
    },
    {
      name: "Qǝbǝlǝ Rayon",
      value: "AZ38"
      // value: "AJ38"
    },
    {
      name: "Qax Rayon",
      value: "AZ39"
      // value: "AJ39"
    },
    {
      name: "Qazax Rayon",
      value: "AZ40"
      // value: "AJ40"
    },
    {
      name: "Qobustan Rayon",
      value: "AZ41"
      // value: "AJ41"
    },
    {
      name: "Quba Rayon",
      value: "AZ42"
      // value: "AJ42"
    },
    {
      name: "Qubadlı Rayon",
      value: "AZ43"
      // value: "AJ43"
    },
    {
      name: "Qusar Rayon",
      value: "AZ44"
      // value: "AJ44"
    },
    {
      name: "Saatlı Rayon",
      value: "AZ45"
      // value: "AJ45"
    },
    {
      name: "Sabirabad Rayon",
      value: "AZ46"
      // value: "AJ46"
    },
    {
      name: "Şǝki Rayon",
      value: "AZ47"
      // value: "AJ47"
    },
    {
      name: "Şǝki City",
      value: "AZ48"
      // value: "AJ48"
    },
    {
      name: "Salyan Rayon",
      value: "AZ49"
      // value: "AJ49"
    },
    {
      name: "Şamaxı Rayon",
      value: "AZ50"
      // value: "AJ50"
    },
    {
      name: "Şǝmkir Rayon",
      value: "AZ51"
      // value: "AJ51"
    },
    {
      name: "Samux Rayon",
      value: "AZ52"
      // value: "AJ52"
    },
    {
      name: "Siyǝzǝn Rayon",
      value: "AZ53"
      // value: "AJ53"
    },
    {
      name: "Sumqayıt Rayon",
      value: "AZ54"
      // value: "AJ54"
    },
    {
      name: "Şuşa Rayon",
      value: "AZ55"
      // value: "AJ55"
    },
    {
      name: "Şuşa City",
      value: "AZ56"
      // value: "AJ56"
    },
    {
      name: "Tǝrtǝr Rayon",
      value: "AZ57"
      // value: "AJ57"
    },
    {
      name: "Tovuz Rayon",
      value: "AZ58"
      // value: "AJ58"
    },
    {
      name: "Ucar Rayon",
      value: "AZ59"
      // value: "AJ59"
    },
    {
      name: "Xaçmaz Rayon",
      value: "AZ60"
      // value: "AJ60"
    },
    {
      name: "Xankǝndi City",
      value: "AZ61"
      // value: "AJ61"
    },
    {
      name: "Goygol Rayon, formerly Xanlar Rayon",
      value: "AZ62"
      // value: "AJ62"
    },
    {
      name: "Xızı Rayon",
      value: "AZ63"
      // value: "AJ63"
    },
    {
      name: "Xocalı Rayon",
      value: "AZ64"
      // value: "AJ64"
    },
    {
      name: "Xocavǝnd Rayon",
      value: "AZ65"
      // value: "AJ65"
    },
    {
      name: "Yardımlı Rayon",
      value: "AZ66"
      // value: "AJ66"
    },
    {
      name: "Yevlax Rayon",
      value: "AZ67"
      // value: "AJ67"
    },
    {
      name: "Yevlax City",
      value: "AZ68"
      // value: "AJ68"
    },
    {
      name: "Zǝngilan Rayon",
      value: "AZ69"
      // value: "AJ69"
    },
    {
      name: "Zaqatala Rayon",
      value: "AZ70"
      // value: "AJ70"
    },
    {
      name: "Zǝrdab Rayon",
      value: "AZ71"
      // value: "AJ71"
    },
    // =========================================================
    // Bahrain
    // =========================================================
    {
      name: "Bahrain",
      value: "BH"
    },
    {
      name: "Al Ḩadd Municipality",
      value: "BH01"
      // value: "BA01"
    },
    {
      name: "Al Manāmah Municipality",
      value: "BH02"
      // value: "BA02"
    },
    {
      name: "Jidd Ḩafş Municipality",
      value: "BH05"
      // value: "BA05"
    },
    {
      name: "Sitrah Municipality",
      value: "BH06"
      // value: "BA06"
    },
    {
      name: "Al Minţaqah al Gharbīyah Municipality",
      value: "BH08"
      // value: "BA08"
    },
    {
      name: "Minţaqat Juzur Ḩawār",
      value: "BH09"
      // value: "BA09"
    },
    {
      name: "Al Minţaqah ash Shamālīyah Municipality",
      value: "BH10"
      // value: "BA10"
    },
    {
      name: "Al Minţaqah al Wusţá Municipality",
      value: "BH11"
      // value: "BA11"
    },
    {
      name: "Madīnat `Īsá Municipality",
      value: "BH12"
      // value: "BA12"
    },
    {
      name: "Ar Rifā` wa al Minţaqah al Janūbīyah Municipality",
      value: "BH13"
      // value: "BA13"
    },
    {
      name: "Madīnat Ḩamad Municipality",
      value: "BH14"
      // value: "BA14"
    },
    {
      name: "Al Muḩarraq Municipality",
      value: "BH15"
      // value: "BA15"
    },
    {
      name: "Al ٰĀşimah Municipality",
      value: "BH16"
      // value: "BA16"
    },
    {
      name: "Al Janūbīyah Municipality",
      value: "BH17"
      // value: "BA17"
    },
    {
      name: "Ash Shamālīyah Municipality",
      value: "BH18"
      // value: "BA18"
    },
    {
      name: "Al Wusţá Municipality",
      value: "BH19"
      // value: "BA19"
    },
    // =========================================================
    // Bahamas
    // =========================================================
    {
      name: "Bahamas",
      value: "BS"
    },
    {
      name: "Bimini District",
      value: "BS05"
      // value: "BF05"
    },
    {
      name: "Cat Island District",
      value: "BS06"
      // value: "BF06"
    },
    {
      name: "Exuma District",
      value: "BS10"
      // value: "BF10"
    },
    {
      name: "Inagua District",
      value: "BS13"
      // value: "BF13"
    },
    {
      name: "Long Island District",
      value: "BS15"
      // value: "BF15"
    },
    {
      name: "Mayaguana District",
      value: "BS16"
      // value: "BF16"
    },
    {
      name: "Ragged Island District",
      value: "BS18"
      // value: "BF18"
    },
    {
      name: "Harbour Island District",
      value: "BS22"
      // value: "BF22"
    },
    {
      name: "New Providence District",
      value: "BS23"
      // value: "BF23"
    },
    {
      name: "Acklins and Crooked Islands District",
      value: "BS24"
      // value: "BF24"
    },
    {
      name: "City of Freeport District",
      value: "BS25"
      // value: "BF25"
    },
    {
      name: "Fresh Creek District",
      value: "BS26"
      // value: "BF26"
    },
    {
      name: "Governor's Harbour District",
      value: "BS27"
      // value: "BF27"
    },
    {
      name: "Green Turtle Cay District",
      value: "BS28"
      // value: "BF28"
    },
    {
      name: "High Rock District",
      value: "BS29"
      // value: "BF29"
    },
    {
      name: "Kemps Bay District",
      value: "BS30"
      // value: "BF30"
    },
    {
      name: "Marsh Harbour District",
      value: "BS31"
      // value: "BF31"
    },
    {
      name: "Nichollstown and Berry Islands District",
      value: "BS32"
      // value: "BF32"
    },
    {
      name: "Rock Sound District",
      value: "BS33"
      // value: "BF33"
    },
    {
      name: "Sandy Point District",
      value: "BS34"
      // value: "BF34"
    },
    {
      name: "San Salvador",
      value: "BS35"
      // value: "BF35"
    },
    {
      name: "Black Point District",
      value: "BS36"
      // value: "BF36"
    },
    {
      name: "Central Abaco District",
      value: "BS37"
      // value: "BF37"
    },
    {
      name: "Central Andros District",
      value: "BS38"
      // value: "BF38"
    },
    {
      name: "Central Eleuthera District",
      value: "BS39"
      // value: "BF39"
    },
    {
      name: "Crooked Island and Long Cay District",
      value: "BS40"
      // value: "BF40"
    },
    {
      name: "East Grand Bahama District",
      value: "BS41"
      // value: "BF41"
    },
    {
      name: "Grand Cay District",
      value: "BS42"
      // value: "BF42"
    },
    {
      name: "Hope Town District",
      value: "BS43"
      // value: "BF43"
    },
    {
      name: "Mangrove Cay District",
      value: "BS44"
      // value: "BF44"
    },
    {
      name: "Moore’s Island District",
      value: "BS45"
      // value: "BF45"
    },
    {
      name: "North Abaco District",
      value: "BS46"
      // value: "BF46"
    },
    {
      name: "North Andros District",
      value: "BS47"
      // value: "BF47"
    },
    {
      name: "North Eleuthera District",
      value: "BS48"
      // value: "BF48"
    },
    {
      name: "Rum Cay District",
      value: "BS49"
      // value: "BF49"
    },
    {
      name: "South Abaco District",
      value: "BS50"
      // value: "BF50"
    },
    {
      name: "South Andros District",
      value: "BS51"
      // value: "BF51"
    },
    {
      name: "South Eleuthera District",
      value: "BS52"
      // value: "BF52"
    },
    {
      name: "Spanish Wells District",
      value: "BS53"
      // value: "BF53"
    },
    {
      name: "West Grand Bahama District",
      value: "BS54"
      // value: "BF54"
    },
    // =========================================================
    // Bangladesh
    // =========================================================
    {
      name: "Bangladesh",
      value: "BD"
    },
    {
      name: "Dhaka Division",
      value: "BD81"
      // value: "BG81"
    },
    {
      name: "Khulna Division",
      value: "BD82"
      // value: "BG82"
    },
    {
      name: "Rājshāhi Division",
      value: "BD83"
      // value: "BG83"
    },
    {
      name: "Chittagong Division",
      value: "BD84"
      // value: "BG84"
    },
    {
      name: "Barisāl Division",
      value: "BD85"
      // value: "BG85"
    },
    {
      name: "Sylhet Division",
      value: "BD86"
      // value: "BG86"
    },
    {
      name: "Rangpur Division",
      value: "BD87"
      // value: "BG87"
    },
    // =========================================================
    // Barbados
    // =========================================================
    {
      name: "Barbados",
      value: "BB"
    },
    {
      name: "Parish of Christ Church",
      value: "BB01"
    },
    {
      name: "Parish of Saint Andrew",
      value: "BB02"
    },
    {
      name: "Parish of Saint George",
      value: "BB03"
    },
    {
      name: "Parish of Saint James",
      value: "BB04"
    },
    {
      name: "Parish of Saint John",
      value: "BB05"
    },
    {
      name: "Parish of Saint Joseph",
      value: "BB06"
    },
    {
      name: "Parish of Saint Lucy",
      value: "BB07"
    },
    {
      name: "Parish of Saint Michael",
      value: "BB08"
    },
    {
      name: "Parish of Saint Peter",
      value: "BB09"
    },
    {
      name: "Parish of Saint Philip",
      value: "BB10"
    },
    {
      name: "Parish of Saint Thomas",
      value: "BB11"
    },
    // =========================================================
    // Belarus
    // =========================================================
    {
      name: "Belarus",
      value: "BY"
    },
    {
      name: "Brest Province (Brestskaya Voblasts’)",
      value: "BY01"
      // value: "BO01"
    },
    {
      name: "Homyel Province (Homyel’skaya Voblasts’)",
      value: "BY02"
      // value: "BO02"
    },
    {
      name: "Hrodna Province (Hrodzyenskaya Voblasts’)",
      value: "BY03"
      // value: "BO03"
    },
    {
      name: "Minsk City (Horad Minsk)",
      value: "BY04"
      // value: "BO04"
    },
    {
      name: "Minsk Province (Minskaja Voblasts’)",
      value: "BY05"
      // value: "BO05"
    },
    {
      name: "Mahilyow Province (Mahilyowskaya Voblasts’)",
      value: "BY06"
      // value: "BO06"
    },
    {
      name: "Vitsebsk Province (Vitsyebskaya Voblasts’)",
      value: "BY07"
      // value: "BO07"
    },
    // =========================================================
    // Belgium
    // =========================================================
    {
      name: "Belgium",
      value: "BE"
    },
    {
      name: "Flanders",
      // name: "Antwerpen Province (Flanders)",
      value: "BEVLG"
      // value: "BE01"
    },
    {
      name: "Wallonia",
      // name: "Liège Province (Wallonia)",
      value: "BEWAL"
      // value: "BE04"
    },
    {
      name: "Brussels-Capital Region",
      value: "BEBRU"
      // value: "BE11"
    },
    // =========================================================
    // Belize
    // =========================================================
    {
      name: "Belize",
      value: "BZ"
    },
    {
      name: "Belize District",
      value: "BZ01"
      // value: "BH01"
    },
    {
      name: "Cayo District",
      value: "BZ02"
      // value: "BH02"
    },
    {
      name: "Corozal District",
      value: "BZ03"
      // value: "BH03"
    },
    {
      name: "Orange Walk District",
      value: "BZ04"
      // value: "BH04"
    },
    {
      name: "Stann Creek District",
      value: "BZ05"
      // value: "BH05"
    },
    {
      name: "Toledo District",
      value: "BZ06"
      // value: "BH06"
    },
    // =========================================================
    // Benin
    // =========================================================
    {
      name: "Benin",
      value: "BJ"
    },
    {
      name: "Alibori Department",
      value: "BJ07"
      // value: "BN07"
    },
    {
      name: "Atakora Department",
      value: "BJ08"
      // value: "BN08"
    },
    {
      name: "Atlantique Department",
      value: "BJ09"
      // value: "BN09"
    },
    {
      name: "Borgou Department",
      value: "BJ10"
      // value: "BN10"
    },
    {
      name: "Collines Department",
      value: "BJ11"
      // value: "BN11"
    },
    {
      name: "Kouffo Department",
      value: "BJ12"
      // value: "BN12"
    },
    {
      name: "Donga Department",
      value: "BJ13"
      // value: "BN13"
    },
    {
      name: "Littoral Department",
      value: "BJ14"
      // value: "BN14"
    },
    {
      name: "Mono Department",
      value: "BJ15"
      // value: "BN15"
    },
    {
      name: "Ouémé Department",
      value: "BJ16"
      // value: "BN16"
    },
    {
      name: "Plateau Department",
      value: "BJ17"
      // value: "BN17"
    },
    {
      name: "Zou Department",
      value: "BJ18"
      // value: "BN18"
    },
    // =========================================================
    // Bermuda
    // =========================================================
    {
      name: "Bermuda",
      value: "BM"
    },
    {
      name: "Devonshire Parish",
      value: "BM01"
      // value: "BD01"
    },
    {
      name: "Hamilton Parish",
      value: "BM02"
      // value: "BD02"
    },
    {
      name: "Hamilton Municipality",
      value: "BM03"
      // value: "BD03"
    },
    {
      name: "Paget Parish",
      value: "BM04"
      // value: "BD04"
    },
    {
      name: "Pembroke Parish",
      value: "BM05"
      // value: "BD05"
    },
    {
      name: "Saint George Municipality",
      value: "BM06"
      // value: "BD06"
    },
    {
      name: "Saint George's Parish",
      value: "BM07"
      // value: "BD07"
    },
    {
      name: "Sandys Parish",
      value: "BM08"
      // value: "BD08"
    },
    {
      name: "Smith's Parish",
      value: "BM09"
      // value: "BD09"
    },
    {
      name: "Southampton Parish",
      value: "BM10"
      // value: "BD10"
    },
    {
      name: "Warwick Parish",
      value: "BM11"
      // value: "BD11"
    },
    // =========================================================
    // Bhutan
    // =========================================================
    {
      name: "Bhutan",
      value: "BT"
    },
    {
      name: "Bumthang District",
      value: "BT05"
    },
    {
      name: "Chhukha District",
      value: "BT06"
    },
    {
      name: "Tsirang (Chirang) District",
      value: "BT07"
    },
    {
      name: "Dagana District",
      value: "BT08"
    },
    {
      name: "Sarpang (Geylegphug) District",
      value: "BT09"
    },
    {
      name: "Haa (Ha) District",
      value: "BT10"
    },
    {
      name: "Lhuntse (Lhuntshi) District",
      value: "BT11"
    },
    {
      name: "Mongar District",
      value: "BT12"
    },
    {
      name: "Paro District",
      value: "BT13"
    },
    {
      name: "Pemagatshel (Pemagatsel) District",
      value: "BT14"
    },
    {
      name: "Punakha District",
      value: "BT15"
    },
    {
      name: "Samtse (Samchi) District",
      value: "BT16"
    },
    {
      name: "Samdrup Jongkhar District",
      value: "BT17"
    },
    {
      name: "Zhemgang (Shemgang) District",
      value: "BT18"
    },
    {
      name: "Trashigang (Tashigang) District",
      value: "BT19"
    },
    {
      name: "Thimphu District",
      value: "BT20"
    },
    {
      name: "Trongsa (Tongsa) District",
      value: "BT21"
    },
    {
      name: "Wangdue Phodrang (Wangdi Phodrang) District",
      value: "BT22"
    },
    // =========================================================
    // Bolivia
    // =========================================================
    {
      name: "Bolivia",
      value: "BO"
    },
    {
      name: "Chuquisaca Department",
      value: "BO01"
      // value: "BL01"
    },
    {
      name: "Cochabamba Department",
      value: "BO02"
      // value: "BL02"
    },
    {
      name: "Beni Department",
      value: "BO03"
      // value: "BL03"
    },
    {
      name: "La Paz Department",
      value: "BO04"
      // value: "BL04"
    },
    {
      name: "Oruro Department",
      value: "BO05"
      // value: "BL05"
    },
    {
      name: "Pando Department",
      value: "BO06"
      // value: "BL06"
    },
    {
      name: "Potosí Department",
      value: "BO07"
      // value: "BL07"
    },
    {
      name: "Santa Cruz Department",
      value: "BO08"
      // value: "BL08"
    },
    {
      name: "Tarija Department",
      value: "BO09"
      // value: "BL09"
    },
    // =========================================================
    // Bonaire, Sint Eustatius and Saba
    // =========================================================
    {
      name: "Bonaire, Sint Eustatius and Saba",
      value: "BQ"
    },
    {
      name: "Bonaire",
      value: "BQBO"
    },
    {
      name: "Sint Eustatius",
      value: "BQSE"
    },
    {
      name: "Saba",
      value: "BQSB"
    },
    // =========================================================
    // Bosnia and Herzegovina
    // =========================================================
    {
      name: "Bosnia and Herzegovina",
      value: "BA"
    },
    {
      name: "Federacija Bosne i Hercegovine",
      value: "BA01"
      // value: "BK01"
    },
    {
      name: "Republika Srpska",
      value: "BA02"
      // value: "BK02"
    },
    {
      name: "Brčko",
      value: "BABRC"
    },
    // =========================================================
    // Botswana
    // =========================================================
    {
      name: "Botswana",
      value: "BW"
    },
    {
      name: "Central",
      value: "BW01"
    },
    {
      name: "Ghanzi",
      value: "BW03"
    },
    {
      name: "Kgalagadi",
      value: "BW04"
    },
    {
      name: "Kgatleng",
      value: "BW05"
    },
    {
      name: "Kweneng",
      value: "BW06"
    },
    {
      name: "North-East",
      value: "BW08"
    },
    {
      name: "South-East",
      value: "BW09"
    },
    {
      name: "Ngwaketsi",
      value: "BW10"
    },
    {
      name: "North-West",
      value: "BW11"
    },
    {
      name: "Chobe",
      value: "BW12"
    },
    {
      name: "City of Francistown",
      value: "BW13"
    },
    {
      name: "Gaborone",
      value: "BW14"
    },
    {
      name: "Lobatse",
      value: "BW16"
    },
    {
      name: "Selibe Phikwe",
      value: "BW17"
    },
    {
      name: "Sowa Town",
      value: "BW18"
    },
    {
      name: "(other)",
      value: "BW00"
    },
    // =========================================================
    // Bouvet Island
    // REMOVED: uninhabited Antarctic island, no geoNames tagged features
    // =========================================================
    // {
    //   name: "Bouvet Island",
    //   value: "BV"
    // },
    // =========================================================
    // Brazil
    // =========================================================
    {
      name: "Brazil",
      value: "BR"
    },
    {
      name: "Acre State",
      value: "BR01"
    },
    {
      name: "Alagoas State",
      value: "BR02"
    },
    {
      name: "Amapá State",
      value: "BR03"
    },
    {
      name: "Amazonas State",
      value: "BR04"
    },
    {
      name: "Bahia State",
      value: "BR05"
    },
    {
      name: "Ceará State",
      value: "BR06"
    },
    {
      name: "Distrito Federal",
      value: "BR07"
    },
    {
      name: "Espírito Santo State",
      value: "BR08"
    },
    {
      name: "Mato Grosso do Sul State",
      value: "BR11"
    },
    {
      name: "Maranhão State",
      value: "BR13"
    },
    {
      name: "Mato Grosso State",
      value: "BR14"
    },
    {
      name: "Minas Gerais State",
      value: "BR15"
    },
    {
      name: "Pará State",
      value: "BR16"
    },
    {
      name: "Paraíba State",
      value: "BR17"
    },
    {
      name: "Paraná State",
      value: "BR18"
    },
    {
      name: "Piauí State",
      value: "BR20"
    },
    {
      name: "Rio de Janeiro State",
      value: "BR21"
    },
    {
      name: "Rio Grande do Norte State",
      value: "BR22"
    },
    {
      name: "Rio Grande do Sul State",
      value: "BR23"
    },
    {
      name: "Rondônia State",
      value: "BR24"
    },
    {
      name: "Roraima State",
      value: "BR25"
    },
    {
      name: "Santa Catarina State",
      value: "BR26"
    },
    {
      name: "São Paulo State",
      value: "BR27"
    },
    {
      name: "Sergipe State",
      value: "BR28"
    },
    {
      name: "Goiás State",
      value: "BR29"
    },
    {
      name: "Pernambuco State",
      value: "BR30"
    },
    {
      name: "Tocantins State",
      value: "BR31"
    },
    // =========================================================
    // British Indian Ocean Territory
    // =========================================================
    {
      name: "British Indian Ocean Territory",
      value: "IO"
    },
    {
      name: "British Indian Ocean Territory",
      value: "IO00"
    },
    // =========================================================
    // Brunei Darussalam
    // =========================================================
    {
      name: "Brunei",
      value: "BN"
    },
    {
      name: "Belait",
      value: "BN01"
    },
    {
      name: "Brunei and Muara",
      value: "BN02"
    },
    {
      name: "Temburong",
      value: "BN03"
    },
    {
      name: "Tutong",
      value: "BN04"
    },
    {
      name: "(other)",
      value: "BN00"
    },
    // =========================================================
    // Bulgaria
    // =========================================================
    {
      name: "Bulgaria",
      value: "BG"
    },
    {
      name: "Blagoevgrad Province",
      value: "BG38"
      // value: "BU38"
    },
    {
      name: "Burgas Province",
      value: "BG39"
      // value: "BU39"
    },
    {
      name: "Dobrich Province",
      value: "BG40"
      // value: "BU40"
    },
    {
      name: "Gabrovo Province",
      value: "BG41"
      // value: "BU41"
    },
    {
      name: "Sofiya-Grad Province (capital)",
      value: "BG42"
      // value: "BU42"
    },
    {
      name: "Haskovo Province",
      value: "BG43"
      // value: "BU43"
    },
    {
      name: "Kardzhali Province",
      value: "BG44"
      // value: "BU44"
    },
    {
      name: "Kyustendil Province",
      value: "BG45"
      // value: "BU45"
    },
    {
      name: "Lovech Province",
      value: "BG46"
      // value: "BU46"
    },
    {
      name: "Montana Province",
      value: "BG47"
      // value: "BU47"
    },
    {
      name: "Pazardzhik Province",
      value: "BG48"
      // value: "BU48"
    },
    {
      name: "Pernik Province",
      value: "BG49"
      // value: "BU49"
    },
    {
      name: "Pleven Province",
      value: "BG50"
      // value: "BU50"
    },
    {
      name: "Plovdiv Province",
      value: "BG51"
      // value: "BU51"
    },
    {
      name: "Razgrad Province",
      value: "BG52"
      // value: "BU52"
    },
    {
      name: "Ruse Province",
      value: "BG53"
      // value: "BU53"
    },
    {
      name: "Shumen Province",
      value: "BG54"
      // value: "BU54"
    },
    {
      name: "Silistra Province",
      value: "BG55"
      // value: "BU55"
    },
    {
      name: "Sliven Province",
      value: "BG56"
      // value: "BU56"
    },
    {
      name: "Smolyan Province",
      value: "BG57"
      // value: "BU57"
    },
    {
      name: "Sofia Province",
      value: "BG58"
      // value: "BU58"
    },
    {
      name: "Stara Zagora Province",
      value: "BG59"
      // value: "BU59"
    },
    {
      name: "Targovishte Province",
      value: "BG60"
      // value: "BU60"
    },
    {
      name: "Varna Province",
      value: "BG61"
      // value: "BU61"
    },
    {
      name: "Veliko Tarnovo Province",
      value: "BG62"
      // value: "BU62"
    },
    {
      name: "Vidin Province",
      value: "BG63"
      // value: "BU63"
    },
    {
      name: "Vratsa Province",
      value: "BG64"
      // value: "BU64"
    },
    {
      name: "Yambol Province",
      value: "BG65"
      // value: "BU65"
    },
    // =========================================================
    // Burkina Faso
    // =========================================================
    {
      name: "Burkina Faso",
      value: "BF"
    },
    {
      name: "Boucle du Mouhoun",
      value: "BF01"
    },
    {
      name: "Cascades",
      value: "BF02"
    },
    {
      name: "Centre",
      value: "BF03"
    },
    {
      name: "Centre-Est",
      value: "BF04"
    },
    {
      name: "Centre-Nord",
      value: "BF05"
    },
    {
      name: "Centre-Ouest",
      value: "BF06"
    },
    {
      name: "Centre-Sud",
      value: "BF07"
    },
    {
      name: "Est",
      value: "BF08"
    },
    {
      name: "Hauts-Bassins",
      value: "BF09"
    },
    {
      name: "Nord",
      value: "BF10"
    },
    {
      name: "Plateau-Central",
      value: "BF11"
    },
    {
      name: "Sahel",
      value: "BF12"
    },
    {
      name: "Sud-Ouest",
      value: "BF13"
    },
    // =========================================================
    // Burundi
    // =========================================================
    {
      name: "Burundi",
      value: "BI"
    },
    {
      name: "Bubanza",
      value: "BI09"
    },
    {
      name: "Bururi",
      value: "BI10"
    },
    {
      name: "Cankuzo",
      value: "BI11"
    },
    {
      name: "Cibitoke",
      value: "BI12"
    },
    {
      name: "Gitega",
      value: "BI13"
    },
    {
      name: "Karuzi",
      value: "BI14"
    },
    {
      name: "Kayanza",
      value: "BI15"
    },
    {
      name: "Kirundo",
      value: "BI16"
    },
    {
      name: "Makamba",
      value: "BI17"
    },
    {
      name: "Muyinga",
      value: "BI18"
    },
    {
      name: "Ngozi",
      value: "BI19"
    },
    {
      name: "Rutana",
      value: "BI20"
    },
    {
      name: "Ruyigi",
      value: "BI21"
    },
    {
      name: "Muramvya",
      value: "BI22"
    },
    {
      name: "Mwaro",
      value: "BI23"
    },
    {
      name: "Bujumbura Mairie",
      value: "BI24"
    },
    {
      name: "Bujumbura Rural",
      value: "BI25"
    },
    {
      name: "Rumonge",
      value: "BI26"
    },
    // =========================================================
    // Cambodia
    // =========================================================
    {
      name: "Cambodia",
      value: "KH"
    },
    {
      name: "Kâmpóng Cham Province",
      value: "KH02"
      // value: "CB02"
    },
    {
      name: "Kâmpóng Chhnăng Province",
      value: "KH03"
      // value: "CB03"
    },
    {
      name: "Kâmpóng Spœ Province",
      value: "KH04"
      // value: "CB04"
    },
    {
      name: "Kâmpóng Thum Province",
      value: "KH05"
      // value: "CB05"
    },
    {
      name: "Kândal Province",
      value: "KH07"
      // value: "CB07"
    },
    {
      name: "Kaôh Kŏng Province",
      value: "KH08"
      // value: "CB08"
    },
    {
      name: "Krâchéh Province",
      value: "KH09"
      // value: "CB09"
    },
    {
      name: "Môndôl Kiri Province",
      value: "KH10"
      // value: "CB10"
    },
    {
      name: "Poŭthĭsăt Province",
      value: "KH12"
      // value: "CB12"
    },
    {
      name: "Preăh Vĭhéar Province",
      value: "KH13"
      // value: "CB13"
    },
    {
      name: "Prey Vêng Province",
      value: "KH14"
      // value: "CB14"
    },
    {
      name: "Stœ̆ng Trêng Province",
      value: "KH17"
      // value: "CB17"
    },
    {
      name: "Svay Riĕng Province",
      value: "KH18"
      // value: "CB18"
    },
    {
      name: "Takêv Province",
      value: "KH19"
      // value: "CB19"
    },
    {
      name: "Kâmpôt Province",
      value: "KH21"
      // value: "CB21"
    },
    {
      name: "Phnum Pénh Municipality",
      value: "KH22"
      // value: "CB22"
    },
    {
      name: "Rôtânăh Kiri Province",
      value: "KH23"
      // value: "CB23"
    },
    {
      name: "Siĕm Réab Province",
      value: "KH24"
      // value: "CB24"
    },
    {
      name: "Bântéay Méan Cheăy Province",
      value: "KH25"
      // value: "CB25"
    },
    {
      name: "Kêb Municipality",
      value: "KH26"
      // value: "CB26"
    },
    {
      name: "Ŏtdâr Méanchey Province",
      value: "KH27"
      // value: "CB27"
    },
    {
      name: "Preăh Sihanouk Municipality",
      value: "KH28"
      // value: "CB28"
    },
    {
      name: "Bătdâmbâng Province",
      value: "KH29"
      // value: "CB29"
    },
    {
      name: "Pailĭn Province",
      value: "KH30"
      // value: "CB30"
    },
    // =========================================================
    // Cameroon
    // =========================================================
    {
      name: "Cameroon",
      value: "CM"
    },
    {
      name: "East Province",
      value: "CM04"
    },
    {
      name: "Littoral Province",
      value: "CM05"
    },
    {
      name: "Northwest Province",
      value: "CM07"
    },
    {
      name: "West Province",
      value: "CM08"
    },
    {
      name: "Southwest Province",
      value: "CM09"
    },
    {
      name: "Adamawa Province",
      value: "CM10"
    },
    {
      name: "Centre Province",
      value: "CM11"
    },
    {
      name: "Far North Province",
      value: "CM12"
    },
    {
      name: "North Province",
      value: "CM13"
    },
    {
      name: "South Province",
      value: "CM14"
    },
    // =========================================================
    // Canada
    // =========================================================
    {
      name: "Canada",
      value: "CA"
    },
    {
      name: "Canada, Alberta",
      value: "CA01"
    },
    {
      name: "Canada, British Columbia",
      value: "CA02"
    },
    {
      name: "Canada, Manitoba",
      value: "CA03"
    },
    {
      name: "Canada, New Brunswick",
      value: "CA04"
    },
    {
      name: "Canada, Newfoundland and Labrador",
      value: "CA05"
    },
    {
      name: "Canada, Nova Scotia",
      value: "CA07"
    },
    {
      name: "Canada, Ontario",
      value: "CA08"
    },
    {
      name: "Canada, Prince Edward Island",
      value: "CA09"
    },
    {
      name: "Canada, Quebec",
      value: "CA10"
    },
    {
      name: "Canada, Saskatchewan",
      value: "CA11"
    },
    {
      name: "Canada, Yukon",
      value: "CA12"
    },
    {
      name: "Canada, Northwest Territories",
      value: "CA13"
    },
    {
      name: "Canada, Nunavut",
      value: "CA14"
    },
    // =========================================================
    // Cape Verde
    // =========================================================
    {
      name: "Cape Verde",
      value: "CV"
    },
    {
      name: "Boa Vista",
      value: "CV01"
    },
    {
      name: "Brava",
      value: "CV02"
    },
    {
      name: "Maio",
      value: "CV04"
    },
    {
      name: "Paul",
      value: "CV05"
    },
    {
      name: "Ribeira Grande",
      value: "CV07"
    },
    {
      name: "Sal",
      value: "CV08"
    },
    {
      name: "São Vicente",
      value: "CV11"
    },
    {
      name: "Mosteiros",
      value: "CV13"
    },
    {
      name: "Praia",
      value: "CV14"
    },
    {
      name: "Santa Catarina",
      value: "CV15"
    },
    {
      name: "Santa Cruz",
      value: "CV16"
    },
    {
      name: "Sao Domingos",
      value: "CV17"
    },
    {
      name: "Sao Filipe",
      value: "CV18"
    },
    {
      name: "Sao Miguel",
      value: "CV19"
    },
    {
      name: "Tarrafal",
      value: "CV20"
    },
    {
      name: "Porto Novo",
      value: "CV21"
    },
    {
      name: "Ribeira Brava",
      value: "CV22"
    },
    {
      name: "Ribeira Grande de Santiago",
      value: "CV23"
    },
    {
      name: "Santa Catarina do Fogo",
      value: "CV24"
    },
    {
      name: "Sao Lourenco dos Orgaos",
      value: "CV25"
    },
    {
      name: "Sao Salvador do Mundo",
      value: "CV26"
    },
    {
      name: "Tarrafal de Sao Nicolau",
      value: "CV27"
    },
    // =========================================================
    // Cayman Islands
    // (no sensible admin code regime: leave "search entire country")
    // =========================================================
    {
      name: "Cayman Islands",
      value: "KY"
    },
    // =========================================================
    // Central African Republic
    // =========================================================
    {
      name: "Central African Republic",
      value: "CF"
    },
    {
      name: "Bamingui-Bangoran",
      value: "CF01"
      // value: "CT01"
    },
    {
      name: "Basse-Kotto",
      value: "CF02"
      // value: "CT02"
    },
    {
      name: "Haute-Kotto",
      value: "CF03"
      // value: "CT03"
    },
    {
      name: "Mambéré-Kadéï",
      value: "CF04"
      // value: "CT04"
    },
    {
      name: "Haut-Mbomou",
      value: "CF05"
      // value: "CT05"
    },
    {
      name: "Kémo",
      value: "CF06"
      // value: "CT06"
    },
    {
      name: "Lobaye",
      value: "CF07"
      // value: "CT07"
    },
    {
      name: "Mbomou",
      value: "CF08"
      // value: "CT08"
    },
    {
      name: "Nana-Mambéré",
      value: "CF09"
      // value: "CT09"
    },
    {
      name: "Ouaka",
      value: "CF11"
      // value: "CT11"
    },
    {
      name: "Ouham",
      value: "CF12"
      // value: "CT12"
    },
    {
      name: "Ouham-Pendé",
      value: "CF13"
      // value: "CT13"
    },
    {
      name: "Vakaga",
      value: "CF14"
      // value: "CT14"
    },
    {
      name: "Nana-Grébizi",
      value: "CF15"
      // value: "CT15"
    },
    {
      name: "Sangha-Mbaéré",
      value: "CF16"
      // value: "CT16"
    },
    {
      name: "Ombella-Mpoko",
      value: "CF17"
      // value: "CT17"
    },
    {
      name: "Bangui Commune",
      value: "CF18"
      // value: "CT18"
    },
    // =========================================================
    // Chad
    // =========================================================
    {
      name: "Chad",
      value: "TD"
    },
    {
      name: "Batha",
      value: "TD01"
    },
    {
      name: "Wadi Fira",
      value: "TD02"
    },
    {
      name: "Guera",
      value: "TD05"
    },
    {
      name: "Kanem",
      value: "TD06"
    },
    {
      name: "Lac",
      value: "TD07"
    },
    {
      name: "Logone Occidental",
      value: "TD08"
    },
    {
      name: "Logone Oriental",
      value: "TD09"
    },
    {
      name: "Ouaddai",
      value: "TD12"
    },
    {
      name: "Salamat",
      value: "TD13"
    },
    {
      name: "Tandjile",
      value: "TD14"
    },
    {
      name: "Chari-Baguirmi",
      value: "TD15"
    },
    {
      name: "Mayo-Kebbi East",
      value: "TD16"
    },
    {
      name: "Moyen-Chari",
      value: "TD17"
    },
    {
      name: "Hadjer-Lamis",
      value: "TD18"
    },
    {
      name: "Mandoul",
      value: "TD19"
    },
    {
      name: "Mayo-Kebbi West",
      value: "TD20"
    },
    {
      name: "Ville de N'Djaména",
      value: "TD21"
    },
    {
      name: "Barh el Gazel",
      value: "TD22"
    },
    {
      name: "Borkou",
      value: "TD23"
    },
    {
      name: "Ennedi",
      value: "TD24"
    },
    {
      name: "Sila",
      value: "TD25"
    },
    {
      name: "Tibesti",
      value: "TD26"
    },
    {
      name: "Ennedi-Est",
      value: "TD27"
    },
    {
      name: "Ennedi-Ouest",
      value: "TD28"
    },
    // =========================================================
    // Chile
    // =========================================================
    {
      name: "Chile",
      value: "CL"
    },
    {
      name: "Valparaíso",
      value: "CL01"
    },
    {
      name: "Aysén",
      value: "CL02"
    },
    {
      name: "Antofagasta",
      value: "CL03"
    },
    {
      name: "Araucanía",
      value: "CL04"
    },
    {
      name: "Atacama",
      value: "CL05"
    },
    {
      name: "Biobío",
      value: "CL06"
    },
    {
      name: "Coquimbo Region",
      value: "CL07"
    },
    {
      name: "O'Higgins Region",
      value: "CL08"
    },
    {
      name: "Region of Magallanes",
      value: "CL10"
    },
    {
      name: "Maule Region",
      value: "CL11"
    },
    {
      name: "Santiago Metropolitan",
      value: "CL12"
    },
    {
      name: "Los Lagos Region",
      value: "CL14"
    },
    {
      name: "Tarapacá",
      value: "CL15"
    },
    {
      name: "Arica y Parinacota",
      value: "CL16"
    },
    {
      name: "Los Ríos Region",
      value: "CL17"
    },
    {
      name: "Ñuble",
      value: "CL18"
    },
    // =========================================================
    // China
    // =========================================================
    {
      name: "China",
      value: "CN"
    },
    {
      name: "Anhui Province",
      value: "CN01"
    },
    {
      name: "Zhejiang Province",
      value: "CN02"
    },
    {
      name: "Jiangxi Province",
      value: "CN03"
    },
    {
      name: "Jiangsu Province",
      value: "CN04"
    },
    {
      name: "Jilin Province",
      value: "CN05"
    },
    {
      name: "Qinghai Province",
      value: "CN06"
    },
    {
      name: "Fujian Province",
      value: "CN07"
    },
    {
      name: "Heilongjiang Province",
      value: "CN08"
    },
    {
      name: "Henan Province",
      value: "CN09"
    },
    {
      name: "Hebei Province",
      value: "CN10"
    },
    {
      name: "Hunan Province",
      value: "CN11"
    },
    {
      name: "Hubei Province",
      value: "CN12"
    },
    {
      name: "Xinjiang Autonomous Region",
      value: "CN13"
    },
    {
      name: "Xizang Autonomous Region",
      value: "CN14"
    },
    {
      name: "Gansu Province",
      value: "CN15"
    },
    {
      name: "Guangxi Autonomous Region",
      value: "CN16"
    },
    {
      name: "Guizhou Province",
      value: "CN18"
    },
    {
      name: "Liaoning Province",
      value: "CN19"
    },
    {
      name: "Nei Mongol Autonomous Region",
      value: "CN20"
    },
    {
      name: "Ningxia Autonomous Region",
      value: "CN21"
    },
    {
      name: "Beijing Municipality",
      value: "CN22"
    },
    {
      name: "Shanghai Municipality",
      value: "CN23"
    },
    {
      name: "Shanxi Province",
      value: "CN24"
    },
    {
      name: "Shandong Province",
      value: "CN25"
    },
    {
      name: "Shaanxi Province",
      value: "CN26"
    },
    {
      name: "Tianjin Municipality",
      value: "CN28"
    },
    {
      name: "Yunnan Province",
      value: "CN29"
    },
    {
      name: "Guangdong Province",
      value: "CN30"
    },
    {
      name: "Hainan Province",
      value: "CN31"
    },
    {
      name: "Sichuan Province",
      value: "CN32"
    },
    {
      name: "Chongqing Municipality",
      value: "CN33"
    },
    // =========================================================
    // Christmas Island
    // leave as "search entire country": some 00, others have no Admin1 code
    // =========================================================
    {
      name: "Christmas Island",
      value: "CX"
    },
    // =========================================================
    // Cocos (Keeling) Islands
    // leave as "search entire country": some 00, others have no Admin1 code
    // =========================================================
    {
      name: "Cocos (Keeling) Islands",
      value: "CC"
    },
    // =========================================================
    // Colombia
    // =========================================================
    {
      name: "Colombia",
      value: "CO"
    },
    {
      name: "Amazonas",
      value: "CO01"
    },
    {
      name: "Antioquia",
      value: "CO02"
    },
    {
      name: "Arauca",
      value: "CO03"
    },
    {
      name: "Atlantico",
      value: "CO04"
    },
    {
      name: "Caqueta",
      value: "CO08"
    },
    {
      name: "Cauca",
      value: "CO09"
    },
    {
      name: "Cesar",
      value: "CO10"
    },
    {
      name: "Choco",
      value: "CO11"
    },
    {
      name: "Cordoba",
      value: "CO12"
    },
    {
      name: "Guaviare",
      value: "CO14"
    },
    {
      name: "Guainia",
      value: "CO15"
    },
    {
      name: "Huila",
      value: "CO16"
    },
    {
      name: "La Guajira",
      value: "CO17"
    },
    {
      name: "Meta",
      value: "CO19"
    },
    {
      name: "Narino",
      value: "CO20"
    },
    {
      name: "Norte de Santander",
      value: "CO21"
    },
    {
      name: "Putumayo",
      value: "CO22"
    },
    {
      name: "Quindio",
      value: "CO23"
    },
    {
      name: "Risaralda",
      value: "CO24"
    },
    {
      name: "San Andres y Providencia",
      value: "CO25"
    },
    {
      name: "Santander",
      value: "CO26"
    },
    {
      name: "Sucre",
      value: "CO27"
    },
    {
      name: "Tolima",
      value: "CO28"
    },
    {
      name: "Valle del Cauca",
      value: "CO29"
    },
    {
      name: "Vaupes",
      value: "CO30"
    },
    {
      name: "Vichada",
      value: "CO31"
    },
    {
      name: "Casanare",
      value: "CO32"
    },
    {
      name: "Cundinamarca",
      value: "CO33"
    },
    {
      name: "Bogota D.C.",
      value: "CO34"
    },
    {
      name: "Bolivar",
      value: "CO35"
    },
    {
      name: "Boyaca",
      value: "CO36"
    },
    {
      name: "Caldas",
      value: "CO37"
    },
    {
      name: "Magdalena",
      value: "CO38"
    },
    // =========================================================
    // Comoros
    // =========================================================
    {
      name: "Comoros",
      value: "KM"
    },
    {
      name: "Nzwani (Ndzuwani, Anjouan)",
      value: "KM01"
    },
    {
      name: "Ngazidja (Grande Comore)",
      value: "KM02"
    },
    {
      name: "Mwali (Mohéli)",
      value: "KM03"
    },
    // =========================================================
    // Republic of the Congo
    // =========================================================
    {
      name: "Congo, Republic of the",
      value: "CG"
    },
    {
      name: "Bouenza",
      value: "CG01"
    },
    {
      name: "Kouilou",
      value: "CG04"
    },
    {
      name: "Lékoumou",
      value: "CG05"
    },
    {
      name: "Likouala",
      value: "CG06"
    },
    {
      name: "Niari",
      value: "CG07"
    },
    {
      name: "Plateaux",
      value: "CG08"
    },
    {
      name: "Sangha",
      value: "CG10"
    },
    {
      name: "Pool",
      value: "CG11"
    },
    {
      name: "Brazzaville",
      value: "CG12"
    },
    {
      name: "Cuvette",
      value: "CG13"
    },
    {
      name: "Cuvette-Ouest",
      value: "CG14"
    },
    {
      name: "Pointe-Noire",
      value: "CG15"
    },
    // =========================================================
    // Congo, Democratic Republic of
    // =========================================================
    {
      name: "Congo, Democratic Republic of",
      value: "CD"
    },
    {
      name: "Bandundu",
      value: "CD01"
    },
    {
      name: "Équateur",
      value: "CD02"
    },
    {
      name: "Kasaï-Occidental",
      value: "CD03"
    },
    {
      name: "Kasaï-Oriental",
      value: "CD04"
    },
    {
      name: "Katanga",
      value: "CD05"
    },
    {
      name: "Kinshasa City",
      value: "CD06"
    },
    {
      name: "Kivu",
      value: "CD07"
    },
    {
      name: "Bas-Congo",
      value: "CD08"
    },
    {
      name: "Orientale",
      value: "CD09"
    },
    {
      name: "Maniema",
      value: "CD10"
    },
    {
      name: "Nord Kivu",
      value: "CD11"
    },
    {
      name: "South Kivu",
      value: "CD12"
    },
    {
      name: "Bas-Uele",
      value: "CD13"
    },
    {
      name: "Haut-Katanga",
      value: "CD14"
    },
    {
      name: "Haut-Lomami",
      value: "CD15"
    },
    {
      name: "Haut-Uele",
      value: "CD16"
    },
    {
      name: "Ituri",
      value: "CD17"
    },
    {
      name: "Kasai",
      value: "CD18"
    },
    {
      name: "Kwango",
      value: "CD19"
    },
    {
      name: "Kwilu",
      value: "CD20"
    },
    {
      name: "Lomami",
      value: "CD21"
    },
    {
      name: "Lualaba",
      value: "CD22"
    },
    {
      name: "Kasai-Central",
      value: "CD23"
    },
    {
      name: "Mai-Ndombe",
      value: "CD24"
    },
    {
      name: "Mongala",
      value: "CD25"
    },
    {
      name: "Nord-Ubangi",
      value: "CD26"
    },
    {
      name: "Sankuru",
      value: "CD27"
    },
    {
      name: "Sud-Ubangi",
      value: "CD28"
    },
    {
      name: "Tanganyika",
      value: "CD29"
    },
    {
      name: "Tshopo",
      value: "CD30"
    },
    {
      name: "Tshuapa",
      value: "CD31"
    },
    {
      name: "(other)",
      value: "CD00"
    },
    // =========================================================
    // Cook Islands
    // leave as "search entire country": some 00, others have no Admin1 code
    // =========================================================
    {
      name: "Cook Islands",
      value: "CK"
    },
    // =========================================================
    // Costa Rica
    // =========================================================
    {
      name: "Costa Rica",
      value: "CR"
    },
    {
      name: "Alajuela",
      value: "CR01"
    },
    {
      name: "Cartago",
      value: "CR02"
    },
    {
      name: "Guanacaste",
      value: "CR03"
    },
    {
      name: "Heredia",
      value: "CR04"
    },
    {
      name: "Limón",
      value: "CR06"
    },
    {
      name: "Puntarenas",
      value: "CR07"
    },
    {
      name: "San José",
      value: "CR08"
    },
    // =========================================================
    // Croatia
    // =========================================================
    {
      name: "Croatia",
      value: "HR"
    },
    {
      name: "Bjelovar-Bilogora",
      value: "HR01"
    },
    {
      name: "Brod-Posavina",
      value: "HR02"
    },
    {
      name: "Dubrovnik-Neretva",
      value: "HR03"
    },
    {
      name: "Istria",
      value: "HR04"
    },
    {
      name: "Karlovac",
      value: "HR05"
    },
    {
      name: "Koprivnica-Križevci",
      value: "HR06"
    },
    {
      name: "Krapina-Zagorje",
      value: "HR07"
    },
    {
      name: "Lika-Senj",
      value: "HR08"
    },
    {
      name: "Međimurje",
      value: "HR09"
    },
    {
      name: "Osijek-Baranja",
      value: "HR10"
    },
    {
      name: "Požega-Slavonia",
      value: "HR11"
    },
    {
      name: "Primorje-Gorski Kotar",
      value: "HR12"
    },
    {
      name: "Šibenik-Knin",
      value: "HR13"
    },
    {
      name: "Sisak-Moslavina",
      value: "HR14"
    },
    {
      name: "Split-Dalmatia",
      value: "HR15"
    },
    {
      name: "Varaždin",
      value: "HR16"
    },
    {
      name: "Virovitica-Podravina",
      value: "HR17"
    },
    {
      name: "Vukovar-Srijem",
      value: "HR18"
    },
    {
      name: "Zadar",
      value: "HR19"
    },
    {
      name: "Zagreb County",
      value: "HR20"
    },
    {
      name: "Zagreb City",
      value: "HR21"
    },
    // =========================================================
    // Cuba
    // =========================================================
    {
      name: "Cuba",
      value: "CU"
    },
    {
      name: "Pinar del Río",
      value: "CU01"
    },
    {
      name: "Ciudad de La Habana",
      value: "CU02"
    },
    {
      name: "Matanzas",
      value: "CU03"
    },
    {
      name: "Isla de la Juventud",
      value: "CU04"
    },
    {
      name: "Camagüey",
      value: "CU05"
    },
    {
      name: "Ciego de Ávila",
      value: "CU07"
    },
    {
      name: "Cienfuegos",
      value: "CU08"
    },
    {
      name: "Granma",
      value: "CU09"
    },
    {
      name: "Guantánamo",
      value: "CU10"
    },
    {
      name: "La Habana",
      value: "CU11"
    },
    {
      name: "Holguín",
      value: "CU12"
    },
    {
      name: "Las Tunas",
      value: "CU13"
    },
    {
      name: "Sancti Spíritus",
      value: "CU14"
    },
    {
      name: "Santiago de Cuba",
      value: "CU15"
    },
    {
      name: "Villa Clara",
      value: "CU16"
    },
    // =========================================================
    // Curaçao
    // leave as "search entire country": some 00, others have no Admin1 code
    // =========================================================
    {
      name: "Curaçao",
      value: "CW"
    },
    // =========================================================
    // Cyprus
    // =========================================================
    {
      name: "Cyprus",
      value: "CY"
    },
    {
      name: "Famagusta (Ammochostos)",
      value: "CY01"
    },
    {
      name: "Keryneia",
      value: "CY02"
    },
    {
      name: "Larnaka",
      value: "CY03"
    },
    {
      name: "Nicosia",
      value: "CY04"
    },
    {
      name: "Limassol",
      value: "CY05"
    },
    {
      name: "Pafos",
      value: "CY06"
    },
    // =========================================================
    // Czech Republic
    // =========================================================
    {
      name: "Czech Republic",
      value: "CZ"
    },
    {
      name: "Prague (Praha)",
      value: "CZ52"
    },
    {
      name: "South Moravia (Jihomoravský)",
      value: "CZ78"
    },
    {
      name: "South Bohemia (Jihočeský)",
      value: "CZ79"
    },
    {
      name: "Vysočina",
      value: "CZ80"
    },
    {
      name: "Karlovy Vary (Karlovarský)",
      value: "CZ81"
    },
    {
      name: "Hradec Králové (Královéhradecký)",
      value: "CZ82"
    },
    {
      name: "Liberec (Liberecký)",
      value: "CZ83"
    },
    {
      name: "Olomouc (Olomoucký)",
      value: "CZ84"
    },
    {
      name: "Moravia-Silesia (Moravskoslezský)",
      value: "CZ85"
    },
    {
      name: "Pardubice (Pardubický)",
      value: "CZ86"
    },
    {
      name: "Plzeň (Plzeňský)",
      value: "CZ87"
    },
    {
      name: "Central Bohemia (Středočeský)",
      value: "CZ88"
    },
    {
      name: "Ústí nad Labem (Ústecký)",
      value: "CZ89"
    },
    {
      name: "Zlín (Zlínský)",
      value: "CZ90"
    },
    // =========================================================
    // Denmark
    // =========================================================
    {
      name: "Denmark",
      value: "DK"
    },
    {
      name: "Capital Region (Hovedstaden)",
      value: "DK17"
    },
    {
      name: "Central Jutland (Midtjylland)",
      value: "DK18"
    },
    {
      name: "North Denmark (Nordjylland)",
      value: "DK19"
    },
    {
      name: "Zealand (Sjaelland)",
      value: "DK20"
    },
    {
      name: "South Denmark (Syddanmark)",
      value: "DK21"
    },
    // =========================================================
    // Djibouti
    // =========================================================
    {
      name: "Djibouti",
      value: "DJ"
    },
    {
      name: "Ali Sabieh",
      value: "DJ01"
    },
    {
      name: "Arta",
      value: "DJ08"
    },
    {
      name: "Dikhil",
      value: "DJ06"
    },
    {
      name: "Djibouti",
      value: "DJ07"
    },
    {
      name: "Obock",
      value: "DJ04"
    },
    {
      name: "Tadjourah",
      value: "DJ05"
    },
    {
      name: "(other)",
      value: "DJ00"
    },
    // =========================================================
    // Dominica
    // =========================================================
    {
      name: "Dominica",
      value: "DM"
    },
    {
      name: "Saint Andrew",
      value: "DM02"
    },
    {
      name: "Saint David",
      value: "DM03"
    },
    {
      name: "Saint George",
      value: "DM04"
    },
    {
      name: "Saint John",
      value: "DM05"
    },
    {
      name: "Saint Joseph",
      value: "DM06"
    },
    {
      name: "Saint Luke",
      value: "DM07"
    },
    {
      name: "Saint Mark",
      value: "DM08"
    },
    {
      name: "Saint Patrick",
      value: "DM09"
    },
    {
      name: "Saint Paul",
      value: "DM10"
    },
    {
      name: "Saint Peter",
      value: "DM11"
    },
    // =========================================================
    // Dominican Republic
    // =========================================================
    {
      name: "Dominican Republic",
      value: "DO"
    },
    {
      name: "Azua",
      value: "DO01"
    },
    {
      name: "Bahoruco",
      value: "DO02"
    },
    {
      name: "Barahona",
      value: "DO03"
    },
    {
      name: "Dajabón",
      value: "DO04"
    },
    {
      name: "Duarte",
      value: "DO06"
    },
    {
      name: "Espaillat",
      value: "DO08"
    },
    {
      name: "Independencia",
      value: "DO09"
    },
    {
      name: "La Altagracia",
      value: "DO10"
    },
    {
      name: "Elías Piña",
      value: "DO11"
    },
    {
      name: "La Romana",
      value: "DO12"
    },
    {
      name: "María Trinidad Sánchez",
      value: "DO14"
    },
    {
      name: "Monte Cristi",
      value: "DO15"
    },
    {
      name: "Pedernales",
      value: "DO16"
    },
    {
      name: "Puerto Plata",
      value: "DO18"
    },
    {
      name: "Hermanas Mirabal",
      value: "DO19"
    },
    {
      name: "Samaná",
      value: "DO20"
    },
    {
      name: "Sánchez Ramírez",
      value: "DO21"
    },
    {
      name: "San Juan",
      value: "DO23"
    },
    {
      name: "San Pedro de Macorís",
      value: "DO24"
    },
    {
      name: "Santiago",
      value: "DO25"
    },
    {
      name: "Santiago Rodríguez",
      value: "DO26"
    },
    {
      name: "Valverde",
      value: "DO27"
    },
    {
      name: "El Seíbo",
      value: "DO28"
    },
    {
      name: "Hato Mayor",
      value: "DO29"
    },
    {
      name: "La Vega",
      value: "DO30"
    },
    {
      name: "Monseñor Nouel",
      value: "DO31"
    },
    {
      name: "Monte Plata",
      value: "DO32"
    },
    {
      name: "San Cristobal",
      value: "DO33"
    },
    {
      name: "Distrito Nacional",
      value: "DO34"
    },
    {
      name: "Peravia",
      value: "DO35"
    },
    {
      name: "San Jose de Ocoa",
      value: "DO36"
    },
    {
      name: "Santo Domingo",
      value: "DO37"
    },
    // =========================================================
    // Ecuador
    // =========================================================
    {
      name: "Ecuador",
      value: "EC"
    },
    {
      name: "Galápagos",
      value: "EC01"
    },
    {
      name: "Azuay",
      value: "EC02"
    },
    {
      name: "Bolivar",
      value: "EC03"
    },
    {
      name: "Canar",
      value: "EC04"
    },
    {
      name: "Carchi",
      value: "EC05"
    },
    {
      name: "Chimborazo",
      value: "EC06"
    },
    {
      name: "Cotopaxi",
      value: "EC07"
    },
    {
      name: "El Oro",
      value: "EC08"
    },
    {
      name: "Esmeraldas",
      value: "EC09"
    },
    {
      name: "Guayas (Guayaquil)",
      value: "EC10"
    },
    {
      name: "Imbabura",
      value: "EC11"
    },
    {
      name: "Loja",
      value: "EC12"
    },
    {
      name: "Los Rios",
      value: "EC13"
    },
    {
      name: "Manabi",
      value: "EC14"
    },
    {
      name: "Morona Santiago",
      value: "EC15"
    },
    {
      name: "Pastaza",
      value: "EC17"
    },
    {
      name: "Pichincha (Quito)",
      value: "EC18"
    },
    {
      name: "Tungurahua",
      value: "EC19"
    },
    {
      name: "Zamora Chinchipe",
      value: "EC20"
    },
    {
      name: "Sucumbios",
      value: "EC22"
    },
    {
      name: "Napo",
      value: "EC23"
    },
    {
      name: "Francisco de Orellana",
      value: "EC24"
    },
    {
      name: "Santa Elena",
      value: "EC25"
    },
    {
      name: "Santo Domingo de los Tsachilas",
      value: "EC26"
    },
    // =========================================================
    // Egypt
    // =========================================================
    {
      name: "Egypt",
      value: "EG"
    },
    {
      name: "Dakahlia (Daqahliyah)",
      value: "EG01"
    },
    {
      name: "Red Sea (Bahr al Ahmar)",
      value: "EG02"
    },
    {
      name: "Beheira (Beheira Governorate)",
      value: "EG03"
    },
    {
      name: "Faiyum (Fayyum)",
      value: "EG04"
    },
    {
      name: "Gharbia (Gharbiyah)",
      value: "EG05"
    },
    {
      name: "Alexandria (Iskandariyah)",
      value: "EG06"
    },
    {
      name: "Ismailia (Ismailia Governorate)",
      value: "EG07"
    },
    {
      name: "Giza (Jizah)",
      value: "EG08"
    },
    {
      name: "Monufia (Minufiyah)",
      value: "EG09"
    },
    {
      name: "Minya (Minya)",
      value: "EG10"
    },
    {
      name: "Cairo (Qahirah)",
      value: "EG11"
    },
    {
      name: "Qalyubia (Qalyubiyah)",
      value: "EG12"
    },
    {
      name: "New Valley (Wadi al Jadid)",
      value: "EG13"
    },
    {
      name: "Sharqia (Sharqiyah)",
      value: "EG14"
    },
    {
      name: "Suez (As Suways)",
      value: "EG15"
    },
    {
      name: "Aswan (Aswan)",
      value: "EG16"
    },
    {
      name: "Asyut (Asyut)",
      value: "EG17"
    },
    {
      name: "Beni Suweif (Bani Suwayf)",
      value: "EG18"
    },
    {
      name: "Port Said (Bur Sa`id)",
      value: "EG19"
    },
    {
      name: "Damietta (Dumyat)",
      value: "EG20"
    },
    {
      name: "Kafr el-Sheikh (Kafr ash Shaykh)",
      value: "EG21"
    },
    {
      name: "Matruh (Matruh)",
      value: "EG22"
    },
    {
      name: "Qena (Qina)",
      value: "EG23"
    },
    {
      name: "Sohag (Suhaj)",
      value: "EG24"
    },
    {
      name: "South Sinai (Janub Sina')",
      value: "EG26"
    },
    {
      name: "North Sinai (Shamal Sina')",
      value: "EG27"
    },
    {
      name: "Luxor (Uqsur)",
      value: "EG28"
    },
    // =========================================================
    // El Salvador
    // =========================================================
    {
      name: "El Salvador",
      value: "SV"
    },
    {
      name: "Ahuachapán",
      value: "SV01"
    },
    {
      name: "Cabañas",
      value: "SV02"
    },
    {
      name: "Chalatenango",
      value: "SV03"
    },
    {
      name: "Cuscatlán",
      value: "SV04"
    },
    {
      name: "La Libertad",
      value: "SV05"
    },
    {
      name: "La Paz",
      value: "SV06"
    },
    {
      name: "La Unión",
      value: "SV07"
    },
    {
      name: "Morazán",
      value: "SV08"
    },
    {
      name: "San Miguel",
      value: "SV09"
    },
    {
      name: "San Salvador",
      value: "SV10"
    },
    {
      name: "Santa Ana",
      value: "SV11"
    },
    {
      name: "San Vicente",
      value: "SV12"
    },
    {
      name: "Sonsonate",
      value: "SV13"
    },
    {
      name: "Usulután",
      value: "SV14"
    },
    // =========================================================
    // Equatorial Guinea
    // =========================================================
    {
      name: "Equatorial Guinea",
      value: "GQ"
    },
    {
      name: "Annobón",
      value: "GQ03"
    },
    {
      name: "Bioko Norte",
      value: "GQ04"
    },
    {
      name: "Bioko Sur",
      value: "GQ05"
    },
    {
      name: "Centro Sur",
      value: "GQ06"
    },
    {
      name: "Kié-Ntem",
      value: "GQ07"
    },
    {
      name: "Litoral",
      value: "GQ08"
    },
    {
      name: "Wele-Nzas",
      value: "GQ09"
    },
    {
      name: "(other)",
      value: "GQ00"
    },
    // =========================================================
    // Eritrea
    // =========================================================
    {
      name: "Eritrea",
      value: "ER"
    },
    {
      name: "Anseba",
      value: "ER01"
    },
    {
      name: "Debub (Southern)",
      value: "ER02"
    },
    {
      name: "Southern Red Sea",
      value: "ER03"
    },
    {
      name: "Gash-Barka",
      value: "ER04"
    },
    {
      name: "Maekel (Central)",
      value: "ER05"
    },
    {
      name: "Northern Red Sea",
      value: "ER06"
    },
    {
      name: "(other)",
      value: "ER00"
    },
    // =========================================================
    // Estonia
    // =========================================================
    {
      name: "Estonia",
      value: "EE"
    },
    {
      name: "Harjumaa",
      value: "EE01"
    },
    {
      name: "Hiiumaa",
      value: "EE02"
    },
    {
      name: "Ida-Virumaa",
      value: "EE03"
    },
    {
      name: "Järvamaa",
      value: "EE04"
    },
    {
      name: "Jõgevamaa",
      value: "EE05"
    },
    {
      name: "Läänemaa",
      value: "EE07"
    },
    {
      name: "Lääne-Virumaa",
      value: "EE08"
    },
    {
      name: "Pärnumaa",
      value: "EE11"
    },
    {
      name: "Põlva",
      value: "EE12"
    },
    {
      name: "Raplamaa",
      value: "EE13"
    },
    {
      name: "Saaremaa",
      value: "EE14"
    },
    {
      name: "Tartumaa",
      value: "EE18"
    },
    {
      name: "Valgamaa",
      value: "EE19"
    },
    {
      name: "Viljandimaa",
      value: "EE20"
    },
    {
      name: "Võrumaa",
      value: "EE21"
    },
    {
      name: "(other)",
      value: "EE00"
    },
    // =========================================================
    // Ethiopia
    // =========================================================
    {
      name: "Ethiopia",
      value: "ET"
    },
    {
      name: "Addis Ababa",
      value: "ET44"
    },
    {
      name: "Āfar",
      value: "ET45"
    },
    {
      name: "Amhara",
      value: "ET46"
    },
    {
      name: "Bīnshangul Gumuz",
      value: "ET47"
    },
    {
      name: "Dire Dawa",
      value: "ET48"
    },
    {
      name: "Gambela",
      value: "ET49"
    },
    {
      name: "Harari",
      value: "ET50"
    },
    {
      name: "Oromiya",
      value: "ET51"
    },
    {
      name: "Somali",
      value: "ET52"
    },
    {
      name: "Tigray",
      value: "ET53"
    },
    {
      name: "SNNPR (Southern Nations, Nationalities, and People's Region)",
      value: "ET54"
    },
    {
      name: "(other)",
      value: "ET00"
    },
    // =========================================================
    // Falkland Islands (Islas Malvinas)
    // leave as "search entire country": some 00, others have no Admin1 code
    // =========================================================
    {
      name: "Falkland Islands (Islas Malvinas)",
      value: "FK"
    },
    // =========================================================
    // Faroe Islands
    // =========================================================
    {
      name: "Faroe Islands",
      value: "FO"
    },
    {
      name: "Eysturoy (Eysturoyar Sýsla)",
      value: "FOOS"
    },
    {
      name: "Norðoyar (Norðoyar Sýsla)",
      value: "FONO"
    },
    {
      name: "Sandoy (Sandoyar Sýsla)",
      value: "FOSA"
    },
    {
      name: "Streymoy (Streymoyar Sýsla)",
      value: "FOST"
    },
    {
      name: "Suðuroy (Suðuroyar Sýsla)",
      value: "FOSU"
    },
    {
      name: "Vágar (Vága Sýsla)",
      value: "FOVG"
    },
    // =========================================================
    // Fiji
    // =========================================================
    {
      name: "Fiji",
      value: "FJ"
    },
    {
      name: "Central",
      value: "FJ01"
    },
    {
      name: "Eastern",
      value: "FJ02"
    },
    {
      name: "Northern",
      value: "FJ03"
    },
    {
      name: "Rotuma",
      value: "FJ04"
    },
    {
      name: "Western",
      value: "FJ05"
    },
    {
      name: "(other)",
      value: "FJ00"
    },
    // =========================================================
    // Finland
    // =========================================================
    {
      name: "Finland",
      value: "FI"
    },
    {
      name: "Uusimaa",
      value: "FI01"
    },
    {
      name: "Finland Proper",
      value: "FI02"
    },
    {
      name: "Satakunta",
      value: "FI04"
    },
    {
      name: "Tavastia Proper",
      value: "FI05"
    },
    {
      name: "Pirkanmaa",
      value: "FI06"
    },
    {
      name: "Päijänne Tavastia",
      value: "FI07"
    },
    {
      name: "Kymenlaakso",
      value: "FI08"
    },
    {
      name: "South Karelia",
      value: "FI09"
    },
    {
      name: "Southern Savonia",
      value: "FI10"
    },
    {
      name: "Northern Savo",
      value: "FI11"
    },
    {
      name: "North Karelia",
      value: "FI12"
    },
    {
      name: "Central Finland",
      value: "FI13"
    },
    {
      name: "Southern Ostrobothnia",
      value: "FI14"
    },
    {
      name: "Ostrobothnia",
      value: "FI15"
    },
    {
      name: "Central Ostrobothnia",
      value: "FI16"
    },
    {
      name: "Northern Ostrobothnia",
      value: "FI17"
    },
    {
      name: "Kainuu",
      value: "FI18"
    },
    {
      name: "Lapland",
      value: "FI19"
    },
    // =========================================================
    // Åland Islands (Finland)
    // =========================================================
    {
      name: "Åland Islands (Finland)",
      value: "AX"
    },
    {
      name: "Mariehamns stad",
      value: "AX211"
    },
    {
      name: "Ålands landsbygd (countryside)",
      value: "AX212"
    },
    {
      name: "Ålands skärgård (archipelago)",
      value: "AX213"
    },
    {
      name: "Harvaluoto, Samppa, Gundby, Erikvalla",
      value: "AX15"
    },
    // =========================================================
    // France
    // =========================================================
    {
      name: "France",
      value: "FR"
    },
    {
      name: "Grand Est (Strasbourg)",
      value: "FR44"
    },
    {
      name: "Nouvelle-Aquitaine (Bordeaux)",
      value: "FR75"
    },
    {
      name: "Auvergne-Rhône-Alpes (Lyon)",
      value: "FR84"
    },
    {
      name: "Bourgogne-Franche-Comté (Dijon)",
      value: "FR27"
    },
    {
      name: "Brittany (Rennes)",
      value: "FR53"
    },
    {
      name: "Centre-Val de Loire (Orléans)",
      value: "FR24"
    },
    {
      name: "Île-de-France (Paris)",
      value: "FR11"
    },
    {
      name: "Occitanie (Toulouse)",
      value: "FR76"
    },
    {
      name: "Hauts-de-France (Lille)",
      value: "FR32"
    },
    {
      name: "Normandy (Rouen)",
      value: "FR28"
    },
    {
      name: "Pays de la Loire (Nantes)",
      value: "FR52"
    },
    {
      name: "Provence-Alpes-Côte d'Azur (Marseille)",
      value: "FR93"
    },
    {
      name: "Corsica (Ajaccio)",
      value: "FR94"
    },
    // =========================================================
    // French Guiana
    // =========================================================
    {
      name: "French Guiana",
      value: "GF"
    },
    {
      name: "Guyane",
      value: "GFGF"
    },
    {
      name: "(other)",
      value: "GF00"
    },
    // =========================================================
    // French Polynesia
    // =========================================================
    {
      name: "French Polynesia",
      value: "PF"
    },
    {
      name: "Windward Islands (Îles du Vent) Tahiti, Moorea, ...",
      value: "PF01"
    },
    {
      name: "Leeward Islands (Îles Sous-le-vent) Raiatea, Huahine, Tahaa, Bora Bora, ...",
      value: "PF02"
    },
    {
      name: "Tuamotus and Gambier Islands (Îles Tuamotu-Gambier)",
      value: "PF03"
    },
    {
      name: "Marquesas Islands (Îles Marquises)",
      value: "PF04"
    },
    {
      name: "Austral Islands (Îles Australes) Tupua'i Islands and Bass Islands",
      value: "PF05"
    },
    {
      name: "(other)",
      value: "PF00"
    },
    // =========================================================
    // French Southern Territories
    // =========================================================
    {
      name: "French Southern Territories",
      value: "TF"
    },
    {
      name: "Saint-Paul-et-Amsterdam (Îles Saint-Paul et Nouvelle-Amsterdam)",
      value: "TF01"
    },
    {
      name: "Crozet (Archipel des Crozet)",
      value: "TF02"
    },
    {
      name: "Kerguelen (Archipel des Kerguelen)",
      value: "TF03"
    },
    {
      name: "Terre-Adélie (La Terre-Adélie)",
      value: "TF04"
    },
    {
      name: "Îles Éparses (Îles Éparses de l'océan Indien)",
      value: "TF05"
    },
    {
      name: "(other)",
      value: "TF00"
    },
    // =========================================================
    // Gabon
    // =========================================================
    {
      name: "Gabon",
      value: "GA"
    },
    {
      name: "Estuaire",
      value: "GA01"
    },
    {
      name: "Haut-Ogooué",
      value: "GA02"
    },
    {
      name: "Moyen-Ogooué",
      value: "GA03"
    },
    {
      name: "Ngouni",
      value: "GA04"
    },
    {
      name: "Nyanga",
      value: "GA05"
    },
    {
      name: "Ogooué-Ivindo",
      value: "GA06"
    },
    {
      name: "Ogooué-Lolo",
      value: "GA07"
    },
    {
      name: "Ogooué-Maritime",
      value: "GA08"
    },
    {
      name: "Woleu-Ntem",
      value: "GA09"
    },
    // =========================================================
    // The Gambia
    // =========================================================
    {
      name: "The Gambia",
      value: "GM"
    },
    {
      name: "Banjul",
      value: "GM01"
    },
    {
      name: "Lower River",
      value: "GM02"
    },
    {
      name: "Central River",
      value: "GM03"
    },
    {
      name: "Upper River",
      value: "GM04"
    },
    {
      name: "Western",
      value: "GM05"
    },
    {
      name: "North Bank",
      value: "GM07"
    },
    {
      name: "(other)",
      value: "GM00"
    },
    // =========================================================
    // Georgia
    // =========================================================
    {
      name: "Georgia",
      value: "GE"
    },
    {
      name: "Abkhazia",
      value: "GE02"
    },
    {
      name: "Ajaria",
      value: "GE04"
    },
    {
      name: "Akhmetis Raioni",
      value: "GE08"
    },
    {
      name: "Onis Raioni",
      value: "GE10"
    },
    {
      name: "Baghdati",
      value: "GE11"
    },
    {
      name: "Borjomis Raioni",
      value: "GE13"
    },
    {
      name: "Chiatura",
      value: "GE14"
    },
    {
      name: "Dedoplistskaro",
      value: "GE17"
    },
    {
      name: "Goris Raioni",
      value: "GE22"
    },
    {
      name: "Javis Raioni",
      value: "GE24"
    },
    {
      name: "Kareli",
      value: "GE25"
    },
    {
      name: "Kaspis Raioni",
      value: "GE26"
    },
    {
      name: "Kharagaulis Raioni",
      value: "GE27"
    },
    {
      name: "Khashuris Raioni",
      value: "GE28"
    },
    {
      name: "Kutaisi",
      value: "GE31"
    },
    {
      name: "Lagodekhis Raioni",
      value: "GE32"
    },
    {
      name: "Mtskheta",
      value: "GE38"
    },
    {
      name: "Aspindzis Raioni",
      value: "GE40"
    },
    {
      name: "Rustavi",
      value: "GE45"
    },
    {
      name: "T'bilisi (Tiflis) capital",
      value: "GE51"
    },
    {
      name: "Telavi",
      value: "GE52"
    },
    {
      name: "Tianeti",
      value: "GE55"
    },
    {
      name: "Tsageri",
      value: "GE57"
    },
    {
      name: "Tsalkis Raioni",
      value: "GE59"
    },
    {
      name: "Vanis Raioni",
      value: "GE61"
    },
    {
      name: "Guria",
      value: "GE65"
    },
    {
      name: "Imereti",
      value: "GE66"
    },
    {
      name: "Kakheti",
      value: "GE67"
    },
    {
      name: "Kvemo Kartli",
      value: "GE68"
    },
    {
      name: "Mtskheta-Mtianeti",
      value: "GE69"
    },
    {
      name: "Racha-Lechkhumi and Kvemo Svaneti",
      value: "GE70"
    },
    {
      name: "Samegrelo and Zemo Svaneti",
      value: "GE71"
    },
    {
      name: "Samtskhe-Javakheti",
      value: "GE72"
    },
    {
      name: "Shida Kartli",
      value: "GE73"
    },
    {
      name: "(other)",
      value: "GE00"
    },
    // =========================================================
    // Germany
    // =========================================================
    {
      name: "Germany",
      value: "DE"
    },
    {
      name: "Baden-Württemberg",
      value: "DE01"
    },
    {
      name: "Bavaria (Bayern)",
      value: "DE02"
    },
    {
      name: "Bremen",
      value: "DE03"
    },
    {
      name: "Hamburg",
      value: "DE04"
    },
    {
      name: "Hesse (Hessen)",
      value: "DE05"
    },
    {
      name: "Lower Saxony (Niedersachsen)",
      value: "DE06"
    },
    {
      name: "North Rhine-Westphalia (Nordrhein-Westfalen)",
      value: "DE07"
    },
    {
      name: "Rhineland-Palatinate (Rheinland-Pfalz)",
      value: "DE08"
    },
    {
      name: "Saarland",
      value: "DE09"
    },
    {
      name: "Schleswig-Holstein",
      value: "DE10"
    },
    {
      name: "Brandenburg",
      value: "DE11"
    },
    {
      name: "Mecklenburg-Vorpommern",
      value: "DE12"
    },
    {
      name: "Saxony (Sachsen)",
      value: "DE13"
    },
    {
      name: "Saxony-Anhalt (Sachsen-Anhalt)",
      value: "DE14"
    },
    {
      name: "Thuringia (Thüringen)",
      value: "DE15"
    },
    {
      name: "Berlin",
      value: "DE16"
    },
    {
      name: "(other)",
      value: "DE00"
    },
    // =========================================================
    // Ghana
    // =========================================================
    {
      name: "Ghana",
      value: "GH"
    },
    {
      name: "Greater Accra",
      value: "GH01"
    },
    {
      name: "Ashanti",
      value: "GH02"
    },
    {
      name: "Brong-Ahafo",
      value: "GH03"
    },
    {
      name: "Central",
      value: "GH04"
    },
    {
      name: "Eastern",
      value: "GH05"
    },
    {
      name: "Northern",
      value: "GH06"
    },
    {
      name: "Volta",
      value: "GH08"
    },
    {
      name: "Western",
      value: "GH09"
    },
    {
      name: "Upper East",
      value: "GH10"
    },
    {
      name: "Upper West",
      value: "GH11"
    },
    {
      name: "(other)",
      value: "GH00"
    },
    // =========================================================
    // Gibraltar
    // leave as "search entire country": some 00, others have no Admin1 code
    // =========================================================
    {
      name: "Gibraltar",
      value: "GI"
    },
    // =========================================================
    // Greece
    // =========================================================
    {
      name: "Greece",
      value: "GR"
    },
    {
      name: "Attica",
      value: "GRESYE31"
    },
    {
      name: "Central Greece",
      value: "GRESYE24"
    },
    {
      name: "Central Macedonia",
      value: "GRESYE12"
    },
    {
      name: "Crete",
      value: "GRESYE43"
    },
    {
      name: "East Macedonia and Thrace",
      value: "GRESYE11"
    },
    {
      name: "Epirus",
      value: "GRESYE21"
    },
    {
      name: "Ionian Islands",
      value: "GRESYE22"
    },
    {
      name: "North Aegean",
      value: "GRESYE41"
    },
    {
      name: "Peloponnese",
      value: "GRESYE25"
    },
    {
      name: "South Aegean",
      value: "GRESYE42"
    },
    {
      name: "Thessaly",
      value: "GRESYE14"
    },
    {
      name: "West Greece",
      value: "GRESYE23"
    },
    {
      name: "West Macedonia",
      value: "GRESYE13"
    },
    {
      name: "Mount Athos",
      value: "GR736572"
    },
    {
      name: "(other)",
      value: "GR00"
    },
    // =========================================================
    // Greenland
    // =========================================================
    {
      name: "Greenland",
      value: "GL"
    },
    {
      name: "Avannaata (Ilulissat)",
      value: "GL11839537"
    },
    {
      name: "Qeqertalik (Aasiaat)",
      value: "GL11839534"
    },
    {
      name: "Qeqqata (Sisimiut)",
      value: "GL06"
    },
    {
      name: "Sermersooq (Nuuk)",
      value: "GL07"
    },
    {
      name: "Kujalleq (Qaqortoq)",
      value: "GL04"
    },
    {
      name: "(defunct) Qaasuitsup (Avannaata and Qeqertalik)",
      value: "GL05"
    },
    {
      name: "(defunct) Avannaa (Nordgrønland)",
      value: "GL01"
    },
    {
      name: "(defunct) Tunu (Østgrønland)",
      value: "GL02"
    },
    {
      name: "(defunct) Kitaa (Vestgrønland)",
      value: "GL03"
    },
    {
      name: "(other)",
      value: "GL00"
    },
    // =========================================================
    // Grenada
    // =========================================================
    {
      name: "Grenada",
      value: "GD"
    },
    {
      name: "Saint Andrew",
      value: "GD01"
    },
    {
      name: "Saint David",
      value: "GD02"
    },
    {
      name: "Saint George",
      value: "GD03"
    },
    {
      name: "Saint John",
      value: "GD04"
    },
    {
      name: "Saint Mark",
      value: "GD05"
    },
    {
      name: "Saint Patrick",
      value: "GD06"
    },
    {
      name: "Carriacou and Petite Martinique",
      value: "GD10"
    },
    {
      name: "(other)",
      value: "GD00"
    },
    // =========================================================
    // Guadeloupe
    // =========================================================
    {
      name: "Guadeloupe",
      value: "GP"
    },
    {
      name: "Guadeloupe",
      value: "GPGP"
    },
    {
      name: "(other)",
      value: "GP00"
    },
    // =========================================================
    // Guam
    // =========================================================
    {
      name: "Guam",
      value: "GU"
    },
    {
      name: "Agana Heights",
      value: "GUAH"
    },
    {
      name: "Agat",
      value: "GUAT"
    },
    {
      name: "Asan-Maina",
      value: "GUAS"
    },
    {
      name: "Barrigada",
      value: "GUBA"
    },
    {
      name: "Chalan Pago-Ordot",
      value: "GUCP"
    },
    {
      name: "Dededo",
      value: "GUDD"
    },
    {
      name: "Hagatna",
      value: "GUAN"
    },
    {
      name: "Inarajan",
      value: "GUIN"
    },
    {
      name: "Mangilao",
      value: "GUMA"
    },
    {
      name: "Merizo",
      value: "GUME"
    },
    {
      name: "Mongmong-Toto-Maite",
      value: "GUMT"
    },
    {
      name: "Piti",
      value: "GUPI"
    },
    {
      name: "Santa Rita",
      value: "GUSR"
    },
    {
      name: "Sinajana",
      value: "GUSJ"
    },
    {
      name: "Talofofo",
      value: "GUTF"
    },
    {
      name: "Tamuning-Tumon-Harmon",
      value: "GUTM"
    },
    {
      name: "Umatac",
      value: "GUUM"
    },
    {
      name: "Yigo",
      value: "GUYG"
    },
    {
      name: "Yona",
      value: "GUYN"
    },
    {
      name: "(other)",
      value: "GU00"
    },
    // =========================================================
    // Guatemala
    // =========================================================
    {
      name: "Guatemala",
      value: "GT"
    },
    {
      name: "Alta Verapaz (Cobán)",
      value: "GT01"
    },
    {
      name: "Baja Verapaz (Salamá)",
      value: "GT02"
    },
    {
      name: "Chimaltenango (Chimaltenango)",
      value: "GT03"
    },
    {
      name: "Chiquimula (Chiquimula)",
      value: "GT04"
    },
    {
      name: "El Progreso (Guastatoya)",
      value: "GT05"
    },
    {
      name: "Escuintla (Escuintla)",
      value: "GT06"
    },
    {
      name: "Guatemala (Guatemala City) capital",
      value: "GT07"
    },
    {
      name: "Huehuetenango (Huehuetenango)",
      value: "GT08"
    },
    {
      name: "Izabal (Puerto Barrios)",
      value: "GT09"
    },
    {
      name: "Jalapa (Jalapa)",
      value: "GT10"
    },
    {
      name: "Jutiapa (Jutiapa)",
      value: "GT11"
    },
    {
      name: "Petén (Flores)",
      value: "GT12"
    },
    {
      name: "Quetzaltenango (Quetzaltenango)",
      value: "GT13"
    },
    {
      name: "Quiché (Santa Cruz del Quiché)",
      value: "GT14"
    },
    {
      name: "Retalhuleu (Retalhuleu)",
      value: "GT15"
    },
    {
      name: "Sacatepéquez (Antigua Guatemala)",
      value: "GT16"
    },
    {
      name: "San Marcos (San Marcos)",
      value: "GT17"
    },
    {
      name: "Santa Rosa (Cuilapa)",
      value: "GT18"
    },
    {
      name: "Sololá (Sololá)",
      value: "GT19"
    },
    {
      name: "Suchitepéquez (Mazatenango)",
      value: "GT20"
    },
    {
      name: "Totonicapán (Totonicapán)",
      value: "GT21"
    },
    {
      name: "Zacapa (Zacapa)",
      value: "GT22"
    },
    {
      name: "(other)",
      value: "GT00"
    },
    // =========================================================
    // Guernsey
    // =========================================================
    {
      name: "Guernsey",
      value: "GG"
    },
    {
      name: "Guernsey",
      value: "GG00"
    },
    {
      name: "Alderney island (Saint Anne)",
      value: "GG8989934"
    },
    {
      name: "Castel (Guernsey island)",
      value: "GG6417229"
    },
    {
      name: "Forest (Guernsey island)",
      value: "GG6417223"
    },
    {
      name: "Saint Andrew (Guernsey island)",
      value: "GG6417226"
    },
    {
      name: "Saint Martin (Guernsey island)",
      value: "GG6417224"
    },
    {
      name: "Saint Peter Port (Guernsey island) capital, Herm and Jethou",
      value: "GG6417228"
    },
    {
      name: "Saint Pierre du Bois (Guernsey island)",
      value: "GG6417213"
    },
    {
      name: "Saint Sampson (Guernsey island)",
      value: "GG6417233"
    },
    {
      name: "Saint Saviour (Guernsey island)",
      value: "GG6417215"
    },
    {
      name: "Torteval (Guernsey island)",
      value: "GG6417214"
    },
    {
      name: "Vale (Guernsey island)",
      value: "GG6417230"
    },
    // =========================================================
    // Guinea
    // =========================================================
    {
      name: "Guinea",
      value: "GN"
    },
    {
      name: "Boke",
      value: "GNB"
    },
    {
      name: "Conakry (capital)",
      value: "GN04"
    },
    {
      name: "Faranah",
      value: "GNF"
    },
    {
      name: "Kankan",
      value: "GNK"
    },
    {
      name: "Kindia",
      value: "GND"
    },
    {
      name: "Labé",
      value: "GNL"
    },
    {
      name: "Mamou",
      value: "GNM"
    },
    {
      name: "Nzerekore",
      value: "GNN"
    },
    {
      name: "(other)",
      value: "GN00"
    },
    // =========================================================
    // Guinea-Bissau
    // =========================================================
    {
      name: "Guinea-Bissau",
      value: "GW"
    },
    {
      name: "Bafatá",
      value: "GW01"
    },
    {
      name: "Quinara",
      value: "GW02"
    },
    {
      name: "Oio",
      value: "GW04"
    },
    {
      name: "Bolama",
      value: "GW05"
    },
    {
      name: "Cacheu",
      value: "GW06"
    },
    {
      name: "Tombali",
      value: "GW07"
    },
    {
      name: "Gabú",
      value: "GW10"
    },
    {
      name: "Bissau",
      value: "GW11"
    },
    {
      name: "Biombo",
      value: "GW12"
    },
    {
      name: "(other)",
      value: "GW00"
    },
    // =========================================================
    // Guyana
    // =========================================================
    {
      name: "Guyana",
      value: "GY"
    },
    {
      name: "Barima-Waini",
      value: "GY10"
    },
    {
      name: "Cuyuni-Mazaruni",
      value: "GY11"
    },
    {
      name: "Demerara-Mahaica",
      value: "GY12"
    },
    {
      name: "East Berbice-Corentyne",
      value: "GY13"
    },
    {
      name: "Essequibo Islands-West Demerara",
      value: "GY14"
    },
    {
      name: "Mahaica-Berbice",
      value: "GY15"
    },
    {
      name: "Pomeroon-Supenaam",
      value: "GY16"
    },
    {
      name: "Potaro-Siparuni",
      value: "GY17"
    },
    {
      name: "Upper Demerara-Berbice",
      value: "GY18"
    },
    {
      name: "Upper Takutu-Upper Essequibo",
      value: "GY19"
    },
    {
      name: "(other)",
      value: "GY00"
    },
    // =========================================================
    // Haiti
    // =========================================================
    {
      name: "Haiti",
      value: "HT"
    },
    {
      name: "Nord-Ouest",
      value: "HT03"
    },
    {
      name: "Artibonite",
      value: "HT06"
    },
    {
      name: "Centre",
      value: "HT07"
    },
    {
      name: "Nord",
      value: "HT09"
    },
    {
      name: "Nord-Est",
      value: "HT10"
    },
    {
      name: "Ouest (Port-au-Prince, capital)",
      value: "HT11"
    },
    {
      name: "Sud",
      value: "HT12"
    },
    {
      name: "Sud-Est",
      value: "HT13"
    },
    {
      name: "Grand’Anse",
      value: "HT14"
    },
    {
      name: "Nippes",
      value: "HT15"
    },
    {
      name: "(other)",
      value: "HT00"
    },
    // =========================================================
    // Heard Island and McDonald Islands (Antarctica)
    // leave as "search entire country": some 00, others have no Admin1 code
    // =========================================================
    {
      name: "Heard Island and McDonald Islands",
      value: "HM"
    },
    // =========================================================
    // Honduras
    // =========================================================
    {
      name: "Honduras",
      value: "HN"
    },
    {
      name: "Atlántida",
      value: "HN01"
    },
    {
      name: "Choluteca",
      value: "HN02"
    },
    {
      name: "Colón",
      value: "HN03"
    },
    {
      name: "Comayagua",
      value: "HN04"
    },
    {
      name: "Copán",
      value: "HN05"
    },
    {
      name: "Cortés",
      value: "HN06"
    },
    {
      name: "El Paraíso",
      value: "HN07"
    },
    {
      name: "Francisco Morazán (Tegucigalpa, capital)",
      value: "HN08"
    },
    {
      name: "Gracias a Dios",
      value: "HN09"
    },
    {
      name: "Intibucá",
      value: "HN10"
    },
    {
      name: "Islas de la Bahía",
      value: "HN11"
    },
    {
      name: "La Paz",
      value: "HN12"
    },
    {
      name: "Lempira",
      value: "HN13"
    },
    {
      name: "Ocotepeque",
      value: "HN14"
    },
    {
      name: "Olancho",
      value: "HN15"
    },
    {
      name: "Santa Bárbara",
      value: "HN16"
    },
    {
      name: "Valle",
      value: "HN17"
    },
    {
      name: "Yoro",
      value: "HN18"
    },
    {
      name: "(other)",
      value: "HN00"
    },
    // =========================================================
    // Hong Kong
    // =========================================================
    {
      name: "Hong Kong",
      value: "HK"
    },
    {
      name: "Central and Western District",
      value: "HKHCW"
    },
    {
      name: "Eastern",
      value: "HKHEA"
    },
    {
      name: "Islands District",
      value: "HKNIS"
    },
    {
      name: "Kowloon City",
      value: "HKKKC"
    },
    {
      name: "Kwai Tsing",
      value: "HKNKT"
    },
    {
      name: "Kwon Tong",
      value: "HKKKT"
    },
    {
      name: "North",
      value: "HKNNO"
    },
    {
      name: "Sai Kung",
      value: "HKNSK"
    },
    {
      name: "Sha Tin",
      value: "HKNST"
    },
    {
      name: "Sham Shui Po",
      value: "HKKSS"
    },
    {
      name: "Southern",
      value: "HKHSO"
    },
    {
      name: "Tai Po",
      value: "HKNTP"
    },
    {
      name: "Tsuen Wan",
      value: "HKNTW"
    },
    {
      name: "Tuen Mun",
      value: "HKNTM"
    },
    {
      name: "Wan Chai",
      value: "HKHWC"
    },
    {
      name: "Wong Tai Sin",
      value: "HKKWT"
    },
    {
      name: "Yau Tsim Mong",
      value: "HKKYT"
    },
    {
      name: "Yuen Long",
      value: "HKNYL"
    },
    {
      name: "(other)",
      value: "HK00"
    },
    // =========================================================
    // Hungary
    // =========================================================
    {
      name: "Hungary",
      value: "HU"
    },
    {
      name: "Bács-Kiskun",
      value: "HU01"
    },
    {
      name: "Baranya",
      value: "HU02"
    },
    {
      name: "Bekes",
      value: "HU03"
    },
    {
      name: "Borsod-Abaúj-Zemplén",
      value: "HU04"
    },
    {
      name: "Budapest (capital)",
      value: "HU05"
    },
    {
      name: "Csongrád",
      value: "HU06"
    },
    {
      name: "Fejér",
      value: "HU08"
    },
    {
      name: "Győr-Moson-Sopron",
      value: "HU09"
    },
    {
      name: "Hajdú-Bihar",
      value: "HU10"
    },
    {
      name: "Heves",
      value: "HU11"
    },
    {
      name: "Komárom-Esztergom",
      value: "HU12"
    },
    {
      name: "Nógrád",
      value: "HU14"
    },
    {
      name: "Pest",
      value: "HU16"
    },
    {
      name: "Somogy",
      value: "HU17"
    },
    {
      name: "Szabolcs-Szatmár-Bereg",
      value: "HU18"
    },
    {
      name: "Jász-Nagykun-Szolnok",
      value: "HU20"
    },
    {
      name: "Tolna",
      value: "HU21"
    },
    {
      name: "Vas",
      value: "HU22"
    },
    {
      name: "Veszprém",
      value: "HU23"
    },
    {
      name: "Zala",
      value: "HU24"
    },
    {
      name: "(other)",
      value: "HU00"
    },
    // =========================================================
    // Iceland
    // =========================================================
    {
      name: "Iceland",
      value: "IS"
    },
    {
      name: "East (Austurland)",
      value: "IS38"
    },
    {
      name: "Capital Region (Höfuðborgarsvæðið) Reykjavík, capital",
      value: "IS39"
    },
    {
      name: "Northeast (Norðurland eystra)",
      value: "IS40"
    },
    {
      name: "Northwest (Norðurland vestra)",
      value: "IS41"
    },
    {
      name: "South (Suðurland)",
      value: "IS42"
    },
    {
      name: "Southern Peninsula (Suðurnes)",
      value: "IS43"
    },
    {
      name: "Westfjords (Vestfirðir)",
      value: "IS44"
    },
    {
      name: "West (Vesturland)",
      value: "IS45"
    },
    {
      name: "(other)",
      value: "IS00"
    },
    // =========================================================
    // India
    // =========================================================
    {
      name: "India",
      value: "IN"
    },
    {
      name: "Andaman and Nicobar Islands",
      value: "IN01"
    },
    {
      name: "Andhra Pradesh",
      value: "IN02"
    },
    {
      name: "Assam",
      value: "IN03"
    },
    {
      name: "Chandigarh",
      value: "IN05"
    },
    {
      name: "Dadra and Nagar Haveli",
      value: "IN06"
    },
    {
      name: "Delhi",
      value: "IN07"
    },
    {
      name: "Gujarat",
      value: "IN09"
    },
    {
      name: "Haryana",
      value: "IN10"
    },
    {
      name: "Himachal Pradesh",
      value: "IN11"
    },
    {
      name: "Jammu and Kashmir",
      value: "IN12"
    },
    {
      name: "Kerala",
      value: "IN13"
    },
    {
      name: "Lakshadweep",
      value: "IN14"
    },
    {
      name: "Maharashtra",
      value: "IN16"
    },
    {
      name: "Manipur",
      value: "IN17"
    },
    {
      name: "Meghalaya",
      value: "IN18"
    },
    {
      name: "Karnataka",
      value: "IN19"
    },
    {
      name: "Nagaland",
      value: "IN20"
    },
    {
      name: "Odisha",
      value: "IN21"
    },
    {
      name: "Puducherry",
      value: "IN22"
    },
    {
      name: "Punjab",
      value: "IN23"
    },
    {
      name: "Rajasthan",
      value: "IN24"
    },
    {
      name: "Tamil Nadu",
      value: "IN25"
    },
    {
      name: "Tripura",
      value: "IN26"
    },
    {
      name: "West Bengal",
      value: "IN28"
    },
    {
      name: "Sikkim",
      value: "IN29"
    },
    {
      name: "Arunachal Pradesh",
      value: "IN30"
    },
    {
      name: "Mizoram",
      value: "IN31"
    },
    {
      name: "Daman and Diu",
      value: "IN32"
    },
    {
      name: "Goa",
      value: "IN33"
    },
    {
      name: "Bihar",
      value: "IN34"
    },
    {
      name: "Madhya Pradesh",
      value: "IN35"
    },
    {
      name: "Uttar Pradesh",
      value: "IN36"
    },
    {
      name: "Chhattisgarh",
      value: "IN37"
    },
    {
      name: "Jharkhand",
      value: "IN38"
    },
    {
      name: "Uttarakhand",
      value: "IN39"
    },
    {
      name: "Telangana",
      value: "IN40"
    },
    // =========================================================
    // Indonesia
    // =========================================================
    {
      name: "Indonesia",
      value: "ID"
    },
    {
      name: "Aceh (Nanggroe Aceh Darussalam)",
      value: "ID01"
    },
    {
      name: "Bali (Bali)",
      value: "ID02"
    },
    {
      name: "Bengkulu (Bengkulu)",
      value: "ID03"
    },
    {
      name: "Jakarta (Daerah Khusus Ibukota Jakarta)",
      value: "ID04"
    },
    {
      name: "Jambi (Jambi)",
      value: "ID05"
    },
    {
      name: "Central Java (Jawa Tengah)",
      value: "ID07"
    },
    {
      name: "East Java (Jawa Timur)",
      value: "ID08"
    },
    {
      name: "Yogyakarta (Daerah Istimewa Yogyakarta)",
      value: "ID10"
    },
    {
      name: "West Kalimantan (Kalimantan Barat)",
      value: "ID11"
    },
    {
      name: "South Kalimantan (Kalimantan Selatan)",
      value: "ID12"
    },
    {
      name: "Central Kalimantan (Kalimantan Tengah)",
      value: "ID13"
    },
    {
      name: "East Kalimantan (Kalimantan Timur)",
      value: "ID14"
    },
    {
      name: "Lampung (Lampung)",
      value: "ID15"
    },
    {
      name: "West Nusa Tenggara (Nusa Tenggara Barat)",
      value: "ID17"
    },
    {
      name: "East Nusa Tenggara (Nusa Tenggara Timur)",
      value: "ID18"
    },
    {
      name: "Central Sulawesi (Sulawesi Tengah)",
      value: "ID21"
    },
    {
      name: "Southeast Sulawesi (Sulawesi Tenggara)",
      value: "ID22"
    },
    {
      name: "West Sumatra (Sumatera Barat)",
      value: "ID24"
    },
    {
      name: "North Sumatra (Sumatera Utara)",
      value: "ID26"
    },
    {
      name: "Maluku (Spice Islands)",
      value: "ID28"
    },
    {
      name: "North Maluku (Maluku Utara, Spice Islands)",
      value: "ID29"
    },
    {
      name: "West Java (Jawa Barat)",
      value: "ID30"
    },
    {
      name: "North Sulawesi (Sulawesi Utara)",
      value: "ID31"
    },
    {
      name: "South Sumatra (Sumatera Selatan)",
      value: "ID32"
    },
    {
      name: "Banten (Banten)",
      value: "ID33"
    },
    {
      name: "Gorontalo (Hulontalo)",
      value: "ID34"
    },
    {
      name: "Bangka Belitung Islands (Kepulauan Bangka Belitung)",
      value: "ID35"
    },
    {
      name: "Papua (Provinsi Papua)",
      value: "ID36"
    },
    {
      name: "Riau (Provinsi Riau)",
      value: "ID37"
    },
    {
      name: "South Sulawesi (Sulawesi Selatan)",
      value: "ID38"
    },
    {
      name: "West Papua (Papua Barat)",
      value: "ID39"
    },
    {
      name: "Riau Islands (Kepulauan Riau)",
      value: "ID40"
    },
    {
      name: "West Sulawesi (Sulawesi Barat)",
      value: "ID41"
    },
    {
      name: "North Kalimantan (Kalimantan Utara)",
      value: "ID42"
    },
    {
      name: "(other)",
      value: "ID00"
    },
    // =========================================================
    // Iran
    // =========================================================
    {
      name: "Iran",
      value: "IR"
    },
    {
      name: "West Azerbaijan (Āz̄arbāyjān-e Gharbī)",
      value: "IR01"
    },
    {
      name: "Chaharmahal and Bakhtiari (Chahār Maḩāl va Bakhtīārī)",
      value: "IR03"
    },
    {
      name: "Sistan and Baluchestan (Sīstān va Balūchestān)",
      value: "IR04"
    },
    {
      name: "Kohgiluyeh and Boyer-Ahmad (Kohgīlūyeh va Bowyer Aḩmad)",
      value: "IR05"
    },
    {
      name: "Fars (Fārs)",
      value: "IR07"
    },
    {
      name: "Gilan (Gīlān)",
      value: "IR08"
    },
    {
      name: "Hamadan (Hamadān)",
      value: "IR09"
    },
    {
      name: "Ilam (Īlām)",
      value: "IR10"
    },
    {
      name: "Hormozgan (Hormozgān)",
      value: "IR11"
    },
    {
      name: "Kermanshah (Kermānshāh)",
      value: "IR13"
    },
    {
      name: "Khuzestan (Khūzestān)",
      value: "IR15"
    },
    {
      name: "Kordestan (Kordestān)",
      value: "IR16"
    },
    {
      name: "Bushehr (Būshehr)",
      value: "IR22"
    },
    {
      name: "Lorestan (Lorestān)",
      value: "IR23"
    },
    {
      name: "Semnan (Semnān)",
      value: "IR25"
    },
    {
      name: "Tehran (Tehrān)",
      value: "IR26"
    },
    {
      name: "Isfahan (Eşfahān)",
      value: "IR28"
    },
    {
      name: "Kerman (Kermān)",
      value: "IR29"
    },
    {
      name: "Ardabil (Ardabīl)",
      value: "IR32"
    },
    {
      name: "Āz̄arbāyjān-e Sharqī",
      value: "IR33"
    },
    {
      name: "Markazi (Markazī)",
      value: "IR34"
    },
    {
      name: "Mazandaran (Māzandarān)",
      value: "IR35"
    },
    {
      name: "Zanjan (Zanjān)",
      value: "IR36"
    },
    {
      name: "Golestan (Golestān)",
      value: "IR37"
    },
    {
      name: "Qazvin (Qazvīn)",
      value: "IR38"
    },
    {
      name: "Qom (Qom)",
      value: "IR39"
    },
    {
      name: "Yazd (Yazd)",
      value: "IR40"
    },
    {
      name: "South Khorasan (Khorāsān-e Jonūbī)",
      value: "IR41"
    },
    {
      name: "Razavi Khorasan (Khorāsān-e Raẕavī)",
      value: "IR42"
    },
    {
      name: "North Khorasan (Khorāsān-e Shomālī)",
      value: "IR43"
    },
    {
      name: "Alborz (Alborz)",
      value: "IR44"
    },
    {
      name: "(other)",
      value: "IR00"
    },
    // =========================================================
    // Iraq
    // =========================================================
    {
      name: "Iraq",
      value: "IQ"
    },
    {
      name: "Anbar (Anbār)",
      value: "IQ01"
    },
    {
      name: "Basra (Başrah)",
      value: "IQ02"
    },
    {
      name: "Muthanna (al Muthanná)",
      value: "IQ03"
    },
    {
      name: "Qadisiyah (Al Qādisīyah)",
      value: "IQ04"
    },
    {
      name: "Sulaymaniyah (As Sulaymānīyah)",
      value: "IQ05"
    },
    {
      name: "Babil (Bābil)",
      value: "IQ06"
    },
    {
      name: "Baghdad (Baghdād)",
      value: "IQ07"
    },
    {
      name: "Dohuk (Dahūk)",
      value: "IQ08"
    },
    {
      name: "Dhi Qar (Dhī Qār)",
      value: "IQ09"
    },
    {
      name: "Diyala (Diyālá)",
      value: "IQ10"
    },
    {
      name: "Erbil (Arbīl)",
      value: "IQ11"
    },
    {
      name: "Karbala (Karbalā)",
      value: "IQ12"
    },
    {
      name: "Kirkuk (Kirkūk)",
      value: "IQ13"
    },
    {
      name: "Maysan (Maysān)",
      value: "IQ14"
    },
    {
      name: "Nineveh (Nīnawá)",
      value: "IQ15"
    },
    {
      name: "Wasit (Wāsiţ)",
      value: "IQ16"
    },
    {
      name: "Najaf (An Najaf)",
      value: "IQ17"
    },
    {
      name: "Saladin (Salah ad Din)",
      value: "IQ18"
    },
    {
      name: "(other)",
      value: "IQ00"
    },
    // =========================================================
    // Ireland
    // =========================================================
    {
      name: "Ireland",
      value: "IE"
    },
    {
      name: "Leinster",
      value: "IEL"
    },
    {
      name: "Ulster",
      value: "IEU"
    },
    {
      name: "Munster",
      value: "IEM"
    },
    {
      name: "Connaught",
      value: "IEC"
    },
    // =========================================================
    // Isle of Man
    // =========================================================
    {
      name: "Isle of Man",
      value: "IM"
    },
    {
      name: "Andreas",
      value: "IM9782164"
    },
    {
      name: "Arbory",
      value: "IM9782165"
    },
    {
      name: "Ballaugh",
      value: "IM9782166"
    },
    {
      name: "Braddan",
      value: "IM9782167"
    },
    {
      name: "Bride",
      value: "IM9782168"
    },
    {
      name: "Castletown",
      value: "IM9782169"
    },
    {
      name: "Douglas",
      value: "IM9782170"
    },
    {
      name: "Jurby",
      value: "IM9782172"
    },
    {
      name: "Laxey",
      value: "IM9782173"
    },
    {
      name: "Lezayre",
      value: "IM9782176"
    },
    {
      name: "Malew",
      value: "IM9782182"
    },
    {
      name: "Marown",
      value: "IM9782183"
    },
    {
      name: "Maughold",
      value: "IM9782184"
    },
    {
      name: "Michael",
      value: "IM9782185"
    },
    {
      name: "Onchan",
      value: "IM9782186"
    },
    {
      name: "Patrick",
      value: "IM9782187"
    },
    {
      name: "Peel",
      value: "IM9782188"
    },
    {
      name: "Port Erin",
      value: "IM9782189"
    },
    {
      name: "Port St Mary",
      value: "IM9782190"
    },
    {
      name: "Ramsey",
      value: "IM9782191"
    },
    {
      name: "Rushen",
      value: "IM9782192"
    },
    {
      name: "Santon",
      value: "IM9782193"
    },
    {
      name: "(other)",
      value: "IM00"
    },
    // =========================================================
    // Israel
    // =========================================================
    {
      name: "Israel",
      value: "IL"
    },
    {
      name: "Southern District",
      value: "IL01"
    },
    {
      name: "Central District",
      value: "IL02"
    },
    {
      name: "Northern District",
      value: "IL03"
    },
    {
      name: "Haifa",
      value: "IL04"
    },
    {
      name: "Tel Aviv",
      value: "IL05"
    },
    {
      name: "Jerusalem",
      value: "IL06"
    },
    {
      name: "Judea and Samaria Area",
      value: "ILWE"
    },
    {
      name: "(other)",
      value: "IL00"
    },
    // =========================================================
    // Italy
    // =========================================================
    {
      name: "Italy (Italia)",
      value: "IT"
    },
    {
      name: "Abruzzo (Abruzzo)",
      value: "IT01"
    },
    {
      name: "Aosta Valley (Valle d'Aosta)",
      value: "IT19"
    },
    {
      name: "Apulia (Puglia)",
      value: "IT13"
    },
    {
      name: "Basilicate (Basilicata)",
      value: "IT02"
    },
    {
      name: "Calabria (Calabria)",
      value: "IT03"
    },
    {
      name: "Campania (Campania)",
      value: "IT04"
    },
    {
      name: "Emilia-Romagna (Emilia-Romagna)",
      value: "IT05"
    },
    {
      name: "Friuli Venezia Giulia (Friuli Venezia Giulia)",
      value: "IT06"
    },
    {
      name: "Latium (Lazio)",
      value: "IT07"
    },
    {
      name: "Liguria (Liguria)",
      value: "IT08"
    },
    {
      name: "Lombardy (Lombardia)",
      value: "IT09"
    },
    {
      name: "The Marches (Marche)",
      value: "IT10"
    },
    {
      name: "Molise (Molise)",
      value: "IT11"
    },
    {
      name: "Piedmont (Piemonte)",
      value: "IT12"
    },
    {
      name: "Sardinia (Sardegna)",
      value: "IT14"
    },
    {
      name: "Sicily (Sicilia)",
      value: "IT15"
    },
    {
      name: "Trentino-South Tyrol (Trentino-Alto Adige)",
      value: "IT17"
    },
    {
      name: "Tuscany (Toscana)",
      value: "IT16"
    },
    {
      name: "Umbria (Umbria)",
      value: "IT18"
    },
    {
      name: "Veneto (Veneto)",
      value: "IT20"
    },
    {
      name: "(other)",
      value: "IT00"
    },
    // =========================================================
    // Ivory Coast (Côte d'Ivoire)
    // =========================================================
    {
      name: "Ivory Coast (Côte d'Ivoire)",
      value: "CI"
    },
    {
      name: "Abidjan",
      value: "CI93"
    },
    {
      name: "Bas-Sassandra",
      value: "CI76"
    },
    {
      name: "Comoé",
      value: "CI94"
    },
    {
      name: "Denguélé",
      value: "CI77"
    },
    {
      name: "Gôh-Djiboua",
      value: "CI95"
    },
    {
      name: "Lacs",
      value: "CI81"
    },
    {
      name: "Lagunes",
      value: "CI82"
    },
    {
      name: "Montagnes",
      value: "CI78"
    },
    {
      name: "Sassandra-Marahoué",
      value: "CI96"
    },
    {
      name: "Savanes",
      value: "CI87"
    },
    {
      name: "Vallée du Bandama",
      value: "CI90"
    },
    {
      name: "Woroba",
      value: "CI97"
    },
    {
      name: "Yamoussoukro",
      value: "CI98"
    },
    {
      name: "Zanzan",
      value: "CI92"
    },
    {
      name: "(other)",
      value: "CI00"
    },
    // =========================================================
    // Jamaica
    // =========================================================
    {
      name: "Jamaica",
      value: "JM"
    },
    {
      name: "Clarendon",
      value: "JM01"
    },
    {
      name: "Hanover",
      value: "JM02"
    },
    {
      name: "Manchester",
      value: "JM04"
    },
    {
      name: "Portland",
      value: "JM07"
    },
    {
      name: "Saint Andrew",
      value: "JM08"
    },
    {
      name: "Saint Ann",
      value: "JM09"
    },
    {
      name: "Saint Catherine",
      value: "JM10"
    },
    {
      name: "Saint Elizabeth",
      value: "JM11"
    },
    {
      name: "Saint James",
      value: "JM12"
    },
    {
      name: "Saint Mary",
      value: "JM13"
    },
    {
      name: "Saint Thomas",
      value: "JM14"
    },
    {
      name: "Trelawny",
      value: "JM15"
    },
    {
      name: "Westmoreland",
      value: "JM16"
    },
    {
      name: "Kingston",
      value: "JM17"
    },
    {
      name: "(other)",
      value: "JM00"
    },
    // =========================================================
    // Japan
    // =========================================================
    {
      name: "Japan",
      value: "JP"
    },
    {
      name: "Aichi",
      value: "JP01"
    },
    {
      name: "Akita",
      value: "JP02"
    },
    {
      name: "Aomori",
      value: "JP03"
    },
    {
      name: "Chiba",
      value: "JP04"
    },
    {
      name: "Ehime",
      value: "JP05"
    },
    {
      name: "Fukui",
      value: "JP06"
    },
    {
      name: "Fukuoka",
      value: "JP07"
    },
    {
      name: "Fukushima",
      value: "JP08"
    },
    {
      name: "Gifu",
      value: "JP09"
    },
    {
      name: "Gunma",
      value: "JP10"
    },
    {
      name: "Hiroshima",
      value: "JP11"
    },
    {
      name: "Hokkaidō",
      value: "JP12"
    },
    {
      name: "Hyōgo",
      value: "JP13"
    },
    {
      name: "Ibaraki",
      value: "JP14"
    },
    {
      name: "Ishikawa",
      value: "JP15"
    },
    {
      name: "Iwate",
      value: "JP16"
    },
    {
      name: "Kagawa",
      value: "JP17"
    },
    {
      name: "Kagoshima",
      value: "JP18"
    },
    {
      name: "Kanagawa",
      value: "JP19"
    },
    {
      name: "Kōchi",
      value: "JP20"
    },
    {
      name: "Kumamoto",
      value: "JP21"
    },
    {
      name: "Kyōto",
      value: "JP22"
    },
    {
      name: "Mie",
      value: "JP23"
    },
    {
      name: "Miyagi",
      value: "JP24"
    },
    {
      name: "Miyazaki",
      value: "JP25"
    },
    {
      name: "Nagano",
      value: "JP26"
    },
    {
      name: "Nagasaki",
      value: "JP27"
    },
    {
      name: "Nara",
      value: "JP28"
    },
    {
      name: "Niigata",
      value: "JP29"
    },
    {
      name: "Ōita",
      value: "JP30"
    },
    {
      name: "Okayama",
      value: "JP31"
    },
    {
      name: "Ōsaka",
      value: "JP32"
    },
    {
      name: "Saga",
      value: "JP33"
    },
    {
      name: "Saitama",
      value: "JP34"
    },
    {
      name: "Shiga",
      value: "JP35"
    },
    {
      name: "Shimane",
      value: "JP36"
    },
    {
      name: "Shizuoka",
      value: "JP37"
    },
    {
      name: "Tochigi",
      value: "JP38"
    },
    {
      name: "Tokushima",
      value: "JP39"
    },
    {
      name: "Tōkyō (capital)",
      value: "JP40"
    },
    {
      name: "Tottori",
      value: "JP41"
    },
    {
      name: "Toyama",
      value: "JP42"
    },
    {
      name: "Wakayama",
      value: "JP43"
    },
    {
      name: "Yamagata",
      value: "JP44"
    },
    {
      name: "Yamaguchi",
      value: "JP45"
    },
    {
      name: "Yamanashi",
      value: "JP46"
    },
    {
      name: "Okinawa",
      value: "JP47"
    },
    // =========================================================
    // Jersey
    // NO RESULTS FOR JERSEY AS A COUNTRY (see UK)
    // =========================================================
    // {
    //   name: "Jersey",
    //   value: "JE"
    // },
    // =========================================================
    // Jordan
    // =========================================================
    {
      name: "Jordan",
      value: "JO"
    },
    {
      name: "Balqa",
      value: "JO02"
    },
    {
      name: "Karak",
      value: "JO09"
    },
    {
      name: "Tafilah",
      value: "JO12"
    },
    {
      name: "Mafraq",
      value: "JO15"
    },
    {
      name: "Amman (capital)",
      value: "JO16"
    },
    {
      name: "Zarqa",
      value: "JO17"
    },
    {
      name: "Irbid",
      value: "JO18"
    },
    {
      name: "Ma'an",
      value: "JO19"
    },
    {
      name: "Ajlun",
      value: "JO20"
    },
    {
      name: "Aqaba",
      value: "JO21"
    },
    {
      name: "Jerash",
      value: "JO22"
    },
    {
      name: "Madaba",
      value: "JO23"
    },
    // =========================================================
    // Kazakhstan
    // =========================================================
    {
      name: "Kazakhstan",
      value: "KZ"
    },
    {
      name: "Almaty Oblysy",
      value: "KZ01"
    },
    {
      name: "Almaty Qalasy",
      value: "KZ02"
    },
    {
      name: "Aqmola Oblysy",
      value: "KZ03"
    },
    {
      name: "Aqtöbe (Aktyubinskaya Oblast)",
      value: "KZ04"
    },
    {
      name: "Astana Qalasy",
      value: "KZ05"
    },
    {
      name: "Atyraū Oblysy",
      value: "KZ06"
    },
    {
      name: "Batys Qazaqstan Oblysy",
      value: "KZ07"
    },
    {
      name: "Baikonur (Bayqongyr Qalasy)",
      value: "KZ08"
    },
    {
      name: "Mangghystaū (Mangistauskaya Oblast’)",
      value: "KZ09"
    },
    {
      name: "Turkistan (Yuzhno-Kazakhstanskaya Oblast’)",
      value: "KZ10"
    },
    {
      name: "Pavlodar Oblysy",
      value: "KZ11"
    },
    {
      name: "Karaganda (Qaraghandy Oblysy)",
      value: "KZ12"
    },
    {
      name: "Qostanay Oblysy",
      value: "KZ13"
    },
    {
      name: "Qyzylorda Oblysy",
      value: "KZ14"
    },
    {
      name: "East Kazakhstan (Shyghys Qazaqstan Oblysy)",
      value: "KZ15"
    },
    {
      name: "Soltüstik Qazaqstan (Severo-Kazakhstanskaya Oblast’)",
      value: "KZ16"
    },
    {
      name: "Zhambyl Oblysy",
      value: "KZ17"
    },
    {
      name: "Shymkent",
      value: "KZ1537272"
    },
    {
      name: "(other)",
      value: "KZ00"
    },
    // =========================================================
    // Kenya
    // =========================================================
    {
      name: "Kenya",
      value: "KE"
    },
    {
      name: "Central",
      value: "KE01"
    },
    {
      name: "Coast",
      value: "KE02"
    },
    {
      name: "Eastern",
      value: "KE03"
    },
    {
      name: "Nairobi",
      value: "KE05"
    },
    {
      name: "North Eastern",
      value: "KE06"
    },
    {
      name: "Nyanza",
      value: "KE07"
    },
    {
      name: "Rift Valley",
      value: "KE08"
    },
    {
      name: "Western",
      value: "KE09"
    },
    {
      name: "Baringo",
      value: "KE10"
    },
    {
      name: "Bomet",
      value: "KE11"
    },
    {
      name: "Bungoma",
      value: "KE12"
    },
    {
      name: "Busia",
      value: "KE13"
    },
    {
      name: "Elegeyo-Marakwet",
      value: "KE14"
    },
    {
      name: "Embu",
      value: "KE15"
    },
    {
      name: "Garissa",
      value: "KE16"
    },
    {
      name: "Homa Bay",
      value: "KE17"
    },
    {
      name: "Isiolo",
      value: "KE18"
    },
    {
      name: "Kajiado",
      value: "KE19"
    },
    {
      name: "Kakamega",
      value: "KE20"
    },
    {
      name: "Kericho",
      value: "KE21"
    },
    {
      name: "Kiambu",
      value: "KE22"
    },
    {
      name: "Kilifi",
      value: "KE23"
    },
    {
      name: "Kirinyaga",
      value: "KE24"
    },
    {
      name: "Kisii",
      value: "KE25"
    },
    {
      name: "Kisumu",
      value: "KE26"
    },
    {
      name: "Kitui",
      value: "KE27"
    },
    {
      name: "Kwale",
      value: "KE28"
    },
    {
      name: "Laikipia",
      value: "KE29"
    },
    {
      name: "Lamu",
      value: "KE30"
    },
    {
      name: "Machakos",
      value: "KE31"
    },
    {
      name: "Makueni",
      value: "KE32"
    },
    {
      name: "Mandera",
      value: "KE33"
    },
    {
      name: "Marsabit",
      value: "KE34"
    },
    {
      name: "Meru",
      value: "KE35"
    },
    {
      name: "Migori",
      value: "KE36"
    },
    {
      name: "Mombasa",
      value: "KE37"
    },
    {
      name: "Murang'A",
      value: "KE38"
    },
    {
      name: "Nakuru",
      value: "KE39"
    },
    {
      name: "Nandi",
      value: "KE40"
    },
    {
      name: "Narok",
      value: "KE41"
    },
    {
      name: "Nyamira",
      value: "KE42"
    },
    {
      name: "Nyandarua",
      value: "KE43"
    },
    {
      name: "Nyeri",
      value: "KE44"
    },
    {
      name: "Samburu",
      value: "KE45"
    },
    {
      name: "Siaya",
      value: "KE46"
    },
    {
      name: "Taita Taveta",
      value: "KE47"
    },
    {
      name: "Tana River",
      value: "KE48"
    },
    {
      name: "Tharaka - Nithi",
      value: "KE49"
    },
    {
      name: "Trans Nzoia",
      value: "KE50"
    },
    {
      name: "Turkana",
      value: "KE51"
    },
    {
      name: "Uasin Gishu",
      value: "KE52"
    },
    {
      name: "Vihiga",
      value: "KE53"
    },
    {
      name: "Wajir",
      value: "KE54"
    },
    {
      name: "West Pokot",
      value: "KE55"
    },
    {
      name: "(other)",
      value: "KE00"
    },
    // =========================================================
    // Kiribati
    // =========================================================
    {
      name: "Kiribati",
      value: "KI"
    },
    {
      name: "Gilbert Islands",
      value: "KI01"
    },
    {
      name: "Line Islands",
      value: "KI02"
    },
    {
      name: "Phoenix Islands",
      value: "KI03"
    },
    {
      name: "(other)",
      value: "KI00"
    },
    // =========================================================
    // Kosovo
    // =========================================================
    {
      name: "Kosovo",
      value: "XK"
    },
    {
      name: "Ferizaj",
      value: "XK10096138"
    },
    {
      name: "Gjakova",
      value: "XK10096859"
    },
    {
      name: "Gjilan",
      value: "XK10097357"
    },
    {
      name: "Mitrovica",
      value: "XK10097358"
    },
    {
      name: "Pec",
      value: "XK10097359"
    },
    {
      name: "Pristina",
      value: "XK10097360"
    },
    {
      name: "Prizren",
      value: "XK10097361"
    },
    {
      name: "(other)",
      value: "XK00"
    },
    // =========================================================
    // North Korea
    // =========================================================
    {
      name: "North Korea",
      value: "KP"
    },
    {
      name: "Chagang-do",
      value: "KP01"
    },
    {
      name: "Hamnam (Hamgyŏng-namdo)",
      value: "KP03"
    },
    {
      name: "Hwanghae-namdo",
      value: "KP06"
    },
    {
      name: "Hwanghae-bukto",
      value: "KP07"
    },
    {
      name: "Kangwŏn-do",
      value: "KP09"
    },
    {
      name: "P'yŏngan-bukto",
      value: "KP11"
    },
    {
      name: "Pyongyang",
      value: "KP12"
    },
    {
      name: "Yanggang-do",
      value: "KP13"
    },
    {
      name: "South Pyongan (P’yŏngan-namdo)",
      value: "KP15"
    },
    {
      name: "Hambuk (Hamgyŏng-bukto)",
      value: "KP17"
    },
    {
      name: "Rason (Nasŏn-si)",
      value: "KP18"
    },
    {
      name: "(other)",
      value: "KP00"
    },
    // =========================================================
    // South Korea
    // =========================================================
    {
      name: "South Korea",
      value: "KR"
    },
    {
      name: "Jeju-do (Jeju-teukbyeoljachido)",
      value: "KR01"
    },
    {
      name: "Jeollabuk-do",
      value: "KR03"
    },
    {
      name: "North Chungcheong (Chungcheongbuk-do)",
      value: "KR05"
    },
    {
      name: "Gangwon-do",
      value: "KR06"
    },
    {
      name: "Busan",
      value: "KR10"
    },
    {
      name: "Seoul (Seoul-teukbyeolsi)",
      value: "KR11"
    },
    {
      name: "Incheon",
      value: "KR12"
    },
    {
      name: "Gyeonggi-do",
      value: "KR13"
    },
    {
      name: "Gyeongsangbuk-do",
      value: "KR14"
    },
    {
      name: "Daegu",
      value: "KR15"
    },
    {
      name: "Jeollanam-do",
      value: "KR16"
    },
    {
      name: "Chungcheongnam-do",
      value: "KR17"
    },
    {
      name: "Gwangju",
      value: "KR18"
    },
    {
      name: "Daejeon",
      value: "KR19"
    },
    {
      name: "Gyeongsangnam-do",
      value: "KR20"
    },
    {
      name: "Ulsan",
      value: "KR21"
    },
    {
      name: "Sejong",
      value: "KR22"
    },
    {
      name: "(other)",
      value: "KR00"
    },
    // =========================================================
    // Kuwait
    // =========================================================
    {
      name: "Kuwait",
      value: "KW"
    },
    {
      name: "Al Asimah",
      value: "KW02"
    },
    {
      name: "Al Aḩmadī",
      value: "KW04"
    },
    {
      name: "Al Jahrāʼ",
      value: "KW05"
    },
    {
      name: "Al Farwaniyah",
      value: "KW07"
    },
    {
      name: "Hawalli",
      value: "KW08"
    },
    {
      name: "Mubārak al Kabīr",
      value: "KW09"
    },
    {
      name: "(other)",
      value: "KW00"
    },
    // =========================================================
    // Kyrgyzstan
    // =========================================================
    {
      name: "Kyrgyzstan",
      value: "KG"
    },
    {
      name: "Bishkek",
      value: "KG01"
    },
    {
      name: "Chüy",
      value: "KG02"
    },
    {
      name: "Jalal-Abad",
      value: "KG03"
    },
    {
      name: "Naryn",
      value: "KG04"
    },
    {
      name: "Talas",
      value: "KG06"
    },
    {
      name: "Issyk-Kul",
      value: "KG07"
    },
    {
      name: "Osh",
      value: "KG08"
    },
    {
      name: "Batken",
      value: "KG09"
    },
    {
      name: "(other)",
      value: "KG00"
    },
    // =========================================================
    // Laos
    // =========================================================
    {
      name: "Laos",
      value: "LA"
    },
    {
      name: "Attapu",
      value: "LA01"
    },
    {
      name: "Champasak",
      value: "LA02"
    },
    {
      name: "Houaphan",
      value: "LA03"
    },
    {
      name: "Oudômxai",
      value: "LA07"
    },
    {
      name: "Xiagnabouli",
      value: "LA13"
    },
    {
      name: "Xiangkhoang",
      value: "LA14"
    },
    {
      name: "Khammouan",
      value: "LA15"
    },
    {
      name: "Loungnamtha",
      value: "LA16"
    },
    {
      name: "Louangphabang",
      value: "LA17"
    },
    {
      name: "Phôngsali",
      value: "LA18"
    },
    {
      name: "Salavan",
      value: "LA19"
    },
    {
      name: "Savannahkhét",
      value: "LA20"
    },
    {
      name: "Bokeo",
      value: "LA22"
    },
    {
      name: "Bolikhamsai",
      value: "LA23"
    },
    {
      name: "Vientiane Prefecture (capital)",
      value: "LA24"
    },
    {
      name: "Xékong",
      value: "LA26"
    },
    {
      name: "Vientiane Province",
      value: "LA27"
    },
    {
      name: "(other)",
      value: "LA00"
    },
    // =========================================================
    // Latvia
    // =========================================================
    {
      name: "Latvia",
      value: "LV"
    },
    {
      name: "Ādažu",
      value: "LV34"
    },
    {
      name: "Aglonas",
      value: "LV35"
    },
    {
      name: "Aizkraukles",
      value: "LV01"
    },
    {
      name: "Aizputes",
      value: "LV37"
    },
    {
      name: "Aknīstes",
      value: "LV38"
    },
    {
      name: "Alojas",
      value: "LV39"
    },
    {
      name: "Alsungas",
      value: "LV40"
    },
    {
      name: "Alūksnes",
      value: "LV02"
    },
    {
      name: "Amatas",
      value: "LV42"
    },
    {
      name: "Apes",
      value: "LV43"
    },
    {
      name: "Auces",
      value: "LV44"
    },
    {
      name: "Babītes",
      value: "LV45"
    },
    {
      name: "Baldones",
      value: "LV46"
    },
    {
      name: "Baltinavas",
      value: "LV47"
    },
    {
      name: "Balvu",
      value: "LV03"
    },
    {
      name: "Bauskas",
      value: "LV04"
    },
    {
      name: "Beverīnas",
      value: "LV50"
    },
    {
      name: "Brocēnu",
      value: "LV51"
    },
    {
      name: "Burtnieku",
      value: "LV52"
    },
    {
      name: "Carnikavas",
      value: "LV53"
    },
    {
      name: "Cēsu",
      value: "LV05"
    },
    {
      name: "Cesvaines",
      value: "LV55"
    },
    {
      name: "Ciblas",
      value: "LV56"
    },
    {
      name: "Dagdas",
      value: "LV57"
    },
    {
      name: "Daugavpils",
      value: "LV06"
    },
    {
      name: "Daugavpils municipality",
      value: "LV07"
    },
    {
      name: "Dobeles",
      value: "LV08"
    },
    {
      name: "Dundagas",
      value: "LV60"
    },
    {
      name: "Durbes",
      value: "LV61"
    },
    {
      name: "Engures",
      value: "LV62"
    },
    {
      name: "Ērgļu",
      value: "LV63"
    },
    {
      name: "Garkalne",
      value: "LV64"
    },
    {
      name: "Grobiņas",
      value: "LV65"
    },
    {
      name: "Gulbenes",
      value: "LV09"
    },
    {
      name: "Iecavas",
      value: "LV67"
    },
    {
      name: "Ikšķiles",
      value: "LV68"
    },
    {
      name: "Ilūkstes",
      value: "LV69"
    },
    {
      name: "Inčukalna",
      value: "LV70"
    },
    {
      name: "Jaunjelgavas",
      value: "LV71"
    },
    {
      name: "Jaunpiebalgas",
      value: "LV72"
    },
    {
      name: "Jaunpils",
      value: "LV73"
    },
    {
      name: "Jēkabpils",
      value: "LV74"
    },
    {
      name: "Jēkabpils Municipality",
      value: "LV10"
    },
    {
      name: "Jelgava",
      value: "LV11"
    },
    {
      name: "Jelgavas Rajons",
      value: "LV12"
    },
    {
      name: "Jūrmala",
      value: "LV13"
    },
    {
      name: "Kandavas",
      value: "LV77"
    },
    {
      name: "Kārsavas",
      value: "LV78"
    },
    {
      name: "Ķeguma",
      value: "LV79"
    },
    {
      name: "Ķekavas",
      value: "LV80"
    },
    {
      name: "Kocēnu",
      value: "LV81"
    },
    {
      name: "Kokneses",
      value: "LV82"
    },
    {
      name: "Krāslavas",
      value: "LV14"
    },
    {
      name: "Krimuldas",
      value: "LV84"
    },
    {
      name: "Krustpils",
      value: "LV85"
    },
    {
      name: "Kuldīgas",
      value: "LV15"
    },
    {
      name: "Lielvārdes",
      value: "LV87"
    },
    {
      name: "Liepāja",
      value: "LV16"
    },
    {
      name: "Liepājas Rajons",
      value: "LV17"
    },
    {
      name: "Līgatnes",
      value: "LV88"
    },
    {
      name: "Limbažu",
      value: "LV18"
    },
    {
      name: "Līvānu",
      value: "LV90"
    },
    {
      name: "Lubānas",
      value: "LV91"
    },
    {
      name: "Ludzas",
      value: "LV19"
    },
    {
      name: "Madona Municipality",
      value: "LV20"
    },
    {
      name: "Mālpils",
      value: "LV94"
    },
    {
      name: "Mārupes",
      value: "LV95"
    },
    {
      name: "Mazsalacas",
      value: "LV96"
    },
    {
      name: "Mērsraga",
      value: "LVF1"
    },
    {
      name: "Naukšēnu",
      value: "LV97"
    },
    {
      name: "Neretas",
      value: "LV98"
    },
    {
      name: "Nīcas",
      value: "LV99"
    },
    {
      name: "Ogres",
      value: "LV21"
    },
    {
      name: "Olaines",
      value: "LVA2"
    },
    {
      name: "Ozolnieku",
      value: "LVA3"
    },
    {
      name: "Pārgaujas",
      value: "LVA4"
    },
    {
      name: "Pāvilostas",
      value: "LVA5"
    },
    {
      name: "Pļaviņu",
      value: "LVA6"
    },
    {
      name: "Preiļi",
      value: "LV22"
    },
    {
      name: "Priekules",
      value: "LVA8"
    },
    {
      name: "Priekuļi",
      value: "LVA9"
    },
    {
      name: "Raunas",
      value: "LVB1"
    },
    {
      name: "Rēzekne",
      value: "LV23"
    },
    {
      name: "Rēzeknes Rajons",
      value: "LV24"
    },
    {
      name: "Riebiņu",
      value: "LVB3"
    },
    {
      name: "Rīga",
      value: "LV25"
    },
    {
      name: "Rīgas Rajons",
      value: "LV26"
    },
    {
      name: "Rojas",
      value: "LVB4"
    },
    {
      name: "Ropažu",
      value: "LVB5"
    },
    {
      name: "Rucavas",
      value: "LVB6"
    },
    {
      name: "Rugāju",
      value: "LVB7"
    },
    {
      name: "Rūjienas",
      value: "LVB8"
    },
    {
      name: "Rundāles",
      value: "LVB9"
    },
    {
      name: "Salacgrīvas",
      value: "LVC1"
    },
    {
      name: "Salas",
      value: "LVC2"
    },
    {
      name: "Salaspils",
      value: "LVC3"
    },
    {
      name: "Saldus Municipality",
      value: "LV27"
    },
    {
      name: "Saulkrastu",
      value: "LVC5"
    },
    {
      name: "Sējas",
      value: "LVC6"
    },
    {
      name: "Siguldas",
      value: "LVC7"
    },
    {
      name: "Skrīveru",
      value: "LVC8"
    },
    {
      name: "Skrundas",
      value: "LVC9"
    },
    {
      name: "Smiltenes",
      value: "LVD1"
    },
    {
      name: "Stopiņu",
      value: "LVD2"
    },
    {
      name: "Strenču",
      value: "LVD3"
    },
    {
      name: "Talsi",
      value: "LV28"
    },
    {
      name: "Tērvetes",
      value: "LVD5"
    },
    {
      name: "Tukuma",
      value: "LV29"
    },
    {
      name: "Vaiņodes",
      value: "LVD7"
    },
    {
      name: "Valka Municipality",
      value: "LV30"
    },
    {
      name: "Valmiera District",
      value: "LV31"
    },
    {
      name: "Varakļānu",
      value: "LVE1"
    },
    {
      name: "Vārkavas",
      value: "LVE2"
    },
    {
      name: "Vecpiebalgas",
      value: "LVE3"
    },
    {
      name: "Vecumnieku",
      value: "LVE4"
    },
    {
      name: "Ventspils",
      value: "LV32"
    },
    {
      name: "Ventspils Municipality",
      value: "LV33"
    },
    {
      name: "Viesītes",
      value: "LVE6"
    },
    {
      name: "Viļakas",
      value: "LVE7"
    },
    {
      name: "Viļānu",
      value: "LVE8"
    },
    {
      name: "Zilupes",
      value: "LVE9"
    },
    {
      name: "(other)",
      value: "LV00"
    },
    // =========================================================
    // Lebanon
    // =========================================================
    {
      name: "Lebanon",
      value: "LB"
    },
    {
      name: "Beirut (Bayrūt, Beyrouth) capital",
      value: "LB04"
    },
    {
      name: "Mount Lebanon (jabal lubnān, Mont-Liban)",
      value: "LB05"
    },
    {
      name: "South (al-Janub, Liban-Sud)",
      value: "LB06"
    },
    {
      name: "Nabatieh (an-Nabaṭiyyah, Nabatîyé)",
      value: "LB07"
    },
    {
      name: "Beqaa Valley (Al-Biqā', Béqaa)",
      value: "LB08"
    },
    {
      name: "North (Aš Šamāl, Liban-Nord)",
      value: "LB09"
    },
    {
      name: "Akkar (Aakkâr)",
      value: "LB10"
    },
    {
      name: "Baalbek-Hermel (Baalbek and Hermel)",
      value: "LB11"
    },
    {
      name: "(other)",
      value: "LB00"
    },
    // =========================================================
    // Lesotho
    // =========================================================
    {
      name: "Lesotho",
      value: "LS"
    },
    {
      name: "Berea",
      value: "LS10"
    },
    {
      name: "Butha-Buthe",
      value: "LS11"
    },
    {
      name: "Leribe",
      value: "LS12"
    },
    {
      name: "Mafeteng",
      value: "LS13"
    },
    {
      name: "Maseru",
      value: "LS14"
    },
    {
      name: "Mohale’s Hoek",
      value: "LS15"
    },
    {
      name: "Mokhotlong",
      value: "LS16"
    },
    {
      name: "Qacha’s Nek",
      value: "LS17"
    },
    {
      name: "Quthing",
      value: "LS18"
    },
    {
      name: "Thaba-Tseka",
      value: "LS19"
    },
    {
      name: "(other)",
      value: "LS00"
    },
    // =========================================================
    // Liberia
    // =========================================================
    {
      name: "Liberia",
      value: "LR"
    },
    {
      name: "Bomi",
      value: "LR15"
    },
    {
      name: "Bong",
      value: "LR01"
    },
    {
      name: "Gbarpolu",
      value: "LR21"
    },
    {
      name: "Grand Bassa",
      value: "LR11"
    },
    {
      name: "Grand Cape Mount",
      value: "LR12"
    },
    {
      name: "Grand Gedeh",
      value: "LR19"
    },
    {
      name: "Grand Kru",
      value: "LR16"
    },
    {
      name: "Lofa",
      value: "LR20"
    },
    {
      name: "Margibi",
      value: "LR17"
    },
    {
      name: "Maryland",
      value: "LR13"
    },
    {
      name: "Montserrado",
      value: "LR14"
    },
    {
      name: "Nimba",
      value: "LR09"
    },
    {
      name: "River Cess",
      value: "LR18"
    },
    {
      name: "River Gee",
      value: "LR22"
    },
    {
      name: "Sinoe",
      value: "LR10"
    },
    {
      name: "(other)",
      value: "LR00"
    },
    // =========================================================
    // Libya
    // =========================================================
    {
      name: "Libya",
      value: "LY"
    },
    {
      name: "Jufrah",
      value: "LY64"
    },
    {
      name: "Kufrah",
      value: "LY65"
    },
    {
      name: "Marj",
      value: "LY66"
    },
    {
      name: "Murqub (Marqab)",
      value: "LY82"
    },
    {
      name: "Derna (Darnah)",
      value: "LY70"
    },
    {
      name: "Murzuq",
      value: "LY73"
    },
    {
      name: "Tobruk (Buţnān)",
      value: "LY79"
    },
    {
      name: "Jabal al Akhḑar",
      value: "LY63"
    },
    {
      name: "Jabal al Gharbī",
      value: "LY80"
    },
    {
      name: "Jafara (Jafārah)",
      value: "LY81"
    },
    {
      name: "Al Wahat (Al Wāḩāt, The Oasis)",
      value: "LY83"
    },
    {
      name: "Nuqāţ al Khams",
      value: "LY67"
    },
    {
      name: "Zawia (Zāwiyah)",
      value: "LY68"
    },
    {
      name: "Benghazi (Banghāzī)",
      value: "LY69"
    },
    {
      name: "Ghāt",
      value: "LY71"
    },
    {
      name: "Misrata (Mişrātah)",
      value: "LY72"
    },
    {
      name: "Nālūt",
      value: "LY74"
    },
    {
      name: "Sabhā",
      value: "LY75"
    },
    {
      name: "Tripoli (Ţarābulus)",
      value: "LY77"
    },
    {
      name: "Wadi al Hayaa (Wādī al Ḩayāt)",
      value: "LY84"
    },
    {
      name: "Wadi al Shatii (Wādī ash Shāţi’)",
      value: "LY78"
    },
    {
      name: "Sirte (Surt)",
      value: "LY76"
    },
    {
      name: "(other)",
      value: "LY00"
    },
    // =========================================================
    // Liechtenstein
    // =========================================================
    {
      name: "Liechtenstein",
      value: "LI"
    },
    {
      name: "Balzers",
      value: "LI01"
    },
    {
      name: "Eschen",
      value: "LI02"
    },
    {
      name: "Gamprin",
      value: "LI03"
    },
    {
      name: "Mauren",
      value: "LI04"
    },
    {
      name: "Planken",
      value: "LI05"
    },
    {
      name: "Ruggell",
      value: "LI06"
    },
    {
      name: "Schaan",
      value: "LI07"
    },
    {
      name: "Schellenberg",
      value: "LI08"
    },
    {
      name: "Triesen",
      value: "LI09"
    },
    {
      name: "Triesenberg",
      value: "LI10"
    },
    {
      name: "Vaduz",
      value: "LI11"
    },
    {
      name: "(other)",
      value: "LI00"
    },
    // =========================================================
    // Lithuania
    // =========================================================
    {
      name: "Lithuania",
      value: "LT"
    },
    {
      name: "Alytus (Alytaus)",
      value: "LT56"
    },
    {
      name: "Kaunas (Kauno)",
      value: "LT57"
    },
    {
      name: "Klaipėda (Klaipėdos)",
      value: "LT58"
    },
    {
      name: "Marijampolė (Marijampolės)",
      value: "LT59"
    },
    {
      name: "Panevėžys (Panevėžio)",
      value: "LT60"
    },
    {
      name: "Siauliai (Šiaulių)",
      value: "LT61"
    },
    {
      name: "Tauragė (Tauragės)",
      value: "LT62"
    },
    {
      name: "Telsiai (Telšių)",
      value: "LT63"
    },
    {
      name: "Utena (Utenos)",
      value: "LT64"
    },
    {
      name: "Vilnius (Vilniaus) capital",
      value: "LT65"
    },
    {
      name: "(other)",
      value: "LT00"
    },
    // =========================================================
    // Luxembourg
    // =========================================================
    {
      name: "Luxembourg",
      value: "LU"
    },
    {
      name: "Capellen",
      value: "LUCA"
    },
    {
      name: "Clervaux",
      value: "LUCL"
    },
    {
      name: "Diekirch",
      value: "LUDI"
    },
    {
      name: "Echternach",
      value: "LUEC"
    },
    {
      name: "Esch-sur-Alzette",
      value: "LUES"
    },
    {
      name: "Grevenmacher",
      value: "LUGR"
    },
    {
      name: "Luxembourg (capital)",
      value: "LULU"
    },
    {
      name: "Mersch",
      value: "LUME"
    },
    {
      name: "Redange",
      value: "LURD"
    },
    {
      name: "Remich",
      value: "LURM"
    },
    {
      name: "Vianden",
      value: "LUVD"
    },
    {
      name: "Wiltz",
      value: "LUWI"
    },
    {
      name: "(other)",
      value: "LU00"
    },
    // =========================================================
    // Macao
    // =========================================================
    {
      name: "Macao",
      value: "MO"
    },
    {
      name: "Nossa Senhora do Carmo",
      value: "MO11875159"
    },
    {
      name: "Ilhas (Concelho das Ilhas)",
      value: "MO01"
    },
    {
      name: "Macau (Concelho de Macau)",
      value: "MO02"
    },
    {
      name: "(other)",
      value: "MO00"
    },
    // =========================================================
    // Macedonia (North Macedonia)
    // =========================================================
    {
      name: "Macedonia (North Macedonia)",
      value: "MK"
    },
    {
      name: "Aerodrom",
      value: "MKF3"
    },
    {
      name: "Berovo",
      value: "MK04"
    },
    {
      name: "Bitola",
      value: "MK06"
    },
    {
      name: "Bogdanci",
      value: "MK08"
    },
    {
      name: "Bogovinje",
      value: "MKC7"
    },
    {
      name: "Bosilovo",
      value: "MK11"
    },
    {
      name: "Brvenica",
      value: "MK12"
    },
    {
      name: "Butel",
      value: "MKF4"
    },
    {
      name: "Debar",
      value: "MKD2"
    },
    {
      name: "Debarca",
      value: "MKF5"
    },
    {
      name: "Demir Hisar",
      value: "MKD3"
    },
    {
      name: "Demir Kapija",
      value: "MK25"
    },
    {
      name: "Dolneni",
      value: "MK28"
    },
    {
      name: "Drugovo",
      value: "MK30"
    },
    {
      name: "Gazi Baba",
      value: "MK32"
    },
    {
      name: "Gevgelija",
      value: "MK33"
    },
    {
      name: "Gostivar",
      value: "MKD4"
    },
    {
      name: "Gradsko",
      value: "MK35"
    },
    {
      name: "Ilinden",
      value: "MK36"
    },
    {
      name: "Jegunovce",
      value: "MKD5"
    },
    {
      name: "Karbinci",
      value: "MK40"
    },
    {
      name: "Kavadarci",
      value: "MKD6"
    },
    {
      name: "Kisela Voda",
      value: "MK44"
    },
    {
      name: "Kratovo",
      value: "MK51"
    },
    {
      name: "Kriva Palanka",
      value: "MK52"
    },
    {
      name: "Kumanovo",
      value: "MKD7"
    },
    {
      name: "Lozovo",
      value: "MK60"
    },
    {
      name: "Makedonska Kamenica",
      value: "MK62"
    },
    {
      name: "Makedonski Brod",
      value: "MKD8"
    },
    {
      name: "Mogila",
      value: "MKD9"
    },
    {
      name: "Negotino",
      value: "MK69"
    },
    {
      name: "Novaci",
      value: "MKE1"
    },
    {
      name: "Novo Selo",
      value: "MK72"
    },
    {
      name: "Ohrid",
      value: "MKE2"
    },
    {
      name: "Aračinovo",
      value: "MK01"
    },
    {
      name: "Čair",
      value: "MKC8"
    },
    {
      name: "Čaška",
      value: "MKC9"
    },
    {
      name: "Centar",
      value: "MKD1"
    },
    {
      name: "Centar Župa",
      value: "MK18"
    },
    {
      name: "Češinovo-Obleševo",
      value: "MK19"
    },
    {
      name: "Čučer-Sandevo",
      value: "MK20"
    },
    {
      name: "Delčevo",
      value: "MK22"
    },
    {
      name: "Dojran",
      value: "MKE5"
    },
    {
      name: "Gjorce Petrov",
      value: "MK29"
    },
    {
      name: "Karpoš",
      value: "MK41"
    },
    {
      name: "Kičevo",
      value: "MK43"
    },
    {
      name: "Kočani",
      value: "MK46"
    },
    {
      name: "Konče",
      value: "MK47"
    },
    {
      name: "Krivogaštani",
      value: "MK53"
    },
    {
      name: "Kruševo",
      value: "MK54"
    },
    {
      name: "Lipkovo",
      value: "MK59"
    },
    {
      name: "Mavrovo i Rostuša",
      value: "MKE4"
    },
    {
      name: "Pehčevo",
      value: "MK78"
    },
    {
      name: "Probištip",
      value: "MK83"
    },
    {
      name: "Radoviš",
      value: "MK84"
    },
    {
      name: "Rankovce",
      value: "MK85"
    },
    {
      name: "Sopište",
      value: "MK92"
    },
    {
      name: "Staro Nagoričane",
      value: "MK97"
    },
    {
      name: "Štip",
      value: "MK98"
    },
    {
      name: "Studeničani",
      value: "MKA2"
    },
    {
      name: "Šuto Orizari",
      value: "MKA3"
    },
    {
      name: "Vevčani",
      value: "MKB3"
    },
    {
      name: "Vraneštica",
      value: "MKB6"
    },
    {
      name: "Vrapčište",
      value: "MKB7"
    },
    {
      name: "Želino",
      value: "MKC3"
    },
    {
      name: "Oslomej",
      value: "MK77"
    },
    {
      name: "Petrovec",
      value: "MK79"
    },
    {
      name: "Plasnica",
      value: "MK80"
    },
    {
      name: "Prilep",
      value: "MKE3"
    },
    {
      name: "Resen",
      value: "MK86"
    },
    {
      name: "Rosoman",
      value: "MK87"
    },
    {
      name: "Saraj",
      value: "MK90"
    },
    {
      name: "Struga",
      value: "MKE6"
    },
    {
      name: "Strumica",
      value: "MKE7"
    },
    {
      name: "Sveti Nikole",
      value: "MKA4"
    },
    {
      name: "Tearce",
      value: "MKA5"
    },
    {
      name: "Tetovo",
      value: "MKE8"
    },
    {
      name: "Valandovo",
      value: "MKE9"
    },
    {
      name: "Vasilevo",
      value: "MKA9"
    },
    {
      name: "Veles",
      value: "MKF1"
    },
    {
      name: "Vinica",
      value: "MKB4"
    },
    {
      name: "Zajas",
      value: "MKC1"
    },
    {
      name: "Zelenikovo",
      value: "MKC2"
    },
    {
      name: "Zrnovci",
      value: "MKC6"
    },
    {
      name: "(other)",
      value: "MK00"
    },
    // =========================================================
    // Madagascar
    // =========================================================
    {
      name: "Madagascar",
      value: "MG"
    },
    {
      name: "Alaotra Mangoro",
      value: "MG33"
    },
    {
      name: "Amoron'i Mania",
      value: "MG22"
    },
    {
      name: "Analamanga (Antananarivo/Tana, capital)",
      value: "MG11"
    },
    {
      name: "Analanjirofo",
      value: "MG32"
    },
    {
      name: "Androy",
      value: "MG52"
    },
    {
      name: "Anosy",
      value: "MG53"
    },
    {
      name: "Atsimo-Andrefana",
      value: "MG51"
    },
    {
      name: "Atsimo-Atsinanana",
      value: "MG25"
    },
    {
      name: "Atsinanana",
      value: "MG31"
    },
    {
      name: "Betsiboka",
      value: "MG43"
    },
    {
      name: "Boeny",
      value: "MG41"
    },
    {
      name: "Bongolava",
      value: "MG14"
    },
    {
      name: "Diana",
      value: "MG71"
    },
    {
      name: "Haute Matsiatra (Upper Matsiatra)",
      value: "MG21"
    },
    {
      name: "Ihorombe",
      value: "MG24"
    },
    {
      name: "Itasy",
      value: "MG13"
    },
    {
      name: "Melaky",
      value: "MG44"
    },
    {
      name: "Menabe",
      value: "MG54"
    },
    {
      name: "Sava",
      value: "MG72"
    },
    {
      name: "Sofia",
      value: "MG42"
    },
    {
      name: "Vakinankaratra",
      value: "MG12"
    },
    {
      name: "Vatovavy Fitovinany",
      value: "MG23"
    },
    {
      name: "(other)",
      value: "MG00"
    },
    // =========================================================
    // Malawi
    // =========================================================
    {
      name: "Malawi",
      value: "MW"
    },
    {
      name: "Central Region (Lilongwe, capital)",
      value: "MWC"
    },
    {
      name: "Northern Region (Mzuzu)",
      value: "MWN"
    },
    {
      name: "Southern Region (Blantyre, Zomba)",
      value: "MWS"
    },
    {
      name: "(other)",
      value: "MW00"
    },
    // =========================================================
    // Malaysia
    // =========================================================
    {
      name: "Malaysia",
      value: "MY"
    },
    {
      name: "Johor",
      value: "MY01"
    },
    {
      name: "Kedah",
      value: "MY02"
    },
    {
      name: "Kelantan",
      value: "MY03"
    },
    {
      name: "Kuala Lumpur (capital)",
      value: "MY14"
    },
    {
      name: "Labuan",
      value: "MY15"
    },
    {
      name: "Melaka",
      value: "MY04"
    },
    {
      name: "Negeri Sembilan",
      value: "MY05"
    },
    {
      name: "Pahang",
      value: "MY06"
    },
    {
      name: "Perak",
      value: "MY07"
    },
    {
      name: "Perlis",
      value: "MY08"
    },
    {
      name: "Pulau Pinang",
      value: "MY09"
    },
    {
      name: "Putrajaya",
      value: "MY17"
    },
    {
      name: "Sabah",
      value: "MY16"
    },
    {
      name: "Sarawak",
      value: "MY11"
    },
    {
      name: "Selangor",
      value: "MY12"
    },
    {
      name: "Terengganu",
      value: "MY13"
    },
    {
      name: "(other)",
      value: "MY00"
    },
    // =========================================================
    // Maldives
    // =========================================================
    {
      name: "Maldives",
      value: "MV"
    },
    {
      name: "Laamu Atholhu",
      value: "MV05"
    },
    {
      name: "Alifu Atholhu",
      value: "MV30"
    },
    {
      name: "Baa Atholhu",
      value: "MV31"
    },
    {
      name: "Dhaalu Atholhu",
      value: "MV32"
    },
    {
      name: "Faafu Atholhu",
      value: "MV33"
    },
    {
      name: "Gaafu Alifu Atholhu",
      value: "MV34"
    },
    {
      name: "Gaafu Dhaalu Atholhu",
      value: "MV35"
    },
    {
      name: "Haa Alifu Atholhu",
      value: "MV36"
    },
    {
      name: "Haa Dhaalu Atholhu",
      value: "MV37"
    },
    {
      name: "Kaafu Atoll",
      value: "MV38"
    },
    {
      name: "Lhaviyani Atholhu",
      value: "MV39"
    },
    {
      name: "Malé (Maale, capital)",
      value: "MV40"
    },
    {
      name: "Meemu Atholhu",
      value: "MV41"
    },
    {
      name: "Gnyaviyani Atoll",
      value: "MV42"
    },
    {
      name: "Noonu Atoll",
      value: "MV43"
    },
    {
      name: "Raa Atholhu",
      value: "MV44"
    },
    {
      name: "Seenu Atholhu",
      value: "MV01"
    },
    {
      name: "Shaviyani Atholhu",
      value: "MV45"
    },
    {
      name: "Thaa Atholhu",
      value: "MV46"
    },
    {
      name: "Vaavu Atholhu",
      value: "MV47"
    },
    {
      name: "Southern Ari Atoll",
      value: "MV10346475"
    },
    {
      name: "South Province (Dhekunu Sarahahdhu)",
      value: "MV48"
    },
    {
      name: "Upper South (Mathi Dhekunu Sarahahdhu)",
      value: "MV49"
    },
    {
      name: "Upper North (Mathi Uthuru Sarahahdhu)",
      value: "MV50"
    },
    {
      name: "Central Province (Medhu Sarahahdhu)",
      value: "MV51"
    },
    {
      name: "South Central (Medhu Dhekunu Sarahahdhu)",
      value: "MV52"
    },
    {
      name: "North Central (Medhu Uthuru Sarahahdhu)",
      value: "MV53"
    },
    {
      name: "North Province (Uthuru Sarahahdhu)",
      value: "MV54"
    },
    {
      name: "(other)",
      value: "MV00"
    },
    // =========================================================
    // Mali
    // =========================================================
    {
      name: "Mali",
      value: "ML"
    },
    {
      name: "Bamako",
      value: "ML01"
    },
    {
      name: "Gao",
      value: "ML09"
    },
    {
      name: "Kayes",
      value: "ML03"
    },
    {
      name: "Kidal",
      value: "ML10"
    },
    {
      name: "Koulikoro",
      value: "ML07"
    },
    {
      name: "Mopti",
      value: "ML04"
    },
    {
      name: "Ségou",
      value: "ML05"
    },
    {
      name: "Sikasso",
      value: "ML06"
    },
    {
      name: "Timbuktu (Tombouctou)",
      value: "ML08"
    },
    {
      name: "(other)",
      value: "ML00"
    },
    // =========================================================
    // Malta
    // =========================================================
    {
      name: "Malta",
      value: "MT"
    },
    {
      name: "Attard",
      value: "MT01"
    },
    {
      name: "Balzan",
      value: "MT02"
    },
    {
      name: "Birkirkara",
      value: "MT04"
    },
    {
      name: "Birżebbuġa",
      value: "MT05"
    },
    {
      name: "Bormla",
      value: "MT06"
    },
    {
      name: "Dingli",
      value: "MT07"
    },
    {
      name: "Għajnsielem",
      value: "MT11"
    },
    {
      name: "Il-Belt Valletta",
      value: "MT60"
    },
    {
      name: "Il-Birgu",
      value: "MT03"
    },
    {
      name: "Il-Fgura",
      value: "MT08"
    },
    {
      name: "Il-Fontana",
      value: "MT10"
    },
    {
      name: "Il-Furjana",
      value: "MT09"
    },
    {
      name: "Il-Gudja",
      value: "MT16"
    },
    {
      name: "Il-Gżira",
      value: "MT17"
    },
    {
      name: "Il-Kalkara",
      value: "MT26"
    },
    {
      name: "Il-Marsa",
      value: "MT31"
    },
    {
      name: "Il-Mellieħa",
      value: "MT34"
    },
    {
      name: "Il-Mosta",
      value: "MT35"
    },
    {
      name: "Il-Munxar",
      value: "MT36"
    },
    {
      name: "Il-Qala",
      value: "MT42"
    },
    {
      name: "Il-Qrendi",
      value: "MT44"
    },
    {
      name: "Il-Ħamrun",
      value: "MT18"
    },
    {
      name: "In-Nadur",
      value: "MT37"
    },
    {
      name: "In-Naxxar",
      value: "MT38"
    },
    {
      name: "Ir-Rabat",
      value: "MT46"
    },
    {
      name: "Is-Siġġiewi",
      value: "MT55"
    },
    {
      name: "Is-Swieqi",
      value: "MT57"
    },
    {
      name: "Ix-Xagħra",
      value: "MT61"
    },
    {
      name: "Ix-Xewkija",
      value: "MT62"
    },
    {
      name: "Ix-Xgħajra",
      value: "MT63"
    },
    {
      name: "Iż-Żebbuġ",
      value: "MT66"
    },
    {
      name: "Iż-Żejtun",
      value: "MT67"
    },
    {
      name: "Iż-Żurrieq",
      value: "MT68"
    },
    {
      name: "Kirkop",
      value: "MT28"
    },
    {
      name: "L-Għarb",
      value: "MT12"
    },
    {
      name: "L-Għasri",
      value: "MT14"
    },
    {
      name: "L-Iklin",
      value: "MT19"
    },
    {
      name: "L-Imdina",
      value: "MT20"
    },
    {
      name: "L-Imġarr",
      value: "MT21"
    },
    {
      name: "L-Imqabba",
      value: "MT22"
    },
    {
      name: "L-Imsida",
      value: "MT23"
    },
    {
      name: "L-Imtarfa",
      value: "MT24"
    },
    {
      name: "L-Isla",
      value: "MT25"
    },
    {
      name: "Lija",
      value: "MT29"
    },
    {
      name: "Luqa",
      value: "MT30"
    },
    {
      name: "Marsaskala",
      value: "MT32"
    },
    {
      name: "Marsaxlokk",
      value: "MT33"
    },
    {
      name: "Paola",
      value: "MT39"
    },
    {
      name: "Pembroke",
      value: "MT40"
    },
    {
      name: "Qormi",
      value: "MT43"
    },
    {
      name: "Safi",
      value: "MT47"
    },
    {
      name: "Saint John",
      value: "MT48"
    },
    {
      name: "Saint Julian",
      value: "MT49"
    },
    {
      name: "Saint Lawrence",
      value: "MT50"
    },
    {
      name: "Saint Lucia",
      value: "MT51"
    },
    {
      name: "Saint Paul’s Bay",
      value: "MT52"
    },
    {
      name: "Saint Venera",
      value: "MT53"
    },
    {
      name: "Sannat",
      value: "MT54"
    },
    {
      name: "Tal-Pietà",
      value: "MT41"
    },
    {
      name: "Tarxien",
      value: "MT58"
    },
    {
      name: "Tas-Sliema",
      value: "MT56"
    },
    {
      name: "Ta’ Kerċem",
      value: "MT27"
    },
    {
      name: "Ta’ Xbiex",
      value: "MT59"
    },
    {
      name: "Ħal Għargħur",
      value: "MT13"
    },
    {
      name: "Ħal Għaxaq",
      value: "MT15"
    },
    {
      name: "Ħaż-Żabbar",
      value: "MT64"
    },
    {
      name: "Ħaż-Żebbuġ",
      value: "MT65"
    },
    {
      name: "(other)",
      value: "MT00"
    },
    // =========================================================
    // Marshall Islands
    // =========================================================
    {
      name: "Marshall Islands",
      value: "MH"
    },
    {
      name: "Ailinginae Atoll",
      value: "MH007"
    },
    {
      name: "Ailinglaplap Atoll",
      value: "MH010"
    },
    {
      name: "Ailuk Atoll",
      value: "MH030"
    },
    {
      name: "Arno Atoll",
      value: "MH040"
    },
    {
      name: "Aur Atoll",
      value: "MH050"
    },
    {
      name: "Bikar Atoll",
      value: "MH060"
    },
    {
      name: "Bikini Atoll",
      value: "MH070"
    },
    {
      name: "Bokak Atoll",
      value: "MH073"
    },
    {
      name: "Ebon Atoll",
      value: "MH080"
    },
    {
      name: "Enewetak Atoll",
      value: "MH090"
    },
    {
      name: "Erikub Atoll",
      value: "MH100"
    },
    {
      name: "Jabat Island",
      value: "MH110"
    },
    {
      name: "Jaluit Atoll",
      value: "MH120"
    },
    {
      name: "Jemo Island",
      value: "MH130"
    },
    {
      name: "Kili Island",
      value: "MH140"
    },
    {
      name: "Kwajalein Atoll",
      value: "MH150"
    },
    {
      name: "Lae Atoll",
      value: "MH160"
    },
    {
      name: "Lib Island",
      value: "MH170"
    },
    {
      name: "Likiep Atoll",
      value: "MH180"
    },
    {
      name: "Majuro Atoll",
      value: "MH190"
    },
    {
      name: "Maloelap Atoll",
      value: "MH300"
    },
    {
      name: "Mejit Island",
      value: "MH310"
    },
    {
      name: "Mili Atoll",
      value: "MH320"
    },
    {
      name: "Namdrik Atoll",
      value: "MH330"
    },
    {
      name: "Namu Atoll",
      value: "MH340"
    },
    {
      name: "Rongelap Atoll",
      value: "MH350"
    },
    {
      name: "Rongrik Atoll",
      value: "MH360"
    },
    {
      name: "Taka Atoll",
      value: "MH385"
    },
    {
      name: "Ujae Atoll",
      value: "MH390"
    },
    {
      name: "Ujelang Atoll",
      value: "MH400"
    },
    {
      name: "Utrik Atoll",
      value: "MH410"
    },
    {
      name: "Wotho Atoll",
      value: "MH420"
    },
    {
      name: "Wotje Atoll",
      value: "MH430"
    },
    {
      name: "(other)",
      value: "MH00"
    },
    // =========================================================
    // Martinique
    // =========================================================
    {
      name: "Martinique",
      value: "MQ"
    },
    {
      name: "Martinique",
      value: "MQMQ"
    },
    {
      name: "(other)",
      value: "MQ00"
    },
    // =========================================================
    // Mauritania
    // =========================================================
    {
      name: "Mauritania",
      value: "MR"
    },
    {
      name: "Adrar",
      value: "MR07"
    },
    {
      name: "Assaba",
      value: "MR03"
    },
    {
      name: "Brakna",
      value: "MR05"
    },
    {
      name: "Dakhlet Nouadhibou",
      value: "MR08"
    },
    {
      name: "District de Nouakchott",
      value: "MRNKC"
    },
    {
      name: "Gorgol",
      value: "MR04"
    },
    {
      name: "Guidimaka",
      value: "MR10"
    },
    {
      name: "Hodh ech Chargui",
      value: "MR01"
    },
    {
      name: "Hodh el Gharbi",
      value: "MR02"
    },
    {
      name: "Inchiri",
      value: "MR12"
    },
    {
      name: "Tagant",
      value: "MR09"
    },
    {
      name: "Tiris Zemmour",
      value: "MR11"
    },
    {
      name: "Wilaya du Trarza",
      value: "MR06"
    },
    {
      name: "(other)",
      value: "MR00"
    },
    // =========================================================
    // Mauritius
    // =========================================================
    {
      name: "Mauritius",
      value: "MU"
    },
    {
      name: "Agalega Islands",
      value: "MU21"
    },
    {
      name: "Black River",
      value: "MU12"
    },
    {
      name: "Cargados Carajos",
      value: "MU22"
    },
    {
      name: "Flacq",
      value: "MU13"
    },
    {
      name: "Grand Port",
      value: "MU14"
    },
    {
      name: "Moka",
      value: "MU15"
    },
    {
      name: "Pamplemousses",
      value: "MU16"
    },
    {
      name: "Plaines Wilhems",
      value: "MU17"
    },
    {
      name: "Port Louis",
      value: "MU18"
    },
    {
      name: "Rivière du Rempart",
      value: "MU19"
    },
    {
      name: "Rodrigues",
      value: "MU23"
    },
    {
      name: "Savanne",
      value: "MU20"
    },
    {
      name: "(other)",
      value: "MU00"
    },
    // =========================================================
    // Mayotte
    // =========================================================
    {
      name: "Mayotte",
      value: "YT"
    },
    {
      name: "Acoua",
      value: "YT97601"
    },
    {
      name: "Bandraboua",
      value: "YT97602"
    },
    {
      name: "Bandrele",
      value: "YT97603"
    },
    {
      name: "Bouéni",
      value: "YT97604"
    },
    {
      name: "Chiconi",
      value: "YT97605"
    },
    {
      name: "Chirongui",
      value: "YT97606"
    },
    {
      name: "Dembeni",
      value: "YT97607"
    },
    {
      name: "Dzaoudzi",
      value: "YT97608"
    },
    {
      name: "Kani-Kéli",
      value: "YT97609"
    },
    {
      name: "Koungou",
      value: "YT97610"
    },
    {
      name: "M'Tsangamouji",
      value: "YT97613"
    },
    {
      name: "Mamoudzou (capital)",
      value: "YT97611"
    },
    {
      name: "Mtsamboro",
      value: "YT97612"
    },
    {
      name: "Ouangani",
      value: "YT97614"
    },
    {
      name: "Pamandzi",
      value: "YT97615"
    },
    {
      name: "Sada",
      value: "YT97616"
    },
    {
      name: "Tsingoni",
      value: "YT97617"
    },
    {
      name: "(other)",
      value: "YT00"
    },
    // =========================================================
    // Mexico
    // =========================================================
    {
      name: "Mexico",
      value: "MX"
    },
    {
      name: "Aguascalientes",
      value: "MX01"
    },
    {
      name: "Baja California",
      value: "MX02"
    },
    {
      name: "Baja California Sur",
      value: "MX03"
    },
    {
      name: "Campeche",
      value: "MX04"
    },
    {
      name: "Chiapas",
      value: "MX05"
    },
    {
      name: "Chihuahua",
      value: "MX06"
    },
    {
      name: "Coahuila",
      value: "MX07"
    },
    {
      name: "Colima",
      value: "MX08"
    },
    {
      name: "Distrito Federal",
      value: "MX09"
    },
    {
      name: "Durango",
      value: "MX10"
    },
    {
      name: "Guanajuato",
      value: "MX11"
    },
    {
      name: "Guerrero",
      value: "MX12"
    },
    {
      name: "Hidalgo",
      value: "MX13"
    },
    {
      name: "Jalisco",
      value: "MX14"
    },
    {
      name: "México State",
      value: "MX15"
    },
    {
      name: "Michoacán",
      value: "MX16"
    },
    {
      name: "Morelos",
      value: "MX17"
    },
    {
      name: "Nayarit",
      value: "MX18"
    },
    {
      name: "Nuevo León",
      value: "MX19"
    },
    {
      name: "Oaxaca",
      value: "MX20"
    },
    {
      name: "Puebla",
      value: "MX21"
    },
    {
      name: "Querétaro",
      value: "MX22"
    },
    {
      name: "Quintana Roo",
      value: "MX23"
    },
    {
      name: "San Luis Potosí",
      value: "MX24"
    },
    {
      name: "Sinaloa",
      value: "MX25"
    },
    {
      name: "Sonora",
      value: "MX26"
    },
    {
      name: "Tabasco",
      value: "MX27"
    },
    {
      name: "Tamaulipas",
      value: "MX28"
    },
    {
      name: "Tlaxcala",
      value: "MX29"
    },
    {
      name: "Veracruz",
      value: "MX30"
    },
    {
      name: "Yucatán",
      value: "MX31"
    },
    {
      name: "Zacatecas",
      value: "MX32"
    },
    {
      name: "(other)",
      value: "MX00"
    },
    // =========================================================
    // Micronesia
    // =========================================================
    {
      name: "Micronesia",
      value: "FM"
    },
    {
      name: "Chuuk",
      value: "FM03"
    },
    {
      name: "Kosrae",
      value: "FM01"
    },
    {
      name: "Pohnpei",
      value: "FM02"
    },
    {
      name: "Yap",
      value: "FM04"
    },
    {
      name: "(other)",
      value: "FM00"
    },
    // =========================================================
    // Moldova
    // =========================================================
    {
      name: "Moldova",
      value: "MD"
    },
    {
      name: "Găgăuzia (autonomous region)",
      value: "MD51"
    },
    {
      name: "Bălţi (city)",
      value: "MD60"
    },
    {
      name: "Bender (city)",
      value: "MD62"
    },
    {
      name: "Chişinău (capital)",
      value: "MD57"
    },
    {
      name: "Anenii Noi",
      value: "MD59"
    },
    {
      name: "Basarabeasca",
      value: "MD61"
    },
    {
      name: "Briceni",
      value: "MD63"
    },
    {
      name: "Cahul",
      value: "MD64"
    },
    {
      name: "Călăraşi",
      value: "MD66"
    },
    {
      name: "Cantemir",
      value: "MD65"
    },
    {
      name: "Căuşeni",
      value: "MD67"
    },
    {
      name: "Cimişlia",
      value: "MD68"
    },
    {
      name: "Criuleni",
      value: "MD69"
    },
    {
      name: "Donduşeni",
      value: "MD70"
    },
    {
      name: "Drochia",
      value: "MD71"
    },
    {
      name: "Dubăsari",
      value: "MD72"
    },
    {
      name: "Edineţ",
      value: "MD73"
    },
    {
      name: "Făleşti",
      value: "MD74"
    },
    {
      name: "Floreşti",
      value: "MD75"
    },
    {
      name: "Glodeni",
      value: "MD76"
    },
    {
      name: "Hînceşti",
      value: "MD77"
    },
    {
      name: "Ialoveni",
      value: "MD78"
    },
    {
      name: "Leova",
      value: "MD79"
    },
    {
      name: "Nisporeni",
      value: "MD80"
    },
    {
      name: "Ocniţa",
      value: "MD81"
    },
    {
      name: "Orhei",
      value: "MD82"
    },
    {
      name: "Rezina",
      value: "MD83"
    },
    {
      name: "Rîşcani",
      value: "MD84"
    },
    {
      name: "Sîngerei",
      value: "MD85"
    },
    {
      name: "Şoldăneşti",
      value: "MD86"
    },
    {
      name: "Soroca",
      value: "MD87"
    },
    {
      name: "Ştefan Vodă",
      value: "MD88"
    },
    {
      name: "Străşeni",
      value: "MD89"
    },
    {
      name: "Taraclia",
      value: "MD90"
    },
    {
      name: "Teleneşti",
      value: "MD91"
    },
    {
      name: "Ungheni",
      value: "MD92"
    },
    {
      name: "Transnistria (Stînga Nistrului)",
      value: "MD58"
    },
    {
      name: "(other)",
      value: "MD00"
    },
    // =========================================================
    // Monaco
    // a few "00" admin codes, but most locations have NO admin1
    // =========================================================
    {
      name: "Monaco",
      value: "MC"
    },
    // =========================================================
    // Mongolia
    // =========================================================
    {
      name: "Mongolia",
      value: "MN"
    },
    {
      name: "Arhangay",
      value: "MN01"
    },
    {
      name: "Bayan-Ölgiy",
      value: "MN03"
    },
    {
      name: "Bayanhongor",
      value: "MN02"
    },
    {
      name: "Bulgan",
      value: "MN21"
    },
    {
      name: "Darhan-Uul",
      value: "MN23"
    },
    {
      name: "Dornod",
      value: "MN06"
    },
    {
      name: "Dornogovĭ",
      value: "MN07"
    },
    {
      name: "Dundgovĭ",
      value: "MN08"
    },
    {
      name: "Dzavhan",
      value: "MN09"
    },
    {
      name: "Govĭ-Altay",
      value: "MN10"
    },
    {
      name: "Govĭ-Sumber",
      value: "MN24"
    },
    {
      name: "Hentiy",
      value: "MN11"
    },
    {
      name: "Hovd",
      value: "MN12"
    },
    {
      name: "Hövsgöl",
      value: "MN13"
    },
    {
      name: "Ömnögovi",
      value: "MN14"
    },
    {
      name: "Orhon",
      value: "MN25"
    },
    {
      name: "Övörhangay",
      value: "MN15"
    },
    {
      name: "Selenge",
      value: "MN16"
    },
    {
      name: "Sühbaatar",
      value: "MN17"
    },
    {
      name: "Töv",
      value: "MN18"
    },
    {
      name: "Ulaanbaatar (capital)",
      value: "MN20"
    },
    {
      name: "Uvs",
      value: "MN19"
    },
    {
      name: "(other)",
      value: "MN00"
    },
    // =========================================================
    // Montenegro
    // =========================================================
    {
      name: "Montenegro",
      value: "ME"
    },
    {
      name: "Andrijevica",
      value: "ME01"
    },
    {
      name: "Bar",
      value: "ME02"
    },
    {
      name: "Berane",
      value: "ME03"
    },
    {
      name: "Bijelo Polje",
      value: "ME04"
    },
    {
      name: "Budva",
      value: "ME05"
    },
    {
      name: "Cetinje",
      value: "ME06"
    },
    {
      name: "Danilovgrad",
      value: "ME07"
    },
    {
      name: "Herceg Novi",
      value: "ME08"
    },
    {
      name: "Kotor",
      value: "ME10"
    },
    {
      name: "Mojkovac",
      value: "ME11"
    },
    {
      name: "Opština Kolašin",
      value: "ME09"
    },
    {
      name: "Opština Nikšić",
      value: "ME12"
    },
    {
      name: "Opština Plav",
      value: "ME13"
    },
    {
      name: "Opština Plužine",
      value: "ME15"
    },
    {
      name: "Opština Rožaje",
      value: "ME17"
    },
    {
      name: "Opština Šavnik",
      value: "ME18"
    },
    {
      name: "Opština Žabljak",
      value: "ME21"
    },
    {
      name: "Pljevlja",
      value: "ME14"
    },
    {
      name: "Podgorica (capital)",
      value: "ME16"
    },
    {
      name: "Tivat",
      value: "ME19"
    },
    {
      name: "Ulcinj",
      value: "ME20"
    },
    {
      name: "(other)",
      value: "ME00"
    },
    // =========================================================
    // Montserrat
    // =========================================================
    {
      name: "Montserrat",
      value: "MS"
    },
    {
      name: "Saint Anthony",
      value: "MS01"
    },
    {
      name: "Saint Georges",
      value: "MS02"
    },
    {
      name: "Saint Peter",
      value: "MS03"
    },
    {
      name: "(other)",
      value: "MS00"
    },
    // =========================================================
    // Morocco
    // =========================================================
    {
      name: "Morocco",
      value: "MA"
    },
    {
      name: "Tanger-Tetouan-Al Hoceima",
      value: "MA01"
    },
    {
      name: "Oriental",
      value: "MA02"
    },
    {
      name: "Fès-Meknès",
      value: "MA03"
    },
    {
      name: "Rabat-Salé-Kénitra (Rabat, capital)",
      value: "MA04"
    },
    {
      name: "Béni Mellal-Khénifra",
      value: "MA05"
    },
    {
      name: "Casablanca-Settat",
      value: "MA06"
    },
    {
      name: "Marrakesh-Safi",
      value: "MA07"
    },
    {
      name: "Drâa-Tafilalet",
      value: "MA08"
    },
    {
      name: "Souss-Massa",
      value: "MA09"
    },
    {
      name: "Guelmim-Oued Noun (Western Sahara)",
      value: "MA10"
    },
    {
      name: "Laâyoune-Sakia El Hamra (Western Sahara)",
      value: "MA11"
    },
    {
      name: "Dakhla-Oued Ed-Dahab (Western Sahara)",
      value: "MAEH"
    },
    {
      name: "(defunct) Oued Ed-Dahab-Lagouira (Western Sahara)",
      value: "MACE"
    },
    {
      name: "(defunct) Meknès-Tafilalet",
      value: "MA48"
    },
    {
      name: "(defunct) Souss-Massa-Drâa",
      value: "MA55"
    },
    {
      name: "(defunct) Taza-Al Hoceima-Taounate",
      value: "MA58"
    },
    {
      name: "(defunct) Oriental",
      value: "MA54"
    },
    {
      name: "(defunct) Gharb-Chrarda-Beni Hssen",
      value: "MA52"
    },
    {
      name: "(other)",
      value: "MA00"
    },
    // =========================================================
    // Mozambique
    // =========================================================
    {
      name: "Mozambique",
      value: "MZ"
    },
    {
      name: "Cabo Delgado",
      value: "MZ01"
    },
    {
      name: "Gaza",
      value: "MZ02"
    },
    {
      name: "Inhambane",
      value: "MZ03"
    },
    {
      name: "Manica",
      value: "MZ10"
    },
    {
      name: "Maputo City (capital)",
      value: "MZ11"
    },
    {
      name: "Maputo Province",
      value: "MZ04"
    },
    {
      name: "Nampula",
      value: "MZ06"
    },
    {
      name: "Niassa",
      value: "MZ07"
    },
    {
      name: "Zambézia",
      value: "MZ09"
    },
    {
      name: "Sofala",
      value: "MZ05"
    },
    {
      name: "Tete",
      value: "MZ08"
    },
    {
      name: "(other)",
      value: "MZ00"
    },
    // =========================================================
    // Myanmar (Burma)
    // =========================================================
    {
      name: "Myanmar (Burma)",
      value: "MM"
    },
    {
      name: "Ayeyawady",
      value: "MM03"
    },
    {
      name: "Bago",
      value: "MM16"
    },
    {
      name: "Chin",
      value: "MM02"
    },
    {
      name: "Kachin",
      value: "MM04"
    },
    {
      name: "Kayah",
      value: "MM06"
    },
    {
      name: "Kayin",
      value: "MM05"
    },
    {
      name: "Magway",
      value: "MM15"
    },
    {
      name: "Mandalay",
      value: "MM08"
    },
    {
      name: "Mon",
      value: "MM13"
    },
    {
      name: "Rakhine",
      value: "MM01"
    },
    {
      name: "Sagaing",
      value: "MM10"
    },
    {
      name: "Shan",
      value: "MM11"
    },
    {
      name: "Taninthayi",
      value: "MM12"
    },
    {
      name: "Rangoon (Yangon)",
      value: "MM17"
    },
    {
      name: "Nay Pyi Taw (capital)",
      value: "MM18"
    },
    {
      name: "(other)",
      value: "MM00"
    },
    // =========================================================
    // Namibia
    // =========================================================
    {
      name: "Namibia",
      value: "NA"
    },
    // =========================================================
    // Nauru
    // =========================================================
    {
      name: "Nauru",
      value: "NR"
    },
    // =========================================================
    // Nepal
    // =========================================================
    {
      name: "Nepal",
      value: "NP"
    },
    // =========================================================
    // Netherlands
    // =========================================================
    {
      name: "Netherlands",
      value: "NL"
    },
    // =========================================================
    // New Caledonia
    // =========================================================
    {
      name: "New Caledonia",
      value: "NC"
    },
    // =========================================================
    // New Zealand
    // =========================================================
    {
      name: "New Zealand",
      value: "NZ"
    },
    // =========================================================
    // Nicaragua
    // =========================================================
    {
      name: "Nicaragua",
      value: "NI"
    },
    // =========================================================
    // Niger
    // =========================================================
    {
      name: "Niger",
      value: "NE"
    },
    // =========================================================
    // Nigeria
    // =========================================================
    {
      name: "Nigeria",
      value: "NG"
    },
    // =========================================================
    // Niue
    // =========================================================
    {
      name: "Niue",
      value: "NU"
    },
    // =========================================================
    // Norfolk Island
    // =========================================================
    {
      name: "Norfolk Island",
      value: "NF"
    },
    // =========================================================
    // Northern Mariana Islands
    // =========================================================
    {
      name: "Northern Mariana Islands",
      value: "MP"
    },
    // =========================================================
    // Norway
    // =========================================================
    {
      name: "Norway",
      value: "NO"
    },
    // =========================================================
    // Oman
    // =========================================================
    {
      name: "Oman",
      value: "OM"
    },
    // =========================================================
    // Pakistan
    // =========================================================
    {
      name: "Pakistan",
      value: "PK"
    },
    {
      name: "Federally Administered Tribal Areas Territory",
      value: "PK01"
    },
    {
      name: "Balochistān",
      value: "PK02"
    },
    {
      name: "North-West Frontier",
      value: "PK03"
    },
    {
      name: "Punjab",
      value: "PK04"
    },
    {
      name: "Sindh",
      value: "PK05"
    },
    {
      name: "Azad Jammu and Kashmir (disputed territory)",
      value: "PK06"
    },
    {
      name: "Federally Administered Northern Areas (disputed territory)",
      value: "PK07"
    },
    {
      name: "Islāmābād",
      value: "PK08"
    },
    // =========================================================
    // Palau
    // =========================================================
    {
      name: "Palau",
      value: "PW"
    },
    {
      name: "Palestine",
      value: "PS"
    },
    {
      name: "Panama",
      value: "PA"
    },
    {
      name: "Papua New Guinea",
      value: "PG"
    },
    {
      name: "Paraguay",
      value: "PY"
    },
    {
      name: "Peru",
      value: "PE"
    },
    {
      name: "Peru, Amazonas",
      value: "PE01"
    },
    {
      name: "Peru, Ancash",
      value: "PE02"
    },
    {
      name: "Peru, Apurímac",
      value: "PE03"
    },
    {
      name: "Peru, Arequipa",
      value: "PE04"
    },
    {
      name: "Peru, Ayacucho",
      value: "PE05"
    },
    {
      name: "Peru, Cajamarca",
      value: "PE06"
    },
    {
      name: "Peru, Callao",
      value: "PE07"
    },
    {
      name: "Peru, Cusco",
      value: "PE08"
    },
    {
      name: "Peru, Huancavelica",
      value: "PE09"
    },
    {
      name: "Peru, Huánuco",
      value: "PE10"
    },
    {
      name: "Peru, Ica",
      value: "PE11"
    },
    {
      name: "Peru, Junín",
      value: "PE12"
    },
    {
      name: "Peru, La Libertad",
      value: "PE13"
    },
    {
      name: "Peru, Lambayeque",
      value: "PE14"
    },
    {
      name: "Peru, Lima",
      value: "PE15"
    },
    {
      name: "Peru, Loreto",
      value: "PE16"
    },
    {
      name: "Peru, Madre de Dios",
      value: "PE17"
    },
    {
      name: "Peru, Moquegua",
      value: "PE18"
    },
    {
      name: "Peru, Pasco",
      value: "PE19"
    },
    {
      name: "Peru, Piura",
      value: "PE20"
    },
    {
      name: "Peru, Puno",
      value: "PE21"
    },
    {
      name: "Peru, San Martín",
      value: "PE22"
    },
    {
      name: "Peru, Tacna",
      value: "PE23"
    },
    {
      name: "Peru, Tumbes",
      value: "PE24"
    },
    {
      name: "Peru, Ucayali",
      value: "PE25"
    },
    {
      name: "Philippines",
      value: "PH"
    },
    {
      name: "Pitcairn",
      value: "PN"
    },
    {
      name: "Poland",
      value: "PL"
    },
    {
      name: "Portugal",
      value: "PT"
    },
    {
      name: "Puerto Rico",
      value: "PR"
    },
    {
      name: "Qatar",
      value: "QA"
    },
    {
      name: "Réunion",
      value: "RE"
    },
    {
      name: "Romania",
      value: "RO"
    },
    // =========================================================
    // Russian Federation
    // =========================================================
    {
      name: "Russian Federation",
      value: "RU"
    },
    {
      name: "Adygeya Republic",
      value: "RU01"
    },
    {
      name: "Agin-Buryat Okrug",
      value: "RU02"
    },
    {
      name: "Altai",
      value: "RU03"
    },
    {
      name: "Altai Krai",
      value: "RU04"
    },
    {
      name: "Amur Oblast",
      value: "RU05"
    },
    {
      name: "Arkhangelskaya",
      value: "RU06"
    },
    {
      name: "Astrakhan",
      value: "RU07"
    },
    {
      name: "Bashkortostan Republic",
      value: "RU08"
    },
    {
      name: "Belgorod Oblast",
      value: "RU09"
    },
    {
      name: "Bryansk Oblast",
      value: "RU10"
    },
    {
      name: "Buryatiya Republic",
      value: "RU11"
    },
    {
      name: "Chechnya",
      value: "RU12"
    },
    {
      name: "Chelyabinsk",
      value: "RU13"
    },
    {
      name: "Chukotka",
      value: "RU15"
    },
    {
      name: "Chuvashia",
      value: "RU16"
    },
    {
      name: "Dagestan",
      value: "RU17"
    },
    {
      name: "Ingushetiya Republic",
      value: "RU19"
    },
    {
      name: "Irkutsk Oblast",
      value: "RU20"
    },
    {
      name: "Ivanovo",
      value: "RU21"
    },
    {
      name: "Kabardino-Balkariya Republic",
      value: "RU22"
    },
    {
      name: "Kaliningrad",
      value: "RU23"
    },
    {
      name: "Kalmykiya Republic",
      value: "RU24"
    },
    {
      name: "Kaluga",
      value: "RU25"
    },
    {
      name: "Karachayevo-Cherkesiya Republic",
      value: "RU27"
    },
    {
      name: "Karelia",
      value: "RU28"
    },
    {
      name: "Kemerovo Oblast",
      value: "RU29"
    },
    {
      name: "Khabarovsk",
      value: "RU30"
    },
    {
      name: "Khakasiya Republic",
      value: "RU31"
    },
    {
      name: "Khanty-Mansi Autonomous Okrug",
      value: "RU32"
    },
    {
      name: "Kirov Oblast",
      value: "RU33"
    },
    {
      name: "Komi Republic",
      value: "RU34"
    },
    {
      name: "Kostroma Oblast",
      value: "RU37"
    },
    {
      name: "Krasnodarskiy",
      value: "RU38"
    },
    {
      name: "Kurgan Oblast",
      value: "RU40"
    },
    {
      name: "Kursk",
      value: "RU41"
    },
    {
      name: "Leningrad Oblast",
      value: "RU42"
    },
    {
      name: "Lipetsk Oblast",
      value: "RU43"
    },
    {
      name: "Magadan Oblast",
      value: "RU44"
    },
    {
      name: "Mariy-El Republic",
      value: "RU45"
    },
    {
      name: "Mordoviya Republic",
      value: "RU46"
    },
    {
      name: "Moscow Oblast",
      value: "RU47"
    },
    {
      name: "Moscow",
      value: "RU48"
    },
    {
      name: "Murmansk",
      value: "RU49"
    },
    {
      name: "Nenets Autonomous Okrug",
      value: "RU50"
    },
    {
      name: "Nizhny Novgorod Oblast",
      value: "RU51"
    },
    {
      name: "Novgorod Oblast",
      value: "RU52"
    },
    {
      name: "Novosibirsk Oblast",
      value: "RU53"
    },
    {
      name: "Omsk",
      value: "RU54"
    },
    {
      name: "Orenburg Oblast",
      value: "RU55"
    },
    {
      name: "Orel Oblast",
      value: "RU56"
    },
    {
      name: "Penza",
      value: "RU57"
    },
    {
      name: "Primorskiy (Maritime) Kray",
      value: "RU59"
    },
    {
      name: "Pskov Oblast",
      value: "RU60"
    },
    {
      name: "Rostov",
      value: "RU61"
    },
    {
      name: "Ryazan Oblast",
      value: "RU62"
    },
    {
      name: "Sakha Republic",
      value: "RU63"
    },
    {
      name: "Sakhalin Oblast",
      value: "RU64"
    },
    {
      name: "Samara Oblast",
      value: "RU65"
    },
    {
      name: "St. Petersburg",
      value: "RU66"
    },
    {
      name: "Saratov Oblast",
      value: "RU67"
    },
    {
      name: "North Ossetia – Alania",
      value: "RU68"
    },
    {
      name: "Smolensk",
      value: "RU69"
    },
    {
      name: "Stavropol’ Kray",
      value: "RU70"
    },
    {
      name: "Sverdlovsk",
      value: "RU71"
    },
    {
      name: "Tambov",
      value: "RU72"
    },
    {
      name: "Tatarstan Republic",
      value: "RU73"
    },
    {
      name: "Tomsk Oblast",
      value: "RU75"
    },
    {
      name: "Tula",
      value: "RU76"
    },
    {
      name: "Tver’ Oblast",
      value: "RU77"
    },
    {
      name: "Tyumen’ Oblast",
      value: "RU78"
    },
    {
      name: "Republic of Tyva (Tuva)",
      value: "RU79"
    },
    {
      name: "Udmurtiya Republic",
      value: "RU80"
    },
    {
      name: "Ulyanovsk",
      value: "RU81"
    },
    {
      name: "Ust-Orda Buryat Okrug",
      value: "RU82"
    },
    {
      name: "Vladimir",
      value: "RU83"
    },
    {
      name: "Volgograd Oblast",
      value: "RU84"
    },
    {
      name: "Vologda",
      value: "RU85"
    },
    {
      name: "Voronezj",
      value: "RU86"
    },
    {
      name: "Yamalo-Nenets",
      value: "RU87"
    },
    {
      name: "Jaroslavl",
      value: "RU88"
    },
    {
      name: "Jewish Autonomous Oblast",
      value: "RU89"
    },
    {
      name: "Perm",
      value: "RU90"
    },
    {
      name: "Krasnoyarskiy",
      value: "RU91"
    },
    {
      name: "Kamchatka",
      value: "RU92"
    },
    {
      name: "Transbaikal Territory",
      value: "RU93"
    },
    // =========================================================
    // Rwanda
    // =========================================================
    {
      name: "Rwanda",
      value: "RW"
    },
    {
      name: "Eastern Province",
      value: "RW11"
    },
    {
      name: "Kigali",
      value: "RW12"
    },
    {
      name: "Northern Province",
      value: "RW13"
    },
    {
      name: "Western Province",
      value: "RW14"
    },
    {
      name: "Southern Province",
      value: "RW15"
    },
    // =========================================================
    // Saint Barthélemy
    // =========================================================
    {
      name: "Saint Barthélemy",
      value: "BL"
    },
    {
      name: "Saint Helena, Ascension and Tristan da Cunha",
      value: "SH"
    },
    {
      name: "Saint Kitts and Nevis",
      value: "KN"
    },
    {
      name: "Saint Lucia",
      value: "LC"
    },
    {
      name: "Saint Martin (French part)",
      value: "MF"
    },
    {
      name: "Saint Pierre and Miquelon",
      value: "PM"
    },
    {
      name: "Saint Vincent and the Grenadines",
      value: "VC"
    },
    {
      name: "Samoa",
      value: "WS"
    },
    {
      name: "San Marino",
      value: "SM"
    },
    {
      name: "Sao Tome and Principe",
      value: "ST"
    },
    {
      name: "Saudi Arabia",
      value: "SA"
    },
    {
      name: "Senegal",
      value: "SN"
    },
    {
      name: "Serbia",
      value: "RS"
    },
    {
      name: "Seychelles",
      value: "SC"
    },
    {
      name: "Sierra Leone",
      value: "SL"
    },
    {
      name: "Singapore",
      value: "SG"
    },
    {
      name: "Sint Maarten (Dutch part)",
      value: "SX"
    },
    {
      name: "Slovakia",
      value: "SK"
    },
    {
      name: "Slovenia",
      value: "SI"
    },
    {
      name: "Solomon Islands",
      value: "SB"
    },
    {
      name: "Somalia",
      value: "SO"
    },
    {
      name: "South Africa",
      value: "ZA"
    },
    {
      name: "South Georgia and the South Sandwich Islands",
      value: "GS"
    },
    {
      name: "South Sudan",
      value: "SS"
    },
    {
      name: "Spain",
      value: "ES"
    },
    {
      name: "Sri Lanka",
      value: "LK"
    },
    {
      name: "Sudan",
      value: "SD"
    },
    {
      name: "Suriname",
      value: "SR"
    },
    {
      name: "Svalbard and Jan Mayen",
      value: "SJ"
    },
    {
      name: "Swaziland",
      value: "SZ"
    },
    {
      name: "Sweden",
      value: "SE"
    },
    {
      name: "Switzerland",
      value: "CH"
    },
    {
      name: "Syria",
      value: "SY"
    },
    {
      name: "Taiwan",
      value: "TW"
    },
    {
      name: "Tajikistan",
      value: "TJ"
    },
    {
      name: "Tanzania",
      value: "TZ"
    },
    {
      name: "Thailand",
      value: "TH"
    },
    {
      name: "Timor-Leste",
      value: "TL"
    },
    {
      name: "Togo",
      value: "TG"
    },
    {
      name: "Tokelau",
      value: "TK"
    },
    {
      name: "Tonga",
      value: "TO"
    },
    {
      name: "Trinidad and Tobago",
      value: "TT"
    },
    {
      name: "Tunisia",
      value: "TN"
    },
    {
      name: "Turkey",
      value: "TR"
    },
    {
      name: "Turkmenistan",
      value: "TM"
    },
    {
      name: "Turks and Caicos Islands",
      value: "TC"
    },
    {
      name: "Tuvalu",
      value: "TV"
    },
    // =========================================================
    // Uganda
    // =========================================================
    {
      name: "Uganda",
      value: "UG"
    },
    // =========================================================
    // Ukraine
    // =========================================================
    {
      name: "Ukraine",
      value: "UA"
    },
    // =========================================================
    // United Arab Emirates
    // =========================================================
    {
      name: "United Arab Emirates",
      value: "AE"
    },
    {
      name: "Abu Dhabi (Abū Z̧aby) capital",
      value: "AE01"
    },
    {
      name: "Ajman (`Ajmān)",
      value: "AE02"
    },
    {
      name: "Dubai (Dubayy)",
      value: "AE03"
    },
    {
      name: "Fujairah (Al Fujayrah)",
      value: "AE04"
    },
    {
      name: "Ras Al Khaimah (Ra's al Khaymah)",
      value: "AE05"
    },
    {
      name: "Sharjah (Ash Shāriqah)",
      value: "AE06"
    },
    {
      name: "Umm Al Quwain (Umm al Qaywayn)",
      value: "AE07"
    },
    // =========================================================
    // United Kingdom
    // =========================================================
    {
      name: "United Kingdom",
      value: "GB"
    },
    {
      name: "England",
      value: "GBENG"
    },
    {
      name: "Scotland",
      value: "GBSCT"
    },
    {
      name: "Northern Ireland",
      value: "GBNIR"
    },
    {
      name: "Wales",
      value: "GBWLS"
    },
    {
      name: "Isle of Man, Guernsey, and Jersey",
      value: "GB00"
    },
    {
      name: "Dhekelia (Cyprus)",
      value: "GB03"
    },
    {
      name: "Akrotiri (Cyprus)",
      value: "GB05"
    },
    // =========================================================
    // United States of America
    // =========================================================
    {
      name: "United States of America",
      value: "US"
    },
    {
      name: "Alabama",
      value: "USAL"
    },
    {
      name: "Alaska",
      value: "USAK"
    },
    {
      name: "Arizona",
      value: "USAZ"
    },
    {
      name: "Arkansas",
      value: "USAR"
    },
    {
      name: "California",
      value: "USCA"
    },
    {
      name: "Colorado",
      value: "USCO"
    },
    {
      name: "Connecticut",
      value: "USCT"
    },
    {
      name: "Delaware",
      value: "USDE"
    },
    {
      name: "District of Columbia (Washington, D.C.) capital",
      value: "USDC"
    },
    {
      name: "Florida",
      value: "USFL"
    },
    {
      name: "Georgia",
      value: "USGA"
    },
    {
      name: "Hawaii",
      value: "USHI"
    },
    {
      name: "Idaho",
      value: "USID"
    },
    {
      name: "Illinois",
      value: "USIL"
    },
    {
      name: "Indiana",
      value: "USIN"
    },
    {
      name: "Iowa",
      value: "USIA"
    },
    {
      name: "Kansas",
      value: "USKS"
    },
    {
      name: "Kentucky",
      value: "USKY"
    },
    {
      name: "Louisiana",
      value: "USLA"
    },
    {
      name: "Maine",
      value: "USME"
    },
    {
      name: "Maryland",
      value: "USMD"
    },
    {
      name: "Massachusetts",
      value: "USMA"
    },
    {
      name: "Michigan",
      value: "USMI"
    },
    {
      name: "Minnesota",
      value: "USMN"
    },
    {
      name: "Mississippi",
      value: "USMS"
    },
    {
      name: "Missouri",
      value: "USMO"
    },
    {
      name: "Montana",
      value: "USMT"
    },
    {
      name: "Nebraska",
      value: "USNE"
    },
    {
      name: "Nevada",
      value: "USNV"
    },
    {
      name: "New Hampshire",
      value: "USNH"
    },
    {
      name: "New Jersey",
      value: "USNJ"
    },
    {
      name: "New Mexico",
      value: "USNM"
    },
    {
      name: "New York",
      value: "USNY"
    },
    {
      name: "North Carolina",
      value: "USNC"
    },
    {
      name: "North Dakota",
      value: "USND"
    },
    {
      name: "Ohio",
      value: "USOH"
    },
    {
      name: "Oklahoma",
      value: "USOK"
    },
    {
      name: "Oregon",
      value: "USOR"
    },
    {
      name: "Pennsylvania",
      value: "USPA"
    },
    {
      name: "Rhode Island",
      value: "USRI"
    },
    {
      name: "South Carolina",
      value: "USSC"
    },
    {
      name: "South Dakota",
      value: "USSD"
    },
    {
      name: "Tennessee",
      value: "USTN"
    },
    {
      name: "Texas",
      value: "USTX"
    },
    {
      name: "Utah",
      value: "USUT"
    },
    {
      name: "Vermont",
      value: "USVT"
    },
    {
      name: "Virginia",
      value: "USVA"
    },
    {
      name: "Washington",
      value: "USWA"
    },
    {
      name: "West Virginia",
      value: "USWV"
    },
    {
      name: "Wisconsin",
      value: "USWI"
    },
    {
      name: "Wyoming",
      value: "USWY"
    },
    // =========================================================
    // US, Minor Outlying Islands
    // =========================================================
    {
      name: "US, Minor Outlying Islands",
      value: "UM"
    },
    // =========================================================
    // Uruguay
    // =========================================================
    {
      name: "Uruguay",
      value: "UY"
    },
    {
      name: "Artigas",
      value: "UY01"
    },
    {
      name: "Canelones",
      value: "UY02"
    },
    {
      name: "Cerro Largo",
      value: "UY03"
    },
    {
      name: "Colonia",
      value: "UY04"
    },
    {
      name: "Durazno",
      value: "UY05"
    },
    {
      name: "Flores",
      value: "UY06"
    },
    {
      name: "Florida",
      value: "UY07"
    },
    {
      name: "Lavalleja",
      value: "UY08"
    },
    {
      name: "Maldonado",
      value: "UY09"
    },
    {
      name: "Montevideo (capital)",
      value: "UY10"
    },
    {
      name: "Paysandú",
      value: "UY11"
    },
    {
      name: "Río Negro",
      value: "UY12"
    },
    {
      name: "Rivera",
      value: "UY13"
    },
    {
      name: "Rocha",
      value: "UY14"
    },
    {
      name: "Salto",
      value: "UY15"
    },
    {
      name: "San José",
      value: "UY16"
    },
    {
      name: "Soriano",
      value: "UY17"
    },
    {
      name: "Tacuarembó",
      value: "UY18"
    },
    {
      name: "Treinta y Tres",
      value: "UY19"
    },
    // =========================================================
    // Uzbekistan
    // =========================================================
    {
      name: "Uzbekistan",
      value: "UZ"
    },
    // =========================================================
    // Vanuatu
    // =========================================================
    {
      name: "Vanuatu",
      value: "VU"
    },
    // =========================================================
    // Vatican City State (Holy See)
    // =========================================================
    {
      name: "Vatican City State (Holy See)",
      value: "VA"
    },
    // =========================================================
    // Venezuela
    // =========================================================
    {
      name: "Venezuela",
      value: "VE"
    },
    // =========================================================
    // Viet Nam
    // =========================================================
    {
      name: "Viet Nam",
      value: "VN"
    },
    // =========================================================
    // Virgin Islands, British
    // =========================================================
    {
      name: "Virgin Islands, British",
      value: "VG"
    },
    // =========================================================
    // Virgin Islands, U.S.
    // =========================================================
    {
      name: "Virgin Islands, U.S.",
      value: "VI"
    },
    // =========================================================
    // Wallis and Futuna
    // =========================================================
    {
      name: "Wallis and Futuna",
      value: "WF"
    },
    // =========================================================
    // Western Sahara
    // =========================================================
    {
      name: "Western Sahara",
      value: "EH"
    },
    // =========================================================
    // Yemen
    // =========================================================
    {
      name: "Yemen",
      value: "YE"
    },
    // =========================================================
    // Zambia
    // =========================================================
    {
      name: "Zambia",
      value: "ZM"
    },
    // =========================================================
    // Zimbabwe
    // =========================================================
    {
      name: "Zimbabwe",
      value: "ZW"
    }
  ]
};
