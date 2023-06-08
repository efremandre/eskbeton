'use strict'
import AOS from 'aos'

export function aosInit() {
	AOS.init({
		disable: 'mobile',
		duration: 1000,
		offset: 1,
		anchorPlacement: 'top-bottom',
		once: true
	})
}