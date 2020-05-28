import React, {useState}from "react";
import ema from "emailjs-com"

/*class contactus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pesan: "", name: "", nohp: "", email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNoHp = this.onChangeNoHp.bind(this);
    this.onChangePesan = this.onChangePesan.bind(this);
  } */

  const useContactus = () => {
    const [pesan, setPesan] = useState("")
    const [nama, setNama] = useState("")
    const [hp, setHp] = useState("")
    const [email, setEmail] = useState("")

  const kirim = () => {
      
    if (pesan && hp && nama && email){
      ema.send("gmail", "template_lCY2lIXq", {
        reply_to: email,
        from_name: nama,
        to_name: hp,
        message_html: pesan,
      }, "user_vRnszY7XvbiXKd7kAiewn").then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("kirim pesan berhasil!")
        },
        function (error) {
          console.log("FAILED...", error);
          alert("kirim pesan gagal!")
        }
      );
    } else {
      alert("inputan masih belum dissi semua")
    }
   
  }

    return (
      <div>
        <h1 className="title" style={{marginBottom:"25px"}}>Contact Me</h1>
        <div className="contact-us ">
            <div className="col-md-6 col-sm-6 col-xs-12 styled-input">
              <input
                type="text"
                name="name"
                onChange={(e) => setNama(e.target.value)}
                value={nama}
                placeholder="Name"
                required=""
              />
            </div>

            <div className="col-sm-6 col-xs-12 styled-input xxx">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required=""
              />
            </div>

            <div className="col-md-6 col-sm-12 col-xs-12 styled-input">
              <input
                type="text"
                name="nohp"
                placeholder="phone"
                onChange={(e) => {setHp(e.target.value)
                  console.log(hp) }}
                value={hp}
                required=""
              />
            </div>
            <div className="clearfix"> </div>
            <div className="col-lg-10 col-md-12 styled-input">
              <textarea
                name="pesan"
                placeholder="Message"
                onChange={(e) => {setPesan(e.target.value)
                   console.log(pesan) }}
                value={pesan}
                required=""
              ></textarea>
            </div>
            <div>
              <div className="click">
                <input type="submit" value="SEND" onClick={kirim} />
              </div>
            </div>
        </div>
      </div>
    );
  }
export default useContactus;
