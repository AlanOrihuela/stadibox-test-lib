#!/usr/local/bin/node
const user = require('./models/user'),
    i18n = require('./models/i18n'),
    timezone = require('./models/timezone'),
    session = require('./models/session');

let populators = [
    {
        // Country
        model: i18n.Country,
        verifyProperty: 'id',
        data: [
            {
                id: 'AD',
                name: "Andorra",
                dialCode: '376',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 251
            },
            {
                id: 'AE',
                name: "Emiratos Árabes Unidos",
                dialCode: '971',
                currencyId: 'AED',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 163
            },
            {
                id: 'AF',
                name: "Afganistán",
                dialCode: '93',
                currencyId: 'AFN',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 68
            },
            {
                id: 'AG',
                name: "Antigua y Barbuda",
                dialCode: '1268',
                currencyId: 'XCD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 164
            },
            {
                id: 'AI',
                name: "Anguila",
                dialCode: '1264',
                currencyId: 'XCD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 165
            },
            {
                id: 'AL',
                name: "Albania",
                dialCode: '355',
                currencyId: 'ALL',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 166
            },
            {
                id: 'AM',
                name: "Armenia",
                dialCode: '374',
                currencyId: 'AMD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 69
            },
            {
                id: 'AO',
                name: "Angola",
                dialCode: '244',
                currencyId: 'AOA',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 168
            },
            {
                id: 'AQ',
                name: "Antártida",
                dialCode: '672',
                currencyId: 'USD',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 169
            },
            {
                id: 'AR',
                name: "Argentina",
                dialCode: '54',
                currencyId: 'ARS',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 203
            },
            {
                id: 'AS',
                name: "Samoa Americana",
                dialCode: '1684',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 170
            },
            {
                id: 'AT',
                name: "Austria",
                dialCode: '43',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 171
            },
            {
                id: 'AU',
                name: "Australia",
                dialCode: '61',
                currencyId: 'AUD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 172
            },
            {
                id: 'AW',
                name: "Aruba",
                dialCode: '297',
                currencyId: 'AWG',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 70
            },
            {
                id: 'AX',
                name: "Islas Aland",
                dialCode: '358',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: null
            },
            {
                id: 'AZ',
                name: "Azerbaiyán",
                dialCode: '994',
                currencyId: 'AZN',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 173
            },
            {
                id: 'BA',
                name: "Bosnia y Herzegovina",
                dialCode: '387',
                currencyId: 'BAM',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 174
            },
            {
                id: 'BB',
                name: "Barbados",
                dialCode: '1246',
                currencyId: 'BBD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 175
            },
            {
                id: 'BD',
                name: "Bangladesh",
                dialCode: '880',
                currencyId: 'BDT',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 204
            },
            {
                id: 'BE',
                name: "Bélgica",
                dialCode: '32',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 176
            },
            {
                id: 'BF',
                name: "Burkina Faso",
                dialCode: '226',
                currencyId: 'XOF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 177
            },
            {
                id: 'BG',
                name: "Bulgaria",
                dialCode: '359',
                currencyId: 'BGN',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 178
            },
            {
                id: 'BH',
                name: "Bahrein",
                dialCode: '973',
                currencyId: 'BHD',
                payPalAccepted: true,
                cardsAccepted: false,
                lsId: 179
            },
            {
                id: 'BI',
                name: "Burundi",
                dialCode: '257',
                currencyId: 'BIF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 205
            },
            {
                id: 'BJ',
                name: "Benin",
                dialCode: '229',
                currencyId: 'XOF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 180
            },
            {
                id: 'BL',
                name: "San Bartolomé",
                dialCode: '590',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: null
            },
            {
                id: 'BM',
                name: "Islas Bermudas",
                dialCode: '1441',
                currencyId: 'BMD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 181
            },
            {
                id: 'BN',
                name: "Brunei Darussalam",
                dialCode: '673',
                currencyId: 'BND',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 182
            },
            {
                id: 'BO',
                name: "Bolivia",
                dialCode: '591',
                currencyId: 'BOB',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 71
            },
            {
                id: 'BQ',
                name: "Bonaire",
                dialCode: '599',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 257
            },
            {
                id: 'BR',
                name: "Brasil",
                dialCode: '55',
                currencyId: 'BRL',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 183
            },
            {
                id: 'BS',
                name: "Bahamas",
                dialCode: '1242',
                currencyId: 'BSD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 184
            },
            {
                id: 'BT',
                name: "Bután",
                dialCode: '975',
                currencyId: 'INR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 185
            },
            {
                id: 'BV',
                name: "Isla Bouvet",
                dialCode: '47',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 72
            },
            {
                id: 'BW',
                name: "Botsuana",
                dialCode: '267',
                currencyId: 'BWP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 186
            },
            {
                id: 'BY',
                name: "Bielorrusia",
                dialCode: '375',
                currencyId: 'BYR',
                payPalAccepted: true,
                cardsAccepted: false,
                lsId: 187
            },
            {
                id: 'BZ',
                name: "Belice",
                dialCode: '501',
                currencyId: 'BZD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 188
            },
            {
                id: 'CA',
                name: "Canadá",
                dialCode: '1',
                currencyId: 'CAD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 73
            },
            {
                id: 'CC',
                name: "Islas Keeling",
                dialCode: '61',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 189
            },
            {
                id: 'CD',
                name: "República Democrática del Congo",
                dialCode: '243',
                currencyId: 'CDF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 191
            },
            {
                id: 'CF',
                name: "República Centroafricana",
                dialCode: '236',
                currencyId: 'XAF',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 190
            },
            {
                id: 'CG',
                name: "Congo",
                dialCode: '242',
                currencyId: 'XAF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 206
            },
            {
                id: 'CH',
                name: "Suiza",
                dialCode: '41',
                currencyId: 'CHF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 192
            },
            {
                id: 'CI',
                name: "Costa de Marfil",
                dialCode: '225',
                currencyId: 'XOF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 193
            },
            {
                id: 'CK',
                name: "Islas Cook",
                dialCode: '682',
                currencyId: 'NZD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 194
            },
            {
                id: 'CL',
                name: "Chile",
                dialCode: '56',
                currencyId: 'CLP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 195
            },
            {
                id: 'CM',
                name: "Camerún",
                dialCode: '237',
                currencyId: 'XAF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 74
            },
            {
                id: 'CN',
                name: "China",
                dialCode: '86',
                currencyId: 'CNY',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 196
            },
            {
                id: 'CO',
                name: "Colombia",
                dialCode: '57',
                currencyId: 'COP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 197
            },
            {
                id: 'CR',
                name: "Costa Rica",
                dialCode: '506',
                currencyId: 'CRC',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 198
            },
            {
                id: 'CU',
                name: "Cuba",
                dialCode: '53',
                currencyId: 'CUP',
                payPalAccepted: false,
                cardsAccepted: false,
                lsId: 199
            },
            {
                id: 'CV',
                name: "Cabo Verde",
                dialCode: '238',
                currencyId: 'CVE',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 200
            },
            {
                id: 'CW',
                name: "Curazao",
                dialCode: '599',
                currencyId: 'ANG',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 255
            },
            {
                id: 'CX',
                name: "Isla de Navidad",
                dialCode: '61',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 201
            },
            {
                id: 'CY',
                name: "Chipre",
                dialCode: '357',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 75
            },
            {
                id: 'CZ',
                name: "República Checa",
                dialCode: '420',
                currencyId: 'CZK',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 202
            },
            {
                id: 'DE',
                name: "Alemania",
                dialCode: '49',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 161
            },
            {
                id: 'DJ',
                name: "Djibouti",
                dialCode: '253',
                currencyId: 'DJF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 134
            },
            {
                id: 'DK',
                name: "Dinamarca",
                dialCode: '45',
                currencyId: 'DKK',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 135
            },
            {
                id: 'DM',
                name: "Dominica",
                dialCode: '767',
                currencyId: 'XCD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 38
            },
            {
                id: 'DO',
                name: "República Dominicana",
                dialCode: '809',
                currencyId: 'DOP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 136
            },
            {
                id: 'DZ',
                name: "Argelia",
                dialCode: '213',
                currencyId: 'DZD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 137
            },
            {
                id: 'EC',
                name: "Ecuador",
                dialCode: '593',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 138
            },
            {
                id: 'EE',
                name: "Estonia",
                dialCode: '372',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 139
            },
            {
                id: 'EG',
                name: "Egipto",
                dialCode: '20',
                currencyId: 'EGP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 207
            },
            {
                id: 'EH',
                name: "Sahara Occidental",
                dialCode: '212',
                currencyId: 'MAD',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 140
            },
            {
                id: 'ER',
                name: "Eritrea",
                dialCode: '291',
                currencyId: 'ERN',
                payPalAccepted: true,
                cardsAccepted: false,
                lsId: 141
            },
            {
                id: 'ES',
                name: "España",
                dialCode: '34',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 142
            },
            {
                id: 'ET',
                name: "Etiopía",
                dialCode: '251',
                currencyId: 'ETB',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 39
            },
            {
                id: 'FI',
                name: "Finlandia",
                dialCode: '358',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 143
            },
            {
                id: 'FJ',
                name: "Fiyi",
                dialCode: '679',
                currencyId: 'FJD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 144
            },
            {
                id: 'FK',
                name: "Islas Malvinas",
                dialCode: '500',
                currencyId: 'FKP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 145
            },
            {
                id: 'FM',
                name: "Micronesia",
                dialCode: '691',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 40
            },
            {
                id: 'FO',
                name: "Islas Faroe",
                dialCode: '298',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 146
            },
            {
                id: 'FR',
                name: "Francia",
                dialCode: '33',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 147
            },
            {
                id: 'GA',
                name: "Gabón",
                dialCode: '241',
                currencyId: 'XAF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 208
            },
            {
                id: 'GB',
                name: "Reino Unido",
                dialCode: '44',
                currencyId: 'GBP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 2
            },
            {
                id: 'GB-ENG',
                name: "Inglaterra",
                dialCode: '44',
                currencyId: 'GBP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 243
            },
            {
                id: 'GB-NIR',
                name: "Irlanda del Norte",
                dialCode: '44',
                currencyId: 'GBP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 241
            },
            {
                id: 'GB-SCT',
                name: "Escocia",
                dialCode: '44',
                currencyId: 'GBP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 240
            },
            {
                id: 'GB-WLS',
                name: "Gales",
                dialCode: '44',
                currencyId: 'GBP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 242
            },
            {
                id: 'GD',
                name: "Granada",
                dialCode: '1473',
                currencyId: 'XCD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 41
            },
            {
                id: 'GE',
                name: "Georgia",
                dialCode: '995',
                currencyId: 'GEL',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 42
            },
            {
                id: 'GF',
                name: "Guayana Francesa",
                dialCode: '594',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 252
            },
            {
                id: 'GG',
                name: "Guernsey",
                dialCode: '44',
                currencyId: 'GBP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: null
            },
            {
                id: 'GH',
                name: "Ghana",
                dialCode: '233',
                currencyId: 'GHS',
                payPalAccepted: false,
                cardsAccepted: false,
                lsId: 209
            },
            {
                id: 'GI',
                name: "Gibraltar",
                dialCode: '350',
                currencyId: 'GIP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 44
            },
            {
                id: 'GL',
                name: "Groenlandia",
                dialCode: '299',
                currencyId: 'DKK',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 210
            },
            {
                id: 'GM',
                name: "Gambia",
                dialCode: '220',
                currencyId: 'GMD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 45
            },
            {
                id: 'GN',
                name: "Guinea",
                dialCode: '224',
                currencyId: 'GNF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 211
            },
            {
                id: 'GP',
                name: "Guadalupe",
                dialCode: '590',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 46
            },
            {
                id: 'GQ',
                name: "Guinea Ecuatorial",
                dialCode: '240',
                currencyId: 'XAF',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 47
            },
            {
                id: 'GR',
                name: "Grecia",
                dialCode: '30',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 48
            },
            {
                id: 'GS',
                name: "Islas Georgia del Sur y Sandwich del Sur",
                dialCode: '500',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 49
            },
            {
                id: 'GT',
                name: "Guatemala",
                dialCode: '502',
                currencyId: 'GTQ',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 50
            },
            {
                id: 'GU',
                name: "Guam",
                dialCode: '1',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 51
            },
            {
                id: 'GW',
                name: "Guinea-Bissau",
                dialCode: '245',
                currencyId: 'XOF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 237
            },
            {
                id: 'GY',
                name: "Guayana",
                dialCode: '592',
                currencyId: 'GYD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 52
            },
            {
                id: 'HK',
                name: "Hong Kong",
                dialCode: '852',
                currencyId: 'HKD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 53
            },
            {
                id: 'HM',
                name: "Islas Heard y McDonald",
                dialCode: '672',
                currencyId: 'AUD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 54
            },
            {
                id: 'HN',
                name: "Honduras",
                dialCode: '504',
                currencyId: 'HNL',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 212
            },
            {
                id: 'HR',
                name: "Croacia",
                dialCode: '385',
                currencyId: 'HRK',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 55
            },
            {
                id: 'HT',
                name: "Haití",
                dialCode: '509',
                currencyId: 'USD',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 56
            },
            {
                id: 'HU',
                name: "Hungría",
                dialCode: '36',
                currencyId: 'HUF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 57
            },
            {
                id: 'ID',
                name: "Indonesia",
                dialCode: '62',
                currencyId: 'IDR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 58
            },
            {
                id: 'IE',
                name: "Irlanda",
                dialCode: '353',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 59
            },
            {
                id: 'IL',
                name: "Israel",
                dialCode: '972',
                currencyId: 'ILS',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 60
            },
            {
                id: 'IM',
                name: "Isla de Man",
                dialCode: '44',
                currencyId: 'GBP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: null
            },
            {
                id: 'IN',
                name: "India",
                dialCode: '91',
                currencyId: 'INR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 61
            },
            {
                id: 'IO',
                name: "Territorio Británico del Océano Índico",
                dialCode: '246',
                currencyId: 'GBP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 62
            },
            {
                id: 'IQ',
                name: "Irak",
                dialCode: '964',
                currencyId: 'IQD',
                payPalAccepted: false,
                cardsAccepted: false,
                lsId: 214
            },
            {
                id: 'IR',
                name: "Irán",
                dialCode: '98',
                currencyId: 'IRR',
                payPalAccepted: false,
                cardsAccepted: false,
                lsId: 238
            },
            {
                id: 'IS',
                name: "Islandia",
                dialCode: '354',
                currencyId: 'ISK',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 213
            },
            {
                id: 'IT',
                name: "Italia",
                dialCode: '39',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 215
            },
            {
                id: 'JE',
                name: "Jersey",
                dialCode: '44',
                currencyId: 'GBP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: null
            },
            {
                id: 'JM',
                name: "Jamaica",
                dialCode: '876',
                currencyId: 'JMD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 63
            },
            {
                id: 'JO',
                name: "Jordán",
                dialCode: '962',
                currencyId: 'JOD',
                payPalAccepted: true,
                cardsAccepted: false,
                lsId: 64
            },
            {
                id: 'JP',
                name: "Japón",
                dialCode: '81',
                currencyId: 'JPY',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 148
            },
            {
                id: 'KE',
                name: "Kenia",
                dialCode: '254',
                currencyId: 'KES',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 149
            },
            {
                id: 'KG',
                name: "Kirguistán",
                dialCode: '996',
                currencyId: 'KGS',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 150
            },
            {
                id: 'KH',
                name: "Camboya",
                dialCode: '855',
                currencyId: 'KHR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 65
            },
            {
                id: 'KI',
                name: "Kiribati",
                dialCode: '686',
                currencyId: 'AUD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 151
            },
            {
                id: 'KM',
                name: "Comoras",
                dialCode: '269',
                currencyId: 'KMF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 152
            },
            {
                id: 'KN',
                name: "San Cristóbal y Nieves",
                dialCode: '1869',
                currencyId: 'XCD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 153
            },
            {
                id: 'KP',
                name: "Corea del Norte",
                dialCode: '850',
                currencyId: 'KPW',
                payPalAccepted: false,
                cardsAccepted: false,
                lsId: 66
            },
            {
                id: 'KR',
                name: "Corea del Sur",
                dialCode: '82',
                currencyId: 'KRW',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 154
            },
            {
                id: 'KW',
                name: "Kuwait",
                dialCode: '965',
                currencyId: 'KWD',
                payPalAccepted: true,
                cardsAccepted: false,
                lsId: 155
            },
            {
                id: 'KY',
                name: "Islas Caimán",
                dialCode: '1345',
                currencyId: 'KYD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 156
            },
            {
                id: 'KZ',
                name: "Kazajstán",
                dialCode: '7',
                currencyId: 'KZT',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 216
            },
            {
                id: 'LA',
                name: "Laos",
                dialCode: '856',
                currencyId: 'LAK',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 157
            },
            {
                id: 'LB',
                name: "Líbano",
                dialCode: '961',
                currencyId: 'LBP',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 158
            },
            {
                id: 'LC',
                name: "Santa Lucía",
                dialCode: '1758',
                currencyId: 'XCD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 159
            },
            {
                id: 'LI',
                name: "Liechtenstein",
                dialCode: '423',
                currencyId: 'CHF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 67
            },
            {
                id: 'LK',
                name: "Sri Lanka",
                dialCode: '94',
                currencyId: 'LKR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 160
            },
            {
                id: 'LR',
                name: "Liberia",
                dialCode: '231',
                currencyId: 'LRD',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 217
            },
            {
                id: 'LS',
                name: "Lesoto",
                dialCode: '266',
                currencyId: 'ZAR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 127
            },
            {
                id: 'LT',
                name: "Lituania",
                dialCode: '370',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 128
            },
            {
                id: 'LU',
                name: "Luxemburgo",
                dialCode: '352',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 129
            },
            {
                id: 'LV',
                name: "Letonia",
                dialCode: '371',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 36
            },
            {
                id: 'LY',
                name: "Libia",
                dialCode: '218',
                currencyId: 'LYD',
                payPalAccepted: false,
                cardsAccepted: false,
                lsId: 130
            },
            {
                id: 'MA',
                name: "Marruecos",
                dialCode: '212',
                currencyId: 'MAD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 131
            },
            {
                id: 'MC',
                name: "Mónaco",
                dialCode: '377',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 132
            },
            {
                id: 'MD',
                name: "Moldavia",
                dialCode: '373',
                currencyId: 'MDL',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 37
            },
            {
                id: 'ME',
                name: "Montenegro",
                dialCode: '382',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 247
            },
            {
                id: 'MF',
                name: "San Martín",
                dialCode: '590',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: null
            },
            {
                id: 'MG',
                name: "Madagascar",
                dialCode: '261',
                currencyId: 'MGA',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 133
            },
            {
                id: 'MH',
                name: "Islas Marshall",
                dialCode: '692',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 105
            },
            {
                id: 'MK',
                name: "Macedonia",
                dialCode: '389',
                currencyId: 'MKD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 234
            },
            {
                id: 'ML',
                name: "Mali",
                dialCode: '223',
                currencyId: 'XOF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 106
            },
            {
                id: 'MM',
                name: "Myanmar",
                dialCode: '95',
                currencyId: 'MMK',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 107
            },
            {
                id: 'MN',
                name: "Mongolia",
                dialCode: '976',
                currencyId: 'MNT',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 108
            },
            {
                id: 'MO',
                name: "Macao",
                dialCode: '853',
                currencyId: 'MOP',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 109
            },
            {
                id: 'MP',
                name: "Islas Marianas del Norte",
                dialCode: '1670',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 219
            },
            {
                id: 'MQ',
                name: "Martinica",
                dialCode: '596',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 110
            },
            {
                id: 'MR',
                name: "Mauritania",
                dialCode: '222',
                currencyId: 'MRO',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 111
            },
            {
                id: 'MS',
                name: "Montserrat",
                dialCode: '1664',
                currencyId: 'XCD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 112
            },
            {
                id: 'MT',
                name: "Malta",
                dialCode: '356',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 32
            },
            {
                id: 'MU',
                name: "Mauricio",
                dialCode: '230',
                currencyId: 'MUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 113
            },
            {
                id: 'MV',
                name: "Maldivas",
                dialCode: '960',
                currencyId: 'MVR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 114
            },
            {
                id: 'MW',
                name: "Malawi",
                dialCode: '265',
                currencyId: 'MWK',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 115
            },
            {
                id: 'MX',
                name: "México",
                dialCode: '52',
                currencyId: 'MXN',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 218
            },
            {
                id: 'MY',
                name: "Malasia",
                dialCode: '60',
                currencyId: 'MYR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 116
            },
            {
                id: 'MZ',
                name: "Mozambique",
                dialCode: '258',
                currencyId: 'MZN',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 117
            },
            {
                id: 'NA',
                name: "Namibia",
                dialCode: '264',
                currencyId: 'NAD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 118
            },
            {
                id: 'NC',
                name: "Nueva Caledonia",
                dialCode: '687',
                currencyId: 'XPF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 254
            },
            {
                id: 'NE',
                name: "Níger",
                dialCode: '227',
                currencyId: 'XOF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 119
            },
            {
                id: 'NF',
                name: "Isla Norfolk",
                dialCode: '672',
                currencyId: 'AUD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 120
            },
            {
                id: 'NG',
                name: "Nigeria",
                dialCode: '234',
                currencyId: 'NGN',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 121
            },
            {
                id: 'NI',
                name: "Nicaragua",
                dialCode: '505',
                currencyId: 'NIO',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 34
            },
            {
                id: 'NL',
                name: "Países Bajos",
                dialCode: '31',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 122
            },
            {
                id: 'NO',
                name: "Noruega",
                dialCode: '47',
                currencyId: 'NOK',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 123
            },
            {
                id: 'NP',
                name: "Nepal",
                dialCode: '977',
                currencyId: 'NPR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 124
            },
            {
                id: 'NR',
                name: "Nauru",
                dialCode: '674',
                currencyId: 'AUD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 35
            },
            {
                id: 'NU',
                name: "Niue",
                dialCode: '683',
                currencyId: 'NZD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 125
            },
            {
                id: 'NZ',
                name: "Nueva Zelanda",
                dialCode: '64',
                currencyId: 'NZD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 126
            },
            {
                id: 'OM',
                name: "Omán",
                dialCode: '968',
                currencyId: 'OMR',
                payPalAccepted: true,
                cardsAccepted: false,
                lsId: 17
            },
            {
                id: 'PA',
                name: "Panamá",
                dialCode: '507',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 220
            },
            {
                id: 'PE',
                name: "Perú",
                dialCode: '51',
                currencyId: 'PEN',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 18
            },
            {
                id: 'PF',
                name: "Polinesia francés",
                dialCode: '689',
                currencyId: 'XPF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 43
            },
            {
                id: 'PG',
                name: "Papúa Nueva Guinea",
                dialCode: '675',
                currencyId: 'PGK',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 20
            },
            {
                id: 'PH',
                name: "Filipinas",
                dialCode: '63',
                currencyId: 'PHP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 222
            },
            {
                id: 'PK',
                name: "Pakistán",
                dialCode: '92',
                currencyId: 'PKR',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 21
            },
            {
                id: 'PL',
                name: "Polonia",
                dialCode: '48',
                currencyId: 'PLN',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 22
            },
            {
                id: 'PM',
                name: "San Pedro y Miquelón",
                dialCode: '508',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 23
            },
            {
                id: 'PN',
                name: "Islas Pitcairn",
                dialCode: '870',
                currencyId: 'NZD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 24
            },
            {
                id: 'PR',
                name: "Puerto Rico",
                dialCode: '1',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 25
            },
            {
                id: 'PS',
                name: "Palestina",
                dialCode: '970',
                currencyId: 'USD',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 246
            },
            {
                id: 'PT',
                name: "Portugal",
                dialCode: '351',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 76
            },
            {
                id: 'PW',
                name: "Palau",
                dialCode: '680',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 77
            },
            {
                id: 'PY',
                name: "Paraguay",
                dialCode: '595',
                currencyId: 'PYG',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 221
            },
            {
                id: 'QA',
                name: "Katar",
                dialCode: '974',
                currencyId: 'QAR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 223
            },
            {
                id: 'RE',
                name: "Reunión",
                dialCode: '262',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 256
            },
            {
                id: 'RO',
                name: "Rumania",
                dialCode: '40',
                currencyId: 'RON',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 78
            },
            {
                id: 'RS',
                name: "Serbia",
                dialCode: '381',
                currencyId: 'RSD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 244
            },
            {
                id: 'RU',
                name: "Rusia",
                dialCode: '7',
                currencyId: 'RUB',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 79
            },
            {
                id: 'RW',
                name: "Ruanda",
                dialCode: '250',
                currencyId: 'RWF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 26
            },
            {
                id: 'SA',
                name: "Arabia Saudita",
                dialCode: '966',
                currencyId: 'SAR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 80
            },
            {
                id: 'SB',
                name: "Islas Salomón",
                dialCode: '677',
                currencyId: 'SBD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 81
            },
            {
                id: 'SC',
                name: "Seychelles",
                dialCode: '248',
                currencyId: 'SCR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 82
            },
            {
                id: 'SD',
                name: "Sudán",
                dialCode: '249',
                currencyId: 'SDG',
                payPalAccepted: false,
                cardsAccepted: false,
                lsId: 226
            },
            {
                id: 'SE',
                name: "Suecia",
                dialCode: '46',
                currencyId: 'SEK',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 83
            },
            {
                id: 'SG',
                name: "Singapur",
                dialCode: '65',
                currencyId: 'SGD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 225
            },
            {
                id: 'SH',
                name: "Santa Elena",
                dialCode: '290',
                currencyId: 'GBP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 84
            },
            {
                id: 'SI',
                name: "Eslovenia",
                dialCode: '386',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 85
            },
            {
                id: 'SJ',
                name: "Islas Svalbard y Jan Mayen",
                dialCode: '47',
                currencyId: 'NOK',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 27
            },
            {
                id: 'SK',
                name: "Eslovaquia",
                dialCode: '421',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 86
            },
            {
                id: 'SL',
                name: "Sierra Leona",
                dialCode: '232',
                currencyId: 'SLL',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 87
            },
            {
                id: 'SM',
                name: "San Marino",
                dialCode: '378',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 88
            },
            {
                id: 'SN',
                name: "Senegal",
                dialCode: '221',
                currencyId: 'XOF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 28
            },
            {
                id: 'SO',
                name: "Somalia",
                dialCode: '252',
                currencyId: 'SOS',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 89
            },
            {
                id: 'SR',
                name: "Surinam",
                dialCode: '597',
                currencyId: 'SRD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 90
            },
            {
                id: 'SS',
                name: "Sudán del Sur",
                dialCode: '211',
                currencyId: 'USD',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: null
            },
            {
                id: 'ST',
                name: "Santo Tomé y Príncipe",
                dialCode: '239',
                currencyId: 'STD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 91
            },
            {
                id: 'SV',
                name: "El Salvador",
                dialCode: '503',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 92
            },
            {
                id: 'SX',
                name: "Sint Maarten",
                dialCode: '1721',
                currencyId: 'ANG',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: null
            },
            {
                id: 'SY',
                name: "Siria",
                dialCode: '963',
                currencyId: 'SYP',
                payPalAccepted: false,
                cardsAccepted: false,
                lsId: 93
            },
            {
                id: 'SZ',
                name: "Swazilandia",
                dialCode: '268',
                currencyId: 'SZL',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 94
            },
            {
                id: 'TC',
                name: "Islas Turcas y Caicos",
                dialCode: '1',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 29
            },
            {
                id: 'TD',
                name: "Chad",
                dialCode: '235',
                currencyId: 'XAF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 95
            },
            {
                id: 'TF',
                name: "Tierras australes y antárticas francesas",
                dialCode: '262',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 96
            },
            {
                id: 'TG',
                name: "Togo",
                dialCode: '228',
                currencyId: 'XOF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 97
            },
            {
                id: 'TH',
                name: "Tailandia",
                dialCode: '66',
                currencyId: 'THB',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 30
            },
            {
                id: 'TJ',
                name: "Tayikistán",
                dialCode: '992',
                currencyId: 'TJS',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 98
            },
            {
                id: 'TK',
                name: "Tokelau",
                dialCode: '690',
                currencyId: 'NZD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 99
            },
            {
                id: 'TL',
                name: "Timor Oriental",
                dialCode: '670',
                currencyId: 'USD',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 102
            },
            {
                id: 'TM',
                name: "Turkmenistán",
                dialCode: '993',
                currencyId: 'TMT',
                payPalAccepted: true,
                cardsAccepted: false,
                lsId: 100
            },
            {
                id: 'TN',
                name: "Túnez",
                dialCode: '216',
                currencyId: 'TND',
                payPalAccepted: true,
                cardsAccepted: false,
                lsId: 101
            },
            {
                id: 'TO',
                name: "Tonga",
                dialCode: '676',
                currencyId: 'TOP',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 227
            },
            {
                id: 'TR',
                name: "Turquía",
                dialCode: '90',
                currencyId: 'TRY',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 103
            },
            {
                id: 'TT',
                name: "Trinidad y Tobago",
                dialCode: '868',
                currencyId: 'TTD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 228
            },
            {
                id: 'TV',
                name: "Tuvalu",
                dialCode: '688',
                currencyId: 'AUD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 31
            },
            {
                id: 'TW',
                name: "Taiwán",
                dialCode: '886',
                currencyId: 'TWD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 104
            },
            {
                id: 'TZ',
                name: "Tanzania",
                dialCode: '255',
                currencyId: 'TZS',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 236
            },
            {
                id: 'UA',
                name: "Ucrania",
                dialCode: '380',
                currencyId: 'UAH',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 229
            },
            {
                id: 'UG',
                name: "Uganda",
                dialCode: '256',
                currencyId: 'UGX',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 1
            },
            {
                id: 'UM',
                name: "Islas ultramarinas menores de Estados Unidos",
                dialCode: '256',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 3
            },
            {
                id: 'US',
                name: "Estados Unidos de América",
                dialCode: '1',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 4
            },
            {
                id: 'UY',
                name: "Uruguay",
                dialCode: '598',
                currencyId: 'UYU',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 230
            },
            {
                id: 'UZ',
                name: "Uzbekistán",
                dialCode: '998',
                currencyId: 'UZS',
                payPalAccepted: false,
                cardsAccepted: true,
                lsId: 5
            },
            {
                id: 'VA',
                name: "Ciudad del Vaticano",
                dialCode: '379',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 6
            },
            {
                id: 'VC',
                name: "San Vicente y las Granadinas",
                dialCode: '1784',
                currencyId: 'XCD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 7
            },
            {
                id: 'VE',
                name: "Venezuela",
                dialCode: '58',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 231
            },
            {
                id: 'VG',
                name: "Islas Vírgenes Británicas",
                dialCode: '1284',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 8
            },
            {
                id: 'VI',
                name: "Islas Vírgenes (Estados Unidos)",
                dialCode: '1',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 235
            },
            {
                id: 'VN',
                name: "Vietnam",
                dialCode: '84',
                currencyId: 'VND',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 9
            },
            {
                id: 'VU',
                name: "Vanuatu",
                dialCode: '678',
                currencyId: 'VUV',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 10
            },
            {
                id: 'WF',
                name: "Wallis y Futuna",
                dialCode: '681',
                currencyId: 'XPF',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 11
            },
            {
                id: 'WS',
                name: "Samoa",
                dialCode: '685',
                currencyId: 'WST',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 224
            },
            {
                id: 'YE',
                name: "Yemen",
                dialCode: '967',
                currencyId: 'YER',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 232
            },
            {
                id: 'YT',
                name: "Mayotte",
                dialCode: '262',
                currencyId: 'EUR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 12
            },
            {
                id: 'ZA',
                name: "Sudáfrica",
                dialCode: '27',
                currencyId: 'ZAR',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 14
            },
            {
                id: 'ZM',
                name: "Zambia",
                dialCode: '260',
                currencyId: 'ZMW',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 233
            },
            {
                id: 'ZW',
                name: "Zimbabue",
                dialCode: '263',
                currencyId: 'USD',
                payPalAccepted: true,
                cardsAccepted: true,
                lsId: 16
            },
            {
                id: 'WW',
                name: "Internacional",
                dialCode: null,
                currencyId: null,
                payPalAccepted: false,
                cardsAccepted: false,
                lsId: 248
            }
        ]
    },
    {
        // Region
        model: i18n.Region,
        verifyProperty: 'id',
        data: [
            {
                id: "AD-02",
                name: "Canillo",
                countryId: "AD"
            },
            {
                id: "AD-03",
                name: "Encamp",
                countryId: "AD"
            },
            {
                id: "AD-04",
                name: "La Massana",
                countryId: "AD"
            },
            {
                id: "AD-05",
                name: "Ordino",
                countryId: "AD"
            },
            {
                id: "AD-06",
                name: "Sant Julià De Lòria",
                countryId: "AD"
            },
            {
                id: "AD-07",
                name: "Andorra La Vella",
                countryId: "AD"
            },
            {
                id: "AD-08",
                name: "Escaldes-Engordany",
                countryId: "AD"
            },
            {
                id: "AE-AJ",
                name: "Ajman",
                countryId: "AE"
            },
            {
                id: "AE-AZ",
                name: "Abu Dabi",
                countryId: "AE"
            },
            {
                id: "AE-DU",
                name: "Dubai",
                countryId: "AE"
            },
            {
                id: "AE-FU",
                name: "Fujairah",
                countryId: "AE"
            },
            {
                id: "AE-RK",
                name: "Ras Al Khaimah",
                countryId: "AE"
            },
            {
                id: "AE-SH",
                name: "Sharjah",
                countryId: "AE"
            },
            {
                id: "AE-UQ",
                name: "Umm Al Quwain",
                countryId: "AE"
            },
            {
                id: "AF-BAL",
                name: "Balkh",
                countryId: "AF"
            },
            {
                id: "AF-BAM",
                name: "Bamyan",
                countryId: "AF"
            },
            {
                id: "AF-BDG",
                name: "Badghis",
                countryId: "AF"
            },
            {
                id: "AF-BDS",
                name: "Badakhshan",
                countryId: "AF"
            },
            {
                id: "AF-BGL",
                name: "Baghlān",
                countryId: "AF"
            },
            {
                id: "AF-DAY",
                name: "Daykundi",
                countryId: "AF"
            },
            {
                id: "AF-FRA",
                name: "Farāh",
                countryId: "AF"
            },
            {
                id: "AF-FYB",
                name: "Faryab",
                countryId: "AF"
            },
            {
                id: "AF-GHA",
                name: "Ghaznī",
                countryId: "AF"
            },
            {
                id: "AF-GHO",
                name: "Ghor",
                countryId: "AF"
            },
            {
                id: "AF-HEL",
                name: "Helmand",
                countryId: "AF"
            },
            {
                id: "AF-HER",
                name: "Herāt",
                countryId: "AF"
            },
            {
                id: "AF-JOW",
                name: "Jowzjān",
                countryId: "AF"
            },
            {
                id: "AF-KAB",
                name: "Kābul",
                countryId: "AF"
            },
            {
                id: "AF-KAN",
                name: "Kandahar",
                countryId: "AF"
            },
            {
                id: "AF-KAP",
                name: "Kapisa",
                countryId: "AF"
            },
            {
                id: "AF-KDZ",
                name: "Kunduz",
                countryId: "AF"
            },
            {
                id: "AF-KHO",
                name: "Khost",
                countryId: "AF"
            },
            {
                id: "AF-KNR",
                name: "Kunar",
                countryId: "AF"
            },
            {
                id: "AF-LAG",
                name: "Laghman",
                countryId: "AF"
            },
            {
                id: "AF-LOG",
                name: "Logar",
                countryId: "AF"
            },
            {
                id: "AF-NAN",
                name: "Nangarhar",
                countryId: "AF"
            },
            {
                id: "AF-NIM",
                name: "Nimroz",
                countryId: "AF"
            },
            {
                id: "AF-NUR",
                name: "Nuristan",
                countryId: "AF"
            },
            {
                id: "AF-PAN",
                name: "Panjshayr",
                countryId: "AF"
            },
            {
                id: "AF-PAR",
                name: "Parwan",
                countryId: "AF"
            },
            {
                id: "AF-PIA",
                name: "Paktiya",
                countryId: "AF"
            },
            {
                id: "AF-PKA",
                name: "Paktika",
                countryId: "AF"
            },
            {
                id: "AF-SAM",
                name: "Samangān",
                countryId: "AF"
            },
            {
                id: "AF-SAR",
                name: "Sar-E Pul",
                countryId: "AF"
            },
            {
                id: "AF-TAK",
                name: "Takhar",
                countryId: "AF"
            },
            {
                id: "AF-URU",
                name: "Uruzgan",
                countryId: "AF"
            },
            {
                id: "AF-WAR",
                name: "Wardak",
                countryId: "AF"
            },
            {
                id: "AF-ZAB",
                name: "Zabul",
                countryId: "AF"
            },
            {
                id: "AG-01",
                name: "Isla De Antigua",
                countryId: "AG"
            },
            {
                id: "AG-02",
                name: "Isla De Barbuda",
                countryId: "AG"
            },
            {
                id: "AG-03",
                name: "Isla Redonda",
                countryId: "AG"
            },
            {
                id: "AG-04",
                name: "Isla De Los Pájaros",
                countryId: "AG"
            },
            {
                id: "AG-05",
                name: "Isla Del Obispo",
                countryId: "AG"
            },
            {
                id: "AG-06",
                name: "Isla Blake",
                countryId: "AG"
            },
            {
                id: "AG-09",
                name: "Isla Crump",
                countryId: "AG"
            },
            {
                id: "AG-10",
                name: "Isla Dulcina",
                countryId: "AG"
            },
            {
                id: "AG-11",
                name: "Isla De Intercambio",
                countryId: "AG"
            },
            {
                id: "AG-12",
                name: "Cinco Islas",
                countryId: "AG"
            },
            {
                id: "AG-13",
                name: "Isla Gran Pájaro",
                countryId: "AG"
            },
            {
                id: "AG-14",
                name: "Isla Verde",
                countryId: "AG"
            },
            {
                id: "AG-15",
                name: "Isla De Guayana",
                countryId: "AG"
            },
            {
                id: "AG-16",
                name: "Isla De La Puerta Del Infierno",
                countryId: "AG"
            },
            {
                id: "AG-17",
                name: "Isla De Hawes",
                countryId: "AG"
            },
            {
                id: "AG-18",
                name: "Isla Henry",
                countryId: "AG"
            },
            {
                id: "AG-19",
                name: "Isla Johnson",
                countryId: "AG"
            },
            {
                id: "AG-20",
                name: "Isla De Los Niños",
                countryId: "AG"
            },
            {
                id: "AG-22",
                name: "Isla De La Langosta",
                countryId: "AG"
            },
            {
                id: "AG-24",
                name: "Isla Doncella",
                countryId: "AG"
            },
            {
                id: "AG-25",
                name: "Isla De Los Moros",
                countryId: "AG"
            },
            {
                id: "AG-26",
                name: "Isla Nana",
                countryId: "AG"
            },
            {
                id: "AG-27",
                name: "Isla Pelícano",
                countryId: "AG"
            },
            {
                id: "AG-28",
                name: "La Isla De Los Hongos",
                countryId: "AG"
            },
            {
                id: "AG-29",
                name: "Isla De Los Conejos",
                countryId: "AG"
            },
            {
                id: "AG-31",
                name: "Isla Cabeza Roja",
                countryId: "AG"
            },
            {
                id: "AG-32",
                name: "Isla Sandy",
                countryId: "AG"
            },
            {
                id: "AG-33",
                name: "Isla Smith",
                countryId: "AG"
            },
            {
                id: "AG-34",
                name: "Las Hermanas",
                countryId: "AG"
            },
            {
                id: "AG-35",
                name: "Isla De Vernon",
                countryId: "AG"
            },
            {
                id: "AG-36",
                name: "La Isla De Wicked Will",
                countryId: "AG"
            },
            {
                id: "AG-37",
                name: "Isla De York",
                countryId: "AG"
            },
            {
                id: "AI-01",
                name: "Anguila",
                countryId: "AI"
            },
            {
                id: "AI-02",
                name: "Isla Anguillita",
                countryId: "AI"
            },
            {
                id: "AI-03",
                name: "Roca Sopladora",
                countryId: "AI"
            },
            {
                id: "AI-04",
                name: "Cayo Cala",
                countryId: "AI"
            },
            {
                id: "AI-05",
                name: "Cayo Crocus",
                countryId: "AI"
            },
            {
                id: "AI-06",
                name: "Deadman'S Cay",
                countryId: "AI"
            },
            {
                id: "AI-07",
                name: "Isla De Los Perros",
                countryId: "AI"
            },
            {
                id: "AI-08",
                name: "Cayo Este",
                countryId: "AI"
            },
            {
                id: "AI-09",
                name: "Pequeña Isla",
                countryId: "AI"
            },
            {
                id: "AI-10",
                name: "Pequeña Isla De Matorrales",
                countryId: "AI"
            },
            {
                id: "AI-11",
                name: "Cayo Medio",
                countryId: "AI"
            },
            {
                id: "AI-12",
                name: "Cayo Norte",
                countryId: "AI"
            },
            {
                id: "AI-13",
                name: "Cayos Chumbos",
                countryId: "AI"
            },
            {
                id: "AI-14",
                name: "Isla De Los Conejos",
                countryId: "AI"
            },
            {
                id: "AI-15",
                name: "Isla De Arena/Isla De Arena",
                countryId: "AI"
            },
            {
                id: "AI-16",
                name: "Scilly Cay",
                countryId: "AI"
            },
            {
                id: "AI-17",
                name: "Isla De Los Matorrales",
                countryId: "AI"
            },
            {
                id: "AI-18",
                name: "Isla Seal",
                countryId: "AI"
            },
            {
                id: "AI-19",
                name: "Sombrero/Islas Del Sombrero",
                countryId: "AI"
            },
            {
                id: "AI-20",
                name: "Cayo Sur",
                countryId: "AI"
            },
            {
                id: "AI-21",
                name: "Isla De La Apuesta Del Sur",
                countryId: "AI"
            },
            {
                id: "AI-22",
                name: "Cayo Oeste",
                countryId: "AI"
            },
            {
                id: "AL-01",
                name: "Berat",
                countryId: "AL"
            },
            {
                id: "AL-02",
                name: "Durrës",
                countryId: "AL"
            },
            {
                id: "AL-03",
                name: "Elbasan",
                countryId: "AL"
            },
            {
                id: "AL-04",
                name: "Fier",
                countryId: "AL"
            },
            {
                id: "AL-05",
                name: "Gjirokastër",
                countryId: "AL"
            },
            {
                id: "AL-06",
                name: "Korçë",
                countryId: "AL"
            },
            {
                id: "AL-07",
                name: "Kukës",
                countryId: "AL"
            },
            {
                id: "AL-08",
                name: "Lezhë",
                countryId: "AL"
            },
            {
                id: "AL-09",
                name: "Dibër",
                countryId: "AL"
            },
            {
                id: "AL-10",
                name: "Shkodër",
                countryId: "AL"
            },
            {
                id: "AL-11",
                name: "Tirana",
                countryId: "AL"
            },
            {
                id: "AL-12",
                name: "Vlorë",
                countryId: "AL"
            },
            {
                id: "AM-AG",
                name: "Aragatsotn",
                countryId: "AM"
            },
            {
                id: "AM-AR",
                name: "Ararat",
                countryId: "AM"
            },
            {
                id: "AM-AV",
                name: "Armavir",
                countryId: "AM"
            },
            {
                id: "AM-ER",
                name: "Ereván",
                countryId: "AM"
            },
            {
                id: "AM-GR",
                name: "Gegharkunik",
                countryId: "AM"
            },
            {
                id: "AM-KT",
                name: "Kotayk",
                countryId: "AM"
            },
            {
                id: "AM-LO",
                name: "Lori",
                countryId: "AM"
            },
            {
                id: "AM-SH",
                name: "Shirak",
                countryId: "AM"
            },
            {
                id: "AM-SU",
                name: "Syunik",
                countryId: "AM"
            },
            {
                id: "AM-TV",
                name: "Tavush",
                countryId: "AM"
            },
            {
                id: "AM-VD",
                name: "Vayots Dzor",
                countryId: "AM"
            },
            {
                id: "AO-BGO",
                name: "Bengo",
                countryId: "AO"
            },
            {
                id: "AO-BGU",
                name: "Benguela",
                countryId: "AO"
            },
            {
                id: "AO-BIE",
                name: "Bie",
                countryId: "AO"
            },
            {
                id: "AO-CAB",
                name: "Cabinda",
                countryId: "AO"
            },
            {
                id: "AO-CCU",
                name: "Kuando Kubango",
                countryId: "AO"
            },
            {
                id: "AO-CNN",
                name: "Cunene",
                countryId: "AO"
            },
            {
                id: "AO-CNO",
                name: "Kwanza Norte",
                countryId: "AO"
            },
            {
                id: "AO-CUS",
                name: "Kwanza Sur",
                countryId: "AO"
            },
            {
                id: "AO-HUA",
                name: "Huambo",
                countryId: "AO"
            },
            {
                id: "AO-HUI",
                name: "Huila",
                countryId: "AO"
            },
            {
                id: "AO-LNO",
                name: "Lunda Norte",
                countryId: "AO"
            },
            {
                id: "AO-LSU",
                name: "Lunda Sur",
                countryId: "AO"
            },
            {
                id: "AO-LUA",
                name: "Luanda",
                countryId: "AO"
            },
            {
                id: "AO-MAL",
                name: "Malanje",
                countryId: "AO"
            },
            {
                id: "AO-MOX",
                name: "Moxico",
                countryId: "AO"
            },
            {
                id: "AO-NAM",
                name: "Namibe",
                countryId: "AO"
            },
            {
                id: "AO-UIG",
                name: "Uíge",
                countryId: "AO"
            },
            {
                id: "AO-ZAI",
                name: "Zaire",
                countryId: "AO"
            },
            {
                id: "AQ-AQ",
                name: "Antártida",
                countryId: "AQ"
            },
            {
                id: "AR-A",
                name: "Salta",
                countryId: "AR"
            },
            {
                id: "AR-B",
                name: "Buenos Aires",
                countryId: "AR"
            },
            {
                id: "AR-C",
                name: "Capital Federal",
                countryId: "AR"
            },
            {
                id: "AR-D",
                name: "San Luis",
                countryId: "AR"
            },
            {
                id: "AR-E",
                name: "Entre Ríos",
                countryId: "AR"
            },
            {
                id: "AR-F",
                name: "La Rioja",
                countryId: "AR"
            },
            {
                id: "AR-G",
                name: "Santiago Del Estero",
                countryId: "AR"
            },
            {
                id: "AR-H",
                name: "Chaco",
                countryId: "AR"
            },
            {
                id: "AR-J",
                name: "San Juan",
                countryId: "AR"
            },
            {
                id: "AR-K",
                name: "Catamarca",
                countryId: "AR"
            },
            {
                id: "AR-L",
                name: "La Pampa",
                countryId: "AR"
            },
            {
                id: "AR-M",
                name: "Mendoza",
                countryId: "AR"
            },
            {
                id: "AR-N",
                name: "Misiones",
                countryId: "AR"
            },
            {
                id: "AR-P",
                name: "Formosa",
                countryId: "AR"
            },
            {
                id: "AR-Q",
                name: "Neuquén",
                countryId: "AR"
            },
            {
                id: "AR-R",
                name: "Río Negro",
                countryId: "AR"
            },
            {
                id: "AR-S",
                name: "Santa Fe",
                countryId: "AR"
            },
            {
                id: "AR-T",
                name: "Tucumán",
                countryId: "AR"
            },
            {
                id: "AR-U",
                name: "Chubut",
                countryId: "AR"
            },
            {
                id: "AR-V",
                name: "Tierra Del Fuego",
                countryId: "AR"
            },
            {
                id: "AR-W",
                name: "Corrientes",
                countryId: "AR"
            },
            {
                id: "AR-X",
                name: "Córdoba",
                countryId: "AR"
            },
            {
                id: "AR-Y",
                name: "Jujuy",
                countryId: "AR"
            },
            {
                id: "AR-Z",
                name: "Santa Cruz",
                countryId: "AR"
            },
            {
                id: "AS-01",
                name: "Tutuila",
                countryId: "AS"
            },
            {
                id: "AS-02",
                name: "Aunu'U",
                countryId: "AS"
            },
            {
                id: "AS-03",
                name: "Ta'U",
                countryId: "AS"
            },
            {
                id: "AS-04",
                name: "Ofu-Olosega",
                countryId: "AS"
            },
            {
                id: "AS-21",
                name: "Rose Atoll",
                countryId: "AS"
            },
            {
                id: "AS-22",
                name: "Isla De Swain",
                countryId: "AS"
            },
            {
                id: "AT-1",
                name: "Burgenland",
                countryId: "AT"
            },
            {
                id: "AT-2",
                name: "Carintia",
                countryId: "AT"
            },
            {
                id: "AT-3",
                name: "Baja Austria",
                countryId: "AT"
            },
            {
                id: "AT-4",
                name: "Alta Austria",
                countryId: "AT"
            },
            {
                id: "AT-5",
                name: "Salzburgo",
                countryId: "AT"
            },
            {
                id: "AT-6",
                name: "Estiria",
                countryId: "AT"
            },
            {
                id: "AT-7",
                name: "Tirol",
                countryId: "AT"
            },
            {
                id: "AT-8",
                name: "Vorarlberg",
                countryId: "AT"
            },
            {
                id: "AT-9",
                name: "Viena",
                countryId: "AT"
            },
            {
                id: "AU-ACT",
                name: "Territorio De La Capital Australiana",
                countryId: "AU"
            },
            {
                id: "AU-NSW",
                name: "Nueva Gales Del Sur",
                countryId: "AU"
            },
            {
                id: "AU-NT",
                name: "Territorio Del Norte",
                countryId: "AU"
            },
            {
                id: "AU-QLD",
                name: "Queensland",
                countryId: "AU"
            },
            {
                id: "AU-SA",
                name: "Sur De Australia",
                countryId: "AU"
            },
            {
                id: "AU-TAS",
                name: "Tasmania",
                countryId: "AU"
            },
            {
                id: "AU-VIC",
                name: "Victoria",
                countryId: "AU"
            },
            {
                id: "AU-WA",
                name: "El Oeste De Australia",
                countryId: "AU"
            },
            {
                id: "AW-AW",
                name: "Aruba",
                countryId: "AW"
            },
            {
                id: "AX-BR",
                name: "Brando",
                countryId: "AX"
            },
            {
                id: "AX-EC",
                name: "Eckerö",
                countryId: "AX"
            },
            {
                id: "AX-FG",
                name: "Föglö",
                countryId: "AX"
            },
            {
                id: "AX-FN",
                name: "Finström",
                countryId: "AX"
            },
            {
                id: "AX-GT",
                name: "Geta",
                countryId: "AX"
            },
            {
                id: "AX-HM",
                name: "Hammarland",
                countryId: "AX"
            },
            {
                id: "AX-JM",
                name: "Jomala",
                countryId: "AX"
            },
            {
                id: "AX-KK",
                name: "Kökar",
                countryId: "AX"
            },
            {
                id: "AX-KM",
                name: "Kumlinge",
                countryId: "AX"
            },
            {
                id: "AX-LE",
                name: "Lemland",
                countryId: "AX"
            },
            {
                id: "AX-LU",
                name: "Lumparland",
                countryId: "AX"
            },
            {
                id: "AX-MH",
                name: "Mariehamn",
                countryId: "AX"
            },
            {
                id: "AX-SD",
                name: "Sund",
                countryId: "AX"
            },
            {
                id: "AX-ST",
                name: "Sottunga",
                countryId: "AX"
            },
            {
                id: "AX-SV",
                name: "Saltvik",
                countryId: "AX"
            },
            {
                id: "AX-VR",
                name: "Vårdö",
                countryId: "AX"
            },
            {
                id: "AZ-ABS",
                name: "Absherón",
                countryId: "AZ"
            },
            {
                id: "AZ-AGA",
                name: "Agstafa",
                countryId: "AZ"
            },
            {
                id: "AZ-AGC",
                name: "Agjabadi",
                countryId: "AZ"
            },
            {
                id: "AZ-AGM",
                name: "Agdam",
                countryId: "AZ"
            },
            {
                id: "AZ-AGS",
                name: "Agdash",
                countryId: "AZ"
            },
            {
                id: "AZ-AGU",
                name: "Agsu",
                countryId: "AZ"
            },
            {
                id: "AZ-AST",
                name: "Astara",
                countryId: "AZ"
            },
            {
                id: "AZ-BA",
                name: "Bakú",
                countryId: "AZ"
            },
            {
                id: "AZ-BAB",
                name: "Babak",
                countryId: "AZ"
            },
            {
                id: "AZ-BAL",
                name: "Balakan",
                countryId: "AZ"
            },
            {
                id: "AZ-BAR",
                name: "Barda",
                countryId: "AZ"
            },
            {
                id: "AZ-BEY",
                name: "Beylagan",
                countryId: "AZ"
            },
            {
                id: "AZ-BIL",
                name: "Bilasuvar",
                countryId: "AZ"
            },
            {
                id: "AZ-CAB",
                name: "Gabriel",
                countryId: "AZ"
            },
            {
                id: "AZ-CAL",
                name: "Jalilabad",
                countryId: "AZ"
            },
            {
                id: "AZ-CUL",
                name: "Julfa",
                countryId: "AZ"
            },
            {
                id: "AZ-DAS",
                name: "Dashkasan",
                countryId: "AZ"
            },
            {
                id: "AZ-FUZ",
                name: "Fuzili",
                countryId: "AZ"
            },
            {
                id: "AZ-GA",
                name: "Ganja",
                countryId: "AZ"
            },
            {
                id: "AZ-GAD",
                name: "Gadabay",
                countryId: "AZ"
            },
            {
                id: "AZ-GOR",
                name: "Goranboy",
                countryId: "AZ"
            },
            {
                id: "AZ-GOY",
                name: "Goychay",
                countryId: "AZ"
            },
            {
                id: "AZ-GYG",
                name: "Goygol",
                countryId: "AZ"
            },
            {
                id: "AZ-HAC",
                name: "Hajigabul",
                countryId: "AZ"
            },
            {
                id: "AZ-IMI",
                name: "Imishli",
                countryId: "AZ"
            },
            {
                id: "AZ-ISM",
                name: "Ismayilli",
                countryId: "AZ"
            },
            {
                id: "AZ-KAL",
                name: "Kalbajar",
                countryId: "AZ"
            },
            {
                id: "AZ-KAN",
                name: "Kǝngǝrli",
                countryId: "AZ"
            },
            {
                id: "AZ-KUR",
                name: "Kurdamir",
                countryId: "AZ"
            },
            {
                id: "AZ-LA",
                name: "Lankaran",
                countryId: "AZ"
            },
            {
                id: "AZ-LAC",
                name: "Lachin",
                countryId: "AZ"
            },
            {
                id: "AZ-LAN",
                name: "Lankaran",
                countryId: "AZ"
            },
            {
                id: "AZ-LER",
                name: "Lerik",
                countryId: "AZ"
            },
            {
                id: "AZ-MAS",
                name: "Masalli",
                countryId: "AZ"
            },
            {
                id: "AZ-MI",
                name: "Mingechevir",
                countryId: "AZ"
            },
            {
                id: "AZ-NA",
                name: "Naftalina",
                countryId: "AZ"
            },
            {
                id: "AZ-NEF",
                name: "Neftchala",
                countryId: "AZ"
            },
            {
                id: "AZ-NV",
                name: "Najchiván",
                countryId: "AZ"
            },
            {
                id: "AZ-OGU",
                name: "Oghuz",
                countryId: "AZ"
            },
            {
                id: "AZ-ORD",
                name: "Ordubad",
                countryId: "AZ"
            },
            {
                id: "AZ-QAB",
                name: "Gabala",
                countryId: "AZ"
            },
            {
                id: "AZ-QAX",
                name: "Qax",
                countryId: "AZ"
            },
            {
                id: "AZ-QAZ",
                name: "Kazakh",
                countryId: "AZ"
            },
            {
                id: "AZ-QBA",
                name: "Guba",
                countryId: "AZ"
            },
            {
                id: "AZ-QBI",
                name: "Gubadli",
                countryId: "AZ"
            },
            {
                id: "AZ-QOB",
                name: "Qobustan",
                countryId: "AZ"
            },
            {
                id: "AZ-QUS",
                name: "Gusar",
                countryId: "AZ"
            },
            {
                id: "AZ-SA",
                name: "Shaki",
                countryId: "AZ"
            },
            {
                id: "AZ-SAB",
                name: "Sabirabad",
                countryId: "AZ"
            },
            {
                id: "AZ-SAD",
                name: "Sederek",
                countryId: "AZ"
            },
            {
                id: "AZ-SAH",
                name: "Shahbuz",
                countryId: "AZ"
            },
            {
                id: "AZ-SAK",
                name: "Shaki",
                countryId: "AZ"
            },
            {
                id: "AZ-SAL",
                name: "Salyan",
                countryId: "AZ"
            },
            {
                id: "AZ-SAR",
                name: "Sherur",
                countryId: "AZ"
            },
            {
                id: "AZ-SAT",
                name: "Reloj",
                countryId: "AZ"
            },
            {
                id: "AZ-SBN",
                name: "Shabran",
                countryId: "AZ"
            },
            {
                id: "AZ-SIY",
                name: "Siyazan",
                countryId: "AZ"
            },
            {
                id: "AZ-SKR",
                name: "Shamkir",
                countryId: "AZ"
            },
            {
                id: "AZ-SM",
                name: "Sumgait",
                countryId: "AZ"
            },
            {
                id: "AZ-SMI",
                name: "Shamakhi",
                countryId: "AZ"
            },
            {
                id: "AZ-SMX",
                name: "Samukh",
                countryId: "AZ"
            },
            {
                id: "AZ-SR",
                name: "Shirván",
                countryId: "AZ"
            },
            {
                id: "AZ-SUS",
                name: "Shushá",
                countryId: "AZ"
            },
            {
                id: "AZ-TAR",
                name: "Sarro",
                countryId: "AZ"
            },
            {
                id: "AZ-TOV",
                name: "Tovuz",
                countryId: "AZ"
            },
            {
                id: "AZ-UCA",
                name: "Ucar",
                countryId: "AZ"
            },
            {
                id: "AZ-XA",
                name: "Stepanakert",
                countryId: "AZ"
            },
            {
                id: "AZ-XAC",
                name: "Jachmaz",
                countryId: "AZ"
            },
            {
                id: "AZ-XCI",
                name: "Jodjalí",
                countryId: "AZ"
            },
            {
                id: "AZ-XIZ",
                name: "Xizi",
                countryId: "AZ"
            },
            {
                id: "AZ-XVD",
                name: "Khojavand",
                countryId: "AZ"
            },
            {
                id: "AZ-YAR",
                name: "Yardimli",
                countryId: "AZ"
            },
            {
                id: "AZ-YE",
                name: "Yevlaj",
                countryId: "AZ"
            },
            {
                id: "AZ-YEV",
                name: "Yevlaj",
                countryId: "AZ"
            },
            {
                id: "AZ-ZAN",
                name: "Zengilan",
                countryId: "AZ"
            },
            {
                id: "AZ-ZAQ",
                name: "Zaqatala",
                countryId: "AZ"
            },
            {
                id: "AZ-ZAR",
                name: "Zardab",
                countryId: "AZ"
            },
            {
                id: "BA-BIH",
                name: "La Federación De Bosnia Y Herzegovina",
                countryId: "BA"
            },
            {
                id: "BA-BRC",
                name: "Distrito De Brcko",
                countryId: "BA"
            },
            {
                id: "BA-SRP",
                name: "República De Serbia",
                countryId: "BA"
            },
            {
                id: "BB-01",
                name: "Iglesia De Cristo",
                countryId: "BB"
            },
            {
                id: "BB-02",
                name: "San Andrés",
                countryId: "BB"
            },
            {
                id: "BB-03",
                name: "San Jorge",
                countryId: "BB"
            },
            {
                id: "BB-04",
                name: "Saint James",
                countryId: "BB"
            },
            {
                id: "BB-05",
                name: "San Juan",
                countryId: "BB"
            },
            {
                id: "BB-06",
                name: "San José",
                countryId: "BB"
            },
            {
                id: "BB-07",
                name: "Santa Lucía",
                countryId: "BB"
            },
            {
                id: "BB-08",
                name: "San Miguel",
                countryId: "BB"
            },
            {
                id: "BB-09",
                name: "San Pedro",
                countryId: "BB"
            },
            {
                id: "BB-10",
                name: "San Felipe",
                countryId: "BB"
            },
            {
                id: "BB-11",
                name: "Santo Tomás",
                countryId: "BB"
            },
            {
                id: "BD-A",
                name: "Barisal",
                countryId: "BD"
            },
            {
                id: "BD-B",
                name: "Chittagong",
                countryId: "BD"
            },
            {
                id: "BD-C",
                name: "Dacca",
                countryId: "BD"
            },
            {
                id: "BD-D",
                name: "Khulna",
                countryId: "BD"
            },
            {
                id: "BD-E",
                name: "Rajshahi",
                countryId: "BD"
            },
            {
                id: "BD-F",
                name: "Rangpur",
                countryId: "BD"
            },
            {
                id: "BD-G",
                name: "Sylhet",
                countryId: "BD"
            },
            {
                id: "BD-M",
                name: "Mymensingh",
                countryId: "BD"
            },
            {
                id: "BE-BRU",
                name: "Bruselas",
                countryId: "BE"
            },
            {
                id: "BE-VLG",
                name: "Flandes",
                countryId: "BE"
            },
            {
                id: "BE-WAL",
                name: "Valonia",
                countryId: "BE"
            },
            {
                id: "BF-BAL",
                name: "Balé",
                countryId: "BF"
            },
            {
                id: "BF-BAM",
                name: "Bam Bam Lago /",
                countryId: "BF"
            },
            {
                id: "BF-BAN",
                name: "Provincia Banwa",
                countryId: "BF"
            },
            {
                id: "BF-BAZ",
                name: "Bazèga",
                countryId: "BF"
            },
            {
                id: "BF-BGR",
                name: "Bougouriba",
                countryId: "BF"
            },
            {
                id: "BF-BLG",
                name: "Provincia Boulgou",
                countryId: "BF"
            },
            {
                id: "BF-BLK",
                name: "Boulkiemdé",
                countryId: "BF"
            },
            {
                id: "BF-COM",
                name: "Comoé",
                countryId: "BF"
            },
            {
                id: "BF-GAN",
                name: "Provincia Ganzourgou",
                countryId: "BF"
            },
            {
                id: "BF-GNA",
                name: "Gnagna",
                countryId: "BF"
            },
            {
                id: "BF-GOU",
                name: "Provincia Gourma",
                countryId: "BF"
            },
            {
                id: "BF-HOU",
                name: "Houet",
                countryId: "BF"
            },
            {
                id: "BF-IOB",
                name: "Ioba",
                countryId: "BF"
            },
            {
                id: "BF-KAD",
                name: "Kadiogo",
                countryId: "BF"
            },
            {
                id: "BF-KEN",
                name: "Kénédougou",
                countryId: "BF"
            },
            {
                id: "BF-KMD",
                name: "Komondjari",
                countryId: "BF"
            },
            {
                id: "BF-KMP",
                name: "Kompienga",
                countryId: "BF"
            },
            {
                id: "BF-KOP",
                name: "Koulpélogo",
                countryId: "BF"
            },
            {
                id: "BF-KOS",
                name: "Provincia Kossi",
                countryId: "BF"
            },
            {
                id: "BF-KOT",
                name: "Kouritenga",
                countryId: "BF"
            },
            {
                id: "BF-KOW",
                name: "Kourwéogo",
                countryId: "BF"
            },
            {
                id: "BF-LER",
                name: "Léraba",
                countryId: "BF"
            },
            {
                id: "BF-LOR",
                name: "Loroum",
                countryId: "BF"
            },
            {
                id: "BF-MOU",
                name: "Mouhoun",
                countryId: "BF"
            },
            {
                id: "BF-NAM",
                name: "Namentenga",
                countryId: "BF"
            },
            {
                id: "BF-NAO",
                name: "Naouri",
                countryId: "BF"
            },
            {
                id: "BF-NAY",
                name: "Nayala",
                countryId: "BF"
            },
            {
                id: "BF-NOU",
                name: "Noumbiel",
                countryId: "BF"
            },
            {
                id: "BF-OUB",
                name: "Oubritenga",
                countryId: "BF"
            },
            {
                id: "BF-OUD",
                name: "Oudalan",
                countryId: "BF"
            },
            {
                id: "BF-PAS",
                name: "Passoré",
                countryId: "BF"
            },
            {
                id: "BF-PON",
                name: "Poni",
                countryId: "BF"
            },
            {
                id: "BF-SEN",
                name: "Seno",
                countryId: "BF"
            },
            {
                id: "BF-SIS",
                name: "Sissili",
                countryId: "BF"
            },
            {
                id: "BF-SMT",
                name: "Sanmatenga",
                countryId: "BF"
            },
            {
                id: "BF-SNG",
                name: "Sanguié",
                countryId: "BF"
            },
            {
                id: "BF-SOM",
                name: "Soum",
                countryId: "BF"
            },
            {
                id: "BF-SOR",
                name: "Sourou",
                countryId: "BF"
            },
            {
                id: "BF-TAP",
                name: "Tapoa",
                countryId: "BF"
            },
            {
                id: "BF-TUI",
                name: "Tui",
                countryId: "BF"
            },
            {
                id: "BF-YAG",
                name: "Yagha",
                countryId: "BF"
            },
            {
                id: "BF-YAT",
                name: "Yatenga",
                countryId: "BF"
            },
            {
                id: "BF-ZIR",
                name: "Ziro",
                countryId: "BF"
            },
            {
                id: "BF-ZON",
                name: "Zondoma",
                countryId: "BF"
            },
            {
                id: "BF-ZOU",
                name: "Zoundwéogo",
                countryId: "BF"
            },
            {
                id: "BG-01",
                name: "Blagoevgrad",
                countryId: "BG"
            },
            {
                id: "BG-02",
                name: "Burgas",
                countryId: "BG"
            },
            {
                id: "BG-03",
                name: "Varna",
                countryId: "BG"
            },
            {
                id: "BG-04",
                name: "Veliko Tarnovo",
                countryId: "BG"
            },
            {
                id: "BG-05",
                name: "Vidin",
                countryId: "BG"
            },
            {
                id: "BG-06",
                name: "Vratsa",
                countryId: "BG"
            },
            {
                id: "BG-07",
                name: "Gabrovo",
                countryId: "BG"
            },
            {
                id: "BG-08",
                name: "Dobrich",
                countryId: "BG"
            },
            {
                id: "BG-09",
                name: "Kardzhali",
                countryId: "BG"
            },
            {
                id: "BG-10",
                name: "Kyustendil",
                countryId: "BG"
            },
            {
                id: "BG-11",
                name: "Lovech",
                countryId: "BG"
            },
            {
                id: "BG-12",
                name: "Montana",
                countryId: "BG"
            },
            {
                id: "BG-13",
                name: "Pazardzhik",
                countryId: "BG"
            },
            {
                id: "BG-14",
                name: "Pernik",
                countryId: "BG"
            },
            {
                id: "BG-15",
                name: "Pleven",
                countryId: "BG"
            },
            {
                id: "BG-16",
                name: "Plovdiv",
                countryId: "BG"
            },
            {
                id: "BG-17",
                name: "Razgrad",
                countryId: "BG"
            },
            {
                id: "BG-18",
                name: "Ruse",
                countryId: "BG"
            },
            {
                id: "BG-19",
                name: "Silistra",
                countryId: "BG"
            },
            {
                id: "BG-20",
                name: "Sliven",
                countryId: "BG"
            },
            {
                id: "BG-21",
                name: "Smolyan",
                countryId: "BG"
            },
            {
                id: "BG-22",
                name: "Sofía",
                countryId: "BG"
            },
            {
                id: "BG-23",
                name: "Sofía",
                countryId: "BG"
            },
            {
                id: "BG-24",
                name: "Stara Zagora",
                countryId: "BG"
            },
            {
                id: "BG-25",
                name: "Targovishte",
                countryId: "BG"
            },
            {
                id: "BG-26",
                name: "Haskovo",
                countryId: "BG"
            },
            {
                id: "BG-27",
                name: "Shumen",
                countryId: "BG"
            },
            {
                id: "BG-28",
                name: "Yambol",
                countryId: "BG"
            },
            {
                id: "BH-13",
                name: "Capital De Gobernación",
                countryId: "BH"
            },
            {
                id: "BH-14",
                name: "Sur",
                countryId: "BH"
            },
            {
                id: "BH-15",
                name: "Muharraq",
                countryId: "BH"
            },
            {
                id: "BH-17",
                name: "Norte",
                countryId: "BH"
            },
            {
                id: "BI-BB",
                name: "Bubanza",
                countryId: "BI"
            },
            {
                id: "BI-BL",
                name: "Bujumbura Rural",
                countryId: "BI"
            },
            {
                id: "BI-BM",
                name: "Bujumbura Mairie",
                countryId: "BI"
            },
            {
                id: "BI-BR",
                name: "Bururi",
                countryId: "BI"
            },
            {
                id: "BI-CA",
                name: "Cankuzo",
                countryId: "BI"
            },
            {
                id: "BI-CI",
                name: "Cibitoke",
                countryId: "BI"
            },
            {
                id: "BI-GI",
                name: "Gitega",
                countryId: "BI"
            },
            {
                id: "BI-KI",
                name: "Kirundo",
                countryId: "BI"
            },
            {
                id: "BI-KR",
                name: "Karuzi",
                countryId: "BI"
            },
            {
                id: "BI-KY",
                name: "Kayanza",
                countryId: "BI"
            },
            {
                id: "BI-MA",
                name: "Makamba",
                countryId: "BI"
            },
            {
                id: "BI-MU",
                name: "Muramvya",
                countryId: "BI"
            },
            {
                id: "BI-MW",
                name: "Mwaro",
                countryId: "BI"
            },
            {
                id: "BI-MY",
                name: "Muyinga",
                countryId: "BI"
            },
            {
                id: "BI-NG",
                name: "Ngozi",
                countryId: "BI"
            },
            {
                id: "BI-RT",
                name: "Rutana",
                countryId: "BI"
            },
            {
                id: "BI-RY",
                name: "Ruyigi",
                countryId: "BI"
            },
            {
                id: "BJ-AK",
                name: "Atakora",
                countryId: "BJ"
            },
            {
                id: "BJ-AL",
                name: "Alibori",
                countryId: "BJ"
            },
            {
                id: "BJ-AQ",
                name: "Atlántico",
                countryId: "BJ"
            },
            {
                id: "BJ-BO",
                name: "Borgou",
                countryId: "BJ"
            },
            {
                id: "BJ-CO",
                name: "Departamento Colinas",
                countryId: "BJ"
            },
            {
                id: "BJ-DO",
                name: "Donga",
                countryId: "BJ"
            },
            {
                id: "BJ-KO",
                name: "Kouffo",
                countryId: "BJ"
            },
            {
                id: "BJ-LI",
                name: "Departamento Litoral",
                countryId: "BJ"
            },
            {
                id: "BJ-MO",
                name: "Departamento Mono",
                countryId: "BJ"
            },
            {
                id: "BJ-OU",
                name: "Ouémé",
                countryId: "BJ"
            },
            {
                id: "BJ-PL",
                name: "Bandeja",
                countryId: "BJ"
            },
            {
                id: "BJ-ZO",
                name: "Zou",
                countryId: "BJ"
            },
            {
                id: "BL-01",
                name: "Bajo El Viento",
                countryId: "BL"
            },
            {
                id: "BL-02",
                name: "El Viento Se Llevó",
                countryId: "BL"
            },
            {
                id: "BM-01",
                name: "Devonshire Parish",
                countryId: "BM"
            },
            {
                id: "BM-02",
                name: "Hamilton Parish",
                countryId: "BM"
            },
            {
                id: "BM-03",
                name: "Hamilton",
                countryId: "BM"
            },
            {
                id: "BM-04",
                name: "Paget Parish",
                countryId: "BM"
            },
            {
                id: "BM-05",
                name: "Pembroke Parish",
                countryId: "BM"
            },
            {
                id: "BM-06",
                name: "Ciudad De St. George",
                countryId: "BM"
            },
            {
                id: "BM-07",
                name: "Parroquia De San Jorge",
                countryId: "BM"
            },
            {
                id: "BM-08",
                name: "Sandys Parish",
                countryId: "BM"
            },
            {
                id: "BM-09",
                name: "Parroquia De Smith",
                countryId: "BM"
            },
            {
                id: "BM-10",
                name: "Southampton Parish",
                countryId: "BM"
            },
            {
                id: "BM-11",
                name: "Parroquia De Warwick",
                countryId: "BM"
            },
            {
                id: "BN-BE",
                name: "Belait",
                countryId: "BN"
            },
            {
                id: "BN-BM",
                name: "Brunei Muara",
                countryId: "BN"
            },
            {
                id: "BN-TE",
                name: "Temburong",
                countryId: "BN"
            },
            {
                id: "BN-TU",
                name: "Tutong",
                countryId: "BN"
            },
            {
                id: "BO-B",
                name: "Beni",
                countryId: "BO"
            },
            {
                id: "BO-C",
                name: "Cochabamba",
                countryId: "BO"
            },
            {
                id: "BO-H",
                name: "Chuquisaca",
                countryId: "BO"
            },
            {
                id: "BO-L",
                name: "La Paz",
                countryId: "BO"
            },
            {
                id: "BO-N",
                name: "Pando",
                countryId: "BO"
            },
            {
                id: "BO-O",
                name: "Oruro",
                countryId: "BO"
            },
            {
                id: "BO-P",
                name: "Potosí",
                countryId: "BO"
            },
            {
                id: "BO-S",
                name: "Santa Cruz",
                countryId: "BO"
            },
            {
                id: "BO-T",
                name: "Tarija",
                countryId: "BO"
            },
            {
                id: "BQ-BO",
                name: "Bonaire",
                countryId: "BQ"
            },
            {
                id: "BQ-SA",
                name: "Saba Isand",
                countryId: "BQ"
            },
            {
                id: "BQ-SE",
                name: "San Eustaquio",
                countryId: "BQ"
            },
            {
                id: "BR-AC",
                name: "Acre",
                countryId: "BR"
            },
            {
                id: "BR-AL",
                name: "Alagoas",
                countryId: "BR"
            },
            {
                id: "BR-AM",
                name: "Amazonas",
                countryId: "BR"
            },
            {
                id: "BR-AP",
                name: "Amapá",
                countryId: "BR"
            },
            {
                id: "BR-BA",
                name: "Bahía",
                countryId: "BR"
            },
            {
                id: "BR-CE",
                name: "Ceará",
                countryId: "BR"
            },
            {
                id: "BR-DF",
                name: "Distrito Federal",
                countryId: "BR"
            },
            {
                id: "BR-ES",
                name: "Espíritu Santo",
                countryId: "BR"
            },
            {
                id: "BR-GO",
                name: "Goiás",
                countryId: "BR"
            },
            {
                id: "BR-MA",
                name: "Maranhão",
                countryId: "BR"
            },
            {
                id: "BR-MG",
                name: "Minas Gerais",
                countryId: "BR"
            },
            {
                id: "BR-MS",
                name: "Mato Grosso Del Sur",
                countryId: "BR"
            },
            {
                id: "BR-MT",
                name: "Mato Grosso",
                countryId: "BR"
            },
            {
                id: "BR-PA",
                name: "Pará",
                countryId: "BR"
            },
            {
                id: "BR-PB",
                name: "Paraíba",
                countryId: "BR"
            },
            {
                id: "BR-PE",
                name: "Pernambuco",
                countryId: "BR"
            },
            {
                id: "BR-PI",
                name: "Piauí",
                countryId: "BR"
            },
            {
                id: "BR-PR",
                name: "Paraná",
                countryId: "BR"
            },
            {
                id: "BR-RJ",
                name: "Rio De Janeiro",
                countryId: "BR"
            },
            {
                id: "BR-RN",
                name: "Río Grande Del Norte",
                countryId: "BR"
            },
            {
                id: "BR-RO",
                name: "Rondônia",
                countryId: "BR"
            },
            {
                id: "BR-RR",
                name: "Roraima",
                countryId: "BR"
            },
            {
                id: "BR-RS",
                name: "Río Grande Del Sur",
                countryId: "BR"
            },
            {
                id: "BR-SC",
                name: "Santa Catarina",
                countryId: "BR"
            },
            {
                id: "BR-SE",
                name: "Sergipe",
                countryId: "BR"
            },
            {
                id: "BR-SP",
                name: "San Pablo",
                countryId: "BR"
            },
            {
                id: "BR-TO",
                name: "Tocantins",
                countryId: "BR"
            },
            {
                id: "BS-01",
                name: "Acklins",
                countryId: "BS"
            },
            {
                id: "BS-02",
                name: "Bimini",
                countryId: "BS"
            },
            {
                id: "BS-03",
                name: "Cat Island",
                countryId: "BS"
            },
            {
                id: "BS-04",
                name: "Exuma",
                countryId: "BS"
            },
            {
                id: "BS-05",
                name: "Puerto Libre",
                countryId: "BS"
            },
            {
                id: "BS-06",
                name: "Fresh Creek",
                countryId: "BS"
            },
            {
                id: "BS-07",
                name: "Puerto Del Gobernador",
                countryId: "BS"
            },
            {
                id: "BS-08",
                name: "Green Turtle Cay",
                countryId: "BS"
            },
            {
                id: "BS-09",
                name: "Harbour Island",
                countryId: "BS"
            },
            {
                id: "BS-10",
                name: "High Rock",
                countryId: "BS"
            },
            {
                id: "BS-11",
                name: "Inagua",
                countryId: "BS"
            },
            {
                id: "BS-12",
                name: "Kemps Bay",
                countryId: "BS"
            },
            {
                id: "BS-13",
                name: "Isla Grande",
                countryId: "BS"
            },
            {
                id: "BS-14",
                name: "Marsh Harbour",
                countryId: "BS"
            },
            {
                id: "BS-15",
                name: "Mayaguana",
                countryId: "BS"
            },
            {
                id: "BS-16",
                name: "Nueva Providencia",
                countryId: "BS"
            },
            {
                id: "BS-17",
                name: "Nichollstown Y Berry Islands",
                countryId: "BS"
            },
            {
                id: "BS-18",
                name: "Isla Desigual",
                countryId: "BS"
            },
            {
                id: "BS-19",
                name: "Rock Sound",
                countryId: "BS"
            },
            {
                id: "BS-20",
                name: "San Salvador Y Rum Cay",
                countryId: "BS"
            },
            {
                id: "BS-21",
                name: "Sandy Point",
                countryId: "BS"
            },
            {
                id: "BS-22",
                name: "Berry Islands",
                countryId: "BS"
            },
            {
                id: "BS-23",
                name: "Punto Negro",
                countryId: "BS"
            },
            {
                id: "BS-24",
                name: "Central Abaco",
                countryId: "BS"
            },
            {
                id: "BS-28",
                name: "Crooked Island Y Long Cay",
                countryId: "BS"
            },
            {
                id: "BS-29",
                name: "East Grand Bahama",
                countryId: "BS"
            },
            {
                id: "BS-33",
                name: "North Eleuthera",
                countryId: "BS"
            },
            {
                id: "BS-35",
                name: "Sur Abaco",
                countryId: "BS"
            },
            {
                id: "BS-36",
                name: "South Andros",
                countryId: "BS"
            },
            {
                id: "BS-37",
                name: "Eleuthera Sur",
                countryId: "BS"
            },
            {
                id: "BS-39",
                name: "West Grand Bahama",
                countryId: "BS"
            },
            {
                id: "BS-40",
                name: "Isla De Moore",
                countryId: "BS"
            },
            {
                id: "BS-41",
                name: "Andros Del Norte",
                countryId: "BS"
            },
            {
                id: "BS-42",
                name: "Abaco Norte",
                countryId: "BS"
            },
            {
                id: "BT-11",
                name: "Paro",
                countryId: "BT"
            },
            {
                id: "BT-12",
                name: "Chhukha",
                countryId: "BT"
            },
            {
                id: "BT-13",
                name: "Haa",
                countryId: "BT"
            },
            {
                id: "BT-14",
                name: "Samtse",
                countryId: "BT"
            },
            {
                id: "BT-15",
                name: "Thimphu",
                countryId: "BT"
            },
            {
                id: "BT-21",
                name: "Tsirang",
                countryId: "BT"
            },
            {
                id: "BT-22",
                name: "Dagana",
                countryId: "BT"
            },
            {
                id: "BT-23",
                name: "Punakha",
                countryId: "BT"
            },
            {
                id: "BT-24",
                name: "Wangdue",
                countryId: "BT"
            },
            {
                id: "BT-31",
                name: "Sarpang",
                countryId: "BT"
            },
            {
                id: "BT-32",
                name: "Trongsa",
                countryId: "BT"
            },
            {
                id: "BT-33",
                name: "Bumthang",
                countryId: "BT"
            },
            {
                id: "BT-34",
                name: "Zhemgang",
                countryId: "BT"
            },
            {
                id: "BT-41",
                name: "Trashigang",
                countryId: "BT"
            },
            {
                id: "BT-42",
                name: "Mongar",
                countryId: "BT"
            },
            {
                id: "BT-43",
                name: "Pemagatshel",
                countryId: "BT"
            },
            {
                id: "BT-44",
                name: "Lhuntse",
                countryId: "BT"
            },
            {
                id: "BT-45",
                name: "Samdrup Jongkhar",
                countryId: "BT"
            },
            {
                id: "BT-GA",
                name: "Gasa",
                countryId: "BT"
            },
            {
                id: "BT-TY",
                name: "Trashiyangtse",
                countryId: "BT"
            },
            {
                id: "BV-BV",
                name: "Isla Bouvet",
                countryId: "BV"
            },
            {
                id: "BW-CE",
                name: "Central",
                countryId: "BW"
            },
            {
                id: "BW-GH",
                name: "Ghanzi",
                countryId: "BW"
            },
            {
                id: "BW-KG",
                name: "Kgalagadi",
                countryId: "BW"
            },
            {
                id: "BW-KL",
                name: "Kgatleng",
                countryId: "BW"
            },
            {
                id: "BW-KW",
                name: "Kweneng",
                countryId: "BW"
            },
            {
                id: "BW-NE",
                name: "Noreste",
                countryId: "BW"
            },
            {
                id: "BW-NW",
                name: "Noroeste",
                countryId: "BW"
            },
            {
                id: "BW-SE",
                name: "Sureste",
                countryId: "BW"
            },
            {
                id: "BW-SO",
                name: "Del Sur",
                countryId: "BW"
            },
            {
                id: "BY-BR",
                name: "Región De Brest",
                countryId: "BY"
            },
            {
                id: "BY-HM",
                name: "Minsk",
                countryId: "BY"
            },
            {
                id: "BY-HO",
                name: "Región De Gomel",
                countryId: "BY"
            },
            {
                id: "BY-HR",
                name: "La Región De Grodno",
                countryId: "BY"
            },
            {
                id: "BY-MA",
                name: "Región De Mogilev",
                countryId: "BY"
            },
            {
                id: "BY-MI",
                name: "La Región De Minsk",
                countryId: "BY"
            },
            {
                id: "BY-VI",
                name: "Región De Vitebsk",
                countryId: "BY"
            },
            {
                id: "BZ-BZ",
                name: "Distrito De Belice",
                countryId: "BZ"
            },
            {
                id: "BZ-CY",
                name: "Distrito De Cayo",
                countryId: "BZ"
            },
            {
                id: "BZ-CZL",
                name: "Distrito De Corozal",
                countryId: "BZ"
            },
            {
                id: "BZ-OW",
                name: "Distrito De Orange Walk",
                countryId: "BZ"
            },
            {
                id: "BZ-SC",
                name: "Distrito De Stann Creek",
                countryId: "BZ"
            },
            {
                id: "BZ-TOL",
                name: "Distrito De Toledo",
                countryId: "BZ"
            },
            {
                id: "CA-AB",
                name: "Alberta",
                countryId: "CA"
            },
            {
                id: "CA-BC",
                name: "Colombia Británica",
                countryId: "CA"
            },
            {
                id: "CA-MB",
                name: "Manitoba",
                countryId: "CA"
            },
            {
                id: "CA-NB",
                name: "Nuevo Brunswick",
                countryId: "CA"
            },
            {
                id: "CA-NL",
                name: "Newfoundland Y Labrador",
                countryId: "CA"
            },
            {
                id: "CA-NS",
                name: "Nueva Escocia",
                countryId: "CA"
            },
            {
                id: "CA-NT",
                name: "Territorios Del Noroeste",
                countryId: "CA"
            },
            {
                id: "CA-NU",
                name: "Nunavut",
                countryId: "CA"
            },
            {
                id: "CA-ON",
                name: "Ontario",
                countryId: "CA"
            },
            {
                id: "CA-PE",
                name: "Isla Del Príncipe Eduardo",
                countryId: "CA"
            },
            {
                id: "CA-QC",
                name: "Quebec",
                countryId: "CA"
            },
            {
                id: "CA-SK",
                name: "Saskatchewan",
                countryId: "CA"
            },
            {
                id: "CA-YT",
                name: "Yukón",
                countryId: "CA"
            },
            {
                id: "CC-DI",
                name: "Dirección Isla",
                countryId: "CC"
            },
            {
                id: "CC-HM",
                name: "Hogar De La Isla",
                countryId: "CC"
            },
            {
                id: "CC-HR",
                name: "Isla Horsburgh",
                countryId: "CC"
            },
            {
                id: "CC-NK",
                name: "Keeling Isla Norte",
                countryId: "CC"
            },
            {
                id: "CC-SI",
                name: "Isla Del Sur",
                countryId: "CC"
            },
            {
                id: "CC-WI",
                name: "West Island",
                countryId: "CC"
            },
            {
                id: "CD-BC",
                name: "Bajo Congo",
                countryId: "CD"
            },
            {
                id: "CD-BN",
                name: "Bandundu",
                countryId: "CD"
            },
            {
                id: "CD-EQ",
                name: "Ecuador",
                countryId: "CD"
            },
            {
                id: "CD-KA",
                name: "Katanga",
                countryId: "CD"
            },
            {
                id: "CD-KE",
                name: "Kasai Occidental",
                countryId: "CD"
            },
            {
                id: "CD-KN",
                name: "Kinshasa",
                countryId: "CD"
            },
            {
                id: "CD-KW",
                name: "Kasai Oriental",
                countryId: "CD"
            },
            {
                id: "CD-MA",
                name: "Maniema",
                countryId: "CD"
            },
            {
                id: "CD-NK",
                name: "Kivu Del Norte",
                countryId: "CD"
            },
            {
                id: "CD-OR",
                name: "Oriental",
                countryId: "CD"
            },
            {
                id: "CD-SK",
                name: "Kivu Del Sur",
                countryId: "CD"
            },
            {
                id: "CF-10",
                name: "Nana Grebizi",
                countryId: "CF"
            },
            {
                id: "CF-AC",
                name: "Ouham",
                countryId: "CF"
            },
            {
                id: "CF-BB",
                name: "Bamingui-Bangoran",
                countryId: "CF"
            },
            {
                id: "CF-BGF",
                name: "Bangui",
                countryId: "CF"
            },
            {
                id: "CF-BK",
                name: "Menor Kotto",
                countryId: "CF"
            },
            {
                id: "CF-HK",
                name: "Haute-Kotto",
                countryId: "CF"
            },
            {
                id: "CF-HM",
                name: "Haut-Mbomou",
                countryId: "CF"
            },
            {
                id: "CF-HS",
                name: "Mambéré-Kadéï",
                countryId: "CF"
            },
            {
                id: "CF-KG",
                name: "Kemo",
                countryId: "CF"
            },
            {
                id: "CF-LB",
                name: "Lobaye",
                countryId: "CF"
            },
            {
                id: "CF-MB",
                name: "Mbomou",
                countryId: "CF"
            },
            {
                id: "CF-MP",
                name: "Ombella-M'Poko",
                countryId: "CF"
            },
            {
                id: "CF-NM",
                name: "Nana-Mambéré",
                countryId: "CF"
            },
            {
                id: "CF-OP",
                name: "Ouham Pendé",
                countryId: "CF"
            },
            {
                id: "CF-SE",
                name: "Sangha- Mbaéré",
                countryId: "CF"
            },
            {
                id: "CF-UK",
                name: "Ouaka",
                countryId: "CF"
            },
            {
                id: "CF-VK",
                name: "Vakaga",
                countryId: "CF"
            },
            {
                id: "CG-11",
                name: "Bouenza",
                countryId: "CG"
            },
            {
                id: "CG-12",
                name: "Piscina",
                countryId: "CG"
            },
            {
                id: "CG-13",
                name: "Sangha",
                countryId: "CG"
            },
            {
                id: "CG-14",
                name: "Tierras Altas",
                countryId: "CG"
            },
            {
                id: "CG-15",
                name: "Cubeta-Ouest",
                countryId: "CG"
            },
            {
                id: "CG-16",
                name: "Pointe-Noire",
                countryId: "CG"
            },
            {
                id: "CG-2",
                name: "Lékoumou",
                countryId: "CG"
            },
            {
                id: "CG-5",
                name: "Kouilou",
                countryId: "CG"
            },
            {
                id: "CG-7",
                name: "Likuala",
                countryId: "CG"
            },
            {
                id: "CG-8",
                name: "Bowl",
                countryId: "CG"
            },
            {
                id: "CG-9",
                name: "Niari",
                countryId: "CG"
            },
            {
                id: "CG-BZV",
                name: "Brazzaville",
                countryId: "CG"
            },
            {
                id: "CH-AG",
                name: "Argovia",
                countryId: "CH"
            },
            {
                id: "CH-AI",
                name: "Appenzell Innerhoden",
                countryId: "CH"
            },
            {
                id: "CH-AR",
                name: "Appenzell Rodas Exteriores",
                countryId: "CH"
            },
            {
                id: "CH-BE",
                name: "Berna",
                countryId: "CH"
            },
            {
                id: "CH-BL",
                name: "Basilea-País",
                countryId: "CH"
            },
            {
                id: "CH-BS",
                name: "Basilea-Ciudad",
                countryId: "CH"
            },
            {
                id: "CH-FR",
                name: "Friburgo",
                countryId: "CH"
            },
            {
                id: "CH-GE",
                name: "Ginebra",
                countryId: "CH"
            },
            {
                id: "CH-GL",
                name: "Glarus",
                countryId: "CH"
            },
            {
                id: "CH-GR",
                name: "Grisons",
                countryId: "CH"
            },
            {
                id: "CH-JU",
                name: "Montañas Del Jura",
                countryId: "CH"
            },
            {
                id: "CH-LU",
                name: "Lucerna",
                countryId: "CH"
            },
            {
                id: "CH-NE",
                name: "Neuchatel",
                countryId: "CH"
            },
            {
                id: "CH-NW",
                name: "Nidwalden",
                countryId: "CH"
            },
            {
                id: "CH-OW",
                name: "Obwalden",
                countryId: "CH"
            },
            {
                id: "CH-SG",
                name: "Sankt Gallen",
                countryId: "CH"
            },
            {
                id: "CH-SH",
                name: "Schaffhausen",
                countryId: "CH"
            },
            {
                id: "CH-SO",
                name: "Solothurn",
                countryId: "CH"
            },
            {
                id: "CH-SZ",
                name: "Schwyz",
                countryId: "CH"
            },
            {
                id: "CH-TG",
                name: "Thurgau",
                countryId: "CH"
            },
            {
                id: "CH-TI",
                name: "Ticino",
                countryId: "CH"
            },
            {
                id: "CH-UR",
                name: "Uri",
                countryId: "CH"
            },
            {
                id: "CH-VD",
                name: "Vaud",
                countryId: "CH"
            },
            {
                id: "CH-VS",
                name: "Valais",
                countryId: "CH"
            },
            {
                id: "CH-ZG",
                name: "Zug",
                countryId: "CH"
            },
            {
                id: "CH-ZH",
                name: "Zúrich",
                countryId: "CH"
            },
            {
                id: "CI-01",
                name: "Lagunes",
                countryId: "CI"
            },
            {
                id: "CI-02",
                name: "Haut-Sassandra",
                countryId: "CI"
            },
            {
                id: "CI-03",
                name: "Savanes",
                countryId: "CI"
            },
            {
                id: "CI-04",
                name: "Vallée Du Bandama",
                countryId: "CI"
            },
            {
                id: "CI-05",
                name: "Comoé Medio",
                countryId: "CI"
            },
            {
                id: "CI-06",
                name: "Dix-Huit Montagnes",
                countryId: "CI"
            },
            {
                id: "CI-07",
                name: "Lacs",
                countryId: "CI"
            },
            {
                id: "CI-08",
                name: "Zanzan",
                countryId: "CI"
            },
            {
                id: "CI-09",
                name: "Bas-Sassandra",
                countryId: "CI"
            },
            {
                id: "CI-10",
                name: "Denguele",
                countryId: "CI"
            },
            {
                id: "CI-11",
                name: "N'Zi-Comoé",
                countryId: "CI"
            },
            {
                id: "CI-12",
                name: "Marahoué",
                countryId: "CI"
            },
            {
                id: "CI-13",
                name: "Sur Comoé",
                countryId: "CI"
            },
            {
                id: "CI-14",
                name: "Worodougou",
                countryId: "CI"
            },
            {
                id: "CI-15",
                name: "Sud-Bandama",
                countryId: "CI"
            },
            {
                id: "CI-16",
                name: "Agnéby",
                countryId: "CI"
            },
            {
                id: "CI-17",
                name: "Bafing",
                countryId: "CI"
            },
            {
                id: "CI-18",
                name: "Fromager",
                countryId: "CI"
            },
            {
                id: "CI-19",
                name: "Moyen-Cavally",
                countryId: "CI"
            },
            {
                id: "CK-0",
                name: "Aitutaki",
                countryId: "CK"
            },
            {
                id: "CK-1",
                name: "Atiu",
                countryId: "CK"
            },
            {
                id: "CK-10",
                name: "Pukapuka",
                countryId: "CK"
            },
            {
                id: "CK-11",
                name: "Rakahanga",
                countryId: "CK"
            },
            {
                id: "CK-2",
                name: "Avarua",
                countryId: "CK"
            },
            {
                id: "CK-3",
                name: "Mangaia",
                countryId: "CK"
            },
            {
                id: "CK-4",
                name: "Manihiki",
                countryId: "CK"
            },
            {
                id: "CK-5",
                name: "Ma'Uke",
                countryId: "CK"
            },
            {
                id: "CK-6",
                name: "Mitiaro",
                countryId: "CK"
            },
            {
                id: "CK-7",
                name: "Nassau",
                countryId: "CK"
            },
            {
                id: "CK-8",
                name: "Palmerston",
                countryId: "CK"
            },
            {
                id: "CK-9",
                name: "Penrhyn",
                countryId: "CK"
            },
            {
                id: "CL-11",
                name: "Marga-Marga",
                countryId: "CL"
            },
            {
                id: "CL-AI",
                name: "Aisén Del General Carlos Ibáñez Del Campo",
                countryId: "CL"
            },
            {
                id: "CL-AN",
                name: "Antofagasta",
                countryId: "CL"
            },
            {
                id: "CL-AP",
                name: "Arica Y Parinacota",
                countryId: "CL"
            },
            {
                id: "CL-AR",
                name: "Araucanía",
                countryId: "CL"
            },
            {
                id: "CL-AT",
                name: "Atacama",
                countryId: "CL"
            },
            {
                id: "CL-BI",
                name: "Bío-Bío",
                countryId: "CL"
            },
            {
                id: "CL-CO",
                name: "Coquimbo",
                countryId: "CL"
            },
            {
                id: "CL-LI",
                name: "Libertador General Bernardo O'Higgins",
                countryId: "CL"
            },
            {
                id: "CL-LL",
                name: "Los Lagos",
                countryId: "CL"
            },
            {
                id: "CL-LR",
                name: "Los Ríos",
                countryId: "CL"
            },
            {
                id: "CL-MA",
                name: "Magallanes Y Antartica Chilena",
                countryId: "CL"
            },
            {
                id: "CL-ML",
                name: "Maule",
                countryId: "CL"
            },
            {
                id: "CL-NB",
                name: "Ñuble",
                countryId: "CL"
            },
            {
                id: "CL-RM",
                name: "Región Metropolitana De Santiago",
                countryId: "CL"
            },
            {
                id: "CL-TA",
                name: "Tarapacá",
                countryId: "CL"
            },
            {
                id: "CL-VS",
                name: "Valparaíso",
                countryId: "CL"
            },
            {
                id: "CM-AD",
                name: "Adamawa",
                countryId: "CM"
            },
            {
                id: "CM-CE",
                name: "Centro",
                countryId: "CM"
            },
            {
                id: "CM-EN",
                name: "Extremo Norte",
                countryId: "CM"
            },
            {
                id: "CM-ES",
                name: "Oriente",
                countryId: "CM"
            },
            {
                id: "CM-LT",
                name: "Orilla",
                countryId: "CM"
            },
            {
                id: "CM-NO",
                name: "Norte",
                countryId: "CM"
            },
            {
                id: "CM-NW",
                name: "Noroeste",
                countryId: "CM"
            },
            {
                id: "CM-OU",
                name: "Oeste",
                countryId: "CM"
            },
            {
                id: "CM-SU",
                name: "Sur",
                countryId: "CM"
            },
            {
                id: "CM-SW",
                name: "Sudoeste",
                countryId: "CM"
            },
            {
                id: "CN-AH",
                name: "Anhui",
                countryId: "CN"
            },
            {
                id: "CN-BJ",
                name: "Pekín",
                countryId: "CN"
            },
            {
                id: "CN-CQ",
                name: "La Ciudad De Chongqing",
                countryId: "CN"
            },
            {
                id: "CN-FJ",
                name: "Provincia De Fujian",
                countryId: "CN"
            },
            {
                id: "CN-GD",
                name: "Guangdong",
                countryId: "CN"
            },
            {
                id: "CN-GS",
                name: "Provincia De Gansu",
                countryId: "CN"
            },
            {
                id: "CN-GX",
                name: "Guangxi Zhuang",
                countryId: "CN"
            },
            {
                id: "CN-GZ",
                name: "Guizhou",
                countryId: "CN"
            },
            {
                id: "CN-HA",
                name: "Shanghai",
                countryId: "CN"
            },
            {
                id: "CN-HB",
                name: "Hubei",
                countryId: "CN"
            },
            {
                id: "CN-HE",
                name: "Hebei",
                countryId: "CN"
            },
            {
                id: "CN-HI",
                name: "Hainan",
                countryId: "CN"
            },
            {
                id: "CN-HK",
                name: "Rae De Hong Kong",
                countryId: "CN"
            },
            {
                id: "CN-HL",
                name: "Heilongjiang",
                countryId: "CN"
            },
            {
                id: "CN-HN",
                name: "Hunan",
                countryId: "CN"
            },
            {
                id: "CN-JL",
                name: "Jilin",
                countryId: "CN"
            },
            {
                id: "CN-JS",
                name: "Provincia De Jiangsu",
                countryId: "CN"
            },
            {
                id: "CN-JX",
                name: "Provincia De Jiangxi",
                countryId: "CN"
            },
            {
                id: "CN-LN",
                name: "Provincia De Liaoning",
                countryId: "CN"
            },
            {
                id: "CN-MO",
                name: "Macao, Región Administrativa Especial",
                countryId: "CN"
            },
            {
                id: "CN-NM",
                name: "Mongolia Interior",
                countryId: "CN"
            },
            {
                id: "CN-NX",
                name: "Ningxia Hui",
                countryId: "CN"
            },
            {
                id: "CN-QH",
                name: "Qinghai",
                countryId: "CN"
            },
            {
                id: "CN-SC",
                name: "La Provincia De Sichuan",
                countryId: "CN"
            },
            {
                id: "CN-SD",
                name: "Shandong",
                countryId: "CN"
            },
            {
                id: "CN-SH",
                name: "Shanghai",
                countryId: "CN"
            },
            {
                id: "CN-SN",
                name: "La Provincia De Shanxi",
                countryId: "CN"
            },
            {
                id: "CN-SX",
                name: "Shanxi",
                countryId: "CN"
            },
            {
                id: "CN-TJ",
                name: "Tianjin",
                countryId: "CN"
            },
            {
                id: "CN-TW",
                name: "Taiwán",
                countryId: "CN"
            },
            {
                id: "CN-XJ",
                name: "Xinjiang Uygur",
                countryId: "CN"
            },
            {
                id: "CN-XZ",
                name: "Tíbet",
                countryId: "CN"
            },
            {
                id: "CN-YN",
                name: "Yunnan",
                countryId: "CN"
            },
            {
                id: "CN-ZJ",
                name: "Zhejiang",
                countryId: "CN"
            },
            {
                id: "CO-AMA",
                name: "Amazonas",
                countryId: "CO"
            },
            {
                id: "CO-ANT",
                name: "Antioquia",
                countryId: "CO"
            },
            {
                id: "CO-ARA",
                name: "Arauca",
                countryId: "CO"
            },
            {
                id: "CO-ATL",
                name: "Atlántico",
                countryId: "CO"
            },
            {
                id: "CO-BOL",
                name: "Bolívar",
                countryId: "CO"
            },
            {
                id: "CO-BOY",
                name: "Boyacá",
                countryId: "CO"
            },
            {
                id: "CO-CAL",
                name: "Caldas",
                countryId: "CO"
            },
            {
                id: "CO-CAQ",
                name: "Caquetá",
                countryId: "CO"
            },
            {
                id: "CO-CAS",
                name: "Casanare",
                countryId: "CO"
            },
            {
                id: "CO-CAU",
                name: "Cauca",
                countryId: "CO"
            },
            {
                id: "CO-CES",
                name: "Cesar",
                countryId: "CO"
            },
            {
                id: "CO-CHO",
                name: "Chocó",
                countryId: "CO"
            },
            {
                id: "CO-COR",
                name: "Córdoba",
                countryId: "CO"
            },
            {
                id: "CO-CUN",
                name: "Cundinamarca",
                countryId: "CO"
            },
            {
                id: "CO-DC",
                name: "Bogotá",
                countryId: "CO"
            },
            {
                id: "CO-GUA",
                name: "Guainía",
                countryId: "CO"
            },
            {
                id: "CO-GUV",
                name: "Guaviare",
                countryId: "CO"
            },
            {
                id: "CO-HUI",
                name: "Huila",
                countryId: "CO"
            },
            {
                id: "CO-LAG",
                name: "La Guajira",
                countryId: "CO"
            },
            {
                id: "CO-MAG",
                name: "Magdalena",
                countryId: "CO"
            },
            {
                id: "CO-MET",
                name: "Meta",
                countryId: "CO"
            },
            {
                id: "CO-NAR",
                name: "Nariño",
                countryId: "CO"
            },
            {
                id: "CO-NSA",
                name: "Norte De Santander",
                countryId: "CO"
            },
            {
                id: "CO-PUT",
                name: "Putumayo",
                countryId: "CO"
            },
            {
                id: "CO-QUI",
                name: "Quindío",
                countryId: "CO"
            },
            {
                id: "CO-RIS",
                name: "Risaralda",
                countryId: "CO"
            },
            {
                id: "CO-SAN",
                name: "Santander",
                countryId: "CO"
            },
            {
                id: "CO-SAP",
                name: "Archipiélago De San Andrés",
                countryId: "CO"
            },
            {
                id: "CO-SUC",
                name: "Sucre",
                countryId: "CO"
            },
            {
                id: "CO-TOL",
                name: "Tolima",
                countryId: "CO"
            },
            {
                id: "CO-VAC",
                name: "Valle Del Cauca",
                countryId: "CO"
            },
            {
                id: "CO-VAU",
                name: "Vaupés",
                countryId: "CO"
            },
            {
                id: "CO-VID",
                name: "Vichada",
                countryId: "CO"
            },
            {
                id: "CR-1",
                name: "San José",
                countryId: "CR"
            },
            {
                id: "CR-2",
                name: "Alajuela",
                countryId: "CR"
            },
            {
                id: "CR-3",
                name: "Cartago",
                countryId: "CR"
            },
            {
                id: "CR-4",
                name: "Heredia",
                countryId: "CR"
            },
            {
                id: "CR-5",
                name: "Guanacaste",
                countryId: "CR"
            },
            {
                id: "CR-6",
                name: "Puntarenas",
                countryId: "CR"
            },
            {
                id: "CR-7",
                name: "Limón",
                countryId: "CR"
            },
            {
                id: "CU-01",
                name: "Pinar Del Río",
                countryId: "CU"
            },
            {
                id: "CU-03",
                name: "La Habana",
                countryId: "CU"
            },
            {
                id: "CU-04",
                name: "Matanzas",
                countryId: "CU"
            },
            {
                id: "CU-05",
                name: "Villa Clara",
                countryId: "CU"
            },
            {
                id: "CU-06",
                name: "Cienfuegos",
                countryId: "CU"
            },
            {
                id: "CU-07",
                name: "Sancti Spíritus",
                countryId: "CU"
            },
            {
                id: "CU-08",
                name: "Ciego De Ávila",
                countryId: "CU"
            },
            {
                id: "CU-09",
                name: "Camagüey",
                countryId: "CU"
            },
            {
                id: "CU-10",
                name: "Las Tunas",
                countryId: "CU"
            },
            {
                id: "CU-11",
                name: "Holguín",
                countryId: "CU"
            },
            {
                id: "CU-12",
                name: "Granma",
                countryId: "CU"
            },
            {
                id: "CU-13",
                name: "Santiago De Cuba",
                countryId: "CU"
            },
            {
                id: "CU-14",
                name: "Guantánamo",
                countryId: "CU"
            },
            {
                id: "CU-15",
                name: "Artemisa",
                countryId: "CU"
            },
            {
                id: "CU-16",
                name: "Mayabeque",
                countryId: "CU"
            },
            {
                id: "CU-99",
                name: "Isla De La Juventud",
                countryId: "CU"
            },
            {
                id: "CV-BR",
                name: "Brava",
                countryId: "CV"
            },
            {
                id: "CV-BV",
                name: "Boa Vista",
                countryId: "CV"
            },
            {
                id: "CV-CA",
                name: "Santa Catarina",
                countryId: "CV"
            },
            {
                id: "CV-CR",
                name: "Santa Cruz",
                countryId: "CV"
            },
            {
                id: "CV-CS",
                name: "Calheta De San Miguel",
                countryId: "CV"
            },
            {
                id: "CV-MA",
                name: "Maio",
                countryId: "CV"
            },
            {
                id: "CV-MO",
                name: "Mosteiros",
                countryId: "CV"
            },
            {
                id: "CV-PA",
                name: "Paúl",
                countryId: "CV"
            },
            {
                id: "CV-PN",
                name: "Porto Novo",
                countryId: "CV"
            },
            {
                id: "CV-PR",
                name: "Praia",
                countryId: "CV"
            },
            {
                id: "CV-RB",
                name: "Ribeira Brava",
                countryId: "CV"
            },
            {
                id: "CV-RG",
                name: "Ribeira Grande",
                countryId: "CV"
            },
            {
                id: "CV-SD",
                name: "Sao Domingos",
                countryId: "CV"
            },
            {
                id: "CV-SF",
                name: "São Filipe",
                countryId: "CV"
            },
            {
                id: "CV-SL",
                name: "Sal",
                countryId: "CV"
            },
            {
                id: "CV-SN",
                name: "São Nicolau",
                countryId: "CV"
            },
            {
                id: "CV-SV",
                name: "São Vicente",
                countryId: "CV"
            },
            {
                id: "CV-TA",
                name: "Tarrafal",
                countryId: "CV"
            },
            {
                id: "CV-TS",
                name: "Tarrafal De São Nicolau",
                countryId: "CV"
            },
            {
                id: "CW-CW",
                name: "Curacao",
                countryId: "CW"
            },
            {
                id: "CX-CX",
                name: "Isla De Navidad",
                countryId: "CX"
            },
            {
                id: "CY-01",
                name: "Nicosia",
                countryId: "CY"
            },
            {
                id: "CY-02",
                name: "Limassol",
                countryId: "CY"
            },
            {
                id: "CY-03",
                name: "Larnaca",
                countryId: "CY"
            },
            {
                id: "CY-04",
                name: "Famagusta",
                countryId: "CY"
            },
            {
                id: "CY-05",
                name: "Paphos",
                countryId: "CY"
            },
            {
                id: "CY-06",
                name: "Keryveia",
                countryId: "CY"
            },
            {
                id: "CZ-10",
                name: "Praga",
                countryId: "CZ"
            },
            {
                id: "CZ-20",
                name: "Región Centro",
                countryId: "CZ"
            },
            {
                id: "CZ-31",
                name: "Región De Bohemia Del Sur",
                countryId: "CZ"
            },
            {
                id: "CZ-32",
                name: "Región De Pilsen",
                countryId: "CZ"
            },
            {
                id: "CZ-41",
                name: "Carlsbad",
                countryId: "CZ"
            },
            {
                id: "CZ-42",
                name: "Usti Región",
                countryId: "CZ"
            },
            {
                id: "CZ-51",
                name: "Región De Liberec",
                countryId: "CZ"
            },
            {
                id: "CZ-52",
                name: "Región De Hradec Králové",
                countryId: "CZ"
            },
            {
                id: "CZ-53",
                name: "Región De Pardubice",
                countryId: "CZ"
            },
            {
                id: "CZ-63",
                name: "Vysocina Región",
                countryId: "CZ"
            },
            {
                id: "CZ-64",
                name: "Región Sur De Moravia",
                countryId: "CZ"
            },
            {
                id: "CZ-71",
                name: "Región De Olomouc",
                countryId: "CZ"
            },
            {
                id: "CZ-72",
                name: "Región De Zlin",
                countryId: "CZ"
            },
            {
                id: "CZ-80",
                name: "Moravia-Silesia",
                countryId: "CZ"
            },
            {
                id: "DE-BB",
                name: "Brandenburgo",
                countryId: "DE"
            },
            {
                id: "DE-BE",
                name: "Berlín",
                countryId: "DE"
            },
            {
                id: "DE-BW",
                name: "Baden-Wurttemberg",
                countryId: "DE"
            },
            {
                id: "DE-BY",
                name: "Baviera",
                countryId: "DE"
            },
            {
                id: "DE-HB",
                name: "Bremen",
                countryId: "DE"
            },
            {
                id: "DE-HE",
                name: "Hesse",
                countryId: "DE"
            },
            {
                id: "DE-HH",
                name: "Hamburgo",
                countryId: "DE"
            },
            {
                id: "DE-MV",
                name: "Mecklenburg-Vorpommern",
                countryId: "DE"
            },
            {
                id: "DE-NI",
                name: "Baja Sajonia",
                countryId: "DE"
            },
            {
                id: "DE-NW",
                name: "Renania Del Norte-Westfalia",
                countryId: "DE"
            },
            {
                id: "DE-RP",
                name: "Rheinland-Pfalz",
                countryId: "DE"
            },
            {
                id: "DE-SH",
                name: "Schleswig-Holstein",
                countryId: "DE"
            },
            {
                id: "DE-SL",
                name: "Sarre",
                countryId: "DE"
            },
            {
                id: "DE-SN",
                name: "Sajonia",
                countryId: "DE"
            },
            {
                id: "DE-ST",
                name: "Sajonia-Anhalt",
                countryId: "DE"
            },
            {
                id: "DE-TH",
                name: "Turingia",
                countryId: "DE"
            },
            {
                id: "DJ-AR",
                name: "Arta",
                countryId: "DJ"
            },
            {
                id: "DJ-AS",
                name: "Ali Sabieh",
                countryId: "DJ"
            },
            {
                id: "DJ-DI",
                name: "Dikhil",
                countryId: "DJ"
            },
            {
                id: "DJ-OB",
                name: "Obock",
                countryId: "DJ"
            },
            {
                id: "DJ-TA",
                name: "Tadjourah",
                countryId: "DJ"
            },
            {
                id: "DK-81",
                name: "Jutlandia Del Norte",
                countryId: "DK"
            },
            {
                id: "DK-82",
                name: "Midtjylland",
                countryId: "DK"
            },
            {
                id: "DK-83",
                name: "Syddanmark",
                countryId: "DK"
            },
            {
                id: "DK-84",
                name: "Copenhague",
                countryId: "DK"
            },
            {
                id: "DK-85",
                name: "Zelandia",
                countryId: "DK"
            },
            {
                id: "DK-FO-01",
                name: "Islas Del Norte",
                countryId: "DK"
            },
            {
                id: "DK-FO-02",
                name: "Sando",
                countryId: "DK"
            },
            {
                id: "DK-FO-03",
                name: "Streamsey",
                countryId: "DK"
            },
            {
                id: "DK-FO-04",
                name: "Sudero",
                countryId: "DK"
            },
            {
                id: "DK-FO-05",
                name: "Vagar",
                countryId: "DK"
            },
            {
                id: "DK-FO-06",
                name: "Østerø",
                countryId: "DK"
            },
            {
                id: "DK-GL-KU",
                name: "Kujalleq",
                countryId: "DK"
            },
            {
                id: "DK-GL-QA",
                name: "Qaasuitsup",
                countryId: "DK"
            },
            {
                id: "DK-GL-QE",
                name: "Qeqqata",
                countryId: "DK"
            },
            {
                id: "DK-GL-SM",
                name: "Sermersooq",
                countryId: "DK"
            },
            {
                id: "DM-02",
                name: "Parroquia De Saint Andrew",
                countryId: "DM"
            },
            {
                id: "DM-03",
                name: "Parroquia De Saint David",
                countryId: "DM"
            },
            {
                id: "DM-04",
                name: "Parroquia De Saint George",
                countryId: "DM"
            },
            {
                id: "DM-05",
                name: "Parroquia De Saint John",
                countryId: "DM"
            },
            {
                id: "DM-06",
                name: "Parroquia San José",
                countryId: "DM"
            },
            {
                id: "DM-07",
                name: "Parroquia San Lucas",
                countryId: "DM"
            },
            {
                id: "DM-08",
                name: "Parroquia San Marcos",
                countryId: "DM"
            },
            {
                id: "DM-09",
                name: "Parroquia San Patricia",
                countryId: "DM"
            },
            {
                id: "DM-10",
                name: "Parroquia De Saint Paul",
                countryId: "DM"
            },
            {
                id: "DM-11",
                name: "Parroquia San Pedro",
                countryId: "DM"
            },
            {
                id: "DO-01",
                name: "Distrito Nacional",
                countryId: "DO"
            },
            {
                id: "DO-02",
                name: "Cibao Central",
                countryId: "DO"
            },
            {
                id: "DO-04",
                name: "Norcentral",
                countryId: "DO"
            },
            {
                id: "DO-34",
                name: "Nordeste",
                countryId: "DO"
            },
            {
                id: "DO-35",
                name: "Norte",
                countryId: "DO"
            },
            {
                id: "DO-37",
                name: "Del Valle",
                countryId: "DO"
            },
            {
                id: "DO-38",
                name: "Enriquillo",
                countryId: "DO"
            },
            {
                id: "DO-42",
                name: "Valdesia",
                countryId: "DO"
            },
            {
                id: "DZ-01",
                name: "Adrar",
                countryId: "DZ"
            },
            {
                id: "DZ-02",
                name: "Chlef",
                countryId: "DZ"
            },
            {
                id: "DZ-03",
                name: "Laghouat",
                countryId: "DZ"
            },
            {
                id: "DZ-04",
                name: "Oum El Bouaghi",
                countryId: "DZ"
            },
            {
                id: "DZ-05",
                name: "Batna",
                countryId: "DZ"
            },
            {
                id: "DZ-06",
                name: "Bejaia",
                countryId: "DZ"
            },
            {
                id: "DZ-07",
                name: "Biskra",
                countryId: "DZ"
            },
            {
                id: "DZ-08",
                name: "Bashar",
                countryId: "DZ"
            },
            {
                id: "DZ-09",
                name: "Blida",
                countryId: "DZ"
            },
            {
                id: "DZ-10",
                name: "Bouira",
                countryId: "DZ"
            },
            {
                id: "DZ-11",
                name: "Tamanrasset",
                countryId: "DZ"
            },
            {
                id: "DZ-12",
                name: "Tebessa",
                countryId: "DZ"
            },
            {
                id: "DZ-13",
                name: "Tlemcen",
                countryId: "DZ"
            },
            {
                id: "DZ-14",
                name: "Tiaret",
                countryId: "DZ"
            },
            {
                id: "DZ-15",
                name: "Tizi Ouzou",
                countryId: "DZ"
            },
            {
                id: "DZ-16",
                name: "Argelia",
                countryId: "DZ"
            },
            {
                id: "DZ-17",
                name: "Djelfa",
                countryId: "DZ"
            },
            {
                id: "DZ-18",
                name: "Jijel",
                countryId: "DZ"
            },
            {
                id: "DZ-19",
                name: "Sétif",
                countryId: "DZ"
            },
            {
                id: "DZ-20",
                name: "Saïda",
                countryId: "DZ"
            },
            {
                id: "DZ-21",
                name: "Skikda",
                countryId: "DZ"
            },
            {
                id: "DZ-22",
                name: "Sidi Bel Abbes",
                countryId: "DZ"
            },
            {
                id: "DZ-23",
                name: "Annaba",
                countryId: "DZ"
            },
            {
                id: "DZ-24",
                name: "Guelma",
                countryId: "DZ"
            },
            {
                id: "DZ-25",
                name: "Constantino",
                countryId: "DZ"
            },
            {
                id: "DZ-26",
                name: "Medea",
                countryId: "DZ"
            },
            {
                id: "DZ-27",
                name: "Mostaganem",
                countryId: "DZ"
            },
            {
                id: "DZ-28",
                name: "M'Sila",
                countryId: "DZ"
            },
            {
                id: "DZ-29",
                name: "Mascara",
                countryId: "DZ"
            },
            {
                id: "DZ-30",
                name: "Ouargla",
                countryId: "DZ"
            },
            {
                id: "DZ-31",
                name: "Oran",
                countryId: "DZ"
            },
            {
                id: "DZ-32",
                name: "El Bayadh",
                countryId: "DZ"
            },
            {
                id: "DZ-33",
                name: "Elezi",
                countryId: "DZ"
            },
            {
                id: "DZ-34",
                name: "Bordj Bou Arréridj",
                countryId: "DZ"
            },
            {
                id: "DZ-35",
                name: "Boumerdes",
                countryId: "DZ"
            },
            {
                id: "DZ-36",
                name: "Taref",
                countryId: "DZ"
            },
            {
                id: "DZ-37",
                name: "Tinduf",
                countryId: "DZ"
            },
            {
                id: "DZ-38",
                name: "Tsmcilt",
                countryId: "DZ"
            },
            {
                id: "DZ-39",
                name: "El Oued",
                countryId: "DZ"
            },
            {
                id: "DZ-40",
                name: "Khenchela",
                countryId: "DZ"
            },
            {
                id: "DZ-41",
                name: "Souk Ahras",
                countryId: "DZ"
            },
            {
                id: "DZ-42",
                name: "Tipaza",
                countryId: "DZ"
            },
            {
                id: "DZ-43",
                name: "Mila",
                countryId: "DZ"
            },
            {
                id: "DZ-44",
                name: "Ain Defla",
                countryId: "DZ"
            },
            {
                id: "DZ-45",
                name: "Naama",
                countryId: "DZ"
            },
            {
                id: "DZ-46",
                name: "Ain Temouchent",
                countryId: "DZ"
            },
            {
                id: "DZ-47",
                name: "Ghardaia",
                countryId: "DZ"
            },
            {
                id: "DZ-48",
                name: "Relizane",
                countryId: "DZ"
            },
            {
                id: "EC-A",
                name: "Azuay",
                countryId: "EC"
            },
            {
                id: "EC-B",
                name: "Bolívar",
                countryId: "EC"
            },
            {
                id: "EC-C",
                name: "Carchi",
                countryId: "EC"
            },
            {
                id: "EC-D",
                name: "Orellana",
                countryId: "EC"
            },
            {
                id: "EC-E",
                name: "Esmeraldas",
                countryId: "EC"
            },
            {
                id: "EC-F",
                name: "Cañar",
                countryId: "EC"
            },
            {
                id: "EC-G",
                name: "Guayas",
                countryId: "EC"
            },
            {
                id: "EC-H",
                name: "Chimborazo",
                countryId: "EC"
            },
            {
                id: "EC-I",
                name: "Imbabura",
                countryId: "EC"
            },
            {
                id: "EC-L",
                name: "Loja",
                countryId: "EC"
            },
            {
                id: "EC-M",
                name: "Manabí",
                countryId: "EC"
            },
            {
                id: "EC-N",
                name: "Napo",
                countryId: "EC"
            },
            {
                id: "EC-O",
                name: "El Oro",
                countryId: "EC"
            },
            {
                id: "EC-P",
                name: "Pichincha",
                countryId: "EC"
            },
            {
                id: "EC-R",
                name: "Los Ríos",
                countryId: "EC"
            },
            {
                id: "EC-S",
                name: "Morona-Santiago",
                countryId: "EC"
            },
            {
                id: "EC-SD",
                name: "Santo Domingo De Los Tsáchilas",
                countryId: "EC"
            },
            {
                id: "EC-SE",
                name: "Santa Elena",
                countryId: "EC"
            },
            {
                id: "EC-T",
                name: "Tungurahua",
                countryId: "EC"
            },
            {
                id: "EC-U",
                name: "Sucumbíos",
                countryId: "EC"
            },
            {
                id: "EC-W",
                name: "Galápagos",
                countryId: "EC"
            },
            {
                id: "EC-X",
                name: "Cotopaxi",
                countryId: "EC"
            },
            {
                id: "EC-Y",
                name: "Pastaza",
                countryId: "EC"
            },
            {
                id: "EC-Z",
                name: "Zamora-Chinchipe",
                countryId: "EC"
            },
            {
                id: "EE-37",
                name: "Harju",
                countryId: "EE"
            },
            {
                id: "EE-39",
                name: "Hiiumaa",
                countryId: "EE"
            },
            {
                id: "EE-44",
                name: "Condado De Ida-Viru",
                countryId: "EE"
            },
            {
                id: "EE-49",
                name: "Jõgevamaa",
                countryId: "EE"
            },
            {
                id: "EE-51",
                name: "Järvamaa",
                countryId: "EE"
            },
            {
                id: "EE-57",
                name: "Läänemaa",
                countryId: "EE"
            },
            {
                id: "EE-59",
                name: "Condado De West-Viru",
                countryId: "EE"
            },
            {
                id: "EE-65",
                name: "Põlvamaa",
                countryId: "EE"
            },
            {
                id: "EE-67",
                name: "Pärnumaa",
                countryId: "EE"
            },
            {
                id: "EE-70",
                name: "Raplamaa",
                countryId: "EE"
            },
            {
                id: "EE-74",
                name: "Saaremaa",
                countryId: "EE"
            },
            {
                id: "EE-78",
                name: "Tartumaa",
                countryId: "EE"
            },
            {
                id: "EE-82",
                name: "Valga",
                countryId: "EE"
            },
            {
                id: "EE-84",
                name: "Viljandi",
                countryId: "EE"
            },
            {
                id: "EE-86",
                name: "Võrumaa",
                countryId: "EE"
            },
            {
                id: "EG-ALX",
                name: "Alejandría",
                countryId: "EG"
            },
            {
                id: "EG-ASN",
                name: "Asuán",
                countryId: "EG"
            },
            {
                id: "EG-AST",
                name: "Assiut",
                countryId: "EG"
            },
            {
                id: "EG-BA",
                name: "Mar Rojo",
                countryId: "EG"
            },
            {
                id: "EG-BH",
                name: "Al BuḩAyrah",
                countryId: "EG"
            },
            {
                id: "EG-BNS",
                name: "Beni Suef",
                countryId: "EG"
            },
            {
                id: "EG-C",
                name: "El Cairo",
                countryId: "EG"
            },
            {
                id: "EG-DK",
                name: "Dakahlia",
                countryId: "EG"
            },
            {
                id: "EG-DT",
                name: "Damietta",
                countryId: "EG"
            },
            {
                id: "EG-FYM",
                name: "Fayoum",
                countryId: "EG"
            },
            {
                id: "EG-GH",
                name: "Occidental",
                countryId: "EG"
            },
            {
                id: "EG-GZ",
                name: "Giza",
                countryId: "EG"
            },
            {
                id: "EG-IS",
                name: "Ismailia",
                countryId: "EG"
            },
            {
                id: "EG-JS",
                name: "Sinaí Del Sur",
                countryId: "EG"
            },
            {
                id: "EG-KB",
                name: "Qaliubiya",
                countryId: "EG"
            },
            {
                id: "EG-KFS",
                name: "Kafr El Sheikh",
                countryId: "EG"
            },
            {
                id: "EG-KN",
                name: "Qena",
                countryId: "EG"
            },
            {
                id: "EG-LX",
                name: "Luxor",
                countryId: "EG"
            },
            {
                id: "EG-MN",
                name: "Minya",
                countryId: "EG"
            },
            {
                id: "EG-MNF",
                name: "Monoufia",
                countryId: "EG"
            },
            {
                id: "EG-MT",
                name: "Matrouh",
                countryId: "EG"
            },
            {
                id: "EG-PTS",
                name: "Port Said",
                countryId: "EG"
            },
            {
                id: "EG-SHG",
                name: "Sohag",
                countryId: "EG"
            },
            {
                id: "EG-SHR",
                name: "Oriente",
                countryId: "EG"
            },
            {
                id: "EG-SIN",
                name: "Sinaí Del Norte",
                countryId: "EG"
            },
            {
                id: "EG-SUZ",
                name: "Suez",
                countryId: "EG"
            },
            {
                id: "EG-WAD",
                name: "Valle Nuevo",
                countryId: "EG"
            },
            {
                id: "EH-AOU",
                name: "Aousserd",
                countryId: "EH"
            },
            {
                id: "EH-BOD",
                name: "Bojador",
                countryId: "EH"
            },
            {
                id: "EH-ESM",
                name: "Es Smara",
                countryId: "EH"
            },
            {
                id: "EH-LAA",
                name: "El Aaiún",
                countryId: "EH"
            },
            {
                id: "EH-OUD",
                name: "Oued Ed Dahab",
                countryId: "EH"
            },
            {
                id: "ER-AN",
                name: "Anspa Región",
                countryId: "ER"
            },
            {
                id: "ER-DK",
                name: "Zona Sur Del Mar Rojo",
                countryId: "ER"
            },
            {
                id: "ER-DU",
                name: "Región Sur",
                countryId: "ER"
            },
            {
                id: "ER-GB",
                name: "La Región De Gash Barka",
                countryId: "ER"
            },
            {
                id: "ER-MA",
                name: "Región Centro",
                countryId: "ER"
            },
            {
                id: "ER-SK",
                name: "Zona Del Mar Rojo Al Norte",
                countryId: "ER"
            },
            {
                id: "ES-AN",
                name: "Almería",
                countryId: "ES"
            },
            {
                id: "ES-AV",
                name: "Ávila",
                countryId: "ES"
            },
            {
                id: "ES-B",
                name: "Barcelona",
                countryId: "ES"
            },
            {
                id: "ES-BA",
                name: "Badajoz",
                countryId: "ES"
            },
            {
                id: "ES-BI",
                name: "Bizkaia",
                countryId: "ES"
            },
            {
                id: "ES-BU",
                name: "Burgos",
                countryId: "ES"
            },
            {
                id: "ES-C",
                name: "A Coruña",
                countryId: "ES"
            },
            {
                id: "ES-CA",
                name: "Cádiz",
                countryId: "ES"
            },
            {
                id: "ES-CC",
                name: "Cáceres",
                countryId: "ES"
            },
            {
                id: "ES-CM",
                name: "Albacete",
                countryId: "ES"
            },
            {
                id: "ES-CO",
                name: "Córdoba",
                countryId: "ES"
            },
            {
                id: "ES-CR",
                name: "Ciudad Real",
                countryId: "ES"
            },
            {
                id: "ES-CS",
                name: "Castellón",
                countryId: "ES"
            },
            {
                id: "ES-CU",
                name: "Cuenca",
                countryId: "ES"
            },
            {
                id: "ES-GC",
                name: "Las Palmas",
                countryId: "ES"
            },
            {
                id: "ES-GI",
                name: "Girona",
                countryId: "ES"
            },
            {
                id: "ES-GR",
                name: "Granada",
                countryId: "ES"
            },
            {
                id: "ES-GU",
                name: "Guadalajara",
                countryId: "ES"
            },
            {
                id: "ES-H",
                name: "Huelva",
                countryId: "ES"
            },
            {
                id: "ES-HU",
                name: "Huesca",
                countryId: "ES"
            },
            {
                id: "ES-J",
                name: "Jaén",
                countryId: "ES"
            },
            {
                id: "ES-L",
                name: "Lleida",
                countryId: "ES"
            },
            {
                id: "ES-LE",
                name: "León",
                countryId: "ES"
            },
            {
                id: "ES-LO",
                name: "La Rioja",
                countryId: "ES"
            },
            {
                id: "ES-LU",
                name: "Lugo",
                countryId: "ES"
            },
            {
                id: "ES-M",
                name: "Madrid",
                countryId: "ES"
            },
            {
                id: "ES-MA",
                name: "Málaga",
                countryId: "ES"
            },
            {
                id: "ES-ML",
                name: "Melilla",
                countryId: "ES"
            },
            {
                id: "ES-MU",
                name: "Murcia",
                countryId: "ES"
            },
            {
                id: "ES-NA",
                name: "Navarre",
                countryId: "ES"
            },
            {
                id: "ES-O",
                name: "Asturias",
                countryId: "ES"
            },
            {
                id: "ES-OR",
                name: "Ourense",
                countryId: "ES"
            },
            {
                id: "ES-P",
                name: "Palencia",
                countryId: "ES"
            },
            {
                id: "ES-PM",
                name: "Illes Balears",
                countryId: "ES"
            },
            {
                id: "ES-PO",
                name: "Pontevedra",
                countryId: "ES"
            },
            {
                id: "ES-S",
                name: "Cantabria",
                countryId: "ES"
            },
            {
                id: "ES-SA",
                name: "Salamanca",
                countryId: "ES"
            },
            {
                id: "ES-SE",
                name: "Sevilla",
                countryId: "ES"
            },
            {
                id: "ES-SG",
                name: "Segovia",
                countryId: "ES"
            },
            {
                id: "ES-SO",
                name: "Soria",
                countryId: "ES"
            },
            {
                id: "ES-SS",
                name: "Gipuzkoa",
                countryId: "ES"
            },
            {
                id: "ES-T",
                name: "Tarragona",
                countryId: "ES"
            },
            {
                id: "ES-TE",
                name: "Teruel",
                countryId: "ES"
            },
            {
                id: "ES-TF",
                name: "Santa Cruz De Tenerife",
                countryId: "ES"
            },
            {
                id: "ES-TO",
                name: "Toledo",
                countryId: "ES"
            },
            {
                id: "ES-V",
                name: "Valencia",
                countryId: "ES"
            },
            {
                id: "ES-VA",
                name: "Valladolid",
                countryId: "ES"
            },
            {
                id: "ES-VC",
                name: "Alicante",
                countryId: "ES"
            },
            {
                id: "ES-VI",
                name: "Araba/Álava",
                countryId: "ES"
            },
            {
                id: "ES-Z",
                name: "Zaragoza",
                countryId: "ES"
            },
            {
                id: "ES-ZA",
                name: "Zamora",
                countryId: "ES"
            },
            {
                id: "ET-AA",
                name: "Addis Abeba",
                countryId: "ET"
            },
            {
                id: "ET-AF",
                name: "Lejos",
                countryId: "ET"
            },
            {
                id: "ET-AM",
                name: "Amhara",
                countryId: "ET"
            },
            {
                id: "ET-BE",
                name: "Benshangul-Gumaz",
                countryId: "ET"
            },
            {
                id: "ET-DD",
                name: "Dire Dawa",
                countryId: "ET"
            },
            {
                id: "ET-GA",
                name: "Gambela",
                countryId: "ET"
            },
            {
                id: "ET-HA",
                name: "Harari",
                countryId: "ET"
            },
            {
                id: "ET-OR",
                name: "Oromía",
                countryId: "ET"
            },
            {
                id: "ET-SN",
                name: "Naciones Nacionalidades Sur Y Región De Personas",
                countryId: "ET"
            },
            {
                id: "ET-SO",
                name: "Somalí",
                countryId: "ET"
            },
            {
                id: "ET-TI",
                name: "Tigray",
                countryId: "ET"
            },
            {
                id: "FI-AL",
                name: "Åland",
                countryId: "FI"
            },
            {
                id: "FI-ES",
                name: "Finlandia Meridional",
                countryId: "FI"
            },
            {
                id: "FI-IS",
                name: "Finlandia Oriental",
                countryId: "FI"
            },
            {
                id: "FI-LL",
                name: "Laponia",
                countryId: "FI"
            },
            {
                id: "FI-LS",
                name: "Finlandia Occidental",
                countryId: "FI"
            },
            {
                id: "FI-OL",
                name: "Provincia De Oulu",
                countryId: "FI"
            },
            {
                id: "FJ-01",
                name: "Ba",
                countryId: "FJ"
            },
            {
                id: "FJ-011",
                name: "Ra",
                countryId: "FJ"
            },
            {
                id: "FJ-02",
                name: "Bua",
                countryId: "FJ"
            },
            {
                id: "FJ-03",
                name: "Cakaudrove",
                countryId: "FJ"
            },
            {
                id: "FJ-04",
                name: "Kadavu",
                countryId: "FJ"
            },
            {
                id: "FJ-05",
                name: "Lau",
                countryId: "FJ"
            },
            {
                id: "FJ-06",
                name: "Lomaiviti",
                countryId: "FJ"
            },
            {
                id: "FJ-07",
                name: "Macuata",
                countryId: "FJ"
            },
            {
                id: "FJ-08",
                name: "Nadroga Y Navosa",
                countryId: "FJ"
            },
            {
                id: "FJ-09",
                name: "Naitasiri",
                countryId: "FJ"
            },
            {
                id: "FJ-10",
                name: "Namosi",
                countryId: "FJ"
            },
            {
                id: "FJ-12",
                name: "Rewa",
                countryId: "FJ"
            },
            {
                id: "FJ-13",
                name: "Serua",
                countryId: "FJ"
            },
            {
                id: "FJ-14",
                name: "Tailevu",
                countryId: "FJ"
            },
            {
                id: "FJ-R",
                name: "Rotuma",
                countryId: "FJ"
            },
            {
                id: "FK-0",
                name: "Islas Malvinas",
                countryId: "FK"
            },
            {
                id: "FM-KSA",
                name: "Kosrae",
                countryId: "FM"
            },
            {
                id: "FM-PNI",
                name: "Pohnpei",
                countryId: "FM"
            },
            {
                id: "FM-TRK",
                name: "Chuuk",
                countryId: "FM"
            },
            {
                id: "FM-YAP",
                name: "Ladrar",
                countryId: "FM"
            },
            {
                id: "FO-0",
                name: "Bordoy",
                countryId: "FO"
            },
            {
                id: "FO-1",
                name: "Eysturoy",
                countryId: "FO"
            },
            {
                id: "FO-2",
                name: "Mykines",
                countryId: "FO"
            },
            {
                id: "FO-3",
                name: "Sandoy",
                countryId: "FO"
            },
            {
                id: "FO-4",
                name: "Skúvoy",
                countryId: "FO"
            },
            {
                id: "FO-5",
                name: "Streymoy",
                countryId: "FO"
            },
            {
                id: "FO-6",
                name: "Suduroy",
                countryId: "FO"
            },
            {
                id: "FO-7",
                name: "Tvoroyri",
                countryId: "FO"
            },
            {
                id: "FO-8",
                name: "Vagar",
                countryId: "FO"
            },
            {
                id: "FR-ARA",
                name: "Auvernia Ródano-Alpes",
                countryId: "FR"
            },
            {
                id: "FR-BFC",
                name: "Borgoña-Franco-Condado",
                countryId: "FR"
            },
            {
                id: "FR-BL",
                name: "San Bartolomé",
                countryId: "FR"
            },
            {
                id: "FR-BRE",
                name: "Bretaña",
                countryId: "FR"
            },
            {
                id: "FR-COR",
                name: "Córcega",
                countryId: "FR"
            },
            {
                id: "FR-CP",
                name: "Clipperton",
                countryId: "FR"
            },
            {
                id: "FR-CVL",
                name: "Centro-Val De Loire",
                countryId: "FR"
            },
            {
                id: "FR-GES",
                name: "Great Eastern",
                countryId: "FR"
            },
            {
                id: "FR-GF",
                name: "Guayana",
                countryId: "FR"
            },
            {
                id: "FR-GP",
                name: "Guadalupe",
                countryId: "FR"
            },
            {
                id: "FR-HDF",
                name: "Hauts-De-France",
                countryId: "FR"
            },
            {
                id: "FR-IDF",
                name: "Ile De France",
                countryId: "FR"
            },
            {
                id: "FR-MF",
                name: "San Martín",
                countryId: "FR"
            },
            {
                id: "FR-MQ",
                name: "Martinica",
                countryId: "FR"
            },
            {
                id: "FR-NAQ",
                name: "Nueva Aquitania",
                countryId: "FR"
            },
            {
                id: "FR-NC",
                name: "Novelle Caledonia",
                countryId: "FR"
            },
            {
                id: "FR-NOR",
                name: "Normandía",
                countryId: "FR"
            },
            {
                id: "FR-OCC",
                name: "Occitano",
                countryId: "FR"
            },
            {
                id: "FR-PAC",
                name: "Provenza-Alpes-Costa Azul",
                countryId: "FR"
            },
            {
                id: "FR-PDL",
                name: "País Del Loira",
                countryId: "FR"
            },
            {
                id: "FR-PF",
                name: "Polinesia",
                countryId: "FR"
            },
            {
                id: "FR-PM",
                name: "San Pedro Y Miquelón",
                countryId: "FR"
            },
            {
                id: "FR-RE",
                name: "Réunion",
                countryId: "FR"
            },
            {
                id: "FR-TF",
                name: "Territorios Franceses Del Sur",
                countryId: "FR"
            },
            {
                id: "FR-WF",
                name: "Wallis Y Futuna",
                countryId: "FR"
            },
            {
                id: "FR-YT",
                name: "Mayotte",
                countryId: "FR"
            },
            {
                id: "GA-1",
                name: "Estuario",
                countryId: "GA"
            },
            {
                id: "GA-2",
                name: "Haut-Ogooué",
                countryId: "GA"
            },
            {
                id: "GA-3",
                name: "Medio Ogooué",
                countryId: "GA"
            },
            {
                id: "GA-4",
                name: "Ngounié",
                countryId: "GA"
            },
            {
                id: "GA-5",
                name: "Nyanga",
                countryId: "GA"
            },
            {
                id: "GA-6",
                name: "Ogooué-Ivindo",
                countryId: "GA"
            },
            {
                id: "GA-7",
                name: "Ogooué-Lolo",
                countryId: "GA"
            },
            {
                id: "GA-8",
                name: "Ogooué-Maritime",
                countryId: "GA"
            },
            {
                id: "GA-9",
                name: "Woleu-Ntem",
                countryId: "GA"
            },
            {
                id: "GB-ABC",
                name: "Armagh City, Banbridge Y Craigavon",
                countryId: "GB"
            },
            {
                id: "GB-ABD",
                name: "Aberdeenshire",
                countryId: "GB"
            },
            {
                id: "GB-ABE",
                name: "Aberdeen City",
                countryId: "GB"
            },
            {
                id: "GB-AGB",
                name: "Argyll And Bute",
                countryId: "GB"
            },
            {
                id: "GB-AGY",
                name: "Isla De Anglesey",
                countryId: "GB"
            },
            {
                id: "GB-AND",
                name: "Sdra Y El Norte De Down",
                countryId: "GB"
            },
            {
                id: "GB-ANN",
                name: "Antrim Y Newtownabbey",
                countryId: "GB"
            },
            {
                id: "GB-ANS",
                name: "Angus",
                countryId: "GB"
            },
            {
                id: "GB-BAS",
                name: "Bath Y North East Somerset",
                countryId: "GB"
            },
            {
                id: "GB-BBD",
                name: "Blackburn Con Darwen",
                countryId: "GB"
            },
            {
                id: "GB-BDF",
                name: "Bedford",
                countryId: "GB"
            },
            {
                id: "GB-BDG",
                name: "Barking Y Dagenham",
                countryId: "GB"
            },
            {
                id: "GB-BEN",
                name: "Brent",
                countryId: "GB"
            },
            {
                id: "GB-BEX",
                name: "Bexley",
                countryId: "GB"
            },
            {
                id: "GB-BFS",
                name: "Belfast",
                countryId: "GB"
            },
            {
                id: "GB-BGE",
                name: "Bridgend",
                countryId: "GB"
            },
            {
                id: "GB-BGW",
                name: "Blaenau Gwent",
                countryId: "GB"
            },
            {
                id: "GB-BIR",
                name: "Birmingham",
                countryId: "GB"
            },
            {
                id: "GB-BKM",
                name: "Buckinghamshire",
                countryId: "GB"
            },
            {
                id: "GB-BMH",
                name: "Bournemouth",
                countryId: "GB"
            },
            {
                id: "GB-BNE",
                name: "Barnet",
                countryId: "GB"
            },
            {
                id: "GB-BNH",
                name: "Brighton",
                countryId: "GB"
            },
            {
                id: "GB-BNS",
                name: "Barnsley",
                countryId: "GB"
            },
            {
                id: "GB-BOL",
                name: "Bolton",
                countryId: "GB"
            },
            {
                id: "GB-BPL",
                name: "Blackpool",
                countryId: "GB"
            },
            {
                id: "GB-BRC",
                name: "Bracknell Forest",
                countryId: "GB"
            },
            {
                id: "GB-BRD",
                name: "Bradford",
                countryId: "GB"
            },
            {
                id: "GB-BRY",
                name: "Bromley",
                countryId: "GB"
            },
            {
                id: "GB-BST",
                name: "Bristol",
                countryId: "GB"
            },
            {
                id: "GB-BUR",
                name: "Enterrar",
                countryId: "GB"
            },
            {
                id: "GB-CAM",
                name: "Cambridgeshire",
                countryId: "GB"
            },
            {
                id: "GB-CAY",
                name: "Caerphilly",
                countryId: "GB"
            },
            {
                id: "GB-CBF",
                name: "Central Bedfordshire",
                countryId: "GB"
            },
            {
                id: "GB-CCG",
                name: "Costa De Causeway Y Cañadas",
                countryId: "GB"
            },
            {
                id: "GB-CGN",
                name: "Ceredigion",
                countryId: "GB"
            },
            {
                id: "GB-CHE",
                name: "Cheshire East",
                countryId: "GB"
            },
            {
                id: "GB-CHW",
                name: "Cheshire West Y Chester",
                countryId: "GB"
            },
            {
                id: "GB-CLD",
                name: "Calderdale",
                countryId: "GB"
            },
            {
                id: "GB-CLK",
                name: "Clackmannanshire",
                countryId: "GB"
            },
            {
                id: "GB-CMA",
                name: "Cumbria",
                countryId: "GB"
            },
            {
                id: "GB-CMD",
                name: "Camden",
                countryId: "GB"
            },
            {
                id: "GB-CMN",
                name: "Carmarthenshire",
                countryId: "GB"
            },
            {
                id: "GB-CON",
                name: "Cornualles",
                countryId: "GB"
            },
            {
                id: "GB-COV",
                name: "Coventry",
                countryId: "GB"
            },
            {
                id: "GB-CRF",
                name: "Cardiff",
                countryId: "GB"
            },
            {
                id: "GB-CRY",
                name: "Croydon",
                countryId: "GB"
            },
            {
                id: "GB-CWY",
                name: "Conwy",
                countryId: "GB"
            },
            {
                id: "GB-DAL",
                name: "Darlington",
                countryId: "GB"
            },
            {
                id: "GB-DBY",
                name: "Derbyshire",
                countryId: "GB"
            },
            {
                id: "GB-DEN",
                name: "Denbighshire",
                countryId: "GB"
            },
            {
                id: "GB-DER",
                name: "Derby",
                countryId: "GB"
            },
            {
                id: "GB-DEV",
                name: "Devon",
                countryId: "GB"
            },
            {
                id: "GB-DGY",
                name: "Dumfries And Galloway",
                countryId: "GB"
            },
            {
                id: "GB-DNC",
                name: "Doncaster",
                countryId: "GB"
            },
            {
                id: "GB-DND",
                name: "Dundee City",
                countryId: "GB"
            },
            {
                id: "GB-DOR",
                name: "Dorset",
                countryId: "GB"
            },
            {
                id: "GB-DRS",
                name: "Derry Y Strabane",
                countryId: "GB"
            },
            {
                id: "GB-DUD",
                name: "Dudley",
                countryId: "GB"
            },
            {
                id: "GB-DUR",
                name: "Condado De Durham",
                countryId: "GB"
            },
            {
                id: "GB-EAL",
                name: "Ealing",
                countryId: "GB"
            },
            {
                id: "GB-EAY",
                name: "East Ayrshire",
                countryId: "GB"
            },
            {
                id: "GB-EDH",
                name: "Edimburgo",
                countryId: "GB"
            },
            {
                id: "GB-EDU",
                name: "East Dunbartonshire",
                countryId: "GB"
            },
            {
                id: "GB-ELN",
                name: "East Lothian",
                countryId: "GB"
            },
            {
                id: "GB-ELS",
                name: "Eilean Siar",
                countryId: "GB"
            },
            {
                id: "GB-ENF",
                name: "Enfield",
                countryId: "GB"
            },
            {
                id: "GB-ERW",
                name: "East Renfrewshire",
                countryId: "GB"
            },
            {
                id: "GB-ERY",
                name: "Yorkshire Del Este",
                countryId: "GB"
            },
            {
                id: "GB-ESS",
                name: "Essex",
                countryId: "GB"
            },
            {
                id: "GB-ESX",
                name: "East Sussex",
                countryId: "GB"
            },
            {
                id: "GB-FAL",
                name: "Falkirk",
                countryId: "GB"
            },
            {
                id: "GB-FIF",
                name: "Pífano",
                countryId: "GB"
            },
            {
                id: "GB-FLN",
                name: "Flintshire",
                countryId: "GB"
            },
            {
                id: "GB-FMO",
                name: "Fermanagh Y Omagh",
                countryId: "GB"
            },
            {
                id: "GB-GAT",
                name: "Gateshead",
                countryId: "GB"
            },
            {
                id: "GB-GLG",
                name: "Glasgow City",
                countryId: "GB"
            },
            {
                id: "GB-GLS",
                name: "Gloucestershire",
                countryId: "GB"
            },
            {
                id: "GB-GRE",
                name: "Greenwich",
                countryId: "GB"
            },
            {
                id: "GB-GWN",
                name: "Gwynedd",
                countryId: "GB"
            },
            {
                id: "GB-HAL",
                name: "Halton",
                countryId: "GB"
            },
            {
                id: "GB-HAM",
                name: "Hampshire",
                countryId: "GB"
            },
            {
                id: "GB-HAV",
                name: "Havering",
                countryId: "GB"
            },
            {
                id: "GB-HCK",
                name: "Máquina De Alquiler",
                countryId: "GB"
            },
            {
                id: "GB-HEF",
                name: "Herefordshire",
                countryId: "GB"
            },
            {
                id: "GB-HIL",
                name: "Hillingdon",
                countryId: "GB"
            },
            {
                id: "GB-HLD",
                name: "Tierras Altas",
                countryId: "GB"
            },
            {
                id: "GB-HMF",
                name: "Hammersmith Y Fulham",
                countryId: "GB"
            },
            {
                id: "GB-HNS",
                name: "Hounslow",
                countryId: "GB"
            },
            {
                id: "GB-HPL",
                name: "Hartlepool",
                countryId: "GB"
            },
            {
                id: "GB-HRT",
                name: "Hertfordshire",
                countryId: "GB"
            },
            {
                id: "GB-HRW",
                name: "Grada",
                countryId: "GB"
            },
            {
                id: "GB-HRY",
                name: "Haringey",
                countryId: "GB"
            },
            {
                id: "GB-IOS",
                name: "Islas De Scilly",
                countryId: "GB"
            },
            {
                id: "GB-IOW",
                name: "Isla De Wight",
                countryId: "GB"
            },
            {
                id: "GB-ISL",
                name: "Islington",
                countryId: "GB"
            },
            {
                id: "GB-IVC",
                name: "Inverclyde",
                countryId: "GB"
            },
            {
                id: "GB-KEC",
                name: "Kensington Y Chelsea",
                countryId: "GB"
            },
            {
                id: "GB-KEN",
                name: "Kent",
                countryId: "GB"
            },
            {
                id: "GB-KHL",
                name: "Kingston Upon Hull",
                countryId: "GB"
            },
            {
                id: "GB-KIR",
                name: "Kirklees",
                countryId: "GB"
            },
            {
                id: "GB-KTT",
                name: "Kingston Upon Thames",
                countryId: "GB"
            },
            {
                id: "GB-KWL",
                name: "Knowsley",
                countryId: "GB"
            },
            {
                id: "GB-LAN",
                name: "Lancashire",
                countryId: "GB"
            },
            {
                id: "GB-LBC",
                name: "Lisburn Y Castlereagh",
                countryId: "GB"
            },
            {
                id: "GB-LBH",
                name: "Lambeth",
                countryId: "GB"
            },
            {
                id: "GB-LCE",
                name: "Leicester",
                countryId: "GB"
            },
            {
                id: "GB-LDS",
                name: "Leeds",
                countryId: "GB"
            },
            {
                id: "GB-LEC",
                name: "Leicestershire",
                countryId: "GB"
            },
            {
                id: "GB-LEW",
                name: "Lewisham",
                countryId: "GB"
            },
            {
                id: "GB-LIN",
                name: "Lincolnshire",
                countryId: "GB"
            },
            {
                id: "GB-LIV",
                name: "Liverpool",
                countryId: "GB"
            },
            {
                id: "GB-LND",
                name: "Londres",
                countryId: "GB"
            },
            {
                id: "GB-LUT",
                name: "Luton",
                countryId: "GB"
            },
            {
                id: "GB-MAN",
                name: "Manchester",
                countryId: "GB"
            },
            {
                id: "GB-MDB",
                name: "Middlesbrough",
                countryId: "GB"
            },
            {
                id: "GB-MDW",
                name: "Medway",
                countryId: "GB"
            },
            {
                id: "GB-MEA",
                name: "Mediados Y Este De Antrim",
                countryId: "GB"
            },
            {
                id: "GB-MIK",
                name: "Milton Keynes",
                countryId: "GB"
            },
            {
                id: "GB-MLN",
                name: "Midlothian",
                countryId: "GB"
            },
            {
                id: "GB-MON",
                name: "Monmouthshire",
                countryId: "GB"
            },
            {
                id: "GB-MRT",
                name: "Merton",
                countryId: "GB"
            },
            {
                id: "GB-MRY",
                name: "Moray",
                countryId: "GB"
            },
            {
                id: "GB-MTY",
                name: "Merthyr Tydfil",
                countryId: "GB"
            },
            {
                id: "GB-MUL",
                name: "Mediados De Ulster",
                countryId: "GB"
            },
            {
                id: "GB-NAY",
                name: "North Ayrshire",
                countryId: "GB"
            },
            {
                id: "GB-NBL",
                name: "Northumberland",
                countryId: "GB"
            },
            {
                id: "GB-NEL",
                name: "North East Lincolnshire",
                countryId: "GB"
            },
            {
                id: "GB-NET",
                name: "Newcastle Upon Tyne",
                countryId: "GB"
            },
            {
                id: "GB-NFK",
                name: "Norfolk",
                countryId: "GB"
            },
            {
                id: "GB-NGM",
                name: "Nottingham",
                countryId: "GB"
            },
            {
                id: "GB-NLK",
                name: "North Lanarkshire",
                countryId: "GB"
            },
            {
                id: "GB-NLN",
                name: "North Lincolnshire",
                countryId: "GB"
            },
            {
                id: "GB-NMD",
                name: "Newry, Morne Y Abajo",
                countryId: "GB"
            },
            {
                id: "GB-NSM",
                name: "North Somerset",
                countryId: "GB"
            },
            {
                id: "GB-NTH",
                name: "Northamptonshire",
                countryId: "GB"
            },
            {
                id: "GB-NTL",
                name: "Neath Port Talbot",
                countryId: "GB"
            },
            {
                id: "GB-NTT",
                name: "Nottinghamshire",
                countryId: "GB"
            },
            {
                id: "GB-NTY",
                name: "North Tyneside",
                countryId: "GB"
            },
            {
                id: "GB-NWM",
                name: "Newham",
                countryId: "GB"
            },
            {
                id: "GB-NWP",
                name: "Newport",
                countryId: "GB"
            },
            {
                id: "GB-NYK",
                name: "Yorkshire Del Norte",
                countryId: "GB"
            },
            {
                id: "GB-OLD",
                name: "Oldham",
                countryId: "GB"
            },
            {
                id: "GB-ORK",
                name: "Las Orcadas",
                countryId: "GB"
            },
            {
                id: "GB-OXF",
                name: "Oxfordshire",
                countryId: "GB"
            },
            {
                id: "GB-PEM",
                name: "Pembrokeshire",
                countryId: "GB"
            },
            {
                id: "GB-PKN",
                name: "Perth Y Kinross",
                countryId: "GB"
            },
            {
                id: "GB-PLY",
                name: "Plymouth",
                countryId: "GB"
            },
            {
                id: "GB-POL",
                name: "Poole",
                countryId: "GB"
            },
            {
                id: "GB-POR",
                name: "Portsmouth",
                countryId: "GB"
            },
            {
                id: "GB-POW",
                name: "Powys",
                countryId: "GB"
            },
            {
                id: "GB-PTE",
                name: "Peterborough",
                countryId: "GB"
            },
            {
                id: "GB-RCC",
                name: "Redcar Y Cleveland",
                countryId: "GB"
            },
            {
                id: "GB-RCH",
                name: "Rochdale",
                countryId: "GB"
            },
            {
                id: "GB-RCT",
                name: "Rhondda, Cynon, Taff",
                countryId: "GB"
            },
            {
                id: "GB-RDB",
                name: "Redbridge",
                countryId: "GB"
            },
            {
                id: "GB-RDG",
                name: "Leyendo",
                countryId: "GB"
            },
            {
                id: "GB-RFW",
                name: "Renfrewshire",
                countryId: "GB"
            },
            {
                id: "GB-RIC",
                name: "Richmond Upon Thames",
                countryId: "GB"
            },
            {
                id: "GB-ROT",
                name: "Rotherham",
                countryId: "GB"
            },
            {
                id: "GB-RUT",
                name: "Rutland",
                countryId: "GB"
            },
            {
                id: "GB-SAW",
                name: "Sandwell",
                countryId: "GB"
            },
            {
                id: "GB-SAY",
                name: "South Ayrshire",
                countryId: "GB"
            },
            {
                id: "GB-SCB",
                name: "Borders",
                countryId: "GB"
            },
            {
                id: "GB-SFK",
                name: "Suffolk",
                countryId: "GB"
            },
            {
                id: "GB-SFT",
                name: "Sefton",
                countryId: "GB"
            },
            {
                id: "GB-SGC",
                name: "South Gloucestershire",
                countryId: "GB"
            },
            {
                id: "GB-SHF",
                name: "Sheffield",
                countryId: "GB"
            },
            {
                id: "GB-SHN",
                name: "St. Helens",
                countryId: "GB"
            },
            {
                id: "GB-SHR",
                name: "Shropshire",
                countryId: "GB"
            },
            {
                id: "GB-SKP",
                name: "Stockport",
                countryId: "GB"
            },
            {
                id: "GB-SLF",
                name: "Salford",
                countryId: "GB"
            },
            {
                id: "GB-SLG",
                name: "Mudar",
                countryId: "GB"
            },
            {
                id: "GB-SLK",
                name: "Lanarkshire Del Sur",
                countryId: "GB"
            },
            {
                id: "GB-SND",
                name: "Sunderland",
                countryId: "GB"
            },
            {
                id: "GB-SOL",
                name: "Solihull",
                countryId: "GB"
            },
            {
                id: "GB-SOM",
                name: "Voltereta",
                countryId: "GB"
            },
            {
                id: "GB-SOS",
                name: "Southend-On-Sea",
                countryId: "GB"
            },
            {
                id: "GB-SRY",
                name: "Surrey",
                countryId: "GB"
            },
            {
                id: "GB-STE",
                name: "Stoke On Trent",
                countryId: "GB"
            },
            {
                id: "GB-STG",
                name: "Stirling",
                countryId: "GB"
            },
            {
                id: "GB-STH",
                name: "Southampton",
                countryId: "GB"
            },
            {
                id: "GB-STN",
                name: "Sutton",
                countryId: "GB"
            },
            {
                id: "GB-STS",
                name: "Staffordshire",
                countryId: "GB"
            },
            {
                id: "GB-STT",
                name: "Stockton-On-Tees",
                countryId: "GB"
            },
            {
                id: "GB-STY",
                name: "South Tyneside",
                countryId: "GB"
            },
            {
                id: "GB-SWA",
                name: "Swansea",
                countryId: "GB"
            },
            {
                id: "GB-SWD",
                name: "Swindon",
                countryId: "GB"
            },
            {
                id: "GB-SWK",
                name: "Southwark",
                countryId: "GB"
            },
            {
                id: "GB-TAM",
                name: "Tameside",
                countryId: "GB"
            },
            {
                id: "GB-TFW",
                name: "Telford Y Wrekin",
                countryId: "GB"
            },
            {
                id: "GB-THR",
                name: "Thurrock",
                countryId: "GB"
            },
            {
                id: "GB-TOB",
                name: "Torbay",
                countryId: "GB"
            },
            {
                id: "GB-TOF",
                name: "B & Q",
                countryId: "GB"
            },
            {
                id: "GB-TRF",
                name: "Trafford",
                countryId: "GB"
            },
            {
                id: "GB-TWH",
                name: "Tower Hamlets",
                countryId: "GB"
            },
            {
                id: "GB-VGL",
                name: "Vale Of Glamorgan",
                countryId: "GB"
            },
            {
                id: "GB-WAR",
                name: "Warwickshire",
                countryId: "GB"
            },
            {
                id: "GB-WBK",
                name: "West Berkshire",
                countryId: "GB"
            },
            {
                id: "GB-WDU",
                name: "West Dunbartonshire",
                countryId: "GB"
            },
            {
                id: "GB-WFT",
                name: "Waltham Forest",
                countryId: "GB"
            },
            {
                id: "GB-WGN",
                name: "Wigan",
                countryId: "GB"
            },
            {
                id: "GB-WIL",
                name: "Wiltshire",
                countryId: "GB"
            },
            {
                id: "GB-WKF",
                name: "Wakefield",
                countryId: "GB"
            },
            {
                id: "GB-WLL",
                name: "Walsall",
                countryId: "GB"
            },
            {
                id: "GB-WLN",
                name: "West Lothian",
                countryId: "GB"
            },
            {
                id: "GB-WLV",
                name: "Wolverhampton",
                countryId: "GB"
            },
            {
                id: "GB-WND",
                name: "Wandsworth",
                countryId: "GB"
            },
            {
                id: "GB-WNM",
                name: "Windsor And Maidenhead",
                countryId: "GB"
            },
            {
                id: "GB-WOK",
                name: "Wokingham",
                countryId: "GB"
            },
            {
                id: "GB-WOR",
                name: "Worcestershire",
                countryId: "GB"
            },
            {
                id: "GB-WRL",
                name: "Wirral",
                countryId: "GB"
            },
            {
                id: "GB-WRT",
                name: "Warrington",
                countryId: "GB"
            },
            {
                id: "GB-WRX",
                name: "Wrexham",
                countryId: "GB"
            },
            {
                id: "GB-WSM",
                name: "Westminster",
                countryId: "GB"
            },
            {
                id: "GB-WSX",
                name: "West Sussex",
                countryId: "GB"
            },
            {
                id: "GB-YOR",
                name: "York",
                countryId: "GB"
            },
            {
                id: "GB-ZET",
                name: "Islas Shetland",
                countryId: "GB"
            },
            {
                id: "GD-01",
                name: "San Andrés",
                countryId: "GD"
            },
            {
                id: "GD-02",
                name: "Saint David",
                countryId: "GD"
            },
            {
                id: "GD-03",
                name: "San Jorge",
                countryId: "GD"
            },
            {
                id: "GD-04",
                name: "San Juan",
                countryId: "GD"
            },
            {
                id: "GD-05",
                name: "San Marcos",
                countryId: "GD"
            },
            {
                id: "GD-06",
                name: "San Patricio",
                countryId: "GD"
            },
            {
                id: "GD-10",
                name: "Islas Granadinas Del Sur",
                countryId: "GD"
            },
            {
                id: "GE-AB",
                name: "Abjasia",
                countryId: "GE"
            },
            {
                id: "GE-AJ",
                name: "Adjara",
                countryId: "GE"
            },
            {
                id: "GE-GU",
                name: "Guria",
                countryId: "GE"
            },
            {
                id: "GE-IM",
                name: "Imereti",
                countryId: "GE"
            },
            {
                id: "GE-KA",
                name: "Kajeti",
                countryId: "GE"
            },
            {
                id: "GE-KK",
                name: "Región De Kvemo Kartli",
                countryId: "GE"
            },
            {
                id: "GE-MM",
                name: "Mtskheta",
                countryId: "GE"
            },
            {
                id: "GE-RL",
                name: "Racha Y La Región Inferior",
                countryId: "GE"
            },
            {
                id: "GE-SJ",
                name: "Javajeti",
                countryId: "GE"
            },
            {
                id: "GE-SK",
                name: "Shida Kartli",
                countryId: "GE"
            },
            {
                id: "GE-SZ",
                name: "Zemo Svaneti",
                countryId: "GE"
            },
            {
                id: "GE-TB",
                name: "Tbilisi",
                countryId: "GE"
            },
            {
                id: "GF-0",
                name: "Guayana Francés",
                countryId: "GF"
            },
            {
                id: "GG-0",
                name: "Castel",
                countryId: "GG"
            },
            {
                id: "GG-1",
                name: "Forest",
                countryId: "GG"
            },
            {
                id: "GG-2",
                name: "San Andrés",
                countryId: "GG"
            },
            {
                id: "GG-3",
                name: "San Martín",
                countryId: "GG"
            },
            {
                id: "GG-4",
                name: "St. Peter Port",
                countryId: "GG"
            },
            {
                id: "GG-5",
                name: "St. Pierre Du Bois",
                countryId: "GG"
            },
            {
                id: "GG-6",
                name: "St. Sampson",
                countryId: "GG"
            },
            {
                id: "GG-7",
                name: "San Salvador",
                countryId: "GG"
            },
            {
                id: "GG-8",
                name: "Torteval",
                countryId: "GG"
            },
            {
                id: "GG-9",
                name: "Valle",
                countryId: "GG"
            },
            {
                id: "GH-0",
                name: "Ahafo",
                countryId: "GH"
            },
            {
                id: "GH-10",
                name: "Sabana",
                countryId: "GH"
            },
            {
                id: "GH-15",
                name: "North Western",
                countryId: "GH"
            },
            {
                id: "GH-2",
                name: "Bono",
                countryId: "GH"
            },
            {
                id: "GH-3",
                name: "Este Bono",
                countryId: "GH"
            },
            {
                id: "GH-8",
                name: "Noreste",
                countryId: "GH"
            },
            {
                id: "GH-9",
                name: "Oti",
                countryId: "GH"
            },
            {
                id: "GH-AA",
                name: "Greater Accra",
                countryId: "GH"
            },
            {
                id: "GH-AH",
                name: "Ashanti",
                countryId: "GH"
            },
            {
                id: "GH-CP",
                name: "Central",
                countryId: "GH"
            },
            {
                id: "GH-EP",
                name: "Oriental",
                countryId: "GH"
            },
            {
                id: "GH-NP",
                name: "Del Norte",
                countryId: "GH"
            },
            {
                id: "GH-TV",
                name: "Volta",
                countryId: "GH"
            },
            {
                id: "GH-UE",
                name: "Upper East",
                countryId: "GH"
            },
            {
                id: "GH-UW",
                name: "Upper West",
                countryId: "GH"
            },
            {
                id: "GH-WP",
                name: "Occidental",
                countryId: "GH"
            },
            {
                id: "GI-0",
                name: "Gibraltar",
                countryId: "GI"
            },
            {
                id: "GL-KU",
                name: "Municipio Kujalleq",
                countryId: "GL"
            },
            {
                id: "GL-QA",
                name: "Qaasuitsup Municipio",
                countryId: "GL"
            },
            {
                id: "GL-QE",
                name: "Qeqqata Municipio",
                countryId: "GL"
            },
            {
                id: "GL-SM",
                name: "Municipio De Sermersooq",
                countryId: "GL"
            },
            {
                id: "GM-B",
                name: "Banjul",
                countryId: "GM"
            },
            {
                id: "GM-L",
                name: "Bajo Río",
                countryId: "GM"
            },
            {
                id: "GM-M",
                name: "Central River",
                countryId: "GM"
            },
            {
                id: "GM-N",
                name: "Banco Del Norte",
                countryId: "GM"
            },
            {
                id: "GM-U",
                name: "Parte Alta Del Río",
                countryId: "GM"
            },
            {
                id: "GM-W",
                name: "Occidental",
                countryId: "GM"
            },
            {
                id: "GN-B",
                name: "Boke",
                countryId: "GN"
            },
            {
                id: "GN-C",
                name: "Conakry",
                countryId: "GN"
            },
            {
                id: "GN-D",
                name: "Kindia",
                countryId: "GN"
            },
            {
                id: "GN-F",
                name: "Faranah",
                countryId: "GN"
            },
            {
                id: "GN-K",
                name: "Kankan",
                countryId: "GN"
            },
            {
                id: "GN-L",
                name: "Labé",
                countryId: "GN"
            },
            {
                id: "GN-M",
                name: "Mamou",
                countryId: "GN"
            },
            {
                id: "GN-N",
                name: "Nzerekore",
                countryId: "GN"
            },
            {
                id: "GP-0",
                name: "Guadalupe",
                countryId: "GP"
            },
            {
                id: "GQ-AN",
                name: "Annobón",
                countryId: "GQ"
            },
            {
                id: "GQ-BN",
                name: "Bioko Norte",
                countryId: "GQ"
            },
            {
                id: "GQ-BS",
                name: "Bioko Sur",
                countryId: "GQ"
            },
            {
                id: "GQ-CS",
                name: "Centro Sur",
                countryId: "GQ"
            },
            {
                id: "GQ-KN",
                name: "Kié-Ntem",
                countryId: "GQ"
            },
            {
                id: "GQ-LI",
                name: "Litoral",
                countryId: "GQ"
            },
            {
                id: "GQ-WN",
                name: "Wele-Nzas",
                countryId: "GQ"
            },
            {
                id: "GR-69",
                name: "Monte Athos",
                countryId: "GR"
            },
            {
                id: "GR-A",
                name: "Macedonia Oriental Y Tracia",
                countryId: "GR"
            },
            {
                id: "GR-B",
                name: "Central Macedonia",
                countryId: "GR"
            },
            {
                id: "GR-C",
                name: "Macedonia Occidental",
                countryId: "GR"
            },
            {
                id: "GR-D",
                name: "Epiro",
                countryId: "GR"
            },
            {
                id: "GR-E",
                name: "Tesalia",
                countryId: "GR"
            },
            {
                id: "GR-F",
                name: "Islas Jónicas",
                countryId: "GR"
            },
            {
                id: "GR-G",
                name: "Grecia Occidental",
                countryId: "GR"
            },
            {
                id: "GR-H",
                name: "Grecia Central",
                countryId: "GR"
            },
            {
                id: "GR-I",
                name: "Ática",
                countryId: "GR"
            },
            {
                id: "GR-J",
                name: "Peloponeso",
                countryId: "GR"
            },
            {
                id: "GR-K",
                name: "Mar Del Norte",
                countryId: "GR"
            },
            {
                id: "GR-L",
                name: "Egeo Meridional",
                countryId: "GR"
            },
            {
                id: "GR-M",
                name: "Creta",
                countryId: "GR"
            },
            {
                id: "GS-0",
                name: "Isla De Los Pájaros",
                countryId: "GS"
            },
            {
                id: "GS-1",
                name: "Isla Blanco",
                countryId: "GS"
            },
            {
                id: "GS-2",
                name: "Rocas Clerke",
                countryId: "GS"
            },
            {
                id: "GS-3",
                name: "Isla Jorge",
                countryId: "GS"
            },
            {
                id: "GS-4",
                name: "Isla Saunders",
                countryId: "GS"
            },
            {
                id: "GS-5",
                name: "Georgia Del Sur",
                countryId: "GS"
            },
            {
                id: "GS-6",
                name: "Thule Del Sur",
                countryId: "GS"
            },
            {
                id: "GS-7",
                name: "Islas Traversay",
                countryId: "GS"
            },
            {
                id: "GT-AV",
                name: "Alta Verapaz",
                countryId: "GT"
            },
            {
                id: "GT-BV",
                name: "Baja Verapaz",
                countryId: "GT"
            },
            {
                id: "GT-CM",
                name: "Chimaltenango",
                countryId: "GT"
            },
            {
                id: "GT-CQ",
                name: "Chiquimula",
                countryId: "GT"
            },
            {
                id: "GT-ES",
                name: "Escuintla",
                countryId: "GT"
            },
            {
                id: "GT-GU",
                name: "Guatemala",
                countryId: "GT"
            },
            {
                id: "GT-HU",
                name: "Huehuetenango",
                countryId: "GT"
            },
            {
                id: "GT-IZ",
                name: "Izabal",
                countryId: "GT"
            },
            {
                id: "GT-JA",
                name: "Jalapa",
                countryId: "GT"
            },
            {
                id: "GT-JU",
                name: "Jutiapa",
                countryId: "GT"
            },
            {
                id: "GT-PE",
                name: "Petén",
                countryId: "GT"
            },
            {
                id: "GT-PR",
                name: "El Progreso",
                countryId: "GT"
            },
            {
                id: "GT-QC",
                name: "Quiché",
                countryId: "GT"
            },
            {
                id: "GT-QZ",
                name: "Quetzaltenango",
                countryId: "GT"
            },
            {
                id: "GT-Re",
                name: "Retalhuleu",
                countryId: "GT"
            },
            {
                id: "GT-SA",
                name: "Sacatepéquez",
                countryId: "GT"
            },
            {
                id: "GT-SM",
                name: "San Marcos",
                countryId: "GT"
            },
            {
                id: "GT-SO",
                name: "Sololá",
                countryId: "GT"
            },
            {
                id: "GT-SR",
                name: "Santa Rosa",
                countryId: "GT"
            },
            {
                id: "GT-SU",
                name: "Suchitepéquez",
                countryId: "GT"
            },
            {
                id: "GT-TO",
                name: "Totonicapán",
                countryId: "GT"
            },
            {
                id: "GT-ZA",
                name: "Zacapa",
                countryId: "GT"
            },
            {
                id: "GU-GU",
                name: "Guam",
                countryId: "GU"
            },
            {
                id: "GW-BA",
                name: "Bafatá",
                countryId: "GW"
            },
            {
                id: "GW-BL",
                name: "Bolama-Bijagós",
                countryId: "GW"
            },
            {
                id: "GW-BM",
                name: "Biombo",
                countryId: "GW"
            },
            {
                id: "GW-BS",
                name: "Bissau",
                countryId: "GW"
            },
            {
                id: "GW-CA",
                name: "Cacheu",
                countryId: "GW"
            },
            {
                id: "GW-GA",
                name: "Gabu",
                countryId: "GW"
            },
            {
                id: "GW-OI",
                name: "Oio",
                countryId: "GW"
            },
            {
                id: "GW-QU",
                name: "Quinara",
                countryId: "GW"
            },
            {
                id: "GW-TO",
                name: "Tombali",
                countryId: "GW"
            },
            {
                id: "GY-BA",
                name: "Barima-Guaima",
                countryId: "GY"
            },
            {
                id: "GY-CU",
                name: "Cuyuni-Mazaruni",
                countryId: "GY"
            },
            {
                id: "GY-DE",
                name: "Demerara-Mahaica",
                countryId: "GY"
            },
            {
                id: "GY-EB",
                name: "Berbice Oriental-Corentyne",
                countryId: "GY"
            },
            {
                id: "GY-ES",
                name: "Essequibo Islands-West Demerara",
                countryId: "GY"
            },
            {
                id: "GY-MA",
                name: "Mahaica-Berbice",
                countryId: "GY"
            },
            {
                id: "GY-PM",
                name: "Pomeroon-Supenaam",
                countryId: "GY"
            },
            {
                id: "GY-PT",
                name: "Potaro-Siparuni",
                countryId: "GY"
            },
            {
                id: "GY-UD",
                name: "Alto Demerara-Berbice",
                countryId: "GY"
            },
            {
                id: "GY-UT",
                name: "Upper Takutu-Upper Essequibo",
                countryId: "GY"
            },
            {
                id: "HK-HK",
                name: "Hong Kong",
                countryId: "HK"
            },
            {
                id: "HM-0",
                name: "Islas Heard Y Mcdonald",
                countryId: "HM"
            },
            {
                id: "HN-AT",
                name: "Atlántida",
                countryId: "HN"
            },
            {
                id: "HN-CH",
                name: "Choluteca",
                countryId: "HN"
            },
            {
                id: "HN-CL",
                name: "Colón",
                countryId: "HN"
            },
            {
                id: "HN-CM",
                name: "Comayagua",
                countryId: "HN"
            },
            {
                id: "HN-CP",
                name: "Copán",
                countryId: "HN"
            },
            {
                id: "HN-CR",
                name: "Cortés",
                countryId: "HN"
            },
            {
                id: "HN-EP",
                name: "El Paraíso",
                countryId: "HN"
            },
            {
                id: "HN-FM",
                name: "Francisco Morazan",
                countryId: "HN"
            },
            {
                id: "HN-GD",
                name: "Gracias A Dios",
                countryId: "HN"
            },
            {
                id: "HN-IB",
                name: "Islas De La Bahía",
                countryId: "HN"
            },
            {
                id: "HN-IN",
                name: "Intibucá",
                countryId: "HN"
            },
            {
                id: "HN-LE",
                name: "Lempira",
                countryId: "HN"
            },
            {
                id: "HN-LP",
                name: "La Paz",
                countryId: "HN"
            },
            {
                id: "HN-OC",
                name: "Ocotepeque",
                countryId: "HN"
            },
            {
                id: "HN-OL",
                name: "Olancho",
                countryId: "HN"
            },
            {
                id: "HN-SB",
                name: "Santa Bárbara",
                countryId: "HN"
            },
            {
                id: "HN-VA",
                name: "Valle",
                countryId: "HN"
            },
            {
                id: "HN-YO",
                name: "Yoro",
                countryId: "HN"
            },
            {
                id: "HR-01",
                name: "Condado De Zagreb",
                countryId: "HR"
            },
            {
                id: "HR-02",
                name: "Condado De Krapina-Zagorje",
                countryId: "HR"
            },
            {
                id: "HR-03",
                name: "Sisak-Moslavina",
                countryId: "HR"
            },
            {
                id: "HR-04",
                name: "Karlovac",
                countryId: "HR"
            },
            {
                id: "HR-05",
                name: "Condado Varazdin",
                countryId: "HR"
            },
            {
                id: "HR-06",
                name: "Koprivnica-Krizevci",
                countryId: "HR"
            },
            {
                id: "HR-07",
                name: "Bjelovar-Bilogora",
                countryId: "HR"
            },
            {
                id: "HR-08",
                name: "Condado De Split-Dalmacia",
                countryId: "HR"
            },
            {
                id: "HR-09",
                name: "Lika-Senj",
                countryId: "HR"
            },
            {
                id: "HR-10",
                name: "Virovitica-Podravina",
                countryId: "HR"
            },
            {
                id: "HR-11",
                name: "Pozega-Eslavonia",
                countryId: "HR"
            },
            {
                id: "HR-12",
                name: "Brod-Posavina",
                countryId: "HR"
            },
            {
                id: "HR-13",
                name: "Condado De Zadar",
                countryId: "HR"
            },
            {
                id: "HR-14",
                name: "Condado De Osijek-Baranja",
                countryId: "HR"
            },
            {
                id: "HR-15",
                name: "Condado De Sibenik",
                countryId: "HR"
            },
            {
                id: "HR-16",
                name: "Trenčiansky Kraj",
                countryId: "HR"
            },
            {
                id: "HR-17",
                name: "Condado De Split-Dalmacia",
                countryId: "HR"
            },
            {
                id: "HR-18",
                name: "Condado De Istria",
                countryId: "HR"
            },
            {
                id: "HR-19",
                name: "Condado De Dubrovnik-Neretva",
                countryId: "HR"
            },
            {
                id: "HR-20",
                name: "Međimurska Región",
                countryId: "HR"
            },
            {
                id: "HR-21",
                name: "Ciudad De Zagreb",
                countryId: "HR"
            },
            {
                id: "HT-AR",
                name: "Artibonite",
                countryId: "HT"
            },
            {
                id: "HT-CE",
                name: "Centro",
                countryId: "HT"
            },
            {
                id: "HT-GA",
                name: "Grand'Anse",
                countryId: "HT"
            },
            {
                id: "HT-ND",
                name: "Norte",
                countryId: "HT"
            },
            {
                id: "HT-NE",
                name: "Noreste",
                countryId: "HT"
            },
            {
                id: "HT-NI",
                name: "Nippes",
                countryId: "HT"
            },
            {
                id: "HT-NO",
                name: "Noroeste",
                countryId: "HT"
            },
            {
                id: "HT-OU",
                name: "Oeste",
                countryId: "HT"
            },
            {
                id: "HT-SD",
                name: "Sur",
                countryId: "HT"
            },
            {
                id: "HT-SE",
                name: "Sudeste",
                countryId: "HT"
            },
            {
                id: "HU-BA",
                name: "Baranya",
                countryId: "HU"
            },
            {
                id: "HU-BC",
                name: "Békéscsaba",
                countryId: "HU"
            },
            {
                id: "HU-BE",
                name: "Békés",
                countryId: "HU"
            },
            {
                id: "HU-BK",
                name: "Condado Kiskun",
                countryId: "HU"
            },
            {
                id: "HU-BU",
                name: "Budapest",
                countryId: "HU"
            },
            {
                id: "HU-BZ",
                name: "Borsod-Abauj-Zemplen",
                countryId: "HU"
            },
            {
                id: "HU-CS",
                name: "Csongrád",
                countryId: "HU"
            },
            {
                id: "HU-DE",
                name: "Debrecen",
                countryId: "HU"
            },
            {
                id: "HU-DU",
                name: "Dunaújváros",
                countryId: "HU"
            },
            {
                id: "HU-EG",
                name: "Eger",
                countryId: "HU"
            },
            {
                id: "HU-ER",
                name: "Érd",
                countryId: "HU"
            },
            {
                id: "HU-FE",
                name: "Fejér",
                countryId: "HU"
            },
            {
                id: "HU-GS",
                name: "Gyor-Moson-Sopron",
                countryId: "HU"
            },
            {
                id: "HU-GY",
                name: "Győr",
                countryId: "HU"
            },
            {
                id: "HU-HB",
                name: "Bihar",
                countryId: "HU"
            },
            {
                id: "HU-HE",
                name: "Heves",
                countryId: "HU"
            },
            {
                id: "HU-HV",
                name: "Hódmezővásárhely",
                countryId: "HU"
            },
            {
                id: "HU-KE",
                name: "Komárom-Esztergom",
                countryId: "HU"
            },
            {
                id: "HU-KM",
                name: "Kecskemét",
                countryId: "HU"
            },
            {
                id: "HU-KV",
                name: "Kaposvár",
                countryId: "HU"
            },
            {
                id: "HU-MI",
                name: "Miskolc",
                countryId: "HU"
            },
            {
                id: "HU-N",
                name: "Jasz-Nagykun-Szolnok",
                countryId: "HU"
            },
            {
                id: "HU-NK",
                name: "Nagykanizsa",
                countryId: "HU"
            },
            {
                id: "HU-NO",
                name: "Nógrád",
                countryId: "HU"
            },
            {
                id: "HU-NY",
                name: "Nyíregyháza",
                countryId: "HU"
            },
            {
                id: "HU-PE",
                name: "Pest",
                countryId: "HU"
            },
            {
                id: "HU-PS",
                name: "Pecs",
                countryId: "HU"
            },
            {
                id: "HU-SD",
                name: "Szeged",
                countryId: "HU"
            },
            {
                id: "HU-SF",
                name: "Székesfehérvár",
                countryId: "HU"
            },
            {
                id: "HU-SH",
                name: "Szombathely",
                countryId: "HU"
            },
            {
                id: "HU-SK",
                name: "Szolnok",
                countryId: "HU"
            },
            {
                id: "HU-SN",
                name: "Sopron",
                countryId: "HU"
            },
            {
                id: "HU-SO",
                name: "Somogy",
                countryId: "HU"
            },
            {
                id: "HU-SS",
                name: "Szekszárd",
                countryId: "HU"
            },
            {
                id: "HU-ST",
                name: "Salgótarján",
                countryId: "HU"
            },
            {
                id: "HU-SZ",
                name: "Szabolcs-À-Bereg",
                countryId: "HU"
            },
            {
                id: "HU-TB",
                name: "Tatabanya",
                countryId: "HU"
            },
            {
                id: "HU-TO",
                name: "Tolna",
                countryId: "HU"
            },
            {
                id: "HU-VA",
                name: "Vas",
                countryId: "HU"
            },
            {
                id: "HU-VE",
                name: "Veszprém",
                countryId: "HU"
            },
            {
                id: "HU-VM",
                name: "Veszprém (Ciudad)",
                countryId: "HU"
            },
            {
                id: "HU-ZA",
                name: "Zala",
                countryId: "HU"
            },
            {
                id: "HU-ZE",
                name: "Zalaegerszeg",
                countryId: "HU"
            },
            {
                id: "ID-AC",
                name: "Aceh",
                countryId: "ID"
            },
            {
                id: "ID-BA",
                name: "Bali",
                countryId: "ID"
            },
            {
                id: "ID-BB",
                name: "Bangka Belitung",
                countryId: "ID"
            },
            {
                id: "ID-BE",
                name: "Bengkulu",
                countryId: "ID"
            },
            {
                id: "ID-BT",
                name: "Banten",
                countryId: "ID"
            },
            {
                id: "ID-GO",
                name: "Gorontalo",
                countryId: "ID"
            },
            {
                id: "ID-JA",
                name: "Jambi",
                countryId: "ID"
            },
            {
                id: "ID-JB",
                name: "Java Occidental",
                countryId: "ID"
            },
            {
                id: "ID-JI",
                name: "Java Oriental",
                countryId: "ID"
            },
            {
                id: "ID-JK",
                name: "Jakarta Raya",
                countryId: "ID"
            },
            {
                id: "ID-JT",
                name: "Java Central",
                countryId: "ID"
            },
            {
                id: "ID-KB",
                name: "West Kalimantan",
                countryId: "ID"
            },
            {
                id: "ID-KI",
                name: "Kalimantan Oriental",
                countryId: "ID"
            },
            {
                id: "ID-KR",
                name: "Islas Riau",
                countryId: "ID"
            },
            {
                id: "ID-KS",
                name: "Kalimantan Del Sur",
                countryId: "ID"
            },
            {
                id: "ID-KT",
                name: "Central Kalimantan",
                countryId: "ID"
            },
            {
                id: "ID-KU",
                name: "Borneo Del Norte",
                countryId: "ID"
            },
            {
                id: "ID-LA",
                name: "Lampung",
                countryId: "ID"
            },
            {
                id: "ID-MA",
                name: "Molucas",
                countryId: "ID"
            },
            {
                id: "ID-MU",
                name: "Maluku Del Norte",
                countryId: "ID"
            },
            {
                id: "ID-NB",
                name: "West Nusa Tenggara",
                countryId: "ID"
            },
            {
                id: "ID-NT",
                name: "Nusa Tenggara Oriental",
                countryId: "ID"
            },
            {
                id: "ID-PA",
                name: "Papú",
                countryId: "ID"
            },
            {
                id: "ID-PB",
                name: "Papúa Occidental",
                countryId: "ID"
            },
            {
                id: "ID-RI",
                name: "Riau",
                countryId: "ID"
            },
            {
                id: "ID-SA",
                name: "Sulawesi Del Norte",
                countryId: "ID"
            },
            {
                id: "ID-SB",
                name: "Sumatra Occidental",
                countryId: "ID"
            },
            {
                id: "ID-SG",
                name: "Sureste De Sulawesi",
                countryId: "ID"
            },
            {
                id: "ID-SR",
                name: "Sulawesi Del Sur",
                countryId: "ID"
            },
            {
                id: "ID-SS",
                name: "Sumatra Del Sur",
                countryId: "ID"
            },
            {
                id: "ID-ST",
                name: "Central Sulawesi",
                countryId: "ID"
            },
            {
                id: "ID-SU",
                name: "Sumatra Del Norte",
                countryId: "ID"
            },
            {
                id: "ID-YO",
                name: "Yogyakarta",
                countryId: "ID"
            },
            {
                id: "IE-CE",
                name: "Clare",
                countryId: "IE"
            },
            {
                id: "IE-CN",
                name: "Cavan",
                countryId: "IE"
            },
            {
                id: "IE-CO",
                name: "Cork",
                countryId: "IE"
            },
            {
                id: "IE-CW",
                name: "Carlow",
                countryId: "IE"
            },
            {
                id: "IE-D",
                name: "Dublín",
                countryId: "IE"
            },
            {
                id: "IE-DL",
                name: "Donegal",
                countryId: "IE"
            },
            {
                id: "IE-G",
                name: "Galway",
                countryId: "IE"
            },
            {
                id: "IE-KE",
                name: "Kildare",
                countryId: "IE"
            },
            {
                id: "IE-KK",
                name: "Kilkenny",
                countryId: "IE"
            },
            {
                id: "IE-KY",
                name: "Kerry",
                countryId: "IE"
            },
            {
                id: "IE-LD",
                name: "Longford",
                countryId: "IE"
            },
            {
                id: "IE-LH",
                name: "Louth",
                countryId: "IE"
            },
            {
                id: "IE-LK",
                name: "Limerick",
                countryId: "IE"
            },
            {
                id: "IE-LM",
                name: "Leitrim",
                countryId: "IE"
            },
            {
                id: "IE-LS",
                name: "Laois",
                countryId: "IE"
            },
            {
                id: "IE-MH",
                name: "Meath",
                countryId: "IE"
            },
            {
                id: "IE-MN",
                name: "Monaghan",
                countryId: "IE"
            },
            {
                id: "IE-MO",
                name: "Mayo",
                countryId: "IE"
            },
            {
                id: "IE-OY",
                name: "Offaly",
                countryId: "IE"
            },
            {
                id: "IE-RN",
                name: "Roscommon",
                countryId: "IE"
            },
            {
                id: "IE-SO",
                name: "Sligo",
                countryId: "IE"
            },
            {
                id: "IE-TA",
                name: "Tipperary",
                countryId: "IE"
            },
            {
                id: "IE-WD",
                name: "Waterford",
                countryId: "IE"
            },
            {
                id: "IE-WH",
                name: "Westmeath",
                countryId: "IE"
            },
            {
                id: "IE-WW",
                name: "Wicklow",
                countryId: "IE"
            },
            {
                id: "IE-WX",
                name: "Wexford",
                countryId: "IE"
            },
            {
                id: "IL-D",
                name: "Provincia Del Sur",
                countryId: "IL"
            },
            {
                id: "IL-HA",
                name: "Distrito De Haifa",
                countryId: "IL"
            },
            {
                id: "IL-JM",
                name: "Distrito De Jerusalén",
                countryId: "IL"
            },
            {
                id: "IL-M",
                name: "Hamerkaz",
                countryId: "IL"
            },
            {
                id: "IL-TA",
                name: "Tel Aviv",
                countryId: "IL"
            },
            {
                id: "IL-Z",
                name: "Norte",
                countryId: "IL"
            },
            {
                id: "IM-0",
                name: "Isla De Man",
                countryId: "IM"
            },
            {
                id: "IN-AN",
                name: "Andaman Y Nicobar",
                countryId: "IN"
            },
            {
                id: "IN-AP",
                name: "Andhra Pradesh",
                countryId: "IN"
            },
            {
                id: "IN-AR",
                name: "Arunachal Pradesh",
                countryId: "IN"
            },
            {
                id: "IN-AS",
                name: "Assam",
                countryId: "IN"
            },
            {
                id: "IN-BR",
                name: "Bihar",
                countryId: "IN"
            },
            {
                id: "IN-CH",
                name: "Chandigarh",
                countryId: "IN"
            },
            {
                id: "IN-CT",
                name: "Chhattisgarh",
                countryId: "IN"
            },
            {
                id: "IN-DD",
                name: "Daman Y Diu",
                countryId: "IN"
            },
            {
                id: "IN-DL",
                name: "Delhi",
                countryId: "IN"
            },
            {
                id: "IN-DN",
                name: "Dadra Y Nagar Haveli",
                countryId: "IN"
            },
            {
                id: "IN-GA",
                name: "Goa",
                countryId: "IN"
            },
            {
                id: "IN-GJ",
                name: "Gujarat",
                countryId: "IN"
            },
            {
                id: "IN-HP",
                name: "Himachal Pradesh",
                countryId: "IN"
            },
            {
                id: "IN-HR",
                name: "Haryana",
                countryId: "IN"
            },
            {
                id: "IN-JH",
                name: "Jharkhand",
                countryId: "IN"
            },
            {
                id: "IN-JK",
                name: "Jammu Y Cachemira",
                countryId: "IN"
            },
            {
                id: "IN-KA",
                name: "Karnataka",
                countryId: "IN"
            },
            {
                id: "IN-KL",
                name: "Kerala",
                countryId: "IN"
            },
            {
                id: "IN-LD",
                name: "Lakshadweep",
                countryId: "IN"
            },
            {
                id: "IN-MH",
                name: "Maharashtra",
                countryId: "IN"
            },
            {
                id: "IN-ML",
                name: "Meghalaya",
                countryId: "IN"
            },
            {
                id: "IN-MN",
                name: "Manipur",
                countryId: "IN"
            },
            {
                id: "IN-MP",
                name: "Madhya Pradesh",
                countryId: "IN"
            },
            {
                id: "IN-MZ",
                name: "Mizoram",
                countryId: "IN"
            },
            {
                id: "IN-NL",
                name: "Nagaland",
                countryId: "IN"
            },
            {
                id: "IN-OR",
                name: "Odisha",
                countryId: "IN"
            },
            {
                id: "IN-PB",
                name: "Punjab",
                countryId: "IN"
            },
            {
                id: "IN-PY",
                name: "Pondicherry",
                countryId: "IN"
            },
            {
                id: "IN-RJ",
                name: "Rajasthan",
                countryId: "IN"
            },
            {
                id: "IN-TG",
                name: "Telangana",
                countryId: "IN"
            },
            {
                id: "IN-TN",
                name: "Tamil Nadu",
                countryId: "IN"
            },
            {
                id: "IN-TR",
                name: "Tripura",
                countryId: "IN"
            },
            {
                id: "IN-UP",
                name: "Uttar Pradesh",
                countryId: "IN"
            },
            {
                id: "IN-UT",
                name: "Uttarakhand",
                countryId: "IN"
            },
            {
                id: "IN-WB",
                name: "Bengala Occidental",
                countryId: "IN"
            },
            {
                id: "IN-WK",
                name: "Sikkim",
                countryId: "IN"
            },
            {
                id: "IO-IO",
                name: "Territorio Británico Del Océano Índico",
                countryId: "IO"
            },
            {
                id: "IQ-AN",
                name: "Anbar",
                countryId: "IQ"
            },
            {
                id: "IQ-AR",
                name: "Erbil",
                countryId: "IQ"
            },
            {
                id: "IQ-BA",
                name: "Basra",
                countryId: "IQ"
            },
            {
                id: "IQ-BB",
                name: "Babilonia",
                countryId: "IQ"
            },
            {
                id: "IQ-BG",
                name: "Bagdad",
                countryId: "IQ"
            },
            {
                id: "IQ-DA",
                name: "Dohuk",
                countryId: "IQ"
            },
            {
                id: "IQ-DI",
                name: "Diyala",
                countryId: "IQ"
            },
            {
                id: "IQ-DQ",
                name: "Di Qar",
                countryId: "IQ"
            },
            {
                id: "IQ-HA",
                name: "Halabja",
                countryId: "IQ"
            },
            {
                id: "IQ-KA",
                name: "Karbala",
                countryId: "IQ"
            },
            {
                id: "IQ-KI",
                name: "Kirkuk",
                countryId: "IQ"
            },
            {
                id: "IQ-MA",
                name: "Maysan",
                countryId: "IQ"
            },
            {
                id: "IQ-MU",
                name: "Muthanna",
                countryId: "IQ"
            },
            {
                id: "IQ-NA",
                name: "Nayaf",
                countryId: "IQ"
            },
            {
                id: "IQ-NI",
                name: "Nínive",
                countryId: "IQ"
            },
            {
                id: "IQ-QA",
                name: "Qadisiyah",
                countryId: "IQ"
            },
            {
                id: "IQ-SD",
                name: "Salah Al-Din",
                countryId: "IQ"
            },
            {
                id: "IQ-SU",
                name: "Sulaymaniyah",
                countryId: "IQ"
            },
            {
                id: "IQ-WA",
                name: "Wasit",
                countryId: "IQ"
            },
            {
                id: "IR-01",
                name: "Azerbaiyán Oriental",
                countryId: "IR"
            },
            {
                id: "IR-02",
                name: "Azerbaiyán Occidental",
                countryId: "IR"
            },
            {
                id: "IR-03",
                name: "Ardabil",
                countryId: "IR"
            },
            {
                id: "IR-04",
                name: "Isfahán",
                countryId: "IR"
            },
            {
                id: "IR-05",
                name: "Elam",
                countryId: "IR"
            },
            {
                id: "IR-06",
                name: "Bushehr",
                countryId: "IR"
            },
            {
                id: "IR-07",
                name: "Teherán",
                countryId: "IR"
            },
            {
                id: "IR-08",
                name: "Chahármahál Bakhtiari",
                countryId: "IR"
            },
            {
                id: "IR-10",
                name: "Khuzestan",
                countryId: "IR"
            },
            {
                id: "IR-11",
                name: "Zanjan",
                countryId: "IR"
            },
            {
                id: "IR-12",
                name: "Semnan",
                countryId: "IR"
            },
            {
                id: "IR-13",
                name: "Sistán Y Baluchistán",
                countryId: "IR"
            },
            {
                id: "IR-14",
                name: "Fars",
                countryId: "IR"
            },
            {
                id: "IR-15",
                name: "Kerman",
                countryId: "IR"
            },
            {
                id: "IR-16",
                name: "Kurdistán",
                countryId: "IR"
            },
            {
                id: "IR-17",
                name: "Kermanshah",
                countryId: "IR"
            },
            {
                id: "IR-18",
                name: "Kohgiluyeh Y Boyer",
                countryId: "IR"
            },
            {
                id: "IR-19",
                name: "Gilan",
                countryId: "IR"
            },
            {
                id: "IR-20",
                name: "Lorestan",
                countryId: "IR"
            },
            {
                id: "IR-21",
                name: "Mazandaran",
                countryId: "IR"
            },
            {
                id: "IR-22",
                name: "Central",
                countryId: "IR"
            },
            {
                id: "IR-23",
                name: "Hormozgán",
                countryId: "IR"
            },
            {
                id: "IR-24",
                name: "Hamedan",
                countryId: "IR"
            },
            {
                id: "IR-25",
                name: "Yazd",
                countryId: "IR"
            },
            {
                id: "IR-26",
                name: "Qom",
                countryId: "IR"
            },
            {
                id: "IR-27",
                name: "Golestan",
                countryId: "IR"
            },
            {
                id: "IR-28",
                name: "Qazvin",
                countryId: "IR"
            },
            {
                id: "IR-29",
                name: "Jorasán Del Sur",
                countryId: "IR"
            },
            {
                id: "IR-30",
                name: "Khorasan Razavi",
                countryId: "IR"
            },
            {
                id: "IR-31",
                name: "Norte Khorasan",
                countryId: "IR"
            },
            {
                id: "IR-32",
                name: "Alborz",
                countryId: "IR"
            },
            {
                id: "IS-1",
                name: "Reykjavik",
                countryId: "IS"
            },
            {
                id: "IS-2",
                name: "Suroeste",
                countryId: "IS"
            },
            {
                id: "IS-3",
                name: "Occidente",
                countryId: "IS"
            },
            {
                id: "IS-4",
                name: "Fiordos",
                countryId: "IS"
            },
            {
                id: "IS-5",
                name: "Noroeste",
                countryId: "IS"
            },
            {
                id: "IS-6",
                name: "Noreste",
                countryId: "IS"
            },
            {
                id: "IS-7",
                name: "Oriente",
                countryId: "IS"
            },
            {
                id: "IS-8",
                name: "Sur De Islandia",
                countryId: "IS"
            },
            {
                id: "IT-21",
                name: "Piedmont",
                countryId: "IT"
            },
            {
                id: "IT-23",
                name: "Valle De Aosta",
                countryId: "IT"
            },
            {
                id: "IT-25",
                name: "Lombardía",
                countryId: "IT"
            },
            {
                id: "IT-32",
                name: "Tirol Del Sur",
                countryId: "IT"
            },
            {
                id: "IT-34",
                name: "Veneto",
                countryId: "IT"
            },
            {
                id: "IT-36",
                name: "Friuli-Venecia Julia",
                countryId: "IT"
            },
            {
                id: "IT-42",
                name: "Liguria",
                countryId: "IT"
            },
            {
                id: "IT-45",
                name: "Emilia-Romaña",
                countryId: "IT"
            },
            {
                id: "IT-52",
                name: "Toscana",
                countryId: "IT"
            },
            {
                id: "IT-55",
                name: "Umbría",
                countryId: "IT"
            },
            {
                id: "IT-57",
                name: "Las Marcas",
                countryId: "IT"
            },
            {
                id: "IT-62",
                name: "Lazio",
                countryId: "IT"
            },
            {
                id: "IT-65",
                name: "Abruzzo",
                countryId: "IT"
            },
            {
                id: "IT-67",
                name: "Molise",
                countryId: "IT"
            },
            {
                id: "IT-72",
                name: "Campania",
                countryId: "IT"
            },
            {
                id: "IT-75",
                name: "Puglia",
                countryId: "IT"
            },
            {
                id: "IT-77",
                name: "Basilicata",
                countryId: "IT"
            },
            {
                id: "IT-78",
                name: "Calabria",
                countryId: "IT"
            },
            {
                id: "IT-82",
                name: "Sicilia",
                countryId: "IT"
            },
            {
                id: "IT-88",
                name: "Cerdeña",
                countryId: "IT"
            },
            {
                id: "JE-JE",
                name: "Jersey",
                countryId: "JE"
            },
            {
                id: "JM-01",
                name: "Kingston",
                countryId: "JM"
            },
            {
                id: "JM-02",
                name: "San Andrés",
                countryId: "JM"
            },
            {
                id: "JM-03",
                name: "Santo Tomás",
                countryId: "JM"
            },
            {
                id: "JM-04",
                name: "Portland",
                countryId: "JM"
            },
            {
                id: "JM-05",
                name: "Santa María",
                countryId: "JM"
            },
            {
                id: "JM-06",
                name: "Saint Ann",
                countryId: "JM"
            },
            {
                id: "JM-07",
                name: "Trelawny",
                countryId: "JM"
            },
            {
                id: "JM-08",
                name: "Saint James",
                countryId: "JM"
            },
            {
                id: "JM-09",
                name: "Hanovre",
                countryId: "JM"
            },
            {
                id: "JM-10",
                name: "Westmoreland",
                countryId: "JM"
            },
            {
                id: "JM-11",
                name: "Santa Isabel",
                countryId: "JM"
            },
            {
                id: "JM-12",
                name: "Manchester",
                countryId: "JM"
            },
            {
                id: "JM-13",
                name: "Letras Gruesas A La Media",
                countryId: "JM"
            },
            {
                id: "JM-14",
                name: "Santa Catalina",
                countryId: "JM"
            },
            {
                id: "JO-AJ",
                name: "Ajloun",
                countryId: "JO"
            },
            {
                id: "JO-AM",
                name: "Amman",
                countryId: "JO"
            },
            {
                id: "JO-AQ",
                name: "Aqaba",
                countryId: "JO"
            },
            {
                id: "JO-AT",
                name: "Tafeileh",
                countryId: "JO"
            },
            {
                id: "JO-AZ",
                name: "Zarqa",
                countryId: "JO"
            },
            {
                id: "JO-BA",
                name: "Balqa",
                countryId: "JO"
            },
            {
                id: "JO-IR",
                name: "Irbid",
                countryId: "JO"
            },
            {
                id: "JO-JA",
                name: "Jerash",
                countryId: "JO"
            },
            {
                id: "JO-KA",
                name: "Karak",
                countryId: "JO"
            },
            {
                id: "JO-MA",
                name: "Mafraq",
                countryId: "JO"
            },
            {
                id: "JO-MD",
                name: "Madaba",
                countryId: "JO"
            },
            {
                id: "JO-MN",
                name: "Ma'An",
                countryId: "JO"
            },
            {
                id: "JP-01",
                name: "Hokkaido",
                countryId: "JP"
            },
            {
                id: "JP-02",
                name: "Aomori",
                countryId: "JP"
            },
            {
                id: "JP-03",
                name: "Iwate",
                countryId: "JP"
            },
            {
                id: "JP-04",
                name: "Miyagi",
                countryId: "JP"
            },
            {
                id: "JP-05",
                name: "Akita",
                countryId: "JP"
            },
            {
                id: "JP-06",
                name: "Yamagata",
                countryId: "JP"
            },
            {
                id: "JP-07",
                name: "Fukushima",
                countryId: "JP"
            },
            {
                id: "JP-08",
                name: "Ibaraki",
                countryId: "JP"
            },
            {
                id: "JP-09",
                name: "Tochigi",
                countryId: "JP"
            },
            {
                id: "JP-10",
                name: "Gunma",
                countryId: "JP"
            },
            {
                id: "JP-11",
                name: "Saitama",
                countryId: "JP"
            },
            {
                id: "JP-12",
                name: "Chiba",
                countryId: "JP"
            },
            {
                id: "JP-13",
                name: "Tokio",
                countryId: "JP"
            },
            {
                id: "JP-14",
                name: "Kanagawa",
                countryId: "JP"
            },
            {
                id: "JP-15",
                name: "Niigata",
                countryId: "JP"
            },
            {
                id: "JP-16",
                name: "Toyama",
                countryId: "JP"
            },
            {
                id: "JP-17",
                name: "Ishikawa",
                countryId: "JP"
            },
            {
                id: "JP-18",
                name: "Fukui",
                countryId: "JP"
            },
            {
                id: "JP-19",
                name: "Yamanashi",
                countryId: "JP"
            },
            {
                id: "JP-20",
                name: "Nagano",
                countryId: "JP"
            },
            {
                id: "JP-21",
                name: "Gifu",
                countryId: "JP"
            },
            {
                id: "JP-22",
                name: "Shizuoka",
                countryId: "JP"
            },
            {
                id: "JP-23",
                name: "Aichi",
                countryId: "JP"
            },
            {
                id: "JP-24",
                name: "Triple",
                countryId: "JP"
            },
            {
                id: "JP-25",
                name: "Shiga",
                countryId: "JP"
            },
            {
                id: "JP-26",
                name: "Kyoto",
                countryId: "JP"
            },
            {
                id: "JP-27",
                name: "Osaka",
                countryId: "JP"
            },
            {
                id: "JP-28",
                name: "Hyogo",
                countryId: "JP"
            },
            {
                id: "JP-29",
                name: "Nara",
                countryId: "JP"
            },
            {
                id: "JP-30",
                name: "Wakayama",
                countryId: "JP"
            },
            {
                id: "JP-31",
                name: "Tottori",
                countryId: "JP"
            },
            {
                id: "JP-32",
                name: "Shimane",
                countryId: "JP"
            },
            {
                id: "JP-33",
                name: "Okayama",
                countryId: "JP"
            },
            {
                id: "JP-34",
                name: "Hiroshima",
                countryId: "JP"
            },
            {
                id: "JP-35",
                name: "Yamaguchi",
                countryId: "JP"
            },
            {
                id: "JP-36",
                name: "Tokushima",
                countryId: "JP"
            },
            {
                id: "JP-37",
                name: "Kagawa",
                countryId: "JP"
            },
            {
                id: "JP-38",
                name: "Ehime",
                countryId: "JP"
            },
            {
                id: "JP-39",
                name: "Kochi",
                countryId: "JP"
            },
            {
                id: "JP-40",
                name: "Fukuoka",
                countryId: "JP"
            },
            {
                id: "JP-41",
                name: "Saga",
                countryId: "JP"
            },
            {
                id: "JP-42",
                name: "Nagasaki",
                countryId: "JP"
            },
            {
                id: "JP-43",
                name: "Kumamoto",
                countryId: "JP"
            },
            {
                id: "JP-44",
                name: "Mucho",
                countryId: "JP"
            },
            {
                id: "JP-45",
                name: "Miyazaki",
                countryId: "JP"
            },
            {
                id: "JP-46",
                name: "Kagoshima",
                countryId: "JP"
            },
            {
                id: "JP-47",
                name: "Okinawa",
                countryId: "JP"
            },
            {
                id: "KE-01",
                name: "Baringo",
                countryId: "KE"
            },
            {
                id: "KE-02",
                name: "Bomet",
                countryId: "KE"
            },
            {
                id: "KE-03",
                name: "Bungoma",
                countryId: "KE"
            },
            {
                id: "KE-04",
                name: "Busia",
                countryId: "KE"
            },
            {
                id: "KE-05",
                name: "Eleyo / Marakwet",
                countryId: "KE"
            },
            {
                id: "KE-06",
                name: "Embu",
                countryId: "KE"
            },
            {
                id: "KE-07",
                name: "Garissa",
                countryId: "KE"
            },
            {
                id: "KE-08",
                name: "Homa Bay",
                countryId: "KE"
            },
            {
                id: "KE-09",
                name: "Isiolo",
                countryId: "KE"
            },
            {
                id: "KE-10",
                name: "Kajiado",
                countryId: "KE"
            },
            {
                id: "KE-11",
                name: "Kakamega",
                countryId: "KE"
            },
            {
                id: "KE-12",
                name: "Kericho",
                countryId: "KE"
            },
            {
                id: "KE-13",
                name: "Kiambu",
                countryId: "KE"
            },
            {
                id: "KE-14",
                name: "Kilifi",
                countryId: "KE"
            },
            {
                id: "KE-15",
                name: "Kirinyaga",
                countryId: "KE"
            },
            {
                id: "KE-16",
                name: "Kisii",
                countryId: "KE"
            },
            {
                id: "KE-17",
                name: "Kisumu",
                countryId: "KE"
            },
            {
                id: "KE-18",
                name: "Kitui",
                countryId: "KE"
            },
            {
                id: "KE-19",
                name: "Kwale",
                countryId: "KE"
            },
            {
                id: "KE-20",
                name: "Laikipia",
                countryId: "KE"
            },
            {
                id: "KE-21",
                name: "La Mu",
                countryId: "KE"
            },
            {
                id: "KE-22",
                name: "Machakos",
                countryId: "KE"
            },
            {
                id: "KE-23",
                name: "Makueni",
                countryId: "KE"
            },
            {
                id: "KE-24",
                name: "Mandera",
                countryId: "KE"
            },
            {
                id: "KE-25",
                name: "Marsabit",
                countryId: "KE"
            },
            {
                id: "KE-26",
                name: "Meru",
                countryId: "KE"
            },
            {
                id: "KE-27",
                name: "Migori",
                countryId: "KE"
            },
            {
                id: "KE-28",
                name: "Mombasa",
                countryId: "KE"
            },
            {
                id: "KE-29",
                name: "Murang'A",
                countryId: "KE"
            },
            {
                id: "KE-30",
                name: "La Ciudad De Nairobi",
                countryId: "KE"
            },
            {
                id: "KE-31",
                name: "Nakuru",
                countryId: "KE"
            },
            {
                id: "KE-32",
                name: "Nandi",
                countryId: "KE"
            },
            {
                id: "KE-33",
                name: "Narok",
                countryId: "KE"
            },
            {
                id: "KE-34",
                name: "Nyamira",
                countryId: "KE"
            },
            {
                id: "KE-35",
                name: "Nyandarua",
                countryId: "KE"
            },
            {
                id: "KE-36",
                name: "Nyeri",
                countryId: "KE"
            },
            {
                id: "KE-37",
                name: "Samburu",
                countryId: "KE"
            },
            {
                id: "KE-38",
                name: "Siaya",
                countryId: "KE"
            },
            {
                id: "KE-39",
                name: "Taita / Taveta",
                countryId: "KE"
            },
            {
                id: "KE-40",
                name: "Río Tana",
                countryId: "KE"
            },
            {
                id: "KE-41",
                name: "Tharaka-Nithi",
                countryId: "KE"
            },
            {
                id: "KE-42",
                name: "Trans Nzoia",
                countryId: "KE"
            },
            {
                id: "KE-43",
                name: "Turkana",
                countryId: "KE"
            },
            {
                id: "KE-44",
                name: "Uasin Gishu",
                countryId: "KE"
            },
            {
                id: "KE-45",
                name: "Vihiga",
                countryId: "KE"
            },
            {
                id: "KE-46",
                name: "Wajir",
                countryId: "KE"
            },
            {
                id: "KE-47",
                name: "West Pokot",
                countryId: "KE"
            },
            {
                id: "KG-B",
                name: "Batken",
                countryId: "KG"
            },
            {
                id: "KG-C",
                name: "Chui",
                countryId: "KG"
            },
            {
                id: "KG-GB",
                name: "Bishkek",
                countryId: "KG"
            },
            {
                id: "KG-J",
                name: "Jalal-Abad",
                countryId: "KG"
            },
            {
                id: "KG-N",
                name: "Naryn",
                countryId: "KG"
            },
            {
                id: "KG-O",
                name: "Osh",
                countryId: "KG"
            },
            {
                id: "KG-T",
                name: "Talas",
                countryId: "KG"
            },
            {
                id: "KG-Y",
                name: "Issyk-Kul",
                countryId: "KG"
            },
            {
                id: "KH-1",
                name: "Banteay Mean Chey",
                countryId: "KH"
            },
            {
                id: "KH-10",
                name: "Kracheh",
                countryId: "KH"
            },
            {
                id: "KH-11",
                name: "Mondol Kiri",
                countryId: "KH"
            },
            {
                id: "KH-12",
                name: "Phnom Penh",
                countryId: "KH"
            },
            {
                id: "KH-13",
                name: "Preah Vihear",
                countryId: "KH"
            },
            {
                id: "KH-14",
                name: "Presa Veaeng",
                countryId: "KH"
            },
            {
                id: "KH-15",
                name: "Pousaat",
                countryId: "KH"
            },
            {
                id: "KH-16",
                name: "Rotanah Kiri",
                countryId: "KH"
            },
            {
                id: "KH-17",
                name: "Siem Reab",
                countryId: "KH"
            },
            {
                id: "KH-18",
                name: "Krong Preah Sihanouk",
                countryId: "KH"
            },
            {
                id: "KH-19",
                name: "Stueng Treng",
                countryId: "KH"
            },
            {
                id: "KH-2",
                name: "Baat Dambang",
                countryId: "KH"
            },
            {
                id: "KH-20",
                name: "Svaay Rieng",
                countryId: "KH"
            },
            {
                id: "KH-21",
                name: "Taakaev",
                countryId: "KH"
            },
            {
                id: "KH-22",
                name: "Otdar Mean Chey",
                countryId: "KH"
            },
            {
                id: "KH-23",
                name: "Krong Kaeb",
                countryId: "KH"
            },
            {
                id: "KH-24",
                name: "Krong Pailin",
                countryId: "KH"
            },
            {
                id: "KH-25",
                name: "Tbong Khmum",
                countryId: "KH"
            },
            {
                id: "KH-3",
                name: "Kampong Chaam",
                countryId: "KH"
            },
            {
                id: "KH-4",
                name: "Kampong Chhnang",
                countryId: "KH"
            },
            {
                id: "KH-5",
                name: "Kampong Spueu",
                countryId: "KH"
            },
            {
                id: "KH-6",
                name: "Kampong Thum",
                countryId: "KH"
            },
            {
                id: "KH-7",
                name: "Kampot",
                countryId: "KH"
            },
            {
                id: "KH-8",
                name: "Kandaal",
                countryId: "KH"
            },
            {
                id: "KH-9",
                name: "Kaoh Kong",
                countryId: "KH"
            },
            {
                id: "KI-0",
                name: "Abaiang",
                countryId: "KI"
            },
            {
                id: "KI-1",
                name: "Abemama",
                countryId: "KI"
            },
            {
                id: "KI-10",
                name: "Kiritimati",
                countryId: "KI"
            },
            {
                id: "KI-11",
                name: "Kuria",
                countryId: "KI"
            },
            {
                id: "KI-13",
                name: "Maiana",
                countryId: "KI"
            },
            {
                id: "KI-14",
                name: "Makin",
                countryId: "KI"
            },
            {
                id: "KI-15",
                name: "Marakei",
                countryId: "KI"
            },
            {
                id: "KI-16",
                name: "Nikunau",
                countryId: "KI"
            },
            {
                id: "KI-17",
                name: "Nonouti",
                countryId: "KI"
            },
            {
                id: "KI-18",
                name: "Gilbert Del Norte",
                countryId: "KI"
            },
            {
                id: "KI-19",
                name: "Onotoa",
                countryId: "KI"
            },
            {
                id: "KI-2",
                name: "Aranuka",
                countryId: "KI"
            },
            {
                id: "KI-21",
                name: "Gilbert Del Sur",
                countryId: "KI"
            },
            {
                id: "KI-22",
                name: "Tabiteuea",
                countryId: "KI"
            },
            {
                id: "KI-23",
                name: "Tabuaeran",
                countryId: "KI"
            },
            {
                id: "KI-24",
                name: "Tamana",
                countryId: "KI"
            },
            {
                id: "KI-25",
                name: "Tarawa",
                countryId: "KI"
            },
            {
                id: "KI-26",
                name: "Teraina",
                countryId: "KI"
            },
            {
                id: "KI-3",
                name: "Arorae",
                countryId: "KI"
            },
            {
                id: "KI-4",
                name: "Banaba",
                countryId: "KI"
            },
            {
                id: "KI-5",
                name: "Beru",
                countryId: "KI"
            },
            {
                id: "KI-6",
                name: "Butaritari",
                countryId: "KI"
            },
            {
                id: "KI-7",
                name: "Gilbert Central",
                countryId: "KI"
            },
            {
                id: "KI-9",
                name: "Kanton",
                countryId: "KI"
            },
            {
                id: "KI-G",
                name: "Islas Gilbert",
                countryId: "KI"
            },
            {
                id: "KI-L",
                name: "Islas De La Línea",
                countryId: "KI"
            },
            {
                id: "KI-P",
                name: "Islas Fénix",
                countryId: "KI"
            },
            {
                id: "KM-A",
                name: "Andjouân",
                countryId: "KM"
            },
            {
                id: "KM-G",
                name: "Andjazîdja",
                countryId: "KM"
            },
            {
                id: "KM-M",
                name: "Moûhîlî",
                countryId: "KM"
            },
            {
                id: "KN-K",
                name: "San Cristóbal",
                countryId: "KN"
            },
            {
                id: "KN-N",
                name: "Nieves",
                countryId: "KN"
            },
            {
                id: "KP-01",
                name: "Pyongyang",
                countryId: "KP"
            },
            {
                id: "KP-02",
                name: "Paz Provincial",
                countryId: "KP"
            },
            {
                id: "KP-03",
                name: "P'Yŏngan Del Norte",
                countryId: "KP"
            },
            {
                id: "KP-04",
                name: "Chagang",
                countryId: "KP"
            },
            {
                id: "KP-05",
                name: "Hwanghae Del Sur",
                countryId: "KP"
            },
            {
                id: "KP-06",
                name: "Hwanghae Del Norte",
                countryId: "KP"
            },
            {
                id: "KP-07",
                name: "Gangwon",
                countryId: "KP"
            },
            {
                id: "KP-08",
                name: "Provincia De Hamgyong Del Sur",
                countryId: "KP"
            },
            {
                id: "KP-09",
                name: "Provincia De Hamgyong Del Norte",
                countryId: "KP"
            },
            {
                id: "KP-10",
                name: "Ryanggang",
                countryId: "KP"
            },
            {
                id: "KP-13",
                name: "Rason",
                countryId: "KP"
            },
            {
                id: "KR-11",
                name: "Seúl",
                countryId: "KR"
            },
            {
                id: "KR-26",
                name: "Busan",
                countryId: "KR"
            },
            {
                id: "KR-27",
                name: "Daegu",
                countryId: "KR"
            },
            {
                id: "KR-28",
                name: "Incheon",
                countryId: "KR"
            },
            {
                id: "KR-29",
                name: "Gwangju",
                countryId: "KR"
            },
            {
                id: "KR-30",
                name: "Daejeon",
                countryId: "KR"
            },
            {
                id: "KR-31",
                name: "Ulsan",
                countryId: "KR"
            },
            {
                id: "KR-41",
                name: "Gyeonggi",
                countryId: "KR"
            },
            {
                id: "KR-42",
                name: "Gangwon",
                countryId: "KR"
            },
            {
                id: "KR-43",
                name: "Chungcheong Del Norte",
                countryId: "KR"
            },
            {
                id: "KR-44",
                name: "Chungcheongnam",
                countryId: "KR"
            },
            {
                id: "KR-45",
                name: "Jeolla Del Norte",
                countryId: "KR"
            },
            {
                id: "KR-46",
                name: "Jeolla Del Sur",
                countryId: "KR"
            },
            {
                id: "KR-47",
                name: "Gyeongsangbuk-Do",
                countryId: "KR"
            },
            {
                id: "KR-48",
                name: "Gyeongsangnam",
                countryId: "KR"
            },
            {
                id: "KR-49",
                name: "Provincia Autónoma Especial De Jeju",
                countryId: "KR"
            },
            {
                id: "KR-50",
                name: "Ciudad Sejong",
                countryId: "KR"
            },
            {
                id: "KW-AH",
                name: "Al-Ahmadi",
                countryId: "KW"
            },
            {
                id: "KW-FA",
                name: "Farwaniya",
                countryId: "KW"
            },
            {
                id: "KW-HA",
                name: "Hawalli",
                countryId: "KW"
            },
            {
                id: "KW-JA",
                name: "Jahra",
                countryId: "KW"
            },
            {
                id: "KW-KU",
                name: "Kuwait",
                countryId: "KW"
            },
            {
                id: "KW-MU",
                name: "Mubarak Al-Kabeer",
                countryId: "KW"
            },
            {
                id: "KY-0",
                name: "Arroyo",
                countryId: "KY"
            },
            {
                id: "KY-1",
                name: "Oriental",
                countryId: "KY"
            },
            {
                id: "KY-2",
                name: "Midland",
                countryId: "KY"
            },
            {
                id: "KY-3",
                name: "Ciudad Del Sur",
                countryId: "KY"
            },
            {
                id: "KY-4",
                name: "Spot Bay",
                countryId: "KY"
            },
            {
                id: "KY-5",
                name: "Stake Bay",
                countryId: "KY"
            },
            {
                id: "KY-6",
                name: "West End",
                countryId: "KY"
            },
            {
                id: "KY-7",
                name: "Occidental",
                countryId: "KY"
            },
            {
                id: "KZ-AKM",
                name: "Akmola",
                countryId: "KZ"
            },
            {
                id: "KZ-AKT",
                name: "Aktobe",
                countryId: "KZ"
            },
            {
                id: "KZ-ALA",
                name: "Alma-Ata",
                countryId: "KZ"
            },
            {
                id: "KZ-ALM",
                name: "Almaty",
                countryId: "KZ"
            },
            {
                id: "KZ-AST",
                name: "Astana",
                countryId: "KZ"
            },
            {
                id: "KZ-ATY",
                name: "Atyrau",
                countryId: "KZ"
            },
            {
                id: "KZ-BAY",
                name: "Baikonur",
                countryId: "KZ"
            },
            {
                id: "KZ-KAR",
                name: "Karaganda",
                countryId: "KZ"
            },
            {
                id: "KZ-KUS",
                name: "Kostanay",
                countryId: "KZ"
            },
            {
                id: "KZ-KZY",
                name: "Kyzylorda",
                countryId: "KZ"
            },
            {
                id: "KZ-MAN",
                name: "Mangistau",
                countryId: "KZ"
            },
            {
                id: "KZ-PAV",
                name: "Pavlodar",
                countryId: "KZ"
            },
            {
                id: "KZ-SEV",
                name: "Norte Kazajstán",
                countryId: "KZ"
            },
            {
                id: "KZ-SHY",
                name: "Shymkent",
                countryId: "KZ"
            },
            {
                id: "KZ-VOS",
                name: "Kazajstán Oriental",
                countryId: "KZ"
            },
            {
                id: "KZ-YUZ",
                name: "Turkestan",
                countryId: "KZ"
            },
            {
                id: "KZ-ZAP",
                name: "Kazajstán Occidental",
                countryId: "KZ"
            },
            {
                id: "KZ-ZHA",
                name: "Zhambyl",
                countryId: "KZ"
            },
            {
                id: "LA-AT",
                name: "Attapu",
                countryId: "LA"
            },
            {
                id: "LA-BK",
                name: "Bokeo",
                countryId: "LA"
            },
            {
                id: "LA-BL",
                name: "Bolikhamxai",
                countryId: "LA"
            },
            {
                id: "LA-CH",
                name: "Champasak",
                countryId: "LA"
            },
            {
                id: "LA-HO",
                name: "Houaphan",
                countryId: "LA"
            },
            {
                id: "LA-KH",
                name: "Khammouan",
                countryId: "LA"
            },
            {
                id: "LA-LM",
                name: "Louang Namtha",
                countryId: "LA"
            },
            {
                id: "LA-LP",
                name: "Louangphabang",
                countryId: "LA"
            },
            {
                id: "LA-OU",
                name: "Oudomxai",
                countryId: "LA"
            },
            {
                id: "LA-PH",
                name: "Phongsali",
                countryId: "LA"
            },
            {
                id: "LA-SL",
                name: "Salavan",
                countryId: "LA"
            },
            {
                id: "LA-SV",
                name: "Savannakhét",
                countryId: "LA"
            },
            {
                id: "LA-VI",
                name: "Vientiane",
                countryId: "LA"
            },
            {
                id: "LA-XA",
                name: "Xaignabouli",
                countryId: "LA"
            },
            {
                id: "LA-XE",
                name: "Xekong",
                countryId: "LA"
            },
            {
                id: "LA-XI",
                name: "Xiangkhouang",
                countryId: "LA"
            },
            {
                id: "LA-XS",
                name: "Xaisomboun",
                countryId: "LA"
            },
            {
                id: "LB-AK",
                name: "Akkar",
                countryId: "LB"
            },
            {
                id: "LB-AS",
                name: "El Norte Del Líbano",
                countryId: "LB"
            },
            {
                id: "LB-BA",
                name: "Beirut",
                countryId: "LB"
            },
            {
                id: "LB-BH",
                name: "Baalbelk-Hermel",
                countryId: "LB"
            },
            {
                id: "LB-BI",
                name: "Beqaa",
                countryId: "LB"
            },
            {
                id: "LB-JA",
                name: "El Sur Del Líbano",
                countryId: "LB"
            },
            {
                id: "LB-JL",
                name: "Monte Líbano",
                countryId: "LB"
            },
            {
                id: "LB-NA",
                name: "Nabatîyé",
                countryId: "LB"
            },
            {
                id: "LC-01",
                name: "Anse La Raye",
                countryId: "LC"
            },
            {
                id: "LC-02",
                name: "Castries",
                countryId: "LC"
            },
            {
                id: "LC-03",
                name: "Choiseul",
                countryId: "LC"
            },
            {
                id: "LC-05",
                name: "Dennery",
                countryId: "LC"
            },
            {
                id: "LC-06",
                name: "Gros Islet",
                countryId: "LC"
            },
            {
                id: "LC-07",
                name: "Laborie",
                countryId: "LC"
            },
            {
                id: "LC-08",
                name: "Micoud",
                countryId: "LC"
            },
            {
                id: "LC-10",
                name: "Soufrière",
                countryId: "LC"
            },
            {
                id: "LC-11",
                name: "Vieux Fort",
                countryId: "LC"
            },
            {
                id: "LC-12",
                name: "Canaries",
                countryId: "LC"
            },
            {
                id: "LI-01",
                name: "Balzers",
                countryId: "LI"
            },
            {
                id: "LI-02",
                name: "Eschen",
                countryId: "LI"
            },
            {
                id: "LI-03",
                name: "Gamprin",
                countryId: "LI"
            },
            {
                id: "LI-04",
                name: "Moros",
                countryId: "LI"
            },
            {
                id: "LI-05",
                name: "Tablazón",
                countryId: "LI"
            },
            {
                id: "LI-06",
                name: "Ruggell",
                countryId: "LI"
            },
            {
                id: "LI-07",
                name: "Schaan",
                countryId: "LI"
            },
            {
                id: "LI-08",
                name: "Schellenberg",
                countryId: "LI"
            },
            {
                id: "LI-09",
                name: "Triesen",
                countryId: "LI"
            },
            {
                id: "LI-10",
                name: "Triesenberg",
                countryId: "LI"
            },
            {
                id: "LI-11",
                name: "Vaduz",
                countryId: "LI"
            },
            {
                id: "LK-1",
                name: "Basnahira",
                countryId: "LK"
            },
            {
                id: "LK-2",
                name: "Madhyama",
                countryId: "LK"
            },
            {
                id: "LK-3",
                name: "Dakunu",
                countryId: "LK"
            },
            {
                id: "LK-4",
                name: "Uturu",
                countryId: "LK"
            },
            {
                id: "LK-5",
                name: "Naegenahira",
                countryId: "LK"
            },
            {
                id: "LK-6",
                name: "Vayamba",
                countryId: "LK"
            },
            {
                id: "LK-7",
                name: "Uturumaeda",
                countryId: "LK"
            },
            {
                id: "LK-8",
                name: "Uva",
                countryId: "LK"
            },
            {
                id: "LK-9",
                name: "Sabaragamuwa",
                countryId: "LK"
            },
            {
                id: "LR-BG",
                name: "Bong",
                countryId: "LR"
            },
            {
                id: "LR-BM",
                name: "Bomi",
                countryId: "LR"
            },
            {
                id: "LR-CM",
                name: "Gran Cape Mount",
                countryId: "LR"
            },
            {
                id: "LR-GB",
                name: "Gran Bassa",
                countryId: "LR"
            },
            {
                id: "LR-GG",
                name: "Grand Gedeh",
                countryId: "LR"
            },
            {
                id: "LR-GK",
                name: "Grand Kru",
                countryId: "LR"
            },
            {
                id: "LR-GP",
                name: "Gbarpolu",
                countryId: "LR"
            },
            {
                id: "LR-LO",
                name: "Lofa",
                countryId: "LR"
            },
            {
                id: "LR-MG",
                name: "Margibi",
                countryId: "LR"
            },
            {
                id: "LR-MO",
                name: "Montserrado",
                countryId: "LR"
            },
            {
                id: "LR-MY",
                name: "Maryland",
                countryId: "LR"
            },
            {
                id: "LR-NI",
                name: "Nimba",
                countryId: "LR"
            },
            {
                id: "LR-RG",
                name: "Río Geee",
                countryId: "LR"
            },
            {
                id: "LR-RI",
                name: "River Cess",
                countryId: "LR"
            },
            {
                id: "LR-SI",
                name: "Sinoe",
                countryId: "LR"
            },
            {
                id: "LS-A",
                name: "Maseru",
                countryId: "LS"
            },
            {
                id: "LS-B",
                name: "Butha-Buthe",
                countryId: "LS"
            },
            {
                id: "LS-C",
                name: "Leribe",
                countryId: "LS"
            },
            {
                id: "LS-D",
                name: "Berea",
                countryId: "LS"
            },
            {
                id: "LS-E",
                name: "Mafeteng",
                countryId: "LS"
            },
            {
                id: "LS-F",
                name: "Mohales Hoek",
                countryId: "LS"
            },
            {
                id: "LS-G",
                name: "Quthing",
                countryId: "LS"
            },
            {
                id: "LS-H",
                name: "Nek Nek De",
                countryId: "LS"
            },
            {
                id: "LS-J",
                name: "Mokhotlong",
                countryId: "LS"
            },
            {
                id: "LS-K",
                name: "Thaba-Tseka",
                countryId: "LS"
            },
            {
                id: "LT-AL",
                name: "Alytus",
                countryId: "LT"
            },
            {
                id: "LT-KL",
                name: "Klaipeda",
                countryId: "LT"
            },
            {
                id: "LT-KU",
                name: "Kaunas",
                countryId: "LT"
            },
            {
                id: "LT-MR",
                name: "Marijampole",
                countryId: "LT"
            },
            {
                id: "LT-PN",
                name: "Panevezys",
                countryId: "LT"
            },
            {
                id: "LT-SA",
                name: "Siauliai",
                countryId: "LT"
            },
            {
                id: "LT-TA",
                name: "Tauragė",
                countryId: "LT"
            },
            {
                id: "LT-TE",
                name: "Carpa",
                countryId: "LT"
            },
            {
                id: "LT-UT",
                name: "Utena",
                countryId: "LT"
            },
            {
                id: "LT-VL",
                name: "Vilnius",
                countryId: "LT"
            },
            {
                id: "LU-CA",
                name: "Capellen",
                countryId: "LU"
            },
            {
                id: "LU-CL",
                name: "Clevaux",
                countryId: "LU"
            },
            {
                id: "LU-DI",
                name: "Diekirch",
                countryId: "LU"
            },
            {
                id: "LU-EC",
                name: "Echternach",
                countryId: "LU"
            },
            {
                id: "LU-ES",
                name: "Esch-Sur-Alzette",
                countryId: "LU"
            },
            {
                id: "LU-GR",
                name: "Grevenmacher",
                countryId: "LU"
            },
            {
                id: "LU-LU",
                name: "Luxemburgo",
                countryId: "LU"
            },
            {
                id: "LU-ME",
                name: "Mersch",
                countryId: "LU"
            },
            {
                id: "LU-RD",
                name: "Redange",
                countryId: "LU"
            },
            {
                id: "LU-RM",
                name: "Remich",
                countryId: "LU"
            },
            {
                id: "LU-VD",
                name: "Vianden",
                countryId: "LU"
            },
            {
                id: "LU-WI",
                name: "Wiltz",
                countryId: "LU"
            },
            {
                id: "LV-001",
                name: "Aglona",
                countryId: "LV"
            },
            {
                id: "LV-002",
                name: "Aizkraukle",
                countryId: "LV"
            },
            {
                id: "LV-003",
                name: "Aizpute",
                countryId: "LV"
            },
            {
                id: "LV-004",
                name: "Akniste",
                countryId: "LV"
            },
            {
                id: "LV-005",
                name: "Aloja",
                countryId: "LV"
            },
            {
                id: "LV-007",
                name: "Aluksne",
                countryId: "LV"
            },
            {
                id: "LV-008",
                name: "Amata",
                countryId: "LV"
            },
            {
                id: "LV-009",
                name: "Ape",
                countryId: "LV"
            },
            {
                id: "LV-010",
                name: "Auce",
                countryId: "LV"
            },
            {
                id: "LV-011",
                name: "Adazi",
                countryId: "LV"
            },
            {
                id: "LV-012",
                name: "Babite",
                countryId: "LV"
            },
            {
                id: "LV-013",
                name: "Baldone",
                countryId: "LV"
            },
            {
                id: "LV-014",
                name: "Baltinava",
                countryId: "LV"
            },
            {
                id: "LV-015",
                name: "Balvi",
                countryId: "LV"
            },
            {
                id: "LV-016",
                name: "Bauska",
                countryId: "LV"
            },
            {
                id: "LV-017",
                name: "Beverina",
                countryId: "LV"
            },
            {
                id: "LV-018",
                name: "Brocēni",
                countryId: "LV"
            },
            {
                id: "LV-019",
                name: "Burtnieki",
                countryId: "LV"
            },
            {
                id: "LV-020",
                name: "Carnikava",
                countryId: "LV"
            },
            {
                id: "LV-021",
                name: "Cesvaine",
                countryId: "LV"
            },
            {
                id: "LV-022",
                name: "Cesis",
                countryId: "LV"
            },
            {
                id: "LV-023",
                name: "Cibla",
                countryId: "LV"
            },
            {
                id: "LV-024",
                name: "Dagda",
                countryId: "LV"
            },
            {
                id: "LV-025",
                name: "Daugavpils",
                countryId: "LV"
            },
            {
                id: "LV-026",
                name: "Dobele",
                countryId: "LV"
            },
            {
                id: "LV-027",
                name: "Dundaga",
                countryId: "LV"
            },
            {
                id: "LV-028",
                name: "Durbe",
                countryId: "LV"
            },
            {
                id: "LV-029",
                name: "Engure",
                countryId: "LV"
            },
            {
                id: "LV-030",
                name: "Ergli",
                countryId: "LV"
            },
            {
                id: "LV-031",
                name: "Garkalne",
                countryId: "LV"
            },
            {
                id: "LV-032",
                name: "Grobina",
                countryId: "LV"
            },
            {
                id: "LV-033",
                name: "Gulbene",
                countryId: "LV"
            },
            {
                id: "LV-034",
                name: "Iecava",
                countryId: "LV"
            },
            {
                id: "LV-035",
                name: "Ikskile",
                countryId: "LV"
            },
            {
                id: "LV-036",
                name: "Ilūkste",
                countryId: "LV"
            },
            {
                id: "LV-037",
                name: "Incukalns",
                countryId: "LV"
            },
            {
                id: "LV-038",
                name: "Jaunjelgava",
                countryId: "LV"
            },
            {
                id: "LV-039",
                name: "Jaunpiebalga",
                countryId: "LV"
            },
            {
                id: "LV-040",
                name: "Jaunpils",
                countryId: "LV"
            },
            {
                id: "LV-041",
                name: "Jelgava",
                countryId: "LV"
            },
            {
                id: "LV-042",
                name: "Jekabpils",
                countryId: "LV"
            },
            {
                id: "LV-043",
                name: "Kandava",
                countryId: "LV"
            },
            {
                id: "LV-044",
                name: "Karsava",
                countryId: "LV"
            },
            {
                id: "LV-045",
                name: "Kocēni",
                countryId: "LV"
            },
            {
                id: "LV-046",
                name: "Koknese",
                countryId: "LV"
            },
            {
                id: "LV-047",
                name: "Kraslava",
                countryId: "LV"
            },
            {
                id: "LV-048",
                name: "Krimulda",
                countryId: "LV"
            },
            {
                id: "LV-049",
                name: "Krustpils",
                countryId: "LV"
            },
            {
                id: "LV-050",
                name: "Kuldiga",
                countryId: "LV"
            },
            {
                id: "LV-051",
                name: "Ķegums",
                countryId: "LV"
            },
            {
                id: "LV-052",
                name: "Ķekava",
                countryId: "LV"
            },
            {
                id: "LV-053",
                name: "Lielvārde",
                countryId: "LV"
            },
            {
                id: "LV-054",
                name: "Limbazhi",
                countryId: "LV"
            },
            {
                id: "LV-055",
                name: "Līgatne",
                countryId: "LV"
            },
            {
                id: "LV-056",
                name: "Livani",
                countryId: "LV"
            },
            {
                id: "LV-057",
                name: "Lubana",
                countryId: "LV"
            },
            {
                id: "LV-058",
                name: "Ludza",
                countryId: "LV"
            },
            {
                id: "LV-059",
                name: "Madona",
                countryId: "LV"
            },
            {
                id: "LV-06",
                name: "Alsunga",
                countryId: "LV"
            },
            {
                id: "LV-060",
                name: "Mazsalaca",
                countryId: "LV"
            },
            {
                id: "LV-061",
                name: "Malpils",
                countryId: "LV"
            },
            {
                id: "LV-062",
                name: "Mārupe",
                countryId: "LV"
            },
            {
                id: "LV-063",
                name: "Mersrags",
                countryId: "LV"
            },
            {
                id: "LV-064",
                name: "Naukseni",
                countryId: "LV"
            },
            {
                id: "LV-065",
                name: "Nereta",
                countryId: "LV"
            },
            {
                id: "LV-066",
                name: "Nica",
                countryId: "LV"
            },
            {
                id: "LV-067",
                name: "Ogre",
                countryId: "LV"
            },
            {
                id: "LV-068",
                name: "Olaine",
                countryId: "LV"
            },
            {
                id: "LV-069",
                name: "Ozolnieki",
                countryId: "LV"
            },
            {
                id: "LV-070",
                name: "Pargauja",
                countryId: "LV"
            },
            {
                id: "LV-071",
                name: "Pavilosta",
                countryId: "LV"
            },
            {
                id: "LV-072",
                name: "Plavinas",
                countryId: "LV"
            },
            {
                id: "LV-073",
                name: "Preili",
                countryId: "LV"
            },
            {
                id: "LV-074",
                name: "Priekule",
                countryId: "LV"
            },
            {
                id: "LV-075",
                name: "Priekuļi",
                countryId: "LV"
            },
            {
                id: "LV-076",
                name: "Rauna",
                countryId: "LV"
            },
            {
                id: "LV-077",
                name: "Rezekne",
                countryId: "LV"
            },
            {
                id: "LV-078",
                name: "Riebiņi",
                countryId: "LV"
            },
            {
                id: "LV-079",
                name: "Roja",
                countryId: "LV"
            },
            {
                id: "LV-080",
                name: "Ropaži",
                countryId: "LV"
            },
            {
                id: "LV-081",
                name: "Rucava",
                countryId: "LV"
            },
            {
                id: "LV-082",
                name: "Rugaji",
                countryId: "LV"
            },
            {
                id: "LV-083",
                name: "Rundale",
                countryId: "LV"
            },
            {
                id: "LV-084",
                name: "Rūjiena",
                countryId: "LV"
            },
            {
                id: "LV-085",
                name: "Sala",
                countryId: "LV"
            },
            {
                id: "LV-086",
                name: "Salacgriva",
                countryId: "LV"
            },
            {
                id: "LV-087",
                name: "Salaspils",
                countryId: "LV"
            },
            {
                id: "LV-088",
                name: "Saldus",
                countryId: "LV"
            },
            {
                id: "LV-089",
                name: "Saulkrasti",
                countryId: "LV"
            },
            {
                id: "LV-090",
                name: "Seja",
                countryId: "LV"
            },
            {
                id: "LV-091",
                name: "Sigulda",
                countryId: "LV"
            },
            {
                id: "LV-092",
                name: "Skriveri",
                countryId: "LV"
            },
            {
                id: "LV-093",
                name: "Skrunda",
                countryId: "LV"
            },
            {
                id: "LV-094",
                name: "Smiltene",
                countryId: "LV"
            },
            {
                id: "LV-095",
                name: "Stopini",
                countryId: "LV"
            },
            {
                id: "LV-096",
                name: "Strenci",
                countryId: "LV"
            },
            {
                id: "LV-097",
                name: "Talsi",
                countryId: "LV"
            },
            {
                id: "LV-098",
                name: "Tervete",
                countryId: "LV"
            },
            {
                id: "LV-099",
                name: "Tukums",
                countryId: "LV"
            },
            {
                id: "LV-100",
                name: "Vainode",
                countryId: "LV"
            },
            {
                id: "LV-101",
                name: "Valka",
                countryId: "LV"
            },
            {
                id: "LV-102",
                name: "Varakļāni",
                countryId: "LV"
            },
            {
                id: "LV-103",
                name: "Vārkava",
                countryId: "LV"
            },
            {
                id: "LV-104",
                name: "Vecpiebalga",
                countryId: "LV"
            },
            {
                id: "LV-105",
                name: "Vecumnieki",
                countryId: "LV"
            },
            {
                id: "LV-106",
                name: "Ventspils",
                countryId: "LV"
            },
            {
                id: "LV-107",
                name: "Viesite",
                countryId: "LV"
            },
            {
                id: "LV-108",
                name: "Viļaka",
                countryId: "LV"
            },
            {
                id: "LV-109",
                name: "Vilani",
                countryId: "LV"
            },
            {
                id: "LV-110",
                name: "Zilupe",
                countryId: "LV"
            },
            {
                id: "LV-DGV",
                name: "Daugavpils (Ciudad)",
                countryId: "LV"
            },
            {
                id: "LV-JEL",
                name: "Jelgava (Ciudad)",
                countryId: "LV"
            },
            {
                id: "LV-JKB",
                name: "Jekabpils (Ciudad)",
                countryId: "LV"
            },
            {
                id: "LV-JUR",
                name: "Jurmala (Ciudad)",
                countryId: "LV"
            },
            {
                id: "LV-LPX",
                name: "Liepaja",
                countryId: "LV"
            },
            {
                id: "LV-REZ",
                name: "Rezekne (Ciudad)",
                countryId: "LV"
            },
            {
                id: "LV-RIX",
                name: "Riga",
                countryId: "LV"
            },
            {
                id: "LV-VEN",
                name: "Ventspils (Ciudad)",
                countryId: "LV"
            },
            {
                id: "LV-VMR",
                name: "Valmiera",
                countryId: "LV"
            },
            {
                id: "LY-BA",
                name: "Bengasi",
                countryId: "LY"
            },
            {
                id: "LY-BU",
                name: "Butnan",
                countryId: "LY"
            },
            {
                id: "LY-DR",
                name: "Darnah",
                countryId: "LY"
            },
            {
                id: "LY-GT",
                name: "Ghat",
                countryId: "LY"
            },
            {
                id: "LY-JA",
                name: "Jabal Al Akhdar",
                countryId: "LY"
            },
            {
                id: "LY-JG",
                name: "Jabal Al Gharbi",
                countryId: "LY"
            },
            {
                id: "LY-JI",
                name: "Aljafarah",
                countryId: "LY"
            },
            {
                id: "LY-JU",
                name: "Jufrah",
                countryId: "LY"
            },
            {
                id: "LY-KF",
                name: "Kufrah",
                countryId: "LY"
            },
            {
                id: "LY-MB",
                name: "Murqub",
                countryId: "LY"
            },
            {
                id: "LY-MI",
                name: "Misrata",
                countryId: "LY"
            },
            {
                id: "LY-MJ",
                name: "Marj",
                countryId: "LY"
            },
            {
                id: "LY-MQ",
                name: "Murzuq",
                countryId: "LY"
            },
            {
                id: "LY-NL",
                name: "Nalut",
                countryId: "LY"
            },
            {
                id: "LY-NQ",
                name: "Nuqat Al Khams",
                countryId: "LY"
            },
            {
                id: "LY-SB",
                name: "Sabha",
                countryId: "LY"
            },
            {
                id: "LY-SR",
                name: "Sirte",
                countryId: "LY"
            },
            {
                id: "LY-TB",
                name: "Trípoli",
                countryId: "LY"
            },
            {
                id: "LY-WA",
                name: "Al Wahat",
                countryId: "LY"
            },
            {
                id: "LY-WD",
                name: "Wadi Al Hayaa",
                countryId: "LY"
            },
            {
                id: "LY-WS",
                name: "Wadi Al Shatii",
                countryId: "LY"
            },
            {
                id: "LY-ZA",
                name: "Zawiya",
                countryId: "LY"
            },
            {
                id: "MA-01",
                name: "Tánger-Tetuán, Alhucemas",
                countryId: "MA"
            },
            {
                id: "MA-02",
                name: "El Oriental",
                countryId: "MA"
            },
            {
                id: "MA-03",
                name: "Fez-Meknes",
                countryId: "MA"
            },
            {
                id: "MA-04",
                name: "Kenitra-Rabat-Sale",
                countryId: "MA"
            },
            {
                id: "MA-05",
                name: "Beni Mellal-Khénifra",
                countryId: "MA"
            },
            {
                id: "MA-06",
                name: "Casablanca-Settat",
                countryId: "MA"
            },
            {
                id: "MA-07",
                name: "Marrakech-Safi",
                countryId: "MA"
            },
            {
                id: "MA-08",
                name: "Draa-Tafilalet",
                countryId: "MA"
            },
            {
                id: "MA-09",
                name: "Souss-Massa",
                countryId: "MA"
            },
            {
                id: "MA-10",
                name: "Guelmim-Oued",
                countryId: "MA"
            },
            {
                id: "MA-11",
                name: "El Aaiún-Sakia El Hamra",
                countryId: "MA"
            },
            {
                id: "MA-12",
                name: "Dakhla Oued Ed-Dahab",
                countryId: "MA"
            },
            {
                id: "MC-CL",
                name: "Pegamento",
                countryId: "MC"
            },
            {
                id: "MC-CO",
                name: "Condamine",
                countryId: "MC"
            },
            {
                id: "MC-FO",
                name: "Fontvieille",
                countryId: "MC"
            },
            {
                id: "MC-GA",
                name: "Estación",
                countryId: "MC"
            },
            {
                id: "MC-JE",
                name: "Exótico Jardín",
                countryId: "MC"
            },
            {
                id: "MC-LA",
                name: "Larvotto",
                countryId: "MC"
            },
            {
                id: "MC-MA",
                name: "Malbousquet",
                countryId: "MC"
            },
            {
                id: "MC-MC",
                name: "Monte Carlo",
                countryId: "MC"
            },
            {
                id: "MC-MG",
                name: "Moneghetti",
                countryId: "MC"
            },
            {
                id: "MC-MO",
                name: "Monaco-Ville",
                countryId: "MC"
            },
            {
                id: "MC-MU",
                name: "Moulins",
                countryId: "MC"
            },
            {
                id: "MC-PH",
                name: "Puerto Hércules",
                countryId: "MC"
            },
            {
                id: "MC-SD",
                name: "Santa Devota",
                countryId: "MC"
            },
            {
                id: "MC-SO",
                name: "Fuente",
                countryId: "MC"
            },
            {
                id: "MC-SP",
                name: "Spélugues",
                countryId: "MC"
            },
            {
                id: "MC-SR",
                name: "Saint-Roman",
                countryId: "MC"
            },
            {
                id: "MC-VR",
                name: "Vallon De La Rousse",
                countryId: "MC"
            },
            {
                id: "MD-AN",
                name: "Aenii Noviembre",
                countryId: "MD"
            },
            {
                id: "MD-BA",
                name: "Balti",
                countryId: "MD"
            },
            {
                id: "MD-BD",
                name: "Juerga",
                countryId: "MD"
            },
            {
                id: "MD-BR",
                name: "Briceni",
                countryId: "MD"
            },
            {
                id: "MD-BS",
                name: "Basarabeasca",
                countryId: "MD"
            },
            {
                id: "MD-CA",
                name: "Cahul",
                countryId: "MD"
            },
            {
                id: "MD-CL",
                name: "Calarasi",
                countryId: "MD"
            },
            {
                id: "MD-CM",
                name: "Cimişlia",
                countryId: "MD"
            },
            {
                id: "MD-CR",
                name: "Criuleni",
                countryId: "MD"
            },
            {
                id: "MD-CS",
                name: "Causeni",
                countryId: "MD"
            },
            {
                id: "MD-CT",
                name: "Cantemir",
                countryId: "MD"
            },
            {
                id: "MD-CU",
                name: "Kishinev",
                countryId: "MD"
            },
            {
                id: "MD-DO",
                name: "Donduşeni",
                countryId: "MD"
            },
            {
                id: "MD-DR",
                name: "Drochia",
                countryId: "MD"
            },
            {
                id: "MD-DU",
                name: "Dubăsari",
                countryId: "MD"
            },
            {
                id: "MD-ED",
                name: "Edineţ",
                countryId: "MD"
            },
            {
                id: "MD-FA",
                name: "Falesti",
                countryId: "MD"
            },
            {
                id: "MD-FL",
                name: "Floreşti",
                countryId: "MD"
            },
            {
                id: "MD-GA",
                name: "Gagauzia",
                countryId: "MD"
            },
            {
                id: "MD-GL",
                name: "Glodeni",
                countryId: "MD"
            },
            {
                id: "MD-HI",
                name: "Hincesti",
                countryId: "MD"
            },
            {
                id: "MD-IA",
                name: "Ialoveni",
                countryId: "MD"
            },
            {
                id: "MD-LE",
                name: "Leova",
                countryId: "MD"
            },
            {
                id: "MD-NI",
                name: "Nisporeni",
                countryId: "MD"
            },
            {
                id: "MD-OC",
                name: "Ocniţa",
                countryId: "MD"
            },
            {
                id: "MD-OR",
                name: "Orhei",
                countryId: "MD"
            },
            {
                id: "MD-RE",
                name: "Rezina",
                countryId: "MD"
            },
            {
                id: "MD-RI",
                name: "Rîşcani",
                countryId: "MD"
            },
            {
                id: "MD-SD",
                name: "Soldanesti",
                countryId: "MD"
            },
            {
                id: "MD-SI",
                name: "Singerei",
                countryId: "MD"
            },
            {
                id: "MD-SN",
                name: "Transnistria",
                countryId: "MD"
            },
            {
                id: "MD-SO",
                name: "Soroca",
                countryId: "MD"
            },
            {
                id: "MD-ST",
                name: "Straseni",
                countryId: "MD"
            },
            {
                id: "MD-SV",
                name: "Stefan Voda",
                countryId: "MD"
            },
            {
                id: "MD-TA",
                name: "Taraclia",
                countryId: "MD"
            },
            {
                id: "MD-TE",
                name: "Telenesti",
                countryId: "MD"
            },
            {
                id: "MD-UN",
                name: "Ungheni",
                countryId: "MD"
            },
            {
                id: "ME-01",
                name: "Andrijevica",
                countryId: "ME"
            },
            {
                id: "ME-02",
                name: "Bar",
                countryId: "ME"
            },
            {
                id: "ME-03",
                name: "Beranes",
                countryId: "ME"
            },
            {
                id: "ME-04",
                name: "Bijelo Polje",
                countryId: "ME"
            },
            {
                id: "ME-05",
                name: "Budva",
                countryId: "ME"
            },
            {
                id: "ME-06",
                name: "Cetinje",
                countryId: "ME"
            },
            {
                id: "ME-07",
                name: "Danilovgrad",
                countryId: "ME"
            },
            {
                id: "ME-08",
                name: "Herceg Novi",
                countryId: "ME"
            },
            {
                id: "ME-09",
                name: "Kolasin",
                countryId: "ME"
            },
            {
                id: "ME-10",
                name: "Kotor",
                countryId: "ME"
            },
            {
                id: "ME-11",
                name: "Mojkovac",
                countryId: "ME"
            },
            {
                id: "ME-12",
                name: "Niksic",
                countryId: "ME"
            },
            {
                id: "ME-13",
                name: "Plav",
                countryId: "ME"
            },
            {
                id: "ME-14",
                name: "Plužine",
                countryId: "ME"
            },
            {
                id: "ME-15",
                name: "Pljevlja",
                countryId: "ME"
            },
            {
                id: "ME-16",
                name: "Podgorica",
                countryId: "ME"
            },
            {
                id: "ME-17",
                name: "Rožaje",
                countryId: "ME"
            },
            {
                id: "ME-18",
                name: "Šavnik",
                countryId: "ME"
            },
            {
                id: "ME-19",
                name: "Tivat",
                countryId: "ME"
            },
            {
                id: "ME-20",
                name: "Ulcinj",
                countryId: "ME"
            },
            {
                id: "ME-21",
                name: "Žabljak",
                countryId: "ME"
            },
            {
                id: "ME-22",
                name: "Gusinje",
                countryId: "ME"
            },
            {
                id: "ME-23",
                name: "Pétnica",
                countryId: "ME"
            },
            {
                id: "MF-0",
                name: "San Martín",
                countryId: "MF"
            },
            {
                id: "MG-A",
                name: "Toamasina",
                countryId: "MG"
            },
            {
                id: "MG-D",
                name: "Antsiranana",
                countryId: "MG"
            },
            {
                id: "MG-F",
                name: "Fianarantsoa",
                countryId: "MG"
            },
            {
                id: "MG-M",
                name: "Mahajanga",
                countryId: "MG"
            },
            {
                id: "MG-T",
                name: "Antananarivo",
                countryId: "MG"
            },
            {
                id: "MG-U",
                name: "Toliara",
                countryId: "MG"
            },
            {
                id: "MH-ALK",
                name: "Ailuk",
                countryId: "MH"
            },
            {
                id: "MH-ALL",
                name: "Ailinglaplap",
                countryId: "MH"
            },
            {
                id: "MH-ARN",
                name: "Arno",
                countryId: "MH"
            },
            {
                id: "MH-AUR",
                name: "Aur",
                countryId: "MH"
            },
            {
                id: "MH-EBO",
                name: "De Ébano",
                countryId: "MH"
            },
            {
                id: "MH-JAB",
                name: "Jabat",
                countryId: "MH"
            },
            {
                id: "MH-JAL",
                name: "Jaluit",
                countryId: "MH"
            },
            {
                id: "MH-KIL",
                name: "Bikini Y Kili",
                countryId: "MH"
            },
            {
                id: "MH-KWA",
                name: "Kwajalein",
                countryId: "MH"
            },
            {
                id: "MH-LAE",
                name: "Lae",
                countryId: "MH"
            },
            {
                id: "MH-LIB",
                name: "Lib",
                countryId: "MH"
            },
            {
                id: "MH-LIK",
                name: "Likiep",
                countryId: "MH"
            },
            {
                id: "MH-MAJ",
                name: "Majuro",
                countryId: "MH"
            },
            {
                id: "MH-MAL",
                name: "Maloelap",
                countryId: "MH"
            },
            {
                id: "MH-MEJ",
                name: "Mejit",
                countryId: "MH"
            },
            {
                id: "MH-NMK",
                name: "Namdrik",
                countryId: "MH"
            },
            {
                id: "MH-NMU",
                name: "Namu",
                countryId: "MH"
            },
            {
                id: "MH-RON",
                name: "Rongelap",
                countryId: "MH"
            },
            {
                id: "MH-UJA",
                name: "Ujae",
                countryId: "MH"
            },
            {
                id: "MH-UTI",
                name: "Utrik",
                countryId: "MH"
            },
            {
                id: "MH-WTH",
                name: "Wotho",
                countryId: "MH"
            },
            {
                id: "MH-WTJ",
                name: "Wotje",
                countryId: "MH"
            },
            {
                id: "MK-02",
                name: "Aračinovo",
                countryId: "MK"
            },
            {
                id: "MK-03",
                name: "Berovo",
                countryId: "MK"
            },
            {
                id: "MK-04",
                name: "Bitola",
                countryId: "MK"
            },
            {
                id: "MK-05",
                name: "Bogdanci",
                countryId: "MK"
            },
            {
                id: "MK-06",
                name: "Bogovinje",
                countryId: "MK"
            },
            {
                id: "MK-07",
                name: "Bosilovo",
                countryId: "MK"
            },
            {
                id: "MK-08",
                name: "Brvenica",
                countryId: "MK"
            },
            {
                id: "MK-10",
                name: "Valandovo",
                countryId: "MK"
            },
            {
                id: "MK-11",
                name: "Vasilevo",
                countryId: "MK"
            },
            {
                id: "MK-12",
                name: "Vevčani",
                countryId: "MK"
            },
            {
                id: "MK-13",
                name: "Veles",
                countryId: "MK"
            },
            {
                id: "MK-14",
                name: "Vinica",
                countryId: "MK"
            },
            {
                id: "MK-16",
                name: "Vrapciste",
                countryId: "MK"
            },
            {
                id: "MK-18",
                name: "Gevgelija",
                countryId: "MK"
            },
            {
                id: "MK-19",
                name: "Gostivar",
                countryId: "MK"
            },
            {
                id: "MK-20",
                name: "Gradsko",
                countryId: "MK"
            },
            {
                id: "MK-21",
                name: "Vedar",
                countryId: "MK"
            },
            {
                id: "MK-22",
                name: "Debarca",
                countryId: "MK"
            },
            {
                id: "MK-23",
                name: "Delcevo",
                countryId: "MK"
            },
            {
                id: "MK-24",
                name: "Demir Kapija",
                countryId: "MK"
            },
            {
                id: "MK-25",
                name: "Demir Hisar",
                countryId: "MK"
            },
            {
                id: "MK-26",
                name: "Doran",
                countryId: "MK"
            },
            {
                id: "MK-27",
                name: "Dolneni",
                countryId: "MK"
            },
            {
                id: "MK-30",
                name: "Zelino",
                countryId: "MK"
            },
            {
                id: "MK-32",
                name: "Zelenikovo",
                countryId: "MK"
            },
            {
                id: "MK-33",
                name: "Zrnovci",
                countryId: "MK"
            },
            {
                id: "MK-34",
                name: "Ilinden",
                countryId: "MK"
            },
            {
                id: "MK-35",
                name: "Jegunovce",
                countryId: "MK"
            },
            {
                id: "MK-36",
                name: "Kavadarci",
                countryId: "MK"
            },
            {
                id: "MK-37",
                name: "Karbinci",
                countryId: "MK"
            },
            {
                id: "MK-40",
                name: "Kičevo",
                countryId: "MK"
            },
            {
                id: "MK-41",
                name: "Konce",
                countryId: "MK"
            },
            {
                id: "MK-42",
                name: "Kočani",
                countryId: "MK"
            },
            {
                id: "MK-43",
                name: "Kratovo",
                countryId: "MK"
            },
            {
                id: "MK-44",
                name: "Kriva Palanka",
                countryId: "MK"
            },
            {
                id: "MK-45",
                name: "Krivogaštani",
                countryId: "MK"
            },
            {
                id: "MK-46",
                name: "Kruševo",
                countryId: "MK"
            },
            {
                id: "MK-47",
                name: "Kumanovo",
                countryId: "MK"
            },
            {
                id: "MK-48",
                name: "Lipkovo",
                countryId: "MK"
            },
            {
                id: "MK-49",
                name: "Lozovo",
                countryId: "MK"
            },
            {
                id: "MK-50",
                name: "Mavrovo I Rostusa",
                countryId: "MK"
            },
            {
                id: "MK-51",
                name: "Makedonska Kamenica",
                countryId: "MK"
            },
            {
                id: "MK-52",
                name: "Makedonski Brod",
                countryId: "MK"
            },
            {
                id: "MK-53",
                name: "Mogila",
                countryId: "MK"
            },
            {
                id: "MK-54",
                name: "Negotino",
                countryId: "MK"
            },
            {
                id: "MK-55",
                name: "Novaci",
                countryId: "MK"
            },
            {
                id: "MK-56",
                name: "Novo Selo",
                countryId: "MK"
            },
            {
                id: "MK-58",
                name: "Ohrid",
                countryId: "MK"
            },
            {
                id: "MK-59",
                name: "Petrovec",
                countryId: "MK"
            },
            {
                id: "MK-60",
                name: "Pehčevo",
                countryId: "MK"
            },
            {
                id: "MK-61",
                name: "Plasnica",
                countryId: "MK"
            },
            {
                id: "MK-62",
                name: "Prilep",
                countryId: "MK"
            },
            {
                id: "MK-63",
                name: "Probištip",
                countryId: "MK"
            },
            {
                id: "MK-64",
                name: "Radoviš",
                countryId: "MK"
            },
            {
                id: "MK-65",
                name: "Rankovce",
                countryId: "MK"
            },
            {
                id: "MK-66",
                name: "Resén",
                countryId: "MK"
            },
            {
                id: "MK-67",
                name: "Rosoman",
                countryId: "MK"
            },
            {
                id: "MK-69",
                name: "Sveti Nikole",
                countryId: "MK"
            },
            {
                id: "MK-70",
                name: "Sopište",
                countryId: "MK"
            },
            {
                id: "MK-71",
                name: "Staro Nagoričane",
                countryId: "MK"
            },
            {
                id: "MK-72",
                name: "Struga",
                countryId: "MK"
            },
            {
                id: "MK-73",
                name: "Strumica",
                countryId: "MK"
            },
            {
                id: "MK-74",
                name: "Studeničani",
                countryId: "MK"
            },
            {
                id: "MK-75",
                name: "Tearce",
                countryId: "MK"
            },
            {
                id: "MK-76",
                name: "Tetovo",
                countryId: "MK"
            },
            {
                id: "MK-78",
                name: "Centar Župa",
                countryId: "MK"
            },
            {
                id: "MK-80",
                name: "Caska",
                countryId: "MK"
            },
            {
                id: "MK-81",
                name: "Cesinovo-Obleševo",
                countryId: "MK"
            },
            {
                id: "MK-82",
                name: "Čučer Sandevo",
                countryId: "MK"
            },
            {
                id: "MK-83",
                name: "Štip",
                countryId: "MK"
            },
            {
                id: "MK-85",
                name: "Skopje",
                countryId: "MK"
            },
            {
                id: "ML-1",
                name: "Kayes",
                countryId: "ML"
            },
            {
                id: "ML-2",
                name: "Koulikoro",
                countryId: "ML"
            },
            {
                id: "ML-3",
                name: "Sikasso",
                countryId: "ML"
            },
            {
                id: "ML-4",
                name: "Segou",
                countryId: "ML"
            },
            {
                id: "ML-5",
                name: "Mopti",
                countryId: "ML"
            },
            {
                id: "ML-6",
                name: "Tombuctú",
                countryId: "ML"
            },
            {
                id: "ML-7",
                name: "Gao",
                countryId: "ML"
            },
            {
                id: "ML-8",
                name: "Kidal",
                countryId: "ML"
            },
            {
                id: "ML-BKO",
                name: "Bamako",
                countryId: "ML"
            },
            {
                id: "MM-01",
                name: "Sagaing",
                countryId: "MM"
            },
            {
                id: "MM-02",
                name: "Bago",
                countryId: "MM"
            },
            {
                id: "MM-03",
                name: "Magway",
                countryId: "MM"
            },
            {
                id: "MM-04",
                name: "Mandalay",
                countryId: "MM"
            },
            {
                id: "MM-05",
                name: "Tanintharyi",
                countryId: "MM"
            },
            {
                id: "MM-06",
                name: "Yangon",
                countryId: "MM"
            },
            {
                id: "MM-07",
                name: "Ayeyarwady",
                countryId: "MM"
            },
            {
                id: "MM-11",
                name: "Kachin",
                countryId: "MM"
            },
            {
                id: "MM-12",
                name: "Kayah",
                countryId: "MM"
            },
            {
                id: "MM-13",
                name: "Kayin",
                countryId: "MM"
            },
            {
                id: "MM-14",
                name: "Barbilla",
                countryId: "MM"
            },
            {
                id: "MM-15",
                name: "Lun",
                countryId: "MM"
            },
            {
                id: "MM-16",
                name: "Rakhine",
                countryId: "MM"
            },
            {
                id: "MM-17",
                name: "Shan",
                countryId: "MM"
            },
            {
                id: "MM-18",
                name: "Nay Pyi Taw",
                countryId: "MM"
            },
            {
                id: "MN-037",
                name: "Darhan",
                countryId: "MN"
            },
            {
                id: "MN-041",
                name: "Hovsgol",
                countryId: "MN"
            },
            {
                id: "MN-043",
                name: "Hovd",
                countryId: "MN"
            },
            {
                id: "MN-046",
                name: "Uvs",
                countryId: "MN"
            },
            {
                id: "MN-047",
                name: "Tov",
                countryId: "MN"
            },
            {
                id: "MN-049",
                name: "Selenge",
                countryId: "MN"
            },
            {
                id: "MN-051",
                name: "Suhbaatar",
                countryId: "MN"
            },
            {
                id: "MN-053",
                name: "Omnogovi",
                countryId: "MN"
            },
            {
                id: "MN-055",
                name: "Ovorhangay",
                countryId: "MN"
            },
            {
                id: "MN-057",
                name: "Dzavhan",
                countryId: "MN"
            },
            {
                id: "MN-059",
                name: "Dundgovi",
                countryId: "MN"
            },
            {
                id: "MN-061",
                name: "Dornod",
                countryId: "MN"
            },
            {
                id: "MN-063",
                name: "Dornogovi",
                countryId: "MN"
            },
            {
                id: "MN-064",
                name: "Govi-Sumber",
                countryId: "MN"
            },
            {
                id: "MN-065",
                name: "Govi-Altay",
                countryId: "MN"
            },
            {
                id: "MN-067",
                name: "Bulgan",
                countryId: "MN"
            },
            {
                id: "MN-069",
                name: "Bayanhongor",
                countryId: "MN"
            },
            {
                id: "MN-071",
                name: "Bayan-Olgiy",
                countryId: "MN"
            },
            {
                id: "MN-073",
                name: "Arhangay",
                countryId: "MN"
            },
            {
                id: "MN-1",
                name: "Ulaanbaatar",
                countryId: "MN"
            },
            {
                id: "MO-MO",
                name: "Macao",
                countryId: "MO"
            },
            {
                id: "MP-0",
                name: "Islas Del Norte",
                countryId: "MP"
            },
            {
                id: "MP-1",
                name: "Lista",
                countryId: "MP"
            },
            {
                id: "MP-2",
                name: "Saipan",
                countryId: "MP"
            },
            {
                id: "MP-3",
                name: "Tinian",
                countryId: "MP"
            },
            {
                id: "MQ-MQ",
                name: "Martinica",
                countryId: "MQ"
            },
            {
                id: "MR-01",
                name: "Hodh Chargui",
                countryId: "MR"
            },
            {
                id: "MR-02",
                name: "Hodh El Gharbi",
                countryId: "MR"
            },
            {
                id: "MR-03",
                name: "Assaba",
                countryId: "MR"
            },
            {
                id: "MR-04",
                name: "Gorgol",
                countryId: "MR"
            },
            {
                id: "MR-05",
                name: "Brakna",
                countryId: "MR"
            },
            {
                id: "MR-06",
                name: "Trarza",
                countryId: "MR"
            },
            {
                id: "MR-07",
                name: "Adrar",
                countryId: "MR"
            },
            {
                id: "MR-08",
                name: "Dakhlet Nouadhibou",
                countryId: "MR"
            },
            {
                id: "MR-09",
                name: "Tagant",
                countryId: "MR"
            },
            {
                id: "MR-10",
                name: "Guidimaka",
                countryId: "MR"
            },
            {
                id: "MR-11",
                name: "Tiris Zemmour",
                countryId: "MR"
            },
            {
                id: "MR-12",
                name: "Inchiri",
                countryId: "MR"
            },
            {
                id: "MR-13",
                name: "Nouakchott West",
                countryId: "MR"
            },
            {
                id: "MR-14",
                name: "Nouakchott Norte",
                countryId: "MR"
            },
            {
                id: "MR-15",
                name: "Nouakchott Sur",
                countryId: "MR"
            },
            {
                id: "MS-0",
                name: "San Antonio",
                countryId: "MS"
            },
            {
                id: "MS-1",
                name: "Saint Georges",
                countryId: "MS"
            },
            {
                id: "MS-2",
                name: "San Pedro",
                countryId: "MS"
            },
            {
                id: "MT-01",
                name: "Attard",
                countryId: "MT"
            },
            {
                id: "MT-02",
                name: "Balzan",
                countryId: "MT"
            },
            {
                id: "MT-03",
                name: "Birgu",
                countryId: "MT"
            },
            {
                id: "MT-04",
                name: "Birkirkara",
                countryId: "MT"
            },
            {
                id: "MT-05",
                name: "Birżebbuġa",
                countryId: "MT"
            },
            {
                id: "MT-06",
                name: "Cospicua",
                countryId: "MT"
            },
            {
                id: "MT-07",
                name: "Dingli",
                countryId: "MT"
            },
            {
                id: "MT-08",
                name: "Fgura",
                countryId: "MT"
            },
            {
                id: "MT-09",
                name: "Floriana",
                countryId: "MT"
            },
            {
                id: "MT-10",
                name: "Fontana",
                countryId: "MT"
            },
            {
                id: "MT-11",
                name: "Judá",
                countryId: "MT"
            },
            {
                id: "MT-12",
                name: "Gzira",
                countryId: "MT"
            },
            {
                id: "MT-13",
                name: "Ghajnsielem",
                countryId: "MT"
            },
            {
                id: "MT-14",
                name: "Gharb",
                countryId: "MT"
            },
            {
                id: "MT-15",
                name: "Gharghur",
                countryId: "MT"
            },
            {
                id: "MT-16",
                name: "Ghasri",
                countryId: "MT"
            },
            {
                id: "MT-17",
                name: "Ghaxaq",
                countryId: "MT"
            },
            {
                id: "MT-18",
                name: "Hamrun",
                countryId: "MT"
            },
            {
                id: "MT-19",
                name: "Iklin",
                countryId: "MT"
            },
            {
                id: "MT-20",
                name: "Isla",
                countryId: "MT"
            },
            {
                id: "MT-21",
                name: "Kalkara",
                countryId: "MT"
            },
            {
                id: "MT-22",
                name: "Kercem",
                countryId: "MT"
            },
            {
                id: "MT-23",
                name: "Kirkop",
                countryId: "MT"
            },
            {
                id: "MT-24",
                name: "Lija",
                countryId: "MT"
            },
            {
                id: "MT-25",
                name: "Lucas",
                countryId: "MT"
            },
            {
                id: "MT-26",
                name: "Marsa",
                countryId: "MT"
            },
            {
                id: "MT-27",
                name: "Marsascala",
                countryId: "MT"
            },
            {
                id: "MT-28",
                name: "Marsaxlokk",
                countryId: "MT"
            },
            {
                id: "MT-29",
                name: "Mdina",
                countryId: "MT"
            },
            {
                id: "MT-30",
                name: "Mellieha",
                countryId: "MT"
            },
            {
                id: "MT-31",
                name: "Mġarr",
                countryId: "MT"
            },
            {
                id: "MT-32",
                name: "Mosta",
                countryId: "MT"
            },
            {
                id: "MT-33",
                name: "Mqabba",
                countryId: "MT"
            },
            {
                id: "MT-34",
                name: "Msida",
                countryId: "MT"
            },
            {
                id: "MT-35",
                name: "Mtarfa",
                countryId: "MT"
            },
            {
                id: "MT-36",
                name: "Munxar",
                countryId: "MT"
            },
            {
                id: "MT-37",
                name: "Nadur",
                countryId: "MT"
            },
            {
                id: "MT-38",
                name: "Naxxar",
                countryId: "MT"
            },
            {
                id: "MT-39",
                name: "Paola",
                countryId: "MT"
            },
            {
                id: "MT-40",
                name: "Pembroke",
                countryId: "MT"
            },
            {
                id: "MT-41",
                name: "Piedad",
                countryId: "MT"
            },
            {
                id: "MT-42",
                name: "Qala",
                countryId: "MT"
            },
            {
                id: "MT-43",
                name: "Qormi",
                countryId: "MT"
            },
            {
                id: "MT-44",
                name: "Qrendi",
                countryId: "MT"
            },
            {
                id: "MT-45",
                name: "Victoria",
                countryId: "MT"
            },
            {
                id: "MT-46",
                name: "Rabat Malta",
                countryId: "MT"
            },
            {
                id: "MT-47",
                name: "Safi",
                countryId: "MT"
            },
            {
                id: "MT-48",
                name: "St. Julians",
                countryId: "MT"
            },
            {
                id: "MT-49",
                name: "San Juan",
                countryId: "MT"
            },
            {
                id: "MT-50",
                name: "San Lorenzo",
                countryId: "MT"
            },
            {
                id: "MT-51",
                name: "Bahía De St. Paul",
                countryId: "MT"
            },
            {
                id: "MT-52",
                name: "Sannat",
                countryId: "MT"
            },
            {
                id: "MT-53",
                name: "Santa Lucía",
                countryId: "MT"
            },
            {
                id: "MT-54",
                name: "Venera",
                countryId: "MT"
            },
            {
                id: "MT-55",
                name: "Siggiewi",
                countryId: "MT"
            },
            {
                id: "MT-56",
                name: "Sliema",
                countryId: "MT"
            },
            {
                id: "MT-57",
                name: "Swieqi",
                countryId: "MT"
            },
            {
                id: "MT-58",
                name: "Tai Xbiex",
                countryId: "MT"
            },
            {
                id: "MT-59",
                name: "Tarzien",
                countryId: "MT"
            },
            {
                id: "MT-60",
                name: "Valletta",
                countryId: "MT"
            },
            {
                id: "MT-61",
                name: "Xaghra",
                countryId: "MT"
            },
            {
                id: "MT-62",
                name: "Xewkija",
                countryId: "MT"
            },
            {
                id: "MT-63",
                name: "Xghajra",
                countryId: "MT"
            },
            {
                id: "MT-64",
                name: "Żabbar",
                countryId: "MT"
            },
            {
                id: "MT-65",
                name: "Ghawde",
                countryId: "MT"
            },
            {
                id: "MT-66",
                name: "Żebbuġ ",
                countryId: "MT"
            },
            {
                id: "MT-67",
                name: "Zejtun",
                countryId: "MT"
            },
            {
                id: "MT-68",
                name: "Zurrieq",
                countryId: "MT"
            },
            {
                id: "MU-AG",
                name: "Islas Agalega",
                countryId: "MU"
            },
            {
                id: "MU-BL",
                name: "Río Negro",
                countryId: "MU"
            },
            {
                id: "MU-BR",
                name: "Beau Bassin-Rose Hill",
                countryId: "MU"
            },
            {
                id: "MU-CC",
                name: "Islas Saint Brandon",
                countryId: "MU"
            },
            {
                id: "MU-CP",
                name: "Vacoas-Phoenix",
                countryId: "MU"
            },
            {
                id: "MU-CU",
                name: "Curepipe",
                countryId: "MU"
            },
            {
                id: "MU-FL",
                name: "Flacq",
                countryId: "MU"
            },
            {
                id: "MU-GP",
                name: "Grand Port",
                countryId: "MU"
            },
            {
                id: "MU-MO",
                name: "Moka",
                countryId: "MU"
            },
            {
                id: "MU-PA",
                name: "Pamplemousses",
                countryId: "MU"
            },
            {
                id: "MU-PL",
                name: "Port Louis",
                countryId: "MU"
            },
            {
                id: "MU-PU",
                name: "Port Louis (Ciudad)",
                countryId: "MU"
            },
            {
                id: "MU-PW",
                name: "Plaines Wilhems",
                countryId: "MU"
            },
            {
                id: "MU-RO",
                name: "Isla Rodrigues",
                countryId: "MU"
            },
            {
                id: "MU-RR",
                name: "Riviere Du Rempart",
                countryId: "MU"
            },
            {
                id: "MU-SA",
                name: "Savanne",
                countryId: "MU"
            },
            {
                id: "MV-00",
                name: "Alifu Dhaalu",
                countryId: "MV"
            },
            {
                id: "MV-01",
                name: "Seenu",
                countryId: "MV"
            },
            {
                id: "MV-02",
                name: "Alifu Alifu",
                countryId: "MV"
            },
            {
                id: "MV-03",
                name: "Lhaviyani",
                countryId: "MV"
            },
            {
                id: "MV-04",
                name: "Vaavu",
                countryId: "MV"
            },
            {
                id: "MV-05",
                name: "Laamu",
                countryId: "MV"
            },
            {
                id: "MV-07",
                name: "Haa Alifu",
                countryId: "MV"
            },
            {
                id: "MV-08",
                name: "Thaa",
                countryId: "MV"
            },
            {
                id: "MV-12",
                name: "Meemu",
                countryId: "MV"
            },
            {
                id: "MV-13",
                name: "Raa",
                countryId: "MV"
            },
            {
                id: "MV-14",
                name: "Faafu",
                countryId: "MV"
            },
            {
                id: "MV-17",
                name: "Dhaalu",
                countryId: "MV"
            },
            {
                id: "MV-20",
                name: "Balido",
                countryId: "MV"
            },
            {
                id: "MV-23",
                name: "Haa Dhaalu",
                countryId: "MV"
            },
            {
                id: "MV-24",
                name: "Shaviyani",
                countryId: "MV"
            },
            {
                id: "MV-25",
                name: "Noonu",
                countryId: "MV"
            },
            {
                id: "MV-26",
                name: "Kaafu",
                countryId: "MV"
            },
            {
                id: "MV-27",
                name: "Gaafu Alifu",
                countryId: "MV"
            },
            {
                id: "MV-28",
                name: "Gaafu Dhaalu",
                countryId: "MV"
            },
            {
                id: "MV-29",
                name: "Gnaviyani",
                countryId: "MV"
            },
            {
                id: "MV-MLE",
                name: "Masculino",
                countryId: "MV"
            },
            {
                id: "MW-BA",
                name: "Balaka",
                countryId: "MW"
            },
            {
                id: "MW-BL",
                name: "Blantyre",
                countryId: "MW"
            },
            {
                id: "MW-CK",
                name: "Chikwawa",
                countryId: "MW"
            },
            {
                id: "MW-CR",
                name: "Chiradzulu",
                countryId: "MW"
            },
            {
                id: "MW-CT",
                name: "Chitipa",
                countryId: "MW"
            },
            {
                id: "MW-DE",
                name: "Dedza",
                countryId: "MW"
            },
            {
                id: "MW-DO",
                name: "Dowa",
                countryId: "MW"
            },
            {
                id: "MW-KR",
                name: "Karonga",
                countryId: "MW"
            },
            {
                id: "MW-KS",
                name: "Kasungu",
                countryId: "MW"
            },
            {
                id: "MW-LI",
                name: "Lilongwe",
                countryId: "MW"
            },
            {
                id: "MW-LK",
                name: "Likoma",
                countryId: "MW"
            },
            {
                id: "MW-MC",
                name: "Mchinji",
                countryId: "MW"
            },
            {
                id: "MW-MG",
                name: "Mangochi",
                countryId: "MW"
            },
            {
                id: "MW-MH",
                name: "Machinga",
                countryId: "MW"
            },
            {
                id: "MW-MU",
                name: "Mulanje",
                countryId: "MW"
            },
            {
                id: "MW-MW",
                name: "Mwanza",
                countryId: "MW"
            },
            {
                id: "MW-MZ",
                name: "Mzimba",
                countryId: "MW"
            },
            {
                id: "MW-NB",
                name: "Nkhotakota",
                countryId: "MW"
            },
            {
                id: "MW-NE",
                name: "Nkhata Bay",
                countryId: "MW"
            },
            {
                id: "MW-NI",
                name: "Ntchisi",
                countryId: "MW"
            },
            {
                id: "MW-NS",
                name: "Nsanje",
                countryId: "MW"
            },
            {
                id: "MW-NU",
                name: "Ntcheu",
                countryId: "MW"
            },
            {
                id: "MW-PH",
                name: "Phalombe",
                countryId: "MW"
            },
            {
                id: "MW-RU",
                name: "Rumphi",
                countryId: "MW"
            },
            {
                id: "MW-SA",
                name: "Salima",
                countryId: "MW"
            },
            {
                id: "MW-TH",
                name: "Thyolo",
                countryId: "MW"
            },
            {
                id: "MW-ZO",
                name: "Zomba",
                countryId: "MW"
            },
            {
                id: "MX-AGU",
                name: "Aguascalientes",
                countryId: "MX"
            },
            {
                id: "MX-BCN",
                name: "Baja California",
                countryId: "MX"
            },
            {
                id: "MX-BCS",
                name: "Baja California Sur",
                countryId: "MX"
            },
            {
                id: "MX-CAM",
                name: "Campeche",
                countryId: "MX"
            },
            {
                id: "MX-CHH",
                name: "Chihuahua",
                countryId: "MX"
            },
            {
                id: "MX-CHP",
                name: "Chiapas",
                countryId: "MX"
            },
            {
                id: "MX-CMX",
                name: "Ciudad De México",
                countryId: "MX"
            },
            {
                id: "MX-COA",
                name: "Coahuila",
                countryId: "MX"
            },
            {
                id: "MX-COL",
                name: "Colima",
                countryId: "MX"
            },
            {
                id: "MX-DUR",
                name: "Durango",
                countryId: "MX"
            },
            {
                id: "MX-GRO",
                name: "Guerrero",
                countryId: "MX"
            },
            {
                id: "MX-GUA",
                name: "Guanajuato",
                countryId: "MX"
            },
            {
                id: "MX-HID",
                name: "Hidalgo",
                countryId: "MX"
            },
            {
                id: "MX-JAL",
                name: "Jalisco",
                countryId: "MX"
            },
            {
                id: "MX-MEX",
                name: "Estado De México",
                countryId: "MX"
            },
            {
                id: "MX-MIC",
                name: "Michoacán",
                countryId: "MX"
            },
            {
                id: "MX-MOR",
                name: "Morelos",
                countryId: "MX"
            },
            {
                id: "MX-NAY",
                name: "Nayarit",
                countryId: "MX"
            },
            {
                id: "MX-NLE",
                name: "Nuevo León",
                countryId: "MX"
            },
            {
                id: "MX-OAX",
                name: "Oaxaca",
                countryId: "MX"
            },
            {
                id: "MX-PUE",
                name: "Puebla",
                countryId: "MX"
            },
            {
                id: "MX-QUE",
                name: "Querétaro",
                countryId: "MX"
            },
            {
                id: "MX-ROO",
                name: "Quintana Roo",
                countryId: "MX"
            },
            {
                id: "MX-SIN",
                name: "Sinaloa",
                countryId: "MX"
            },
            {
                id: "MX-SLP",
                name: "San Luis Potosí",
                countryId: "MX"
            },
            {
                id: "MX-SON",
                name: "Sonora",
                countryId: "MX"
            },
            {
                id: "MX-TAB",
                name: "Tabasco",
                countryId: "MX"
            },
            {
                id: "MX-TAM",
                name: "Tamaulipas",
                countryId: "MX"
            },
            {
                id: "MX-TLA",
                name: "Tlaxcala",
                countryId: "MX"
            },
            {
                id: "MX-VER",
                name: "Veracruz",
                countryId: "MX"
            },
            {
                id: "MX-YUC",
                name: "Yucatán",
                countryId: "MX"
            },
            {
                id: "MX-ZAC",
                name: "Zacatecas",
                countryId: "MX"
            },
            {
                id: "MY-01",
                name: "Johor",
                countryId: "MY"
            },
            {
                id: "MY-02",
                name: "Kedah",
                countryId: "MY"
            },
            {
                id: "MY-03",
                name: "Kelantan",
                countryId: "MY"
            },
            {
                id: "MY-04",
                name: "Melaka",
                countryId: "MY"
            },
            {
                id: "MY-05",
                name: "Negeri Sembilan",
                countryId: "MY"
            },
            {
                id: "MY-06",
                name: "Pahang",
                countryId: "MY"
            },
            {
                id: "MY-07",
                name: "Penang",
                countryId: "MY"
            },
            {
                id: "MY-08",
                name: "Plata",
                countryId: "MY"
            },
            {
                id: "MY-09",
                name: "Perlis",
                countryId: "MY"
            },
            {
                id: "MY-10",
                name: "Selangor",
                countryId: "MY"
            },
            {
                id: "MY-11",
                name: "Terengganu",
                countryId: "MY"
            },
            {
                id: "MY-12",
                name: "Sabah",
                countryId: "MY"
            },
            {
                id: "MY-13",
                name: "Sarawak",
                countryId: "MY"
            },
            {
                id: "MY-14",
                name: "Kuala Lumpur",
                countryId: "MY"
            },
            {
                id: "MY-15",
                name: "Labuan",
                countryId: "MY"
            },
            {
                id: "MY-16",
                name: "Putrajaya",
                countryId: "MY"
            },
            {
                id: "MZ-A",
                name: "Niassa",
                countryId: "MZ"
            },
            {
                id: "MZ-B",
                name: "Manica",
                countryId: "MZ"
            },
            {
                id: "MZ-G",
                name: "Gaza",
                countryId: "MZ"
            },
            {
                id: "MZ-I",
                name: "Inhambane",
                countryId: "MZ"
            },
            {
                id: "MZ-L",
                name: "Maputo",
                countryId: "MZ"
            },
            {
                id: "MZ-MPM",
                name: "Maputo (Ciudad)",
                countryId: "MZ"
            },
            {
                id: "MZ-N",
                name: "Nampula",
                countryId: "MZ"
            },
            {
                id: "MZ-P",
                name: "Cabo Delgado",
                countryId: "MZ"
            },
            {
                id: "MZ-Q",
                name: "Zambezia",
                countryId: "MZ"
            },
            {
                id: "MZ-S",
                name: "Sofala",
                countryId: "MZ"
            },
            {
                id: "MZ-T",
                name: "Tete",
                countryId: "MZ"
            },
            {
                id: "NA-CA",
                name: "Zambezi",
                countryId: "NA"
            },
            {
                id: "NA-ER",
                name: "Erongo",
                countryId: "NA"
            },
            {
                id: "NA-HA",
                name: "Hardap",
                countryId: "NA"
            },
            {
                id: "NA-KA",
                name: "Karas",
                countryId: "NA"
            },
            {
                id: "NA-KE",
                name: "Este Kavango",
                countryId: "NA"
            },
            {
                id: "NA-KH",
                name: "Khomas",
                countryId: "NA"
            },
            {
                id: "NA-KU",
                name: "Kunene",
                countryId: "NA"
            },
            {
                id: "NA-KW",
                name: "Kavango West",
                countryId: "NA"
            },
            {
                id: "NA-OD",
                name: "Otjozondjupa",
                countryId: "NA"
            },
            {
                id: "NA-OH",
                name: "Omaheke",
                countryId: "NA"
            },
            {
                id: "NA-ON",
                name: "Oshana",
                countryId: "NA"
            },
            {
                id: "NA-OS",
                name: "Omusati",
                countryId: "NA"
            },
            {
                id: "NA-OT",
                name: "Oshikoto",
                countryId: "NA"
            },
            {
                id: "NA-OW",
                name: "Ohangwena",
                countryId: "NA"
            },
            {
                id: "NC-0",
                name: "Islas De La Lealtad",
                countryId: "NC"
            },
            {
                id: "NC-1",
                name: "Norte",
                countryId: "NC"
            },
            {
                id: "NC-2",
                name: "Sur",
                countryId: "NC"
            },
            {
                id: "NE-1",
                name: "Agadez",
                countryId: "NE"
            },
            {
                id: "NE-2",
                name: "Diffa",
                countryId: "NE"
            },
            {
                id: "NE-3",
                name: "Dosso",
                countryId: "NE"
            },
            {
                id: "NE-4",
                name: "Maradi",
                countryId: "NE"
            },
            {
                id: "NE-5",
                name: "Tahoua",
                countryId: "NE"
            },
            {
                id: "NE-6",
                name: "Tillabéri",
                countryId: "NE"
            },
            {
                id: "NE-7",
                name: "Zinder",
                countryId: "NE"
            },
            {
                id: "NE-8",
                name: "Niamey",
                countryId: "NE"
            },
            {
                id: "NF-0",
                name: "Isla Norfolk",
                countryId: "NF"
            },
            {
                id: "NG-AB",
                name: "Abia",
                countryId: "NG"
            },
            {
                id: "NG-AD",
                name: "Adamawa",
                countryId: "NG"
            },
            {
                id: "NG-AK",
                name: "Akwa Ibom",
                countryId: "NG"
            },
            {
                id: "NG-AN",
                name: "Anambra",
                countryId: "NG"
            },
            {
                id: "NG-BA",
                name: "Bauchi",
                countryId: "NG"
            },
            {
                id: "NG-BE",
                name: "Benue",
                countryId: "NG"
            },
            {
                id: "NG-BO",
                name: "Borno",
                countryId: "NG"
            },
            {
                id: "NG-BY",
                name: "Bayelsa",
                countryId: "NG"
            },
            {
                id: "NG-CR",
                name: "Cross River",
                countryId: "NG"
            },
            {
                id: "NG-DE",
                name: "Delta",
                countryId: "NG"
            },
            {
                id: "NG-EB",
                name: "Ebonyi",
                countryId: "NG"
            },
            {
                id: "NG-ED",
                name: "Edo",
                countryId: "NG"
            },
            {
                id: "NG-EK",
                name: "Ekiti",
                countryId: "NG"
            },
            {
                id: "NG-EN",
                name: "Enugu",
                countryId: "NG"
            },
            {
                id: "NG-FC",
                name: "Territorio Capital Federal Abuja",
                countryId: "NG"
            },
            {
                id: "NG-GO",
                name: "Gombe",
                countryId: "NG"
            },
            {
                id: "NG-IM",
                name: "Imo",
                countryId: "NG"
            },
            {
                id: "NG-JI",
                name: "Jigawa",
                countryId: "NG"
            },
            {
                id: "NG-KD",
                name: "Kaduna",
                countryId: "NG"
            },
            {
                id: "NG-KE",
                name: "Kebbi",
                countryId: "NG"
            },
            {
                id: "NG-KN",
                name: "Kano",
                countryId: "NG"
            },
            {
                id: "NG-KO",
                name: "Kogi",
                countryId: "NG"
            },
            {
                id: "NG-KT",
                name: "Katsina",
                countryId: "NG"
            },
            {
                id: "NG-KW",
                name: "Kwara",
                countryId: "NG"
            },
            {
                id: "NG-LA",
                name: "Lagos",
                countryId: "NG"
            },
            {
                id: "NG-NA",
                name: "Nassarawa",
                countryId: "NG"
            },
            {
                id: "NG-NI",
                name: "Níger",
                countryId: "NG"
            },
            {
                id: "NG-OG",
                name: "Ogun",
                countryId: "NG"
            },
            {
                id: "NG-ON",
                name: "Ondo",
                countryId: "NG"
            },
            {
                id: "NG-OS",
                name: "Osun",
                countryId: "NG"
            },
            {
                id: "NG-OY",
                name: "Oyo",
                countryId: "NG"
            },
            {
                id: "NG-PL",
                name: "Meseta",
                countryId: "NG"
            },
            {
                id: "NG-RI",
                name: "Ríos",
                countryId: "NG"
            },
            {
                id: "NG-SO",
                name: "Sokoto",
                countryId: "NG"
            },
            {
                id: "NG-TA",
                name: "Taraba",
                countryId: "NG"
            },
            {
                id: "NG-YO",
                name: "Yobe",
                countryId: "NG"
            },
            {
                id: "NG-ZA",
                name: "Zamfara",
                countryId: "NG"
            },
            {
                id: "NI-AN",
                name: "Atlántico Norte",
                countryId: "NI"
            },
            {
                id: "NI-AS",
                name: "Atlántico Sur",
                countryId: "NI"
            },
            {
                id: "NI-BO",
                name: "Boaco",
                countryId: "NI"
            },
            {
                id: "NI-CA",
                name: "Carazo",
                countryId: "NI"
            },
            {
                id: "NI-CI",
                name: "Chinandega",
                countryId: "NI"
            },
            {
                id: "NI-CO",
                name: "Chontales",
                countryId: "NI"
            },
            {
                id: "NI-ES",
                name: "Estelí",
                countryId: "NI"
            },
            {
                id: "NI-GR",
                name: "Granada",
                countryId: "NI"
            },
            {
                id: "NI-JI",
                name: "Jinotega",
                countryId: "NI"
            },
            {
                id: "NI-LE",
                name: "León",
                countryId: "NI"
            },
            {
                id: "NI-MD",
                name: "Madriz",
                countryId: "NI"
            },
            {
                id: "NI-MN",
                name: "Managua",
                countryId: "NI"
            },
            {
                id: "NI-MS",
                name: "Masaya",
                countryId: "NI"
            },
            {
                id: "NI-MT",
                name: "Matagalpa",
                countryId: "NI"
            },
            {
                id: "NI-NS",
                name: "Nueva Segovia",
                countryId: "NI"
            },
            {
                id: "NI-RI",
                name: "Rivas",
                countryId: "NI"
            },
            {
                id: "NI-SJ",
                name: "Río San Juan",
                countryId: "NI"
            },
            {
                id: "NL-DR",
                name: "Drenthe",
                countryId: "NL"
            },
            {
                id: "NL-FL",
                name: "Flevolanda",
                countryId: "NL"
            },
            {
                id: "NL-FR",
                name: "Friesland",
                countryId: "NL"
            },
            {
                id: "NL-GE",
                name: "Gelderland",
                countryId: "NL"
            },
            {
                id: "NL-GR",
                name: "Groningen",
                countryId: "NL"
            },
            {
                id: "NL-LI",
                name: "Limburg",
                countryId: "NL"
            },
            {
                id: "NL-NB",
                name: "Brabante Del Norte",
                countryId: "NL"
            },
            {
                id: "NL-NH",
                name: "Holanda Del Norte",
                countryId: "NL"
            },
            {
                id: "NL-OV",
                name: "Overijssel",
                countryId: "NL"
            },
            {
                id: "NL-UT",
                name: "Utrecht",
                countryId: "NL"
            },
            {
                id: "NL-ZE",
                name: "Zelandia",
                countryId: "NL"
            },
            {
                id: "NL-ZH",
                name: "Holanda Del Sur",
                countryId: "NL"
            },
            {
                id: "NO-01",
                name: "Østfold",
                countryId: "NO"
            },
            {
                id: "NO-02",
                name: "Akershus",
                countryId: "NO"
            },
            {
                id: "NO-03",
                name: "Oslo",
                countryId: "NO"
            },
            {
                id: "NO-04",
                name: "Hedmark",
                countryId: "NO"
            },
            {
                id: "NO-05",
                name: "Oppland",
                countryId: "NO"
            },
            {
                id: "NO-06",
                name: "Buskerud",
                countryId: "NO"
            },
            {
                id: "NO-07",
                name: "Vestfold",
                countryId: "NO"
            },
            {
                id: "NO-08",
                name: "Telemark",
                countryId: "NO"
            },
            {
                id: "NO-09",
                name: "Aust-Agder",
                countryId: "NO"
            },
            {
                id: "NO-10",
                name: "Vest-Agder",
                countryId: "NO"
            },
            {
                id: "NO-11",
                name: "Rogaland",
                countryId: "NO"
            },
            {
                id: "NO-12",
                name: "Hordaland",
                countryId: "NO"
            },
            {
                id: "NO-14",
                name: "Sogn Og Fjordane",
                countryId: "NO"
            },
            {
                id: "NO-15",
                name: "Más Og Romsdal",
                countryId: "NO"
            },
            {
                id: "NO-16",
                name: "Sor-Trondelag",
                countryId: "NO"
            },
            {
                id: "NO-17",
                name: "Nord-Trondelag",
                countryId: "NO"
            },
            {
                id: "NO-18",
                name: "Nordland",
                countryId: "NO"
            },
            {
                id: "NO-19",
                name: "Troms",
                countryId: "NO"
            },
            {
                id: "NO-20",
                name: "Finnmark",
                countryId: "NO"
            },
            {
                id: "NO-21",
                name: "Svalbard",
                countryId: "NO"
            },
            {
                id: "NO-22",
                name: "Jan Mayen",
                countryId: "NO"
            },
            {
                id: "NP-BA",
                name: "Bagmati",
                countryId: "NP"
            },
            {
                id: "NP-BH",
                name: "Bheri",
                countryId: "NP"
            },
            {
                id: "NP-DH",
                name: "Dhawalagiri",
                countryId: "NP"
            },
            {
                id: "NP-GA",
                name: "Gandaki",
                countryId: "NP"
            },
            {
                id: "NP-JA",
                name: "Janakpur",
                countryId: "NP"
            },
            {
                id: "NP-KA",
                name: "Karnali",
                countryId: "NP"
            },
            {
                id: "NP-KO",
                name: "Kosi",
                countryId: "NP"
            },
            {
                id: "NP-LU",
                name: "Lumbini",
                countryId: "NP"
            },
            {
                id: "NP-MA",
                name: "Mahakali",
                countryId: "NP"
            },
            {
                id: "NP-ME",
                name: "Mechi",
                countryId: "NP"
            },
            {
                id: "NP-NA",
                name: "Narayani",
                countryId: "NP"
            },
            {
                id: "NP-RA",
                name: "Rapti",
                countryId: "NP"
            },
            {
                id: "NP-SA",
                name: "Sagarmatha",
                countryId: "NP"
            },
            {
                id: "NP-SE",
                name: "Seti",
                countryId: "NP"
            },
            {
                id: "NR-01",
                name: "Aiwo",
                countryId: "NR"
            },
            {
                id: "NR-02",
                name: "Anabar",
                countryId: "NR"
            },
            {
                id: "NR-03",
                name: "Anetan",
                countryId: "NR"
            },
            {
                id: "NR-04",
                name: "Anibare",
                countryId: "NR"
            },
            {
                id: "NR-05",
                name: "Baiti",
                countryId: "NR"
            },
            {
                id: "NR-06",
                name: "Boe",
                countryId: "NR"
            },
            {
                id: "NR-07",
                name: "Buada",
                countryId: "NR"
            },
            {
                id: "NR-08",
                name: "Denigomodu",
                countryId: "NR"
            },
            {
                id: "NR-09",
                name: "Ewa",
                countryId: "NR"
            },
            {
                id: "NR-10",
                name: "Ijuw",
                countryId: "NR"
            },
            {
                id: "NR-11",
                name: "Meneng",
                countryId: "NR"
            },
            {
                id: "NR-12",
                name: "Nibok",
                countryId: "NR"
            },
            {
                id: "NR-13",
                name: "Uaboe",
                countryId: "NR"
            },
            {
                id: "NR-14",
                name: "Yaren",
                countryId: "NR"
            },
            {
                id: "NU-0",
                name: "Niue",
                countryId: "NU"
            },
            {
                id: "NZ-AUK",
                name: "Auckland",
                countryId: "NZ"
            },
            {
                id: "NZ-BOP",
                name: "Bay Of Plenty",
                countryId: "NZ"
            },
            {
                id: "NZ-CAN",
                name: "Canterbury",
                countryId: "NZ"
            },
            {
                id: "NZ-CIT",
                name: "Territorio De Las Islas Chatham",
                countryId: "NZ"
            },
            {
                id: "NZ-GIS",
                name: "Gisborne",
                countryId: "NZ"
            },
            {
                id: "NZ-HKB",
                name: "Bahía De Hawke",
                countryId: "NZ"
            },
            {
                id: "NZ-MBH",
                name: "Marlborough",
                countryId: "NZ"
            },
            {
                id: "NZ-MWT",
                name: "Manawatu-Wanganui",
                countryId: "NZ"
            },
            {
                id: "NZ-NSN",
                name: "Nelson",
                countryId: "NZ"
            },
            {
                id: "NZ-NTL",
                name: "Región Septentrional",
                countryId: "NZ"
            },
            {
                id: "NZ-OTA",
                name: "Otago",
                countryId: "NZ"
            },
            {
                id: "NZ-STL",
                name: "Southland",
                countryId: "NZ"
            },
            {
                id: "NZ-TAS",
                name: "Tasman",
                countryId: "NZ"
            },
            {
                id: "NZ-TKI",
                name: "Taranaki",
                countryId: "NZ"
            },
            {
                id: "NZ-WGN",
                name: "Wellington",
                countryId: "NZ"
            },
            {
                id: "NZ-WKO",
                name: "Waikato",
                countryId: "NZ"
            },
            {
                id: "NZ-WTC",
                name: "Costa Oeste",
                countryId: "NZ"
            },
            {
                id: "OM-BJ",
                name: "Sur Batinah",
                countryId: "OM"
            },
            {
                id: "OM-BS",
                name: "Norte Batinah",
                countryId: "OM"
            },
            {
                id: "OM-BU",
                name: "Buraimi",
                countryId: "OM"
            },
            {
                id: "OM-DA",
                name: "Provincia Interior",
                countryId: "OM"
            },
            {
                id: "OM-MA",
                name: "Mascate",
                countryId: "OM"
            },
            {
                id: "OM-MU",
                name: "Musandam",
                countryId: "OM"
            },
            {
                id: "OM-SJ",
                name: "Sudeste",
                countryId: "OM"
            },
            {
                id: "OM-SS",
                name: "Noreste",
                countryId: "OM"
            },
            {
                id: "OM-WU",
                name: "Central",
                countryId: "OM"
            },
            {
                id: "OM-ZA",
                name: "Dhahirah",
                countryId: "OM"
            },
            {
                id: "OM-ZU",
                name: "Dhofar",
                countryId: "OM"
            },
            {
                id: "PA-1",
                name: "Bocas Del Toro",
                countryId: "PA"
            },
            {
                id: "PA-10",
                name: "Panamá Oeste",
                countryId: "PA"
            },
            {
                id: "PA-2",
                name: "Coclé",
                countryId: "PA"
            },
            {
                id: "PA-3",
                name: "Colón",
                countryId: "PA"
            },
            {
                id: "PA-4",
                name: "Chiriquí",
                countryId: "PA"
            },
            {
                id: "PA-5",
                name: "Darién",
                countryId: "PA"
            },
            {
                id: "PA-6",
                name: "Herrera",
                countryId: "PA"
            },
            {
                id: "PA-7",
                name: "Los Santos",
                countryId: "PA"
            },
            {
                id: "PA-8",
                name: "Panamá",
                countryId: "PA"
            },
            {
                id: "PA-9",
                name: "Veraguas",
                countryId: "PA"
            },
            {
                id: "PA-EM",
                name: "Emberá",
                countryId: "PA"
            },
            {
                id: "PA-KY",
                name: "Kuna Yala",
                countryId: "PA"
            },
            {
                id: "PA-NB",
                name: "Ngäbe-Buglé",
                countryId: "PA"
            },
            {
                id: "PE-AMA",
                name: "Amazonas",
                countryId: "PE"
            },
            {
                id: "PE-ANC",
                name: "Ancash",
                countryId: "PE"
            },
            {
                id: "PE-APU",
                name: "Apurimac",
                countryId: "PE"
            },
            {
                id: "PE-ARE",
                name: "Arequipa",
                countryId: "PE"
            },
            {
                id: "PE-AYA",
                name: "Ayacucho",
                countryId: "PE"
            },
            {
                id: "PE-CAJ",
                name: "Cajamarca",
                countryId: "PE"
            },
            {
                id: "PE-CAL",
                name: "Callao",
                countryId: "PE"
            },
            {
                id: "PE-CUS",
                name: "Cusco",
                countryId: "PE"
            },
            {
                id: "PE-HUC",
                name: "Huanuco",
                countryId: "PE"
            },
            {
                id: "PE-HUV",
                name: "Huancavelica",
                countryId: "PE"
            },
            {
                id: "PE-ICA",
                name: "Ica",
                countryId: "PE"
            },
            {
                id: "PE-JUN",
                name: "Junin",
                countryId: "PE"
            },
            {
                id: "PE-LAL",
                name: "La Libertad",
                countryId: "PE"
            },
            {
                id: "PE-LAM",
                name: "Lambayeque",
                countryId: "PE"
            },
            {
                id: "PE-LIM",
                name: "Lima",
                countryId: "PE"
            },
            {
                id: "PE-LMA",
                name: "Municipalidad Metropolitana De Lima",
                countryId: "PE"
            },
            {
                id: "PE-LOR",
                name: "Loreto",
                countryId: "PE"
            },
            {
                id: "PE-MDD",
                name: "Madre De Dios",
                countryId: "PE"
            },
            {
                id: "PE-MOQ",
                name: "Moquegua",
                countryId: "PE"
            },
            {
                id: "PE-PAS",
                name: "Pasco",
                countryId: "PE"
            },
            {
                id: "PE-PIU",
                name: "Piura",
                countryId: "PE"
            },
            {
                id: "PE-PUN",
                name: "Puno",
                countryId: "PE"
            },
            {
                id: "PE-SAM",
                name: "San Martin",
                countryId: "PE"
            },
            {
                id: "PE-TAC",
                name: "Tacna",
                countryId: "PE"
            },
            {
                id: "PE-TUM",
                name: "Tumbes",
                countryId: "PE"
            },
            {
                id: "PE-UCA",
                name: "Ucayali",
                countryId: "PE"
            },
            {
                id: "PF-0",
                name: "Marquesas",
                countryId: "PF"
            },
            {
                id: "PF-1",
                name: "Tuamotus",
                countryId: "PF"
            },
            {
                id: "PF-2",
                name: "Archipiélago Tubuai",
                countryId: "PF"
            },
            {
                id: "PF-3",
                name: "Islas De Barlovento",
                countryId: "PF"
            },
            {
                id: "PF-4",
                name: "Iles Sous-Le-Vent",
                countryId: "PF"
            },
            {
                id: "PG-CPK",
                name: "Chimbu",
                countryId: "PG"
            },
            {
                id: "PG-CPM",
                name: "Central",
                countryId: "PG"
            },
            {
                id: "PG-EBR",
                name: "Nueva Bretaña Del Este",
                countryId: "PG"
            },
            {
                id: "PG-EHG",
                name: "Montañas Del Este",
                countryId: "PG"
            },
            {
                id: "PG-EPW",
                name: "Enga",
                countryId: "PG"
            },
            {
                id: "PG-ESW",
                name: "Sepik",
                countryId: "PG"
            },
            {
                id: "PG-GPK",
                name: "Golfo",
                countryId: "PG"
            },
            {
                id: "PG-HLA",
                name: "Hela",
                countryId: "PG"
            },
            {
                id: "PG-JWK",
                name: "Jiwaka",
                countryId: "PG"
            },
            {
                id: "PG-MBA",
                name: "Milne Bay",
                countryId: "PG"
            },
            {
                id: "PG-MOM",
                name: "Madang",
                countryId: "PG"
            },
            {
                id: "PG-MPL",
                name: "Morobe",
                countryId: "PG"
            },
            {
                id: "PG-MRL",
                name: "Manus",
                countryId: "PG"
            },
            {
                id: "PG-NCD",
                name: "Port Moresby",
                countryId: "PG"
            },
            {
                id: "PG-NIK",
                name: "Nueva Irlanda",
                countryId: "PG"
            },
            {
                id: "PG-NPP",
                name: "Del Norte",
                countryId: "PG"
            },
            {
                id: "PG-NSB",
                name: "Bougainville",
                countryId: "PG"
            },
            {
                id: "PG-SAN",
                name: "West Sepik",
                countryId: "PG"
            },
            {
                id: "PG-SHM",
                name: "Southern Highlands",
                countryId: "PG"
            },
            {
                id: "PG-WBK",
                name: "Nueva Bretaña Occidental",
                countryId: "PG"
            },
            {
                id: "PG-WHM",
                name: "Western Highlands",
                countryId: "PG"
            },
            {
                id: "PG-WPD",
                name: "Occidental",
                countryId: "PG"
            },
            {
                id: "PH-00",
                name: "Luzón",
                countryId: "PH"
            },
            {
                id: "PH-ABR",
                name: "Abra",
                countryId: "PH"
            },
            {
                id: "PH-AGN",
                name: "Agusan Del Norte",
                countryId: "PH"
            },
            {
                id: "PH-AGS",
                name: "Agusan Del Sur",
                countryId: "PH"
            },
            {
                id: "PH-AKL",
                name: "Aklan",
                countryId: "PH"
            },
            {
                id: "PH-ALB",
                name: "Albay",
                countryId: "PH"
            },
            {
                id: "PH-ANT",
                name: "Antike",
                countryId: "PH"
            },
            {
                id: "PH-APA",
                name: "Apayaw",
                countryId: "PH"
            },
            {
                id: "PH-AUR",
                name: "Aurora",
                countryId: "PH"
            },
            {
                id: "PH-BAN",
                name: "Bataan",
                countryId: "PH"
            },
            {
                id: "PH-BAS",
                name: "Basilan",
                countryId: "PH"
            },
            {
                id: "PH-BEN",
                name: "Benget",
                countryId: "PH"
            },
            {
                id: "PH-BIL",
                name: "Biliran",
                countryId: "PH"
            },
            {
                id: "PH-BOH",
                name: "Bohol",
                countryId: "PH"
            },
            {
                id: "PH-BTG",
                name: "Batangas",
                countryId: "PH"
            },
            {
                id: "PH-BTN",
                name: "Batanes",
                countryId: "PH"
            },
            {
                id: "PH-BUK",
                name: "Bukidnon",
                countryId: "PH"
            },
            {
                id: "PH-BUL",
                name: "Bulakan",
                countryId: "PH"
            },
            {
                id: "PH-CAG",
                name: "Kagayan",
                countryId: "PH"
            },
            {
                id: "PH-CAM",
                name: "Kamigin",
                countryId: "PH"
            },
            {
                id: "PH-CAN",
                name: "Norte Kamarines",
                countryId: "PH"
            },
            {
                id: "PH-CAP",
                name: "Kapis",
                countryId: "PH"
            },
            {
                id: "PH-CAS",
                name: "Sur Kamarines",
                countryId: "PH"
            },
            {
                id: "PH-CAT",
                name: "Katanduwanes",
                countryId: "PH"
            },
            {
                id: "PH-CAV",
                name: "Cavite",
                countryId: "PH"
            },
            {
                id: "PH-CEB",
                name: "Sebu",
                countryId: "PH"
            },
            {
                id: "PH-COM",
                name: "Valle De Compostela",
                countryId: "PH"
            },
            {
                id: "PH-DAO",
                name: "Al Este De Davao",
                countryId: "PH"
            },
            {
                id: "PH-DAS",
                name: "El Sur De Davao",
                countryId: "PH"
            },
            {
                id: "PH-DAV",
                name: "Davao Del Norte",
                countryId: "PH"
            },
            {
                id: "PH-DIN",
                name: "Dinagat",
                countryId: "PH"
            },
            {
                id: "PH-DVO",
                name: "West Davao",
                countryId: "PH"
            },
            {
                id: "PH-EAS",
                name: "Eastern Samar",
                countryId: "PH"
            },
            {
                id: "PH-GUI",
                name: "Gimaras",
                countryId: "PH"
            },
            {
                id: "PH-IFU",
                name: "Ipugaw",
                countryId: "PH"
            },
            {
                id: "PH-ILI",
                name: "Iloilo",
                countryId: "PH"
            },
            {
                id: "PH-ILN",
                name: "Norte Iloko",
                countryId: "PH"
            },
            {
                id: "PH-ILS",
                name: "Sur Iloko",
                countryId: "PH"
            },
            {
                id: "PH-ISA",
                name: "Isabela",
                countryId: "PH"
            },
            {
                id: "PH-KAL",
                name: "Kalinga",
                countryId: "PH"
            },
            {
                id: "PH-LAG",
                name: "Laguna",
                countryId: "PH"
            },
            {
                id: "PH-LAN",
                name: "Mar Del Norte",
                countryId: "PH"
            },
            {
                id: "PH-LAS",
                name: "Lago Del Sur",
                countryId: "PH"
            },
            {
                id: "PH-LEY",
                name: "Leyte",
                countryId: "PH"
            },
            {
                id: "PH-LUN",
                name: "La Unión",
                countryId: "PH"
            },
            {
                id: "PH-MAD",
                name: "Marinduke",
                countryId: "PH"
            },
            {
                id: "PH-MAG",
                name: "Magindanaw",
                countryId: "PH"
            },
            {
                id: "PH-MAS",
                name: "Masbate",
                countryId: "PH"
            },
            {
                id: "PH-MDC",
                name: "Occidental Mindoro",
                countryId: "PH"
            },
            {
                id: "PH-MDR",
                name: "Mindoro Oriental",
                countryId: "PH"
            },
            {
                id: "PH-MOU",
                name: "Provincia De Montaña",
                countryId: "PH"
            },
            {
                id: "PH-MSC",
                name: "Misamis Occidental",
                countryId: "PH"
            },
            {
                id: "PH-MSR",
                name: "Oriental De Misamis",
                countryId: "PH"
            },
            {
                id: "PH-NCO",
                name: "Cotabato",
                countryId: "PH"
            },
            {
                id: "PH-NEC",
                name: "Negros Occidental",
                countryId: "PH"
            },
            {
                id: "PH-NER",
                name: "Visayas Oriental",
                countryId: "PH"
            },
            {
                id: "PH-NSA",
                name: "Northern Samar",
                countryId: "PH"
            },
            {
                id: "PH-NUE",
                name: "Nuweva Ecija",
                countryId: "PH"
            },
            {
                id: "PH-NUV",
                name: "Nuweva Biskaya",
                countryId: "PH"
            },
            {
                id: "PH-PAM",
                name: "Pampanga",
                countryId: "PH"
            },
            {
                id: "PH-PAN",
                name: "Pangasinan",
                countryId: "PH"
            },
            {
                id: "PH-PLW",
                name: "Palawan",
                countryId: "PH"
            },
            {
                id: "PH-QUE",
                name: "Keson",
                countryId: "PH"
            },
            {
                id: "PH-QUI",
                name: "Kirino",
                countryId: "PH"
            },
            {
                id: "PH-RIZ",
                name: "Risal",
                countryId: "PH"
            },
            {
                id: "PH-ROM",
                name: "Romblon",
                countryId: "PH"
            },
            {
                id: "PH-SAR",
                name: "Sarangani",
                countryId: "PH"
            },
            {
                id: "PH-SCO",
                name: "Cotabato Del Sur",
                countryId: "PH"
            },
            {
                id: "PH-SIG",
                name: "Sikihor",
                countryId: "PH"
            },
            {
                id: "PH-SLE",
                name: "Southern Leyte",
                countryId: "PH"
            },
            {
                id: "PH-SLU",
                name: "Sulu",
                countryId: "PH"
            },
            {
                id: "PH-SOR",
                name: "Sorsogon",
                countryId: "PH"
            },
            {
                id: "PH-SUK",
                name: "Sultan Kudarat",
                countryId: "PH"
            },
            {
                id: "PH-SUN",
                name: "El Norte De Surigao",
                countryId: "PH"
            },
            {
                id: "PH-SUR",
                name: "Surigao Del Sur",
                countryId: "PH"
            },
            {
                id: "PH-TAR",
                name: "Tarlac",
                countryId: "PH"
            },
            {
                id: "PH-TAW",
                name: "Tawi-Tawi",
                countryId: "PH"
            },
            {
                id: "PH-WSA",
                name: "Samar",
                countryId: "PH"
            },
            {
                id: "PH-ZAN",
                name: "Norte Sambuwangga",
                countryId: "PH"
            },
            {
                id: "PH-ZAS",
                name: "Sur Sambuwangga",
                countryId: "PH"
            },
            {
                id: "PH-ZMB",
                name: "Sambales",
                countryId: "PH"
            },
            {
                id: "PH-ZSI",
                name: "Sambuwangga Sibugay",
                countryId: "PH"
            },
            {
                id: "PK-BA",
                name: "Baluchistán",
                countryId: "PK"
            },
            {
                id: "PK-GB",
                name: "Gilgit-Baltistan",
                countryId: "PK"
            },
            {
                id: "PK-IS",
                name: "Islamabad",
                countryId: "PK"
            },
            {
                id: "PK-JK",
                name: "Azad Kashmir",
                countryId: "PK"
            },
            {
                id: "PK-KP",
                name: "Jaibar Pakhtūnkhwās",
                countryId: "PK"
            },
            {
                id: "PK-PB",
                name: "Punjab",
                countryId: "PK"
            },
            {
                id: "PK-SD",
                name: "Sind",
                countryId: "PK"
            },
            {
                id: "PL-DS",
                name: "Baja Silesia",
                countryId: "PL"
            },
            {
                id: "PL-KP",
                name: "Cuyavia Y Pomerania",
                countryId: "PL"
            },
            {
                id: "PL-LB",
                name: "Lubuskie",
                countryId: "PL"
            },
            {
                id: "PL-LD",
                name: "Lodz",
                countryId: "PL"
            },
            {
                id: "PL-LU",
                name: "Lublin",
                countryId: "PL"
            },
            {
                id: "PL-MA",
                name: "Małopolskie",
                countryId: "PL"
            },
            {
                id: "PL-MZ",
                name: "Mazowieckie",
                countryId: "PL"
            },
            {
                id: "PL-OP",
                name: "Opole",
                countryId: "PL"
            },
            {
                id: "PL-PD",
                name: "Podlasie",
                countryId: "PL"
            },
            {
                id: "PL-PK",
                name: "Podkarpackie",
                countryId: "PL"
            },
            {
                id: "PL-PM",
                name: "Pomorskie",
                countryId: "PL"
            },
            {
                id: "PL-SK",
                name: "Swietokrzyskie",
                countryId: "PL"
            },
            {
                id: "PL-SL",
                name: "Silesia",
                countryId: "PL"
            },
            {
                id: "PL-WN",
                name: "Warmia Y Masuria",
                countryId: "PL"
            },
            {
                id: "PL-WP",
                name: "Wielkopolskie",
                countryId: "PL"
            },
            {
                id: "PL-ZP",
                name: "Pomerania Occidental",
                countryId: "PL"
            },
            {
                id: "PM-0",
                name: "Miquelon",
                countryId: "PM"
            },
            {
                id: "PM-1",
                name: "San Pedro",
                countryId: "PM"
            },
            {
                id: "PN-0",
                name: "Islas Pitcairn",
                countryId: "PN"
            },
            {
                id: "PR-0",
                name: "Adjuntas",
                countryId: "PR"
            },
            {
                id: "PR-1",
                name: "Aguada",
                countryId: "PR"
            },
            {
                id: "PR-10",
                name: "Bayamon",
                countryId: "PR"
            },
            {
                id: "PR-11",
                name: "Cabo Rojo",
                countryId: "PR"
            },
            {
                id: "PR-12",
                name: "Caguas",
                countryId: "PR"
            },
            {
                id: "PR-13",
                name: "Camuy",
                countryId: "PR"
            },
            {
                id: "PR-14",
                name: "Canovanas",
                countryId: "PR"
            },
            {
                id: "PR-15",
                name: "Carolina",
                countryId: "PR"
            },
            {
                id: "PR-16",
                name: "Cat",
                countryId: "PR"
            },
            {
                id: "PR-17",
                name: "Ceiba",
                countryId: "PR"
            },
            {
                id: "PR-18",
                name: "Ciales",
                countryId: "PR"
            },
            {
                id: "PR-19",
                name: "Cidra",
                countryId: "PR"
            },
            {
                id: "PR-2",
                name: "Aguadilla",
                countryId: "PR"
            },
            {
                id: "PR-20",
                name: "Coamo",
                countryId: "PR"
            },
            {
                id: "PR-21",
                name: "Comerio",
                countryId: "PR"
            },
            {
                id: "PR-22",
                name: "Corozal",
                countryId: "PR"
            },
            {
                id: "PR-23",
                name: "Culebra",
                countryId: "PR"
            },
            {
                id: "PR-24",
                name: "Dorado",
                countryId: "PR"
            },
            {
                id: "PR-25",
                name: "Fajardo",
                countryId: "PR"
            },
            {
                id: "PR-26",
                name: "Florida",
                countryId: "PR"
            },
            {
                id: "PR-27",
                name: "Guanica",
                countryId: "PR"
            },
            {
                id: "PR-28",
                name: "Guayama",
                countryId: "PR"
            },
            {
                id: "PR-29",
                name: "Guayanilla",
                countryId: "PR"
            },
            {
                id: "PR-3",
                name: "Aguas Buenas",
                countryId: "PR"
            },
            {
                id: "PR-30",
                name: "Guaynabo",
                countryId: "PR"
            },
            {
                id: "PR-31",
                name: "Gurabo",
                countryId: "PR"
            },
            {
                id: "PR-32",
                name: "Hatillo",
                countryId: "PR"
            },
            {
                id: "PR-33",
                name: "Hormigueros",
                countryId: "PR"
            },
            {
                id: "PR-34",
                name: "Humacao",
                countryId: "PR"
            },
            {
                id: "PR-35",
                name: "Isabe",
                countryId: "PR"
            },
            {
                id: "PR-36",
                name: "Juana Diaz",
                countryId: "PR"
            },
            {
                id: "PR-37",
                name: "Juncos",
                countryId: "PR"
            },
            {
                id: "PR-38",
                name: "Lajas",
                countryId: "PR"
            },
            {
                id: "PR-39",
                name: "Lares",
                countryId: "PR"
            },
            {
                id: "PR-4",
                name: "Aibonito",
                countryId: "PR"
            },
            {
                id: "PR-40",
                name: "Las Marias",
                countryId: "PR"
            },
            {
                id: "PR-41",
                name: "Las Oiza",
                countryId: "PR"
            },
            {
                id: "PR-42",
                name: "Luquillo",
                countryId: "PR"
            },
            {
                id: "PR-43",
                name: "Manati",
                countryId: "PR"
            },
            {
                id: "PR-44",
                name: "Maricao",
                countryId: "PR"
            },
            {
                id: "PR-45",
                name: "Maunabo",
                countryId: "PR"
            },
            {
                id: "PR-46",
                name: "Mayaguez",
                countryId: "PR"
            },
            {
                id: "PR-47",
                name: "Moca",
                countryId: "PR"
            },
            {
                id: "PR-48",
                name: "Morovis",
                countryId: "PR"
            },
            {
                id: "PR-49",
                name: "Naguabo",
                countryId: "PR"
            },
            {
                id: "PR-5",
                name: "Anasco",
                countryId: "PR"
            },
            {
                id: "PR-50",
                name: "Naranjito",
                countryId: "PR"
            },
            {
                id: "PR-51",
                name: "Orocovis",
                countryId: "PR"
            },
            {
                id: "PR-52",
                name: "Patillas",
                countryId: "PR"
            },
            {
                id: "PR-53",
                name: "Penuelas",
                countryId: "PR"
            },
            {
                id: "PR-54",
                name: "Ponce",
                countryId: "PR"
            },
            {
                id: "PR-55",
                name: "Quebradillas",
                countryId: "PR"
            },
            {
                id: "PR-56",
                name: "Rincon",
                countryId: "PR"
            },
            {
                id: "PR-57",
                name: "Rio Grande",
                countryId: "PR"
            },
            {
                id: "PR-58",
                name: "Sabana Linas",
                countryId: "PR"
            },
            {
                id: "PR-59",
                name: "San German",
                countryId: "PR"
            },
            {
                id: "PR-6",
                name: "Arecibo",
                countryId: "PR"
            },
            {
                id: "PR-60",
                name: "San Juan",
                countryId: "PR"
            },
            {
                id: "PR-61",
                name: "San Lorenzo",
                countryId: "PR"
            },
            {
                id: "PR-62",
                name: "San Sebastian",
                countryId: "PR"
            },
            {
                id: "PR-63",
                name: "Santa Isabel",
                countryId: "PR"
            },
            {
                id: "PR-64",
                name: "Toa Alta",
                countryId: "PR"
            },
            {
                id: "PR-65",
                name: "Toa Baja",
                countryId: "PR"
            },
            {
                id: "PR-66",
                name: "Trujillo Alto",
                countryId: "PR"
            },
            {
                id: "PR-67",
                name: "Utuado",
                countryId: "PR"
            },
            {
                id: "PR-68",
                name: "Vega Alta",
                countryId: "PR"
            },
            {
                id: "PR-69",
                name: "Vega Ues",
                countryId: "PR"
            },
            {
                id: "PR-7",
                name: "Arroyo",
                countryId: "PR"
            },
            {
                id: "PR-70",
                name: "Villalba",
                countryId: "PR"
            },
            {
                id: "PR-71",
                name: "Yabucoa",
                countryId: "PR"
            },
            {
                id: "PR-72",
                name: "Yauco",
                countryId: "PR"
            },
            {
                id: "PR-8",
                name: "Barceloneta",
                countryId: "PR"
            },
            {
                id: "PR-9",
                name: "Barranquitas",
                countryId: "PR"
            },
            {
                id: "PS-BTH",
                name: "Belén",
                countryId: "PS"
            },
            {
                id: "PS-DEB",
                name: "Deir El Balah",
                countryId: "PS"
            },
            {
                id: "PS-GZA",
                name: "Gaza",
                countryId: "PS"
            },
            {
                id: "PS-HBN",
                name: "Hebron",
                countryId: "PS"
            },
            {
                id: "PS-JEM",
                name: "Jerusalén",
                countryId: "PS"
            },
            {
                id: "PS-JEN",
                name: "Jenin",
                countryId: "PS"
            },
            {
                id: "PS-JRH",
                name: "Jericó Y Al Agwar",
                countryId: "PS"
            },
            {
                id: "PS-KYS",
                name: "Khan Yunis",
                countryId: "PS"
            },
            {
                id: "PS-NBS",
                name: "Nablus",
                countryId: "PS"
            },
            {
                id: "PS-NGZ",
                name: "Norte De Gaza",
                countryId: "PS"
            },
            {
                id: "PS-QQA",
                name: "Qalqilya",
                countryId: "PS"
            },
            {
                id: "PS-RBH",
                name: "Ramallah",
                countryId: "PS"
            },
            {
                id: "PS-RFH",
                name: "Rafah",
                countryId: "PS"
            },
            {
                id: "PS-SLT",
                name: "Salfit",
                countryId: "PS"
            },
            {
                id: "PS-TBS",
                name: "Tubas",
                countryId: "PS"
            },
            {
                id: "PS-TKM",
                name: "Tulkarem",
                countryId: "PS"
            },
            {
                id: "PT-01",
                name: "Aveiro",
                countryId: "PT"
            },
            {
                id: "PT-02",
                name: "Beja",
                countryId: "PT"
            },
            {
                id: "PT-03",
                name: "Braga",
                countryId: "PT"
            },
            {
                id: "PT-04",
                name: "Bragança",
                countryId: "PT"
            },
            {
                id: "PT-05",
                name: "Castelo Branco",
                countryId: "PT"
            },
            {
                id: "PT-06",
                name: "Coimbra",
                countryId: "PT"
            },
            {
                id: "PT-07",
                name: "Évora",
                countryId: "PT"
            },
            {
                id: "PT-08",
                name: "Faro",
                countryId: "PT"
            },
            {
                id: "PT-09",
                name: "Guarda",
                countryId: "PT"
            },
            {
                id: "PT-10",
                name: "Leiria",
                countryId: "PT"
            },
            {
                id: "PT-11",
                name: "Lisboa",
                countryId: "PT"
            },
            {
                id: "PT-12",
                name: "Portalegre",
                countryId: "PT"
            },
            {
                id: "PT-13",
                name: "Porto",
                countryId: "PT"
            },
            {
                id: "PT-14",
                name: "Santarém",
                countryId: "PT"
            },
            {
                id: "PT-15",
                name: "Setúbal",
                countryId: "PT"
            },
            {
                id: "PT-16",
                name: "Viana Do Castelo",
                countryId: "PT"
            },
            {
                id: "PT-17",
                name: "Vila Real",
                countryId: "PT"
            },
            {
                id: "PT-18",
                name: "Viseu",
                countryId: "PT"
            },
            {
                id: "PT-20",
                name: "Azores",
                countryId: "PT"
            },
            {
                id: "PT-30",
                name: "Madeira",
                countryId: "PT"
            },
            {
                id: "PW-002",
                name: "Aimeliik",
                countryId: "PW"
            },
            {
                id: "PW-004",
                name: "Airai",
                countryId: "PW"
            },
            {
                id: "PW-010",
                name: "Angaur",
                countryId: "PW"
            },
            {
                id: "PW-050",
                name: "Hatobohei",
                countryId: "PW"
            },
            {
                id: "PW-100",
                name: "Kayangel",
                countryId: "PW"
            },
            {
                id: "PW-150",
                name: "Koror",
                countryId: "PW"
            },
            {
                id: "PW-212",
                name: "Melekeok",
                countryId: "PW"
            },
            {
                id: "PW-214",
                name: "Ngaraard",
                countryId: "PW"
            },
            {
                id: "PW-218",
                name: "Ngarchelong",
                countryId: "PW"
            },
            {
                id: "PW-222",
                name: "Ngardmau",
                countryId: "PW"
            },
            {
                id: "PW-224",
                name: "Ngatpang",
                countryId: "PW"
            },
            {
                id: "PW-226",
                name: "Ngchesar",
                countryId: "PW"
            },
            {
                id: "PW-227",
                name: "Ngeremlengui",
                countryId: "PW"
            },
            {
                id: "PW-228",
                name: "Ngiwal",
                countryId: "PW"
            },
            {
                id: "PW-350",
                name: "Peleliu",
                countryId: "PW"
            },
            {
                id: "PW-370",
                name: "Sonsoral",
                countryId: "PW"
            },
            {
                id: "PY-1",
                name: "Concepcion",
                countryId: "PY"
            },
            {
                id: "PY-10",
                name: "Alto Parana",
                countryId: "PY"
            },
            {
                id: "PY-11",
                name: "Central",
                countryId: "PY"
            },
            {
                id: "PY-12",
                name: "Neembucu",
                countryId: "PY"
            },
            {
                id: "PY-13",
                name: "Amambay",
                countryId: "PY"
            },
            {
                id: "PY-14",
                name: "Canindeyu",
                countryId: "PY"
            },
            {
                id: "PY-15",
                name: "Presidente Hayes",
                countryId: "PY"
            },
            {
                id: "PY-16",
                name: "Alto Paraguay",
                countryId: "PY"
            },
            {
                id: "PY-2",
                name: "San Pedro",
                countryId: "PY"
            },
            {
                id: "PY-3",
                name: "Cordillera",
                countryId: "PY"
            },
            {
                id: "PY-4",
                name: "Guaira",
                countryId: "PY"
            },
            {
                id: "PY-5",
                name: "Caaguazu",
                countryId: "PY"
            },
            {
                id: "PY-6",
                name: "Caazapa",
                countryId: "PY"
            },
            {
                id: "PY-7",
                name: "Itapua",
                countryId: "PY"
            },
            {
                id: "PY-8",
                name: "Misiones",
                countryId: "PY"
            },
            {
                id: "PY-9",
                name: "Paraguari",
                countryId: "PY"
            },
            {
                id: "PY-ASU",
                name: "Asuncion",
                countryId: "PY"
            },
            {
                id: "QA-DA",
                name: "Doha",
                countryId: "QA"
            },
            {
                id: "QA-KH",
                name: "Al Khor",
                countryId: "QA"
            },
            {
                id: "QA-MS",
                name: "Norte",
                countryId: "QA"
            },
            {
                id: "QA-RA",
                name: "Al Rayyan",
                countryId: "QA"
            },
            {
                id: "QA-SH",
                name: "Shahhaniya",
                countryId: "QA"
            },
            {
                id: "QA-US",
                name: "Umm Salal",
                countryId: "QA"
            },
            {
                id: "QA-WA",
                name: "Wakra",
                countryId: "QA"
            },
            {
                id: "QA-ZA",
                name: "Aldain",
                countryId: "QA"
            },
            {
                id: "RE-RE",
                name: "Réunion",
                countryId: "RE"
            },
            {
                id: "RO-AB",
                name: "Alba",
                countryId: "RO"
            },
            {
                id: "RO-AG",
                name: "Arges",
                countryId: "RO"
            },
            {
                id: "RO-AR",
                name: "Arad",
                countryId: "RO"
            },
            {
                id: "RO-B",
                name: "Bucarest",
                countryId: "RO"
            },
            {
                id: "RO-BC",
                name: "Bacau",
                countryId: "RO"
            },
            {
                id: "RO-BH",
                name: "Bihor",
                countryId: "RO"
            },
            {
                id: "RO-BN",
                name: "Bistrita",
                countryId: "RO"
            },
            {
                id: "RO-BR",
                name: "Braila",
                countryId: "RO"
            },
            {
                id: "RO-BT",
                name: "Botosani",
                countryId: "RO"
            },
            {
                id: "RO-BV",
                name: "Brasov",
                countryId: "RO"
            },
            {
                id: "RO-BZ",
                name: "Buzau",
                countryId: "RO"
            },
            {
                id: "RO-CJ",
                name: "Cluj",
                countryId: "RO"
            },
            {
                id: "RO-CL",
                name: "Calarasi",
                countryId: "RO"
            },
            {
                id: "RO-CS",
                name: "Caras-Severin",
                countryId: "RO"
            },
            {
                id: "RO-CT",
                name: "Constanza",
                countryId: "RO"
            },
            {
                id: "RO-CV",
                name: "Covasna",
                countryId: "RO"
            },
            {
                id: "RO-DB",
                name: "Dambovita",
                countryId: "RO"
            },
            {
                id: "RO-DJ",
                name: "Dolj",
                countryId: "RO"
            },
            {
                id: "RO-GJ",
                name: "Gorj",
                countryId: "RO"
            },
            {
                id: "RO-GL",
                name: "Galati",
                countryId: "RO"
            },
            {
                id: "RO-GR",
                name: "Giurgiu",
                countryId: "RO"
            },
            {
                id: "RO-HD",
                name: "Hunedoara",
                countryId: "RO"
            },
            {
                id: "RO-HR",
                name: "Harghita",
                countryId: "RO"
            },
            {
                id: "RO-IL",
                name: "Ialomita",
                countryId: "RO"
            },
            {
                id: "RO-IS",
                name: "Iasi",
                countryId: "RO"
            },
            {
                id: "RO-MH",
                name: "Mehedinti",
                countryId: "RO"
            },
            {
                id: "RO-MM",
                name: "Maramures",
                countryId: "RO"
            },
            {
                id: "RO-MS",
                name: "Mures",
                countryId: "RO"
            },
            {
                id: "RO-NT",
                name: "Neamt",
                countryId: "RO"
            },
            {
                id: "RO-OT",
                name: "Olt",
                countryId: "RO"
            },
            {
                id: "RO-PH",
                name: "Prahova",
                countryId: "RO"
            },
            {
                id: "RO-SB",
                name: "Sibiu",
                countryId: "RO"
            },
            {
                id: "RO-SJ",
                name: "Salaj",
                countryId: "RO"
            },
            {
                id: "RO-SM",
                name: "Satu Mare",
                countryId: "RO"
            },
            {
                id: "RO-SV",
                name: "Suceava",
                countryId: "RO"
            },
            {
                id: "RO-TL",
                name: "Tulcea",
                countryId: "RO"
            },
            {
                id: "RO-TM",
                name: "Timis",
                countryId: "RO"
            },
            {
                id: "RO-TR",
                name: "Teleorman",
                countryId: "RO"
            },
            {
                id: "RO-VL",
                name: "Valcea",
                countryId: "RO"
            },
            {
                id: "RO-VN",
                name: "Vrancea",
                countryId: "RO"
            },
            {
                id: "RO-VS",
                name: "Vaslui",
                countryId: "RO"
            },
            {
                id: "RS-00",
                name: "Belgrado",
                countryId: "RS"
            },
            {
                id: "RS-01",
                name: "Severnobački",
                countryId: "RS"
            },
            {
                id: "RS-02",
                name: "Srednjebanatski",
                countryId: "RS"
            },
            {
                id: "RS-03",
                name: "Severnobanatski",
                countryId: "RS"
            },
            {
                id: "RS-04",
                name: "Južnobanatski",
                countryId: "RS"
            },
            {
                id: "RS-05",
                name: "Zapadnobački",
                countryId: "RS"
            },
            {
                id: "RS-06",
                name: "Južnobački",
                countryId: "RS"
            },
            {
                id: "RS-07",
                name: "Sremski",
                countryId: "RS"
            },
            {
                id: "RS-08",
                name: "Mačvanski",
                countryId: "RS"
            },
            {
                id: "RS-09",
                name: "Kolubarski",
                countryId: "RS"
            },
            {
                id: "RS-10",
                name: "Podunavski",
                countryId: "RS"
            },
            {
                id: "RS-11",
                name: "Braničevski",
                countryId: "RS"
            },
            {
                id: "RS-12",
                name: "Sumadijski",
                countryId: "RS"
            },
            {
                id: "RS-13",
                name: "Pomoravski",
                countryId: "RS"
            },
            {
                id: "RS-14",
                name: "Borski",
                countryId: "RS"
            },
            {
                id: "RS-15",
                name: "Zaječarski",
                countryId: "RS"
            },
            {
                id: "RS-16",
                name: "Zlatibor",
                countryId: "RS"
            },
            {
                id: "RS-17",
                name: "Moravički",
                countryId: "RS"
            },
            {
                id: "RS-18",
                name: "Raska",
                countryId: "RS"
            },
            {
                id: "RS-19",
                name: "Rasinski",
                countryId: "RS"
            },
            {
                id: "RS-20",
                name: "Nišavski",
                countryId: "RS"
            },
            {
                id: "RS-21",
                name: "Toplički",
                countryId: "RS"
            },
            {
                id: "RS-22",
                name: "Pirot",
                countryId: "RS"
            },
            {
                id: "RS-23",
                name: "Jablanica",
                countryId: "RS"
            },
            {
                id: "RS-24",
                name: "Pcinjski",
                countryId: "RS"
            },
            {
                id: "RS-25",
                name: "Kosovo",
                countryId: "RS"
            },
            {
                id: "RS-26",
                name: "Pec",
                countryId: "RS"
            },
            {
                id: "RS-27",
                name: "Prizren",
                countryId: "RS"
            },
            {
                id: "RS-28",
                name: "Mitrovica",
                countryId: "RS"
            },
            {
                id: "RS-29",
                name: "Pomoravski",
                countryId: "RS"
            },
            {
                id: "RU-AD",
                name: "Región De Amur",
                countryId: "RU"
            },
            {
                id: "RU-AL",
                name: "Región De Arkhangelsk",
                countryId: "RU"
            },
            {
                id: "RU-ALT",
                name: "Región De Astracán",
                countryId: "RU"
            },
            {
                id: "RU-AMU",
                name: "Región De Belgorod",
                countryId: "RU"
            },
            {
                id: "RU-ARK",
                name: "Región De Bryansk",
                countryId: "RU"
            },
            {
                id: "RU-AST",
                name: "Región De Chelyabinsk",
                countryId: "RU"
            },
            {
                id: "RU-BA",
                name: "La Región De Irkutsk",
                countryId: "RU"
            },
            {
                id: "RU-BEL",
                name: "Región De Ivanovo",
                countryId: "RU"
            },
            {
                id: "RU-BRY",
                name: "Región De Kemerovo",
                countryId: "RU"
            },
            {
                id: "RU-BU",
                name: "Región De Kaliningrado",
                countryId: "RU"
            },
            {
                id: "RU-CE",
                name: "Región De Kurgan",
                countryId: "RU"
            },
            {
                id: "RU-CHE",
                name: "Región De Kirov",
                countryId: "RU"
            },
            {
                id: "RU-CHU",
                name: "La Región De Kaluga",
                countryId: "RU"
            },
            {
                id: "RU-CU",
                name: "Región De Kostroma",
                countryId: "RU"
            },
            {
                id: "RU-DA",
                name: "Región De Kursk",
                countryId: "RU"
            },
            {
                id: "RU-IN",
                name: "Región De Leningrado",
                countryId: "RU"
            },
            {
                id: "RU-IRK",
                name: "Región De Lipetsk",
                countryId: "RU"
            },
            {
                id: "RU-IVA",
                name: "Región De Magadan",
                countryId: "RU"
            },
            {
                id: "RU-KAM",
                name: "Región De Moscú",
                countryId: "RU"
            },
            {
                id: "RU-KB",
                name: "Región De Murmansk",
                countryId: "RU"
            },
            {
                id: "RU-KC",
                name: "Región De Novgorod",
                countryId: "RU"
            },
            {
                id: "RU-KDA",
                name: "Región De Nizhny Novgorod",
                countryId: "RU"
            },
            {
                id: "RU-KEM",
                name: "Región De Novosibirsk",
                countryId: "RU"
            },
            {
                id: "RU-KGD",
                name: "Región De Omsk",
                countryId: "RU"
            },
            {
                id: "RU-KGN",
                name: "Región De Orenburg",
                countryId: "RU"
            },
            {
                id: "RU-KHA",
                name: "Región De Orel",
                countryId: "RU"
            },
            {
                id: "RU-KHM",
                name: "Región De Penza",
                countryId: "RU"
            },
            {
                id: "RU-KIR",
                name: "Región De Pskov",
                countryId: "RU"
            },
            {
                id: "RU-KK",
                name: "Región De Rostov",
                countryId: "RU"
            },
            {
                id: "RU-KL",
                name: "Región De Riazán",
                countryId: "RU"
            },
            {
                id: "RU-KLU",
                name: "Sakhalín",
                countryId: "RU"
            },
            {
                id: "RU-KO",
                name: "Región De Samara",
                countryId: "RU"
            },
            {
                id: "RU-KOS",
                name: "Región De Saratov",
                countryId: "RU"
            },
            {
                id: "RU-KR",
                name: "Región De Smolensk",
                countryId: "RU"
            },
            {
                id: "RU-KRS",
                name: "Región De Sverdlovsk",
                countryId: "RU"
            },
            {
                id: "RU-KYA",
                name: "Región De Tambov",
                countryId: "RU"
            },
            {
                id: "RU-LEN",
                name: "Región De Tomsk",
                countryId: "RU"
            },
            {
                id: "RU-LIP",
                name: "Región De Tula",
                countryId: "RU"
            },
            {
                id: "RU-MAG",
                name: "Región De Tver",
                countryId: "RU"
            },
            {
                id: "RU-ME",
                name: "Región De Tyumen",
                countryId: "RU"
            },
            {
                id: "RU-MO",
                name: "Región De Ulyanovsk",
                countryId: "RU"
            },
            {
                id: "RU-MOS",
                name: "Región De Volgogrado",
                countryId: "RU"
            },
            {
                id: "RU-MOW",
                name: "Región De Vladimir",
                countryId: "RU"
            },
            {
                id: "RU-MUR",
                name: "Región De Vologda",
                countryId: "RU"
            },
            {
                id: "RU-NEN",
                name: "Región De Voronezh",
                countryId: "RU"
            },
            {
                id: "RU-NGR",
                name: "La Región De Yaroslavl",
                countryId: "RU"
            },
            {
                id: "RU-NIZ",
                name: "Adygea",
                countryId: "RU"
            },
            {
                id: "RU-NVS",
                name: "Bashrkortostn",
                countryId: "RU"
            },
            {
                id: "RU-OMS",
                name: "Buriatia",
                countryId: "RU"
            },
            {
                id: "RU-ORE",
                name: "Daguestán",
                countryId: "RU"
            },
            {
                id: "RU-ORL",
                name: "Ingushetia",
                countryId: "RU"
            },
            {
                id: "RU-PER",
                name: "Kabardino-Balkaria",
                countryId: "RU"
            },
            {
                id: "RU-PNZ",
                name: "Kalmukia",
                countryId: "RU"
            },
            {
                id: "RU-PRI",
                name: "Karachay-Cherkessia",
                countryId: "RU"
            },
            {
                id: "RU-PSK",
                name: "Karelia",
                countryId: "RU"
            },
            {
                id: "RU-ROS",
                name: "Mari El",
                countryId: "RU"
            },
            {
                id: "RU-RYA",
                name: "Mordovia",
                countryId: "RU"
            },
            {
                id: "RU-SA",
                name: "República De Altai",
                countryId: "RU"
            },
            {
                id: "RU-SAK",
                name: "República De Komi",
                countryId: "RU"
            },
            {
                id: "RU-SAM",
                name: "Yakutia",
                countryId: "RU"
            },
            {
                id: "RU-SAR",
                name: "Osetia Del Norte",
                countryId: "RU"
            },
            {
                id: "RU-SE",
                name: "Tatarstán",
                countryId: "RU"
            },
            {
                id: "RU-SMO",
                name: "Tyva",
                countryId: "RU"
            },
            {
                id: "RU-SPE",
                name: "Udmurtia",
                countryId: "RU"
            },
            {
                id: "RU-STA",
                name: "Jakasia",
                countryId: "RU"
            },
            {
                id: "RU-SVE",
                name: "Chechnya",
                countryId: "RU"
            },
            {
                id: "RU-TA",
                name: "Chuvashia",
                countryId: "RU"
            },
            {
                id: "RU-TAM",
                name: "Región De Altai",
                countryId: "RU"
            },
            {
                id: "RU-TOM",
                name: "Territorio Trans-Baikal",
                countryId: "RU"
            },
            {
                id: "RU-TUL",
                name: "Kamchatka Krai",
                countryId: "RU"
            },
            {
                id: "RU-TVE",
                name: "Región De Krasnodar",
                countryId: "RU"
            },
            {
                id: "RU-TY",
                name: "Territorio De Krasnoyarsk",
                countryId: "RU"
            },
            {
                id: "RU-TYU",
                name: "Permanente",
                countryId: "RU"
            },
            {
                id: "RU-UD",
                name: "Primor",
                countryId: "RU"
            },
            {
                id: "RU-ULY",
                name: "Stavropol",
                countryId: "RU"
            },
            {
                id: "RU-VGG",
                name: "Khabarovsk Krai",
                countryId: "RU"
            },
            {
                id: "RU-VLA",
                name: "Distrito Autónomo De Nenets",
                countryId: "RU"
            },
            {
                id: "RU-VLG",
                name: "Khanty-Mansi Distrito Autónomo - Yugra",
                countryId: "RU"
            },
            {
                id: "RU-VOR",
                name: "Chukotka",
                countryId: "RU"
            },
            {
                id: "RU-YAN",
                name: "Distrito Autónomo De Yamalo-Nenets",
                countryId: "RU"
            },
            {
                id: "RU-YAR",
                name: "San Petersburgo",
                countryId: "RU"
            },
            {
                id: "RU-YEV",
                name: "Moscú",
                countryId: "RU"
            },
            {
                id: "RU-ZAB",
                name: "Territorio Trans-Baikal",
                countryId: "RU"
            },
            {
                id: "RW-01",
                name: "Kigali",
                countryId: "RW"
            },
            {
                id: "RW-02",
                name: "Oriental",
                countryId: "RW"
            },
            {
                id: "RW-03",
                name: "Del Norte",
                countryId: "RW"
            },
            {
                id: "RW-04",
                name: "Occidental",
                countryId: "RW"
            },
            {
                id: "RW-05",
                name: "Del Sur",
                countryId: "RW"
            },
            {
                id: "SA-01",
                name: "Riad",
                countryId: "SA"
            },
            {
                id: "SA-02",
                name: "La Meca",
                countryId: "SA"
            },
            {
                id: "SA-03",
                name: "Medina",
                countryId: "SA"
            },
            {
                id: "SA-04",
                name: "Oriente",
                countryId: "SA"
            },
            {
                id: "SA-05",
                name: "Qassim",
                countryId: "SA"
            },
            {
                id: "SA-06",
                name: "Hail",
                countryId: "SA"
            },
            {
                id: "SA-07",
                name: "Tabuk",
                countryId: "SA"
            },
            {
                id: "SA-08",
                name: "Septentrional",
                countryId: "SA"
            },
            {
                id: "SA-09",
                name: "Jazan",
                countryId: "SA"
            },
            {
                id: "SA-10",
                name: "Najran",
                countryId: "SA"
            },
            {
                id: "SA-11",
                name: "Al-Baha",
                countryId: "SA"
            },
            {
                id: "SA-12",
                name: "Al-Jouf",
                countryId: "SA"
            },
            {
                id: "SA-14",
                name: "Difícil",
                countryId: "SA"
            },
            {
                id: "SB-CE",
                name: "Central",
                countryId: "SB"
            },
            {
                id: "SB-CH",
                name: "Choiseul",
                countryId: "SB"
            },
            {
                id: "SB-CT",
                name: "Honiara",
                countryId: "SB"
            },
            {
                id: "SB-GU",
                name: "Guadalcanal",
                countryId: "SB"
            },
            {
                id: "SB-IS",
                name: "Isabel",
                countryId: "SB"
            },
            {
                id: "SB-MK",
                name: "Makira-Ulawa",
                countryId: "SB"
            },
            {
                id: "SB-ML",
                name: "Malaita",
                countryId: "SB"
            },
            {
                id: "SB-RB",
                name: "Rennell Y Bellona",
                countryId: "SB"
            },
            {
                id: "SB-TE",
                name: "Temotu",
                countryId: "SB"
            },
            {
                id: "SB-WE",
                name: "Occidental",
                countryId: "SB"
            },
            {
                id: "SC-01",
                name: "Anse Aux Pins",
                countryId: "SC"
            },
            {
                id: "SC-02",
                name: "Anse Boileau",
                countryId: "SC"
            },
            {
                id: "SC-03",
                name: "Anse Etoile",
                countryId: "SC"
            },
            {
                id: "SC-04",
                name: "Anu Cabo",
                countryId: "SC"
            },
            {
                id: "SC-05",
                name: "Anse Royale",
                countryId: "SC"
            },
            {
                id: "SC-06",
                name: "Baie Lazare",
                countryId: "SC"
            },
            {
                id: "SC-07",
                name: "Baie Sainte Anne",
                countryId: "SC"
            },
            {
                id: "SC-08",
                name: "Beau Vallon",
                countryId: "SC"
            },
            {
                id: "SC-09",
                name: "Bel Air",
                countryId: "SC"
            },
            {
                id: "SC-10",
                name: "Bel Ombre",
                countryId: "SC"
            },
            {
                id: "SC-11",
                name: "Cascade",
                countryId: "SC"
            },
            {
                id: "SC-12",
                name: "Glacis",
                countryId: "SC"
            },
            {
                id: "SC-13",
                name: "Grand Anse Mahe",
                countryId: "SC"
            },
            {
                id: "SC-14",
                name: "Grand Anse Praslin",
                countryId: "SC"
            },
            {
                id: "SC-15",
                name: "Dique",
                countryId: "SC"
            },
            {
                id: "SC-16",
                name: "La Riviere Anglaise",
                countryId: "SC"
            },
            {
                id: "SC-17",
                name: "Mont Buxton",
                countryId: "SC"
            },
            {
                id: "SC-18",
                name: "Mont Fleuri",
                countryId: "SC"
            },
            {
                id: "SC-19",
                name: "Plaisance",
                countryId: "SC"
            },
            {
                id: "SC-20",
                name: "Pointe La Rue",
                countryId: "SC"
            },
            {
                id: "SC-21",
                name: "Port Glaud",
                countryId: "SC"
            },
            {
                id: "SC-22",
                name: "Saint Louis",
                countryId: "SC"
            },
            {
                id: "SC-23",
                name: "Takamaka",
                countryId: "SC"
            },
            {
                id: "SC-24",
                name: "Les Mamelles",
                countryId: "SC"
            },
            {
                id: "SC-25",
                name: "Roche Caiman",
                countryId: "SC"
            },
            {
                id: "SD-DC",
                name: "Wasat Darfur Zalinjay",
                countryId: "SD"
            },
            {
                id: "SD-DE",
                name: "Sharq Darfur",
                countryId: "SD"
            },
            {
                id: "SD-DN",
                name: "Shamal Darfur",
                countryId: "SD"
            },
            {
                id: "SD-DS",
                name: "Janub Darfur",
                countryId: "SD"
            },
            {
                id: "SD-DW",
                name: "Gharb Darfur",
                countryId: "SD"
            },
            {
                id: "SD-GD",
                name: "Gadarif",
                countryId: "SD"
            },
            {
                id: "SD-GK",
                name: "Gharb Kurdufan",
                countryId: "SD"
            },
            {
                id: "SD-GZ",
                name: "Al Jazirah",
                countryId: "SD"
            },
            {
                id: "SD-KA",
                name: "Kassala",
                countryId: "SD"
            },
            {
                id: "SD-KH",
                name: "Al Khartum",
                countryId: "SD"
            },
            {
                id: "SD-KN",
                name: "Shiamal Kurdufan",
                countryId: "SD"
            },
            {
                id: "SD-KS",
                name: "Janub Kurdufan",
                countryId: "SD"
            },
            {
                id: "SD-NB",
                name: "An Nil Al Azraq",
                countryId: "SD"
            },
            {
                id: "SD-NO",
                name: "Ash Shamaliyah",
                countryId: "SD"
            },
            {
                id: "SD-NR",
                name: "Nahr An Nil",
                countryId: "SD"
            },
            {
                id: "SD-NW",
                name: "An Nil Al Abyad",
                countryId: "SD"
            },
            {
                id: "SD-RS",
                name: "Al Bahr Al Ahmar",
                countryId: "SD"
            },
            {
                id: "SD-SI",
                name: "Sinnar",
                countryId: "SD"
            },
            {
                id: "SE-AB",
                name: "Estocolmo",
                countryId: "SE"
            },
            {
                id: "SE-AC",
                name: "Västerbotten",
                countryId: "SE"
            },
            {
                id: "SE-BD",
                name: "Norrbotten",
                countryId: "SE"
            },
            {
                id: "SE-C",
                name: "Uppsala",
                countryId: "SE"
            },
            {
                id: "SE-D",
                name: "Södermanland",
                countryId: "SE"
            },
            {
                id: "SE-E",
                name: "Ostergotland",
                countryId: "SE"
            },
            {
                id: "SE-F",
                name: "Jönköping",
                countryId: "SE"
            },
            {
                id: "SE-G",
                name: "Kronoberg",
                countryId: "SE"
            },
            {
                id: "SE-H",
                name: "Kalmar",
                countryId: "SE"
            },
            {
                id: "SE-I",
                name: "Gotland",
                countryId: "SE"
            },
            {
                id: "SE-K",
                name: "Blekinge",
                countryId: "SE"
            },
            {
                id: "SE-M",
                name: "Skåne",
                countryId: "SE"
            },
            {
                id: "SE-N",
                name: "Halland",
                countryId: "SE"
            },
            {
                id: "SE-O",
                name: "Västra Götaland",
                countryId: "SE"
            },
            {
                id: "SE-S",
                name: "Varmland",
                countryId: "SE"
            },
            {
                id: "SE-T",
                name: "Orebro",
                countryId: "SE"
            },
            {
                id: "SE-U",
                name: "Västmanland",
                countryId: "SE"
            },
            {
                id: "SE-W",
                name: "Dalarna",
                countryId: "SE"
            },
            {
                id: "SE-X",
                name: "Gävleborg",
                countryId: "SE"
            },
            {
                id: "SE-Y",
                name: "Västernorrland",
                countryId: "SE"
            },
            {
                id: "SE-Z",
                name: "Jämtland",
                countryId: "SE"
            },
            {
                id: "SG-01",
                name: "Singapur Central",
                countryId: "SG"
            },
            {
                id: "SG-02",
                name: "Noreste",
                countryId: "SG"
            },
            {
                id: "SG-03",
                name: "Noroeste",
                countryId: "SG"
            },
            {
                id: "SG-04",
                name: "Sureste",
                countryId: "SG"
            },
            {
                id: "SG-05",
                name: "Sur Oeste",
                countryId: "SG"
            },
            {
                id: "SH-AC",
                name: "Ascension",
                countryId: "SH"
            },
            {
                id: "SH-HL",
                name: "Santa Helena",
                countryId: "SH"
            },
            {
                id: "SH-TA",
                name: "Tristán Da Cunha",
                countryId: "SH"
            },
            {
                id: "SI-001",
                name: "Ajdovščina",
                countryId: "SI"
            },
            {
                id: "SI-002",
                name: "Beltinci",
                countryId: "SI"
            },
            {
                id: "SI-003",
                name: "Bled",
                countryId: "SI"
            },
            {
                id: "SI-004",
                name: "Bohinj",
                countryId: "SI"
            },
            {
                id: "SI-005",
                name: "Arándano",
                countryId: "SI"
            },
            {
                id: "SI-006",
                name: "Bovec",
                countryId: "SI"
            },
            {
                id: "SI-007",
                name: "Brda",
                countryId: "SI"
            },
            {
                id: "SI-008",
                name: "Brezovica",
                countryId: "SI"
            },
            {
                id: "SI-009",
                name: "Brežice",
                countryId: "SI"
            },
            {
                id: "SI-010",
                name: "Tisina",
                countryId: "SI"
            },
            {
                id: "SI-011",
                name: "Celje",
                countryId: "SI"
            },
            {
                id: "SI-012",
                name: "Cerklje Na Gorenjskem",
                countryId: "SI"
            },
            {
                id: "SI-013",
                name: "Cerknica",
                countryId: "SI"
            },
            {
                id: "SI-014",
                name: "Cerkno",
                countryId: "SI"
            },
            {
                id: "SI-015",
                name: "Crensovci",
                countryId: "SI"
            },
            {
                id: "SI-016",
                name: "Črna Na Koroškem",
                countryId: "SI"
            },
            {
                id: "SI-017",
                name: "Črnomelj",
                countryId: "SI"
            },
            {
                id: "SI-018",
                name: "Destrnik",
                countryId: "SI"
            },
            {
                id: "SI-019",
                name: "Divača",
                countryId: "SI"
            },
            {
                id: "SI-020",
                name: "Dobrepolje",
                countryId: "SI"
            },
            {
                id: "SI-021",
                name: "Dobrova-Polhov Gradec",
                countryId: "SI"
            },
            {
                id: "SI-022",
                name: "Dol Pri Ljubljana",
                countryId: "SI"
            },
            {
                id: "SI-023",
                name: "Domžale",
                countryId: "SI"
            },
            {
                id: "SI-024",
                name: "Dornava",
                countryId: "SI"
            },
            {
                id: "SI-025",
                name: "Dravograd",
                countryId: "SI"
            },
            {
                id: "SI-026",
                name: "Duplek",
                countryId: "SI"
            },
            {
                id: "SI-027",
                name: "Gorenja Vas-Poljane",
                countryId: "SI"
            },
            {
                id: "SI-028",
                name: "Gorišnica",
                countryId: "SI"
            },
            {
                id: "SI-029",
                name: "Gornja Radgona",
                countryId: "SI"
            },
            {
                id: "SI-030",
                name: "Gornji Grad",
                countryId: "SI"
            },
            {
                id: "SI-031",
                name: "Alta Petrovci",
                countryId: "SI"
            },
            {
                id: "SI-032",
                name: "Grosuplje",
                countryId: "SI"
            },
            {
                id: "SI-033",
                name: "Salovci",
                countryId: "SI"
            },
            {
                id: "SI-034",
                name: "Hrastnik",
                countryId: "SI"
            },
            {
                id: "SI-035",
                name: "Hrpelje-Kozina",
                countryId: "SI"
            },
            {
                id: "SI-036",
                name: "Idrija",
                countryId: "SI"
            },
            {
                id: "SI-037",
                name: "Ig",
                countryId: "SI"
            },
            {
                id: "SI-038",
                name: "Ilirska Bistrica",
                countryId: "SI"
            },
            {
                id: "SI-039",
                name: "Ivančna Gorica",
                countryId: "SI"
            },
            {
                id: "SI-040",
                name: "Izola",
                countryId: "SI"
            },
            {
                id: "SI-041",
                name: "Jesenice",
                countryId: "SI"
            },
            {
                id: "SI-042",
                name: "Juršinci",
                countryId: "SI"
            },
            {
                id: "SI-043",
                name: "Kamnik",
                countryId: "SI"
            },
            {
                id: "SI-044",
                name: "Kanal",
                countryId: "SI"
            },
            {
                id: "SI-045",
                name: "Kidričevo",
                countryId: "SI"
            },
            {
                id: "SI-046",
                name: "Kobarid",
                countryId: "SI"
            },
            {
                id: "SI-047",
                name: "Kobilje",
                countryId: "SI"
            },
            {
                id: "SI-048",
                name: "Kočevje",
                countryId: "SI"
            },
            {
                id: "SI-049",
                name: "Komen",
                countryId: "SI"
            },
            {
                id: "SI-050",
                name: "Koper",
                countryId: "SI"
            },
            {
                id: "SI-051",
                name: "Kozje",
                countryId: "SI"
            },
            {
                id: "SI-052",
                name: "Kranj",
                countryId: "SI"
            },
            {
                id: "SI-053",
                name: "Kranjska Gora",
                countryId: "SI"
            },
            {
                id: "SI-054",
                name: "Krško",
                countryId: "SI"
            },
            {
                id: "SI-055",
                name: "Kungota",
                countryId: "SI"
            },
            {
                id: "SI-056",
                name: "Kuzma",
                countryId: "SI"
            },
            {
                id: "SI-057",
                name: "Lasko",
                countryId: "SI"
            },
            {
                id: "SI-058",
                name: "Lenart",
                countryId: "SI"
            },
            {
                id: "SI-059",
                name: "Tienda",
                countryId: "SI"
            },
            {
                id: "SI-060",
                name: "Litija",
                countryId: "SI"
            },
            {
                id: "SI-061",
                name: "Ljubljana",
                countryId: "SI"
            },
            {
                id: "SI-062",
                name: "Ljubno",
                countryId: "SI"
            },
            {
                id: "SI-063",
                name: "Ljutomer",
                countryId: "SI"
            },
            {
                id: "SI-064",
                name: "Logatec",
                countryId: "SI"
            },
            {
                id: "SI-065",
                name: "Loka Valle",
                countryId: "SI"
            },
            {
                id: "SI-066",
                name: "Loški Potok",
                countryId: "SI"
            },
            {
                id: "SI-067",
                name: "Luce",
                countryId: "SI"
            },
            {
                id: "SI-068",
                name: "Lukovica",
                countryId: "SI"
            },
            {
                id: "SI-069",
                name: "Majšperk",
                countryId: "SI"
            },
            {
                id: "SI-070",
                name: "Maribor",
                countryId: "SI"
            },
            {
                id: "SI-071",
                name: "Medvode",
                countryId: "SI"
            },
            {
                id: "SI-072",
                name: "Menges",
                countryId: "SI"
            },
            {
                id: "SI-073",
                name: "Metlika",
                countryId: "SI"
            },
            {
                id: "SI-074",
                name: "Mezica",
                countryId: "SI"
            },
            {
                id: "SI-075",
                name: "Miren-Kostanjevica",
                countryId: "SI"
            },
            {
                id: "SI-076",
                name: "Mislinja",
                countryId: "SI"
            },
            {
                id: "SI-077",
                name: "Moravče",
                countryId: "SI"
            },
            {
                id: "SI-078",
                name: "Moravske Toplice",
                countryId: "SI"
            },
            {
                id: "SI-079",
                name: "Mozirje",
                countryId: "SI"
            },
            {
                id: "SI-080",
                name: "Murska Sobota",
                countryId: "SI"
            },
            {
                id: "SI-081",
                name: "Muta",
                countryId: "SI"
            },
            {
                id: "SI-082",
                name: "Naklo",
                countryId: "SI"
            },
            {
                id: "SI-083",
                name: "Nazarje",
                countryId: "SI"
            },
            {
                id: "SI-084",
                name: "Nova Gorica",
                countryId: "SI"
            },
            {
                id: "SI-085",
                name: "Novo Mesto",
                countryId: "SI"
            },
            {
                id: "SI-086",
                name: "Odranci",
                countryId: "SI"
            },
            {
                id: "SI-087",
                name: "Ormož",
                countryId: "SI"
            },
            {
                id: "SI-088",
                name: "Osilnica",
                countryId: "SI"
            },
            {
                id: "SI-089",
                name: "Pesnica",
                countryId: "SI"
            },
            {
                id: "SI-090",
                name: "Piran",
                countryId: "SI"
            },
            {
                id: "SI-091",
                name: "Pivka",
                countryId: "SI"
            },
            {
                id: "SI-092",
                name: "Podčetrtek",
                countryId: "SI"
            },
            {
                id: "SI-093",
                name: "Podvelka",
                countryId: "SI"
            },
            {
                id: "SI-094",
                name: "Postojna",
                countryId: "SI"
            },
            {
                id: "SI-095",
                name: "Preddvor",
                countryId: "SI"
            },
            {
                id: "SI-096",
                name: "Ptuj",
                countryId: "SI"
            },
            {
                id: "SI-097",
                name: "Puconci",
                countryId: "SI"
            },
            {
                id: "SI-098",
                name: "Race-Fram",
                countryId: "SI"
            },
            {
                id: "SI-099",
                name: "Radeče",
                countryId: "SI"
            },
            {
                id: "SI-100",
                name: "Radenci",
                countryId: "SI"
            },
            {
                id: "SI-101",
                name: "Radlje Ob Dravi",
                countryId: "SI"
            },
            {
                id: "SI-102",
                name: "Radovljica",
                countryId: "SI"
            },
            {
                id: "SI-103",
                name: "Ravne",
                countryId: "SI"
            },
            {
                id: "SI-104",
                name: "Ribnica",
                countryId: "SI"
            },
            {
                id: "SI-105",
                name: "Rogašovci",
                countryId: "SI"
            },
            {
                id: "SI-106",
                name: "Rogaska Slatina",
                countryId: "SI"
            },
            {
                id: "SI-107",
                name: "Rogatec",
                countryId: "SI"
            },
            {
                id: "SI-108",
                name: "Ruse",
                countryId: "SI"
            },
            {
                id: "SI-109",
                name: "Semič",
                countryId: "SI"
            },
            {
                id: "SI-110",
                name: "Sevnica",
                countryId: "SI"
            },
            {
                id: "SI-111",
                name: "Sežana",
                countryId: "SI"
            },
            {
                id: "SI-112",
                name: "Slovenj Gradec",
                countryId: "SI"
            },
            {
                id: "SI-113",
                name: "Eslovenia Bistrica",
                countryId: "SI"
            },
            {
                id: "SI-114",
                name: "Esloveno Konjice",
                countryId: "SI"
            },
            {
                id: "SI-115",
                name: "Starše",
                countryId: "SI"
            },
            {
                id: "SI-116",
                name: "Sveti Jurij",
                countryId: "SI"
            },
            {
                id: "SI-117",
                name: "Sencur",
                countryId: "SI"
            },
            {
                id: "SI-118",
                name: "Šentilj",
                countryId: "SI"
            },
            {
                id: "SI-119",
                name: "Sentjernej",
                countryId: "SI"
            },
            {
                id: "SI-120",
                name: "Šentjur",
                countryId: "SI"
            },
            {
                id: "SI-121",
                name: "Skocjan",
                countryId: "SI"
            },
            {
                id: "SI-122",
                name: "Škofja Loka",
                countryId: "SI"
            },
            {
                id: "SI-123",
                name: "Skofljica",
                countryId: "SI"
            },
            {
                id: "SI-124",
                name: "Pangea Jelsah",
                countryId: "SI"
            },
            {
                id: "SI-125",
                name: "Šmartno Ob Paki",
                countryId: "SI"
            },
            {
                id: "SI-126",
                name: "Šoštanj",
                countryId: "SI"
            },
            {
                id: "SI-127",
                name: "Štore",
                countryId: "SI"
            },
            {
                id: "SI-128",
                name: "Tolmin",
                countryId: "SI"
            },
            {
                id: "SI-129",
                name: "Trbovlje",
                countryId: "SI"
            },
            {
                id: "SI-130",
                name: "Trebnje",
                countryId: "SI"
            },
            {
                id: "SI-131",
                name: "Tržič",
                countryId: "SI"
            },
            {
                id: "SI-132",
                name: "Turnisce",
                countryId: "SI"
            },
            {
                id: "SI-133",
                name: "Velenje",
                countryId: "SI"
            },
            {
                id: "SI-134",
                name: "Gran Lasce",
                countryId: "SI"
            },
            {
                id: "SI-135",
                name: "Udine",
                countryId: "SI"
            },
            {
                id: "SI-136",
                name: "Vipava",
                countryId: "SI"
            },
            {
                id: "SI-137",
                name: "Vitanje",
                countryId: "SI"
            },
            {
                id: "SI-138",
                name: "Vodice",
                countryId: "SI"
            },
            {
                id: "SI-139",
                name: "Vojnik",
                countryId: "SI"
            },
            {
                id: "SI-140",
                name: "Vrhnika",
                countryId: "SI"
            },
            {
                id: "SI-141",
                name: "Vuzenica",
                countryId: "SI"
            },
            {
                id: "SI-142",
                name: "Zagorje Ob Savi",
                countryId: "SI"
            },
            {
                id: "SI-143",
                name: "Zavrč",
                countryId: "SI"
            },
            {
                id: "SI-144",
                name: "Zreče",
                countryId: "SI"
            },
            {
                id: "SI-146",
                name: "Zelezniki",
                countryId: "SI"
            },
            {
                id: "SI-147",
                name: "Žiri",
                countryId: "SI"
            },
            {
                id: "SI-148",
                name: "Benedikt",
                countryId: "SI"
            },
            {
                id: "SI-149",
                name: "Bistrica Ob Sotli",
                countryId: "SI"
            },
            {
                id: "SI-150",
                name: "Bloke",
                countryId: "SI"
            },
            {
                id: "SI-151",
                name: "Braslovče",
                countryId: "SI"
            },
            {
                id: "SI-152",
                name: "Cankova",
                countryId: "SI"
            },
            {
                id: "SI-153",
                name: "Cerkvenjak",
                countryId: "SI"
            },
            {
                id: "SI-154",
                name: "Dobje",
                countryId: "SI"
            },
            {
                id: "SI-155",
                name: "Dobrna",
                countryId: "SI"
            },
            {
                id: "SI-156",
                name: "Dobrovnik",
                countryId: "SI"
            },
            {
                id: "SI-157",
                name: "Dolenjske Spa",
                countryId: "SI"
            },
            {
                id: "SI-158",
                name: "Grad",
                countryId: "SI"
            },
            {
                id: "SI-159",
                name: "Hajdina",
                countryId: "SI"
            },
            {
                id: "SI-160",
                name: "Hoce-Slivnica",
                countryId: "SI"
            },
            {
                id: "SI-161",
                name: "Hodos",
                countryId: "SI"
            },
            {
                id: "SI-162",
                name: "Horjul",
                countryId: "SI"
            },
            {
                id: "SI-163",
                name: "Jezersko",
                countryId: "SI"
            },
            {
                id: "SI-164",
                name: "Komenda",
                countryId: "SI"
            },
            {
                id: "SI-165",
                name: "Kostel",
                countryId: "SI"
            },
            {
                id: "SI-166",
                name: "Križevci",
                countryId: "SI"
            },
            {
                id: "SI-167",
                name: "Lawrence En Pohorje",
                countryId: "SI"
            },
            {
                id: "SI-168",
                name: "Markovci",
                countryId: "SI"
            },
            {
                id: "SI-169",
                name: "Miklavž Na Dravskem Polju",
                countryId: "SI"
            },
            {
                id: "SI-170",
                name: "Mirna Pec",
                countryId: "SI"
            },
            {
                id: "SI-171",
                name: "Oplotnica",
                countryId: "SI"
            },
            {
                id: "SI-172",
                name: "Podlehnik",
                countryId: "SI"
            },
            {
                id: "SI-173",
                name: "Polzela",
                countryId: "SI"
            },
            {
                id: "SI-174",
                name: "Prebold",
                countryId: "SI"
            },
            {
                id: "SI-175",
                name: "Prevalje",
                countryId: "SI"
            },
            {
                id: "SI-176",
                name: "Razkrizje",
                countryId: "SI"
            },
            {
                id: "SI-177",
                name: "Ribnica En Pohorje",
                countryId: "SI"
            },
            {
                id: "SI-178",
                name: "Selnica Ob Dravi",
                countryId: "SI"
            },
            {
                id: "SI-179",
                name: "Sodražica",
                countryId: "SI"
            },
            {
                id: "SI-180",
                name: "Solčava",
                countryId: "SI"
            },
            {
                id: "SI-181",
                name: "Sveta Ana",
                countryId: "SI"
            },
            {
                id: "SI-182",
                name: "Sveti Andraž En Esloveno Goricah",
                countryId: "SI"
            },
            {
                id: "SI-183",
                name: "Šempeter Vrtojba",
                countryId: "SI"
            },
            {
                id: "SI-184",
                name: "Tabor",
                countryId: "SI"
            },
            {
                id: "SI-185",
                name: "Vas Trnovská",
                countryId: "SI"
            },
            {
                id: "SI-186",
                name: "Trzin",
                countryId: "SI"
            },
            {
                id: "SI-187",
                name: "Velika Polana",
                countryId: "SI"
            },
            {
                id: "SI-188",
                name: "Veržej",
                countryId: "SI"
            },
            {
                id: "SI-189",
                name: "Vrana",
                countryId: "SI"
            },
            {
                id: "SI-190",
                name: "Žalec",
                countryId: "SI"
            },
            {
                id: "SI-191",
                name: "Žetale",
                countryId: "SI"
            },
            {
                id: "SI-192",
                name: "Žirovnica",
                countryId: "SI"
            },
            {
                id: "SI-193",
                name: "Žužemberk",
                countryId: "SI"
            },
            {
                id: "SI-194",
                name: "Šmartno Pri Litiji",
                countryId: "SI"
            },
            {
                id: "SI-195",
                name: "Rápidamente",
                countryId: "SI"
            },
            {
                id: "SI-196",
                name: "Cirkulane",
                countryId: "SI"
            },
            {
                id: "SI-197",
                name: "Kosanjevica De Krka",
                countryId: "SI"
            },
            {
                id: "SI-198",
                name: "Makole",
                countryId: "SI"
            },
            {
                id: "SI-199",
                name: "Mokronog-Trebelno",
                countryId: "SI"
            },
            {
                id: "SI-200",
                name: "Poljčane",
                countryId: "SI"
            },
            {
                id: "SI-201",
                name: "Rencia-Vogrsko",
                countryId: "SI"
            },
            {
                id: "SI-202",
                name: "Središče Ob Dravi",
                countryId: "SI"
            },
            {
                id: "SI-203",
                name: "Straža",
                countryId: "SI"
            },
            {
                id: "SI-204",
                name: "Santa Trinidad En Esloveno Goricah",
                countryId: "SI"
            },
            {
                id: "SI-205",
                name: "Santo Tomás",
                countryId: "SI"
            },
            {
                id: "SI-206",
                name: "Šmarješke Toplice",
                countryId: "SI"
            },
            {
                id: "SI-207",
                name: "Tierras Altas",
                countryId: "SI"
            },
            {
                id: "SI-208",
                name: "Log-Dragomer",
                countryId: "SI"
            },
            {
                id: "SI-209",
                name: "Rečica Ob Savinji",
                countryId: "SI"
            },
            {
                id: "SI-210",
                name: "San Jorge En Esloveno Goricah",
                countryId: "SI"
            },
            {
                id: "SI-211",
                name: "Šentrupert",
                countryId: "SI"
            },
            {
                id: "SI-212",
                name: "Mirna",
                countryId: "SI"
            },
            {
                id: "SI-213",
                name: "Ankaran",
                countryId: "SI"
            },
            {
                id: "SK-BC",
                name: "Banskobystricky",
                countryId: "SK"
            },
            {
                id: "SK-BL",
                name: "Bratislava",
                countryId: "SK"
            },
            {
                id: "SK-KI",
                name: "Kosicky",
                countryId: "SK"
            },
            {
                id: "SK-NI",
                name: "Nitra",
                countryId: "SK"
            },
            {
                id: "SK-PV",
                name: "Presovsky",
                countryId: "SK"
            },
            {
                id: "SK-TA",
                name: "Trnavsky",
                countryId: "SK"
            },
            {
                id: "SK-TC",
                name: "Trenciansky",
                countryId: "SK"
            },
            {
                id: "SK-ZI",
                name: "Zilinsky",
                countryId: "SK"
            },
            {
                id: "SL-E",
                name: "Oriental",
                countryId: "SL"
            },
            {
                id: "SL-N",
                name: "Del Norte",
                countryId: "SL"
            },
            {
                id: "SL-S",
                name: "Del Sur",
                countryId: "SL"
            },
            {
                id: "SL-W",
                name: "Occidental",
                countryId: "SL"
            },
            {
                id: "SM-01",
                name: "Acquaviva",
                countryId: "SM"
            },
            {
                id: "SM-02",
                name: "Chiesanuova",
                countryId: "SM"
            },
            {
                id: "SM-03",
                name: "Domagnano",
                countryId: "SM"
            },
            {
                id: "SM-04",
                name: "Faetano",
                countryId: "SM"
            },
            {
                id: "SM-05",
                name: "Fiorentino",
                countryId: "SM"
            },
            {
                id: "SM-06",
                name: "Borgo Maggiore",
                countryId: "SM"
            },
            {
                id: "SM-07",
                name: "San Marino",
                countryId: "SM"
            },
            {
                id: "SM-08",
                name: "Montegiardino",
                countryId: "SM"
            },
            {
                id: "SM-09",
                name: "Serravalle",
                countryId: "SM"
            },
            {
                id: "SN-DB",
                name: "Diourbel",
                countryId: "SN"
            },
            {
                id: "SN-DK",
                name: "Dakar",
                countryId: "SN"
            },
            {
                id: "SN-FK",
                name: "Fatick",
                countryId: "SN"
            },
            {
                id: "SN-KA",
                name: "Kaffrine",
                countryId: "SN"
            },
            {
                id: "SN-KD",
                name: "Kolda",
                countryId: "SN"
            },
            {
                id: "SN-KE",
                name: "Kedougou",
                countryId: "SN"
            },
            {
                id: "SN-KL",
                name: "Kaolack",
                countryId: "SN"
            },
            {
                id: "SN-LG",
                name: "Louga",
                countryId: "SN"
            },
            {
                id: "SN-MT",
                name: "Matam",
                countryId: "SN"
            },
            {
                id: "SN-SE",
                name: "Sedhiou",
                countryId: "SN"
            },
            {
                id: "SN-SL",
                name: "St. Louis",
                countryId: "SN"
            },
            {
                id: "SN-TC",
                name: "Tambacounda",
                countryId: "SN"
            },
            {
                id: "SN-TH",
                name: "Thies",
                countryId: "SN"
            },
            {
                id: "SN-ZG",
                name: "Ziguinchor",
                countryId: "SN"
            },
            {
                id: "SO-AW",
                name: "Awdal",
                countryId: "SO"
            },
            {
                id: "SO-BK",
                name: "Bakool",
                countryId: "SO"
            },
            {
                id: "SO-BN",
                name: "Banadir",
                countryId: "SO"
            },
            {
                id: "SO-BR",
                name: "Bari",
                countryId: "SO"
            },
            {
                id: "SO-BY",
                name: "Bahía",
                countryId: "SO"
            },
            {
                id: "SO-GA",
                name: "Galguduud",
                countryId: "SO"
            },
            {
                id: "SO-GE",
                name: "Gedo",
                countryId: "SO"
            },
            {
                id: "SO-HI",
                name: "Hiiraan",
                countryId: "SO"
            },
            {
                id: "SO-JD",
                name: "Medio",
                countryId: "SO"
            },
            {
                id: "SO-JH",
                name: "Inferior",
                countryId: "SO"
            },
            {
                id: "SO-MU",
                name: "Mudug",
                countryId: "SO"
            },
            {
                id: "SO-NU",
                name: "Nugaal",
                countryId: "SO"
            },
            {
                id: "SO-SA",
                name: "Sanaag",
                countryId: "SO"
            },
            {
                id: "SO-SD",
                name: "Medio",
                countryId: "SO"
            },
            {
                id: "SO-SH",
                name: "Inferior",
                countryId: "SO"
            },
            {
                id: "SO-SO",
                name: "Sool",
                countryId: "SO"
            },
            {
                id: "SO-TO",
                name: "Togdheer",
                countryId: "SO"
            },
            {
                id: "SO-WO",
                name: "Clasificados",
                countryId: "SO"
            },
            {
                id: "SR-BR",
                name: "Brokopondo",
                countryId: "SR"
            },
            {
                id: "SR-CM",
                name: "Commewijne",
                countryId: "SR"
            },
            {
                id: "SR-CR",
                name: "Coronie",
                countryId: "SR"
            },
            {
                id: "SR-MA",
                name: "Maroni",
                countryId: "SR"
            },
            {
                id: "SR-NI",
                name: "Nickerie",
                countryId: "SR"
            },
            {
                id: "SR-PM",
                name: "Paramaribo",
                countryId: "SR"
            },
            {
                id: "SR-PR",
                name: "Para",
                countryId: "SR"
            },
            {
                id: "SR-SA",
                name: "Saramaca",
                countryId: "SR"
            },
            {
                id: "SR-SI",
                name: "Sipaliwini",
                countryId: "SR"
            },
            {
                id: "SR-WA",
                name: "Wanica",
                countryId: "SR"
            },
            {
                id: "SS-BN",
                name: "Bahr El Ghazal",
                countryId: "SS"
            },
            {
                id: "SS-BW",
                name: "Bahr El Ghazal Occidental",
                countryId: "SS"
            },
            {
                id: "SS-CE",
                name: "Equatoria Central",
                countryId: "SS"
            },
            {
                id: "SS-EE",
                name: "Equatoria Oriental",
                countryId: "SS"
            },
            {
                id: "SS-EW",
                name: "Ecuatoria Occidental",
                countryId: "SS"
            },
            {
                id: "SS-JG",
                name: "Jonglei",
                countryId: "SS"
            },
            {
                id: "SS-LK",
                name: "Lagos",
                countryId: "SS"
            },
            {
                id: "SS-NU",
                name: "Alto Nilo",
                countryId: "SS"
            },
            {
                id: "SS-UY",
                name: "Unidad",
                countryId: "SS"
            },
            {
                id: "SS-WR",
                name: "Warrap",
                countryId: "SS"
            },
            {
                id: "ST-P",
                name: "Principe",
                countryId: "ST"
            },
            {
                id: "ST-S",
                name: "Santo Tomé",
                countryId: "ST"
            },
            {
                id: "SV-AH",
                name: "Ahuachapán",
                countryId: "SV"
            },
            {
                id: "SV-CA",
                name: "Cabañas",
                countryId: "SV"
            },
            {
                id: "SV-CH",
                name: "Chalatenango",
                countryId: "SV"
            },
            {
                id: "SV-CU",
                name: "Cuscatlán",
                countryId: "SV"
            },
            {
                id: "SV-LI",
                name: "La Libertad",
                countryId: "SV"
            },
            {
                id: "SV-MO",
                name: "Morazán",
                countryId: "SV"
            },
            {
                id: "SV-PA",
                name: "La Paz",
                countryId: "SV"
            },
            {
                id: "SV-SA",
                name: "Santa Ana",
                countryId: "SV"
            },
            {
                id: "SV-SM",
                name: "San Miguel",
                countryId: "SV"
            },
            {
                id: "SV-SO",
                name: "Sonsonate",
                countryId: "SV"
            },
            {
                id: "SV-SS",
                name: "San Salvador",
                countryId: "SV"
            },
            {
                id: "SV-SV",
                name: "San Vicente",
                countryId: "SV"
            },
            {
                id: "SV-UN",
                name: "La Unión",
                countryId: "SV"
            },
            {
                id: "SV-US",
                name: "Usulután",
                countryId: "SV"
            },
            {
                id: "SX-SX",
                name: "Sint Maarten",
                countryId: "SX"
            },
            {
                id: "SY-DI",
                name: "Damasco",
                countryId: "SY"
            },
            {
                id: "SY-DR",
                name: "Dara",
                countryId: "SY"
            },
            {
                id: "SY-DY",
                name: "Deir Al-Zour",
                countryId: "SY"
            },
            {
                id: "SY-HA",
                name: "Hasaka",
                countryId: "SY"
            },
            {
                id: "SY-HI",
                name: "Homs",
                countryId: "SY"
            },
            {
                id: "SY-HL",
                name: "Aleppo",
                countryId: "SY"
            },
            {
                id: "SY-HM",
                name: "Hama",
                countryId: "SY"
            },
            {
                id: "SY-ID",
                name: "Idlib",
                countryId: "SY"
            },
            {
                id: "SY-LA",
                name: "Lattakia",
                countryId: "SY"
            },
            {
                id: "SY-QU",
                name: "Kenitra",
                countryId: "SY"
            },
            {
                id: "SY-RA",
                name: "Raqqa",
                countryId: "SY"
            },
            {
                id: "SY-RD",
                name: "Campo De Damasco",
                countryId: "SY"
            },
            {
                id: "SY-SU",
                name: "Suwayda",
                countryId: "SY"
            },
            {
                id: "SY-TA",
                name: "Tartous",
                countryId: "SY"
            },
            {
                id: "SZ-HH",
                name: "Hhohho",
                countryId: "SZ"
            },
            {
                id: "SZ-LU",
                name: "Lubombo",
                countryId: "SZ"
            },
            {
                id: "SZ-MA",
                name: "Manzini",
                countryId: "SZ"
            },
            {
                id: "SZ-SH",
                name: "Shiselweni",
                countryId: "SZ"
            },
            {
                id: "TC-TC",
                name: "Islas Turcas Y Caicos",
                countryId: "TC"
            },
            {
                id: "TD-BA",
                name: "Batha",
                countryId: "TD"
            },
            {
                id: "TD-BG",
                name: "Bahr El Ghazal",
                countryId: "TD"
            },
            {
                id: "TD-BO",
                name: "Borkou",
                countryId: "TD"
            },
            {
                id: "TD-CB",
                name: "Chari-Baguirmi",
                countryId: "TD"
            },
            {
                id: "TD-EE",
                name: "Ennedi-Este",
                countryId: "TD"
            },
            {
                id: "TD-EO",
                name: "Ennedi Oeste",
                countryId: "TD"
            },
            {
                id: "TD-GR",
                name: "Gera",
                countryId: "TD"
            },
            {
                id: "TD-HL",
                name: "Hadjer Lamis",
                countryId: "TD"
            },
            {
                id: "TD-KA",
                name: "Kanem",
                countryId: "TD"
            },
            {
                id: "TD-LC",
                name: "Lac",
                countryId: "TD"
            },
            {
                id: "TD-LO",
                name: "Logone Occidental",
                countryId: "TD"
            },
            {
                id: "TD-LR",
                name: "Logone Oriental",
                countryId: "TD"
            },
            {
                id: "TD-MA",
                name: "Mondoul",
                countryId: "TD"
            },
            {
                id: "TD-MC",
                name: "Chari",
                countryId: "TD"
            },
            {
                id: "TD-ME",
                name: "Mayo-Kebbi-Est",
                countryId: "TD"
            },
            {
                id: "TD-ND",
                name: "Ciudad Yamena",
                countryId: "TD"
            },
            {
                id: "TD-OD",
                name: "Ouaddaï",
                countryId: "TD"
            },
            {
                id: "TD-SA",
                name: "Salamat",
                countryId: "TD"
            },
            {
                id: "TD-SI",
                name: "Sila",
                countryId: "TD"
            },
            {
                id: "TD-TA",
                name: "Tandjilé",
                countryId: "TD"
            },
            {
                id: "TD-TI",
                name: "Tibesti",
                countryId: "TD"
            },
            {
                id: "TD-WF",
                name: "Wadi Fira",
                countryId: "TD"
            },
            {
                id: "TF-01",
                name: "Tierra Adelia",
                countryId: "TF"
            },
            {
                id: "TF-02",
                name: "Islas Crozet",
                countryId: "TF"
            },
            {
                id: "TF-03",
                name: "Kerguelen",
                countryId: "TF"
            },
            {
                id: "TF-04",
                name: "Iles Saint-Paul Y Amsterdam",
                countryId: "TF"
            },
            {
                id: "TG-C",
                name: "Centro",
                countryId: "TG"
            },
            {
                id: "TG-K",
                name: "Kara",
                countryId: "TG"
            },
            {
                id: "TG-M",
                name: "Marítimo",
                countryId: "TG"
            },
            {
                id: "TG-P",
                name: "Tierras Altas",
                countryId: "TG"
            },
            {
                id: "TG-S",
                name: "Savannes",
                countryId: "TG"
            },
            {
                id: "TH-10",
                name: "Bangkok",
                countryId: "TH"
            },
            {
                id: "TH-11",
                name: "Samut Prakan",
                countryId: "TH"
            },
            {
                id: "TH-12",
                name: "Nonthaburi",
                countryId: "TH"
            },
            {
                id: "TH-13",
                name: "Pathum Thani",
                countryId: "TH"
            },
            {
                id: "TH-14",
                name: "Phra Nakhon Si Ayutthaya",
                countryId: "TH"
            },
            {
                id: "TH-15",
                name: "Ang Thong",
                countryId: "TH"
            },
            {
                id: "TH-16",
                name: "Lop Buri",
                countryId: "TH"
            },
            {
                id: "TH-17",
                name: "Sing Buri",
                countryId: "TH"
            },
            {
                id: "TH-18",
                name: "Chai Nat",
                countryId: "TH"
            },
            {
                id: "TH-19",
                name: "Saraburi",
                countryId: "TH"
            },
            {
                id: "TH-20",
                name: "Chon Buri",
                countryId: "TH"
            },
            {
                id: "TH-21",
                name: "Rayong",
                countryId: "TH"
            },
            {
                id: "TH-22",
                name: "Chanthaburi",
                countryId: "TH"
            },
            {
                id: "TH-23",
                name: "Trat",
                countryId: "TH"
            },
            {
                id: "TH-24",
                name: "Chachoengsao",
                countryId: "TH"
            },
            {
                id: "TH-25",
                name: "Prachin Buri",
                countryId: "TH"
            },
            {
                id: "TH-26",
                name: "Nakhon Nayok",
                countryId: "TH"
            },
            {
                id: "TH-27",
                name: "Sa Kaeo",
                countryId: "TH"
            },
            {
                id: "TH-30",
                name: "Nakhon Ratchasima",
                countryId: "TH"
            },
            {
                id: "TH-31",
                name: "Buri Ram",
                countryId: "TH"
            },
            {
                id: "TH-32",
                name: "Surin",
                countryId: "TH"
            },
            {
                id: "TH-33",
                name: "Si Sa Ket",
                countryId: "TH"
            },
            {
                id: "TH-34",
                name: "Ubon Ratchathani",
                countryId: "TH"
            },
            {
                id: "TH-35",
                name: "Yasothon",
                countryId: "TH"
            },
            {
                id: "TH-36",
                name: "Chaiyaphum",
                countryId: "TH"
            },
            {
                id: "TH-37",
                name: "Amnat Charoen",
                countryId: "TH"
            },
            {
                id: "TH-38",
                name: "Bueng Kan",
                countryId: "TH"
            },
            {
                id: "TH-39",
                name: "Nong Bua Lam Phu",
                countryId: "TH"
            },
            {
                id: "TH-40",
                name: "Khon Kaen",
                countryId: "TH"
            },
            {
                id: "TH-41",
                name: "Udon Thani",
                countryId: "TH"
            },
            {
                id: "TH-42",
                name: "Loei",
                countryId: "TH"
            },
            {
                id: "TH-43",
                name: "Nong Khai",
                countryId: "TH"
            },
            {
                id: "TH-44",
                name: "Por Favor Este No Es Idioma Inglés",
                countryId: "TH"
            },
            {
                id: "TH-45",
                name: "Roi Et",
                countryId: "TH"
            },
            {
                id: "TH-46",
                name: "Kalasin",
                countryId: "TH"
            },
            {
                id: "TH-47",
                name: "Sakon Nakhon",
                countryId: "TH"
            },
            {
                id: "TH-48",
                name: "Nakhon Phanom",
                countryId: "TH"
            },
            {
                id: "TH-49",
                name: "Mukdahan",
                countryId: "TH"
            },
            {
                id: "TH-50",
                name: "Chiang Mai",
                countryId: "TH"
            },
            {
                id: "TH-51",
                name: "Lamphun",
                countryId: "TH"
            },
            {
                id: "TH-52",
                name: "Lampang",
                countryId: "TH"
            },
            {
                id: "TH-53",
                name: "Uttaradit",
                countryId: "TH"
            },
            {
                id: "TH-54",
                name: "Phrae",
                countryId: "TH"
            },
            {
                id: "TH-55",
                name: "Yaya",
                countryId: "TH"
            },
            {
                id: "TH-56",
                name: "Phayao",
                countryId: "TH"
            },
            {
                id: "TH-57",
                name: "Chiang Rai",
                countryId: "TH"
            },
            {
                id: "TH-58",
                name: "Mae Hong Son",
                countryId: "TH"
            },
            {
                id: "TH-60",
                name: "Nakhon Sawan",
                countryId: "TH"
            },
            {
                id: "TH-61",
                name: "Uthai Thani",
                countryId: "TH"
            },
            {
                id: "TH-62",
                name: "Kamphaeng Phet",
                countryId: "TH"
            },
            {
                id: "TH-63",
                name: "Tak",
                countryId: "TH"
            },
            {
                id: "TH-64",
                name: "Sukhothai",
                countryId: "TH"
            },
            {
                id: "TH-65",
                name: "Phitsanulok",
                countryId: "TH"
            },
            {
                id: "TH-66",
                name: "Phichit",
                countryId: "TH"
            },
            {
                id: "TH-67",
                name: "Phetchabun",
                countryId: "TH"
            },
            {
                id: "TH-70",
                name: "Ratchaburi",
                countryId: "TH"
            },
            {
                id: "TH-71",
                name: "Kanchanaburi",
                countryId: "TH"
            },
            {
                id: "TH-72",
                name: "Suphan Buri",
                countryId: "TH"
            },
            {
                id: "TH-73",
                name: "Nakhon Phathom",
                countryId: "TH"
            },
            {
                id: "TH-74",
                name: "Samut Sakhon",
                countryId: "TH"
            },
            {
                id: "TH-75",
                name: "Samut Songkhram",
                countryId: "TH"
            },
            {
                id: "TH-76",
                name: "Phetchaburi",
                countryId: "TH"
            },
            {
                id: "TH-77",
                name: "Prachuap Khiri Khan",
                countryId: "TH"
            },
            {
                id: "TH-80",
                name: "Nakhon Si Thammarat",
                countryId: "TH"
            },
            {
                id: "TH-81",
                name: "Krabi",
                countryId: "TH"
            },
            {
                id: "TH-82",
                name: "Phang Nga",
                countryId: "TH"
            },
            {
                id: "TH-83",
                name: "Phuket",
                countryId: "TH"
            },
            {
                id: "TH-84",
                name: "Surat Thani",
                countryId: "TH"
            },
            {
                id: "TH-85",
                name: "Ranong",
                countryId: "TH"
            },
            {
                id: "TH-86",
                name: "Chumphon",
                countryId: "TH"
            },
            {
                id: "TH-90",
                name: "Songkhla",
                countryId: "TH"
            },
            {
                id: "TH-91",
                name: "Satun",
                countryId: "TH"
            },
            {
                id: "TH-92",
                name: "Trang",
                countryId: "TH"
            },
            {
                id: "TH-93",
                name: "Phatthalung",
                countryId: "TH"
            },
            {
                id: "TH-94",
                name: "Pattani",
                countryId: "TH"
            },
            {
                id: "TH-95",
                name: "Yala",
                countryId: "TH"
            },
            {
                id: "TH-96",
                name: "Narathiwat",
                countryId: "TH"
            },
            {
                id: "TJ-DU",
                name: "Dushanbe",
                countryId: "TJ"
            },
            {
                id: "TJ-GB",
                name: "Kuhistoni Badakhshon",
                countryId: "TJ"
            },
            {
                id: "TJ-KT",
                name: "Jatlón",
                countryId: "TJ"
            },
            {
                id: "TJ-SU",
                name: "Sughd",
                countryId: "TJ"
            },
            {
                id: "TK-0",
                name: "Atafu",
                countryId: "TK"
            },
            {
                id: "TK-1",
                name: "Fakaofo",
                countryId: "TK"
            },
            {
                id: "TK-2",
                name: "Nukunonu",
                countryId: "TK"
            },
            {
                id: "TL-AL",
                name: "Aileu",
                countryId: "TL"
            },
            {
                id: "TL-AN",
                name: "Ainaro",
                countryId: "TL"
            },
            {
                id: "TL-BA",
                name: "Baucau",
                countryId: "TL"
            },
            {
                id: "TL-BO",
                name: "Bobonaro",
                countryId: "TL"
            },
            {
                id: "TL-CO",
                name: "Cova Lima",
                countryId: "TL"
            },
            {
                id: "TL-DI",
                name: "Dili",
                countryId: "TL"
            },
            {
                id: "TL-ER",
                name: "Ermera",
                countryId: "TL"
            },
            {
                id: "TL-LA",
                name: "Lautem",
                countryId: "TL"
            },
            {
                id: "TL-LI",
                name: "Liquiça",
                countryId: "TL"
            },
            {
                id: "TL-MF",
                name: "Manufahi",
                countryId: "TL"
            },
            {
                id: "TL-MT",
                name: "Manatuto",
                countryId: "TL"
            },
            {
                id: "TL-OE",
                name: "Oecussi",
                countryId: "TL"
            },
            {
                id: "TL-VI",
                name: "Viqueque",
                countryId: "TL"
            },
            {
                id: "TM-A",
                name: "Ahal",
                countryId: "TM"
            },
            {
                id: "TM-B",
                name: "Balcánico",
                countryId: "TM"
            },
            {
                id: "TM-D",
                name: "Dashoguz",
                countryId: "TM"
            },
            {
                id: "TM-L",
                name: "Lebap",
                countryId: "TM"
            },
            {
                id: "TM-M",
                name: "María",
                countryId: "TM"
            },
            {
                id: "TM-S",
                name: "Asgabat",
                countryId: "TM"
            },
            {
                id: "TN-11",
                name: "Túnez",
                countryId: "TN"
            },
            {
                id: "TN-12",
                name: "Ariana",
                countryId: "TN"
            },
            {
                id: "TN-13",
                name: "Ben Arous",
                countryId: "TN"
            },
            {
                id: "TN-21",
                name: "Nabeul",
                countryId: "TN"
            },
            {
                id: "TN-22",
                name: "Zaghouan",
                countryId: "TN"
            },
            {
                id: "TN-23",
                name: "Bizerte",
                countryId: "TN"
            },
            {
                id: "TN-31",
                name: "Beja",
                countryId: "TN"
            },
            {
                id: "TN-32",
                name: "Jendouba",
                countryId: "TN"
            },
            {
                id: "TN-33",
                name: "Kef",
                countryId: "TN"
            },
            {
                id: "TN-34",
                name: "Siliana",
                countryId: "TN"
            },
            {
                id: "TN-41",
                name: "Kairouan",
                countryId: "TN"
            },
            {
                id: "TN-42",
                name: "Kasserine",
                countryId: "TN"
            },
            {
                id: "TN-43",
                name: "Sidi Bouzid",
                countryId: "TN"
            },
            {
                id: "TN-51",
                name: "Sousse",
                countryId: "TN"
            },
            {
                id: "TN-52",
                name: "Monastir",
                countryId: "TN"
            },
            {
                id: "TN-53",
                name: "Mahdia",
                countryId: "TN"
            },
            {
                id: "TN-61",
                name: "Sfax",
                countryId: "TN"
            },
            {
                id: "TN-71",
                name: "Gafsa",
                countryId: "TN"
            },
            {
                id: "TN-72",
                name: "Tozeur",
                countryId: "TN"
            },
            {
                id: "TN-73",
                name: "Kebili",
                countryId: "TN"
            },
            {
                id: "TN-81",
                name: "Gabes",
                countryId: "TN"
            },
            {
                id: "TN-82",
                name: "Medenine",
                countryId: "TN"
            },
            {
                id: "TN-83",
                name: "Tataouine",
                countryId: "TN"
            },
            {
                id: "TO-01",
                name: "Eua",
                countryId: "TO"
            },
            {
                id: "TO-02",
                name: "Ha'Apai",
                countryId: "TO"
            },
            {
                id: "TO-03",
                name: "Niuas",
                countryId: "TO"
            },
            {
                id: "TO-04",
                name: "Tongatapu",
                countryId: "TO"
            },
            {
                id: "TO-05",
                name: "Vava'U",
                countryId: "TO"
            },
            {
                id: "TR-01",
                name: "Adana",
                countryId: "TR"
            },
            {
                id: "TR-02",
                name: "Adiyaman",
                countryId: "TR"
            },
            {
                id: "TR-03",
                name: "Afyonkarahisar",
                countryId: "TR"
            },
            {
                id: "TR-04",
                name: "Agri",
                countryId: "TR"
            },
            {
                id: "TR-05",
                name: "Amasya",
                countryId: "TR"
            },
            {
                id: "TR-06",
                name: "Ankara",
                countryId: "TR"
            },
            {
                id: "TR-07",
                name: "Antalya",
                countryId: "TR"
            },
            {
                id: "TR-08",
                name: "Artvin",
                countryId: "TR"
            },
            {
                id: "TR-09",
                name: "Aydin",
                countryId: "TR"
            },
            {
                id: "TR-10",
                name: "Balikesir",
                countryId: "TR"
            },
            {
                id: "TR-11",
                name: "Bilecik",
                countryId: "TR"
            },
            {
                id: "TR-12",
                name: "Bingol",
                countryId: "TR"
            },
            {
                id: "TR-13",
                name: "Bitlis",
                countryId: "TR"
            },
            {
                id: "TR-14",
                name: "Bolu",
                countryId: "TR"
            },
            {
                id: "TR-15",
                name: "Burdur",
                countryId: "TR"
            },
            {
                id: "TR-16",
                name: "Bolsa",
                countryId: "TR"
            },
            {
                id: "TR-17",
                name: "Canakkale",
                countryId: "TR"
            },
            {
                id: "TR-18",
                name: "Cankiri",
                countryId: "TR"
            },
            {
                id: "TR-19",
                name: "Crum",
                countryId: "TR"
            },
            {
                id: "TR-20",
                name: "Denizli",
                countryId: "TR"
            },
            {
                id: "TR-21",
                name: "Diyarbakir",
                countryId: "TR"
            },
            {
                id: "TR-22",
                name: "Edirne",
                countryId: "TR"
            },
            {
                id: "TR-23",
                name: "Elazig",
                countryId: "TR"
            },
            {
                id: "TR-24",
                name: "Erzincan",
                countryId: "TR"
            },
            {
                id: "TR-25",
                name: "Erzurum",
                countryId: "TR"
            },
            {
                id: "TR-26",
                name: "Eskisehir",
                countryId: "TR"
            },
            {
                id: "TR-27",
                name: "Gaziantep",
                countryId: "TR"
            },
            {
                id: "TR-28",
                name: "Giresun",
                countryId: "TR"
            },
            {
                id: "TR-29",
                name: "Gumushane",
                countryId: "TR"
            },
            {
                id: "TR-30",
                name: "Hakkari",
                countryId: "TR"
            },
            {
                id: "TR-31",
                name: "Hatay",
                countryId: "TR"
            },
            {
                id: "TR-32",
                name: "Isparta",
                countryId: "TR"
            },
            {
                id: "TR-33",
                name: "Mirto",
                countryId: "TR"
            },
            {
                id: "TR-34",
                name: "Estanbul",
                countryId: "TR"
            },
            {
                id: "TR-35",
                name: "Izmir",
                countryId: "TR"
            },
            {
                id: "TR-36",
                name: "Kars",
                countryId: "TR"
            },
            {
                id: "TR-37",
                name: "Kastamonu",
                countryId: "TR"
            },
            {
                id: "TR-38",
                name: "Kayseri",
                countryId: "TR"
            },
            {
                id: "TR-39",
                name: "Kirklareli",
                countryId: "TR"
            },
            {
                id: "TR-40",
                name: "Kirsehir",
                countryId: "TR"
            },
            {
                id: "TR-41",
                name: "Kocaeli",
                countryId: "TR"
            },
            {
                id: "TR-42",
                name: "Konya",
                countryId: "TR"
            },
            {
                id: "TR-43",
                name: "Kutahya",
                countryId: "TR"
            },
            {
                id: "TR-44",
                name: "Malatya",
                countryId: "TR"
            },
            {
                id: "TR-45",
                name: "Manisa",
                countryId: "TR"
            },
            {
                id: "TR-46",
                name: "Kahramanmaras",
                countryId: "TR"
            },
            {
                id: "TR-47",
                name: "Mardin",
                countryId: "TR"
            },
            {
                id: "TR-48",
                name: "Mula",
                countryId: "TR"
            },
            {
                id: "TR-49",
                name: "Musa",
                countryId: "TR"
            },
            {
                id: "TR-50",
                name: "Nevsehir",
                countryId: "TR"
            },
            {
                id: "TR-51",
                name: "Nigde",
                countryId: "TR"
            },
            {
                id: "TR-52",
                name: "Ordu",
                countryId: "TR"
            },
            {
                id: "TR-53",
                name: "Rize",
                countryId: "TR"
            },
            {
                id: "TR-54",
                name: "Sakarya",
                countryId: "TR"
            },
            {
                id: "TR-55",
                name: "Samsun",
                countryId: "TR"
            },
            {
                id: "TR-56",
                name: "Siirt",
                countryId: "TR"
            },
            {
                id: "TR-57",
                name: "Sinop",
                countryId: "TR"
            },
            {
                id: "TR-58",
                name: "Sivas",
                countryId: "TR"
            },
            {
                id: "TR-59",
                name: "Tekirdag",
                countryId: "TR"
            },
            {
                id: "TR-60",
                name: "Tokat",
                countryId: "TR"
            },
            {
                id: "TR-61",
                name: "Trabzon",
                countryId: "TR"
            },
            {
                id: "TR-62",
                name: "Tunceli",
                countryId: "TR"
            },
            {
                id: "TR-63",
                name: "Sanliurfa",
                countryId: "TR"
            },
            {
                id: "TR-64",
                name: "Usak",
                countryId: "TR"
            },
            {
                id: "TR-65",
                name: "Van",
                countryId: "TR"
            },
            {
                id: "TR-66",
                name: "Yozgat",
                countryId: "TR"
            },
            {
                id: "TR-67",
                name: "Zonguldak",
                countryId: "TR"
            },
            {
                id: "TR-68",
                name: "Aksaray",
                countryId: "TR"
            },
            {
                id: "TR-69",
                name: "Bayburt",
                countryId: "TR"
            },
            {
                id: "TR-70",
                name: "Karaman",
                countryId: "TR"
            },
            {
                id: "TR-71",
                name: "Kirikkale",
                countryId: "TR"
            },
            {
                id: "TR-72",
                name: "Batman",
                countryId: "TR"
            },
            {
                id: "TR-73",
                name: "Sirnak",
                countryId: "TR"
            },
            {
                id: "TR-74",
                name: "Bartin",
                countryId: "TR"
            },
            {
                id: "TR-75",
                name: "Ardahan",
                countryId: "TR"
            },
            {
                id: "TR-76",
                name: "Igdir",
                countryId: "TR"
            },
            {
                id: "TR-77",
                name: "Yalova",
                countryId: "TR"
            },
            {
                id: "TR-78",
                name: "Karabuka",
                countryId: "TR"
            },
            {
                id: "TR-79",
                name: "Kilis",
                countryId: "TR"
            },
            {
                id: "TR-80",
                name: "Osmaniye",
                countryId: "TR"
            },
            {
                id: "TR-81",
                name: "Duzce",
                countryId: "TR"
            },
            {
                id: "TT-ARI",
                name: "Arima",
                countryId: "TT"
            },
            {
                id: "TT-CHA",
                name: "Chaguanas",
                countryId: "TT"
            },
            {
                id: "TT-CTT",
                name: "Couva-Tabaquite-Talparo",
                countryId: "TT"
            },
            {
                id: "TT-DMN",
                name: "Diefo Martin",
                countryId: "TT"
            },
            {
                id: "TT-MRC",
                name: "Mayaro-Río Claro",
                countryId: "TT"
            },
            {
                id: "TT-PED",
                name: "Penal-Debe",
                countryId: "TT"
            },
            {
                id: "TT-POS",
                name: "Puerto De España",
                countryId: "TT"
            },
            {
                id: "TT-PRT",
                name: "Princes Town",
                countryId: "TT"
            },
            {
                id: "TT-PTF",
                name: "Point Fortin",
                countryId: "TT"
            },
            {
                id: "TT-SFO",
                name: "San Fernando",
                countryId: "TT"
            },
            {
                id: "TT-SGE",
                name: "Sangre Grande",
                countryId: "TT"
            },
            {
                id: "TT-SIP",
                name: "Siparia",
                countryId: "TT"
            },
            {
                id: "TT-SJL",
                name: "San Juan-Laventille",
                countryId: "TT"
            },
            {
                id: "TT-TOB",
                name: "Tobago",
                countryId: "TT"
            },
            {
                id: "TT-TUP",
                name: "Tunapuna-Piarco",
                countryId: "TT"
            },
            {
                id: "TV-FUN",
                name: "Funafuti",
                countryId: "TV"
            },
            {
                id: "TV-NIT",
                name: "Niutao",
                countryId: "TV"
            },
            {
                id: "TV-NKF",
                name: "Nukufetau",
                countryId: "TV"
            },
            {
                id: "TV-NKL",
                name: "Nukulaelae",
                countryId: "TV"
            },
            {
                id: "TV-NMA",
                name: "Nanumea",
                countryId: "TV"
            },
            {
                id: "TV-NMG",
                name: "Nanumanga",
                countryId: "TV"
            },
            {
                id: "TV-NUI",
                name: "Nui",
                countryId: "TV"
            },
            {
                id: "TV-VAU",
                name: "Vaitupu",
                countryId: "TV"
            },
            {
                id: "TW-CHA",
                name: "Changhua",
                countryId: "TW"
            },
            {
                id: "TW-CYQ",
                name: "Chiayi",
                countryId: "TW"
            },
            {
                id: "TW-HSQ",
                name: "Hsinchu",
                countryId: "TW"
            },
            {
                id: "TW-HUA",
                name: "Hualien",
                countryId: "TW"
            },
            {
                id: "TW-ILA",
                name: "Ilan",
                countryId: "TW"
            },
            {
                id: "TW-KEE",
                name: "Keelung",
                countryId: "TW"
            },
            {
                id: "TW-KHH",
                name: "Ciudad De Kaohsiung",
                countryId: "TW"
            },
            {
                id: "TW-KIN",
                name: "Kinmen",
                countryId: "TW"
            },
            {
                id: "TW-LIE",
                name: "Lianjiang",
                countryId: "TW"
            },
            {
                id: "TW-MIA",
                name: "Miaoli",
                countryId: "TW"
            },
            {
                id: "TW-NAN",
                name: "Nantou",
                countryId: "TW"
            },
            {
                id: "TW-NWT",
                name: "Nueva Ciudad De Taipei",
                countryId: "TW"
            },
            {
                id: "TW-PEN",
                name: "Penghu",
                countryId: "TW"
            },
            {
                id: "TW-PIF",
                name: "Pingtung",
                countryId: "TW"
            },
            {
                id: "TW-TAO",
                name: "Taoyuan City",
                countryId: "TW"
            },
            {
                id: "TW-TNN",
                name: "La Ciudad De Tainan",
                countryId: "TW"
            },
            {
                id: "TW-TPE",
                name: "Ciudad De Taipei",
                countryId: "TW"
            },
            {
                id: "TW-TTT",
                name: "Taitung",
                countryId: "TW"
            },
            {
                id: "TW-TXG",
                name: "La Ciudad De Taichung",
                countryId: "TW"
            },
            {
                id: "TW-YUN",
                name: "Yunlin",
                countryId: "TW"
            },
            {
                id: "TZ-01",
                name: "Arusha",
                countryId: "TZ"
            },
            {
                id: "TZ-02",
                name: "Dar Es Salaam",
                countryId: "TZ"
            },
            {
                id: "TZ-03",
                name: "Dodoma",
                countryId: "TZ"
            },
            {
                id: "TZ-27",
                name: "Geita",
                countryId: "TZ"
            },
            {
                id: "TZ-04",
                name: "Iringa",
                countryId: "TZ"
            },
            {
                id: "TZ-05",
                name: "Kagera",
                countryId: "TZ"
            },
            {
                id: "TZ-06",
                name: "Norte Pemba",
                countryId: "TZ"
            },
            {
                id: "TZ-07",
                name: "Norte Unguja",
                countryId: "TZ"
            },
            {
                id: "TZ-28",
                name: "Katavi",
                countryId: "TZ"
            },
            {
                id: "TZ-08",
                name: "Kigoma",
                countryId: "TZ"
            },
            {
                id: "TZ-09",
                name: "Kilimanjaro",
                countryId: "TZ"
            },
            {
                id: "TZ-10",
                name: "Sur Pemba",
                countryId: "TZ"
            },
            {
                id: "TZ-11",
                name: "Unguja Sur",
                countryId: "TZ"
            },
            {
                id: "TZ-12",
                name: "Lindi",
                countryId: "TZ"
            },
            {
                id: "TZ-26",
                name: "Manyara",
                countryId: "TZ"
            },
            {
                id: "TZ-13",
                name: "Mara",
                countryId: "TZ"
            },
            {
                id: "TZ-14",
                name: "Mbeya",
                countryId: "TZ"
            },
            {
                id: "TZ-15",
                name: "En West",
                countryId: "TZ"
            },
            {
                id: "TZ-16",
                name: "Morogoro",
                countryId: "TZ"
            },
            {
                id: "TZ-17",
                name: "Mtwara",
                countryId: "TZ"
            },
            {
                id: "TZ-18",
                name: "Mwanza",
                countryId: "TZ"
            },
            {
                id: "TZ-29",
                name: "Njombe",
                countryId: "TZ"
            },
            {
                id: "TZ-19",
                name: "Costa",
                countryId: "TZ"
            },
            {
                id: "TZ-20",
                name: "Rukwa",
                countryId: "TZ"
            },
            {
                id: "TZ-21",
                name: "Ruvuma",
                countryId: "TZ"
            },
            {
                id: "TZ-22",
                name: "Shinyanga",
                countryId: "TZ"
            },
            {
                id: "TZ-30",
                name: "Simiyu",
                countryId: "TZ"
            },
            {
                id: "TZ-23",
                name: "Singida",
                countryId: "TZ"
            },
            {
                id: "TZ-31",
                name: "Songwe",
                countryId: "TZ"
            },
            {
                id: "TZ-24",
                name: "Tabora",
                countryId: "TZ"
            },
            {
                id: "TZ-25",
                name: "Tanga",
                countryId: "TZ"
            },
            {
                id: "UA-05",
                name: "Región Vinnytsia",
                countryId: "UA"
            },
            {
                id: "UA-07",
                name: "Volin Región",
                countryId: "UA"
            },
            {
                id: "UA-09",
                name: "Lugansk Región",
                countryId: "UA"
            },
            {
                id: "UA-12",
                name: "La Región De Dnipropetrovsk",
                countryId: "UA"
            },
            {
                id: "UA-14",
                name: "Región De Donetsk",
                countryId: "UA"
            },
            {
                id: "UA-18",
                name: "Región De Zhitomir",
                countryId: "UA"
            },
            {
                id: "UA-21",
                name: "Transcarpática",
                countryId: "UA"
            },
            {
                id: "UA-23",
                name: "Región De Zaporizhia",
                countryId: "UA"
            },
            {
                id: "UA-26",
                name: "La Región De Ivano-Frankivsk",
                countryId: "UA"
            },
            {
                id: "UA-30",
                name: "Kiev",
                countryId: "UA"
            },
            {
                id: "UA-32",
                name: "La Región De Kiev",
                countryId: "UA"
            },
            {
                id: "UA-35",
                name: "Kirovogradska",
                countryId: "UA"
            },
            {
                id: "UA-40",
                name: "Sebastopol",
                countryId: "UA"
            },
            {
                id: "UA-43",
                name: "República Autónoma De Crimea",
                countryId: "UA"
            },
            {
                id: "UA-46",
                name: "La Región De Lviv",
                countryId: "UA"
            },
            {
                id: "UA-48",
                name: "Región De Mykolaiv",
                countryId: "UA"
            },
            {
                id: "UA-51",
                name: "Región De Odessa",
                countryId: "UA"
            },
            {
                id: "UA-53",
                name: "Región De Poltava",
                countryId: "UA"
            },
            {
                id: "UA-56",
                name: "Región De Rivne",
                countryId: "UA"
            },
            {
                id: "UA-59",
                name: "Sumy Región",
                countryId: "UA"
            },
            {
                id: "UA-61",
                name: "Región De Ternopil",
                countryId: "UA"
            },
            {
                id: "UA-63",
                name: "Región De Kharkiv",
                countryId: "UA"
            },
            {
                id: "UA-65",
                name: "Jerson Región",
                countryId: "UA"
            },
            {
                id: "UA-68",
                name: "Región Jmelnytsky",
                countryId: "UA"
            },
            {
                id: "UA-71",
                name: "Región Cherkassy",
                countryId: "UA"
            },
            {
                id: "UA-74",
                name: "Región Chernihiv",
                countryId: "UA"
            },
            {
                id: "UA-77",
                name: "Región Chernivtsi",
                countryId: "UA"
            },
            {
                id: "UG-101",
                name: "Kalangala",
                countryId: "UG"
            },
            {
                id: "UG-102",
                name: "Kampala",
                countryId: "UG"
            },
            {
                id: "UG-103",
                name: "Kiboga",
                countryId: "UG"
            },
            {
                id: "UG-104",
                name: "Luwero",
                countryId: "UG"
            },
            {
                id: "UG-105",
                name: "Masaka",
                countryId: "UG"
            },
            {
                id: "UG-106",
                name: "Mpigi",
                countryId: "UG"
            },
            {
                id: "UG-107",
                name: "Mubende",
                countryId: "UG"
            },
            {
                id: "UG-108",
                name: "Mukono",
                countryId: "UG"
            },
            {
                id: "UG-109",
                name: "Nakasongola",
                countryId: "UG"
            },
            {
                id: "UG-110",
                name: "Rakai",
                countryId: "UG"
            },
            {
                id: "UG-111",
                name: "Sembabule",
                countryId: "UG"
            },
            {
                id: "UG-112",
                name: "Kayunga",
                countryId: "UG"
            },
            {
                id: "UG-113",
                name: "Wakiso",
                countryId: "UG"
            },
            {
                id: "UG-114",
                name: "Mityana",
                countryId: "UG"
            },
            {
                id: "UG-115",
                name: "Nakaseke",
                countryId: "UG"
            },
            {
                id: "UG-116",
                name: "Lyantonde",
                countryId: "UG"
            },
            {
                id: "UG-201",
                name: "Bugiri",
                countryId: "UG"
            },
            {
                id: "UG-202",
                name: "Busia",
                countryId: "UG"
            },
            {
                id: "UG-203",
                name: "Iganga",
                countryId: "UG"
            },
            {
                id: "UG-204",
                name: "Jinja",
                countryId: "UG"
            },
            {
                id: "UG-205",
                name: "Kamuli",
                countryId: "UG"
            },
            {
                id: "UG-206",
                name: "Kapchorwa",
                countryId: "UG"
            },
            {
                id: "UG-207",
                name: "Katakwi",
                countryId: "UG"
            },
            {
                id: "UG-208",
                name: "Kumi",
                countryId: "UG"
            },
            {
                id: "UG-209",
                name: "Mbale",
                countryId: "UG"
            },
            {
                id: "UG-210",
                name: "Pallisa",
                countryId: "UG"
            },
            {
                id: "UG-211",
                name: "Soroti",
                countryId: "UG"
            },
            {
                id: "UG-212",
                name: "Tororo",
                countryId: "UG"
            },
            {
                id: "UG-213",
                name: "Kaberamaido",
                countryId: "UG"
            },
            {
                id: "UG-214",
                name: "Mayuge",
                countryId: "UG"
            },
            {
                id: "UG-215",
                name: "Sironko",
                countryId: "UG"
            },
            {
                id: "UG-216",
                name: "Amuria",
                countryId: "UG"
            },
            {
                id: "UG-217",
                name: "Budaka",
                countryId: "UG"
            },
            {
                id: "UG-218",
                name: "Bukwa",
                countryId: "UG"
            },
            {
                id: "UG-219",
                name: "Butaleja",
                countryId: "UG"
            },
            {
                id: "UG-220",
                name: "Kaliro",
                countryId: "UG"
            },
            {
                id: "UG-221",
                name: "Manafwa",
                countryId: "UG"
            },
            {
                id: "UG-222",
                name: "Namutumba",
                countryId: "UG"
            },
            {
                id: "UG-223",
                name: "Bududa",
                countryId: "UG"
            },
            {
                id: "UG-224",
                name: "Bukedea",
                countryId: "UG"
            },
            {
                id: "UG-301",
                name: "Adjumani",
                countryId: "UG"
            },
            {
                id: "UG-302",
                name: "Apac",
                countryId: "UG"
            },
            {
                id: "UG-303",
                name: "Arua",
                countryId: "UG"
            },
            {
                id: "UG-304",
                name: "Gulu",
                countryId: "UG"
            },
            {
                id: "UG-305",
                name: "Kitgum",
                countryId: "UG"
            },
            {
                id: "UG-306",
                name: "Kotido",
                countryId: "UG"
            },
            {
                id: "UG-307",
                name: "Lira",
                countryId: "UG"
            },
            {
                id: "UG-308",
                name: "Moroto",
                countryId: "UG"
            },
            {
                id: "UG-309",
                name: "Moyo",
                countryId: "UG"
            },
            {
                id: "UG-310",
                name: "Nebbi",
                countryId: "UG"
            },
            {
                id: "UG-311",
                name: "Nakapiripirit",
                countryId: "UG"
            },
            {
                id: "UG-312",
                name: "Pader",
                countryId: "UG"
            },
            {
                id: "UG-313",
                name: "Yumbe",
                countryId: "UG"
            },
            {
                id: "UG-314",
                name: "Amolatar",
                countryId: "UG"
            },
            {
                id: "UG-315",
                name: "Kaabong",
                countryId: "UG"
            },
            {
                id: "UG-316",
                name: "Koboko",
                countryId: "UG"
            },
            {
                id: "UG-317",
                name: "Abim",
                countryId: "UG"
            },
            {
                id: "UG-318",
                name: "Dokolo",
                countryId: "UG"
            },
            {
                id: "UG-319",
                name: "Amuru",
                countryId: "UG"
            },
            {
                id: "UG-320",
                name: "Maracha",
                countryId: "UG"
            },
            {
                id: "UG-321",
                name: "Oyam",
                countryId: "UG"
            },
            {
                id: "UG-401",
                name: "Bundibugyo",
                countryId: "UG"
            },
            {
                id: "UG-402",
                name: "Bushenyi",
                countryId: "UG"
            },
            {
                id: "UG-403",
                name: "Hoima",
                countryId: "UG"
            },
            {
                id: "UG-404",
                name: "Kabale",
                countryId: "UG"
            },
            {
                id: "UG-405",
                name: "Kabarole",
                countryId: "UG"
            },
            {
                id: "UG-406",
                name: "Kasese",
                countryId: "UG"
            },
            {
                id: "UG-407",
                name: "Kibaale",
                countryId: "UG"
            },
            {
                id: "UG-408",
                name: "Kisoro",
                countryId: "UG"
            },
            {
                id: "UG-409",
                name: "Masindi",
                countryId: "UG"
            },
            {
                id: "UG-410",
                name: "Mbarara",
                countryId: "UG"
            },
            {
                id: "UG-411",
                name: "Ntungamo",
                countryId: "UG"
            },
            {
                id: "UG-412",
                name: "Rukungiri",
                countryId: "UG"
            },
            {
                id: "UG-413",
                name: "Kamwenge",
                countryId: "UG"
            },
            {
                id: "UG-414",
                name: "Kanungu",
                countryId: "UG"
            },
            {
                id: "UG-415",
                name: "Kyenjojo",
                countryId: "UG"
            },
            {
                id: "UG-416",
                name: "Ibanda",
                countryId: "UG"
            },
            {
                id: "UG-417",
                name: "Isingiro",
                countryId: "UG"
            },
            {
                id: "UG-418",
                name: "Kiruhura",
                countryId: "UG"
            },
            {
                id: "UG-419",
                name: "Buliisa",
                countryId: "UG"
            },
            {
                id: "UM-67",
                name: "Johnston Atoll",
                countryId: "UM"
            },
            {
                id: "UM-71",
                name: "Islas Midway",
                countryId: "UM"
            },
            {
                id: "UM-76",
                name: "Isla Navassa",
                countryId: "UM"
            },
            {
                id: "UM-79",
                name: "Wake Island",
                countryId: "UM"
            },
            {
                id: "UM-81",
                name: "Baker Island",
                countryId: "UM"
            },
            {
                id: "UM-84",
                name: "Isla Howland",
                countryId: "UM"
            },
            {
                id: "UM-86",
                name: "Jarvis Island",
                countryId: "UM"
            },
            {
                id: "UM-89",
                name: "Arrecife Kingman",
                countryId: "UM"
            },
            {
                id: "UM-95",
                name: "Palmyra Atoll",
                countryId: "UM"
            },
            {
                id: "UM-BN",
                name: "Bajo Nuevo",
                countryId: "UM"
            },
            {
                id: "UM-SB",
                name: "Banco Serranilla",
                countryId: "UM"
            },
            {
                id: "US-AK",
                name: "Alaska",
                countryId: "US"
            },
            {
                id: "US-AL",
                name: "Alabama",
                countryId: "US"
            },
            {
                id: "US-AR",
                name: "Arkansas",
                countryId: "US"
            },
            {
                id: "US-AS",
                name: "Samoa Americana",
                countryId: "US"
            },
            {
                id: "US-AZ",
                name: "Arizona",
                countryId: "US"
            },
            {
                id: "US-CA",
                name: "California",
                countryId: "US"
            },
            {
                id: "US-CO",
                name: "Colorado",
                countryId: "US"
            },
            {
                id: "US-CT",
                name: "Connecticut",
                countryId: "US"
            },
            {
                id: "US-DC",
                name: "Washington Dc.",
                countryId: "US"
            },
            {
                id: "US-DE",
                name: "Delaware",
                countryId: "US"
            },
            {
                id: "US-FL",
                name: "Florida",
                countryId: "US"
            },
            {
                id: "US-FM",
                name: "Micronesia",
                countryId: "US"
            },
            {
                id: "US-GA",
                name: "Georgia",
                countryId: "US"
            },
            {
                id: "US-GU",
                name: "Guam",
                countryId: "US"
            },
            {
                id: "US-HI",
                name: "Hawai",
                countryId: "US"
            },
            {
                id: "US-IA",
                name: "Iowa",
                countryId: "US"
            },
            {
                id: "US-ID",
                name: "Idaho",
                countryId: "US"
            },
            {
                id: "US-IL",
                name: "Illinois",
                countryId: "US"
            },
            {
                id: "US-IN",
                name: "Indiana",
                countryId: "US"
            },
            {
                id: "US-KS",
                name: "Kansas",
                countryId: "US"
            },
            {
                id: "US-KY",
                name: "Kentucky",
                countryId: "US"
            },
            {
                id: "US-LA",
                name: "Luisiana",
                countryId: "US"
            },
            {
                id: "US-MA",
                name: "Massachusetts",
                countryId: "US"
            },
            {
                id: "US-MD",
                name: "Maryland",
                countryId: "US"
            },
            {
                id: "US-ME",
                name: "Maine",
                countryId: "US"
            },
            {
                id: "US-MH",
                name: "Islas Marshall",
                countryId: "US"
            },
            {
                id: "US-MI",
                name: "Michigan",
                countryId: "US"
            },
            {
                id: "US-MN",
                name: "Minnesota",
                countryId: "US"
            },
            {
                id: "US-MO",
                name: "Misuri",
                countryId: "US"
            },
            {
                id: "US-MP",
                name: "Islas Marianas Del Norte",
                countryId: "US"
            },
            {
                id: "US-MS",
                name: "Misisipí",
                countryId: "US"
            },
            {
                id: "US-MT",
                name: "Montana",
                countryId: "US"
            },
            {
                id: "US-NC",
                name: "Carolina Del Norte",
                countryId: "US"
            },
            {
                id: "US-ND",
                name: "Dakota Del Norte",
                countryId: "US"
            },
            {
                id: "US-NE",
                name: "Nebraska",
                countryId: "US"
            },
            {
                id: "US-NH",
                name: "Nueva Hampshire",
                countryId: "US"
            },
            {
                id: "US-NJ",
                name: "New Jersey",
                countryId: "US"
            },
            {
                id: "US-NM",
                name: "Nuevo Mexico",
                countryId: "US"
            },
            {
                id: "US-NV",
                name: "Nevada",
                countryId: "US"
            },
            {
                id: "US-NY",
                name: "Nueva York",
                countryId: "US"
            },
            {
                id: "US-OH",
                name: "Ohio",
                countryId: "US"
            },
            {
                id: "US-OK",
                name: "Oklahoma",
                countryId: "US"
            },
            {
                id: "US-OR",
                name: "Oregón",
                countryId: "US"
            },
            {
                id: "US-PA",
                name: "Pensilvania",
                countryId: "US"
            },
            {
                id: "US-PR",
                name: "Puerto Rico",
                countryId: "US"
            },
            {
                id: "US-PW",
                name: "Palau",
                countryId: "US"
            },
            {
                id: "US-RI",
                name: "Rhode Island",
                countryId: "US"
            },
            {
                id: "US-SC",
                name: "Carolina Del Sur",
                countryId: "US"
            },
            {
                id: "US-SD",
                name: "Dakota Del Sur",
                countryId: "US"
            },
            {
                id: "US-TN",
                name: "Tennesse",
                countryId: "US"
            },
            {
                id: "US-TX",
                name: "Texas",
                countryId: "US"
            },
            {
                id: "US-UT",
                name: "Utah",
                countryId: "US"
            },
            {
                id: "US-VA",
                name: "Virginia",
                countryId: "US"
            },
            {
                id: "US-VI",
                name: "Islas Virgenes",
                countryId: "US"
            },
            {
                id: "US-VT",
                name: "Vermont",
                countryId: "US"
            },
            {
                id: "US-WA",
                name: "Washington",
                countryId: "US"
            },
            {
                id: "US-WI",
                name: "Wisconsin",
                countryId: "US"
            },
            {
                id: "US-WV",
                name: "Virginia Del Oeste",
                countryId: "US"
            },
            {
                id: "US-WY",
                name: "Wyoming",
                countryId: "US"
            },
            {
                id: "UY-AR",
                name: "Artigas",
                countryId: "UY"
            },
            {
                id: "UY-CA",
                name: "Canelones",
                countryId: "UY"
            },
            {
                id: "UY-CL",
                name: "Cerro Largo",
                countryId: "UY"
            },
            {
                id: "UY-CO",
                name: "Colonia",
                countryId: "UY"
            },
            {
                id: "UY-DU",
                name: "Durazno",
                countryId: "UY"
            },
            {
                id: "UY-FD",
                name: "Florida",
                countryId: "UY"
            },
            {
                id: "UY-FS",
                name: "Flores",
                countryId: "UY"
            },
            {
                id: "UY-LA",
                name: "Lavalleja",
                countryId: "UY"
            },
            {
                id: "UY-MA",
                name: "Maldonado",
                countryId: "UY"
            },
            {
                id: "UY-MO",
                name: "Montevideo",
                countryId: "UY"
            },
            {
                id: "UY-PA",
                name: "Paysandú",
                countryId: "UY"
            },
            {
                id: "UY-RN",
                name: "Río Negro",
                countryId: "UY"
            },
            {
                id: "UY-RO",
                name: "Rocha",
                countryId: "UY"
            },
            {
                id: "UY-RV",
                name: "Rivera",
                countryId: "UY"
            },
            {
                id: "UY-SA",
                name: "Salto",
                countryId: "UY"
            },
            {
                id: "UY-SJ",
                name: "San José",
                countryId: "UY"
            },
            {
                id: "UY-SO",
                name: "Soriano",
                countryId: "UY"
            },
            {
                id: "UY-TA",
                name: "Tacuarembó",
                countryId: "UY"
            },
            {
                id: "UY-TT",
                name: "Treinta Y Tres",
                countryId: "UY"
            },
            {
                id: "UZ-AN",
                name: "Andijan",
                countryId: "UZ"
            },
            {
                id: "UZ-BU",
                name: "Bukhara",
                countryId: "UZ"
            },
            {
                id: "UZ-FA",
                name: "Fergana",
                countryId: "UZ"
            },
            {
                id: "UZ-JI",
                name: "Jizzakh",
                countryId: "UZ"
            },
            {
                id: "UZ-NG",
                name: "Namangán",
                countryId: "UZ"
            },
            {
                id: "UZ-NW",
                name: "Navoiy",
                countryId: "UZ"
            },
            {
                id: "UZ-QA",
                name: "(Karshi, Kashkadarya)",
                countryId: "UZ"
            },
            {
                id: "UZ-QR",
                name: "La República De Karakalpakstán (Nukus)",
                countryId: "UZ"
            },
            {
                id: "UZ-SA",
                name: "Samarcanda",
                countryId: "UZ"
            },
            {
                id: "UZ-SI",
                name: "Gulistan, Syrdarya ()",
                countryId: "UZ"
            },
            {
                id: "UZ-SU",
                name: "Surkhandarya (Termez)",
                countryId: "UZ"
            },
            {
                id: "UZ-TK",
                name: "La Ciudad De Tashkent",
                countryId: "UZ"
            },
            {
                id: "UZ-TO",
                name: "Wiloyati",
                countryId: "UZ"
            },
            {
                id: "UZ-XO",
                name: "Jorezm",
                countryId: "UZ"
            },
            {
                id: "VA-01",
                name: "Ciudad Del Vaticano",
                countryId: "VA"
            },
            {
                id: "VC-01",
                name: "Charlotte",
                countryId: "VC"
            },
            {
                id: "VC-02",
                name: "San Andrés",
                countryId: "VC"
            },
            {
                id: "VC-03",
                name: "Saint David",
                countryId: "VC"
            },
            {
                id: "VC-04",
                name: "San Jorge",
                countryId: "VC"
            },
            {
                id: "VC-05",
                name: "San Patricio",
                countryId: "VC"
            },
            {
                id: "VC-06",
                name: "Granadinas",
                countryId: "VC"
            },
            {
                id: "VE-A",
                name: "Distrito Federal",
                countryId: "VE"
            },
            {
                id: "VE-B",
                name: "Anzoátegui",
                countryId: "VE"
            },
            {
                id: "VE-C",
                name: "Apure",
                countryId: "VE"
            },
            {
                id: "VE-D",
                name: "Aragua",
                countryId: "VE"
            },
            {
                id: "VE-E",
                name: "Barinas",
                countryId: "VE"
            },
            {
                id: "VE-F",
                name: "Bolívar",
                countryId: "VE"
            },
            {
                id: "VE-G",
                name: "Carabobo",
                countryId: "VE"
            },
            {
                id: "VE-H",
                name: "Cojedes",
                countryId: "VE"
            },
            {
                id: "VE-I",
                name: "Falcón",
                countryId: "VE"
            },
            {
                id: "VE-J",
                name: "Guárico",
                countryId: "VE"
            },
            {
                id: "VE-K",
                name: "Lara",
                countryId: "VE"
            },
            {
                id: "VE-L",
                name: "Mérida",
                countryId: "VE"
            },
            {
                id: "VE-M",
                name: "Miranda",
                countryId: "VE"
            },
            {
                id: "VE-N",
                name: "Monagas",
                countryId: "VE"
            },
            {
                id: "VE-O",
                name: "Nueva Esparta",
                countryId: "VE"
            },
            {
                id: "VE-P",
                name: "Portuguesa",
                countryId: "VE"
            },
            {
                id: "VE-R",
                name: "Sucre",
                countryId: "VE"
            },
            {
                id: "VE-S",
                name: "Táchira",
                countryId: "VE"
            },
            {
                id: "VE-T",
                name: "Trujillo",
                countryId: "VE"
            },
            {
                id: "VE-U",
                name: "Yaracuy",
                countryId: "VE"
            },
            {
                id: "VE-V",
                name: "Zulia",
                countryId: "VE"
            },
            {
                id: "VE-W",
                name: "Dependencias Federales",
                countryId: "VE"
            },
            {
                id: "VE-X",
                name: "Vargas",
                countryId: "VE"
            },
            {
                id: "VE-Y",
                name: "Delta Amacuro",
                countryId: "VE"
            },
            {
                id: "VE-Z",
                name: "Amazonas",
                countryId: "VE"
            },
            {
                id: "VG-ANG",
                name: "Anegada",
                countryId: "VG"
            },
            {
                id: "VG-JVD",
                name: "Jost Van Dyke",
                countryId: "VG"
            },
            {
                id: "VG-TTA",
                name: "Tortola",
                countryId: "VG"
            },
            {
                id: "VG-VGD",
                name: "Virgen Gorda",
                countryId: "VG"
            },
            {
                id: "VI-SCR",
                name: "St. Croix",
                countryId: "VI"
            },
            {
                id: "VI-SJO",
                name: "San Juan",
                countryId: "VI"
            },
            {
                id: "VI-STH",
                name: "Santo Tomás",
                countryId: "VI"
            },
            {
                id: "VN-01",
                name: "Laizhou",
                countryId: "VN"
            },
            {
                id: "VN-02",
                name: "Lao Cai",
                countryId: "VN"
            },
            {
                id: "VN-03",
                name: "Ha Giang",
                countryId: "VN"
            },
            {
                id: "VN-05",
                name: "Son La",
                countryId: "VN"
            },
            {
                id: "VN-06",
                name: "Yen Bai",
                countryId: "VN"
            },
            {
                id: "VN-07",
                name: "Tuyen Quang",
                countryId: "VN"
            },
            {
                id: "VN-09",
                name: "Lang Son",
                countryId: "VN"
            },
            {
                id: "VN-13",
                name: "Quang Ninh",
                countryId: "VN"
            },
            {
                id: "VN-14",
                name: "Paz",
                countryId: "VN"
            },
            {
                id: "VN-15",
                name: "Ha Tay",
                countryId: "VN"
            },
            {
                id: "VN-18",
                name: "Ninh Binh",
                countryId: "VN"
            },
            {
                id: "VN-20",
                name: "Paz",
                countryId: "VN"
            },
            {
                id: "VN-21",
                name: "Hallowmas",
                countryId: "VN"
            },
            {
                id: "VN-22",
                name: "Nghe An",
                countryId: "VN"
            },
            {
                id: "VN-23",
                name: "Ha Tinh",
                countryId: "VN"
            },
            {
                id: "VN-24",
                name: "De Quang Binh",
                countryId: "VN"
            },
            {
                id: "VN-25",
                name: "Quang Tri",
                countryId: "VN"
            },
            {
                id: "VN-26",
                name: "Thua Thien-Hue",
                countryId: "VN"
            },
            {
                id: "VN-27",
                name: "Quang Nam",
                countryId: "VN"
            },
            {
                id: "VN-28",
                name: "Kontum",
                countryId: "VN"
            },
            {
                id: "VN-29",
                name: "Quang Ngai",
                countryId: "VN"
            },
            {
                id: "VN-30",
                name: "Gia Lai",
                countryId: "VN"
            },
            {
                id: "VN-32",
                name: "Phu Yen",
                countryId: "VN"
            },
            {
                id: "VN-34",
                name: "Khanh Hoa",
                countryId: "VN"
            },
            {
                id: "VN-35",
                name: "Lam Dong",
                countryId: "VN"
            },
            {
                id: "VN-36",
                name: "Ninh Thuan",
                countryId: "VN"
            },
            {
                id: "VN-37",
                name: "Xining",
                countryId: "VN"
            },
            {
                id: "VN-39",
                name: "Dong Nai",
                countryId: "VN"
            },
            {
                id: "VN-41",
                name: "Long An",
                countryId: "VN"
            },
            {
                id: "VN-45",
                name: "Dong Thap",
                countryId: "VN"
            },
            {
                id: "VN-46",
                name: "Tien Giang",
                countryId: "VN"
            },
            {
                id: "VN-47",
                name: "Kien Giang",
                countryId: "VN"
            },
            {
                id: "VN-49",
                name: "Vinh Long",
                countryId: "VN"
            },
            {
                id: "VN-51",
                name: "Tra Vinh",
                countryId: "VN"
            },
            {
                id: "VN-52",
                name: "Soc Trang",
                countryId: "VN"
            },
            {
                id: "VN-61",
                name: "Hai Duong",
                countryId: "VN"
            },
            {
                id: "VN-63",
                name: "Henan",
                countryId: "VN"
            },
            {
                id: "VN-66",
                name: "Hung Yen",
                countryId: "VN"
            },
            {
                id: "VN-67",
                name: "Nam Dinh",
                countryId: "VN"
            },
            {
                id: "VN-68",
                name: "Phu Tho",
                countryId: "VN"
            },
            {
                id: "VN-69",
                name: "Taiyuan",
                countryId: "VN"
            },
            {
                id: "VN-70",
                name: "Vinh Phuc",
                countryId: "VN"
            },
            {
                id: "VN-73",
                name: "Hau Giang",
                countryId: "VN"
            },
            {
                id: "VN-CT",
                name: "Tho",
                countryId: "VN"
            },
            {
                id: "VN-DN",
                name: "Da Nang",
                countryId: "VN"
            },
            {
                id: "VN-HN",
                name: "Hanoi",
                countryId: "VN"
            },
            {
                id: "VN-HP",
                name: "Haiphong",
                countryId: "VN"
            },
            {
                id: "VN-SG",
                name: "Ho Chi Minh",
                countryId: "VN"
            },
            {
                id: "VU-MAP",
                name: "Malampa",
                countryId: "VU"
            },
            {
                id: "VU-PAM",
                name: "Penama",
                countryId: "VU"
            },
            {
                id: "VU-SAM",
                name: "Sanma",
                countryId: "VU"
            },
            {
                id: "VU-SEE",
                name: "Shefa",
                countryId: "VU"
            },
            {
                id: "VU-TAE",
                name: "Tafea",
                countryId: "VU"
            },
            {
                id: "VU-TOB",
                name: "Torba",
                countryId: "VU"
            },
            {
                id: "WF-ALO",
                name: "Alo",
                countryId: "WF"
            },
            {
                id: "WF-SIG",
                name: "Sigave",
                countryId: "WF"
            },
            {
                id: "WF-WAL",
                name: "Wallis",
                countryId: "WF"
            },
            {
                id: "WS-AA",
                name: "A'Ana",
                countryId: "WS"
            },
            {
                id: "WS-AL",
                name: "Familia-A-La-Tai",
                countryId: "WS"
            },
            {
                id: "WS-AT",
                name: "Dios",
                countryId: "WS"
            },
            {
                id: "WS-FA",
                name: "Fa'Asaleleaga",
                countryId: "WS"
            },
            {
                id: "WS-GE",
                name: "Gaga'Emauga",
                countryId: "WS"
            },
            {
                id: "WS-GI",
                name: "Gaga'Ifomauga",
                countryId: "WS"
            },
            {
                id: "WS-PA",
                name: "Cámara Digital",
                countryId: "WS"
            },
            {
                id: "WS-SA",
                name: "Satupa'Itea",
                countryId: "WS"
            },
            {
                id: "WS-TU",
                name: "Tuamasanga",
                countryId: "WS"
            },
            {
                id: "WS-VF",
                name: "Barco-De-Fonoti",
                countryId: "WS"
            },
            {
                id: "WS-VS",
                name: "Vaisigano",
                countryId: "WS"
            },
            {
                id: "YE-AB",
                name: "Abyan",
                countryId: "YE"
            },
            {
                id: "YE-AD",
                name: "Adan",
                countryId: "YE"
            },
            {
                id: "YE-AM",
                name: "Amrān",
                countryId: "YE"
            },
            {
                id: "YE-BA",
                name: "Al Bayda '",
                countryId: "YE"
            },
            {
                id: "YE-DA",
                name: "Aḑ Dali '",
                countryId: "YE"
            },
            {
                id: "YE-DH",
                name: "Dhamār",
                countryId: "YE"
            },
            {
                id: "YE-HD",
                name: "Hadramaut",
                countryId: "YE"
            },
            {
                id: "YE-HJ",
                name: "Hajjah",
                countryId: "YE"
            },
            {
                id: "YE-HU",
                name: "Al Hudaydah",
                countryId: "YE"
            },
            {
                id: "YE-IB",
                name: "Ibb",
                countryId: "YE"
            },
            {
                id: "YE-JA",
                name: "Al Jawf",
                countryId: "YE"
            },
            {
                id: "YE-LA",
                name: "Lahij",
                countryId: "YE"
            },
            {
                id: "YE-MA",
                name: "Ma'Rib",
                countryId: "YE"
            },
            {
                id: "YE-MR",
                name: "Al Mahrah",
                countryId: "YE"
            },
            {
                id: "YE-MW",
                name: "Al Mahwit",
                countryId: "YE"
            },
            {
                id: "YE-RA",
                name: "Raymah",
                countryId: "YE"
            },
            {
                id: "YE-SD",
                name: "Sa'Dah",
                countryId: "YE"
            },
            {
                id: "YE-SH",
                name: "Shabwah",
                countryId: "YE"
            },
            {
                id: "YE-SN",
                name: "Saná",
                countryId: "YE"
            },
            {
                id: "YE-SU",
                name: "Arkhabīl Socotora",
                countryId: "YE"
            },
            {
                id: "YE-TA",
                name: "Ta'Izz",
                countryId: "YE"
            },
            {
                id: "YT-01",
                name: "Dzaoudzi",
                countryId: "YT"
            },
            {
                id: "YT-02",
                name: "Pamandzi",
                countryId: "YT"
            },
            {
                id: "YT-03",
                name: "Mamoudzou",
                countryId: "YT"
            },
            {
                id: "YT-04",
                name: "Dembeni",
                countryId: "YT"
            },
            {
                id: "YT-05",
                name: "Bandrélé",
                countryId: "YT"
            },
            {
                id: "YT-06",
                name: "Kani-Keli",
                countryId: "YT"
            },
            {
                id: "YT-07",
                name: "Bouéni",
                countryId: "YT"
            },
            {
                id: "YT-08",
                name: "Chirongui",
                countryId: "YT"
            },
            {
                id: "YT-09",
                name: "Sada",
                countryId: "YT"
            },
            {
                id: "YT-10",
                name: "Ouangani",
                countryId: "YT"
            },
            {
                id: "YT-11",
                name: "Chiconi",
                countryId: "YT"
            },
            {
                id: "YT-12",
                name: "Tsingoni",
                countryId: "YT"
            },
            {
                id: "YT-13",
                name: "M'Tsangamouji",
                countryId: "YT"
            },
            {
                id: "YT-14",
                name: "Acoua",
                countryId: "YT"
            },
            {
                id: "YT-15",
                name: "Mtsamboro",
                countryId: "YT"
            },
            {
                id: "YT-16",
                name: "Bandraboua",
                countryId: "YT"
            },
            {
                id: "YT-17",
                name: "Koungou",
                countryId: "YT"
            },
            {
                id: "ZA-EC",
                name: "Cabo Del Este",
                countryId: "ZA"
            },
            {
                id: "ZA-FS",
                name: "Estado Libre",
                countryId: "ZA"
            },
            {
                id: "ZA-GT",
                name: "Provincia De Gauteng",
                countryId: "ZA"
            },
            {
                id: "ZA-LP",
                name: "Limpopo",
                countryId: "ZA"
            },
            {
                id: "ZA-MP",
                name: "Mpumalanga",
                countryId: "ZA"
            },
            {
                id: "ZA-NC",
                name: "Cabo Del Norte",
                countryId: "ZA"
            },
            {
                id: "ZA-NL",
                name: "Kwazulu-Natal",
                countryId: "ZA"
            },
            {
                id: "ZA-NW",
                name: "Noroeste",
                countryId: "ZA"
            },
            {
                id: "ZA-WC",
                name: "Cabo Oeste",
                countryId: "ZA"
            },
            {
                id: "ZM-01",
                name: "Occidental",
                countryId: "ZM"
            },
            {
                id: "ZM-02",
                name: "Central",
                countryId: "ZM"
            },
            {
                id: "ZM-03",
                name: "Oriental",
                countryId: "ZM"
            },
            {
                id: "ZM-04",
                name: "Luapula",
                countryId: "ZM"
            },
            {
                id: "ZM-05",
                name: "Del Norte",
                countryId: "ZM"
            },
            {
                id: "ZM-06",
                name: "Noroeste",
                countryId: "ZM"
            },
            {
                id: "ZM-07",
                name: "Del Sur",
                countryId: "ZM"
            },
            {
                id: "ZM-08",
                name: "Copperbelt",
                countryId: "ZM"
            },
            {
                id: "ZM-09",
                name: "Lusaka",
                countryId: "ZM"
            },
            {
                id: "ZW-BU",
                name: "Bulawayo",
                countryId: "ZW"
            },
            {
                id: "ZW-HA",
                name: "Harare",
                countryId: "ZW"
            },
            {
                id: "ZW-MA",
                name: "Manicalandia",
                countryId: "ZW"
            },
            {
                id: "ZW-MC",
                name: "Mashonaland Central",
                countryId: "ZW"
            },
            {
                id: "ZW-ME",
                name: "Mashonaland Oriental",
                countryId: "ZW"
            },
            {
                id: "ZW-MI",
                name: "Midlands",
                countryId: "ZW"
            },
            {
                id: "ZW-MN",
                name: "Matabeleland Norte",
                countryId: "ZW"
            },
            {
                id: "ZW-MS",
                name: "Matabeleland Sur",
                countryId: "ZW"
            },
            {
                id: "ZW-MV",
                name: "Masvingo",
                countryId: "ZW"
            },
            {
                id: "ZW-MW",
                name: "Mashonaland Occidental",
                countryId: "ZW"
            }
        ]
    },
    {
        // Timezone
        model: timezone.Timezone,
        verifyProperty: 'name',
        data: [
            {
                name: "Africa/Abidjan",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Africa/Accra",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Africa/Addis_Ababa",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Africa/Algiers",
                gmtOffset: 3600,
                gmtOffsetDst: 3600
            },
            {
                name: "Africa/Asmara",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Africa/Asmera",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Africa/Bamako",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Africa/Bangui",
                gmtOffset: 3600,
                gmtOffsetDst: 3600
            },
            {
                name: "Africa/Banjul",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Africa/Bissau",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Africa/Blantyre",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "Africa/Brazzaville",
                gmtOffset: 3600,
                gmtOffsetDst: 3600
            },
            {
                name: "Africa/Bujumbura",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "Africa/Cairo",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "Africa/Casablanca",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "Africa/Ceuta",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Africa/Conakry",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Africa/Dakar",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Africa/Dar_es_Salaam",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Africa/Djibouti",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Africa/Douala",
                gmtOffset: 3600,
                gmtOffsetDst: 3600
            },
            {
                name: "Africa/El_Aaiun",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "Africa/Freetown",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Africa/Gaborone",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "Africa/Harare",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "Africa/Johannesburg",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "Africa/Juba",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Africa/Kampala",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Africa/Khartoum",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Africa/Kigali",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "Africa/Kinshasa",
                gmtOffset: 3600,
                gmtOffsetDst: 3600
            },
            {
                name: "Africa/Lagos",
                gmtOffset: 3600,
                gmtOffsetDst: 3600
            },
            {
                name: "Africa/Libreville",
                gmtOffset: 3600,
                gmtOffsetDst: 3600
            },
            {
                name: "Africa/Lome",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Africa/Luanda",
                gmtOffset: 3600,
                gmtOffsetDst: 3600
            },
            {
                name: "Africa/Lubumbashi",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "Africa/Lusaka",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "Africa/Malabo",
                gmtOffset: 3600,
                gmtOffsetDst: 3600
            },
            {
                name: "Africa/Maputo",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "Africa/Maseru",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "Africa/Mbabane",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "Africa/Mogadishu",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Africa/Monrovia",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Africa/Nairobi",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Africa/Ndjamena",
                gmtOffset: 3600,
                gmtOffsetDst: 3600
            },
            {
                name: "Africa/Niamey",
                gmtOffset: 3600,
                gmtOffsetDst: 3600
            },
            {
                name: "Africa/Nouakchott",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Africa/Ouagadougou",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Africa/Porto-Novo",
                gmtOffset: 3600,
                gmtOffsetDst: 3600
            },
            {
                name: "Africa/Sao_Tome",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Africa/Timbuktu",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Africa/Tripoli",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "Africa/Tunis",
                gmtOffset: 3600,
                gmtOffsetDst: 3600
            },
            {
                name: "Africa/Windhoek",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "America/Adak",
                gmtOffset: -36000,
                gmtOffsetDst: -32400
            },
            {
                name: "America/Anchorage",
                gmtOffset: -32400,
                gmtOffsetDst: -28800
            },
            {
                name: "America/Anguilla",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Antigua",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Araguaina",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Argentina/Buenos_Aires",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Argentina/Catamarca",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Argentina/ComodRivadavia",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Argentina/Cordoba",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Argentina/Jujuy",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Argentina/La_Rioja",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Argentina/Mendoza",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Argentina/Rio_Gallegos",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Argentina/Salta",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Argentina/San_Juan",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Argentina/San_Luis",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Argentina/Tucuman",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Argentina/Ushuaia",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Aruba",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Asuncion",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Atikokan",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Atka",
                gmtOffset: -36000,
                gmtOffsetDst: -32400
            },
            {
                name: "America/Bahia",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Bahia_Banderas",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Barbados",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Belem",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Belize",
                gmtOffset: -21600,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Blanc-Sablon",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Boa_Vista",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Bogota",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Boise",
                gmtOffset: -25200,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Buenos_Aires",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Cambridge_Bay",
                gmtOffset: -25200,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Campo_Grande",
                gmtOffset: -14400,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Cancun",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Caracas",
                gmtOffset: -16200,
                gmtOffsetDst: -16200
            },
            {
                name: "America/Catamarca",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Cayenne",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Cayman",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Chicago",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Chihuahua",
                gmtOffset: -25200,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Coral_Harbour",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Cordoba",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Costa_Rica",
                gmtOffset: -21600,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Creston",
                gmtOffset: -25200,
                gmtOffsetDst: -25200
            },
            {
                name: "America/Cuiaba",
                gmtOffset: -14400,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Curacao",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Danmarkshavn",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "America/Dawson",
                gmtOffset: -28800,
                gmtOffsetDst: -25200
            },
            {
                name: "America/Dawson_Creek",
                gmtOffset: -25200,
                gmtOffsetDst: -25200
            },
            {
                name: "America/Denver",
                gmtOffset: -25200,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Detroit",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Dominica",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Edmonton",
                gmtOffset: -25200,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Eirunepe",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "America/El_Salvador",
                gmtOffset: -21600,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Ensenada",
                gmtOffset: -28800,
                gmtOffsetDst: -25200
            },
            {
                name: "America/Fort_Nelson",
                gmtOffset: -25200,
                gmtOffsetDst: -25200
            },
            {
                name: "America/Fort_Wayne",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Fortaleza",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Glace_Bay",
                gmtOffset: -14400,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Godthab",
                gmtOffset: -10800,
                gmtOffsetDst: -7200
            },
            {
                name: "America/Goose_Bay",
                gmtOffset: -14400,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Grand_Turk",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Grenada",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Guadeloupe",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Guatemala",
                gmtOffset: -21600,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Guayaquil",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Guyana",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Halifax",
                gmtOffset: -14400,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Havana",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Hermosillo",
                gmtOffset: -25200,
                gmtOffsetDst: -25200
            },
            {
                name: "America/Indiana/Indianapolis",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Indiana/Knox",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Indiana/Marengo",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Indiana/Petersburg",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Indiana/Tell_City",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Indiana/Vevay",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Indiana/Vincennes",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Indiana/Winamac",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Indianapolis",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Inuvik",
                gmtOffset: -25200,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Iqaluit",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Jamaica",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Jujuy",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Juneau",
                gmtOffset: -32400,
                gmtOffsetDst: -28800
            },
            {
                name: "America/Kentucky/Louisville",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Kentucky/Monticello",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Knox_IN",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Kralendijk",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/La_Paz",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Lima",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Los_Angeles",
                gmtOffset: -28800,
                gmtOffsetDst: -25200
            },
            {
                name: "America/Louisville",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Lower_Princes",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Maceio",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Managua",
                gmtOffset: -21600,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Manaus",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Marigot",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Martinique",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Matamoros",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Mazatlan",
                gmtOffset: -25200,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Mendoza",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Menominee",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Merida",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Metlakatla",
                gmtOffset: -28800,
                gmtOffsetDst: -28800
            },
            {
                name: "America/Mexico_City",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Miquelon",
                gmtOffset: -10800,
                gmtOffsetDst: -7200
            },
            {
                name: "America/Moncton",
                gmtOffset: -14400,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Monterrey",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Montevideo",
                gmtOffset: -10800,
                gmtOffsetDst: -7200
            },
            {
                name: "America/Montreal",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Montserrat",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Nassau",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/New_York",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Nipigon",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Nome",
                gmtOffset: -32400,
                gmtOffsetDst: -28800
            },
            {
                name: "America/Noronha",
                gmtOffset: -7200,
                gmtOffsetDst: -7200
            },
            {
                name: "America/North_Dakota/Beulah",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/North_Dakota/Center",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/North_Dakota/New_Salem",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Ojinaga",
                gmtOffset: -25200,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Panama",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Pangnirtung",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Paramaribo",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Phoenix",
                gmtOffset: -25200,
                gmtOffsetDst: -25200
            },
            {
                name: "America/Port-au-Prince",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Port_of_Spain",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Porto_Acre",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Porto_Velho",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Puerto_Rico",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Rainy_River",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Rankin_Inlet",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Recife",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Regina",
                gmtOffset: -21600,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Resolute",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Rio_Branco",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Rosario",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Santa_Isabel",
                gmtOffset: -28800,
                gmtOffsetDst: -25200
            },
            {
                name: "America/Santarem",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Santiago",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Santo_Domingo",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Sao_Paulo",
                gmtOffset: -10800,
                gmtOffsetDst: -7200
            },
            {
                name: "America/Scoresbysund",
                gmtOffset: -3600,
                gmtOffsetDst: 0
            },
            {
                name: "America/Shiprock",
                gmtOffset: -25200,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Sitka",
                gmtOffset: -32400,
                gmtOffsetDst: -28800
            },
            {
                name: "America/St_Barthelemy",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/St_Johns",
                gmtOffset: -12600,
                gmtOffsetDst: -9000
            },
            {
                name: "America/St_Kitts",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/St_Lucia",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/St_Thomas",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/St_Vincent",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Swift_Current",
                gmtOffset: -21600,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Tegucigalpa",
                gmtOffset: -21600,
                gmtOffsetDst: -21600
            },
            {
                name: "America/Thule",
                gmtOffset: -14400,
                gmtOffsetDst: -10800
            },
            {
                name: "America/Thunder_Bay",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Tijuana",
                gmtOffset: -28800,
                gmtOffsetDst: -25200
            },
            {
                name: "America/Toronto",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Tortola",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Vancouver",
                gmtOffset: -28800,
                gmtOffsetDst: -25200
            },
            {
                name: "America/Virgin",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "America/Whitehorse",
                gmtOffset: -28800,
                gmtOffsetDst: -25200
            },
            {
                name: "America/Winnipeg",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "America/Yakutat",
                gmtOffset: -32400,
                gmtOffsetDst: -28800
            },
            {
                name: "America/Yellowknife",
                gmtOffset: -25200,
                gmtOffsetDst: -21600
            },
            {
                name: "Antarctica/Casey",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Antarctica/Davis",
                gmtOffset: 25200,
                gmtOffsetDst: 25200
            },
            {
                name: "Antarctica/DumontDUrville",
                gmtOffset: 36000,
                gmtOffsetDst: 36000
            },
            {
                name: "Antarctica/Macquarie",
                gmtOffset: 39600,
                gmtOffsetDst: 39600
            },
            {
                name: "Antarctica/Mawson",
                gmtOffset: 18000,
                gmtOffsetDst: 18000
            },
            {
                name: "Antarctica/McMurdo",
                gmtOffset: 43200,
                gmtOffsetDst: 46800
            },
            {
                name: "Antarctica/Palmer",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "Antarctica/Rothera",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "Antarctica/South_Pole",
                gmtOffset: 43200,
                gmtOffsetDst: 46800
            },
            {
                name: "Antarctica/Syowa",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Antarctica/Troll",
                gmtOffset: 0,
                gmtOffsetDst: 7200
            },
            {
                name: "Antarctica/Vostok",
                gmtOffset: 21600,
                gmtOffsetDst: 21600
            },
            {
                name: "Arctic/Longyearbyen",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Asia/Aden",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Almaty",
                gmtOffset: 21600,
                gmtOffsetDst: 21600
            },
            {
                name: "Asia/Amman",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Anadyr",
                gmtOffset: 43200,
                gmtOffsetDst: 43200
            },
            {
                name: "Asia/Aqtau",
                gmtOffset: 18000,
                gmtOffsetDst: 18000
            },
            {
                name: "Asia/Aqtobe",
                gmtOffset: 18000,
                gmtOffsetDst: 18000
            },
            {
                name: "Asia/Ashgabat",
                gmtOffset: 18000,
                gmtOffsetDst: 18000
            },
            {
                name: "Asia/Ashkhabad",
                gmtOffset: 18000,
                gmtOffsetDst: 18000
            },
            {
                name: "Asia/Baghdad",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Bahrain",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Baku",
                gmtOffset: 14400,
                gmtOffsetDst: 18000
            },
            {
                name: "Asia/Bangkok",
                gmtOffset: 25200,
                gmtOffsetDst: 25200
            },
            {
                name: "Asia/Beirut",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Bishkek",
                gmtOffset: 21600,
                gmtOffsetDst: 21600
            },
            {
                name: "Asia/Brunei",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Calcutta",
                gmtOffset: 19800,
                gmtOffsetDst: 19800
            },
            {
                name: "Asia/Chita",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Choibalsan",
                gmtOffset: 28800,
                gmtOffsetDst: 32400
            },
            {
                name: "Asia/Chongqing",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Chungking",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Colombo",
                gmtOffset: 19800,
                gmtOffsetDst: 19800
            },
            {
                name: "Asia/Dacca",
                gmtOffset: 21600,
                gmtOffsetDst: 21600
            },
            {
                name: "Asia/Damascus",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Dhaka",
                gmtOffset: 21600,
                gmtOffsetDst: 21600
            },
            {
                name: "Asia/Dili",
                gmtOffset: 32400,
                gmtOffsetDst: 32400
            },
            {
                name: "Asia/Dubai",
                gmtOffset: 14400,
                gmtOffsetDst: 14400
            },
            {
                name: "Asia/Dushanbe",
                gmtOffset: 18000,
                gmtOffsetDst: 18000
            },
            {
                name: "Asia/Gaza",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Harbin",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Hebron",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Ho_Chi_Minh",
                gmtOffset: 25200,
                gmtOffsetDst: 25200
            },
            {
                name: "Asia/Hong_Kong",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Hovd",
                gmtOffset: 25200,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Irkutsk",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Istanbul",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Jakarta",
                gmtOffset: 25200,
                gmtOffsetDst: 25200
            },
            {
                name: "Asia/Jayapura",
                gmtOffset: 32400,
                gmtOffsetDst: 32400
            },
            {
                name: "Asia/Jerusalem",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Kabul",
                gmtOffset: 16200,
                gmtOffsetDst: 16200
            },
            {
                name: "Asia/Kamchatka",
                gmtOffset: 43200,
                gmtOffsetDst: 43200
            },
            {
                name: "Asia/Karachi",
                gmtOffset: 18000,
                gmtOffsetDst: 18000
            },
            {
                name: "Asia/Kashgar",
                gmtOffset: 21600,
                gmtOffsetDst: 21600
            },
            {
                name: "Asia/Kathmandu",
                gmtOffset: 20700,
                gmtOffsetDst: 20700
            },
            {
                name: "Asia/Katmandu",
                gmtOffset: 20700,
                gmtOffsetDst: 20700
            },
            {
                name: "Asia/Khandyga",
                gmtOffset: 32400,
                gmtOffsetDst: 32400
            },
            {
                name: "Asia/Kolkata",
                gmtOffset: 19800,
                gmtOffsetDst: 19800
            },
            {
                name: "Asia/Krasnoyarsk",
                gmtOffset: 25200,
                gmtOffsetDst: 25200
            },
            {
                name: "Asia/Kuala_Lumpur",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Kuching",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Kuwait",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Macao",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Macau",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Magadan",
                gmtOffset: 36000,
                gmtOffsetDst: 36000
            },
            {
                name: "Asia/Makassar",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Manila",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Muscat",
                gmtOffset: 14400,
                gmtOffsetDst: 14400
            },
            {
                name: "Asia/Nicosia",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Novokuznetsk",
                gmtOffset: 25200,
                gmtOffsetDst: 25200
            },
            {
                name: "Asia/Novosibirsk",
                gmtOffset: 21600,
                gmtOffsetDst: 21600
            },
            {
                name: "Asia/Omsk",
                gmtOffset: 21600,
                gmtOffsetDst: 21600
            },
            {
                name: "Asia/Oral",
                gmtOffset: 18000,
                gmtOffsetDst: 18000
            },
            {
                name: "Asia/Phnom_Penh",
                gmtOffset: 25200,
                gmtOffsetDst: 25200
            },
            {
                name: "Asia/Pontianak",
                gmtOffset: 25200,
                gmtOffsetDst: 25200
            },
            {
                name: "Asia/Pyongyang",
                gmtOffset: 30600,
                gmtOffsetDst: 30600
            },
            {
                name: "Asia/Qatar",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Qyzylorda",
                gmtOffset: 21600,
                gmtOffsetDst: 21600
            },
            {
                name: "Asia/Rangoon",
                gmtOffset: 23400,
                gmtOffsetDst: 23400
            },
            {
                name: "Asia/Riyadh",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Riyadh87",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Riyadh88",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Riyadh89",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Saigon",
                gmtOffset: 25200,
                gmtOffsetDst: 25200
            },
            {
                name: "Asia/Sakhalin",
                gmtOffset: 36000,
                gmtOffsetDst: 36000
            },
            {
                name: "Asia/Samarkand",
                gmtOffset: 18000,
                gmtOffsetDst: 18000
            },
            {
                name: "Asia/Seoul",
                gmtOffset: 32400,
                gmtOffsetDst: 32400
            },
            {
                name: "Asia/Shanghai",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Singapore",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Srednekolymsk",
                gmtOffset: 39600,
                gmtOffsetDst: 39600
            },
            {
                name: "Asia/Taipei",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Tashkent",
                gmtOffset: 18000,
                gmtOffsetDst: 18000
            },
            {
                name: "Asia/Tbilisi",
                gmtOffset: 14400,
                gmtOffsetDst: 14400
            },
            {
                name: "Asia/Tehran",
                gmtOffset: 12600,
                gmtOffsetDst: 16200
            },
            {
                name: "Asia/Tel_Aviv",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Asia/Thimbu",
                gmtOffset: 21600,
                gmtOffsetDst: 21600
            },
            {
                name: "Asia/Thimphu",
                gmtOffset: 21600,
                gmtOffsetDst: 21600
            },
            {
                name: "Asia/Tokyo",
                gmtOffset: 32400,
                gmtOffsetDst: 32400
            },
            {
                name: "Asia/Ujung_Pandang",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Asia/Ulaanbaatar",
                gmtOffset: 28800,
                gmtOffsetDst: 32400
            },
            {
                name: "Asia/Ulan_Bator",
                gmtOffset: 28800,
                gmtOffsetDst: 32400
            },
            {
                name: "Asia/Urumqi",
                gmtOffset: 21600,
                gmtOffsetDst: 21600
            },
            {
                name: "Asia/Vientiane",
                gmtOffset: 25200,
                gmtOffsetDst: 25200
            },
            {
                name: "Asia/Vladivostok",
                gmtOffset: 36000,
                gmtOffsetDst: 36000
            },
            {
                name: "Asia/Yakutsk",
                gmtOffset: 32400,
                gmtOffsetDst: 32400
            },
            {
                name: "Asia/Yekaterinburg",
                gmtOffset: 18000,
                gmtOffsetDst: 18000
            },
            {
                name: "Asia/Yerevan",
                gmtOffset: 14400,
                gmtOffsetDst: 14400
            },
            {
                name: "Atlantic/Azores",
                gmtOffset: -3600,
                gmtOffsetDst: 0
            },
            {
                name: "Atlantic/Bermuda",
                gmtOffset: -14400,
                gmtOffsetDst: -10800
            },
            {
                name: "Atlantic/Canary",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "Atlantic/Cape_Verde",
                gmtOffset: -3600,
                gmtOffsetDst: -3600
            },
            {
                name: "Atlantic/Faeroe",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "Atlantic/Faroe",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "Atlantic/Jan_Mayen",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Atlantic/Madeira",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "Atlantic/Reykjavik",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Atlantic/South_Georgia",
                gmtOffset: -7200,
                gmtOffsetDst: -7200
            },
            {
                name: "Atlantic/St_Helena",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Atlantic/Stanley",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "Australia/ACT",
                gmtOffset: 36000,
                gmtOffsetDst: 39600
            },
            {
                name: "Australia/Adelaide",
                gmtOffset: 34200,
                gmtOffsetDst: 37800
            },
            {
                name: "Australia/Brisbane",
                gmtOffset: 36000,
                gmtOffsetDst: 36000
            },
            {
                name: "Australia/Broken_Hill",
                gmtOffset: 34200,
                gmtOffsetDst: 37800
            },
            {
                name: "Australia/Canberra",
                gmtOffset: 36000,
                gmtOffsetDst: 39600
            },
            {
                name: "Australia/Currie",
                gmtOffset: 36000,
                gmtOffsetDst: 39600
            },
            {
                name: "Australia/Darwin",
                gmtOffset: 34200,
                gmtOffsetDst: 34200
            },
            {
                name: "Australia/Eucla",
                gmtOffset: 31500,
                gmtOffsetDst: 31500
            },
            {
                name: "Australia/Hobart",
                gmtOffset: 36000,
                gmtOffsetDst: 39600
            },
            {
                name: "Australia/LHI",
                gmtOffset: 37800,
                gmtOffsetDst: 39600
            },
            {
                name: "Australia/Lindeman",
                gmtOffset: 36000,
                gmtOffsetDst: 36000
            },
            {
                name: "Australia/Lord_Howe",
                gmtOffset: 37800,
                gmtOffsetDst: 39600
            },
            {
                name: "Australia/Melbourne",
                gmtOffset: 36000,
                gmtOffsetDst: 39600
            },
            {
                name: "Australia/NSW",
                gmtOffset: 36000,
                gmtOffsetDst: 39600
            },
            {
                name: "Australia/North",
                gmtOffset: 34200,
                gmtOffsetDst: 34200
            },
            {
                name: "Australia/Perth",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Australia/Queensland",
                gmtOffset: 36000,
                gmtOffsetDst: 36000
            },
            {
                name: "Australia/South",
                gmtOffset: 34200,
                gmtOffsetDst: 37800
            },
            {
                name: "Australia/Sydney",
                gmtOffset: 36000,
                gmtOffsetDst: 39600
            },
            {
                name: "Australia/Tasmania",
                gmtOffset: 36000,
                gmtOffsetDst: 39600
            },
            {
                name: "Australia/Victoria",
                gmtOffset: 36000,
                gmtOffsetDst: 39600
            },
            {
                name: "Australia/West",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Australia/Yancowinna",
                gmtOffset: 34200,
                gmtOffsetDst: 37800
            },
            {
                name: "Brazil/Acre",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "Brazil/DeNoronha",
                gmtOffset: -7200,
                gmtOffsetDst: -7200
            },
            {
                name: "Brazil/East",
                gmtOffset: -10800,
                gmtOffsetDst: -7200
            },
            {
                name: "Brazil/West",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "CET",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "CST6CDT",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "Canada/Atlantic",
                gmtOffset: -14400,
                gmtOffsetDst: -10800
            },
            {
                name: "Canada/Central",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "Canada/East-Saskatchewan",
                gmtOffset: -21600,
                gmtOffsetDst: -21600
            },
            {
                name: "Canada/Eastern",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "Canada/Mountain",
                gmtOffset: -25200,
                gmtOffsetDst: -21600
            },
            {
                name: "Canada/Newfoundland",
                gmtOffset: -12600,
                gmtOffsetDst: -9000
            },
            {
                name: "Canada/Pacific",
                gmtOffset: -28800,
                gmtOffsetDst: -25200
            },
            {
                name: "Canada/Saskatchewan",
                gmtOffset: -21600,
                gmtOffsetDst: -21600
            },
            {
                name: "Canada/Yukon",
                gmtOffset: -28800,
                gmtOffsetDst: -25200
            },
            {
                name: "Chile/Continental",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "Chile/EasterIsland",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "Cuba",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "EET",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "EST",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "EST5EDT",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "Egypt",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "Eire",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "Etc/GMT",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Etc/GMT+0",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Etc/GMT+1",
                gmtOffset: -3600,
                gmtOffsetDst: -3600
            },
            {
                name: "Etc/GMT+10",
                gmtOffset: -36000,
                gmtOffsetDst: -36000
            },
            {
                name: "Etc/GMT+11",
                gmtOffset: -39600,
                gmtOffsetDst: -39600
            },
            {
                name: "Etc/GMT+12",
                gmtOffset: -43200,
                gmtOffsetDst: -43200
            },
            {
                name: "Etc/GMT+2",
                gmtOffset: -7200,
                gmtOffsetDst: -7200
            },
            {
                name: "Etc/GMT+3",
                gmtOffset: -10800,
                gmtOffsetDst: -10800
            },
            {
                name: "Etc/GMT+4",
                gmtOffset: -14400,
                gmtOffsetDst: -14400
            },
            {
                name: "Etc/GMT+5",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "Etc/GMT+6",
                gmtOffset: -21600,
                gmtOffsetDst: -21600
            },
            {
                name: "Etc/GMT+7",
                gmtOffset: -25200,
                gmtOffsetDst: -25200
            },
            {
                name: "Etc/GMT+8",
                gmtOffset: -28800,
                gmtOffsetDst: -28800
            },
            {
                name: "Etc/GMT+9",
                gmtOffset: -32400,
                gmtOffsetDst: -32400
            },
            {
                name: "Etc/GMT-0",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Etc/GMT-1",
                gmtOffset: 3600,
                gmtOffsetDst: 3600
            },
            {
                name: "Etc/GMT-10",
                gmtOffset: 36000,
                gmtOffsetDst: 36000
            },
            {
                name: "Etc/GMT-11",
                gmtOffset: 39600,
                gmtOffsetDst: 39600
            },
            {
                name: "Etc/GMT-12",
                gmtOffset: 43200,
                gmtOffsetDst: 43200
            },
            {
                name: "Etc/GMT-13",
                gmtOffset: 46800,
                gmtOffsetDst: 46800
            },
            {
                name: "Etc/GMT-14",
                gmtOffset: 50400,
                gmtOffsetDst: 50400
            },
            {
                name: "Etc/GMT-2",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "Etc/GMT-3",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Etc/GMT-4",
                gmtOffset: 14400,
                gmtOffsetDst: 14400
            },
            {
                name: "Etc/GMT-5",
                gmtOffset: 18000,
                gmtOffsetDst: 18000
            },
            {
                name: "Etc/GMT-6",
                gmtOffset: 21600,
                gmtOffsetDst: 21600
            },
            {
                name: "Etc/GMT-7",
                gmtOffset: 25200,
                gmtOffsetDst: 25200
            },
            {
                name: "Etc/GMT-8",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Etc/GMT-9",
                gmtOffset: 32400,
                gmtOffsetDst: 32400
            },
            {
                name: "Etc/GMT0",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Etc/Greenwich",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Etc/UCT",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Etc/UTC",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Etc/Universal",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Etc/Zulu",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Europe/Amsterdam",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Andorra",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Athens",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Belfast",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "Europe/Belgrade",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Berlin",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Bratislava",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Brussels",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Bucharest",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Budapest",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Busingen",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Chisinau",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Copenhagen",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Dublin",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "Europe/Gibraltar",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Guernsey",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "Europe/Helsinki",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Isle_of_Man",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "Europe/Istanbul",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Jersey",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "Europe/Kaliningrad",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Kiev",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Lisbon",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "Europe/Ljubljana",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/London",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "Europe/Luxembourg",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Madrid",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Malta",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Mariehamn",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Minsk",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Monaco",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Moscow",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Nicosia",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Oslo",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Paris",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Podgorica",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Prague",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Riga",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Rome",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Samara",
                gmtOffset: 14400,
                gmtOffsetDst: 14400
            },
            {
                name: "Europe/San_Marino",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Sarajevo",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Simferopol",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Skopje",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Sofia",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Stockholm",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Tallinn",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Tirane",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Tiraspol",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Uzhgorod",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Vaduz",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Vatican",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Vienna",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Vilnius",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Volgograd",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Warsaw",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Zagreb",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Europe/Zaporozhye",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Europe/Zurich",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Factory",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "GB",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "GB-Eire",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "GMT",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "GMT+0",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "GMT-0",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "GMT0",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Greenwich",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "HST",
                gmtOffset: -36000,
                gmtOffsetDst: -36000
            },
            {
                name: "Hongkong",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Iceland",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Indian/Antananarivo",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Indian/Chagos",
                gmtOffset: 21600,
                gmtOffsetDst: 21600
            },
            {
                name: "Indian/Christmas",
                gmtOffset: 25200,
                gmtOffsetDst: 25200
            },
            {
                name: "Indian/Cocos",
                gmtOffset: 23400,
                gmtOffsetDst: 23400
            },
            {
                name: "Indian/Comoro",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Indian/Kerguelen",
                gmtOffset: 18000,
                gmtOffsetDst: 18000
            },
            {
                name: "Indian/Mahe",
                gmtOffset: 14400,
                gmtOffsetDst: 14400
            },
            {
                name: "Indian/Maldives",
                gmtOffset: 18000,
                gmtOffsetDst: 18000
            },
            {
                name: "Indian/Mauritius",
                gmtOffset: 14400,
                gmtOffsetDst: 14400
            },
            {
                name: "Indian/Mayotte",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "Indian/Reunion",
                gmtOffset: 14400,
                gmtOffsetDst: 14400
            },
            {
                name: "Iran",
                gmtOffset: 12600,
                gmtOffsetDst: 16200
            },
            {
                name: "Israel",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "Jamaica",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "Japan",
                gmtOffset: 32400,
                gmtOffsetDst: 32400
            },
            {
                name: "Kwajalein",
                gmtOffset: 43200,
                gmtOffsetDst: 43200
            },
            {
                name: "Libya",
                gmtOffset: 7200,
                gmtOffsetDst: 7200
            },
            {
                name: "MET",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "MST",
                gmtOffset: -25200,
                gmtOffsetDst: -25200
            },
            {
                name: "MST7MDT",
                gmtOffset: -25200,
                gmtOffsetDst: -21600
            },
            {
                name: "Mexico/BajaNorte",
                gmtOffset: -28800,
                gmtOffsetDst: -25200
            },
            {
                name: "Mexico/BajaSur",
                gmtOffset: -25200,
                gmtOffsetDst: -21600
            },
            {
                name: "Mexico/General",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "Mideast/Riyadh87",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Mideast/Riyadh88",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Mideast/Riyadh89",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "NZ",
                gmtOffset: 43200,
                gmtOffsetDst: 46800
            },
            {
                name: "NZ-CHAT",
                gmtOffset: 45900,
                gmtOffsetDst: 49500
            },
            {
                name: "Navajo",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "PRC",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "PST8PDT",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Pacific/Apia",
                gmtOffset: 46800,
                gmtOffsetDst: 50400
            },
            {
                name: "Pacific/Auckland",
                gmtOffset: 43200,
                gmtOffsetDst: 46800
            },
            {
                name: "Pacific/Bougainville",
                gmtOffset: 39600,
                gmtOffsetDst: 39600
            },
            {
                name: "Pacific/Chatham",
                gmtOffset: 45900,
                gmtOffsetDst: 49500
            },
            {
                name: "Pacific/Chuuk",
                gmtOffset: 36000,
                gmtOffsetDst: 36000
            },
            {
                name: "Pacific/Easter",
                gmtOffset: -18000,
                gmtOffsetDst: -18000
            },
            {
                name: "Pacific/Efate",
                gmtOffset: 39600,
                gmtOffsetDst: 39600
            },
            {
                name: "Pacific/Enderbury",
                gmtOffset: 46800,
                gmtOffsetDst: 46800
            },
            {
                name: "Pacific/Fakaofo",
                gmtOffset: 46800,
                gmtOffsetDst: 46800
            },
            {
                name: "Pacific/Fiji",
                gmtOffset: 43200,
                gmtOffsetDst: 46800
            },
            {
                name: "Pacific/Funafuti",
                gmtOffset: 43200,
                gmtOffsetDst: 43200
            },
            {
                name: "Pacific/Galapagos",
                gmtOffset: -21600,
                gmtOffsetDst: -21600
            },
            {
                name: "Pacific/Gambier",
                gmtOffset: -32400,
                gmtOffsetDst: -32400
            },
            {
                name: "Pacific/Guadalcanal",
                gmtOffset: 39600,
                gmtOffsetDst: 39600
            },
            {
                name: "Pacific/Guam",
                gmtOffset: 36000,
                gmtOffsetDst: 36000
            },
            {
                name: "Pacific/Honolulu",
                gmtOffset: -36000,
                gmtOffsetDst: -36000
            },
            {
                name: "Pacific/Johnston",
                gmtOffset: -36000,
                gmtOffsetDst: -36000
            },
            {
                name: "Pacific/Kiritimati",
                gmtOffset: 50400,
                gmtOffsetDst: 50400
            },
            {
                name: "Pacific/Kosrae",
                gmtOffset: 39600,
                gmtOffsetDst: 39600
            },
            {
                name: "Pacific/Kwajalein",
                gmtOffset: 43200,
                gmtOffsetDst: 43200
            },
            {
                name: "Pacific/Majuro",
                gmtOffset: 43200,
                gmtOffsetDst: 43200
            },
            {
                name: "Pacific/Marquesas",
                gmtOffset: -34200,
                gmtOffsetDst: -34200
            },
            {
                name: "Pacific/Midway",
                gmtOffset: -39600,
                gmtOffsetDst: -39600
            },
            {
                name: "Pacific/Nauru",
                gmtOffset: 43200,
                gmtOffsetDst: 43200
            },
            {
                name: "Pacific/Niue",
                gmtOffset: -39600,
                gmtOffsetDst: -39600
            },
            {
                name: "Pacific/Norfolk",
                gmtOffset: 39600,
                gmtOffsetDst: 39600
            },
            {
                name: "Pacific/Noumea",
                gmtOffset: 39600,
                gmtOffsetDst: 39600
            },
            {
                name: "Pacific/Pago_Pago",
                gmtOffset: -39600,
                gmtOffsetDst: -39600
            },
            {
                name: "Pacific/Palau",
                gmtOffset: 32400,
                gmtOffsetDst: 32400
            },
            {
                name: "Pacific/Pitcairn",
                gmtOffset: -28800,
                gmtOffsetDst: -28800
            },
            {
                name: "Pacific/Ponape",
                gmtOffset: 39600,
                gmtOffsetDst: 39600
            },
            {
                name: "Pacific/Port_Moresby",
                gmtOffset: 36000,
                gmtOffsetDst: 36000
            },
            {
                name: "Pacific/Rarotonga",
                gmtOffset: -36000,
                gmtOffsetDst: -36000
            },
            {
                name: "Pacific/Saipan",
                gmtOffset: 36000,
                gmtOffsetDst: 36000
            },
            {
                name: "Pacific/Samoa",
                gmtOffset: -39600,
                gmtOffsetDst: -39600
            },
            {
                name: "Pacific/Tahiti",
                gmtOffset: -36000,
                gmtOffsetDst: -36000
            },
            {
                name: "Pacific/Tarawa",
                gmtOffset: 43200,
                gmtOffsetDst: 43200
            },
            {
                name: "Pacific/Tongatapu",
                gmtOffset: 46800,
                gmtOffsetDst: 46800
            },
            {
                name: "Pacific/Truk",
                gmtOffset: 36000,
                gmtOffsetDst: 36000
            },
            {
                name: "Pacific/Wake",
                gmtOffset: 43200,
                gmtOffsetDst: 43200
            },
            {
                name: "Pacific/Wallis",
                gmtOffset: 43200,
                gmtOffsetDst: 43200
            },
            {
                name: "Pacific/Yap",
                gmtOffset: 36000,
                gmtOffsetDst: 36000
            },
            {
                name: "Poland",
                gmtOffset: 3600,
                gmtOffsetDst: 7200
            },
            {
                name: "Portugal",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "ROC",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "ROK",
                gmtOffset: 32400,
                gmtOffsetDst: 32400
            },
            {
                name: "Singapore",
                gmtOffset: 28800,
                gmtOffsetDst: 28800
            },
            {
                name: "Turkey",
                gmtOffset: 7200,
                gmtOffsetDst: 10800
            },
            {
                name: "UCT",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "US/Alaska",
                gmtOffset: -32400,
                gmtOffsetDst: -28800
            },
            {
                name: "US/Aleutian",
                gmtOffset: -36000,
                gmtOffsetDst: -32400
            },
            {
                name: "US/Arizona",
                gmtOffset: -25200,
                gmtOffsetDst: -25200
            },
            {
                name: "US/Central",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "US/East-Indiana",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "US/Eastern",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "US/Hawaii",
                gmtOffset: -36000,
                gmtOffsetDst: -36000
            },
            {
                name: "US/Indiana-Starke",
                gmtOffset: -21600,
                gmtOffsetDst: -18000
            },
            {
                name: "US/Michigan",
                gmtOffset: -18000,
                gmtOffsetDst: -14400
            },
            {
                name: "US/Mountain",
                gmtOffset: -25200,
                gmtOffsetDst: -21600
            },
            {
                name: "US/Pacific",
                gmtOffset: -28800,
                gmtOffsetDst: -25200
            },
            {
                name: "US/Pacific-New",
                gmtOffset: -28800,
                gmtOffsetDst: -25200
            },
            {
                name: "US/Samoa",
                gmtOffset: -39600,
                gmtOffsetDst: -39600
            },
            {
                name: "UTC",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "Universal",
                gmtOffset: 0,
                gmtOffsetDst: 0
            },
            {
                name: "W-SU",
                gmtOffset: 10800,
                gmtOffsetDst: 10800
            },
            {
                name: "WET",
                gmtOffset: 0,
                gmtOffsetDst: 3600
            },
            {
                name: "Zulu",
                gmtOffset: 0,
                gmtOffsetDst: 0
            }
        ]
    },
    {
        // RemoteAddress whitelist & blacklist
        model: session.RemoteAddress,
        verifyProperty: 'id',
        data: [
            {
                id: '127.0.0.1',
                type: 'ipv4',
                whiteList: true,
                greyList: false
            },
            {
                id: '::1',
                type: 'ipv6',
                whiteList: true,
                greyList: false
            }
        ]
    },
    {
        model: user.User,
        verifyProperty: 'id',
        data: [
            {
                id: 'fvoQZB.0ic',
                firstName: 'Fulano',
                lastName: 'Perez',
                email: 'fulano@bluepixel.mx'
            },
            {
                id: '~3LaFEs5le',
                firstName: 'John',
                lastName: 'Smith',
                email: 'john@bluepixel.mx'
            },
            {
                id: 'xJZnWGXa4s',
                firstName: 'João',
                lastName: 'Couves',
                email: 'joao@bluepixel.mx'
            }
        ]
    },
    {
        model: user.UserPassword,
        verifyProperty: 'id',
        data: [
            {
                id: 1,
                passwordData: '3f21a8490cef2bfb60a9702e9d2ddb7a805c9bd1a263557dfd51a7d0e9dfa93e',
                userId: 'fvoQZB.0ic'
            },
            {
                id: 2,
                passwordData: '3f21a8490cef2bfb60a9702e9d2ddb7a805c9bd1a263557dfd51a7d0e9dfa93e',
                userId: '~3LaFEs5le'
            },
            {
                id: 3,
                passwordData: '3f21a8490cef2bfb60a9702e9d2ddb7a805c9bd1a263557dfd51a7d0e9dfa93e',
                userId: 'xJZnWGXa4s'
            },
        ]
    }
];

let x = 0;

function nextPopulator() {
    if (x >= populators.length) return console.log('Population terminated');
    let populator = populators[x],
        new_data = [],
        y = 0;

    function insertData() {
        populator.model.bulkCreate(new_data).then(() => {
            console.log(`Inserted ${new_data.length} items in ${populator.model.name}`);
        }).catch(error => {
            console.dir(error);
        }).finally(() => {
            x++;
            nextPopulator();
        });
    }

    function sig() {
        if (y >= populator.data.length) return insertData();
        let item = populator.data[y],
            where = {};
        where[populator.verifyProperty] = item[populator.verifyProperty];
        populator.model.findOne({where}).then((data) => {
            if (!data) new_data.push(item);
        }).catch(error => {
            console.dir(error);
        }).finally(() => {
            y++;
            sig();
        });
    }

    sig();
}

console.log('Populating DB');
nextPopulator();
