import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { DeleteLoad } from '../services/LoadServices'
import React, { useEffect, useState } from 'react'

function Broker(props) {
  const [userLoads, setUserLoads] = useState([])

  const mapThroughProps = async () => {
    if (!props.brokerInfo.Loads) return
    setUserLoads(props.brokerInfo.Loads)
  }
  const onClick = async (id) => {
    const data = await DeleteLoad(id)
    props.getBrokerLoads(props.brokerInfo.id)
  }

  useEffect(() => {
    mapThroughProps()
  }, [props])

  return (
    <div className="profile">
      <div className="user_profile_top">
        {/* <img src={Banner} className="profile_banner"></img> */}
        <div className="whole1">
          <div className="top1">
            <div className="try1"></div>
          </div>
          <div className="user_profile_name">{props.brokerInfo.company}</div>
          <div className="user_profile"></div>
        </div>
        <div className="user_cars">
          <h1> Your Loads</h1>
          {userLoads && (
            <div>
              {' '}
              {userLoads.map((load) => (
                <div className="user_car_card" key={load.id}>
                  <button
                    className="remove"
                    onClick={() => {
                      onClick(load.id)
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    Remove Your Listing
                  </button>
                  <NavLink
                    className="edit"
                    to={`/broker/loads/${load.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <button>Edit Your Load!</button>
                  </NavLink>
                  <h2>
                    {load.pickup} {load.drop} {load.createdAt}
                  </h2>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default withRouter(Broker)
