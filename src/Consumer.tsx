import * as React from 'react'
import { WithContext, Thing, Graph } from 'schema-dts'

type Schema = WithContext<Thing> | Graph

const JsonLd = (schema: Schema) => {
    <meta
    <script type='application/json+ld'>
        {JSON.stringify(schema)}
    </script>
}

export default JsonLd