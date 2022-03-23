import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [launches, setLaunches] = useState<any>([])
  const [showDetail, setShowDetail] = useState(false)
  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/launches/past').then((response) => {
      response.json().then((result) => {
        setLaunches(result)
      })
    })
  }, [])
  const showDetail = (launch: any) => {
    Detail(launch)
    setShowDetail(true)
  }
  return (
    <div className='App'>
      {console.log(launches)}
      <div>
        {showDetail && <Detail />}
        {!showDetail &&
          launches.map((launch: any) => {
            return (
              <div>
                <img
                  width='50px'
                  src={launch.links.patch.small}
                  alt='some extra stuff'
                />
                <div onClick={() => showDetail(launch)}>
                  <div>{launch.name}</div>
                  <div>{launch.date_utc}</div>
                  <div>{launch.flight_number}</div>
                  <div>{launch.success}</div>
                </div>
                <br />
                <br />
                <br />
                <br />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default App

const Detail = (launch: any) => {
  return <div>WOOT!!!</div>
}
const x = {
  fairings: {
    reused: false,
    recovery_attempt: false,
    recovered: false,
    ships: [],
  },
  links: {
    patch: {
      small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
      large: 'https://images2.imgbox.com/40/e3/GypSkayF_o.png',
    },
    reddit: { campaign: null, launch: null, media: null, recovery: null },
    flickr: { small: [], original: [] },
    presskit: null,
    webcast: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
    youtube_id: '0a_00nJ_Y88',
    article:
      'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
    wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
  },
  static_fire_date_utc: '2006-03-17T00:00:00.000Z',
  static_fire_date_unix: 1142553600,
  net: false,
  window: 0,
  rocket: '5e9d0d95eda69955f709d1eb',
  success: false,
  failures: [{ time: 33, altitude: null, reason: 'merlin engine failure' }],
  details: 'Engine failure at 33 seconds and loss of vehicle',
  crew: [],
  ships: [],
  capsules: [],
  payloads: ['5eb0e4b5b6c3bb0006eeb1e1'],
  launchpad: '5e9e4502f5090995de566f86',
  flight_number: 1,
  name: 'FalconSat',
  date_utc: '2006-03-24T22:30:00.000Z',
  date_unix: 1143239400,
  date_local: '2006-03-25T10:30:00+12:00',
  date_precision: 'hour',
  upcoming: false,
  cores: [
    {
      core: '5e9e289df35918033d3b2623',
      flight: 1,
      gridfins: false,
      legs: false,
      reused: false,
      landing_attempt: false,
      landing_success: null,
      landing_type: null,
      landpad: null,
    },
  ],
  auto_update: true,
  tbd: false,
  launch_library_id: null,
  id: '5eb87cd9ffd86e000604b32a',
}
