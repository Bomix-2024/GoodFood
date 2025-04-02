import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import ScrollToSelector from "@/components/ScrollToSelector";
import Services from "@/components/Services";
import Survey from "@/components/Survey";
import Translate from "@/components/Translate";
import WhatsappBubble from "@/components/WhatsappBubble";

export default function Home() {


  return (
    <main>
      <Hero />
      <Featured />
      <Menu />
      <Survey />
      <ScrollToSelector />
      <WhatsappBubble config={{
                whatsapp_chat: {
                    agents: [
                        {
                            image: "logo.png",
                            name: "SweetLife",
                            role: "Atendimento",
                            number: "5521998833313",
                            default_msg: "Olá! Estou interessado nos produtos da Good Food. Poderia me ajudar?"
                        }
                    ]
                }
            }} />
    </main>
  );
}
