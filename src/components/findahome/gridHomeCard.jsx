import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import HomeCard from './homeCard.jsx';

const homes = [
 {
   "Address": "Surrey Road, Nunhead, London SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/118746881#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "South Dock Marina, Surrey Quays SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132489884#/?channel=RES_BUY",
   "rent_bed_mo": 338
 },
 {
   "Address": "South Dock Marina, Surrey Quays SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128920739#/?channel=RES_BUY",
   "rent_bed_mo": 408
 },
 {
   "Address": "South Dock Marina, Surrey Quays SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129311117#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "South Dock Marina, Surrey Quays SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128878586#/?channel=RES_BUY",
   "rent_bed_mo": 928
 },
 {
   "Address": "Flat B, 22 Raul Road, Peckham, SE15 5HP",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131102138#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "21 Glazebrook Close, West Dulwich, London, SE21 8RP",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133131479#/?channel=RES_BUY",
   "rent_bed_mo": 510
 },
 {
   "Address": "Flat 40 Procter House, Avondale Square, London, SE1 5EZ",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132038039#/?channel=RES_BUY",
   "rent_bed_mo": 554
 },
 {
   "Address": "Kinglake Street, London, SE17 2RA",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131193626#/?channel=RES_BUY",
   "rent_bed_mo": 1138
 },
 {
   "Address": "Amery House, Kinglake Street,  London, SE17 2RA",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133101632#/?channel=RES_BUY",
   "rent_bed_mo": 1138
 },
 {
   "Address": "South Dock Marina, Surrey Quays SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133151246#/?channel=RES_BUY",
   "rent_bed_mo": 580
 },
 {
   "Address": "Peckham Hill Street, LONDON",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86118510#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "1a Blenheim Grove, London, Greater London, SE15 4QS",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/114880268#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Blenheim Grove, London SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131692562#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Rennie Estate, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129101297#/?channel=RES_BUY",
   "rent_bed_mo": 1225
 },
 {
   "Address": "Borland Road, LONDON",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86118549#/?channel=RES_BUY",
   "rent_bed_mo": 613
 },
 {
   "Address": "Abbeyfield Estate, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132032648#/?channel=RES_BUY",
   "rent_bed_mo": 1254
 },
 {
   "Address": "Manor Estate, LONDON",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132896216#/?channel=RES_BUY",
   "rent_bed_mo": 642
 },
 {
   "Address": "East Surrey Grove, Peckham, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/85469733#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Crosslet Street, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129097709#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Stansfeld House, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131257883#/?channel=RES_BUY",
   "rent_bed_mo": 1342
 },
 {
   "Address": "Rotherhithe New Road, London, Greater London, SE16 2PD",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132602231#/?channel=RES_BUY",
   "rent_bed_mo": 700
 },
 {
   "Address": "3 Crystal Palace Parade, Dulwich, London , SE19 1UH",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133064312#/?channel=RES_BUY",
   "rent_bed_mo": 1400
 },
 {
   "Address": "St. Mary's Road, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130634438#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "South Dock Marina, Surrey Quays SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132601088#/?channel=RES_BUY",
   "rent_bed_mo": 1453
 },
 {
   "Address": "Daniel Gardens, Peckham, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132142187#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Old Kent Road Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/121991426#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Farquhar Road London SE19",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/85742361#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Kingswood Estate, Dulwich, SE21",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127720163#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Odessa Street, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133304900#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Old Kent Road, Bermondsey, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127725302#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Pentridge Street, LONDON",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/119396186#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Preston House,, Preston Close, SE1",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127759370#/?channel=RES_BUY",
   "rent_bed_mo": 1517
 },
 {
   "Address": "Roman House, 77A Peckham High Street, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129856049#/?channel=RES_BUY",
   "rent_bed_mo": 1569
 },
 {
   "Address": "Lockwood Square, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133133915#/?channel=RES_BUY",
   "rent_bed_mo": 1575
 },
 {
   "Address": "Peckham High Street, Peckham, London SE15 5EB",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133228964#/?channel=RES_BUY",
   "rent_bed_mo": 1575
 },
 {
   "Address": "Granville Square, Peckham Grove, London , SE15 6DX",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130299869#/?channel=RES_BUY",
   "rent_bed_mo": 788
 },
 {
   "Address": "Borland Road, Peckham",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131098385#/?channel=RES_BUY",
   "rent_bed_mo": 1575
 },
 {
   "Address": "New Kent Road, Elephant and Castle, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/114204686#/?channel=RES_BUY",
   "rent_bed_mo": 1575
 },
 {
   "Address": "Kinglake Street, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/124859975#/?channel=RES_BUY",
   "rent_bed_mo": 1575
 },
 {
   "Address": "Coldharbour Lane, Camberwell, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128874371#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Stevenson Crescent, South Bermondsey",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129461807#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Old Kent Road, Peckham, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130880060#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Peckham Rye, Peckham",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/54632048#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Elm Grove, Peckham Rye",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132036494#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Melville Court, Croft Street, London SE8 5DR",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131495447#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Borland Road, Nunhead",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/122189180#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Picton Street, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133234679#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Vestry Road, Camberwell",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/124708619#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Havil Street, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132640355#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Mcdowall Road, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128413691#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Tissington Court, Rotherhithe New Road, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/124091837#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Friary Estate, Peckham, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/118774466#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Laburnum Close, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131842757#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Astbury Lodge, Astbury Road, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129396599#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Redcar Street, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127587812#/?channel=RES_BUY",
   "rent_bed_mo": 817
 },
 {
   "Address": "Carisbrooke Gardens, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129780017#/?channel=RES_BUY",
   "rent_bed_mo": 817
 },
 {
   "Address": "Avondale Square, South Bermondsey",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/126652490#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Flat ,  Rye Hill Park, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132596939#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Rotherhithe New Road, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124369010#/?channel=RES_BUY",
   "rent_bed_mo": 831
 },
 {
   "Address": "Investment Opportunity: One Bedroom Flat, Canada Estate, SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/72010722#/?channel=RES_BUY",
   "rent_bed_mo": 1663
 },
 {
   "Address": "Sedgmoor Place, Camberwell",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132207380#/?channel=RES_BUY",
   "rent_bed_mo": 1663
 },
 {
   "Address": "Brandon Estate, London SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132567497#/?channel=RES_BUY",
   "rent_bed_mo": 831
 },
 {
   "Address": "Oliver Goldsmith Estate, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127750502#/?channel=RES_BUY",
   "rent_bed_mo": 846
 },
 {
   "Address": "Laburnum Close, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130031336#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Blakes Road London SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130757498#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Oxley Close, Bermondsey, SE1",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130819505#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Melford Road, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/124937777#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Camberwell Green, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132192770#/?channel=RES_BUY",
   "rent_bed_mo": 1721
 },
 {
   "Address": "360 Old Kent Road, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132576059#/?channel=RES_BUY",
   "rent_bed_mo": 1721
 },
 {
   "Address": "Albion Street, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131021699#/?channel=RES_BUY",
   "rent_bed_mo": 860
 },
 {
   "Address": "Sherwood Gardens, Bermondsey",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132180719#/?channel=RES_BUY",
   "rent_bed_mo": 1721
 },
 {
   "Address": "Rembrandt Court, Stubbs Drive, SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132583508#/?channel=RES_BUY",
   "rent_bed_mo": 1721
 },
 {
   "Address": "Highshore Road, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/124236644#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Old Kent Road, Bermondsey",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86088768#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Pelican Estate, Peckham Rye, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126938117#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Portland Street, Walworth, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129582896#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Longfellow Way, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131312387#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "92 Neville Close, Peckham, London, SE15 5UF",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133270829#/?channel=RES_BUY",
   "rent_bed_mo": 583
 },
 {
   "Address": "Grovelands Close, London SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131692700#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Plover Way, Surrey Quays",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131851556#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "92 Neville Close, Peckham, London, SE15 5UF",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133270829#/?channel=RES_BUY",
   "rent_bed_mo": 583
 },
 {
   "Address": "Grovelands Close, London SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131692700#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Wood Vale London SE23",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132221102#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Elmington Estate, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/117676256#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Peckham Rye, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130955138#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Goodwin Close, Rotherhithe",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131161103#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Bath Close, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130682870#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Staveley Close, Peckham",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133072523#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Crystal Palace Road, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/120975365#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Scott Lidgett Crescent, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132442751#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Evan Cook Close, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131211254#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Peckham Grove, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132037496#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Oakhurst Grove, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86049117#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Rowcross Street, Bermondsey, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130182377#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Cheltenham Road, Peckham",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132902753#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Camberwell Road, Camberwell, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131036240#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Stubbs Drive, South Bermondsey, SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132265490#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Mcneil Road London SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129188777#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Mary Datchelor Close, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131775173#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "McNeil Road, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132413888#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Old Kent Road, Peckham, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130880048#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Old Kent Road, Peckham, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130880051#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "St. James's Road, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131819069#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Cadet Drive, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129046310#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Old Kent Road, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130721153#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Cheltenham Road, Peckham",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131181764#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Denmark Hill, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132408101#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Carlton Grove, London SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131692601#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Nunhead Lane, Peckham Rye, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132430892#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Old Kent Road, Bermondsey",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131543870#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Astbury Road",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86030451#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Missenden, Inville Road, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/86955958#/?channel=RES_BUY",
   "rent_bed_mo": 583
 },
 {
   "Address": "Beacon Gate Peckham SE14",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/126761525#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Peckham Rye, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123971885#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "12 Garvens, 57 Dulwich Wood Avenue, London, SE19 1HU",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132825911#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Redbridge Gardens, Camberwell, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131845742#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Varcoe Road, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132342890#/?channel=RES_BUY",
   "rent_bed_mo": 1779
 },
 {
   "Address": "148 Barry Road, , East Dulwich, London, , Dinas Powys, London, SE22 0HW",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127588274#/?channel=RES_BUY",
   "rent_bed_mo": 1808
 },
 {
   "Address": "Barry Road, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132354146#/?channel=RES_BUY",
   "rent_bed_mo": 1808
 },
 {
   "Address": "315 Camberwell Road, Camberwell, SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131455139#/?channel=RES_BUY",
   "rent_bed_mo": 919
 },
 {
   "Address": "Gibbon Road, Nunhead, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131119805#/?channel=RES_BUY",
   "rent_bed_mo": 919
 },
 {
   "Address": "Manor Estate, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132367265#/?channel=RES_BUY",
   "rent_bed_mo": 919
 },
 {
   "Address": "Pilgrims Cloisters, London SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133273010#/?channel=RES_BUY",
   "rent_bed_mo": 1838
 },
 {
   "Address": "Lettsom Street, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130376075#/?channel=RES_BUY",
   "rent_bed_mo": 1838
 },
 {
   "Address": "Chaucer Drive, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132715466#/?channel=RES_BUY",
   "rent_bed_mo": 1838
 },
 {
   "Address": "Mcneil Road, Camberwell, SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131890406#/?channel=RES_BUY",
   "rent_bed_mo": 1838
 },
 {
   "Address": "Rye Hill Park, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127454672#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Bywater Place, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128222558#/?channel=RES_BUY",
   "rent_bed_mo": 1838
 },
 {
   "Address": "Tawny Way, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130527953#/?channel=RES_BUY",
   "rent_bed_mo": 933
 },
 {
   "Address": "Sumner Road, Camberwell, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133319906#/?channel=RES_BUY",
   "rent_bed_mo": 1867
 },
 {
   "Address": "Varcoe Road, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130228061#/?channel=RES_BUY",
   "rent_bed_mo": 1867
 },
 {
   "Address": "Frederick Square, Rotherhithe, SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131292353#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Blakes Road Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/111416213#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Kelly Avenue, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132925235#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Honor Oak Rise, Honor Oak Park, London, SE23",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130813271#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Marmont Road, Peckham, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130149698#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Peckham Grove Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132758387#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "St Asaph Road, London, SE4",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123969497#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Upland Road, Dulwich, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/122089790#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Crescent Wood Road, London, SE26",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131568050#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Holmdene Avenue, Herne Hill, London, SE24",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129308051#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Bath Close, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130341992#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Druid Street London SE1",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130075844#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Blakes Road, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/120111620#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Blakes Road, Peckham, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126984260#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Waveney House, Peckham Rye, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133235381#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Barry Road, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132706334#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Queens Road, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132320591#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Peckham Park Road Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130319915#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Gloucester Court, Rowcross Street, SE1",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130768670#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Beckway Street London SE17",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131672132#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Maude Road, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130429745#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Brandon Street, Walworth, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131464526#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "East Dulwich Estate, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128017565#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Swanley House, Kinglake Street, Walworth SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131432783#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Russia Dock Road, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129783452#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Bagshot Street, Walworth",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131702597#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Webster Road, SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/126435182#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Camberwell Green, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132711884#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Staffordshire Street, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128086877#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Dog Kennel Hill, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129349127#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "East Dulwich Estate, East Dulwich SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131589818#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Maude Road, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130429745#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Belvoir Lodge, 59 Underhill Road, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132247643#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Dewar Street Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132539270#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Cator Street, Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131926214#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Bethwin Road, Peckham, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127289756#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Moodkee Street, Canada Water",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129363317#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Holmdene Avenue, London, SE24",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/125124449#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Gautrey Road London SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132865544#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Walworth Road, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129347651#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Troon Close, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/123848837#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Camberwell Road Camberwell SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132909203#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Peckham Grove Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132776756#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Asylum Road  ",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/125953364#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "105 Peckham Road,  London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130124849#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Rossetti Road, South Bermondsey, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132598088#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Peckham Road, Camberwell, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124117202#/?channel=RES_BUY",
   "rent_bed_mo": 963
 },
 {
   "Address": "Highwood Close, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132226505#/?channel=RES_BUY",
   "rent_bed_mo": 1925
 },
 {
   "Address": "Surrey Square, Walworth",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130188602#/?channel=RES_BUY",
   "rent_bed_mo": 1925
 },
 {
   "Address": "Edmonton Court, London, SE16 7BQ",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133144013#/?channel=RES_BUY",
   "rent_bed_mo": 1925
 },
 {
   "Address": "Balfour Street, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129388124#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Mcneil Road, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132882266#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Gautrey Road, Nunhead, SE15",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128711576#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Pilgrims Cloisters II, Sedgmoor Place, London SE5",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133320503#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Chartes House, Abbey Street, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132590240#/?channel=RES_BUY",
   "rent_bed_mo": 1983
 },
 {
   "Address": "Calypso Crescent, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/122350571#/?channel=RES_BUY",
   "rent_bed_mo": 992
 },
 {
   "Address": "Wood Vale, Forest Hill, London, SE23",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133014575#/?channel=RES_BUY",
   "rent_bed_mo": 1983
 },
 {
   "Address": "31 Calypso Crescent, London, Greater London, SE15 6FP",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124804262#/?channel=RES_BUY",
   "rent_bed_mo": 992
 },
 {
   "Address": "Cronin Street, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133145729#/?channel=RES_BUY",
   "rent_bed_mo": 992
 },
 {
   "Address": "Bath Terrace, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133209062#/?channel=RES_BUY",
   "rent_bed_mo": 1006
 },
 {
   "Address": "Friern Road East Dulwich SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130421741#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Regal Row, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131573813#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Kinglake Street, Elephant and Castle, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132974018#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Kinglake Street, Elephant and Castle, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132974018#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "St. Helena Road, Surrey Quays",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132683840#/?channel=RES_BUY",
   "rent_bed_mo": 681
 },
 {
   "Address": "Peckham Rye, Peckham Rye, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128631149#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Haymerle Road, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131295587#/?channel=RES_BUY",
   "rent_bed_mo": 681
 },
 {
   "Address": "Elm Grove, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131726027#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Havil Street, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132519107#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Peckham Rye, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130228106#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Nunhead Green,  London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128282426#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Kimpton Road, Camberwell, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/112270094#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Nunhead Estate Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128551427#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Hunter Court, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132378818#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Friern Road, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/119747726#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Brandon Street, London SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132685238#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Ivydale Road, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129445382#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Carisbrooke Gardens Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132885767#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Peckham Road, LONDON",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130228079#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Rossetti Road, Bermondsey",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132776702#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Camberwell Road London SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132118592#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "East Street, Elephant and Castle, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129664901#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Friern Road, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128688674#/?channel=RES_BUY",
   "rent_bed_mo": 1050
 },
 {
   "Address": "Old Kent Road, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129135875#/?channel=RES_BUY",
   "rent_bed_mo": 1050
 },
 {
   "Address": "Maxted Road, Peckham Rye, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131756993#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Woods Road, London SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133074068#/?channel=RES_BUY",
   "rent_bed_mo": 1065
 },
 {
   "Address": "Wavel Place, Sydenham, SE26",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131516795#/?channel=RES_BUY",
   "rent_bed_mo": 1065
 },
 {
   "Address": "Haddonfield, Surrey Quays",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133030184#/?channel=RES_BUY",
   "rent_bed_mo": 1065
 },
 {
   "Address": "Woods Road, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133035038#/?channel=RES_BUY",
   "rent_bed_mo": 1065
 },
 {
   "Address": "Peckham Rye, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129969008#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Congreve Street, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132730049#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "17 Frogley Road, East Dulwich, London, SE22 9DF",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133053407#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Lindley Estate London SE15",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132285827#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Wyndham Road Camberwell SE5",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132997106#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Peckham Road, LONDON",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130228079#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Wyndham Road Camberwell SE5",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132997106#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Staveley Close Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132293579#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Havil Street London SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130694450#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Highwood Close, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132590717#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Lordship Lane, London SE22",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132738434#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Basingdon Way London SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130640927#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Raymouth Road, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131743370#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Bibury Close, London SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132639722#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Weston Street, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131502689#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Rother House, Peckham Rye ",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130718261#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Honor Oak Rise, Honor Oak, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133047101#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "St. Mary's Road, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130634438#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Rye Hill Park, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127454672#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Latona Road Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/123400658#/?channel=RES_BUY",
   "rent_bed_mo": 547
 },
 {
   "Address": "Milton Close, Bermondsey, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/111109367#/?channel=RES_BUY",
   "rent_bed_mo": 1108
 },
 {
   "Address": "Havil Street, Camberwell, SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130369463#/?channel=RES_BUY",
   "rent_bed_mo": 1108
 },
 {
   "Address": "Peckham Road, London",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132845306#/?channel=RES_BUY",
   "rent_bed_mo": 739
 },
 {
   "Address": "Pelican Estate, London , London, SE15 5NT",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131892968#/?channel=RES_BUY",
   "rent_bed_mo": 739
 },
 {
   "Address": "Pelican Estate, Peckham,London,Greater London,SE15 5NT",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/124231184#/?channel=RES_BUY",
   "rent_bed_mo": 739
 },
 {
   "Address": "Bath Terrace, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132840602#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Stuart Road, Peckham, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127025300#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Nashe House, Burbage Close, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133085135#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Ainsty Estate, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132499868#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Slippers Place, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131374823#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Norman Court, Lordship Lane, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/106445969#/?channel=RES_BUY",
   "rent_bed_mo": 1135
 },
 {
   "Address": "Dewar Street, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131241056#/?channel=RES_BUY",
   "rent_bed_mo": 1137
 },
 {
   "Address": "East Dulwich Estate, Dulwich, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130055372#/?channel=RES_BUY",
   "rent_bed_mo": 1138
 },
 {
   "Address": "St. Mary's Road, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130634438#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Morley House, 110 Commercial Way, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86009934#/?channel=RES_BUY",
   "rent_bed_mo": 1138
 },
 {
   "Address": "Bath Terrace London SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132891002#/?channel=RES_BUY",
   "rent_bed_mo": 1152
 },
 {
   "Address": "Cherry Garden Street, Bermondsey, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129476111#/?channel=RES_BUY",
   "rent_bed_mo": 1152
 },
 {
   "Address": "Caleb Court, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131548694#/?channel=RES_BUY",
   "rent_bed_mo": 1152
 },
 {
   "Address": "Falmouth Road, Elephant & Castle, London, SE1 6RN",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131149913#/?channel=RES_BUY",
   "rent_bed_mo": 1152
 },
 {
   "Address": "Manor Grove, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130636475#/?channel=RES_BUY",
   "rent_bed_mo": 1152
 },
 {
   "Address": "Rossetti Road, Bermondsey",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132560027#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Nunhead Crescent Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131873960#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Alder Close, Peckham, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128001350#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Merrow Street, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132258347#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Surrey Road, Nunhead, London SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/118746881#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Lordship Lane, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132055556#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "St Marys Road, Nunhead, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126466412#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Queens Road Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125838674#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Mary Datchelor Close, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131775173#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Queens Road Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125838674#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Weston Street, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/118628189#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Kelly Avenue, Peckham, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/121795064#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Rutland Ct, Denmark Hill, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132933239#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Penrose Street, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128351519#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Barry Road, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129788129#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Newent Close, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130680371#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Peckham Rye, Peckham Rye, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130520693#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Overhill Road, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129368837#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Maxted Road, Peckham Rye, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131756993#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Millender Walk, London",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131805608#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Amina Way, Bermondsey, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130611824#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Beckway Street, Elephant and Castle, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131928821#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Albion Street, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132732326#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Surrey Road, Nunhead, London SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/118746881#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Cowdray House, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85708569#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Elephant & Castle, Elephant and Castle, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129405935#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Borland Road, Nunhead ",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127288454#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "St Saviours Estate, Bermondsey, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/118542683#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Sydenham Hill, London, SE23 3PL",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/86113461#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Alder Close, Peckham",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/125769614#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Carlton Grove, London",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128865878#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Choumert Road, Peckham Rye, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129671867#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Kirby Estate, Southwark Park Road, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128601686#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Lorrimore Square, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/131892635#/?channel=RES_BUY",
   "rent_bed_mo": 583
 },
 {
   "Address": "Kimberley Avenue, Peckham, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85972965#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Athenlay Road, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132842501#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Surrey Road, Nunhead, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132361064#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Friary Estate, Peckham, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/124926539#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Cooks Road, Kennington, SE17",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129191918#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Hendre Road, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132548417#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Madron Street London SE17",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132506927#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Sydenham Hill, London",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133089095#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Walworth Road, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126595289#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Carlton Grove, London SE15",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131692535#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Bath Terrace, Elephant and Castle, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130386983#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Pomeroy Street London SE14",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129442205#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Old Kent Road, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/126381608#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Amina Way, Bermondsey, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130361456#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "20 Elephant and Castle, Elephant and Castle, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129115415#/?channel=RES_BUY",
   "rent_bed_mo": 1196
 },
 {
   "Address": "Stanton House, Rotherhithe Street, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130548500#/?channel=RES_BUY",
   "rent_bed_mo": 1196
 },
 {
   "Address": "Penrose Street, London",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133173968#/?channel=RES_BUY",
   "rent_bed_mo": 797
 },
 {
   "Address": "Lake House, Scovell Road, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131729219#/?channel=RES_BUY",
   "rent_bed_mo": 1196
 },
 {
   "Address": "Tawny Way, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/126384713#/?channel=RES_BUY",
   "rent_bed_mo": 803
 },
 {
   "Address": "Wood Vale, Forest Hill, London, SE23",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131817182#/?channel=RES_BUY",
   "rent_bed_mo": 1210
 },
 {
   "Address": "Weston Street London SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127124348#/?channel=RES_BUY",
   "rent_bed_mo": 1210
 },
 {
   "Address": "Burnell Walk, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123612830#/?channel=RES_BUY",
   "rent_bed_mo": 1224
 },
 {
   "Address": "East Dulwich Road, East Dulwich, London, London, SE22 9AX",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128763155#/?channel=RES_BUY",
   "rent_bed_mo": 1225
 },
 {
   "Address": "Deverell Street, London Bridge, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129073340#/?channel=RES_BUY",
   "rent_bed_mo": 1225
 },
 {
   "Address": "Marlborough Close, Elephant and Castle, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129925091#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Aberdour Street, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130486328#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Lordship Lane, London SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/121592153#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Bamber Road, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131309147#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Rope Street, Surrey Quays",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133297412#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Manaton Close Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133029677#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Staple Street London SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132774968#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Southwark Park Road, Bermondsey, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131658869#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Jamaica Road, London SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132413012#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Rye Hill Park, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127454672#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Peckham Rye, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129208169#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Hayes Grove, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131123318#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Bryan Road, Surrey Quays",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132800978#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Gaywood Street, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/113621510#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Champion Hill, Camberwell",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132141293#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Mason Street, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129718523#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Goldsmith Road, Peckham, SE15",
   "Location": "Southwark",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/114299405#/?channel=RES_BUY",
   "rent_bed_mo": 620
 },
 {
   "Address": "St. Georges Way, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133319942#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Winchester Close, Walworth",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131728745#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Sedgmoor Place, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132123863#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Trafalgar Street, London SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131746439#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Redcar Street, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127587812#/?channel=RES_BUY",
   "rent_bed_mo": 817
 },
 {
   "Address": "Neptune Street, Irwell Street, London SE16",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131785148#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Pine House, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128953145#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Rope Street, Canada Water, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131707316#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Denmark Hill Estate, Denmark Hill, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130134971#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Landcroft Road, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133203353#/?channel=RES_BUY",
   "rent_bed_mo": 1254
 },
 {
   "Address": "Browning Street, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131813261#/?channel=RES_BUY",
   "rent_bed_mo": 836
 },
 {
   "Address": "Varcoe Road, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131887166#/?channel=RES_BUY",
   "rent_bed_mo": 1254
 },
 {
   "Address": "Honor Oak Rise, Honor Oak, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128963507#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Mural House, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131587142#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "North Cross Road, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132899153#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Doddington Grove, Walworth",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131348822#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Cabrini House  Honor Oak Road  ",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131380982#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Henley Drive, Bermondsey, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86109936#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Lorrimore Road, Kennington, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131661443#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Rockingham Street, Elephant & Castle",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130572617#/?channel=RES_BUY",
   "rent_bed_mo": 856
 },
 {
   "Address": "Rutley Close London SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132556331#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Peckham Rye Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133251473#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Marlowe Court, Lymer Avenue, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129981608#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Montague Square, London",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/86025783#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Rutley Close, London SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132474035#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Ivydale Road, Peckham",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127538573#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Evan Cook Close, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130215737#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Aland Court, Surrey Quays",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132414302#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Plover Way, Surrey Quays",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131851556#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Grenard Close, London SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133317059#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Elmington Estate London SE5",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129166883#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Aland Court, Surrey Quays",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132416048#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Lewes House, Druid Street, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/118961228#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Peckham Grove Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133324001#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Larch House, Ainsty Estate, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124711883#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Consort Road, Peckham, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132865247#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Tiverton Street, London Bridge",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/126785966#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Lant Street, Borough, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128769176#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "West Lane, Bermondsey , SE16",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127256537#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Forest Hill Road, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/102643640#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Dowell House, Kingswood Estate, London, SE21",
   "Location": "Southwark",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/132035603#/?channel=RES_BUY",
   "rent_bed_mo": 656
 },
 {
   "Address": "Rolls Road, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132911813#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Queens Road, Peckham",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131016785#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Latona Road, London SE15",
   "Location": "Southwark",
   "Bedrooms": 5,
   "URL": "http://www.rightmove.co.uk/properties/132374363#/?channel=RES_BUY",
   "rent_bed_mo": 525
 },
 {
   "Address": "East Dulwich Road, East Dulwich, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131455484#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Belvoir Road Dulwich SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130306700#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Tooley Street, Shad Thames",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129590699#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Peckham Rye, Peckham",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/125274962#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Upland Road Dulwich SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133207307#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Slippers Place, Bermondsey, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132375950#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Peckham Grove, Peckham, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132586571#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "East Dulwich Road, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132775499#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Tooley Street, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126051239#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Arnold Estate, London Bridge",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/124162781#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Sunwell Close, Peckham",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/85748547#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Rye Lane, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132512099#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Rye Lane, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132512099#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Rye Lane, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132512099#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Mason Street London SE17",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129656378#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Cooks Road, London, SE17",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128092382#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Falmouth Road SE1",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/65586675#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Long Lane, Borough",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/53171204#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Denesmead, Herne Hill London SE24",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133305065#/?channel=RES_BUY",
   "rent_bed_mo": 1327
 },
 {
   "Address": "Whateley Road, East Dulwich, London, England, SE22 9DB",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130063262#/?channel=RES_BUY",
   "rent_bed_mo": 1342
 },
 {
   "Address": "Dunnage Crescent, South Dock Marina, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132342914#/?channel=RES_BUY",
   "rent_bed_mo": 1342
 },
 {
   "Address": "Bermondsey Street London Bridge SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132238367#/?channel=RES_BUY",
   "rent_bed_mo": 1342
 },
 {
   "Address": "Leyland Court, Sumner Road, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128217131#/?channel=RES_BUY",
   "rent_bed_mo": 1355
 },
 {
   "Address": "Asylum Road, Peckham",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132211133#/?channel=RES_BUY",
   "rent_bed_mo": 1356
 },
 {
   "Address": "East Dulwich Road, London SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131692637#/?channel=RES_BUY",
   "rent_bed_mo": 1356
 },
 {
   "Address": "Dulwich Wood Avenue, London, SE19",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131890925#/?channel=RES_BUY",
   "rent_bed_mo": 1356
 },
 {
   "Address": "Nunhead Lane, LONDON",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132320909#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Grenard Close, London SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133317059#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Sunwell Close, Peckham, SE15",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/76361967#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Scylla Road, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132864095#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Evan Cook Close, Peckham",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133278986#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Claudio Court",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131126507#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Rye Lane, Peckham Rye, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127084544#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Raleigh Court , Crystal Palace ",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/85827990#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Dunstans Road, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128692544#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Slippers Place, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129020132#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Garter Way, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132706361#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "2D Camberwell Grove, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130463366#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "East Dulwich Road, East Dulwich",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127792475#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Elmington Road, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132151352#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Millpond Estate, West Lane, London, SE16 4NA",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/86013906#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Deverell Street, Borough",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/120021986#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Frederick Square, Rotherhithe Street",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131240573#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Consort Road, Peckham, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129349652#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Frederick Square, Rotherhithe Street",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131240573#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Consort Road, Peckham, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129349652#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Mortlock Close, London",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132680930#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Dunstans Road, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129983504#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Copleston Road,  London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130805525#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Frederick Square, Rotherhithe Street",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131449760#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Moodkee Street, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132943136#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Rotherhithe Street, Rotherhithe, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128986295#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Ivydale Road, Upper Nunhead",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127601600#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Nunhead Grove, Peckham",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132262655#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Havil Street, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132311333#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Worlingham Road, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127361264#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Dunton Road London SE1",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132778874#/?channel=RES_BUY",
   "rent_bed_mo": 933
 },
 {
   "Address": "Woods Road, London SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133074068#/?channel=RES_BUY",
   "rent_bed_mo": 1065
 },
 {
   "Address": "Croft Street, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131886656#/?channel=RES_BUY",
   "rent_bed_mo": 1415
 },
 {
   "Address": "Nunhead Grove, Peckham",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132224036#/?channel=RES_BUY",
   "rent_bed_mo": 1415
 },
 {
   "Address": "Tylney Avenue, Crystal Palace, London, SE19",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132779120#/?channel=RES_BUY",
   "rent_bed_mo": 1415
 },
 {
   "Address": "Mundania Court, Forest Hill Road, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132250658#/?channel=RES_BUY",
   "rent_bed_mo": 1415
 },
 {
   "Address": "Camberwell Road, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132896051#/?channel=RES_BUY",
   "rent_bed_mo": 1415
 },
 {
   "Address": "Balin House, Long Lane, London SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133024439#/?channel=RES_BUY",
   "rent_bed_mo": 1429
 },
 {
   "Address": "Fisher Close, London,  SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132468164#/?channel=RES_BUY",
   "rent_bed_mo": 1429
 },
 {
   "Address": "Fisher Close, Rotherhithe SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132030266#/?channel=RES_BUY",
   "rent_bed_mo": 1429
 },
 {
   "Address": "Tooley Street, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130237550#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Willow Walk, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132579791#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Thurlow Park Road, London, SE21",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132477416#/?channel=RES_BUY",
   "rent_bed_mo": 963
 },
 {
   "Address": "Benhill Road, Camberwell",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132250562#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Peckham Road, LONDON",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130228079#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Champion Hill, Camberwell, SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133243436#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Mayflower Street, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125769821#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Northcrofts, Forest Hill",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129458900#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Long Lane London SE1",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132537356#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Garter Way, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132049511#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Overhill Road, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124644890#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Rowcross Street, Bermondsey, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133036571#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Quayside Court, Abbotshade Road, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132266492#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Hichisson Road, Nunhead",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130779962#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Pennington Court, Rotherhithe Street, London, SE16 5FT",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86102721#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Gerridge Court Gerridge Street, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127274957#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "St. Mary's Road, Nunhead, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132916304#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Grove Park, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/119910398#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Stanton House, Rotherhithe Street, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133140038#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Guild House, Bermondsey Works, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130284251#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Ainsty Estate, Southwark",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132907904#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Mary Datchelor Close, London",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132966848#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Nickleby House George Row ",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131553542#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Lordship Lane, East Dulwich, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129658589#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Laburnum Close, London",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131842757#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Sweden Gate, Surrey Quays",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132087830#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Tooley Street, Tower Bridge",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132448637#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Hanover Park , Peckham ",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132597440#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Friern Road,  London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132684725#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Ivydale Road, London",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129445382#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Overhill Road, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131084309#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Sydenham Hill, Sydenham",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133172072#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Oakhurst Grove,  East Dulwich, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133322474#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Havil Street, Camberwell, London, SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128888147#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Lordship Lane, London SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131704883#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Fisher Close, London,  SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132598382#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Camberwell New Road Camberwell SE5",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131302346#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Lugard Road, Peckham, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130474475#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Kennoldes, Dulwich, London, SE21",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132368729#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Talfourd Road, Peckham, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130299599#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Lorrimore Road, London",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/123573842#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Rye Hill Park,  London, SE15",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129123878#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Camberwell Road, Camberwell",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128741603#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "3 Crystal Palace Parade, Dulwich, London , SE19 1UH",
   "Location": "Southwark",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133064312#/?channel=RES_BUY",
   "rent_bed_mo": 1400
 },
 {
   "Address": "Lorrimore Road, London",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/123573842#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Rye Hill Park,  London, SE15",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129123878#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Camberwell Road, Camberwell",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128741603#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Munday House, Burbage Close, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/122171906#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Worgan Street, Canada Water",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129335039#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Worgan Street, Canada Water",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129189185#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Lynton Road, Bermondsey",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129276710#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Peckham Grove Peckham SE15",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133204811#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Newington Causeway, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133097663#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Bird In Bush Road, Peckham",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132967895#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Old Kent Road, London, SE1",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130912664#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Pellatt Road, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133005161#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Dunstans Road, East Dulwich, London, SE22",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129073211#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Gilesmead, Camberwell, SE5",
   "Location": "Southwark",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131478839#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Tooley Street, Tower Bridge",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132448496#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Sweden Gate, London, SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128150867#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Fisher Close, Rotherhithe SE16",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132736340#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Highshore Road, London, SE15",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128882219#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Colyton Road, East Dulwich",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125410586#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Peckham Road, LONDON",
   "Location": "Southwark",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130228079#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Flat 1, 13 Eardley Road, Streatham, London, SW16 6DA",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133106246#/?channel=RES_BUY",
   "rent_bed_mo": 992
 },
 {
   "Address": "Meyrick Road, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131790260#/?channel=RES_BUY",
   "rent_bed_mo": 438
 },
 {
   "Address": "Fontley Way, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131760065#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Mitcham Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132553526#/?channel=RES_BUY",
   "rent_bed_mo": 1342
 },
 {
   "Address": "Avon Court, Keswick Road, Putney, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128269385#/?channel=RES_BUY",
   "rent_bed_mo": 1371
 },
 {
   "Address": "Queenstown Road, Battersea Park, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128435543#/?channel=RES_BUY",
   "rent_bed_mo": 707
 },
 {
   "Address": "Bramlands Close, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132029759#/?channel=RES_BUY",
   "rent_bed_mo": 715
 },
 {
   "Address": "Garratt Lane, Wandsworth, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/123575576#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Cambalt Road, Putney, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127706336#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Nimrod Road, London, SW16",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132674660#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Osprey Heights, 7 Bramlands Close, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/85410396#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Mitcham Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132151604#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Smallwood Road, Tooting, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/125942381#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Clarence Lane, LONDON",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128607413#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Garratt Lane, Wandsworth, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/112152251#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Mitcham Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130225295#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Keevil Drive, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86020116#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Rectory Lane, London SW17",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131145884#/?channel=RES_BUY",
   "rent_bed_mo": 1488
 },
 {
   "Address": "Parkham Street, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129774080#/?channel=RES_BUY",
   "rent_bed_mo": 1488
 },
 {
   "Address": "Wanborough Drive, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130527848#/?channel=RES_BUY",
   "rent_bed_mo": 1517
 },
 {
   "Address": "St. Benedicts Close, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130759679#/?channel=RES_BUY",
   "rent_bed_mo": 1546
 },
 {
   "Address": "St Benedicts Close, Furzedown, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132764114#/?channel=RES_BUY",
   "rent_bed_mo": 1546
 },
 {
   "Address": "Bedford Hill, SW12",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132440804#/?channel=RES_BUY",
   "rent_bed_mo": 1560
 },
 {
   "Address": "Percy House, Pringle Gardens, London SW16",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131679554#/?channel=RES_BUY",
   "rent_bed_mo": 1572
 },
 {
   "Address": "Romberg Road, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130042244#/?channel=RES_BUY",
   "rent_bed_mo": 1575
 },
 {
   "Address": "Fairfield Street, Wandsworth Town, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132188825#/?channel=RES_BUY",
   "rent_bed_mo": 788
 },
 {
   "Address": "Bramlands Close, Battersea, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85677570#/?channel=RES_BUY",
   "rent_bed_mo": 802
 },
 {
   "Address": "Moyser Road, Furzedown, SW16",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131528567#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Battersea High Street, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129612728#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Norley Vale, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131731775#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Upper Richmond Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/121992239#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Tooting Bec Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132532691#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Bell Drive, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86110935#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Mitcham Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128098097#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Bramlands Close, Clapham Junction, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/120577613#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Garratt Lane, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132022640#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Bowman Mews, Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132226940#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Upper Richmond Road, Putney",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130755170#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Mitcham Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/119844611#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Allfarthing Lane, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130991987#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "College Gardens, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130392521#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Battersea High Street, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127920572#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Lydney Close, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/123799091#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Shenstone House, Aldrington Road, LONDON, SW16",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133086851#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Upper Richmond Road, Putney, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133289939#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Ludovick Walk, Putney",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130068677#/?channel=RES_BUY",
   "rent_bed_mo": 846
 },
 {
   "Address": "Upper Richmond Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/124096745#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Mitcham Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/119844629#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Arragon Road, Southfields, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130666922#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Garratt Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133261931#/?channel=RES_BUY",
   "rent_bed_mo": 1721
 },
 {
   "Address": "Wandsworth Workshops, Garratt Lane",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/119878862#/?channel=RES_BUY",
   "rent_bed_mo": 1721
 },
 {
   "Address": "Hannay House, 23 Scott Avenue, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131156399#/?channel=RES_BUY",
   "rent_bed_mo": 1744
 },
 {
   "Address": "Mellison Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131764661#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Ingrave Street, Clapham Junction, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130652318#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Fenner Square, Clapham Junction, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/73381914#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Aldrington Road, London, SW16",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132207005#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Eardley Road, London, SW16",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130240790#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "St. Peter's Close, London, Greater London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131010839#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Windlesham Grove, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132930485#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Molyneux Drive, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86014317#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Earlsfield Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128161169#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Upper Richmond Road, Putney, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130239455#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Gideon Road, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130860149#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Longmoor Point, Norley Vale, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132215228#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "High Cross Way, Alton Road, Roehampton",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132273374#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Bedford Hill, Balham, London, SW12",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129767537#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Henry Doulton Drive, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/125857931#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Henry Doulton Drive, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131221559#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Windlesham Grove, Southfields, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133211306#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Oakhill Road, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130908731#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Upper Tooting Road, Tooting Bec, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130773746#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Swanton Gardens, Southfields, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/125227274#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Rectory Lane, London SW17",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131160377#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Eagle Heights, Bramlands Close, Battersea, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/122807231#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Henry Doulton Drive, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130205333#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "51 Trinity Road, London, London, SW17 7SD",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128103500#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Keevil Drive, London, SW19",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133081460#/?channel=RES_BUY",
   "rent_bed_mo": 583
 },
 {
   "Address": "Wandle Way, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127496321#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Cleeve Way, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125287259#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "York Road, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131721956#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Upper Richmond Road, Putney, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130750619#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Battersea Park Road, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127796921#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Sullivan Close, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130225136#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Putney High Street, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131775203#/?channel=RES_BUY",
   "rent_bed_mo": 1768
 },
 {
   "Address": "Yelverton Road, Battersea, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131748488#/?channel=RES_BUY",
   "rent_bed_mo": 1808
 },
 {
   "Address": "Battersea High Street, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133262438#/?channel=RES_BUY",
   "rent_bed_mo": 1808
 },
 {
   "Address": "Battersea High Street, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/123129107#/?channel=RES_BUY",
   "rent_bed_mo": 1808
 },
 {
   "Address": "Innes Gardens, Putney, London, Greater London, SW15 3AE",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127323209#/?channel=RES_BUY",
   "rent_bed_mo": 904
 },
 {
   "Address": "Innes Gardens, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127281812#/?channel=RES_BUY",
   "rent_bed_mo": 904
 },
 {
   "Address": "Leverson Street, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/121068284#/?channel=RES_BUY",
   "rent_bed_mo": 603
 },
 {
   "Address": "364 Upper Richmond Road, Putney, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131222066#/?channel=RES_BUY",
   "rent_bed_mo": 1838
 },
 {
   "Address": "Heathfield Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132054734#/?channel=RES_BUY",
   "rent_bed_mo": 1838
 },
 {
   "Address": "Kimber Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133035131#/?channel=RES_BUY",
   "rent_bed_mo": 1838
 },
 {
   "Address": "Keswick Road, Putney, London, Greater London, SW15 2DL",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128288624#/?channel=RES_BUY",
   "rent_bed_mo": 1867
 },
 {
   "Address": "Keswick Road, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127389419#/?channel=RES_BUY",
   "rent_bed_mo": 1867
 },
 {
   "Address": "Dagnall Street, Battersa, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128032775#/?channel=RES_BUY",
   "rent_bed_mo": 933
 },
 {
   "Address": "Ashley Crescent, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133203533#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Cleeve Way, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129213881#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Windmill Road, Wandsworth Common, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133001837#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Longley Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129149273#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Gravenel Gardens, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130229321#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Priory Lane, Putney",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132184787#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Fairfield Street, Wandsworth Town SW18",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132214979#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Weydown Close, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131727407#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "St. Benedicts Close, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86036208#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Kingham Close, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/126603575#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Replingham Road, Southfields, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131915243#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Grayswood Point, Norley Vale, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132677825#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Eglantine Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/85539075#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Deepak House, 955 Garratt Lane, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/126435641#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Fairfield Street, Wandsworth Town, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/93920684#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Tildesley Road, Putney",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129787097#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Mitcham Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132620786#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Garratt Lane, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132434429#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Brookview Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130658846#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Rosenau Road, Battersea, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132481739#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Harling Court, Battersea, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133184735#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Roehampton High Street, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132973457#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Bassingham Road, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/114056510#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Windsor Court, 20 Frogmore, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132216119#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Aslett Street, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133300862#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "St. Ann's Hill, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/116965295#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Tonsley Hill, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131240546#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Eardley Road, London, SW16",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132831080#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Gambole Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/107741609#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Whitlock Drive, Southfields, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128843561#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Longley Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128280620#/?channel=RES_BUY",
   "rent_bed_mo": 1925
 },
 {
   "Address": "Horne Way, Putney, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127437575#/?channel=RES_BUY",
   "rent_bed_mo": 1925
 },
 {
   "Address": "Mapleton Road, Wandsworth, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133296620#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Du Cane Court, Balham High Road, Balham, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131986838#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Mapleton Crescent, Wandsworth Town, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131556941#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Clarence Lane, Roehampton",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132300524#/?channel=RES_BUY",
   "rent_bed_mo": 977
 },
 {
   "Address": "Albert Drive, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127284491#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Barringer Square, Tooting Bec, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133118525#/?channel=RES_BUY",
   "rent_bed_mo": 977
 },
 {
   "Address": "Bedford Hill, Balham",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131086934#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Garratt Lane, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133204322#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Ashdown Way, Balham",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132635285#/?channel=RES_BUY",
   "rent_bed_mo": 1983
 },
 {
   "Address": "Aslett Street, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132587261#/?channel=RES_BUY",
   "rent_bed_mo": 1983
 },
 {
   "Address": "Pines Court, 48 Victoria Drive, Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131090123#/?channel=RES_BUY",
   "rent_bed_mo": 1983
 },
 {
   "Address": "Tildesley Road, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131150816#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Augustus Road, Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129576389#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Roehampton Lane, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133163576#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Harrier House, Sullivan Close, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86051067#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Aldrington Road, Streatham",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127281290#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Deeley Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129718148#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Deeside Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131527472#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Berry House, Dagnall Street, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133110635#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Battersea Park Road, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132484535#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "20A (Unit 6) Gwynne Road, Battersea, London SW11 3GL",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131957774#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Thrale Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132985991#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Windlesham Grove, Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130719875#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Tooting High Street, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125199329#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Toland Square, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130229282#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Mitcham Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132151604#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Innes Gardens, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129397226#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Clarence Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/132745127#/?channel=RES_BUY",
   "rent_bed_mo": 510
 },
 {
   "Address": "York Road, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130985297#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Whitlock Drive, London, SW19",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132631526#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Lavender Hill, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132915392#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Queenstown Road, London, SW8",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131445056#/?channel=RES_BUY",
   "rent_bed_mo": 1050
 },
 {
   "Address": "Vicarage Crescent, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/117015467#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "35 Queenstown Road, Battersea, London, SW8 3RE",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131524508#/?channel=RES_BUY",
   "rent_bed_mo": 1050
 },
 {
   "Address": "St Benedicts Close, Tooting, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132526472#/?channel=RES_BUY",
   "rent_bed_mo": 1050
 },
 {
   "Address": "Sherfield Gardens, London",
   "Location": "Wandsworth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/131503949#/?channel=RES_BUY",
   "rent_bed_mo": 525
 },
 {
   "Address": "Aldrington Road, Streatham, SW16",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/124918493#/?channel=RES_BUY",
   "rent_bed_mo": 700
 },
 {
   "Address": "Ryefield Path, Bessborough Road ",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133276571#/?channel=RES_BUY",
   "rent_bed_mo": 1050
 },
 {
   "Address": "Sherfield Gardens, Roehampton SW15",
   "Location": "Wandsworth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/124807484#/?channel=RES_BUY",
   "rent_bed_mo": 525
 },
 {
   "Address": "5A Coverton Road, Tooting, London, SW17 0QW ",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132520100#/?channel=RES_BUY",
   "rent_bed_mo": 1050
 },
 {
   "Address": "St. Benedicts Close, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132905999#/?channel=RES_BUY",
   "rent_bed_mo": 1065
 },
 {
   "Address": "Oakman House, Tilford Gardens, Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132746462#/?channel=RES_BUY",
   "rent_bed_mo": 1079
 },
 {
   "Address": "Sullivan Close, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133275200#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Tilford Gardens, Southfields, SW19",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128623583#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Chobham Gardens, London, SW19",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130772114#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Charlotte Despard, Battersea, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130773380#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Strathdon Drive, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128484908#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Smithwood Close, Southfields, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86118399#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Longley Road, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/87373180#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Fitzhugh Grove, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131061335#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Crowthorne Close, Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132128108#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Romberg Road, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132545525#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Pembroke House, Toland Square, Roehampton",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129700580#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Heathfield Road, Wandsworth, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/61387062#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Eardley Road, Streatham",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130974428#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Deeside Road, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133053182#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Siward Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131906987#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Glen Albyn Road, Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126472346#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Estate House, 225-231 Upper Richmond Road, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125280035#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Garratt Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85999326#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Barringer Square, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130229309#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Maysoule Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133113743#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Fitzhugh Grove, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132638399#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Garratt Lane, Earlsfield, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132388820#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "LONDON, SW19",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132468959#/?channel=RES_BUY",
   "rent_bed_mo": 1108
 },
 {
   "Address": "Melrose Road, Wandsworth, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131428376#/?channel=RES_BUY",
   "rent_bed_mo": 1108
 },
 {
   "Address": "Burmester Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130926413#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Sullivan Close, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127219490#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Aubyn Square, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124982627#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Alfreda Street, Battersea, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129195797#/?channel=RES_BUY",
   "rent_bed_mo": 1137
 },
 {
   "Address": "Urmston Drive, Putney, London, SW19",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125019215#/?channel=RES_BUY",
   "rent_bed_mo": 1138
 },
 {
   "Address": "Earlsfield Road, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133230011#/?channel=RES_BUY",
   "rent_bed_mo": 1138
 },
 {
   "Address": "48 Aldrington Road, Streatham, SW16",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129130010#/?channel=RES_BUY",
   "rent_bed_mo": 758
 },
 {
   "Address": "Smallwood Road, Tooting, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128831873#/?channel=RES_BUY",
   "rent_bed_mo": 1138
 },
 {
   "Address": "Ivanhoe House, Lochinvar Street, Balham SW12 8PX",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126502187#/?channel=RES_BUY",
   "rent_bed_mo": 1143
 },
 {
   "Address": "Horne Way, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86014530#/?channel=RES_BUY",
   "rent_bed_mo": 1152
 },
 {
   "Address": "Crampton House, Nine Elms, London, SW8",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/125019536#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Clarence Lane, Roehampton, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132185786#/?channel=RES_BUY",
   "rent_bed_mo": 768
 },
 {
   "Address": "West Drive, London, SW16",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132849527#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Balham New Road, Balham",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127766531#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Merton Road, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/88985134#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Fernwood, Albert Drive, Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130405319#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Gwynne Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133314971#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Maysoule Road, Clapham Junction, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128917028#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Innes Gardens, Putney",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132306767#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Mitcham Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132620786#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Warwick Drive, Putney, London, Greater London, SW15 6LE",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129753782#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Stoford Close, Southfields, London, SW19",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133231679#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Merton Road, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/96593605#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Balham Hill, Balham",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/120978191#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "St. John's Hill, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132153653#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "5A Coverton Road, Tooting, London, SW17 0QW ",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133056848#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Merton Road, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131475008#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "East Hill, Wandsworth",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132796361#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Putney Bridge Road, Wandsworth Town, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131428187#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Merton Road, Soutfields, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127750934#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Holgate Avenue, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131416790#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Merton Road, Wandsworth, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130627205#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Francis Chichester Way, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/133291226#/?channel=RES_BUY",
   "rent_bed_mo": 583
 },
 {
   "Address": "Merton Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132065030#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "St Georges Grove, Earlsfield, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131366393#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Yelverton Road, Battersea, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128748935#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Renmuir Street, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132586055#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Victoria Drive, Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131802632#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Brathway Road, Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131802638#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Replingham Road, Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131802641#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Burmester Road, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132884018#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Whitnell Way, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131776034#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Inner Park Road, Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133117775#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Wandsworth Common West Side, Wandsworth",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128947580#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Aldrington Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/130606181#/?channel=RES_BUY",
   "rent_bed_mo": 583
 },
 {
   "Address": "Okeburn Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132269981#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Blincoe Close, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127183943#/?channel=RES_BUY",
   "rent_bed_mo": 807
 },
 {
   "Address": "Battersea Church Road, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128951720#/?channel=RES_BUY",
   "rent_bed_mo": 1210
 },
 {
   "Address": "Winterfold Close, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132741797#/?channel=RES_BUY",
   "rent_bed_mo": 807
 },
 {
   "Address": "Whitnell Way, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127796375#/?channel=RES_BUY",
   "rent_bed_mo": 1225
 },
 {
   "Address": "Alton Road, Putney",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128212358#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Castlecombe Drive, Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130780763#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Putney Bridge Road, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128114285#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Balham Hill, Balham",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127854713#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Gearing Close, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132050741#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Bramlands Close, Clapham Junction, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131229326#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Austin Road, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125967746#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Garratt Lane, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130172156#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "The Elms, Tooting Bec Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131420921#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Upper Tooting Park, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127935227#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Fernthorpe Road, London, SW16",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85132107#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Heathfield Square, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130191092#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Smallwood Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85979373#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Mapleton Road, Wandsworth",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/120532406#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Recovery Street, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131901689#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Rockingham Close, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133300250#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Wandle Way, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127496321#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Balham High Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131967878#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Jansen Walk, Battersea, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/121453526#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Warwick Drive, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125998976#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Queenstown Road, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129324353#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Balham High Road, Balham",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131862071#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Kimber Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133035131#/?channel=RES_BUY",
   "rent_bed_mo": 1838
 },
 {
   "Address": "Rockingham Close, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133287416#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Merton Road, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132044267#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Merton Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132800972#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Smithwood Close, Southfields, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132663473#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Heathfield Square, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130194227#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Leverson Street, Streatham",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132292571#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Comyn Road London SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129905138#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Isis Close, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131579747#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Gernigan House, Fitzhugh Grove, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133022732#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Pevensey Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127687703#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Garratt Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132216758#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Merton Road, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132570845#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Upper Richmond Road, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129596903#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Balham Hill, Balham, London, SW12",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129363368#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Fitzhugh Grove, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131061335#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Woking Close, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132566336#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Skeena Hill, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131006534#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Haldon Road, Putney, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132550955#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Amen Corner, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86029536#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Plough Road, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132852023#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Ribblesdale Road, Furzedown, SW16",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131703062#/?channel=RES_BUY",
   "rent_bed_mo": 1254
 },
 {
   "Address": "Garratt Lane, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131564060#/?channel=RES_BUY",
   "rent_bed_mo": 1254
 },
 {
   "Address": "Longley Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131611145#/?channel=RES_BUY",
   "rent_bed_mo": 1254
 },
 {
   "Address": "Patmore Estate, London, SW8",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/124471721#/?channel=RES_BUY",
   "rent_bed_mo": 836
 },
 {
   "Address": "Ingrave Street, Clapham Junction, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130652318#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Lochinvar Street, London, SW12",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132151691#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Woodhams House, West Hill, Wandsworth, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132819071#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Coverton Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129088709#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Molyneux Drive, Tooting Bec, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132488900#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Roehampton Lane, Roehampton",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126639221#/?channel=RES_BUY",
   "rent_bed_mo": 1283
 },
 {
   "Address": "Shaftesbury Park Chambers, Ashbury Road, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131434385#/?channel=RES_BUY",
   "rent_bed_mo": 1298
 },
 {
   "Address": "Vauxhall Court, Frogmore, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130126898#/?channel=RES_BUY",
   "rent_bed_mo": 1298
 },
 {
   "Address": "Weydown Close, SW19",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131371397#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Little Dimocks, Balham, London, SW12",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129813014#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Penrith Street, Streatham",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/121453466#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Binstead House, 5 Vermont Road, Wandsworth, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86011722#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Acuba Road, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129194093#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Scott Avenue, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123325910#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Trinity Road, Wandsworth, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127205405#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Argento Tower, Mapleton Road, Wandsworth, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132896279#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Massingberd Way, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85368552#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Kersfield Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126043403#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Limes Gardens, West Hill, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133142240#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Upper Richmond Road, Putney",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127984514#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Ludo Building Earlsfield Road Earlsfield London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133270847#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Garratt Lane, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132782069#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Heathview Court, Parkside, Wimbledon",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132561539#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Upper Richmond Road, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132440555#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Battersea Park Road, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132391889#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Penny Mews, Balham",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128074508#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Recovery Street, Tooting Broadway, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129594608#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Skipsea House, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133195028#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Garratt Lane, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85923441#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Garratt Lane, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85923441#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Lucien Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/119728694#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Beaumont Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133063163#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Mitcham Lane, London, SW16",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132046781#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Credenhill Street, London, SW16",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130701881#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Crampton House, Nine Elms, London, SW8",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/125019536#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Omega Building, Smugglers Way, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132225050#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Garratt Lane, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128854937#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Charlmont Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130531724#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Delia Street, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132220277#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Barringer Square, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130741880#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Drakefield Road, Balham",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128380853#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Kenlor Road, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132535016#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Merton Road, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130059929#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Dowdeswell Close, Putney",
   "Location": "Wandsworth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/133230665#/?channel=RES_BUY",
   "rent_bed_mo": 656
 },
 {
   "Address": "Benham Close, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131799347#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Lavender Hill, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132140849#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Kings Yard, Stanbridge Road, Putney",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130962761#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Wandle Way, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127496321#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Hanford Close, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131622287#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Battersea Rise, Battersea, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131823059#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Garratt Lane, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130397390#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "East Hill, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131315828#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Eardley Road, Streatham Furzedown, SW16",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128730845#/?channel=RES_BUY",
   "rent_bed_mo": 1327
 },
 {
   "Address": "Otterburn Street, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130172006#/?channel=RES_BUY",
   "rent_bed_mo": 1342
 },
 {
   "Address": "Queenstown Road, Battersea, London, SW8",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127144175#/?channel=RES_BUY",
   "rent_bed_mo": 1342
 },
 {
   "Address": "QUEENSTOWN ROAD, SW8",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123761498#/?channel=RES_BUY",
   "rent_bed_mo": 1342
 },
 {
   "Address": "Maysoule Road, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129531605#/?channel=RES_BUY",
   "rent_bed_mo": 894
 },
 {
   "Address": "Integra House, 967 Garratt Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86108118#/?channel=RES_BUY",
   "rent_bed_mo": 1342
 },
 {
   "Address": "Byrne Road, Balham",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85994313#/?channel=RES_BUY",
   "rent_bed_mo": 1356
 },
 {
   "Address": "Delia Street, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126752936#/?channel=RES_BUY",
   "rent_bed_mo": 1356
 },
 {
   "Address": "Albert Drive, Southfields, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132236477#/?channel=RES_BUY",
   "rent_bed_mo": 904
 },
 {
   "Address": "Augustus Road, Southfields, London, SW19",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131853914#/?channel=RES_BUY",
   "rent_bed_mo": 1356
 },
 {
   "Address": "Macmillan Way, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132319379#/?channel=RES_BUY",
   "rent_bed_mo": 1356
 },
 {
   "Address": "Recovery Street, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131651729#/?channel=RES_BUY",
   "rent_bed_mo": 1356
 },
 {
   "Address": "3 Inner Park Road, Wimbledon, SW19",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127388921#/?channel=RES_BUY",
   "rent_bed_mo": 1371
 },
 {
   "Address": "Merton Road, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/89998843#/?channel=RES_BUY",
   "rent_bed_mo": 1371
 },
 {
   "Address": "Argento Tower, Mapleton Road, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131958449#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Burntwood Lane, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/86113662#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Credenhill Street, Furzedown",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127329833#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Gatton Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128308661#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Byton Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124019321#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Avarn Road, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131452325#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Heron House,\nSearles Close, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130536218#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Spanish Road, Wandsworth, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129400925#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Yelverton Road, Battersea, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128748935#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Roehampton Lane, Putney",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129050033#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Putney Heath Lane, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130456406#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Askill Drive, Putney",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132912779#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Armoury Way, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131417672#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Balham High Road, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130499666#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Cameron Court, Princes Way, London, SW19",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131012363#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Mossbury Road, Battersea, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129868892#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "John Archer Way, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130852367#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Hertford Court, 45 Falcon Road, Battersea, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129038819#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Lydden Grove, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127839251#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Du Cane Court, Balham High Road, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132579491#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Tooting High Street, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127967726#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Holford Way, Roehampton, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124259873#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Cromford Road, East Putney",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131313713#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Vicarage Crescent, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/117015467#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "West Hill, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86022555#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Clove Hitch Quay, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132600926#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Severus Road, Battersea, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133082321#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Common View, West Putney, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131939234#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Horne Way, West Putney, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131988509#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "St. Georges Grove, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132627065#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "St. John's Hill, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/121329932#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Molasses House, Clove Hitch Quay, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131429618#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "West Hill, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133117859#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Furmage Street, Wandsworth, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132476207#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Earlsfield Road, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128694917#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Merton Road, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132132245#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Wandle Way, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127496321#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Blincoe Close, Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129910484#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Barringer Square, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127704548#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Gassiot Road, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127982438#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Battersea Park Road, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132119816#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Tower Court, Frogmore, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128946740#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Patmore Estate, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/120155234#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "St Georges Grove, Earlsfield, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130734482#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Smugglers Way, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131300000#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Kettering Street, Furzedown",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133332230#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Huron Road, Balham",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85928859#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Tooting High Street, London SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131722988#/?channel=RES_BUY",
   "rent_bed_mo": 1400
 },
 {
   "Address": "Borrodaile Road, Wandsworth",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132454289#/?channel=RES_BUY",
   "rent_bed_mo": 933
 },
 {
   "Address": "West Hill, London, SW15 3SP",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132533264#/?channel=RES_BUY",
   "rent_bed_mo": 1400
 },
 {
   "Address": "Groomfield Close, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/112126622#/?channel=RES_BUY",
   "rent_bed_mo": 1415
 },
 {
   "Address": "West Hill, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131009198#/?channel=RES_BUY",
   "rent_bed_mo": 1415
 },
 {
   "Address": "Tooting Grove, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131132618#/?channel=RES_BUY",
   "rent_bed_mo": 943
 },
 {
   "Address": "Tooting Grove, Tooting, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130195694#/?channel=RES_BUY",
   "rent_bed_mo": 943
 },
 {
   "Address": "Tooting Grove, Tooting Broadway, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131349509#/?channel=RES_BUY",
   "rent_bed_mo": 943
 },
 {
   "Address": "Tooting Grove, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130861103#/?channel=RES_BUY",
   "rent_bed_mo": 943
 },
 {
   "Address": "Du Cane Court, Balham High Road, Balham, SW17 7JS",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127466345#/?channel=RES_BUY",
   "rent_bed_mo": 1429
 },
 {
   "Address": "Wadham Road, Putney, Putney",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128520374#/?channel=RES_BUY",
   "rent_bed_mo": 1429
 },
 {
   "Address": "Garratt Lane, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127030097#/?channel=RES_BUY",
   "rent_bed_mo": 1429
 },
 {
   "Address": "Juniper Drive, Wandsworth",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131035496#/?channel=RES_BUY",
   "rent_bed_mo": 1429
 },
 {
   "Address": "Este Road, Battersea, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131800421#/?channel=RES_BUY",
   "rent_bed_mo": 953
 },
 {
   "Address": "Charles Court, 345 Upper Richmond Road, Putney",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132662879#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Trevelyan Road, Tooting, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130994807#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Broomhill Road, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125725709#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "McCarthy Court, Banbury Street, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126823307#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Alderbrook Road, Balham",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127435889#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Putney Hill, Putney",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133253756#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Selhurst Close, Wimbledon, SW19",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132977621#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Valnay Street, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131844113#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Comyn Road London SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129905138#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Woodbury Street, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/121835654#/?channel=RES_BUY",
   "rent_bed_mo": 1451
 },
 {
   "Address": "Atheldene Road, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128226563#/?channel=RES_BUY",
   "rent_bed_mo": 1455
 },
 {
   "Address": "Marcus Terrace, Wandsworth, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132446258#/?channel=RES_BUY",
   "rent_bed_mo": 1455
 },
 {
   "Address": "Welham Road, London, SW16",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131995997#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Dolphin House, Smugglers Way, Wandsworth, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/120825320#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Battersea Park Road, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132476129#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Smugglers Way, Wandsworth",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127361114#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Banbury Street, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132754910#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Lavender Hill, Battersea, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/122875133#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Culvert Rd, Battersea, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131508851#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Maysoule Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130754414#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Comyn Road, Battersea",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132058364#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Heathfield Square, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/123989669#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Louvaine Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131147060#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Garratt Lane, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85923441#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Louvaine Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131147060#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Inner Park Road, Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132226946#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Garratt Lane, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132718391#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Pevensey Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131020925#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Tennyson Street, London, SW8",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132807497#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Church Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131691947#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Elsenham Street, Southfields, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86055051#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Salterford Road, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131033054#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Heslop Road, London, SW12",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132912212#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Augustus Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129343340#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Spencer Park, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131843615#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Heathfield Road, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133039406#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Chetwode Road, Tooting Bec",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133046741#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "St. Georges Grove, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132517241#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Danebury Avenue, Putney, London",
   "Location": "Wandsworth",
   "Bedrooms": 5,
   "URL": "http://www.rightmove.co.uk/properties/127945973#/?channel=RES_BUY",
   "rent_bed_mo": 583
 },
 {
   "Address": "Kinnaird House, Whitnell Way, London SW15 6DF",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131616074#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Old Hospital Close, Balham, London, SW12",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132654890#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Allfarthing Lane, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132694313#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Elderfield Place, Tooting Bec",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132949595#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Idlecombe Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132610880#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Trinity Road, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133252820#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Elderfield Place, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130765856#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Garratt Lane, Earlsfield",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132939185#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Replingham Road, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131815463#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Pevensey Road, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131060267#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Gaskarth Road, London, SW12",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131298698#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Broomhill Road, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131019092#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Queen Marys House, 1 Holford Way, Roehampton",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133151294#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Tonsley Hill, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131240546#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Garratt Lane, Garratt Lane",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131997401#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Ericcson Close, London",
   "Location": "Wandsworth",
   "Bedrooms": 5,
   "URL": "http://www.rightmove.co.uk/properties/133199300#/?channel=RES_BUY",
   "rent_bed_mo": 583
 },
 {
   "Address": "Queen Mary's House, 1 Holford Way, London SW15 5DU",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126957443#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Woodbury Street, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127955807#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Coral Row, Battersea, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124864406#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Woodlands Way, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130191992#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Queen Mary's House, 1 Holford Way, London SW15 5DH",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132788090#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Vicarage Crescent, London, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86115066#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Weimar Street, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130446752#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Tooting High Street, Tooting",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127546565#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Trevelyan Road, London, SW17",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132913988#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Strathville Road Earlsfield London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131780807#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Upper Richmond Road, Putney, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133249136#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Queens Ride, Barnes, London, SW13",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128048303#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Balvernie Grove Southfields",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85988001#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Trinity Road, The Toastrack, London, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130852637#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Westbridge House,\nWestbridge Road, SW11",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132475034#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Albemarle, Wimbledon Park Side, London, SW19",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127724150#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Juniper Drive,\nWandsworth, SW18",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132475040#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Sullivan Close, London",
   "Location": "Wandsworth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130225124#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Cotton Row, London",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126342431#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Oakhill Road, London, SW15",
   "Location": "Wandsworth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131338475#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Belvedere Place, Brixton, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132402293#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Cedars Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/121535747#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Acre Lane, Brixton",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125779466#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "4 Gaumont Place, Streatham, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/115315685#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Corrance Road, SW2 ",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124779011#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Palace Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131760476#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "216 Kennington Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132889484#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Singer Mews, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131332613#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Perran Road, Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132456326#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Modo Building, 2 Clement Avenue, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127007981#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Streatham Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128328899#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Barrow Road, Streatham ",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131408822#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "St Martin's Road, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129908561#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Clayton Street, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132873269#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "156 Coldharbour Lane, Camberwell, SE5",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/112627013#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Davidson Gardens, Nine Elms/Vauxhall",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/118996415#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Vauxhall Street, Vauxhall, London, SE11",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/121360265#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Leigham Court Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133294334#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Crescent Lane, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131567717#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Herne Hill, Herne Hill, London, SE24",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129194033#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Gauden Road, Clapham High Street, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129582800#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Thurlestone Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130652807#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Meadow Road, London SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85369761#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Salford Road, Balham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133010621#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Brixton Road, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132671831#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Gauden Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128058368#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Clarence Avenue, SW4",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126667307#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Idmiston Road, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124173518#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Tivoli Road, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86118075#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Herne Hill Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132327353#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Gaumont Place, Streatham Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/122859596#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Idmiston Road, West Norwood, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127758833#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Opal Street, London SE11",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132629333#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Opal Street, London",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130230311#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Perran Road, Tulse Hill",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130945166#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Newburn Street, Kennington",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/126775364#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Landor Road, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123576320#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Stockwell Park Walk, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86063250#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Delphian Court, Leigham Court Road, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132395894#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Gauden Road, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133248431#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Gaumont Place, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133104452#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Newburn Street Kennington SE11",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132163445#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Jebb Avenue, Brixton, London",
   "Location": "Lambeth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/86117964#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Clapham Park Road, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86073984#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Rosendale Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130200653#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Clapham Road, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85323135#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Caroline Close, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132609836#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Hopton Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124289453#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Brixton Road, Brixton, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86029185#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Vanbrugh Court, Wincott Street, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132407831#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Greet Street, Southwark",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130547489#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Clapham Park Road, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132052154#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Southwell Road London SE5",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133321904#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Hackford Road, London SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129769862#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "10 Lunham Road, Crystal Palace, Norwood, London, SE19",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131233736#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "202 Wandsworth Road, Vauxhall Nine Elms, SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131812787#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Jeffreys Road, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126302102#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Wimbart Road, Brixton",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130733342#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Hopton Road, Streatham, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131363135#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Kennington Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132829676#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Coburg Crescent, Brixton",
   "Location": "Lambeth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/130907369#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Union Grove, Clapham, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132549878#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Bedford Road, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128834135#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Fairmile Avenue, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127923311#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Thurlow Park Road   ",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132329960#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Clapham High Street, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131865905#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Dulwich Road, Herne Hill",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126675014#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Acre Lane, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132895214#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Mullins Place, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130983266#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Mount Nod Road London SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127686317#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Christchurch Road, Tulse Hill",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/120584321#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Greet Street, Southwark",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130522289#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Ellison Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132195752#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Stonehills Mansions, 2 Streatham High Road, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128671832#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Clapham Road, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126144980#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Vauxhall Walk, Kennington",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131230496#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Heyford Avenue, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124378265#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Lyham Road, SW2",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129726230#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Lilford Road, Camberwell",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131100203#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Gaumont Place, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131790377#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Streatham Hill, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133135097#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Hamilton Road, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132776222#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Handforth Road, Oval",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129504299#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Ellison Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132758858#/?channel=RES_BUY",
   "rent_bed_mo": 963
 },
 {
   "Address": "Coburg Crescent, Brixton",
   "Location": "Lambeth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/132999332#/?channel=RES_BUY",
   "rent_bed_mo": 722
 },
 {
   "Address": "Crown Lane Gardens, Crown Lane",
   "Location": "Lambeth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/131093888#/?channel=RES_BUY",
   "rent_bed_mo": 722
 },
 {
   "Address": "Charlotte Row, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133231073#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Estreham Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131997422#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "St. Julians Farm Road, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132682937#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Leigham Court Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132997898#/?channel=RES_BUY",
   "rent_bed_mo": 963
 },
 {
   "Address": "Pathfield Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130171790#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Juxon Street, Kennington",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132714719#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Riggindale Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129363656#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Streatham Common North, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130749380#/?channel=RES_BUY",
   "rent_bed_mo": 1444
 },
 {
   "Address": "Streatham High Road, Streatham High Road",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130543034#/?channel=RES_BUY",
   "rent_bed_mo": 1429
 },
 {
   "Address": "Black Prince Road, Kennington, London, SE11",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/85454334#/?channel=RES_BUY",
   "rent_bed_mo": 953
 },
 {
   "Address": "Tulse Hill, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132991853#/?channel=RES_BUY",
   "rent_bed_mo": 1429
 },
 {
   "Address": "Kennington Park Road, London SE11",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/122958203#/?channel=RES_BUY",
   "rent_bed_mo": 953
 },
 {
   "Address": "Branksome Road , Brixton, London, England, SW2 5JA",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133150538#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Tregothnan Road, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131688134#/?channel=RES_BUY",
   "rent_bed_mo": 1429
 },
 {
   "Address": "Streatham Hill, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130009691#/?channel=RES_BUY",
   "rent_bed_mo": 1429
 },
 {
   "Address": "Offley Road, Oval",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126793136#/?channel=RES_BUY",
   "rent_bed_mo": 1429
 },
 {
   "Address": "Greyhound Lane, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126917117#/?channel=RES_BUY",
   "rent_bed_mo": 1415
 },
 {
   "Address": "Drewstead Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132899177#/?channel=RES_BUY",
   "rent_bed_mo": 1415
 },
 {
   "Address": "Gaumont Place, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132913919#/?channel=RES_BUY",
   "rent_bed_mo": 1415
 },
 {
   "Address": "Dudley Mews, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132770459#/?channel=RES_BUY",
   "rent_bed_mo": 1400
 },
 {
   "Address": "Sandmere Road, Clapham North, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131229410#/?channel=RES_BUY",
   "rent_bed_mo": 1400
 },
 {
   "Address": "Kennington Park Road, Kennington",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125707382#/?channel=RES_BUY",
   "rent_bed_mo": 1400
 },
 {
   "Address": "Glenelg Road, Brixton",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132741419#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Thurlow Park Road, West Dulwich",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/96569488#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Marylee Way, Kennington",
   "Location": "Lambeth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/131941988#/?channel=RES_BUY",
   "rent_bed_mo": 693
 },
 {
   "Address": "Glenelg Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132437342#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Lyham Road, Brixton",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130759220#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Maple Close, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132376496#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Blore Close, London",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127454645#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Tulse Hill, Brixton, London, Lambeth, SW2 2HJ",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133068509#/?channel=RES_BUY",
   "rent_bed_mo": 719
 },
 {
   "Address": "Strathbrook Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131619833#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Upper Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131043608#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Salford Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132930149#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Thurlow Hill, West Dulwich",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131983550#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Vassall Road, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130765949#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Estreham Road, Streatham Common, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/129406127#/?channel=RES_BUY",
   "rent_bed_mo": 693
 },
 {
   "Address": "Gaumont Place, Streatham Hill",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132208826#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Gaumont Place, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133297067#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Streatham High Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132788201#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Larkhall Rise, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127076537#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Brading Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130569635#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Cambria Road, London, SE5",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128554457#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Hopton Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130200152#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Rommany Road, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130710257#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Martin House, Nine Elms, SW8",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132597812#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Deerhurst Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131651747#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Dunbar Street, Lambeth, London, SE27 9JY",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/86103309#/?channel=RES_BUY",
   "rent_bed_mo": 817
 },
 {
   "Address": "Leigham Avenue, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130454783#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Cambria Road, London, SE5",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125567606#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Romola Road, Herne Hill, London, SE24",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132165089#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Kingston Square, Crystal Palace",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/115580855#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Clapham Road Estate, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132820796#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Chestnut Close, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133165976#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Coburg Crescent, London",
   "Location": "Lambeth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/130120955#/?channel=RES_BUY",
   "rent_bed_mo": 693
 },
 {
   "Address": "Mount Nod Road, SW16",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/86102658#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Streatham High Road, Streatham, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131649293#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Kings Avenue, Clapham Park, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133215227#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Barcombe Avenue, Streatham Hill",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131880374#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Streatham High Road, Streatham, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131700947#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Chantrey Road, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131137646#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Shakespeare Road, SE24",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132676781#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Nelsons Row, SW4",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133301135#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Gipsy Hill, Upper Norwood, London, SE19",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132336854#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Grantham Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133022213#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Masey Mews, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133024682#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Thurlow Park Road Dulwich SE21",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132930953#/?channel=RES_BUY",
   "rent_bed_mo": 1371
 },
 {
   "Address": "Thurlow Park Road, London, SE21",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132407216#/?channel=RES_BUY",
   "rent_bed_mo": 1371
 },
 {
   "Address": "NORTHBOURNE ROAD, SW4",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132671471#/?channel=RES_BUY",
   "rent_bed_mo": 1356
 },
 {
   "Address": "Fenwick Place, Clapham, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131454047#/?channel=RES_BUY",
   "rent_bed_mo": 1342
 },
 {
   "Address": "Thurlow Park Road , West Dulwich, London, SE21",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85973466#/?channel=RES_BUY",
   "rent_bed_mo": 1342
 },
 {
   "Address": "Kings Avenue, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130188653#/?channel=RES_BUY",
   "rent_bed_mo": 1342
 },
 {
   "Address": "QUEENSTOWN ROAD, SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123778145#/?channel=RES_BUY",
   "rent_bed_mo": 1342
 },
 {
   "Address": "Effra Parade, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133005173#/?channel=RES_BUY",
   "rent_bed_mo": 893
 },
 {
   "Address": "Limerick Close, Balham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131356433#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Gleneagle Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128115017#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "25 Belgravia House, 30 Clarence Avenue, London, SW4 8HY",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86102454#/?channel=RES_BUY",
   "rent_bed_mo": 1079
 },
 {
   "Address": "Ellison Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/120313586#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Salford Road, Balham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130160675#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Hainthorpe Road, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133012241#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Palace Road, Streatham Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133002119#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Norwood Road, Herne Hill",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132941846#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Flat ,  Leigham Court Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132899012#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Upper Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129859388#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Fitzgerald House, Stockwell Park Road, SW9",
   "Location": "Lambeth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/79086714#/?channel=RES_BUY",
   "rent_bed_mo": 656
 },
 {
   "Address": "Henry Tate Mews, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124028132#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Shrubbery Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131999576#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Conyers Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128419484#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Copley Park, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130053104#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Leander Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130470755#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Brixton Hill, Brixton Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133117976#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Christchurch Road, Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129750662#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Lansdowne Way, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129225278#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Ellison Road, Streatham, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/118868279#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Allen Edwards Drive, Nine Elms, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131288846#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Kings Avenue, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133022936#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Leigham Vale, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126232664#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Gosling Way, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127407095#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Milles Square, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130253711#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Salisbury Place, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132925397#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "The Print House, Streatham, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127932047#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Pathfield Road, Streatham, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132911201#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Palace Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130580066#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Albion Avenue, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133141145#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Gipsy Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132346016#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Streatham High Road, LONDON",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128749052#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Natal Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132738404#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Dunbar Street, Lambeth, London, SE27 9JY",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/86103309#/?channel=RES_BUY",
   "rent_bed_mo": 817
 },
 {
   "Address": "Clapham Manor Street, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133136378#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Caldecot Road, Camberwell, SE5",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133282868#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Chapel Road, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127006532#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Gosling Way, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128366174#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Thirlmere Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130192205#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Masey Mews, Brixton, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/71052381#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Drewstead Road, London SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131145896#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Weir Road, Balham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132198686#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Albion Avenue, Clapham Wandsworth Road, SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131713055#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "St Julians Farm Road, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131910275#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Brixton Station Road",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125400692#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Barcombe Avenue, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131536811#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Shakespeare Road, Herne Hill",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123828467#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Norfolk House Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124553858#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Broxholm Road, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133264568#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Oaklands Estate, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132766613#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Netherby House, Union Road, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/85951797#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Thurlestone Road, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133196522#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Gibbs Close, London, SE19",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133054919#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Blairderry Road, Streatham Hill",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132382802#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Derry Court, 386 Streatham High Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133024154#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Lewin Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132982751#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Craster Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132912569#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Babington Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130671140#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Gaskell Street, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132180839#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Norwood High Street, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129933392#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Morrish Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130009952#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Hainthorpe Road, West Norwood ",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132680390#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Hartington Road, Nine Elms, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131787422#/?channel=RES_BUY",
   "rent_bed_mo": 1312
 },
 {
   "Address": "Hartington Road, Vauxhall",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131898416#/?channel=RES_BUY",
   "rent_bed_mo": 1312
 },
 {
   "Address": "Gracefield Gardens, Streatham Hill, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132940313#/?channel=RES_BUY",
   "rent_bed_mo": 1312
 },
 {
   "Address": "Knights Hill, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130430720#/?channel=RES_BUY",
   "rent_bed_mo": 865
 },
 {
   "Address": "Bramah Road, Oval, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130453316#/?channel=RES_BUY",
   "rent_bed_mo": 1283
 },
 {
   "Address": "Martell Road, West Dulwich",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131019800#/?channel=RES_BUY",
   "rent_bed_mo": 1283
 },
 {
   "Address": "Flat 3, 15 Bramah Road, London, SW9 6FP",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86102376#/?channel=RES_BUY",
   "rent_bed_mo": 1283
 },
 {
   "Address": "William Bonney Estate, Clapham, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132555824#/?channel=RES_BUY",
   "rent_bed_mo": 1283
 },
 {
   "Address": "Knights Hill, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133037993#/?channel=RES_BUY",
   "rent_bed_mo": 1283
 },
 {
   "Address": "Highland Road, Upper Norwood, London, SE19",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132210458#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Deronda Road, Herne Hill, London, SE24",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132878021#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Streatham High Road, Streatham, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130199180#/?channel=RES_BUY",
   "rent_bed_mo": 846
 },
 {
   "Address": "Streatham High Road, Streatham, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128830076#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Bascombe Street, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132968720#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Rosendale Road, Dulwich, London, SE21",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131761559#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Telford Avenue, Balham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128718143#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Gracefield Gardens, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85940142#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "South Island Place, Oval, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86090484#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Gracefield Gardens, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128233802#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Aytoun Road, Stockwell, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/130208807#/?channel=RES_BUY",
   "rent_bed_mo": 627
 },
 {
   "Address": "Glenister Park Road, LONDON",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132692819#/?channel=RES_BUY",
   "rent_bed_mo": 836
 },
 {
   "Address": "Bristowe Close, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131957456#/?channel=RES_BUY",
   "rent_bed_mo": 1254
 },
 {
   "Address": "Streatham High Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132000221#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Highland Road, Upper Norwood, London, SE19",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130805150#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Clapham Road, Stockwell, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/91840841#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "25 Belgravia House, 30 Clarence Avenue, London, SW4 8HY",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86102454#/?channel=RES_BUY",
   "rent_bed_mo": 1079
 },
 {
   "Address": "Melbourne Grove, East Dulwich, SE22",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131143976#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Coldharbour Lane, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132757520#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Fairmount Road, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131979383#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Streatham High Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130866044#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Crown Lane Gardens, Streatham, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126339362#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Tierney Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131932286#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Auckland Hill, West Norwood, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131860874#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Tamar House, Kennington Lane, London, SE11",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86118873#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Leigham Court Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127208198#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Oakdale Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131334572#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Brixton Hill, Brixton Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132763790#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Loughborough Street, Kennington",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131089664#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Clayton Street, London, SE11",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/121012802#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Lewin Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125364128#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Park Hall Road, West Dulwich",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131043116#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Knatchbull Road Camberwell SE5",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133015181#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Union Grove, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129278948#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Weir Road, Balham, London, SW12",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131748467#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Sunnyhill Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133019657#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Stockwell Road, London",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/124261838#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Leigham Avenue, London, SW16 2DS",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130417346#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Streatham High Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132892790#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Auckland Hill, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128153942#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Staplefield Close, Streatham Hill, Streatham Hill, SW2",
   "Location": "Lambeth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/132398813#/?channel=RES_BUY",
   "rent_bed_mo": 620
 },
 {
   "Address": "Olding House, Weir Road, London, SW12",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127460810#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Poynders Road, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131905388#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Mount Nod Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126151370#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Gosling Way, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86077680#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Durban Road, West Norwood, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131401346#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Clarewood Walk, Stockwell",
   "Location": "Lambeth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/132300374#/?channel=RES_BUY",
   "rent_bed_mo": 620
 },
 {
   "Address": "Coldharbour Lane London SE5",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130821629#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Kingswood Road, Brixton",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127053368#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Oakdale Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/96638218#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Buckleigh Road, Streatham, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132429464#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Riggindale Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129653234#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Fairmile Avenue, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127923323#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Streatham High Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133128641#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Stansfield Road, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132912560#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Streatham High Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130511492#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Derry Court, Streatham High Street, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/98698100#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Darlington Road, West Norwood , London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133068677#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Dunbar Street, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133051898#/?channel=RES_BUY",
   "rent_bed_mo": 817
 },
 {
   "Address": "Heyford Avenue, London SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131482259#/?channel=RES_BUY",
   "rent_bed_mo": 1225
 },
 {
   "Address": "Dunbar Street, Lambeth, London, SE27 9JY",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/86103309#/?channel=RES_BUY",
   "rent_bed_mo": 817
 },
 {
   "Address": "Hinton Road, London, SE24",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128899442#/?channel=RES_BUY",
   "rent_bed_mo": 1210
 },
 {
   "Address": "Styles Gardens, London",
   "Location": "Lambeth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/132416330#/?channel=RES_BUY",
   "rent_bed_mo": 605
 },
 {
   "Address": "Edgington Road, Streatham Common",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130552124#/?channel=RES_BUY",
   "rent_bed_mo": 1210
 },
 {
   "Address": "216 Kennington Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132889484#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Harry Day Mews, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132307757#/?channel=RES_BUY",
   "rent_bed_mo": 1210
 },
 {
   "Address": "Hinton Road, Herne Hill",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128864015#/?channel=RES_BUY",
   "rent_bed_mo": 1210
 },
 {
   "Address": "Leigham Avenue, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132108209#/?channel=RES_BUY",
   "rent_bed_mo": 1196
 },
 {
   "Address": "Studley Road, Stockwell, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126545678#/?channel=RES_BUY",
   "rent_bed_mo": 1196
 },
 {
   "Address": "Temple Court, Thorncroft Street, London, SW8 2BD",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132515360#/?channel=RES_BUY",
   "rent_bed_mo": 1194
 },
 {
   "Address": "Streatham Close, Leigham Court Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132254561#/?channel=RES_BUY",
   "rent_bed_mo": 1181
 },
 {
   "Address": "Jasper Road, London, SE19",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133193927#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Streatham Common North, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132860891#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Thornlaw Road, West Norwood, London SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/79995786#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Leigham Court Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132426977#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Streatham Vale, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131185925#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Albion Avenue, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132870428#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Norwood Road, Herne Hill SE24",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/122365922#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Gleneldon Road, Streatham, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125467286#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Conyers Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127578911#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Albion Avenue, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129274766#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Conyers Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133259969#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Thurlestone Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130652807#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Thorne Road, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133142159#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Tankerville Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127057658#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Wellfield Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132866078#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Auckland Hill, West Norwood, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129842540#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Lancaster Avenue, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130185611#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Stockwell Mews, Stockwell",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127212836#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Stanley House, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131003144#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Brixton Hill, Brixton ",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130586381#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Riggindale Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132954314#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Union Grove, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128344331#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Albion Avenue, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132448058#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Forster Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132686921#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Woodfield Avenue, Streatham, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133204952#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Stockwell Road, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130578047#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Paxton Place, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128965811#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Thurlestone Road, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133196522#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Pathfield Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130411544#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Grantham Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133022213#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Dorrien Walk, Streatham Hill, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129813263#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Salisbury Place, London SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132878438#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Union Grove, Clapham, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132549878#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Voltaire Road, LONDON, SW4",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125660333#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Deronda Road, Herne Hill, London, SE24",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132760268#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Hopton House, 243A Streatham High Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132913934#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Durban Road, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131705936#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Deeley Road, Nine Elms, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131363141#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Black Prince Road SE11",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85863420#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "St. Matthew's Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131091281#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Bloom Grove, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132558596#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Ulverstone Road, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131940404#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Leigham Court Road , Streatham ",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/120387578#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Gipsy Hill, Upper Norwood, London, SE19",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132056369#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Solon New Road Estate, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129146138#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Kennington Park Road, Kennington",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127988213#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Barrow Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86035941#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Tulse Hill, Brixton",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131576687#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Rashleigh Court, Peardon Street, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86117937#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Gleneldon Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132886661#/?channel=RES_BUY",
   "rent_bed_mo": 772
 },
 {
   "Address": "Streatham High Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132467243#/?channel=RES_BUY",
   "rent_bed_mo": 1152
 },
 {
   "Address": "Wedgwood House, Lambeth Walk, London, SE11",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133316735#/?channel=RES_BUY",
   "rent_bed_mo": 1152
 },
 {
   "Address": "Farnan Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128576033#/?channel=RES_BUY",
   "rent_bed_mo": 1152
 },
 {
   "Address": "Wandsworth Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131639426#/?channel=RES_BUY",
   "rent_bed_mo": 1138
 },
 {
   "Address": "Studley Road, Stockwell",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132939917#/?channel=RES_BUY",
   "rent_bed_mo": 1138
 },
 {
   "Address": "Tulse Hill, Brixton, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/86017014#/?channel=RES_BUY",
   "rent_bed_mo": 758
 },
 {
   "Address": "Woodbourne Avenue, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127181645#/?channel=RES_BUY",
   "rent_bed_mo": 1138
 },
 {
   "Address": "31 Mobey Court, Studley Road, Stockwell, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129730553#/?channel=RES_BUY",
   "rent_bed_mo": 758
 },
 {
   "Address": "Willow Court, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132740684#/?channel=RES_BUY",
   "rent_bed_mo": 749
 },
 {
   "Address": "Palace Road, Tulse Hill, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128525084#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Saxby Road, Brixton, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/96339539#/?channel=RES_BUY",
   "rent_bed_mo": 749
 },
 {
   "Address": "Mount Ephraim Road, Streatham Hill, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126420527#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Conyers Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132042740#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Leaf Grove, Streatham, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129194843#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Leithcote Path, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132743765#/?channel=RES_BUY",
   "rent_bed_mo": 749
 },
 {
   "Address": "Tilson Gardens, Brixton",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131288126#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Cowley Road, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133051652#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Bowling Green Street, London, SE11",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130637201#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Broxholm Road, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131471090#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Gipsy Hill,  London, SE19",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129178520#/?channel=RES_BUY",
   "rent_bed_mo": 1123
 },
 {
   "Address": "Purser House, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127362482#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Palace Road, Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131918039#/?channel=RES_BUY",
   "rent_bed_mo": 1108
 },
 {
   "Address": "Streatham Hill, Streatham Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129303104#/?channel=RES_BUY",
   "rent_bed_mo": 1108
 },
 {
   "Address": "Union Grove, Battersea, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129183578#/?channel=RES_BUY",
   "rent_bed_mo": 1108
 },
 {
   "Address": "Ambleside Avenue, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123586637#/?channel=RES_BUY",
   "rent_bed_mo": 1108
 },
 {
   "Address": "Babington Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123950600#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Edgington Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132352415#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Lewin Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127208210#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Cowley Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128021540#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Shrubbery Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131438681#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Auckland Hill, West Norwood, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132363122#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Bournevale Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86079333#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Tilson Gardens, Brixton",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132054728#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Bournevale Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132359081#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Stretleigh Court, Streatham Hill",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130652348#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Fieldend Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132692825#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Tankerville Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131330006#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Martell Road, Dulwich",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132443534#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Loughborough Estate London SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131135501#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Scrutton Close, Balham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130612031#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125561780#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Christchurch Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132467966#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Kempshott Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130612277#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Rupert Gardens, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/132406511#/?channel=RES_BUY",
   "rent_bed_mo": 547
 },
 {
   "Address": "Thurlestone Road, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133196522#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Harcourt House, Albion Avenue, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130249961#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Picture House, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86098695#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Thurlow Park Road Dulwich SE21",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132931115#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Lansdell House, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128989193#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Holmewood Gardens, Brixton, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131228447#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Redlands Way, Brixton",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131531210#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Martell Road Dulwich SE21",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132931187#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Freeman House, New Park Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126283781#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Gipsy Road, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132691379#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Anfield Close, Balham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127695623#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Woodbourne Avenue, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132535514#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Leigham Avenue, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/96612706#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Christchurch Road, Tulse Hill",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132542867#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Mountearl Gardens, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131097326#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Edgington Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132352415#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Poynders Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/120796451#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Thurlow Park Road, London, SE21",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132406967#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Hayter Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/120489653#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Hopton Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133058450#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "1 Littlebury Road, Clapham, London, SW4 6DW",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133268603#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Knollys Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132302879#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Southwell Road, London, SE5",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/84067665#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Tulse Hill, Brixton, London, Lambeth, SW2 2HJ",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133068509#/?channel=RES_BUY",
   "rent_bed_mo": 719
 },
 {
   "Address": "Adare Walk, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132316805#/?channel=RES_BUY",
   "rent_bed_mo": 719
 },
 {
   "Address": "Gosling Way London SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85653447#/?channel=RES_BUY",
   "rent_bed_mo": 1079
 },
 {
   "Address": "Adare Walk, Streatham Hill",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132586964#/?channel=RES_BUY",
   "rent_bed_mo": 719
 },
 {
   "Address": "Wykeham Mansions, Rosendale Road, West Dulwich, SE21",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131647289#/?channel=RES_BUY",
   "rent_bed_mo": 1079
 },
 {
   "Address": "Pathfield Road, Streatham, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132489350#/?channel=RES_BUY",
   "rent_bed_mo": 1070
 },
 {
   "Address": "Pullman Court, Streatham Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129910334#/?channel=RES_BUY",
   "rent_bed_mo": 1067
 },
 {
   "Address": "New Park Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130490822#/?channel=RES_BUY",
   "rent_bed_mo": 1065
 },
 {
   "Address": "Elmore House, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125665958#/?channel=RES_BUY",
   "rent_bed_mo": 999
 },
 {
   "Address": "Leigham Court Road, Streatham, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127177475#/?channel=RES_BUY",
   "rent_bed_mo": 1065
 },
 {
   "Address": "Tankerville Road, London",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133048880#/?channel=RES_BUY",
   "rent_bed_mo": 710
 },
 {
   "Address": "Palace Road, Streatham Hill",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131340830#/?channel=RES_BUY",
   "rent_bed_mo": 1050
 },
 {
   "Address": "Thurlow Park Road Dulwich SE21",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132931001#/?channel=RES_BUY",
   "rent_bed_mo": 1050
 },
 {
   "Address": "Thurlow Park Road, London, SE21",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132408518#/?channel=RES_BUY",
   "rent_bed_mo": 1050
 },
 {
   "Address": "Streatham Hill, Streatham Hill",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130202147#/?channel=RES_BUY",
   "rent_bed_mo": 1050
 },
 {
   "Address": "Stockwell Gardens Estate, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131376257#/?channel=RES_BUY",
   "rent_bed_mo": 1050
 },
 {
   "Address": "Knights Hill, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130200644#/?channel=RES_BUY",
   "rent_bed_mo": 1035
 },
 {
   "Address": "Elder Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131656949#/?channel=RES_BUY",
   "rent_bed_mo": 1035
 },
 {
   "Address": "Woodland Road, Upper Norwood, London, SE19",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128712212#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Elderwood Place, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131783429#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "New Park Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130490822#/?channel=RES_BUY",
   "rent_bed_mo": 1065
 },
 {
   "Address": "Wandsworth Road, Springfield Estate SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128653529#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Gleneagle Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130326104#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Cedar Tree Grove, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132600629#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Thurlow Park Road, London SE21",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133027172#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "York Hill, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130173890#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Arborfield Close, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131968967#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Greyhound Lane, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126190691#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Streatham Close, Leigham Court Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/117093350#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Beechcroft Close Valley Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131957222#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Oaklands Estate, SW4",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130175012#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Coldharbour Lane, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131839013#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Poullett House, Tulse Hill ",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132333392#/?channel=RES_BUY",
   "rent_bed_mo": 681
 },
 {
   "Address": "Upper Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126871502#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Tulse Hill, London",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127306004#/?channel=RES_BUY",
   "rent_bed_mo": 681
 },
 {
   "Address": "Streatham High Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131591366#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Crown Lane, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132158684#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Deepdene Gardens, Brixton, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129463760#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Campbell Close, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132379655#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Green Lane, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132325565#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Kennington Lane, Kennington SE11",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133001222#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Downton Avenue, Streatham Hill",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131833241#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Lothian Road, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/123971330#/?channel=RES_BUY",
   "rent_bed_mo": 681
 },
 {
   "Address": "Palace Road, Lambeth, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130417676#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Maskall Close High Trees ",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133315403#/?channel=RES_BUY",
   "rent_bed_mo": 681
 },
 {
   "Address": "Poynders Road, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131316149#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "10 Grasmere Road, Streatham, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/132473456#/?channel=RES_BUY",
   "rent_bed_mo": 510
 },
 {
   "Address": "Lewin Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127447118#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Tulse Hill, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128420450#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Mount Ephraim Lane, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131330390#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "1j Gleneldon Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85883229#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Leigham Court Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133017248#/?channel=RES_BUY",
   "rent_bed_mo": 681
 },
 {
   "Address": "Hilldown Court Streatham High Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85883247#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "New Park Road, Brixton Hill",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132780743#/?channel=RES_BUY",
   "rent_bed_mo": 1006
 },
 {
   "Address": "New Park Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132360053#/?channel=RES_BUY",
   "rent_bed_mo": 1006
 },
 {
   "Address": "Elmore House, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125665958#/?channel=RES_BUY",
   "rent_bed_mo": 999
 },
 {
   "Address": "Tierney Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132589433#/?channel=RES_BUY",
   "rent_bed_mo": 992
 },
 {
   "Address": "Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129001211#/?channel=RES_BUY",
   "rent_bed_mo": 661
 },
 {
   "Address": "James House, Vauxhall, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129735242#/?channel=RES_BUY",
   "rent_bed_mo": 1983
 },
 {
   "Address": "Victoria Crescent, Crystal Palace, SE19",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86087298#/?channel=RES_BUY",
   "rent_bed_mo": 1983
 },
 {
   "Address": "Thurlestone Road, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133196522#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Tulse Hill, Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129197159#/?channel=RES_BUY",
   "rent_bed_mo": 661
 },
 {
   "Address": "Leigham Court Road, Benhurst Court Leigham Court Road, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132587231#/?channel=RES_BUY",
   "rent_bed_mo": 992
 },
 {
   "Address": "Streatham High Road, Streatham, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131675060#/?channel=RES_BUY",
   "rent_bed_mo": 992
 },
 {
   "Address": "Vauxhall Street, Kennington",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131648006#/?channel=RES_BUY",
   "rent_bed_mo": 1972
 },
 {
   "Address": "Thorne Road, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133142159#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Fawcett Close, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129382562#/?channel=RES_BUY",
   "rent_bed_mo": 977
 },
 {
   "Address": "Elder Road, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/122867186#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Streatham Hill, Streatham Hill",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132037355#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Woodgate Drive, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131684612#/?channel=RES_BUY",
   "rent_bed_mo": 977
 },
 {
   "Address": "Park Plaza, County Hall, SE1",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/94205963#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Drewstead Road, Streatham Hill, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132614663#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Flat , Derry Court,  Streatham High Road, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132860060#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Streatham Place, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/125878646#/?channel=RES_BUY",
   "rent_bed_mo": 1925
 },
 {
   "Address": "Union Grove, Clapham, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132626489#/?channel=RES_BUY",
   "rent_bed_mo": 963
 },
 {
   "Address": "33 Farnley House, Union Grove, London, SW8 2RT",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86102217#/?channel=RES_BUY",
   "rent_bed_mo": 963
 },
 {
   "Address": "Tulse Hill, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123989726#/?channel=RES_BUY",
   "rent_bed_mo": 963
 },
 {
   "Address": "Strathleven Road, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131654672#/?channel=RES_BUY",
   "rent_bed_mo": 1925
 },
 {
   "Address": "Pagoda Grove, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/122693972#/?channel=RES_BUY",
   "rent_bed_mo": 1925
 },
 {
   "Address": "Montrell Road, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132898148#/?channel=RES_BUY",
   "rent_bed_mo": 1925
 },
 {
   "Address": "Streatham Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131665133#/?channel=RES_BUY",
   "rent_bed_mo": 962
 },
 {
   "Address": "Gleneagle Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123488912#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Effra Parade, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130239536#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Streatham High Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132317144#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Woodgate Drive, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86095548#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Knights Hill, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127667138#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Gipsy Road, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132691451#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Ash Court, Streatham Common",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132980096#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Knollys Road, Tulse Hill ",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126058325#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Palace Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/126426923#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Beechcroft Close, Valley Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132890192#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Alder Court, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132867149#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Charman House, Hemans Street, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86070498#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Oakdale Road, Streatham, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133185779#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Elderwood Place, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132938522#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "St Kitts Terrace, Upper Norwood, London, SE19",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132669152#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Langton Road, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130044956#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Baldry Gardens, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133013186#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Elderwood Place, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/126072185#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Leigham Court Road London SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127577840#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Leda Court, London, Lambeth, SW9",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127703006#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Yeoman Close, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132173816#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Maple Mews, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129718310#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Leigham Court Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132536636#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Woodfield Grove, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127983377#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Streatham Hill, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133135097#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Foxley Road, Oval",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86020134#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Thorne Road, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133142159#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Effra Parade, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132666200#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Gleneagle Road, Streatham, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132918569#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Palace Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131681717#/?channel=RES_BUY",
   "rent_bed_mo": 632
 },
 {
   "Address": "Elderwood Place, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132910109#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Thurlow Park Road, West Dulwich, London, SE21",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131778968#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Milford Mews, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132545117#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Loveday House, Tulse Hill",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130745420#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Branksome Road , Brixton, London, England, SW2 5JA",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133150538#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Pinfold Road, Streatham Hill",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132631625#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Milford Mews, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86087397#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Ferndale Road, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130239419#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Streatham High Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131291240#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Fairmile Avenue, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127923329#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Thornton Avenue, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131155364#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Lansdowne Way, Stockwell, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127915298#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Leithcote Path, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130351898#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Thornlaw Road, West Norwood, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131245292#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Branksome Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/126069962#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Upper Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132912533#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Streatham Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132785606#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Rodenhurst Road, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127331993#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Coldharbour Lane, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/118876976#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Holmewood Gardens, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131777195#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "St Martin's Road, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129908561#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Leigham Court Road, Streatham Hill, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132084194#/?channel=RES_BUY",
   "rent_bed_mo": 622
 },
 {
   "Address": "Gipsy Road, West Norwood, SE27",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132193535#/?channel=RES_BUY",
   "rent_bed_mo": 1867
 },
 {
   "Address": "Union Road, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131865023#/?channel=RES_BUY",
   "rent_bed_mo": 1867
 },
 {
   "Address": "Ferrey Mews, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130239380#/?channel=RES_BUY",
   "rent_bed_mo": 1867
 },
 {
   "Address": "GUILDFORD ROAD, Stockwell, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132614669#/?channel=RES_BUY",
   "rent_bed_mo": 933
 },
 {
   "Address": "Ferndale Road, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131188460#/?channel=RES_BUY",
   "rent_bed_mo": 1867
 },
 {
   "Address": "1 Union Road, London, SW4 6JH",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131895320#/?channel=RES_BUY",
   "rent_bed_mo": 1867
 },
 {
   "Address": "Upper Tulse Hill, Brixton",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/126688856#/?channel=RES_BUY",
   "rent_bed_mo": 1867
 },
 {
   "Address": "Clive Road, Dulwich, London, SE21",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131150780#/?channel=RES_BUY",
   "rent_bed_mo": 919
 },
 {
   "Address": "Baldwin House, St Martins Estate, Tulse Hill, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/121846025#/?channel=RES_BUY",
   "rent_bed_mo": 919
 },
 {
   "Address": "Woodland Road, Crystal Palace, London, SE19",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132366041#/?channel=RES_BUY",
   "rent_bed_mo": 1838
 },
 {
   "Address": "Lakeview Road, West Norwood, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126828284#/?channel=RES_BUY",
   "rent_bed_mo": 919
 },
 {
   "Address": "Streatham Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132992987#/?channel=RES_BUY",
   "rent_bed_mo": 919
 },
 {
   "Address": "York Hill, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/120170549#/?channel=RES_BUY",
   "rent_bed_mo": 603
 },
 {
   "Address": "Elmore House, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131926250#/?channel=RES_BUY",
   "rent_bed_mo": 904
 },
 {
   "Address": "Coldharbour Lane, Brixton, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131914460#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Broxholm Road, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132414899#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Effra Parade, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/124250909#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Wavertree Court, Streatham Hill, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131434658#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "21 Connaught Mansions, Coldharbour Lane, London, SW9 8LE",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86102298#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Oaklands Estate, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132993473#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Nelsons Row, SW4",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133301135#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Guildford Road, Stockwell, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129011327#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Streatham Hill, Streatham Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85964454#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Buckleigh Road, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131507042#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Worsopp Drive, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130875392#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "194 Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130114406#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "The Westbury, 418 Wandsworth Road, Clapham, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130764971#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Jeffreys Road London SW4",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/111198185#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Benton's Lane London SE27",
   "Location": "Lambeth",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130902938#/?channel=RES_BUY",
   "rent_bed_mo": 583
 },
 {
   "Address": "Heybridge Avenue, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131735015#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Tulse Hill, Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131661371#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Ground and First Floor, 6 Killyon Terrace, London, SW8 2XR",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86102391#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Bushell Close, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129401300#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Heather Close, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132788264#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Alexandra Drive, Crystal Palace",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127630046#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Dumbarton Court, Brixton Hill, Brixton, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132864575#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Drewstead Road, Streatham Hill, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131961974#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Martell Road, West Dulwich",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131905379#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Killyon Terrace, Clapham Old Town, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128000840#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Mountearl Gardens, Streatham Hill, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133217240#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Delphian Court, Leigham Court Road, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132395894#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Broxholm Road, London, SE27 0BJ",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132503651#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Stockwell Road, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86642383#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Poynders Gardens, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129803987#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Lansdowne Way, London, SW8",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129225278#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132817805#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Streatham High Road, Streatham Hill, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131358644#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Ebury Mews, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132672239#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Shrubbery Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129751514#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Gipsy Road, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131030828#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Wandsworth Road, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/110856389#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Oaklands Estate, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128354564#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Pinfold Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132926075#/?channel=RES_BUY",
   "rent_bed_mo": 860
 },
 {
   "Address": "Maple Mews, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132319964#/?channel=RES_BUY",
   "rent_bed_mo": 1721
 },
 {
   "Address": "Maple Mews, Steatham, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128821877#/?channel=RES_BUY",
   "rent_bed_mo": 1721
 },
 {
   "Address": "Buckleigh Road, Streatham Common ",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129529400#/?channel=RES_BUY",
   "rent_bed_mo": 1721
 },
 {
   "Address": "Tierney Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131665130#/?channel=RES_BUY",
   "rent_bed_mo": 1721
 },
 {
   "Address": "Knights Hill, West Norwood, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130413410#/?channel=RES_BUY",
   "rent_bed_mo": 860
 },
 {
   "Address": "Leigham Avenue, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129643979#/?channel=RES_BUY",
   "rent_bed_mo": 860
 },
 {
   "Address": "33 Canterbury Grove, West Norwood, Gypsy Hill, SE27",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/96576748#/?channel=RES_BUY",
   "rent_bed_mo": 1715
 },
 {
   "Address": "Thurlow Park Road, Tulse Hill, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127558601#/?channel=RES_BUY",
   "rent_bed_mo": 1703
 },
 {
   "Address": "Beaumont Court, Streatham Place, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131223782#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "The High Streatham High Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132050282#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Brixton Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/85617693#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Merton Lodge, Farnan Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/125750924#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Greyhound Lane, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133246256#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Auckland Road, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131477672#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Canterbury Crescent, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123149063#/?channel=RES_BUY",
   "rent_bed_mo": 846
 },
 {
   "Address": "Benton's Lane, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131119133#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Abbots Park, Tulse Hill",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/126312257#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Peabody Buildings, Rosendale Road, Herne Hill",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/126682382#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Ambleside Avenue, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130111241#/?channel=RES_BUY",
   "rent_bed_mo": 1663
 },
 {
   "Address": "Streatham High Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132479993#/?channel=RES_BUY",
   "rent_bed_mo": 1663
 },
 {
   "Address": "Palace Road, Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130173938#/?channel=RES_BUY",
   "rent_bed_mo": 1663
 },
 {
   "Address": "Barrington Road, Brixton",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132749678#/?channel=RES_BUY",
   "rent_bed_mo": 831
 },
 {
   "Address": "St. Julians Farm Road, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132664601#/?channel=RES_BUY",
   "rent_bed_mo": 1663
 },
 {
   "Address": "Bournevale Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128098157#/?channel=RES_BUY",
   "rent_bed_mo": 831
 },
 {
   "Address": "Upper Tulse Hill, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131061287#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Tulse Hill, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132923135#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Purser House, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127362482#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Bartell House, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127359629#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Upper Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128574695#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Kingscourt Road, Streatham Hill, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/79078029#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Streatham High Road, Norbury, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/115475072#/?channel=RES_BUY",
   "rent_bed_mo": 817
 },
 {
   "Address": "31a Truslove Road, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132474245#/?channel=RES_BUY",
   "rent_bed_mo": 817
 },
 {
   "Address": "Top Floor Flat, 1 Tulse Hill, Brixton, London, SW2 2TH",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133134416#/?channel=RES_BUY",
   "rent_bed_mo": 809
 },
 {
   "Address": "Wandsworth Road, London",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133129238#/?channel=RES_BUY",
   "rent_bed_mo": 802
 },
 {
   "Address": "Thornlaw Road, London, Greater London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131589008#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Greyhound Lane, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128737145#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Leigham Court Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130696082#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Gipsy Road, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131655713#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Milford Mews, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132978194#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Killyon Terrace, Battersea/Clapham, SW8",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/77155131#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Madeira Road, Streatham, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132632804#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Leigham Vale, Streatham Hill",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131537735#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Kings Avenue, London, SW12",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/124159919#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Holmewood Gardens, Brixton, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132520724#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "8 Weymouth Court, Upper Tulse Hill, Brixton Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132473927#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Caldwell Street, Brixton, SW9",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133189172#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Alder Court, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131256917#/?channel=RES_BUY",
   "rent_bed_mo": 1590
 },
 {
   "Address": "Mount Ephraim Road London SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86068185#/?channel=RES_BUY",
   "rent_bed_mo": 1575
 },
 {
   "Address": "Greyhound Lane, Streatham, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/85897275#/?channel=RES_BUY",
   "rent_bed_mo": 1575
 },
 {
   "Address": "Ferrey Mews, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/123719471#/?channel=RES_BUY",
   "rent_bed_mo": 1575
 },
 {
   "Address": "Crown Lane, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86072811#/?channel=RES_BUY",
   "rent_bed_mo": 788
 },
 {
   "Address": "Ferrey Mews, Brixton, London, Greater London, SW9 7QL",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131903828#/?channel=RES_BUY",
   "rent_bed_mo": 1575
 },
 {
   "Address": "Mount Ephraim Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131689853#/?channel=RES_BUY",
   "rent_bed_mo": 1575
 },
 {
   "Address": "19B MITCHAM LANE, STREATHAM, LONDON",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132688067#/?channel=RES_BUY",
   "rent_bed_mo": 788
 },
 {
   "Address": "Bromells Road, Clapham",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86119569#/?channel=RES_BUY",
   "rent_bed_mo": 1575
 },
 {
   "Address": "Norwood Road, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130993817#/?channel=RES_BUY",
   "rent_bed_mo": 1575
 },
 {
   "Address": "Jebb Avenue, Brixton, London",
   "Location": "Lambeth",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/86117964#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Streatham High Road,, Streatham, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130343150#/?channel=RES_BUY",
   "rent_bed_mo": 1546
 },
 {
   "Address": "Leigham Court Road, Streatham, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131136833#/?channel=RES_BUY",
   "rent_bed_mo": 1546
 },
 {
   "Address": "Leigham Court Road, Streatham Hill, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130612379#/?channel=RES_BUY",
   "rent_bed_mo": 1546
 },
 {
   "Address": "Streatham High Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132366614#/?channel=RES_BUY",
   "rent_bed_mo": 1546
 },
 {
   "Address": "Gleneldon Road, Streatham, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129867713#/?channel=RES_BUY",
   "rent_bed_mo": 1517
 },
 {
   "Address": "Coldharbour Lane, Camberwell, SE5",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131427368#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "75c Leigham Vale, London, SW16 2JG",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86102205#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Brixton Water Lane, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128395373#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Flat 21, Nightingale House, 29 Hillyard Street, Stockwell, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132284270#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Montrell Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132532169#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Leigham Court Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129221522#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Holdsworth House, Brixton, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/124795451#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Ladas Road, West Norwood",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131366399#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Leigham Court Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/124907579#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Leigham Vale, Streatham, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132940316#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Wolfington Road, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/123969491#/?channel=RES_BUY",
   "rent_bed_mo": 1429
 },
 {
   "Address": "Rainsford House, Brixton Water Lane, London, SW2 1SH",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131547731#/?channel=RES_BUY",
   "rent_bed_mo": 715
 },
 {
   "Address": "Meadow Road, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132443891#/?channel=RES_BUY",
   "rent_bed_mo": 1400
 },
 {
   "Address": "Tulse Hill, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127747970#/?channel=RES_BUY",
   "rent_bed_mo": 1400
 },
 {
   "Address": "Streatham High Road, Streatham",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131346749#/?channel=RES_BUY",
   "rent_bed_mo": 1371
 },
 {
   "Address": "Peabody HIll, Tulse Hill, London, SE21",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129716243#/?channel=RES_BUY",
   "rent_bed_mo": 1371
 },
 {
   "Address": "Streatham High Road,  London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125923619#/?channel=RES_BUY",
   "rent_bed_mo": 668
 },
 {
   "Address": "Madeira Road, London, SW16",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133122410#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Brancaster Road, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133048907#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Brixton Hill, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131135138#/?channel=RES_BUY",
   "rent_bed_mo": 1283
 },
 {
   "Address": "Loughborough Road, London, SW9",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130064507#/?channel=RES_BUY",
   "rent_bed_mo": 1225
 },
 {
   "Address": "Elder Road, West Norwood, London, SE27",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133028759#/?channel=RES_BUY",
   "rent_bed_mo": 1225
 },
 {
   "Address": "Morrish Road, London, SW2",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131841458#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Flat 1A, 55 Palace Road, Tulse Hill, London, SW2 3LB",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132467735#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Blenheim Gardens, London",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130980368#/?channel=RES_BUY",
   "rent_bed_mo": 1108
 },
 {
   "Address": "Belgravia House, Clapham Park, London, SW4",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130173305#/?channel=RES_BUY",
   "rent_bed_mo": 1079
 },
 {
   "Address": "25 Belgravia House, 30 Clarence Avenue, London, SW4 8HY",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/86102454#/?channel=RES_BUY",
   "rent_bed_mo": 1079
 },
 {
   "Address": "Flat 55 Hartington Court, Lansdowne Way, Stockwell, London, SW8 2ED",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132813395#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Cedar Close, Dulwich, SE21",
   "Location": "Lambeth",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133101512#/?channel=RES_BUY",
   "rent_bed_mo": 933
 },
 {
   "Address": "Garden Flat, 31 Thurlow Park Road, Lambeth, London, SE21 8JP",
   "Location": "Lambeth",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132985553#/?channel=RES_BUY",
   "rent_bed_mo": 438
 },
 {
   "Address": "Flat 2, 12 North Hill, London, N6 4QA",
   "Location": "Haringey",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86102373#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Crescent Road, Alexandra Park, N22",
   "Location": "Haringey",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133272713#/?channel=RES_BUY",
   "rent_bed_mo": 1089
 },
 {
   "Address": "Weston Park Crouch End N8",
   "Location": "Haringey",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133278113#/?channel=RES_BUY",
   "rent_bed_mo": 1969
 },
 {
   "Address": "New River Village, Hornsey, N8",
   "Location": "Haringey",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133295435#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Amazon Apartments, New River Avenue, Hornsey N8",
   "Location": "Haringey",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133206212#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Muswell Avenue, London, N10",
   "Location": "Haringey",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133272803#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Elms Avenue, London, N10",
   "Location": "Haringey",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133272818#/?channel=RES_BUY",
   "rent_bed_mo": 1264
 },
 {
   "Address": "Queens Avenue, London, N10",
   "Location": "Haringey",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133272563#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Risborough Court, Muswell Hill, London, N10",
   "Location": "Haringey",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133272632#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Flat , Chettle Court, Ridge Road, London",
   "Location": "Haringey",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/86091687#/?channel=RES_BUY",
   "rent_bed_mo": 583
 },
 {
   "Address": "Bedford Road, Crouch End",
   "Location": "Haringey",
   "Bedrooms": 5,
   "URL": "http://www.rightmove.co.uk/properties/128383070#/?channel=RES_BUY",
   "rent_bed_mo": 1867
 },
 {
   "Address": "Crescent Road, Crouch End, N8",
   "Location": "Haringey",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133248425#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Curzon Road, London, N10",
   "Location": "Haringey",
   "Bedrooms": 6,
   "URL": "http://www.rightmove.co.uk/properties/133272683#/?channel=RES_BUY",
   "rent_bed_mo": 1944
 },
 {
   "Address": "Nightingale Lane, Crouch End, N8",
   "Location": "Haringey",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133271762#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Crouch Hill, N4 4AJ ",
   "Location": "Haringey",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132141683#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Muswell Avenue, London, N10",
   "Location": "Haringey",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133272803#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Topsfield Parade, Crouch End, N8",
   "Location": "Haringey",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133277534#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Mount Pleasant Villas, London N4",
   "Location": "Haringey",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86108247#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Pedro Street, London, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/85902378#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Warwick Grove, Wrens Park House Warwick Grove, E5",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131536016#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Nightingale Road, London, E5",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/124777331#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Springfield, Hackney, London, E5",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/126822245#/?channel=RES_BUY",
   "rent_bed_mo": 1517
 },
 {
   "Address": "Rectory Road, Hackney, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128212472#/?channel=RES_BUY",
   "rent_bed_mo": 773
 },
 {
   "Address": "Homerton Road, London, E9",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130171067#/?channel=RES_BUY",
   "rent_bed_mo": 1575
 },
 {
   "Address": "Somerford Grove Estate, Stoke Newington, London, N16",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129476528#/?channel=RES_BUY",
   "rent_bed_mo": 1575
 },
 {
   "Address": "Sigdon Road, LONDON",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132603482#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Gilby House, Berger Road,",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132923186#/?channel=RES_BUY",
   "rent_bed_mo": 802
 },
 {
   "Address": "Ridley Road, Dalston, E8",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132832868#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Harry Zeital Way, London, E5",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/127937054#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Bradstock Road, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123066392#/?channel=RES_BUY",
   "rent_bed_mo": 802
 },
 {
   "Address": "Bakers Hill, Clapton, E5",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130327052#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Trelawney Estate, Hackney, London, E9",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129363533#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Paragon Road, London",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132971564#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Banister House, Homerton High Street, E9",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/125084543#/?channel=RES_BUY",
   "rent_bed_mo": 1663
 },
 {
   "Address": "Laburnum Street, Bethnal Green",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130683368#/?channel=RES_BUY",
   "rent_bed_mo": 831
 },
 {
   "Address": "Kingsmead House, Homerton Road, Hackney, London, E9",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128864462#/?channel=RES_BUY",
   "rent_bed_mo": 1663
 },
 {
   "Address": "Alpha Court, Hassett Road, Hackney, E9",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/133315517#/?channel=RES_BUY",
   "rent_bed_mo": 1692
 },
 {
   "Address": "Craven Park Road, Riverside, N15",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132633014#/?channel=RES_BUY",
   "rent_bed_mo": 1721
 },
 {
   "Address": "St. Lawrence Court, De Beauvoir Estate, London, N1",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/120379355#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Big Hill, Clapton",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/124158065#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Woodmill Road, E5, Clapton, London, E5",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/126709568#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Shacklewell Row, London, E8",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132753815#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Ridley Road, London, E8",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130587404#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Charnwood House, Charnwood Street, London",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129503039#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Alfearn Road, Lower Clapton",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/131315708#/?channel=RES_BUY",
   "rent_bed_mo": 1808
 },
 {
   "Address": "Kingsland Road, Dalston",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/129876176#/?channel=RES_BUY",
   "rent_bed_mo": 1838
 },
 {
   "Address": "Fellows Court, Weymouth Terrace, Hackney, E2",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132841406#/?channel=RES_BUY",
   "rent_bed_mo": 1867
 },
 {
   "Address": "Windus Road, Stoke Newington, London, N16",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132157103#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Caliban Towers, Arden Estate, Hoxton, London, N1",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130759271#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Chatsworth Road, London, E5",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130242461#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Highbury Quadrant, London, N5",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128977739#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Riverside Close, London, E5",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132244760#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Summit Estate, Portland Avenue, Stoke Newington, N16",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128262596#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Brooksby's Walk, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125479250#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Ridley Road, Dalston, E8",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/132833135#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Woodmill Road, Hackney, London, E5 9GB",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130794740#/?channel=RES_BUY",
   "rent_bed_mo": 948
 },
 {
   "Address": "Homerton Road, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85826631#/?channel=RES_BUY",
   "rent_bed_mo": 963
 },
 {
   "Address": "Egbert House, Homerton Road, London, Greater London, E9 5QF",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128622080#/?channel=RES_BUY",
   "rent_bed_mo": 963
 },
 {
   "Address": "Eastway, Hackney Wick",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/130564556#/?channel=RES_BUY",
   "rent_bed_mo": 1954
 },
 {
   "Address": "Pembury Road, Hackney Downs, London, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124772087#/?channel=RES_BUY",
   "rent_bed_mo": 992
 },
 {
   "Address": "Stoke Newington Church Street, Stoke Newington, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133209422#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Lewis Gardens, Hackney, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133170368#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Homerton High Street, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129519089#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Lewis Gardens, Hackney, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133170368#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Warwick Grove, Wigan House Warwick Grove, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131851982#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Lewis Gardens, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127497179#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Fountayne Road, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133088600#/?channel=RES_BUY",
   "rent_bed_mo": 690
 },
 {
   "Address": "St John's Estate, Islington, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/83594016#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Charnwood Street, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125724077#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Pembury Road, London, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86020452#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Stoke Newington High Street, Stoke Newington, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/120652214#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Daubeney Road, London, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/80942782#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Wilton Estate, Greenwood Road, Hackney, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130323863#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Paragon Road, Hackney",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85977072#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Valley House, Harrington Hill, Clapton, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128007014#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Tudor Grove, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130241198#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Lee Conservancy Road, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128249417#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Pembury Road, London, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132759182#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Homerton Road, London, E9",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129345095#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Brooke Road, London, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130644653#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "Wimbourne Street, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132538904#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Rectory Road, Rectory Road, London N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85511538#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Lewis Gardens, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130070084#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Springfield, London, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128626076#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Eastway, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132454496#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Walnut Court, Woodmill Road, Clapton, London, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131696906#/?channel=RES_BUY",
   "rent_bed_mo": 1108
 },
 {
   "Address": "Homerton Road, London, E9",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/126082493#/?channel=RES_BUY",
   "rent_bed_mo": 749
 },
 {
   "Address": "Salk House, Green Lanes, London, N4 2ET",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128360489#/?channel=RES_BUY",
   "rent_bed_mo": 1164
 },
 {
   "Address": "Petherton Road, Highbury, N5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86102562#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Whiston Road, Haggerston, London, E2",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131915651#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Frampton Park Road, Hackney, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132083318#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Wigan House, Warwick Grove, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/126815735#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Homerton High Street, Homerton",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131921651#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Ada Place, Hackney",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132597677#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Evelyn Walk, Hoxton, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124875599#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Balls Pond Road, Islington, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128751986#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Pedro Street, London, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/85902378#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Ravensdale Road, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132069011#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Quested Court, Brett Road, Hackney, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131614214#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Petherton Road, Islington, London, N5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131961041#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Woolridge Way, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131055005#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Crondell Court, St. John's Estate, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124495835#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Petherton Road, London, N5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129815786#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Ravensdale Road, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131299031#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Petherton Road, Highbury",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131899046#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Thurtle Road, London, E2",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123915713#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Malvern House, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133295192#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Hindle House, Arcola Street, Hackney, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133126163#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Lee Street, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127563308#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Ferry House, Harrington Hill, Clapton, London, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/119733680#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "De Beauvoir Estate, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130174901#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Anderson Road, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130269191#/?channel=RES_BUY",
   "rent_bed_mo": 778
 },
 {
   "Address": "Aldermans House, 1 Ward Lane, Hackney, London, E9 5QY",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130298618#/?channel=RES_BUY",
   "rent_bed_mo": 1196
 },
 {
   "Address": "Warwick Grove, London, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/118624844#/?channel=RES_BUY",
   "rent_bed_mo": 817
 },
 {
   "Address": "Samuel Lewis Trust Dwellings, Amhurst Road, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/84782313#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Regents Court, Hackney, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130324616#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "Somerford Grove Estate, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132561563#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Woodmill Road, Clapton, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133321208#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Allerton House, Provost Estate, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130751291#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Stellman Close, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133317194#/?channel=RES_BUY",
   "rent_bed_mo": 1069
 },
 {
   "Address": "Springdale Road, Stoke Newington, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126531494#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Chatham Place, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/111896021#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Banister House, Homerton High Street, E9",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133279667#/?channel=RES_BUY",
   "rent_bed_mo": 826
 },
 {
   "Address": "81 Eastway, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128855633#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Rushmore Road, London, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128442791#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Somerford Grove Estate, Stoke Newington, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131332298#/?channel=RES_BUY",
   "rent_bed_mo": 1254
 },
 {
   "Address": "Enfield Road, Islington, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131006183#/?channel=RES_BUY",
   "rent_bed_mo": 1269
 },
 {
   "Address": "Cottrill Gardens, Marcon Place, Hackney, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130898216#/?channel=RES_BUY",
   "rent_bed_mo": 1283
 },
 {
   "Address": "Well Street, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133080530#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Cressett Road, Hackney",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128810192#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Lower Clapton Road, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130615226#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Knebworth House, Londesborough Road, Stoke Newington, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131113151#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Whiston Road, E2",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132817595#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Cranbrook House, Pembury Road, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132220820#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Catherine House, Whitmore Estate, N1",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131239508#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Pitfield Street, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130355840#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "(Georgian Court) Park Close, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127318109#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Wyndhams Court, 32 Celandine Drive, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129806393#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Murray Grove, Hoxton, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131147873#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Albion Road, Stoke Newington",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132292550#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Holmbury View, Clapton, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130324361#/?channel=RES_BUY",
   "rent_bed_mo": 1118
 },
 {
   "Address": "Chadworth Green, London, N4 2PB",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129926102#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Woodmill Road, Clapton",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132974864#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Ridley Road, Dalston, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132832205#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Flat 11 Nature View Apartments, Woodberry Grove, Manor House, London, N4 2GN",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132922304#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Fellows Court, Weymouth Terrace, London, E2",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131854559#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Ward Lane, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130238948#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Sherard House, Frampton Park Road, Hackney, London, E9",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131476853#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Denman House, Lordship Terrace, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130012091#/?channel=RES_BUY",
   "rent_bed_mo": 1371
 },
 {
   "Address": "Wilton Estate, Greenwood Road, Hackney, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130323863#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Mount Pleasant Hill, Clapton",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133277288#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Harry Zeital Way, Hackney, London, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133208552#/?channel=RES_BUY",
   "rent_bed_mo": 1531
 },
 {
   "Address": "Cropley Street, Hoxton, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131899763#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Priory Court, Brooksby Walk, Loddiges Road, London, E9 6PP",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132759554#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Bethune Road, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131728040#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Amhurst Road, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130514417#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "GREEN LANES, LONDON, N4",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129401879#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Laindon House, Stamford Hill, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132294893#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Arcola Street, Dalston, London, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132614492#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Morning Lane, Hackney, London, E9",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/132989501#/?channel=RES_BUY",
   "rent_bed_mo": 693
 },
 {
   "Address": "Downs Road, Clapton, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130215383#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Crondall Court, St John's Estate, Islington, N1",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/124059875#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Rendlesham Road, Clapton",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131075405#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Homerton High Street, Hackney, E9",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127495241#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Kent Street, Shoreditch",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132990995#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Evering Road, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126359477#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Albion Road, Stoke Newington, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128223287#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Downs Road, Clapton, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130215611#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Downs Road, Clapton, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130215614#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Cavendish Street, Shoreditch",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132775676#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Brenthouse Road, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128925950#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Whiston Road, London, E2",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133167329#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "De Beauvoir Estate, De Beauvoir",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/126728273#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Tavistock Close, London, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127497164#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Arcola Street, London, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131487737#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "London Terrace, Hackney Road, Shoreditch, E2",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132841418#/?channel=RES_BUY",
   "rent_bed_mo": 1400
 },
 {
   "Address": "1A Windus Road, London, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/125427206#/?channel=RES_BUY",
   "rent_bed_mo": 943
 },
 {
   "Address": "20-22 Balls Pond Road, Islington, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131888822#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Balls Pond Road, Islington, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86108202#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Bramshaw Road, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132188213#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Tyssen Street, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131901518#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Enfield Road, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127342154#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Alexandra Grove, Finsbury Park",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132014873#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Balls Pond Road, Islington, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126180743#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Collent Street, Hackney",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132821627#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Victoria Chambers, Paul Street, London, EC2A",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132926453#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Pitfield Street, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132185891#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Weymouth Terrace, Hoxton",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/131256071#/?channel=RES_BUY",
   "rent_bed_mo": 729
 },
 {
   "Address": "St. John's Estate, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130825967#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Enfield Road, Islington, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/70094694#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Niagara Close, Islington, N1",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127454366#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Bethune Road, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/86040765#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Queen Elizabeth Walk, Stoke Newington",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133017170#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Somerford Grove Estate, London, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132641528#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Stoke Newington High Street, Stoke Newington, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131695394#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Wilton Way, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127374713#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Valette Street, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131428868#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Tudor Grove, Hackney, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129476009#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Sadler Place, Hackney",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132817487#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Fletcher House, Milton Garden Estate, Stoke Newington, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/126252644#/?channel=RES_BUY",
   "rent_bed_mo": 972
 },
 {
   "Address": "Upper Clapton Road, London, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132755237#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Green Lanes, London, N4",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132995222#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Hutley Wharf, Branch Place, Islington, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128059745#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Murray Grove, Islington, London, N1",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130478513#/?channel=RES_BUY",
   "rent_bed_mo": 1001
 },
 {
   "Address": "Balmes Road, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129855905#/?channel=RES_BUY",
   "rent_bed_mo": 1517
 },
 {
   "Address": "Lordship Grove, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131738210#/?channel=RES_BUY",
   "rent_bed_mo": 1531
 },
 {
   "Address": "Enfield Road, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127342136#/?channel=RES_BUY",
   "rent_bed_mo": 1531
 },
 {
   "Address": "Buttermere Walk, Dalston, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131211182#/?channel=RES_BUY",
   "rent_bed_mo": 1531
 },
 {
   "Address": "Homerton High Street, London, E9",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/131953256#/?channel=RES_BUY",
   "rent_bed_mo": 766
 },
 {
   "Address": "Homerton High Street, London",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/131954306#/?channel=RES_BUY",
   "rent_bed_mo": 766
 },
 {
   "Address": "Saskia House, 79-85 Hackney Road, London, E2",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/118961225#/?channel=RES_BUY",
   "rent_bed_mo": 1531
 },
 {
   "Address": "Approach Close, Stoke Newington, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132558293#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Bradstock Road, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126409136#/?channel=RES_BUY",
   "rent_bed_mo": 1531
 },
 {
   "Address": "Fanshaw Street, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132820475#/?channel=RES_BUY",
   "rent_bed_mo": 1531
 },
 {
   "Address": "100 Lansdowne Drive, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/121921328#/?channel=RES_BUY",
   "rent_bed_mo": 1531
 },
 {
   "Address": "Prince Edward Road, Hackney, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128519336#/?channel=RES_BUY",
   "rent_bed_mo": 1531
 },
 {
   "Address": "Harry Zeital Way, Hackney, London, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133208552#/?channel=RES_BUY",
   "rent_bed_mo": 1531
 },
 {
   "Address": "Enfield Road, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132412223#/?channel=RES_BUY",
   "rent_bed_mo": 1531
 },
 {
   "Address": "Enfield Road, Islington, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/71989827#/?channel=RES_BUY",
   "rent_bed_mo": 1531
 },
 {
   "Address": "Penshurst Road, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131654792#/?channel=RES_BUY",
   "rent_bed_mo": 1560
 },
 {
   "Address": "Balls Pond Road, Islington, N1",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131334029#/?channel=RES_BUY",
   "rent_bed_mo": 1069
 },
 {
   "Address": "Terrace Road, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85993566#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Warmington Close, Clapton, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132665153#/?channel=RES_BUY",
   "rent_bed_mo": 1069
 },
 {
   "Address": "Denman House, Lordship Terrace, London, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133052807#/?channel=RES_BUY",
   "rent_bed_mo": 1069
 },
 {
   "Address": "Kingsland Road, Dalston, London, E8 ",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130863713#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Orsman Road, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129598094#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Laburnum Street, Haggerston",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132523187#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "King Edwards Road, Victoria Park, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133072802#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Roseberry Place, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131291606#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Warmington Close, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/106954058#/?channel=RES_BUY",
   "rent_bed_mo": 1069
 },
 {
   "Address": "Stellman Close, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133317194#/?channel=RES_BUY",
   "rent_bed_mo": 1069
 },
 {
   "Address": "Balls Pond Road, Islington",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133274084#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Southgate Road, Islington",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133153763#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Manor Road, London, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130221158#/?channel=RES_BUY",
   "rent_bed_mo": 1069
 },
 {
   "Address": "Fenton Close, Hackney, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131155919#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Brookfield Road, Hackney, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131369621#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Alexandra Grove, Finsbury Park, N4",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132907394#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Humberton Close, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132462758#/?channel=RES_BUY",
   "rent_bed_mo": 1069
 },
 {
   "Address": "Finsbury Park Road, London, N4",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127979627#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "City Retreat, 14-16 Lower Clapton Road, Clapton, London, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126545807#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Forburg Road, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133251167#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Speldhurst Road, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131867486#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Bouverie Road, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131348009#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Dunn Street, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132748910#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Warmington Close, Clapton, London, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128537915#/?channel=RES_BUY",
   "rent_bed_mo": 1069
 },
 {
   "Address": "Wilberforce Road, London, Finsbury Park",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127412021#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Weymouth Terrace, London, E2",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131920184#/?channel=RES_BUY",
   "rent_bed_mo": 1069
 },
 {
   "Address": "Warmington Close, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132624206#/?channel=RES_BUY",
   "rent_bed_mo": 1069
 },
 {
   "Address": "Hacon Square, Richmond Road, Hackney, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/117095606#/?channel=RES_BUY",
   "rent_bed_mo": 1823
 },
 {
   "Address": "Ermine Mews, Laburnum Street, London, E2",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132921101#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Petherton Road, London, N5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127342556#/?channel=RES_BUY",
   "rent_bed_mo": 1633
 },
 {
   "Address": "Cresset Road, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125454332#/?channel=RES_BUY",
   "rent_bed_mo": 1648
 },
 {
   "Address": "Harry Zeital Way, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133050485#/?channel=RES_BUY",
   "rent_bed_mo": 1099
 },
 {
   "Address": "Prince Edward Road, Hackney",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128595374#/?channel=RES_BUY",
   "rent_bed_mo": 1663
 },
 {
   "Address": "Adelaide Wharf, 120 Queensbridge Road, London, E2",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/123919955#/?channel=RES_BUY",
   "rent_bed_mo": 1663
 },
 {
   "Address": "Nonet House, Hackney, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132842405#/?channel=RES_BUY",
   "rent_bed_mo": 1663
 },
 {
   "Address": "Dalston Square, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127513598#/?channel=RES_BUY",
   "rent_bed_mo": 1677
 },
 {
   "Address": "Kenninghall Road, London, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130663316#/?channel=RES_BUY",
   "rent_bed_mo": 1118
 },
 {
   "Address": "100 Lansdowne Drive, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/121756247#/?channel=RES_BUY",
   "rent_bed_mo": 1677
 },
 {
   "Address": "King Edward's Road, London Fields",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131871320#/?channel=RES_BUY",
   "rent_bed_mo": 1677
 },
 {
   "Address": "Brooke Road, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133100159#/?channel=RES_BUY",
   "rent_bed_mo": 1677
 },
 {
   "Address": "Finsbury Park Road, London N4",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131584169#/?channel=RES_BUY",
   "rent_bed_mo": 1677
 },
 {
   "Address": "Kenninghall Road, Clapton",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133215671#/?channel=RES_BUY",
   "rent_bed_mo": 1118
 },
 {
   "Address": "Cranbrook House, Pembury Road, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132220820#/?channel=RES_BUY",
   "rent_bed_mo": 875
 },
 {
   "Address": "Kenninghall Road, Clapton, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130324220#/?channel=RES_BUY",
   "rent_bed_mo": 1118
 },
 {
   "Address": "Queensbridge Road, London Fields",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132908864#/?channel=RES_BUY",
   "rent_bed_mo": 1677
 },
 {
   "Address": "Holmbury View, London, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130933007#/?channel=RES_BUY",
   "rent_bed_mo": 1118
 },
 {
   "Address": "Martello Street, Hackney, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125369897#/?channel=RES_BUY",
   "rent_bed_mo": 1677
 },
 {
   "Address": "Evering Road, Stoke Newington, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130801625#/?channel=RES_BUY",
   "rent_bed_mo": 1677
 },
 {
   "Address": "Brooke Road, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133065677#/?channel=RES_BUY",
   "rent_bed_mo": 1677
 },
 {
   "Address": "Aqua Apartments, Goodchild Road, N4",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/126400991#/?channel=RES_BUY",
   "rent_bed_mo": 1677
 },
 {
   "Address": "Buxton Court, Thoresby Street, London N1",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127820621#/?channel=RES_BUY",
   "rent_bed_mo": 1118
 },
 {
   "Address": "Jarrow Way, Homerton, London, E9",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133231532#/?channel=RES_BUY",
   "rent_bed_mo": 1118
 },
 {
   "Address": "Alexandra Grove, Finsbury Park, London, N4",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130044065#/?channel=RES_BUY",
   "rent_bed_mo": 1677
 },
 {
   "Address": "Roseberry Place, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133049192#/?channel=RES_BUY",
   "rent_bed_mo": 1677
 },
 {
   "Address": "Arden Estate, Hoxton",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/131301743#/?channel=RES_BUY",
   "rent_bed_mo": 839
 },
 {
   "Address": "Holmbury View, Clapton, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130324361#/?channel=RES_BUY",
   "rent_bed_mo": 1118
 },
 {
   "Address": "Holmbury View, Clapton",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133106474#/?channel=RES_BUY",
   "rent_bed_mo": 1118
 },
 {
   "Address": "Hanover Court, 5 Stean Street, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86100213#/?channel=RES_BUY",
   "rent_bed_mo": 1706
 },
 {
   "Address": "Lee Street, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132859520#/?channel=RES_BUY",
   "rent_bed_mo": 1706
 },
 {
   "Address": "Moulins Road, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127985468#/?channel=RES_BUY",
   "rent_bed_mo": 1706
 },
 {
   "Address": "Alexandra Grove, London, N4",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129338750#/?channel=RES_BUY",
   "rent_bed_mo": 1706
 },
 {
   "Address": "Enfield Road, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/125315123#/?channel=RES_BUY",
   "rent_bed_mo": 1721
 },
 {
   "Address": "Seven Sisters Road, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86029233#/?channel=RES_BUY",
   "rent_bed_mo": 1735
 },
 {
   "Address": "Castlewood Road, Stoke Newington, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124792523#/?channel=RES_BUY",
   "rent_bed_mo": 1735
 },
 {
   "Address": "Myddleton Avenue, Stoke Newington, London, N4",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132569876#/?channel=RES_BUY",
   "rent_bed_mo": 1944
 },
 {
   "Address": "Regent Nine Apartments, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131308454#/?channel=RES_BUY",
   "rent_bed_mo": 1735
 },
 {
   "Address": "New North Road, London, N1",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/123486302#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Smalley Close, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/124305791#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "8 New North Road, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133324910#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Osbaldeston Road, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/121094855#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Martel Place, Dalston, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131294966#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Carysfort Road, Stoke Newington",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131898380#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Shelford Place, London, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127497107#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "New North Road, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132912767#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Lee Street, Hackney",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130163393#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Dalston Lane, Hackeny,, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133257833#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Amhurst Road, Hackney, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133248518#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Ashwin Street, Dalston, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129878273#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Petherton Road, Islington, London, N5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132250667#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Sheldon House, 1 Baltic Place, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127141556#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Albion Road, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130186031#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Richmond Road, London Fields",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130140035#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Sheldon House, Baltic Place, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127493663#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Clift House, Branch Place, Hoxton, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130734746#/?channel=RES_BUY",
   "rent_bed_mo": 1794
 },
 {
   "Address": "Queensbridge Road, Shoreditch",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133252526#/?channel=RES_BUY",
   "rent_bed_mo": 1794
 },
 {
   "Address": "Roding Road, Homerton, London, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132680669#/?channel=RES_BUY",
   "rent_bed_mo": 1808
 },
 {
   "Address": "Cricketfield Road, Clapton, London, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132140939#/?channel=RES_BUY",
   "rent_bed_mo": 1808
 },
 {
   "Address": "Frampton Park Road, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131601020#/?channel=RES_BUY",
   "rent_bed_mo": 1823
 },
 {
   "Address": "Lordship Park, Stoke Newington, Hackney, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124785098#/?channel=RES_BUY",
   "rent_bed_mo": 1823
 },
 {
   "Address": "Lordship Park, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131291987#/?channel=RES_BUY",
   "rent_bed_mo": 1823
 },
 {
   "Address": "Seven Sisters Road, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86067861#/?channel=RES_BUY",
   "rent_bed_mo": 1823
 },
 {
   "Address": "Basing Place, London, E2",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130237667#/?channel=RES_BUY",
   "rent_bed_mo": 1823
 },
 {
   "Address": "Defoe Road, London N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129100760#/?channel=RES_BUY",
   "rent_bed_mo": 1823
 },
 {
   "Address": "Cosmopolitan House, Christina Street, Shoreditch, London, EC2A",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128300801#/?channel=RES_BUY",
   "rent_bed_mo": 1823
 },
 {
   "Address": "Northiam Street, Victoria Park, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132770792#/?channel=RES_BUY",
   "rent_bed_mo": 1823
 },
 {
   "Address": "New North Road, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/128189159#/?channel=RES_BUY",
   "rent_bed_mo": 1823
 },
 {
   "Address": "Hacon Square, Richmond Road, Hackney, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/117095606#/?channel=RES_BUY",
   "rent_bed_mo": 1823
 },
 {
   "Address": "The Textile Building, 31A Chatham Place, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132973601#/?channel=RES_BUY",
   "rent_bed_mo": 1823
 },
 {
   "Address": "Cazenove Road, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133049330#/?channel=RES_BUY",
   "rent_bed_mo": 1823
 },
 {
   "Address": "Devan Grove, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131860643#/?channel=RES_BUY",
   "rent_bed_mo": 1823
 },
 {
   "Address": "Victoria Park Road, Hackney, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124077008#/?channel=RES_BUY",
   "rent_bed_mo": 1838
 },
 {
   "Address": "Malpas Road, Hackney Central",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129099899#/?channel=RES_BUY",
   "rent_bed_mo": 1225
 },
 {
   "Address": "Victoria Park Road, Victoria Park, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133215209#/?channel=RES_BUY",
   "rent_bed_mo": 1838
 },
 {
   "Address": "Collins Tower, Dalston Square, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/85980327#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Hoxton Street, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130237520#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Dalston Square, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132801920#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Dunston Road, Hackney",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133274957#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Morning Lane, London",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132910763#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Pownall Road, London Fields",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129100139#/?channel=RES_BUY",
   "rent_bed_mo": 1264
 },
 {
   "Address": "Dalston Square, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86119332#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Smalley Close, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133022327#/?channel=RES_BUY",
   "rent_bed_mo": 1264
 },
 {
   "Address": "Southgate Road, Islington",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132864395#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Pownall Road, London Fields",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/126760301#/?channel=RES_BUY",
   "rent_bed_mo": 1264
 },
 {
   "Address": "Anlaby House, 31 Boundary Street, London, E2",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/116489420#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Stamford Grove East, Stoke Newington",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132689816#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Hindrey Road, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129597485#/?channel=RES_BUY",
   "rent_bed_mo": 1264
 },
 {
   "Address": "Textile Building, Chatham Place, Hackney Central, London, E9",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133033826#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Glading Terrace, London, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/86075991#/?channel=RES_BUY",
   "rent_bed_mo": 1264
 },
 {
   "Address": "Parkholme Road, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132872180#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Chatsworth Road, Clapton, London, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131652419#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Denver Road, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132998861#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Boleyn Road, London, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131371880#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Whiston Road, London, E2",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/120258872#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Glasswork Studios, Basing Place, London, E2",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132841424#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Kingsland Road, Shoreditch",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133269431#/?channel=RES_BUY",
   "rent_bed_mo": 1264
 },
 {
   "Address": "Warburton Road, London Fields",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/124975247#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Oakleigh Court, Murray Grove, Islington, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133071974#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Ramsgate Street, Dalston, London, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130994585#/?channel=RES_BUY",
   "rent_bed_mo": 1264
 },
 {
   "Address": "Manor Road, London, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132740078#/?channel=RES_BUY",
   "rent_bed_mo": 1264
 },
 {
   "Address": "Helmsley Street, London Fields",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129486692#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Warburton Road, London Fields",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/86072976#/?channel=RES_BUY",
   "rent_bed_mo": 1925
 },
 {
   "Address": "Gainsborough Studios West, Hackney, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129269069#/?channel=RES_BUY",
   "rent_bed_mo": 1969
 },
 {
   "Address": "St. Peter's Way, London, N1",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133148627#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Dalston Lane, Hackney",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131324018#/?channel=RES_BUY",
   "rent_bed_mo": 1969
 },
 {
   "Address": "Princess May Road, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132743069#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Atkins Square, Dalston",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/133049516#/?channel=RES_BUY",
   "rent_bed_mo": 1969
 },
 {
   "Address": "Wonder House, Roseberry Place, London, E8",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/127450295#/?channel=RES_BUY",
   "rent_bed_mo": 1969
 },
 {
   "Address": "Stoke Newington Church Street, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133264625#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 },
 {
   "Address": "Waterside Apartments Goodchild Road N4",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132639272#/?channel=RES_BUY",
   "rent_bed_mo": 1969
 },
 {
   "Address": "Lucan Path, Colville Estate, London, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/129585383#/?channel=RES_BUY",
   "rent_bed_mo": 1969
 },
 {
   "Address": "Downs Road, Clapton, E5",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/130215614#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Woodberry Down, Hackney, N4",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132003593#/?channel=RES_BUY",
   "rent_bed_mo": 1983
 },
 {
   "Address": "Wharf Road, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/132383792#/?channel=RES_BUY",
   "rent_bed_mo": 1998
 },
 {
   "Address": "Casterton Street, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129820649#/?channel=RES_BUY",
   "rent_bed_mo": 1351
 },
 {
   "Address": "Kingsgate Estate, Tottenham Road, London, N1",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/104887967#/?channel=RES_BUY",
   "rent_bed_mo": 1351
 },
 {
   "Address": "The Textile Building, 31a Chatham Place, London, E9",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127760771#/?channel=RES_BUY",
   "rent_bed_mo": 1361
 },
 {
   "Address": "Baltic Place, Islington",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127186250#/?channel=RES_BUY",
   "rent_bed_mo": 1410
 },
 {
   "Address": "Baltic Place, London",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/128533058#/?channel=RES_BUY",
   "rent_bed_mo": 1086
 },
 {
   "Address": "Kenworthy Road, London, E9",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131343050#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Victorian Grove, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133097984#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Casterton Street, London, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132409049#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Roseberry Place, London, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132131876#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Rowhill Road, Clapton, London, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131229620#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Independent Place, Hackney",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/85979766#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Eastway, Hackney Wick, London, E9",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130184159#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Queens Drive, London N4",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133140431#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Whiston Road, Hackney, London, E2",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131760146#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "St John's Estate, Islington, N1",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/83594016#/?channel=RES_BUY",
   "rent_bed_mo": 1094
 },
 {
   "Address": "Marcon Place, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132922604#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Wilberforce Road, Finsbury Park ",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130535501#/?channel=RES_BUY",
   "rent_bed_mo": 1488
 },
 {
   "Address": "Dalston Square, London, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130343264#/?channel=RES_BUY",
   "rent_bed_mo": 1497
 },
 {
   "Address": "Queensbridge Road, Hackney",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131851529#/?channel=RES_BUY",
   "rent_bed_mo": 1507
 },
 {
   "Address": "Brooke Road, London, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132269513#/?channel=RES_BUY",
   "rent_bed_mo": 1507
 },
 {
   "Address": "Bodney Road, Hackney Downs, London, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132896369#/?channel=RES_BUY",
   "rent_bed_mo": 1517
 },
 {
   "Address": "Gransden Avenue, London Fields, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/120906446#/?channel=RES_BUY",
   "rent_bed_mo": 1526
 },
 {
   "Address": "Seven Sisters Road, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131691644#/?channel=RES_BUY",
   "rent_bed_mo": 1546
 },
 {
   "Address": "Martel Place, Dalston, London, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132989492#/?channel=RES_BUY",
   "rent_bed_mo": 1556
 },
 {
   "Address": "FiftySevenEast, Kingsland High Street, Dalston E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/118543724#/?channel=RES_BUY",
   "rent_bed_mo": 1556
 },
 {
   "Address": "Sach Road, Clapton, London, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133177370#/?channel=RES_BUY",
   "rent_bed_mo": 1556
 },
 {
   "Address": "Albion Road, London, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131086064#/?channel=RES_BUY",
   "rent_bed_mo": 1556
 },
 {
   "Address": "Benn Street, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133022756#/?channel=RES_BUY",
   "rent_bed_mo": 1556
 },
 {
   "Address": "Academy Apartments, Hackney Downs, London, E8",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/127125878#/?channel=RES_BUY",
   "rent_bed_mo": 1167
 },
 {
   "Address": "Bridport Place, Haggerston",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128166740#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Chatsworth Road, Clapton, London, E5",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/132184739#/?channel=RES_BUY",
   "rent_bed_mo": 1203
 },
 {
   "Address": "Homerton High Street, London",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/127469969#/?channel=RES_BUY",
   "rent_bed_mo": 1203
 },
 {
   "Address": "Defoe Road, London, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133059272#/?channel=RES_BUY",
   "rent_bed_mo": 1604
 },
 {
   "Address": "Laurel Street, London, E8",
   "Location": "Hackney",
   "Bedrooms": 5,
   "URL": "http://www.rightmove.co.uk/properties/127820759#/?channel=RES_BUY",
   "rent_bed_mo": 967
 },
 {
   "Address": "Waterside Apartments, Goodchild Road, N4",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127164578#/?channel=RES_BUY",
   "rent_bed_mo": 1624
 },
 {
   "Address": "Sidworth Street, London Fields, Hackney, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132639023#/?channel=RES_BUY",
   "rent_bed_mo": 1653
 },
 {
   "Address": "Balmes Road, De Beauvoir Town, London, N1",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/70094580#/?channel=RES_BUY",
   "rent_bed_mo": 1653
 },
 {
   "Address": "Craven Park Road, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133222844#/?channel=RES_BUY",
   "rent_bed_mo": 1653
 },
 {
   "Address": "Forest Road, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/125483453#/?channel=RES_BUY",
   "rent_bed_mo": 1653
 },
 {
   "Address": "Mildenhall Road, Clapton, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130501520#/?channel=RES_BUY",
   "rent_bed_mo": 1653
 },
 {
   "Address": "Wilton Estate, Greenwood Road, Hackney, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130323863#/?channel=RES_BUY",
   "rent_bed_mo": 924
 },
 {
   "Address": "Rushmore Road, Clapton, London, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133014329#/?channel=RES_BUY",
   "rent_bed_mo": 1653
 },
 {
   "Address": "Craven Park Road, Tottenham, London, N15",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/131529140#/?channel=RES_BUY",
   "rent_bed_mo": 1240
 },
 {
   "Address": "Mildenhall Road, London, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130663958#/?channel=RES_BUY",
   "rent_bed_mo": 1653
 },
 {
   "Address": "Mildenhall road, Hackney",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133216655#/?channel=RES_BUY",
   "rent_bed_mo": 1653
 },
 {
   "Address": "Balmes Road, London, N1",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/89216441#/?channel=RES_BUY",
   "rent_bed_mo": 1653
 },
 {
   "Address": "Adley Street, Homerton, London, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131119763#/?channel=RES_BUY",
   "rent_bed_mo": 1701
 },
 {
   "Address": "Barretts Grove, Stoke Newington, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131237579#/?channel=RES_BUY",
   "rent_bed_mo": 1701
 },
 {
   "Address": "Beechwood Road, Dalston Square, London, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131382293#/?channel=RES_BUY",
   "rent_bed_mo": 1701
 },
 {
   "Address": "Mountgrove Road, Highbury, London, N5",
   "Location": "Hackney",
   "Bedrooms": 5,
   "URL": "http://www.rightmove.co.uk/properties/129577979#/?channel=RES_BUY",
   "rent_bed_mo": 1021
 },
 {
   "Address": "Glyn Road, Clapton, London, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/125146256#/?channel=RES_BUY",
   "rent_bed_mo": 1721
 },
 {
   "Address": "Gransden Avenue, London Fields, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133199942#/?channel=RES_BUY",
   "rent_bed_mo": 1740
 },
 {
   "Address": "Roseberry Place, London, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130623941#/?channel=RES_BUY",
   "rent_bed_mo": 1740
 },
 {
   "Address": "Balmes Road, London, N1",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132413855#/?channel=RES_BUY",
   "rent_bed_mo": 1740
 },
 {
   "Address": "Kingsland High Street, Dalston, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128760458#/?channel=RES_BUY",
   "rent_bed_mo": 1740
 },
 {
   "Address": "New North Road, London, N1",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129803288#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Valentine Road, Hackney, E9",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132904565#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Chester Crescent, Dalston",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133245071#/?channel=RES_BUY",
   "rent_bed_mo": 1750
 },
 {
   "Address": "Gransden Avenue, London Fields, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127549445#/?channel=RES_BUY",
   "rent_bed_mo": 1779
 },
 {
   "Address": "Kingsland High Street, Dalston, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127138901#/?channel=RES_BUY",
   "rent_bed_mo": 1799
 },
 {
   "Address": "Flat , Sandpiper Building,  Newnton Close, London",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129292868#/?channel=RES_BUY",
   "rent_bed_mo": 1808
 },
 {
   "Address": "Summit Estate, Portland Avenue, Stoke Newington, N16",
   "Location": "Hackney",
   "Bedrooms": 1,
   "URL": "http://www.rightmove.co.uk/properties/128262596#/?channel=RES_BUY",
   "rent_bed_mo": 1896
 },
 {
   "Address": "Cropley Street, London, N1",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133084571#/?channel=RES_BUY",
   "rent_bed_mo": 1847
 },
 {
   "Address": "Kenton Road, Hackney",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128479127#/?channel=RES_BUY",
   "rent_bed_mo": 1847
 },
 {
   "Address": "Richmond Road, London, E8",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/132468590#/?channel=RES_BUY",
   "rent_bed_mo": 1385
 },
 {
   "Address": "Poole Road, Hackney",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/130193441#/?channel=RES_BUY",
   "rent_bed_mo": 1847
 },
 {
   "Address": "Killowen Road, Hackney",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132642932#/?channel=RES_BUY",
   "rent_bed_mo": 1847
 },
 {
   "Address": "Clarence Road, Clapton",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132510179#/?channel=RES_BUY",
   "rent_bed_mo": 1847
 },
 {
   "Address": "Daubeney Rd, E5 Clapton",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132908687#/?channel=RES_BUY",
   "rent_bed_mo": 1847
 },
 {
   "Address": "Newnton Close, London, N4",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/98140826#/?channel=RES_BUY",
   "rent_bed_mo": 1867
 },
 {
   "Address": "Mildenhall Road, Hackney, London, E5",
   "Location": "Hackney",
   "Bedrooms": 5,
   "URL": "http://www.rightmove.co.uk/properties/131881820#/?channel=RES_BUY",
   "rent_bed_mo": 1138
 },
 {
   "Address": "Clifden Road, London, E5",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/129738641#/?channel=RES_BUY",
   "rent_bed_mo": 1935
 },
 {
   "Address": "Chelmer Road, London, E9",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/85985325#/?channel=RES_BUY",
   "rent_bed_mo": 1944
 },
 {
   "Address": "Slindon Court, Stoke Newington High Street, London, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127615535#/?channel=RES_BUY",
   "rent_bed_mo": 1944
 },
 {
   "Address": "Gillett Place, London, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/131451587#/?channel=RES_BUY",
   "rent_bed_mo": 1944
 },
 {
   "Address": "Cottrill Gardens, Marcon Place, London, E8",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/123601637#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Chatsworth Road, London",
   "Location": "Hackney",
   "Bedrooms": 7,
   "URL": "http://www.rightmove.co.uk/properties/127241747#/?channel=RES_BUY",
   "rent_bed_mo": 833
 },
 {
   "Address": "Myddleton Avenue, Stoke Newington, London, N4",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/132569876#/?channel=RES_BUY",
   "rent_bed_mo": 1944
 },
 {
   "Address": "Slindon Court, Stoke Newington, London, N16",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/127625210#/?channel=RES_BUY",
   "rent_bed_mo": 1944
 },
 {
   "Address": "Dalston Square, Dalston, London, E8",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/133156535#/?channel=RES_BUY",
   "rent_bed_mo": 1944
 },
 {
   "Address": "Cottrill Gardens, Marcon Place, London, E8",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/119794049#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Hackney Road, London, E2",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/115861361#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Albion Parade, Stoke Newington",
   "Location": "Hackney",
   "Bedrooms": 3,
   "URL": "http://www.rightmove.co.uk/properties/128706929#/?channel=RES_BUY",
   "rent_bed_mo": 1944
 },
 {
   "Address": "Cottrill Gardens, Dalston, London, E8",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/132861020#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Marcon Place, Hackney, E8",
   "Location": "Hackney",
   "Bedrooms": 4,
   "URL": "http://www.rightmove.co.uk/properties/128532650#/?channel=RES_BUY",
   "rent_bed_mo": 1458
 },
 {
   "Address": "Knebworth House, Londesborough Road, Stoke Newington, N16",
   "Location": "Hackney",
   "Bedrooms": 2,
   "URL": "http://www.rightmove.co.uk/properties/131113151#/?channel=RES_BUY",
   "rent_bed_mo": 1313
 }
]



function GridHomeCard({rooms, place, price}) {
  
  const moveins = homes.filter(home => home.Bedrooms === Number(rooms)).filter(home => home.rent_bed_mo < Number(price)).filter(home => home.Location === place);
  
  return (
  <Grid>
    {moveins.map((movein, index) => (
        <HomeCard
          URL={movein.URL}
          bedrooms={movein.Bedrooms}
          address={movein.Address}
          budget={movein.rent_bed_mo}
        />
    ))}
  </Grid>
  );
}

export default GridHomeCard;
