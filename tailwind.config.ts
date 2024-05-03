import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom:[
					{
						name: 'modern-campus',
						properties: {
							// =~= Theme Properties =~=
							"--theme-font-family-base": `system-ui`,
							"--theme-font-family-heading": `system-ui`,
							"--theme-font-color-base": "0 0 0",
							"--theme-font-color-dark": "255 255 255",
							"--theme-rounded-base": "8px",
							"--theme-rounded-container": "8px",
							"--theme-border-base": "1px",
							// =~= Theme On-X Colors =~=
							"--on-primary": "0 0 0",
							"--on-secondary": "255 255 255",
							"--on-tertiary": "255 255 255",
							"--on-success": "255 255 255",
							"--on-warning": "0 0 0",
							"--on-error": "255 255 255",
							"--on-surface": "255 255 255",
							// =~= Theme Colors  =~=
							// primary | #ff5c39 
							"--color-primary-50": "255 231 225", // #ffe7e1
							"--color-primary-100": "255 222 215", // #ffded7
							"--color-primary-200": "255 214 206", // #ffd6ce
							"--color-primary-300": "255 190 176", // #ffbeb0
							"--color-primary-400": "255 141 116", // #ff8d74
							"--color-primary-500": "255 92 57", // #ff5c39
							"--color-primary-600": "230 83 51", // #e65333
							"--color-primary-700": "191 69 43", // #bf452b
							"--color-primary-800": "153 55 34", // #993722
							"--color-primary-900": "125 45 28", // #7d2d1c
							// secondary | #002554 
							"--color-secondary-50": "217 222 229", // #d9dee5
							"--color-secondary-100": "204 211 221", // #ccd3dd
							"--color-secondary-200": "191 201 212", // #bfc9d4
							"--color-secondary-300": "153 168 187", // #99a8bb
							"--color-secondary-400": "77 102 135", // #4d6687
							"--color-secondary-500": "0 37 84", // #002554
							"--color-secondary-600": "0 33 76", // #00214c
							"--color-secondary-700": "0 28 63", // #001c3f
							"--color-secondary-800": "0 22 50", // #001632
							"--color-secondary-900": "0 18 41", // #001229
							// tertiary | #802180 
							"--color-tertiary-50": "236 222 236", // #ecdeec
							"--color-tertiary-100": "230 211 230", // #e6d3e6
							"--color-tertiary-200": "223 200 223", // #dfc8df
							"--color-tertiary-300": "204 166 204", // #cca6cc
							"--color-tertiary-400": "166 100 166", // #a664a6
							"--color-tertiary-500": "128 33 128", // #802180
							"--color-tertiary-600": "115 30 115", // #731e73
							"--color-tertiary-700": "96 25 96", // #601960
							"--color-tertiary-800": "77 20 77", // #4d144d
							"--color-tertiary-900": "63 16 63", // #3f103f
							// success | #005e5d 
							"--color-success-50": "217 231 231", // #d9e7e7
							"--color-success-100": "204 223 223", // #ccdfdf
							"--color-success-200": "191 215 215", // #bfd7d7
							"--color-success-300": "153 191 190", // #99bfbe
							"--color-success-400": "77 142 142", // #4d8e8e
							"--color-success-500": "0 94 93", // #005e5d
							"--color-success-600": "0 85 84", // #005554
							"--color-success-700": "0 71 70", // #004746
							"--color-success-800": "0 56 56", // #003838
							"--color-success-900": "0 46 46", // #002e2e
							// warning | #f4da40 
							"--color-warning-50": "253 249 226", // #fdf9e2
							"--color-warning-100": "253 248 217", // #fdf8d9
							"--color-warning-200": "252 246 207", // #fcf6cf
							"--color-warning-300": "251 240 179", // #fbf0b3
							"--color-warning-400": "247 229 121", // #f7e579
							"--color-warning-500": "244 218 64", // #f4da40
							"--color-warning-600": "220 196 58", // #dcc43a
							"--color-warning-700": "183 164 48", // #b7a430
							"--color-warning-800": "146 131 38", // #928326
							"--color-warning-900": "120 107 31", // #786b1f
							// error | #cf3617 
							"--color-error-50": "248 225 220", // #f8e1dc
							"--color-error-100": "245 215 209", // #f5d7d1
							"--color-error-200": "243 205 197", // #f3cdc5
							"--color-error-300": "236 175 162", // #ecafa2
							"--color-error-400": "221 114 93", // #dd725d
							"--color-error-500": "207 54 23", // #cf3617
							"--color-error-600": "186 49 21", // #ba3115
							"--color-error-700": "155 41 17", // #9b2911
							"--color-error-800": "124 32 14", // #7c200e
							"--color-error-900": "101 26 11", // #651a0b
							// surface | #0d2d59 
							"--color-surface-50": "219 224 230", // #dbe0e6
							"--color-surface-100": "207 213 222", // #cfd5de
							"--color-surface-200": "195 203 214", // #c3cbd6
							"--color-surface-300": "158 171 189", // #9eabbd
							"--color-surface-400": "86 108 139", // #566c8b
							"--color-surface-500": "13 45 89", // #0d2d59
							"--color-surface-600": "12 41 80", // #0c2950
							"--color-surface-700": "10 34 67", // #0a2243
							"--color-surface-800": "8 27 53", // #081b35
							"--color-surface-900": "6 22 44", // #06162c
							
						}
					}
				],
				preset: [
					{
						name: 'modern',
						enhancements: true,
					},
				],
			},
		}),
	],
} satisfies Config;
