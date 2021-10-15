import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { DeleteTruck } from '../services/TruckServices'
import React, { useEffect, useState } from 'react'

function Profile(props) {
  const [userTrucks, setUserTrucks] = useState([])

  const mapThroughProps = async () => {
    if (!props.userInfo.Trucks) return
    setUserTrucks(props.userInfo.Trucks)
  }
  const onClick = async (id) => {
    const data = await DeleteTruck(id)
    props.getUserProfile(props.userInfo.id)
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
          <div className="user_profile_name">{props.userInfo.company}</div>
          <div className="user_profile"></div>
        </div>
        <div className="user_cars">
          <h1> Your Garage</h1>
          {userTrucks && (
            <div>
              {' '}
              {userTrucks.map((truck) => (
                <div className="user_car_card" key={truck.id}>
                  <button
                    className="remove"
                    onClick={() => {
                      onClick(truck.id)
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    Remove Your Listing
                  </button>
                  <NavLink
                    className="edit"
                    to={`/profile/trucks/${truck.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <button>Edit Your Truck!</button>
                  </NavLink>
                  <h2>
                    {truck.make} {truck.year} {truck.model}
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

export default withRouter(Profile)
