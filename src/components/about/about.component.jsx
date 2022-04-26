import React from 'react'
import './about.styles.css'


export default function About() {
  return (
    <div className='main'>
        <header>
            <p>Discover</p>
            <h2>About us</h2>
            <span>Our motto: Together we are stronger</span>
        </header>
        <div className='main-body'>
            <div className='main-body-1'>
                <div>
                    <h3>What is it about?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quidem veniam facilis explicabo voluptatibus, eum distinctio, esse laborum quos, temporibus dicta cupiditate? Ut cum aut ipsa esse repudiandae eaque repellendus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia veniam eaque dolorem ut sequi molestias? Vitae error, a sed laboriosam ab eos minima, saepe corporis numquam commodi, nulla quasi temporibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, eveniet!</p>
                    <a href='#'>learn more</a>
                </div>

                <div>
                    <h3>How it started</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quidem veniam facilis explicabo voluptatibus, eum distinctio, esse laborum quos, temporibus dicta cupiditate? Ut cum aut ipsa esse repudiandae eaque repellendus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia veniam eaque dolorem ut sequi molestias? Vitae error, a sed laboriosam ab eos minima, saepe corporis numquam commodi, nulla quasi temporibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, eveniet!  </p>
                    <a href='#'>learn more</a>
                </div>

            </div>

            <div className='main-body-2'>
                <h4>our journey so far</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, aut temporibus? Voluptatibus repellat quisquam nesciunt incidunt. Omnis harum illo quas quia repellat, aperiam sunt corporis sed vero voluptatibus nesciunt ut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, aut temporibus? Voluptatibus repellat quisquam nesciunt incidunt. Omnis harum illo quas quia repellat, aperiam sunt corporis sed vero voluptatibus nesciunt ut.    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta magni iure neque corporis repudiandae molestias placeat similique velit fugiat iusto quis totam tenetur qui, error nisi voluptates fuga a iste.
                </p>
            </div>

            <div className='achieve'>
                <h4>our acheivements</h4>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
        </div>
        <p className='group'>&copy; Grop 37 Capstone project 2022</p>
    </div>
  )
}