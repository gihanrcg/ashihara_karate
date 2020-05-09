import React, { Component } from 'react';
import img from '../../../images/Ashihara_kaikan_logo.jpg'

class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            readMore: false
        }
    }

    readMore = () => {
        this.setState({
            readMore: !this.state.readMore
        })
    }

    render() {
        return (
            <section id="history">


                <div className="card-group">

                    <div data-aos="fade-up" className="card shadow p-3 mb-5 rounded bg-base" >
                        <h3 className="card-header text-center text-white">History of International KAI KAN ASHIHARA KARATE.</h3>
                        <img className="card-img-top" src={img} alt="Card  cap" />
                    </div>

                    <div data-aos="fade-up" class="card shadow p-3 mb-5 bg-white rounded">

                        <div class="card-body">

                            <p class="card-text">
                                <p style={{ marginRight: '0in', marginLeft: '0in', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '6.0pt', marginBottom: '6.0pt', lineHeight: '150%', textAlign: 'justify', background: 'white' }}><span style={{ color: 'black' }}>The first worldwide public display of Sabaki was in the documentary on the first Kyokushin World Open Tournament in 1975. Shihan Hideyuki Ashihara (senior instructor) displayed his Sabaki skills to defeat multiple attackers in a demonstration at the start of documentary. In 1980, Hideyuki Ashihara established his own style of karate forming the New International Karate Organisation (NIKO) - Ashihara Karate Kaikan and became the Kancho (Grandmaster) of NIKO. The Honbu (headquarters) of Ashihara is in Matsuyama City. Kancho Ashihara appointed senior student Joko Ninomiya and tournament champion, who was already based in the United States, as Shihan (senior instructor) for the United States.</span></p>

                                {
                                    this.state.readMore && (
                                        <div>
                                            <p style={{ marginRight: '0in', marginLeft: '0in', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0in', marginBottom: '8.0pt', lineHeight: '150%', textAlign: 'justify', textIndent: '.5in' }}><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white' }}>Kancho Ashihara students include former US head instructor Joko Ninomiya (Kyokushin 1978 All Japan Tournament champion and Kyokushin 1975 World Open finalist) founder of Enshin Karate, former Honbu senior instructor Makoto Hirohara (Sabaki US Open Karate Challenge Tournament Champion) founder of Shintaiikudo and former Honbu senior instructor Hiroshi Harada founder of Josui International Karate. Foreign students include David Cook, founder of Tsu Shin Gen &amp; Hoosain Narker, founder of the Ashihara Karate International organization</span></p>

                                            <div style={{ marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                                                <ul style={{ marginBottom: '0in', listStyleType: 'disc' }}>
                                                    <li style={{ marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ color: 'black', fontSize: '12.0pt', background: 'white' }}>Today</span></strong></li>
                                                </ul>
                                            </div>
                                            <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify', background: 'white' }}><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black' }}>Ashihara established branches in Japan and spread throughout the world. Kancho Ashihara died in 1995 at 50 years of age due to illness before his death he named his young son Hidenori to be his successor as Kancho of NIKO.&nbsp;</span></p>
                                            <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify', textIndent: '.5in', background: 'white' }}><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black' }}>Karate schools derived from NIKO, include Enshin in the United States, Shintaiikudo in Japan, Josui International Karate Organisation in Japan, Ashihara International Karate Organization (AIKO) in Holland, International Ashihara Karate Association (IAKA) in Russia, Ashihara Karate International (AKI) in South Africa, Ashihara BudoKai in Russia and TSG – Ashihara International Karate in Sweden.</span></p>
                                            <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify', textIndent: '.5in', background: 'white' }}><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black' }}>Famous karateka include retired Dutch K-1 World Champion and Glory Champion kickboxer <a href="https://en.wikipedia.org/wiki/Semmy_Schilt" title="Semmy Schilt"><span style={{ color: 'black', textDecoration: 'none' }}>Semmy Schilt</span></a>, Georgian Glory kickboxer&nbsp;</span><span style={{ color: 'black' }}><a href="https://en.wikipedia.org/wiki/Davit_Kiria" title="Davit Kiria"><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', textDecoration: 'none' }}>Davit Kiria</span></a></span><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black' }}>, Danish UFC fighter&nbsp;</span><span style={{ color: 'black' }}><a href="https://en.wikipedia.org/wiki/Nicolas_Dalby" title="Nicolas Dalby"><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', textDecoration: 'none' }}>Nicolas Dalby</span></a></span><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black' }}>, Russian UFC fighter&nbsp;</span><span style={{ color: 'black' }}><a href="https://en.wikipedia.org/wiki/Alexander_Volkov_(fighter)" title="Alexander Volkov (fighter)"><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', textDecoration: 'none' }}>Alexander Volkov</span></a></span><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black' }}>&nbsp;and Russian Andrey Levandin five time Sabaki Challenge Spirit champion (2005–2010).</span></p>
                                        </div>
                                    )
                                }
                                <button onClick={this.readMore} className="btn btn-primary">{this.state.readMore ? 'Read Less' : 'Read More'}</button>
                            </p>
                        </div>

                    </div>
                </div>


            </section>
        );
    }
}

export default History;