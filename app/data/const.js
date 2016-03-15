'use strict';

const TOPICS = [
  { value: '0',  label: '所有类别',       en: 'all' },
  { value: '1',  label: '新闻室',         en: 'newsroom' },
  { value: '2',  label: '图表',           en: 'charting' },
  { value: '3',  label: '3D',            en: '3D' },
  { value: '4',  label: 'WebGL',         en: 'WebGL' },
  { value: '5',  label: '移动端',         en: 'mobile' },
  { value: '6',  label: '开放数据',        en: 'open-data' },
  { value: '7',  label: '政治',           en: 'politics' },
  { value: '8',  label: '地图',           en: 'maps' },
  { value: '9',  label: '数据库',         en: 'database' },
  { value: '10',  label: '艺术',          en: 'arts' },
  { value: '11',  label: '教程',          en: 'tutorials' },
  { value: '12',  label: '字体',          en: 'typography' },
  { value: '13',  label: '统计',          en: 'statistics' },
  { value: '14',  label: '趣味',          en: 'fun' },
  { value: '15',  label: '数据分析',       en: 'analysis' },
  { value: '16',  label: '色彩',          en: 'colors' }
];

const ORGS = [
  { value: '0',   id: 'all',             label: '所有媒体',                         ch: '所有媒体' },
  { value: '1',   id: 'nytimes',         label: 'The New York Times',          ch: '纽约时报' },
  { value: '2',   id: 'guardian',        label: 'The Guardian',                ch: '英国卫报' },
  { value: '3',   id: 'nprapps',         label: 'NPR',                         ch: '国家公共电台' },
  { value: '4',   id: 'propublica',      label: 'ProPublica',                  ch: '' },
  { value: '5',   id: 'WSJ',             label: 'The Wall Street Journal',     ch: '华尔街日报' },
  { value: '6',   id: 'washingtonpost',  label: 'The Washington Post',         ch: '华盛顿邮报' },
  { value: '7',   id: 'BloombergMedia',  label: 'Bloomberg Media',             ch: '彭博社' },
  { value: '8',   id: 'FiveThirtyEight', label: 'Five Thirty Eight',           ch: '538' },
  { value: '9',   id: 'thomsonreuters',  label: 'Thomson Reuters',             ch: '路透社' },
  { value: '10',  id: 'TimeMagazine',    label: 'Time Magazine',               ch: '时代' },
  { value: '11',  id: 'newsapps',        label: 'Chicago Tribune',             ch: '芝加哥论坛报' },
  { value: '12',  id: 'huffpostdata',    label: 'The Huffington Post',         ch: '赫芬顿邮报' },
  { value: '13',  id: 'wnyc',            label: 'WNYC',                        ch: '纽约公共广播电台' },
  { value: '14',  id: 'datadesk',        label: 'Los Angeles Times Data Desk', ch: '洛杉矶时报' },
  { value: '15',  id: 'BuzzFeedNews',    label: 'Buzz Feed',                   ch: '' },
  { value: '16',  id: 'ajam',            label: 'Al Jazeera America',          ch: '半岛电台美国' },
  { value: '17',  id: 'voxmedia',        label: 'Vox Media',                   ch: '' },
  { value: '18',  id: 'censusreporter',  label: 'Census Reporter',             ch: '' },
  { value: '19',  id: 'dukechronicle',   label: 'The Duke Chronicle',          ch: '' }
];

const TYPES = [
  { value: '0',  label: '编程语言' },
  { value: '1',  label: 'JavaScript' },
  { value: '2',  label: 'Objective-C' },
  { value: '3',  label: 'HTML' },
  { value: '4',  label: 'Python' },
  { value: '5',  label: 'Go' },
  { value: '6',  label: 'Ruby' },
  { value: '7',  label: 'Jupyter Notebook' },
  { value: '8',  label: 'R' },
  { value: '9',  label: 'Clojure' },
  { value: '10',  label: 'CoffeeScript' },
  { value: '11',  label: 'Shell' },
  { value: '12',  label: 'C#' },
  { value: '13',  label: 'PHP' },
  { value: '14',  label: 'Java' },
  { value: '15',  label: 'Scala' }
];

export {TOPICS, ORGS, TYPES};