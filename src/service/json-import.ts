import * as dot from "dot-object"
import jsonData from "../assets/data.json";

class JsonImportService
{
    $data: any = {}

    init()
    {
        this.$data = jsonData
    }

    getData()
    {
        return this.$data
    }

    getValue(path: string)
    {
        return dot.pick(path, this.$data)
    
    }
}

export const JsonImport = new JsonImportService()