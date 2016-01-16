'use strict';

const TOPICS = [
	{ value: '0',  label: 'all',           ch: ''    },
	{ value: '1',  label: 'Scraping',      ch: '网页爬虫' },
	{ value: '2',  label: 'Charts',        ch: '图表组件' },
	{ value: '3',  label: 'Data Analysis', ch: '数据处理' },
	{ value: '4',  label: 'Rendering',     ch: '渲染引擎' }
];

const ORGS = [
	{ value: '0',  label: 'all',                     ch: '' },
	{ value: '1',  label: 'The New York Times',      ch: '纽约时报' },
	{ value: '2',  label: 'The Guardian',            ch: '英国卫报' },
	{ value: '3',  label: 'NPR',                     ch: '国家公共电台' },
	{ value: '4',  label: 'ProPublica',              ch: '' },
	{ value: '5',  label: 'The Wall Street Journal', ch: '华尔街日报' },
	{ value: '6',  label: 'The Washington Post',     ch: '华盛顿邮报' },
	{ value: '7',  label: 'Bloomberg',               ch: '彭博社' },
	{ value: '8',  label: 'Five Thirty Eight',       ch: '538' },
	{ value: '9',  label: 'Reuters',                 ch: '路透社' },
	{ value: '11', label: 'Chicago Tribune',         ch: '芝加哥论坛报' },
	{ value: '12', label: 'The Huffington Post',     ch: '赫芬顿邮报' },
	{ value: '13', label: 'WNYC',                    ch: '纽约公共广播电台' }
];

const TYPES = [
	{ value: '0',  label: 'all' },
	{ value: '1',  label: 'Java' },
	{ value: '2',  label: 'Python' },
	{ value: '3',  label: 'JavaScript' },
	{ value: '4',  label: 'Ruby' },
	{ value: '5',  label: 'C++' },
	{ value: '6',  label: 'C#' }
];

export {TOPICS, ORGS, TYPES};