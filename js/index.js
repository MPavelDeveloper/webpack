import { createElem } from "./utils.js";

const title = createElem('div', 'header__title');
title.textContent = 'File JS';
const header = document.querySelector('header');
header.append(title);

