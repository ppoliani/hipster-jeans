#r "../packages/Suave/lib/net40/Suave.dll"
#r "../packages/Suave.Swagger/lib/Suave.Swagger.dll"
#load "data.fs"

open Suave
open Suave.Filters
open Suave.Operators
open Suave.Successful
open Hipster.Data

let app =
  choose
    [ GET >=> choose
        [ path "/sales" >=> getData  ]
    ]

