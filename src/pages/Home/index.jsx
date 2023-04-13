import axios from "axios";
import React, { useState, useEffect } from 'react'

import './styles.css'

export function Home() {
  const url = "https://api.github.com/users/RafaelKeiti"
  const [dados, setDados] = useState({ avatar: '', name: '', url: '' })

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url)
        setDados({
          avatar: data.avatar_url,
          name: data.name,
          url: data.html_url
        })
      } catch (err) {
        console.error(err)
      }
    })()
  }, []);

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="card">
            <div className="card-image">
              <img src={dados.avatar} alt="" />
            </div>
            <div className="information">
              <div className="name">{dados.name}</div>
              <div className="job">Aprendiz em Desenvolvimento Web</div>
            </div>
            <div className="card-options">
              <a href={dados.url} target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/rafael-keiti-azuma-5138b0262/" target="_blank">Linkedin</a>
              <a href="/presentation">Ver Portfólio...</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}