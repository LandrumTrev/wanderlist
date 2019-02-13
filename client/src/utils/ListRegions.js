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
    // {
    //   name: "Hainaut Province",
    //   value: "BE03"
    //   // value: "BE03"
    // },
    {
      name: "Wallonia",
      // name: "Liège Province (Wallonia)",
      value: "BEWAL"
      // value: "BE04"
    },
    // {
    //   name: "Limburg Province",
    //   value: "BE05"
    //   // value: "BE05"
    // },
    // {
    //   name: "Luxembourg Province",
    //   value: "BE06"
    //   // value: "BE06"
    // },
    // {
    //   name: "Namur Province",
    //   value: "BE07"
    //   // value: "BE07"
    // },
    // {
    //   name: "Oost-Vlaanderen Province",
    //   value: "BE08"
    //   // value: "BE08"
    // },
    // {
    //   name: "West-Vlaanderen Province",
    //   value: "BE09"
    //   // value: "BE09"
    // },
    // {
    //   name: "Walloon Brabant Province",
    //   value: "BE10"
    //   // value: "BE10"
    // },
    {
      name: "Brussels-Capital Region",
      value: "BEBRU"
      // value: "BE11"
    },
    // {
    //   name: "Flemish Brabant Province",
    //   value: "BE12"
    //   // value: "BE12"
    // },
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
    // Côte d'Ivoire
    // =========================================================
    {
      name: "Côte d'Ivoire",
      value: "CI"
    },
    // =========================================================
    // Croatia
    // =========================================================
    {
      name: "Croatia",
      value: "HR"
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
      name: "Djibouti",
      value: "DJ"
    },
    {
      name: "Dominica",
      value: "DM"
    },
    {
      name: "Dominican Republic",
      value: "DO"
    },
    {
      name: "Ecuador",
      value: "EC"
    },
    {
      name: "Egypt",
      value: "EG"
    },
    {
      name: "El Salvador",
      value: "SV"
    },
    {
      name: "Equatorial Guinea",
      value: "GQ"
    },
    {
      name: "Eritrea",
      value: "ER"
    },
    {
      name: "Estonia",
      value: "EE"
    },
    {
      name: "Ethiopia",
      value: "ET"
    },
    {
      name: "Falkland Islands (Malvinas)",
      value: "FK"
    },
    {
      name: "Faroe Islands",
      value: "FO"
    },
    {
      name: "Fiji",
      value: "FJ"
    },
    {
      name: "Finland",
      value: "FI"
    },
    {
      name: "Finland, Uusimaa",
      value: "FI01"
    },
    {
      name: "Finland, Finland Proper",
      value: "FI02"
    },
    {
      name: "Finland, Satakunta",
      value: "FI04"
    },
    {
      name: "Finland, Tavastia Proper",
      value: "FI05"
    },
    {
      name: "Finland, Pirkanmaa",
      value: "FI06"
    },
    {
      name: "Finland, Kymenlaakso",
      value: "FI08"
    },
    {
      name: "Finland, Southern Savonia",
      value: "FI10"
    },
    {
      name: "Finland, Northern Savo",
      value: "FI11"
    },
    {
      name: "Finland, North Karelia",
      value: "FI12"
    },
    {
      name: "Finland, Central Finland",
      value: "FI13"
    },
    {
      name: "Finland, Southern Ostrobothnia",
      value: "FI14"
    },
    {
      name: "Finland, Ostrobothnia",
      value: "FI15"
    },
    {
      name: "Finland, Central Ostrobothnia",
      value: "FI16"
    },
    {
      name: "Finland, Northern Ostrobothnia",
      value: "FI17"
    },
    {
      name: "Finland, Kainuu",
      value: "FI18"
    },
    {
      name: "Finland, Lapland",
      value: "FI19"
    },
    {
      name: "Finland, Åland Islands",
      value: "AX"
    },
    {
      name: "France",
      value: "FR"
    },
    {
      name: "France, Grand Est (Strasbourg)",
      value: "FR44"
    },
    {
      name: "France, Nouvelle-Aquitaine (Bordeaux)",
      value: "FR75"
    },
    {
      name: "France, Auvergne-Rhône-Alpes (Lyon)",
      value: "FR84"
    },
    {
      name: "France, Bourgogne-Franche-Comté (Dijon)",
      value: "FR27"
    },
    {
      name: "France, Brittany (Rennes)",
      value: "FR53"
    },
    {
      name: "France, Centre-Val de Loire (Orléans)",
      value: "FR24"
    },
    {
      name: "France, Île-de-France (Paris)",
      value: "FR11"
    },
    {
      name: "France, Occitanie (Toulouse)",
      value: "FR76"
    },
    {
      name: "France, Hauts-de-France (Lille)",
      value: "FR32"
    },
    {
      name: "France, Normandy (Rouen)",
      value: "FR28"
    },
    {
      name: "France, Pays de la Loire (Nantes)",
      value: "FR52"
    },
    {
      name: "France, Provence-Alpes-Côte d'Azur (Marseille)",
      value: "FR93"
    },
    {
      name: "France, Corsica (Ajaccio)",
      value: "FR94"
    },
    {
      name: "French Guiana",
      value: "GF"
    },
    {
      name: "French Polynesia",
      value: "PF"
    },
    {
      name: "French Southern Territories",
      value: "TF"
    },
    {
      name: "Gabon",
      value: "GA"
    },
    {
      name: "Gambia",
      value: "GM"
    },
    {
      name: "Georgia",
      value: "GE"
    },
    {
      name: "Germany",
      value: "DE"
    },
    {
      name: "Ghana",
      value: "GH"
    },
    {
      name: "Gibraltar",
      value: "GI"
    },
    {
      name: "Greece",
      value: "GR"
    },
    {
      name: "Greenland",
      value: "GL"
    },
    {
      name: "Grenada",
      value: "GD"
    },
    {
      name: "Guadeloupe",
      value: "GP"
    },
    {
      name: "Guam",
      value: "GU"
    },
    {
      name: "Guatemala",
      value: "GT"
    },
    {
      name: "Guernsey",
      value: "GG"
    },
    {
      name: "Guinea",
      value: "GN"
    },
    {
      name: "Guinea-Bissau",
      value: "GW"
    },
    {
      name: "Guyana",
      value: "GY"
    },
    {
      name: "Haiti",
      value: "HT"
    },
    {
      name: "Heard Island and McDonald Islands",
      value: "HM"
    },
    {
      name: "Holy See (Vatican City State)",
      value: "VA"
    },
    {
      name: "Honduras",
      value: "HN"
    },
    {
      name: "Hong Kong",
      value: "HK"
    },
    {
      name: "Hungary",
      value: "HU"
    },
    {
      name: "Iceland",
      value: "IS"
    },
    {
      name: "India",
      value: "IN"
    },
    {
      name: "India, Andaman and Nicobar Islands Union Territory",
      value: "IN01"
    },
    {
      name: "India, Andhra Pradesh State",
      value: "IN02"
    },
    {
      name: "India, Assam State",
      value: "IN03"
    },
    {
      name: "India, Chandigarh Union Territory",
      value: "IN05"
    },
    {
      name: "India, Dadra and Nagar Haveli Union Territory",
      value: "IN06"
    },
    {
      name: "India, Delhi Union Territory",
      value: "IN07"
    },
    {
      name: "India, Gujarat State",
      value: "IN09"
    },
    {
      name: "India, Haryana State",
      value: "IN10"
    },
    {
      name: "India, Himachal Pradesh State",
      value: "IN11"
    },
    {
      name: "India, Jammu and Kashmir State",
      value: "IN12"
    },
    {
      name: "India, Kerala State",
      value: "IN13"
    },
    {
      name: "India, Lakshadweep Union Territory",
      value: "IN14"
    },
    {
      name: "India, Maharashtra State",
      value: "IN16"
    },
    {
      name: "India, Manipur State",
      value: "IN17"
    },
    {
      name: "India, Meghalaya State",
      value: "IN18"
    },
    {
      name: "India, Karnataka State",
      value: "IN19"
    },
    {
      name: "India, Nagaland State",
      value: "IN20"
    },
    {
      name: "India, Odisha State",
      value: "IN21"
    },
    {
      name: "India, Puducherry Union Territory",
      value: "IN22"
    },
    {
      name: "India, Punjab State",
      value: "IN23"
    },
    {
      name: "India, Rajasthan State",
      value: "IN24"
    },
    {
      name: "India, Tamil Nadu State",
      value: "IN25"
    },
    {
      name: "India, Tripura State",
      value: "IN26"
    },
    {
      name: "India, West Bengal State",
      value: "IN28"
    },
    {
      name: "India, Sikkim State",
      value: "IN29"
    },
    {
      name: "India, Arunachal Pradesh State",
      value: "IN30"
    },
    {
      name: "India, Mizoram State",
      value: "IN31"
    },
    {
      name: "India, Daman and Diu Union Territory",
      value: "IN32"
    },
    {
      name: "India, Goa State",
      value: "IN33"
    },
    {
      name: "India, Bihar State",
      value: "IN34"
    },
    {
      name: "India, Madhya Pradesh State",
      value: "IN35"
    },
    {
      name: "India, Uttar Pradesh State",
      value: "IN36"
    },
    {
      name: "India, Chhattisgarh State",
      value: "IN37"
    },
    {
      name: "India, Jharkhand State",
      value: "IN38"
    },
    {
      name: "India, Uttarakhand State",
      value: "IN39"
    },
    {
      name: "India, Telangana State",
      value: "IN40"
    },
    {
      name: "Indonesia",
      value: "ID"
    },
    {
      name: "Iran",
      value: "IR"
    },
    {
      name: "Iraq",
      value: "IQ"
    },
    {
      name: "Ireland",
      value: "IE"
    },
    {
      name: "Ireland, Leinster",
      value: "IEL"
    },
    {
      name: "Ireland, Ulster",
      value: "IEU"
    },
    {
      name: "Ireland, Munster",
      value: "IEM"
    },
    {
      name: "Ireland, Connaught",
      value: "IEC"
    },
    {
      name: "Isle of Man",
      value: "IM"
    },
    {
      name: "Israel",
      value: "IL"
    },
    {
      name: "Italy",
      value: "IT"
    },
    {
      name: "Jamaica",
      value: "JM"
    },
    {
      name: "Japan",
      value: "JP"
    },
    {
      name: "Japan, Aichi Prefecture",
      value: "JP01"
    },
    {
      name: "Japan, Akita Prefecture",
      value: "JP02"
    },
    {
      name: "Japan, Aomori Prefecture",
      value: "JP03"
    },
    {
      name: "Japan, Chiba Prefecture",
      value: "JP04"
    },
    {
      name: "Japan, Ehime Prefecture",
      value: "JP05"
    },
    {
      name: "Japan, Fukui Prefecture",
      value: "JP06"
    },
    {
      name: "Japan, Fukuoka Prefecture",
      value: "JP07"
    },
    {
      name: "Japan, Fukushima Prefecture",
      value: "JP08"
    },
    {
      name: "Japan, Gifu Prefecture",
      value: "JP09"
    },
    {
      name: "Japan, Gunma Prefecture",
      value: "JP10"
    },
    {
      name: "Japan, Hiroshima Prefecture",
      value: "JP11"
    },
    {
      name: "Japan, Hokkaidō Prefecture",
      value: "JP12"
    },
    {
      name: "Japan, Hyōgo Prefecture",
      value: "JP13"
    },
    {
      name: "Japan, Ibaraki Prefecture",
      value: "JP14"
    },
    {
      name: "Japan, Ishikawa Prefecture",
      value: "JP15"
    },
    {
      name: "Japan, Iwate Prefecture",
      value: "JP16"
    },
    {
      name: "Japan, Kagawa Prefecture",
      value: "JP17"
    },
    {
      name: "Japan, Kagoshima Prefecture",
      value: "JP18"
    },
    {
      name: "Japan, Kanagawa Prefecture",
      value: "JP19"
    },
    {
      name: "Japan, Kōchi Prefecture",
      value: "JP20"
    },
    {
      name: "Japan, Kumamoto Prefecture",
      value: "JP21"
    },
    {
      name: "Japan, Kyōto Prefecture",
      value: "JP22"
    },
    {
      name: "Japan, Mie Prefecture",
      value: "JP23"
    },
    {
      name: "Japan, Miyagi Prefecture",
      value: "JP24"
    },
    {
      name: "Japan, Miyazaki Prefecture",
      value: "JP25"
    },
    {
      name: "Japan, Nagano Prefecture",
      value: "JP26"
    },
    {
      name: "Japan, Nagasaki Prefecture",
      value: "JP27"
    },
    {
      name: "Japan, Nara Prefecture",
      value: "JP28"
    },
    {
      name: "Japan, Niigata Prefecture",
      value: "JP29"
    },
    {
      name: "Japan, Ōita Prefecture",
      value: "JP30"
    },
    {
      name: "Japan, Okayama Prefecture",
      value: "JP31"
    },
    {
      name: "Japan, Ōsaka Prefecture",
      value: "JP32"
    },
    {
      name: "Japan, Saga Prefecture",
      value: "JP33"
    },
    {
      name: "Japan, Saitama Prefecture",
      value: "JP34"
    },
    {
      name: "Japan, Shiga Prefecture",
      value: "JP35"
    },
    {
      name: "Japan, Shimane Prefecture",
      value: "JP36"
    },
    {
      name: "Japan, Shizuoka Prefecture",
      value: "JP37"
    },
    {
      name: "Japan, Tochigi Prefecture",
      value: "JP38"
    },
    {
      name: "Japan, Tokushima Prefecture",
      value: "JP39"
    },
    {
      name: "Japan, Tōkyō Prefecture",
      value: "JP40"
    },
    {
      name: "Japan, Tottori Prefecture",
      value: "JP41"
    },
    {
      name: "Japan, Toyama Prefecture",
      value: "JP42"
    },
    {
      name: "Japan, Wakayama Prefecture",
      value: "JP43"
    },
    {
      name: "Japan, Yamagata Prefecture",
      value: "JP44"
    },
    {
      name: "Japan, Yamaguchi Prefecture",
      value: "JP45"
    },
    {
      name: "Japan, Yamanashi Prefecture",
      value: "JP46"
    },
    {
      name: "Japan, Okinawa Prefecture",
      value: "JP47"
    },
    {
      name: "Jersey",
      value: "JE"
    },
    {
      name: "Jordan",
      value: "JO"
    },
    {
      name: "Jordan, Balqa",
      value: "JO02"
    },
    {
      name: "Jordan, Karak",
      value: "JO09"
    },
    {
      name: "Jordan, Tafilah",
      value: "JO12"
    },
    {
      name: "Jordan, Mafraq",
      value: "JO15"
    },
    {
      name: "Jordan, Amman",
      value: "JO16"
    },
    {
      name: "Jordan, Zarqa",
      value: "JO17"
    },
    {
      name: "Jordan, Irbid",
      value: "JO18"
    },
    {
      name: "Jordan, Ma'an",
      value: "JO19"
    },
    {
      name: "Jordan, Ajlun",
      value: "JO20"
    },
    {
      name: "Jordan, Aqaba",
      value: "JO21"
    },
    {
      name: "Jordan, Jerash",
      value: "JO22"
    },
    {
      name: "Jordan, Madaba",
      value: "JO23"
    },
    {
      name: "Kazakhstan",
      value: "KZ"
    },
    {
      name: "Kenya",
      value: "KE"
    },
    {
      name: "Kiribati",
      value: "KI"
    },
    {
      name: "North Korea",
      value: "KP"
    },
    {
      name: "South Korea",
      value: "KR"
    },
    {
      name: "Kuwait",
      value: "KW"
    },
    {
      name: "Kyrgyzstan",
      value: "KG"
    },
    {
      name: "Laos",
      value: "LA"
    },
    {
      name: "Latvia",
      value: "LV"
    },
    {
      name: "Lebanon",
      value: "LB"
    },
    {
      name: "Lesotho",
      value: "LS"
    },
    {
      name: "Liberia",
      value: "LR"
    },
    {
      name: "Libya",
      value: "LY"
    },
    {
      name: "Liechtenstein",
      value: "LI"
    },
    {
      name: "Lithuania",
      value: "LT"
    },
    {
      name: "Luxembourg",
      value: "LU"
    },
    {
      name: "Macao",
      value: "MO"
    },
    {
      name: "Macedonia",
      value: "MK"
    },
    {
      name: "Madagascar",
      value: "MG"
    },
    {
      name: "Malawi",
      value: "MW"
    },
    {
      name: "Malaysia",
      value: "MY"
    },
    {
      name: "Maldives",
      value: "MV"
    },
    {
      name: "Mali",
      value: "ML"
    },
    {
      name: "Malta",
      value: "MT"
    },
    {
      name: "Marshall Islands",
      value: "MH"
    },
    {
      name: "Martinique",
      value: "MQ"
    },
    {
      name: "Mauritania",
      value: "MR"
    },
    {
      name: "Mauritius",
      value: "MU"
    },
    {
      name: "Mayotte",
      value: "YT"
    },
    {
      name: "Mexico",
      value: "MX"
    },
    {
      name: "Mexico, Aguascalientes",
      value: "MX01"
    },
    {
      name: "Mexico, Baja California",
      value: "MX02"
    },
    {
      name: "Mexico, Baja California Sur",
      value: "MX03"
    },
    {
      name: "Mexico, Campeche",
      value: "MX04"
    },
    {
      name: "Mexico, Chiapas",
      value: "MX05"
    },
    {
      name: "Mexico, Chihuahua",
      value: "MX06"
    },
    {
      name: "Mexico, Coahuila",
      value: "MX07"
    },
    {
      name: "Mexico, Colima",
      value: "MX08"
    },
    {
      name: "Mexico, Distrito Federal",
      value: "MX09"
    },
    {
      name: "Mexico, Durango",
      value: "MX10"
    },
    {
      name: "Mexico, Guanajuato",
      value: "MX11"
    },
    {
      name: "Mexico, Guerrero",
      value: "MX12"
    },
    {
      name: "Mexico, Hidalgo",
      value: "MX13"
    },
    {
      name: "Mexico, Jalisco",
      value: "MX14"
    },
    {
      name: "Mexico, México State",
      value: "MX15"
    },
    {
      name: "Mexico, Michoacán",
      value: "MX16"
    },
    {
      name: "Mexico, Morelos",
      value: "MX17"
    },
    {
      name: "Mexico, Nayarit",
      value: "MX18"
    },
    {
      name: "Mexico, Nuevo León",
      value: "MX19"
    },
    {
      name: "Mexico, Oaxaca",
      value: "MX20"
    },
    {
      name: "Mexico, Puebla",
      value: "MX21"
    },
    {
      name: "Mexico, Querétaro",
      value: "MX22"
    },
    {
      name: "Mexico, Quintana Roo",
      value: "MX23"
    },
    {
      name: "Mexico, San Luis Potosí",
      value: "MX24"
    },
    {
      name: "Mexico, Sinaloa",
      value: "MX25"
    },
    {
      name: "Mexico, Sonora",
      value: "MX26"
    },
    {
      name: "Mexico, Tabasco",
      value: "MX27"
    },
    {
      name: "Mexico, Tamaulipas",
      value: "MX28"
    },
    {
      name: "Mexico, Tlaxcala",
      value: "MX29"
    },
    {
      name: "Mexico, Veracruz",
      value: "MX30"
    },
    {
      name: "Mexico, Yucatán",
      value: "MX31"
    },
    {
      name: "Mexico, Zacatecas",
      value: "MX32"
    },
    {
      name: "Micronesia",
      value: "FM"
    },
    {
      name: "Moldova",
      value: "MD"
    },
    {
      name: "Monaco",
      value: "MC"
    },
    {
      name: "Mongolia",
      value: "MN"
    },
    {
      name: "Montenegro",
      value: "ME"
    },
    {
      name: "Montserrat",
      value: "MS"
    },
    {
      name: "Morocco",
      value: "MA"
    },
    {
      name: "Mozambique",
      value: "MZ"
    },
    {
      name: "Myanmar (Burma)",
      value: "MM"
    },
    {
      name: "Namibia",
      value: "NA"
    },
    {
      name: "Nauru",
      value: "NR"
    },
    {
      name: "Nepal",
      value: "NP"
    },
    {
      name: "Netherlands",
      value: "NL"
    },
    {
      name: "New Caledonia",
      value: "NC"
    },
    {
      name: "New Zealand",
      value: "NZ"
    },
    {
      name: "Nicaragua",
      value: "NI"
    },
    {
      name: "Niger",
      value: "NE"
    },
    {
      name: "Nigeria",
      value: "NG"
    },
    {
      name: "Niue",
      value: "NU"
    },
    {
      name: "Norfolk Island",
      value: "NF"
    },
    {
      name: "Northern Mariana Islands",
      value: "MP"
    },
    {
      name: "Norway",
      value: "NO"
    },
    {
      name: "Oman",
      value: "OM"
    },
    {
      name: "Pakistan",
      value: "PK"
    },
    {
      name: "Pakistan, Federally Administered Tribal Areas Territory",
      value: "PK01"
    },
    {
      name: "Pakistan, Balochistān Province",
      value: "PK02"
    },
    {
      name: "Pakistan, North-West Frontier Province",
      value: "PK03"
    },
    {
      name: "Pakistan, Punjab Province",
      value: "PK04"
    },
    {
      name: "Pakistan, Sindh Province",
      value: "PK05"
    },
    {
      name: "Pakistan, Azad Jammu and Kashmir (disputed territory)",
      value: "PK06"
    },
    {
      name: "Pakistan, Federally Administered Northern Areas (disputed territory)",
      value: "PK07"
    },
    {
      name: "Pakistan, Islāmābād",
      value: "PK08"
    },
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
    {
      name: "Uganda",
      value: "UG"
    },
    {
      name: "Ukraine",
      value: "UA"
    },
    {
      name: "United Arab Emirates",
      value: "AE"
    },
    {
      name: "Abū Z̧aby Emirate, United Arab Emirates",
      value: "AE01"
    },
    {
      name: "`Ajmān Emirate, United Arab Emirates",
      value: "AE02"
    },
    {
      name: "Dubayy Emirate, United Arab Emirates",
      value: "AE03"
    },
    {
      name: "Al Fujayrah Emirate, United Arab Emirates",
      value: "AE04"
    },
    {
      name: "Ra's al Khaymah Emirate, United Arab Emirates",
      value: "AE05"
    },
    {
      name: "Ash Shāriqah Emirate, United Arab Emirates",
      value: "AE06"
    },
    {
      name: "Umm al Qaywayn Emirate, United Arab Emirates",
      value: "AE07"
    },
    {
      name: "United Kingdom",
      value: "GB"
    },
    {
      name: "UK, England",
      value: "GBENG"
    },
    {
      name: "UK, Scotland",
      value: "GBSCT"
    },
    {
      name: "UK, Northern Ireland",
      value: "GBNIR"
    },
    {
      name: "UK, Wales",
      value: "GBWLS"
    },
    {
      name: "UK, Isle of Man, Guernsey, and Jersey",
      value: "GB00"
    },
    {
      name: "UK, Dhekelia (Cyprus)",
      value: "GB03"
    },
    {
      name: "UK, Akrotiri (Cyprus)",
      value: "GB05"
    },
    {
      name: "United States of America",
      value: "US"
    },
    {
      name: "US, Alabama",
      value: "USAL"
    },
    {
      name: "US, Alaska",
      value: "USAK"
    },
    {
      name: "US, Arizona",
      value: "USAZ"
    },
    {
      name: "US, Arkansas",
      value: "USAR"
    },
    {
      name: "US, California",
      value: "USCA"
    },
    {
      name: "US, Colorado",
      value: "USCO"
    },
    {
      name: "US, Connecticut",
      value: "USCT"
    },
    {
      name: "US, Delaware",
      value: "USDE"
    },
    {
      name: "US, District of Columbia",
      value: "USDC"
    },
    {
      name: "US, Florida",
      value: "USFL"
    },
    {
      name: "US, Georgia",
      value: "USGA"
    },
    {
      name: "US, Hawaii",
      value: "USHI"
    },
    {
      name: "US, Idaho",
      value: "USID"
    },
    {
      name: "US, Illinois",
      value: "USIL"
    },
    {
      name: "US, Indiana",
      value: "USIN"
    },
    {
      name: "US, Iowa",
      value: "USIA"
    },
    {
      name: "US, Kansas",
      value: "USKS"
    },
    {
      name: "US, Kentucky",
      value: "USKY"
    },
    {
      name: "US, Louisiana",
      value: "USLA"
    },
    {
      name: "US, Maine",
      value: "USME"
    },
    {
      name: "US, Maryland",
      value: "USMD"
    },
    {
      name: "US, Massachusetts",
      value: "USMA"
    },
    {
      name: "US, Michigan",
      value: "USMI"
    },
    {
      name: "US, Minnesota",
      value: "USMN"
    },
    {
      name: "US, Mississippi",
      value: "USMS"
    },
    {
      name: "US, Missouri",
      value: "USMO"
    },
    {
      name: "US, Montana",
      value: "USMT"
    },
    {
      name: "US, Nebraska",
      value: "USNE"
    },
    {
      name: "US, Nevada",
      value: "USNV"
    },
    {
      name: "US, New Hampshire",
      value: "USNH"
    },
    {
      name: "US, New Jersey",
      value: "USNJ"
    },
    {
      name: "US, New Mexico",
      value: "USNM"
    },
    {
      name: "US, New York",
      value: "USNY"
    },
    {
      name: "US, North Carolina",
      value: "USNC"
    },
    {
      name: "US, North Dakota",
      value: "USND"
    },
    {
      name: "US, Ohio",
      value: "USOH"
    },
    {
      name: "US, Oklahoma",
      value: "USOK"
    },
    {
      name: "US, Oregon",
      value: "USOR"
    },
    {
      name: "US, Pennsylvania",
      value: "USPA"
    },
    {
      name: "US, Rhode Island",
      value: "USRI"
    },
    {
      name: "US, South Carolina",
      value: "USSC"
    },
    {
      name: "US, South Dakota",
      value: "USSD"
    },
    {
      name: "US, Tennessee",
      value: "USTN"
    },
    {
      name: "US, Texas",
      value: "USTX"
    },
    {
      name: "US, Utah",
      value: "USUT"
    },
    {
      name: "US, Vermont",
      value: "USVT"
    },
    {
      name: "US, Virginia",
      value: "USVA"
    },
    {
      name: "US, Washington",
      value: "USWA"
    },
    {
      name: "US, West Virginia",
      value: "USWV"
    },
    {
      name: "US, Wisconsin",
      value: "USWI"
    },
    {
      name: "US, Wyoming",
      value: "USWY"
    },
    {
      name: "United States Minor Outlying Islands",
      value: "UM"
    },
    {
      name: "Uruguay",
      value: "UY"
    },
    {
      name: "Uruguay, Artigas",
      value: "UY01"
    },
    {
      name: "Uruguay, Canelones",
      value: "UY02"
    },
    {
      name: "Uruguay, Cerro Largo",
      value: "UY03"
    },
    {
      name: "Uruguay, Colonia",
      value: "UY04"
    },
    {
      name: "Uruguay, Durazno",
      value: "UY05"
    },
    {
      name: "Uruguay, Flores",
      value: "UY06"
    },
    {
      name: "Uruguay, Florida",
      value: "UY07"
    },
    {
      name: "Uruguay, Lavalleja",
      value: "UY08"
    },
    {
      name: "Uruguay, Maldonado",
      value: "UY09"
    },
    {
      name: "Uruguay, Montevideo",
      value: "UY10"
    },
    {
      name: "Uruguay, Paysandú",
      value: "UY11"
    },
    {
      name: "Uruguay, Río Negro",
      value: "UY12"
    },
    {
      name: "Uruguay, Rivera",
      value: "UY13"
    },
    {
      name: "Uruguay, Rocha",
      value: "UY14"
    },
    {
      name: "Uruguay, Salto",
      value: "UY15"
    },
    {
      name: "Uruguay, San José",
      value: "UY16"
    },
    {
      name: "Uruguay, Soriano",
      value: "UY17"
    },
    {
      name: "Uruguay, Tacuarembó",
      value: "UY18"
    },
    {
      name: "Uruguay, Treinta y Tres",
      value: "UY19"
    },
    {
      name: "Uzbekistan",
      value: "UZ"
    },
    {
      name: "Vanuatu",
      value: "VU"
    },
    {
      name: "Venezuela",
      value: "VE"
    },
    {
      name: "Viet Nam",
      value: "VN"
    },
    {
      name: "Virgin Islands, British",
      value: "VG"
    },
    {
      name: "Virgin Islands, U.S.",
      value: "VI"
    },
    {
      name: "Wallis and Futuna",
      value: "WF"
    },
    {
      name: "Western Sahara",
      value: "EH"
    },
    {
      name: "Yemen",
      value: "YE"
    },
    {
      name: "Zambia",
      value: "ZM"
    },
    {
      name: "Zimbabwe",
      value: "ZW"
    }
  ]
};
