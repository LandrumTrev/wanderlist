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
    {
      name: "EARTH",
      value: "XX"
    },
    {
      name: "Afghanistan",
      value: "AF"
    },
    {
      name: "Badakhshan Province, Afghanistan",
      value: "AF01"
    },
    {
      name: "Badghis Province, Afghanistan",
      value: "AF02"
    },
    {
      name: "Baghlan Province, Afghanistan",
      value: "AF03"
    },
    {
      name: "Bamyan Province, Afghanistan",
      value: "AF05"
    },
    {
      name: "Farah Province, Afghanistan",
      value: "AF06"
    },
    {
      name: "Faryab Province, Afghanistan",
      value: "AF07"
    },
    {
      name: "Ghazni Province, Afghanistan",
      value: "AF08"
    },
    {
      name: "Ghor Province, Afghanistan",
      value: "AF09"
    },
    {
      name: "Helmand Province, Afghanistan",
      value: "AF10"
    },
    {
      name: "Herat Province, Afghanistan",
      value: "AF11"
    },
    {
      name: "Kabul Province, Afghanistan",
      value: "AF13"
    },
    {
      name: "Kapisa Province, Afghanistan",
      value: "AF14"
    },
    {
      name: "Lowgar Province, Afghanistan",
      value: "AF17"
    },
    {
      name: "Nangarhar Province, Afghanistan",
      value: "AF18"
    },
    {
      name: "Nimruz Province, Afghanistan",
      value: "AF19"
    },
    {
      name: "Kandahar Province, Afghanistan",
      value: "AF23"
    },
    {
      name: "Kondoz Province, Afghanistan",
      value: "AF24"
    },
    {
      name: "Takhar Province, Afghanistan",
      value: "AF26"
    },
    {
      name: "Vardak Province, Afghanistan",
      value: "AF27"
    },
    {
      name: "Zabol Province, Afghanistan",
      value: "AF28"
    },
    {
      name: "Paktika Province, Afghanistan",
      value: "AF29"
    },
    {
      name: "Balkh Province, Afghanistan",
      value: "AF30"
    },
    {
      name: "Jowzjan Province, Afghanistan",
      value: "AF31"
    },
    {
      name: "Samangan Province, Afghanistan",
      value: "AF32"
    },
    {
      name: "Sar-e Pol Province, Afghanistan",
      value: "AF33"
    },
    {
      name: "Konar Province, Afghanistan",
      value: "AF34"
    },
    {
      name: "Laghman Province, Afghanistan",
      value: "AF35"
    },
    {
      name: "Paktia Province, Afghanistan",
      value: "AF36"
    },
    {
      name: "Khost Province, Afghanistan",
      value: "AF37"
    },
    {
      name: "Nurestan Province, Afghanistan",
      value: "AF38"
    },
    {
      name: "Orūzgān Province, Afghanistan",
      value: "AF39"
    },
    {
      name: "Parvān Province, Afghanistan",
      value: "AF40"
    },
    {
      name: "Daykundi Province, Afghanistan",
      value: "AF41"
    },
    {
      name: "Panjshīr Province, Afghanistan",
      value: "AF42"
    },
    {
      name: "Albania",
      value: "AL"
    },
    {
      name: "Algeria",
      value: "DZ"
    },
    {
      name: "Alger Province, Algeria",
      value: "DZ01"
      // value: "AG01"
    },
    {
      name: "Batna Province, Algeria",
      value: "DZ03"
      // value: "AG03"
    },
    {
      name: "Constantine Province, Algeria",
      value: "DZ04"
      // value: "AG04"
    },
    {
      name: "Médéa Province, Algeria",
      value: "DZ06"
      // value: "AG06"
    },
    {
      name: "Mostaganem Province, Algeria",
      value: "DZ07"
      // value: "AG07"
    },
    {
      name: "Oran Province, Algeria",
      value: "DZ09"
      // value: "AG09"
    },
    {
      name: "Saïda Province, Algeria",
      value: "DZ10"
      // value: "AG10"
    },
    {
      name: "Sétif Province, Algeria",
      value: "DZ12"
      // value: "AG12"
    },
    {
      name: "Tiaret Province, Algeria",
      value: "DZ13"
      // value: "AG13"
    },
    {
      name: "Tizi Ouzou Province, Algeria",
      value: "DZ14"
      // value: "AG14"
    },
    {
      name: "Tlemcen Province, Algeria",
      value: "DZ15"
      // value: "AG15"
    },
    {
      name: "Bejaïa Province, Algeria",
      value: "DZ18"
      // value: "AG18"
    },
    {
      name: "Biskra Province, Algeria",
      value: "DZ19"
      // value: "AG19"
    },
    {
      name: "Blida Province, Algeria",
      value: "DZ20"
      // value: "AG20"
    },
    {
      name: "Bouira Province, Algeria",
      value: "DZ21"
      // value: "AG21"
    },
    {
      name: "Djelfa Province, Algeria",
      value: "DZ22"
      // value: "AG22"
    },
    {
      name: "Guelma Province, Algeria",
      value: "DZ23"
      // value: "AG23"
    },
    {
      name: "Jijel Province, Algeria",
      value: "DZ24"
      // value: "AG24"
    },
    {
      name: "Laghouat Province, Algeria",
      value: "DZ25"
      // value: "AG25"
    },
    {
      name: "Muaskar Province, Algeria",
      value: "DZ26"
      // value: "AG26"
    },
    {
      name: "M'Sila Province, Algeria",
      value: "DZ27"
      // value: "AG27"
    },
    {
      name: "Oum el Bouaghi Province, Algeria",
      value: "DZ29"
      // value: "AG29"
    },
    {
      name: "Sidi Bel Abbès Province, Algeria",
      value: "DZ30"
      // value: "AG30"
    },
    {
      name: "Skikda Province, Algeria",
      value: "DZ31"
      // value: "AG31"
    },
    {
      name: "Tébessa Province, Algeria",
      value: "DZ33"
      // value: "AG33"
    },
    {
      name: "Adrar Province, Algeria",
      value: "DZ34"
      // value: "AG34"
    },
    {
      name: "Aïn Defla Province, Algeria",
      value: "DZ35"
      // value: "AG35"
    },
    {
      name: "Aïn Temouchent Province, Algeria",
      value: "DZ36"
      // value: "AG36"
    },
    {
      name: "Annaba Province, Algeria",
      value: "DZ37"
      // value: "AG37"
    },
    {
      name: "Béchar Province, Algeria",
      value: "DZ38"
      // value: "AG38"
    },
    {
      name: "Bordj Bou Arréridj Province, Algeria",
      value: "DZ39"
      // value: "AG39"
    },
    {
      name: "Boumerdes Province, Algeria",
      value: "AG40"
    },
    {
      name: "Chlef Province, Algeria",
      value: "DZ41"
      // value: "AG41"
    },
    {
      name: "El Bayadh Province, Algeria",
      value: "DZ42"
      // value: "AG42"
    },
    {
      name: "El Oued Province, Algeria",
      value: "DZ43"
      // value: "AG43"
    },
    {
      name: "El Tarf Province, Algeria",
      value: "DZ44"
      // value: "AG44"
    },
    {
      name: "Ghardaïa Province, Algeria",
      value: "DZ45"
      // value: "AG45"
    },
    {
      name: "Illizi Province, Algeria",
      value: "DZ46"
      // value: "AG46"
    },
    {
      name: "Khenchela Province, Algeria",
      value: "DZ47"
      // value: "AG47"
    },
    {
      name: "Mila Province, Algeria",
      value: "DZ48"
      // value: "AG48"
    },
    {
      name: "Naama Province, Algeria",
      value: "DZ49"
      // value: "AG49"
    },
    {
      name: "Ouargla Province, Algeria",
      value: "DZ50"
      // value: "AG50"
    },
    {
      name: "Relizane Province, Algeria",
      value: "DZ51"
      // value: "AG51"
    },
    {
      name: "Souk Ahras Province, Algeria",
      value: "DZ52"
      // value: "AG52"
    },
    {
      name: "Tamanghasset Province, Algeria",
      value: "DZ53"
      // value: "AG53"
    },
    {
      name: "Tindouf Province, Algeria",
      value: "DZ54"
      // value: "AG54"
    },
    {
      name: "Tipaza Province, Algeria",
      value: "DZ55"
      // value: "AG55"
    },
    {
      name: "Tissemsilt Province, Algeria",
      value: "DZ56"
      // value: "AG56"
    },
    {
      name: "American Samoa",
      value: "AS"
    },
    {
      name: "Andorra",
      value: "AD"
    },
    {
      name: "Angola",
      value: "AO"
    },
    {
      name: "Anguilla",
      value: "AI"
    },
    {
      name: "Antarctica",
      value: "AQ"
    },
    {
      name: "Antigua and Barbuda",
      value: "AG"
    },
    {
      name: "Barbuda Dependency, Antigua and Barbuda",
      value: "AG01"
      // value: "AC01"
    },
    {
      name: "Saint George Parish, Antigua and Barbuda",
      value: "AG03"
      // value: "AC03"
    },
    {
      name: "Saint John Parish, Antigua and Barbuda",
      value: "AG04"
      // value: "AC04"
    },
    {
      name: "Saint Mary Parish, Antigua and Barbuda",
      value: "AG05"
      // value: "AC05"
    },
    {
      name: "Saint Paul Parish, Antigua and Barbuda",
      value: "AG06"
      // value: "AC06"
    },
    {
      name: "Saint Peter Parish, Antigua and Barbuda",
      value: "AG07"
      // value: "AC07"
    },
    {
      name: "Saint Philip Parish, Antigua and Barbuda",
      value: "AG08"
      // value: "AC08"
    },
    {
      name: "Redonda Dependency, Antigua and Barbuda",
      value: "AG09"
      // value: "AC09"
    },
    {
      name: "Argentina",
      value: "AR"
    },
    {
      name: "Argentina, Buenos Aires Province",
      value: "AR01"
    },
    {
      name: "Argentina, Catamarca Province",
      value: "AR02"
    },
    {
      name: "Argentina, Chaco Province",
      value: "AR03"
    },
    {
      name: "Argentina, Chubut Province",
      value: "AR04"
    },
    {
      name: "Argentina, Córdoba Province",
      value: "AR05"
    },
    {
      name: "Argentina, Corrientes Province",
      value: "AR06"
    },
    {
      name: "Argentina, Distrito Federal",
      value: "AR07"
    },
    {
      name: "Argentina, Entre Ríos Province",
      value: "AR08"
    },
    {
      name: "Argentina, Formosa Province",
      value: "AR09"
    },
    {
      name: "Argentina, Jujuy Province",
      value: "AR10"
    },
    {
      name: "Argentina, La Pampa Province",
      value: "AR11"
    },
    {
      name: "Argentina, La Rioja Province",
      value: "AR12"
    },
    {
      name: "Argentina, Mendoza Province",
      value: "AR13"
    },
    {
      name: "Argentina, Misiones Province",
      value: "AR14"
    },
    {
      name: "Argentina, Neuquén Province",
      value: "AR15"
    },
    {
      name: "Argentina, Río Negro Province",
      value: "AR16"
    },
    {
      name: "Argentina, Salta Province",
      value: "AR17"
    },
    {
      name: "Argentina, San Juan Province",
      value: "AR18"
    },
    {
      name: "Argentina, San Luis Province",
      value: "AR19"
    },
    {
      name: "Argentina, Santa Cruz Province",
      value: "AR20"
    },
    {
      name: "Argentina, Santa Fe Province",
      value: "AR21"
    },
    {
      name: "Argentina, Santiago del Estero Province",
      value: "AR22"
    },
    {
      name: "Argentina, Tierra del Fuego, Antártida e Islas del Atlántico Sur Province",
      value: "AR23"
    },
    {
      name: "Argentina, Tucumán Province",
      value: "AR24"
    },
    {
      name: "Armenia",
      value: "AM"
    },
    {
      name: "Armenia, Aragatsotn Province",
      value: "AM01"
    },
    {
      name: "Armenia, Ararat Province",
      value: "AM02"
    },
    {
      name: "Armenia, Armavir Province",
      value: "AM03"
    },
    {
      name: "Armenia, Geghark'unik' Province",
      value: "AM04"
    },
    {
      name: "Armenia, Kotayk' Province",
      value: "AM05"
    },
    {
      name: "Armenia, Lorri Province",
      value: "AM06"
    },
    {
      name: "Armenia, Shirak Province",
      value: "AM07"
    },
    {
      name: "Armenia, Syunik' Province",
      value: "AM08"
    },
    {
      name: "Armenia, Tavush Province",
      value: "AM09"
    },
    {
      name: "Armenia, Vayots' Dzor Province",
      value: "AM10"
    },
    {
      name: "Armenia, Yerevan City",
      value: "AM11"
    },
    {
      name: "Aruba",
      value: "AW"
    },
    {
      name: "Australia",
      value: "AU"
    },
    {
      name: "Austria",
      value: "AT"
    },
    {
      name: "Austria, Burgenland State",
      value: "AT01"
    },
    {
      name: "Austria, Kärnten State",
      value: "AT02"
    },
    {
      name: "Austria, Niederösterreich State",
      value: "AT03"
    },
    {
      name: "Austria, Oberösterreich State",
      value: "AT04"
    },
    {
      name: "Austria, Salzburg State",
      value: "AT05"
    },
    {
      name: "Austria, Steiermark State",
      value: "AT06"
    },
    {
      name: "Austria, Tirol State",
      value: "AT07"
    },
    {
      name: "Austria, Vorarlberg State",
      value: "AT08"
    },
    {
      name: "Austria, Wien State",
      value: "AT09"
    },
    {
      name: "Azerbaijan",
      value: "AZ"
    },
    {
      name: "Abşeron Rayon, Azerbaijan",
      value: "AZ01"
      // value: "AJ01"
    },
    {
      name: "Ağcabǝdi Rayon, Azerbaijan",
      value: "AZ02"
      // value: "AJ02"
    },
    {
      name: "Ağdam Rayon, Azerbaijan",
      value: "AZ03"
      // value: "AJ03"
    },
    {
      name: "Ağdaş Rayon, Azerbaijan",
      value: "AZ04"
      // value: "AJ04"
    },
    {
      name: "Ağstafa Rayon, Azerbaijan",
      value: "AZ05"
      // value: "AJ05"
    },
    {
      name: "Ağsu Rayon, Azerbaijan",
      value: "AZ06"
      // value: "AJ06"
    },
    {
      name: "Əli Bayramlı City, Azerbaijan",
      value: "AZ07"
      // value: "AJ07"
    },
    {
      name: "Astara Rayon, Azerbaijan",
      value: "AZ08"
      // value: "AJ08"
    },
    {
      name: "Bakı City, Azerbaijan",
      value: "AZ09"
      // value: "AJ09"
    },
    {
      name: "Balakǝn Rayon, Azerbaijan",
      value: "AZ10"
      // value: "AJ10"
    },
    {
      name: "Bǝrdǝ Rayon, Azerbaijan",
      value: "AZ11"
      // value: "AJ11"
    },
    {
      name: "Beylǝqan Rayon, Azerbaijan",
      value: "AZ12"
      // value: "AJ12"
    },
    {
      name: "Biläsuvar Rayon, Azerbaijan",
      value: "AZ13"
      // value: "AJ13"
    },
    {
      name: "Cǝbrayıl Rayon, Azerbaijan",
      value: "AZ14"
      // value: "AJ14"
    },
    {
      name: "Cǝlilabad Rayon, Azerbaijan",
      value: "AZ15"
      // value: "AJ15"
    },
    {
      name: "Daşkǝsǝn Rayon, Azerbaijan",
      value: "AZ16"
      // value: "AJ16"
    },
    {
      name: "Dǝvǝçi Rayon, Azerbaijan",
      value: "AZ17"
      // value: "AJ17"
    },
    {
      name: "Füzuli Rayon, Azerbaijan",
      value: "AZ18"
      // value: "AJ18"
    },
    {
      name: "Gǝdǝbǝy Rayon, Azerbaijan",
      value: "AZ19"
      // value: "AJ19"
    },
    {
      name: "Gǝncǝ City, Azerbaijan",
      value: "AZ20"
      // value: "AJ20"
    },
    {
      name: "Goranboy Rayon, Azerbaijan",
      value: "AZ21"
      // value: "AJ21"
    },
    {
      name: "Göyçay Rayon, Azerbaijan",
      value: "AZ22"
      // value: "AJ22"
    },
    {
      name: "Hacıqabul Rayon, Azerbaijan",
      value: "AZ23"
      // value: "AJ23"
    },
    {
      name: "İmişli Rayon, Azerbaijan",
      value: "AZ24"
      // value: "AJ24"
    },
    {
      name: "İsmayıllı Rayon, Azerbaijan",
      value: "AZ25"
      // value: "AJ25"
    },
    {
      name: "Kǝlbǝcǝr Rayon, Azerbaijan",
      value: "AZ26"
      // value: "AJ26"
    },
    {
      name: "Kürdämir Rayon, Azerbaijan",
      value: "AZ27"
      // value: "AJ27"
    },
    {
      name: "Laçın Rayon, Azerbaijan",
      value: "AZ28"
      // value: "AJ28"
    },
    {
      name: "Lǝnkǝran Rayon, Azerbaijan",
      value: "AZ29"
      // value: "AJ29"
    },
    {
      name: "Lǝnkǝran City, Azerbaijan",
      value: "AZ30"
      // value: "AJ30"
    },
    {
      name: "Lerik Rayon, Azerbaijan",
      value: "AZ31"
      // value: "AJ31"
    },
    {
      name: "Masallı Rayon, Azerbaijan",
      value: "AZ32"
      // value: "AJ32"
    },
    {
      name: "Mingǝcevir City, Azerbaijan",
      value: "AZ33"
      // value: "AJ33"
    },
    {
      name: "Naftalan City, Azerbaijan",
      value: "AZ34"
      // value: "AJ34"
    },
    {
      name: "Nakhichevan Autonomous Republic, Azerbaijan",
      value: "AZ35"
      // value: "AJ35"
    },
    {
      name: "Neftçala Rayon, Azerbaijan",
      value: "AZ36"
      // value: "AJ36"
    },
    {
      name: "Oğuz Rayon, Azerbaijan",
      value: "AZ37"
      // value: "AJ37"
    },
    {
      name: "Qǝbǝlǝ Rayon, Azerbaijan",
      value: "AZ38"
      // value: "AJ38"
    },
    {
      name: "Qax Rayon, Azerbaijan",
      value: "AZ39"
      // value: "AJ39"
    },
    {
      name: "Qazax Rayon, Azerbaijan",
      value: "AZ40"
      // value: "AJ40"
    },
    {
      name: "Qobustan Rayon, Azerbaijan",
      value: "AZ41"
      // value: "AJ41"
    },
    {
      name: "Quba Rayon, Azerbaijan",
      value: "AZ42"
      // value: "AJ42"
    },
    {
      name: "Qubadlı Rayon, Azerbaijan",
      value: "AZ43"
      // value: "AJ43"
    },
    {
      name: "Qusar Rayon, Azerbaijan",
      value: "AZ44"
      // value: "AJ44"
    },
    {
      name: "Saatlı Rayon, Azerbaijan",
      value: "AZ45"
      // value: "AJ45"
    },
    {
      name: "Sabirabad Rayon, Azerbaijan",
      value: "AZ46"
      // value: "AJ46"
    },
    {
      name: "Şǝki Rayon, Azerbaijan",
      value: "AZ47"
      // value: "AJ47"
    },
    {
      name: "Şǝki City, Azerbaijan",
      value: "AZ48"
      // value: "AJ48"
    },
    {
      name: "Salyan Rayon, Azerbaijan",
      value: "AZ49"
      // value: "AJ49"
    },
    {
      name: "Şamaxı Rayon, Azerbaijan",
      value: "AZ50"
      // value: "AJ50"
    },
    {
      name: "Şǝmkir Rayon, Azerbaijan",
      value: "AZ51"
      // value: "AJ51"
    },
    {
      name: "Samux Rayon, Azerbaijan",
      value: "AZ52"
      // value: "AJ52"
    },
    {
      name: "Siyǝzǝn Rayon, Azerbaijan",
      value: "AZ53"
      // value: "AJ53"
    },
    {
      name: "Sumqayıt Rayon, Azerbaijan",
      value: "AZ54"
      // value: "AJ54"
    },
    {
      name: "Şuşa Rayon, Azerbaijan",
      value: "AZ55"
      // value: "AJ55"
    },
    {
      name: "Şuşa City, Azerbaijan",
      value: "AZ56"
      // value: "AJ56"
    },
    {
      name: "Tǝrtǝr Rayon, Azerbaijan",
      value: "AZ57"
      // value: "AJ57"
    },
    {
      name: "Tovuz Rayon, Azerbaijan",
      value: "AZ58"
      // value: "AJ58"
    },
    {
      name: "Ucar Rayon, Azerbaijan",
      value: "AZ59"
      // value: "AJ59"
    },
    {
      name: "Xaçmaz Rayon, Azerbaijan",
      value: "AZ60"
      // value: "AJ60"
    },
    {
      name: "Xankǝndi City, Azerbaijan",
      value: "AZ61"
      // value: "AJ61"
    },
    {
      name: "Goygol Rayon, Azerbaijan, formerly Xanlar Rayon",
      value: "AZ62"
      // value: "AJ62"
    },
    {
      name: "Xızı Rayon, Azerbaijan",
      value: "AZ63"
      // value: "AJ63"
    },
    {
      name: "Xocalı Rayon, Azerbaijan",
      value: "AZ64"
      // value: "AJ64"
    },
    {
      name: "Xocavǝnd Rayon, Azerbaijan",
      value: "AZ65"
      // value: "AJ65"
    },
    {
      name: "Yardımlı Rayon, Azerbaijan",
      value: "AZ66"
      // value: "AJ66"
    },
    {
      name: "Yevlax Rayon, Azerbaijan",
      value: "AZ67"
      // value: "AJ67"
    },
    {
      name: "Yevlax City, Azerbaijan",
      value: "AZ68"
      // value: "AJ68"
    },
    {
      name: "Zǝngilan Rayon, Azerbaijan",
      value: "AZ69"
      // value: "AJ69"
    },
    {
      name: "Zaqatala Rayon, Azerbaijan",
      value: "AZ70"
      // value: "AJ70"
    },
    {
      name: "Zǝrdab Rayon, Azerbaijan",
      value: "AZ71"
      // value: "AJ71"
    },
    {
      name: "Bahrain",
      value: "BH"
    },
    {
      name: "Bahamas",
      value: "BS"
    },
    {
      name: "Bangladesh",
      value: "BD"
    },
    {
      name: "Barbados",
      value: "BB"
    },
    {
      name: "Belarus",
      value: "BY"
    },
    {
      name: "Belgium",
      value: "BE"
    },
    {
      name: "Belize",
      value: "BZ"
    },
    {
      name: "Benin",
      value: "BJ"
    },
    {
      name: "Bermuda",
      value: "BM"
    },
    {
      name: "Bhutan",
      value: "BT"
    },
    {
      name: "Bolivia",
      value: "BO"
    },
    {
      name: "Bonaire, Sint Eustatius and Saba",
      value: "BQ"
    },
    {
      name: "Bosnia and Herzegovina",
      value: "BA"
    },
    {
      name: "Botswana",
      value: "BW"
    },
    {
      name: "Bouvet Island",
      value: "BV"
    },
    {
      name: "Brazil",
      value: "BR"
    },
    {
      name: "Brazil, Acre State",
      value: "BR01"
    },
    {
      name: "Brazil, Alagoas State",
      value: "BR02"
    },
    {
      name: "Brazil, Amapá State",
      value: "BR03"
    },
    {
      name: "Brazil, Amazonas State",
      value: "BR04"
    },
    {
      name: "Brazil, Bahia State",
      value: "BR05"
    },
    {
      name: "Brazil, Ceará State",
      value: "BR06"
    },
    {
      name: "Brazil, Distrito Federal",
      value: "BR07"
    },
    {
      name: "Brazil, Espírito Santo State",
      value: "BR08"
    },
    {
      name: "Brazil, Mato Grosso do Sul State",
      value: "BR11"
    },
    {
      name: "Brazil, Maranhão State",
      value: "BR13"
    },
    {
      name: "Brazil, Mato Grosso State",
      value: "BR14"
    },
    {
      name: "Brazil, Minas Gerais State",
      value: "BR15"
    },
    {
      name: "Brazil, Pará State",
      value: "BR16"
    },
    {
      name: "Brazil, Paraíba State",
      value: "BR17"
    },
    {
      name: "Brazil, Paraná State",
      value: "BR18"
    },
    {
      name: "Brazil, Piauí State",
      value: "BR20"
    },
    {
      name: "Brazil, Rio de Janeiro State",
      value: "BR21"
    },
    {
      name: "Brazil, Rio Grande do Norte State",
      value: "BR22"
    },
    {
      name: "Brazil, Rio Grande do Sul State",
      value: "BR23"
    },
    {
      name: "Brazil, Rondônia State",
      value: "BR24"
    },
    {
      name: "Brazil, Roraima State",
      value: "BR25"
    },
    {
      name: "Brazil, Santa Catarina State",
      value: "BR26"
    },
    {
      name: "Brazil, São Paulo State",
      value: "BR27"
    },
    {
      name: "Brazil, Sergipe State",
      value: "BR28"
    },
    {
      name: "Brazil, Goiás State",
      value: "BR29"
    },
    {
      name: "Brazil, Pernambuco State",
      value: "BR30"
    },
    {
      name: "Brazil, Tocantins State",
      value: "BR31"
    },
    {
      name: "British Indian Ocean Territory",
      value: "IO"
    },
    {
      name: "Brunei Darussalam",
      value: "BN"
    },
    {
      name: "Bulgaria",
      value: "BG"
    },
    {
      name: "Burkina Faso",
      value: "BF"
    },
    {
      name: "Burundi",
      value: "BI"
    },
    {
      name: "Cambodia",
      value: "KH"
    },
    {
      name: "Cameroon",
      value: "CM"
    },
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
    {
      name: "Cape Verde",
      value: "CV"
    },
    {
      name: "Cayman Islands",
      value: "KY"
    },
    {
      name: "Central African Republic",
      value: "CF"
    },
    {
      name: "Chad",
      value: "TD"
    },
    {
      name: "Chile",
      value: "CL"
    },
    {
      name: "China",
      value: "CN"
    },
    {
      name: "China, Anhui Province",
      value: "CN01"
    },
    {
      name: "China, Zhejiang Province",
      value: "CN02"
    },
    {
      name: "China, Jiangxi Province",
      value: "CN03"
    },
    {
      name: "China, Jiangsu Province",
      value: "CN04"
    },
    {
      name: "China, Jilin Province",
      value: "CN05"
    },
    {
      name: "China, Qinghai Province",
      value: "CN06"
    },
    {
      name: "China, Fujian Province",
      value: "CN07"
    },
    {
      name: "China, Heilongjiang Province",
      value: "CN08"
    },
    {
      name: "China, Henan Province",
      value: "CN09"
    },
    {
      name: "China, Hebei Province",
      value: "CN10"
    },
    {
      name: "China, Hunan Province",
      value: "CN11"
    },
    {
      name: "China, Hubei Province",
      value: "CN12"
    },
    {
      name: "China, Xinjiang Autonomous Region",
      value: "CN13"
    },
    {
      name: "China, Xizang Autonomous Region",
      value: "CN14"
    },
    {
      name: "China, Gansu Province",
      value: "CN15"
    },
    {
      name: "China, Guangxi Autonomous Region",
      value: "CN16"
    },
    {
      name: "China, Guizhou Province",
      value: "CN18"
    },
    {
      name: "China, Liaoning Province",
      value: "CN19"
    },
    {
      name: "China, Nei Mongol Autonomous Region",
      value: "CN20"
    },
    {
      name: "China, Ningxia Autonomous Region",
      value: "CN21"
    },
    {
      name: "China, Beijing Municipality",
      value: "CN22"
    },
    {
      name: "China, Shanghai Municipality",
      value: "CN23"
    },
    {
      name: "China, Shanxi Province",
      value: "CN24"
    },
    {
      name: "China, Shandong Province",
      value: "CN25"
    },
    {
      name: "China, Shaanxi Province",
      value: "CN26"
    },
    {
      name: "China, Tianjin Municipality",
      value: "CN28"
    },
    {
      name: "China, Yunnan Province",
      value: "CN29"
    },
    {
      name: "China, Guangdong Province",
      value: "CN30"
    },
    {
      name: "China, Hainan Province",
      value: "CN31"
    },
    {
      name: "China, Sichuan Province",
      value: "CN32"
    },
    {
      name: "China, Chongqing Municipality",
      value: "CN33"
    },
    {
      name: "Christmas Island",
      value: "CX"
    },
    {
      name: "Cocos (Keeling) Islands",
      value: "CC"
    },
    {
      name: "Colombia",
      value: "CO"
    },
    {
      name: "Comoros",
      value: "KM"
    },
    {
      name: "Congo",
      value: "CG"
    },
    {
      name: "Congo, Democratic Republic of",
      value: "CD"
    },
    {
      name: "Cook Islands",
      value: "CK"
    },
    {
      name: "Costa Rica",
      value: "CR"
    },
    {
      name: "Costa Rica, Alajuela",
      value: "CR01"
    },
    {
      name: "Costa Rica, Cartago",
      value: "CR02"
    },
    {
      name: "Costa Rica, Guanacaste",
      value: "CR03"
    },
    {
      name: "Costa Rica, Heredia",
      value: "CR04"
    },
    {
      name: "Costa Rica, Limón",
      value: "CR06"
    },
    {
      name: "Costa Rica, Puntarenas",
      value: "CR07"
    },
    {
      name: "Costa Rica, San José",
      value: "CR08"
    },
    {
      name: "Côte d'Ivoire",
      value: "CI"
    },
    {
      name: "Croatia",
      value: "HR"
    },
    {
      name: "Cuba",
      value: "CU"
    },
    {
      name: "Cuba, Pinar del Río",
      value: "CU01"
    },
    {
      name: "Cuba, Ciudad de La Habana",
      value: "CU02"
    },
    {
      name: "Cuba, Matanzas",
      value: "CU03"
    },
    {
      name: "Cuba, Isla de la Juventud",
      value: "CU04"
    },
    {
      name: "Cuba, Camagüey",
      value: "CU05"
    },
    {
      name: "Cuba, Ciego de Ávila",
      value: "CU07"
    },
    {
      name: "Cuba, Cienfuegos",
      value: "CU08"
    },
    {
      name: "Cuba, Granma",
      value: "CU09"
    },
    {
      name: "Cuba, Guantánamo",
      value: "CU10"
    },
    {
      name: "Cuba, La Habana",
      value: "CU11"
    },
    {
      name: "Cuba, Holguín",
      value: "CU12"
    },
    {
      name: "Cuba, Las Tunas",
      value: "CU13"
    },
    {
      name: "Cuba, Sancti Spíritus",
      value: "CU14"
    },
    {
      name: "Cuba, Santiago de Cuba",
      value: "CU15"
    },
    {
      name: "Cuba, Villa Clara",
      value: "CU16"
    },
    {
      name: "Curaçao",
      value: "CW"
    },
    {
      name: "Cyprus",
      value: "CY"
    },
    {
      name: "Czech Republic",
      value: "CZ"
    },
    {
      name: "Czech Republic, Prague (Praha)",
      value: "CZ52"
    },
    {
      name: "Czech Republic, South Moravia (Jihomoravský)",
      value: "CZ78"
    },
    {
      name: "Czech Republic, South Bohemia (Jihočeský)",
      value: "CZ79"
    },
    {
      name: "Czech Republic, Vysočina",
      value: "CZ80"
    },
    {
      name: "Czech Republic, Karlovy Vary (Karlovarský)",
      value: "CZ81"
    },
    {
      name: "Czech Republic, Hradec Králové (Královéhradecký)",
      value: "CZ82"
    },
    {
      name: "Czech Republic, Liberec (Liberecký)",
      value: "CZ83"
    },
    {
      name: "Czech Republic, Olomouc (Olomoucký)",
      value: "CZ84"
    },
    {
      name: "Czech Republic, Moravia-Silesia (Moravskoslezský)",
      value: "CZ85"
    },
    {
      name: "Czech Republic, Pardubice (Pardubický)",
      value: "CZ86"
    },
    {
      name: "Czech Republic, Plzeň (Plzeňský)",
      value: "CZ87"
    },
    {
      name: "Czech Republic, Central Bohemia (Středočeský)",
      value: "CZ88"
    },
    {
      name: "Czech Republic, Ústí nad Labem (Ústecký)",
      value: "CZ89"
    },
    {
      name: "Czech Republic, Zlín (Zlínský)",
      value: "CZ90"
    },
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
    {
      name: "Russian Federation",
      value: "RU"
    },
    {
      name: "Rwanda",
      value: "RW"
    },
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
