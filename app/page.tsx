const services = [
  { no: '01', en: 'GARDEN', title: '庭木・植栽デザイン', image: '/images/garden.jpg', text: '新築住宅の植栽から、今ある庭のリニューアルまで。建物のデザインや、そこで暮らす人のライフスタイルに合わせて、植物を選びます。' },
  { no: '02', en: 'MAINTENANCE', title: '庭のメンテナンス', image: '/images/maintenance.jpg', text: '植物は、植えて終わりではありません。剪定や植栽管理など、季節に合わせたメンテナンスで、庭の美しさを長く保ちます。' },
  { no: '03', en: 'PLANTS', title: '観葉植物・植物販売', image: '/images/plants.jpg', text: '庭がなくても、植物のある暮らしは楽しめます。暮らしに取り入れやすい植物を、オンラインでも気軽に。' },
];

const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_ASSET_ORIGIN || process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;

export default function Home() {
  return (
    <main>
      <section className="hero">
        <img className="hero-photo" src={asset('/images/hero.jpg')} alt="緑あふれる庭と室内" />
        <div className="hero-shade" />
        <header className="brand"><span className="mark">⌁</span><span>Green Harmony<small>GARDEN / PLANTS / MAINTENANCE</small></span></header>
        <div className="hero-copy">
          <h1>緑があるだけで、<br />家で過ごす時間は<br />少し豊かになる。</h1>
          <p>朝、カーテンを開けたときに見える木々。<br />休日、庭でコーヒーを飲む時間。<br />部屋に置いた植物に、新しい葉が出てくる瞬間。</p>
          <p>Green Harmonyが提案したいのは、<br />ただ植物を植えることではありません。</p>
          <div className="hero-line">「植物のある暮らし」そのもの。</div>
          <p>庭から、部屋の中まで。植物を通して、<br />毎日の暮らしを少し豊かにします。</p>
        </div>
        <div className="hero-actions">
          <a href="#contact" className="button button-green">♧　庭づくりを相談する　›</a>
          <a href="#plants" className="button button-light">🛒　植物を見てみる　›</a>
        </div>
      </section>

      <section className="section services">
        <p className="eyebrow">SERVICE</p>
        <h2>Green Harmonyができること</h2>
        <div className="service-list">
          {services.map((service) => (
            <article className="service" key={service.no}>
              <div className="service-copy">
                <p className="service-no">{service.no}. &nbsp;{service.en}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact">詳しく見る　›</a>
              </div>
              <img src={asset(service.image)} alt={service.title} />
            </article>
          ))}
        </div>
      </section>

      <section className="section concept">
        <p className="eyebrow">CONCEPT</p>
        <h2>「植える」だけじゃない。<br />暮らしまでデザインする。</h2>
        <p>植物は、家の印象をつくるもの。そして、暮らしの時間をつくるもの。<br />だからGreen Harmonyでは、「植物 × 建物 × 暮らし」の3つのバランスを大切にしています。</p>
        <div className="concept-grid">
          <img src={asset('/images/concept.jpg')} alt="庭で過ごす家族" />
          <div className="concept-points">
            <div><small>⌂　HOUSE</small><h3>建物との調和</h3><p>外観・素材・色・光。住宅そのものの魅力を引き立てる植栽を。</p></div>
            <div><small>♙　LIFE</small><h3>暮らしとの調和</h3><p>家族構成や、庭で過ごしたい時間まで考えて。</p></div>
            <div><small>♧　SEASON</small><h3>季節との調和</h3><p>春夏秋冬、時間とともに表情が変わる庭へ。</p></div>
          </div>
        </div>
      </section>

      <section className="section design">
        <p className="eyebrow">GARDEN DESIGN</p>
        <h2>あなたの家に、<br />ちょうどいい緑を。</h2>
        <p className="lead">同じ庭は、一つとしてありません。だから、決まった形を当てはめるのではなく、一軒一軒に合わせてデザインします。</p>
        <div className="case-list">
          <article><img src={asset('/images/harmony-house.jpg')} alt="自然な雰囲気の庭" /><div><span>CASE 01</span><h3>NATURAL</h3><p>オリーブやユーカリなど、自然な雰囲気の植栽。</p></div></article>
          <article><img src={asset('/images/harmony-life.jpg')} alt="モダンな住宅の植栽" /><div><span>CASE 02</span><h3>MODERN</h3><p>直線的な住宅に合わせた、シンプルで洗練された植栽。</p></div></article>
          <article><img src={asset('/images/harmony-season.jpg')} alt="ドライガーデン" /><div><span>CASE 03</span><h3>DRY GARDEN</h3><p>アガベや石を組み合わせた、湘南の空気感にも合う庭。</p></div></article>
        </div>
      </section>

      <section className="before-after">
        <div className="section">
          <p className="eyebrow">BEFORE / AFTER</p>
          <h2>庭が変わると、<br />家の表情も変わる。</h2>
          <div className="compare">
            <div><span>BEFORE</span><img src={asset('/images/garden.jpg')} alt="施工前の庭" /><p>植物が少なく、少し寂しい印象だったエントランス。</p></div>
            <div><span>AFTER</span><img src={asset('/images/harmony-house.jpg')} alt="施工後の庭" /><p>住宅とのバランスを考えた植栽で、自然と視線が集まるエントランスへ。</p></div>
          </div>
        </div>
      </section>

      <section className="section maintenance-section">
        <p className="eyebrow">MAINTENANCE</p>
        <h2>つくって終わりではなく、<br />育てていく。</h2>
        <p className="lead">植物は成長します。だから庭も、時間とともに変化していきます。庭づくりだけではなく、その後のメンテナンスまでご提案します。</p>
        <div className="maintenance-layout">
          <img src={asset('/images/maintenance.jpg')} alt="庭木のメンテナンス" />
          <div className="menu-list">
            <p className="eyebrow">MENU</p>
            <div><b>剪定</b><span>植木の状態に合わせた剪定。</span></div>
            <div><b>植栽管理</b><span>植物の成長を見ながら、美しい状態を維持。</span></div>
            <div><b>季節のメンテナンス</b><span>季節ごとの庭の状態をチェック。</span></div>
            <div><b>定期管理</b><span>忙しい方でも、継続して庭を楽しめるプラン。</span></div>
          </div>
        </div>
        <blockquote>「忙しくても、<br />緑のある暮らしを。」</blockquote>
      </section>

      <section className="shop" id="plants">
        <div className="section shop-inner">
          <div><p className="eyebrow">PLANTS SHOP</p><h2>部屋にも、<br />緑をひとつ。</h2><p className="lead">庭がなくても、植物のある暮らしは楽しめます。インテリアとの相性も考えた観葉植物をご用意しています。</p></div>
          <img src={asset('/images/plants.jpg')} alt="室内の観葉植物" />
          <div className="plants-grid">
            {['OLIVE','FICUS','AGAVE','EUCALYPTUS'].map((plant, i) => <article key={plant}><img src={asset(['/images/harmony-house.jpg','/images/plants.jpg','/images/harmony-season.jpg','/images/harmony-life.jpg'][i])} alt={plant} /><h3>{plant}</h3><p>{['ナチュラルな空間に。','リビングのアクセントに。','モダンな空間にも。','爽やかな空気感に。'][i]}</p></article>)}
          </div>
          <a className="shop-button" href="#contact">🛒　オンラインショップを見る　›</a>
        </div>
      </section>

      <section className="section values">
        <p className="eyebrow">WHY GREEN HARMONY</p>
        <h2>Green Harmonyが<br />大切にしていること。</h2>
        <div className="value-grid">
          <article><span>01</span><h3>一つひとつ、丁寧に。</h3><p>家も、庭も、暮らし方も一つとして同じではありません。その場所に合った植物を考えます。</p></article>
          <article><span>02</span><h3>数年後まで考える。</h3><p>植えた瞬間だけではなく、植物が成長した未来まで考えた植栽計画を。</p></article>
          <article><span>03</span><h3>気軽に、楽しんでほしい。</h3><p>大きな庭づくりから、一鉢の植物まで。植物をもっと身近に。</p></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section contact-inner">
          <div><p className="eyebrow">GARDEN CONSULTATION</p><h2>庭をつくるなら、<br />まずは話してみませんか？</h2><p>新築の庭、植物選び、今ある庭のリニューアル。まだイメージが固まっていない段階でも大丈夫です。</p><a href="mailto:hello@example.com" className="button button-light">庭づくり・見積もりを相談する　›</a></div>
          <div className="faq"><p className="eyebrow">FAQ</p><h3>よくあるご質問</h3><details><summary>新築の庭づくりから相談できますか？</summary><p>はい。住宅の雰囲気や暮らし方に合わせた植栽デザインからご相談いただけます。</p></details><details><summary>小さな庭でもお願いできますか？</summary><p>もちろん可能です。限られたスペースでも、植物の種類や配置を工夫してご提案します。</p></details><details><summary>植えた後のメンテナンスもできますか？</summary><p>はい。剪定や植栽管理など、庭の状態に合わせてご提案します。</p></details></div>
        </div>
      </section>

      <footer><div><b>Green Harmony</b><small>GARDEN / PLANTS / MAINTENANCE</small></div><p>暮らしに、もう少し緑を。</p><span>© Green Harmony</span></footer>
    </main>
  );
}
