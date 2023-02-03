import React from "react"
import { Graph, Thing, WithContext } from "schema-dts"

class SeoTags {
    meta: React.MetaHTMLAttributes<HTMLMetaElement>[]
    link: React.LinkHTMLAttributes<HTMLLinkElement>[]
    script: React.ScriptHTMLAttributes<HTMLScriptElement>[]
    jsonLd: WithContext<Thing>[]

    buildMetaTags() {
        return this.meta.map(tag => <meta {...tag} />)
    }

    buildLinkTags() {
        return this.link.map(tag => <link {...tag} />)
    }

    buildScriptTags() {
        return this.script.map(tag => <script {...tag} />)
    }

    buildJsonLd() {
        if (this.jsonLd.length === 1)
            return <script type="application/json+ld" >{JSON.stringify(this.jsonLd[0])}</script>
        const graphJsonLd:Graph = {
            '@context': 'https://schema.org',
            '@graph': this.jsonLd
        }
        return <script type="application/json+ld" >{JSON.stringify(graphJsonLd)}</script>
    }

    build() {
        return [
            ...this.buildMetaTags(),
            ...this.buildLinkTags(),
            ...this.buildScriptTags(),
            ...this.buildJsonLd()
        ]
    }
}


export default SeoTags