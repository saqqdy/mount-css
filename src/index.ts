export type LinkAttributes = Pick<
	HTMLLinkElement,
	| 'as'
	| 'charset'
	| 'crossOrigin'
	| 'disabled'
	| 'href'
	| 'hreflang'
	| 'imageSizes'
	| 'imageSrcset'
	| 'integrity'
	| 'media'
	| 'referrerPolicy'
	| 'rel'
	| 'rev'
	| 'target'
	| 'type'
>

export interface HTMLLinkElementEX extends HTMLLinkElement {
	onreadystatechange?: any
	readyState?: 'loaded' | 'complete'
}

export interface CssOptions {
	attrs?: LinkAttributes
	props?: LinkAttributes
	force?: boolean
}

/**
 * Dynamic loading of css link resources
 *
 * @param src - resource address
 * @param option - parameters: attrs, props, force
 * @returns - result
 */
function mountCss(src: string, option: CssOptions = {}): Promise<boolean> {
	if (!src) throw new Error('[mountCss]: url is required')
	const { attrs, props, force = false } = option
	return new Promise((resolve, reject) => {
		if (!force && document.querySelector(`link[href="${src}"]`)) {
			resolve(true)
			return
		}
		const dom: HTMLLinkElementEX = document.createElement('link')
		let attr: keyof LinkAttributes, prop: keyof LinkAttributes
		if (attrs) {
			for (attr in attrs) {
				dom[attr] = attrs[attr] as never
			}
		}
		if (props) {
			for (prop in props) {
				dom[prop] = props[prop] as never
			}
		}
		dom.rel = 'stylesheet'
		dom.type = 'text/css'
		dom.href = src
		document.getElementsByTagName('head')[0].appendChild(dom)
		dom.onload = dom.onreadystatechange = function () {
			if (!dom.readyState || ['loaded', 'complete'].includes(dom.readyState)) {
				dom.onload = dom.onreadystatechange = null
				resolve(true)
			}
		}
		dom.onerror = reject
	})
}

export default mountCss
