/**
 * APPAS AMOBLAMIENTOS — EXPERIENCIA INTERACTIVA & FUNCIONALIDADES
 * Arquitectura estática sin dependencias externas. Compatible con GitHub Pages.
 */

(function () {
  'use strict';

  document.documentElement.classList.add('js-enabled');

  /* ==========================================================================
     1. CATÁLOGO DE TRABAJOS DEL PORTFOLIO (Procedencia: carpeta img/)
     ========================================================================== */
  const PORTFOLIO_ITEMS = [
    {
      index: 0,
      src: 'img/imagen6.jpg',
      alt: 'Revestimiento de mesada de cocina en L sobre mampostería fabricado por APPAS Amoblamientos',
      category: 'COCINAS',
      title: 'Revestimiento de mesada de cocina',
      description: 'Mesada de cocina en "L" sobre mampostería con frentes en melamina veta horizontal, perfil gola negro y cajonera a medida.',
      quoteSector: 'Cocina',
      quoteMaterial: 'Melamina',
      quoteItem: 'Revestimiento de mesada de cocina en L sobre mampostería'
    },
    {
      index: 1,
      src: 'img/imagen3.jpg',
      alt: 'Isla de cocina laminada con tapa lustrada fabricada por APPAS Amoblamientos',
      category: 'MESADAS E ISLAS',
      title: 'Isla de cocina',
      description: 'Isla laminada en color blanco con tapa de madera lustrada de alto brillo, cajones con guías telescópicas y estantería lateral.',
      quoteSector: 'Cocina',
      quoteMaterial: 'MaderaMaciza',
      quoteItem: 'Isla de cocina laminada con tapa lustrada'
    },
    {
      index: 2,
      src: 'img/imagen9.jpg',
      alt: 'Placard de embutir a medida con puertas corredizas fabricado por APPAS Amoblamientos',
      category: 'PLACARES Y DORMITORIOS',
      title: 'Placard de embutir',
      description: 'Placard a medida con puertas corredizas en perfilería de aluminio, interior en melamina blanca, estantes, barral y cajonera.',
      quoteSector: 'Dormitorio',
      quoteMaterial: 'Melamina',
      quoteItem: 'Placard de embutir con puertas corredizas'
    },
    {
      index: 3,
      src: 'img/imagen4.jpg',
      alt: 'Mesada de cocina en L laminada cemento fabricada por APPAS Amoblamientos',
      category: 'COCINAS',
      title: 'Mesada de cocina',
      description: 'Mesada en "L", laminada en acabado cemento con perfiles tiradores de aluminio continuos y cajonera profunda.',
      quoteSector: 'Cocina',
      quoteMaterial: 'Melamina',
      quoteItem: 'Bajo mesada en L laminado cemento'
    },
    {
      index: 4,
      src: 'img/imagen5.jpg',
      alt: 'Mueble combinado tocador y espacio de guardado para dormitorio laminado lino terra',
      category: 'PLACARES Y DORMITORIOS',
      title: 'Mueble combinado',
      description: 'Tocador y espacio de guardado para dormitorio, laminado lino terra con placard de dos puertas, cajonera de 4 cajones y estantes.',
      quoteSector: 'Dormitorio',
      quoteMaterial: 'Melamina',
      quoteItem: 'Mueble combinado tocador y guardado para dormitorio'
    },
    {
      index: 5,
      src: 'img/imagen10.jpg',
      alt: 'Mesa para comedor lustrada para 8 personas fabricada por APPAS Amoblamientos',
      category: 'MESAS Y COMEDOR',
      title: 'Mesa para comedor',
      description: 'Mesa lustrada para "8" personas con doble base estructural y terminación artesanal de alto brillo.',
      quoteSector: 'Comedor/Living',
      quoteMaterial: 'MDF/Enchapado',
      quoteItem: 'Mesa de comedor lustrada para 8 personas'
    },
    {
      index: 6,
      src: 'img/imagen7.jpg',
      alt: 'Isla de cocina laminada con desayunador fabricada por APPAS Amoblamientos',
      category: 'MESADAS E ISLAS',
      title: 'Isla de cocina',
      description: 'Isla laminada con desayunador, equipada con 3 cajones con correderas telescópicas, 3 puertas inferiores y estantes internos.',
      quoteSector: 'Cocina',
      quoteMaterial: 'Melamina',
      quoteItem: 'Isla de cocina laminada con desayunador'
    },
    {
      index: 7,
      src: 'img/imagen2.jpg',
      alt: 'Mueble multiuso laminado para baño fabricado por APPAS Amoblamientos',
      category: 'BAÑOS Y MULTIUSO',
      title: 'Mueble multiuso',
      description: 'Mueble laminado para baño u organizador vertical con nicho superior abierto, dos cajones telescópicos y puerta inferior.',
      quoteSector: 'Baño',
      quoteMaterial: 'Melamina',
      quoteItem: 'Mueble multiuso laminado para baño'
    },
    {
      index: 8,
      src: 'img/imagen8.jpg',
      alt: 'Isla desayunero con estantes y barra desayunadora fabricada por APPAS Amoblamientos',
      category: 'MESADAS E ISLAS',
      title: 'Isla desayunero',
      description: 'Isla con estantes y barra desayunadora acompañada por banquetas altas de madera natural.',
      quoteSector: 'Cocina',
      quoteMaterial: 'Melamina',
      quoteItem: 'Isla desayunero con barra'
    },
    {
      index: 9,
      src: 'img/imagen1.jpg',
      alt: 'Mesada de cocina de pino compensado sin lustre fabricada por APPAS Amoblamientos',
      category: 'COCINAS',
      title: 'Mesada de cocina',
      description: 'Mesada de pino compensado sin lustre con cajonera de 3 cajones, herrajes metálicos y estante interior.',
      quoteSector: 'Cocina',
      quoteMaterial: 'MaderaComprensada',
      quoteItem: 'Mesada de cocina de pino compensado'
    },
    {
      index: 10,
      src: 'img/imagen11.jpg',
      alt: 'Mesa de madera maciza con tapa de vidrio repartido fabricada por APPAS Amoblamientos',
      category: 'MESAS Y LIVING',
      title: 'Mesa con vidrio repartido',
      description: 'Mesa principal en madera maciza lustrada con estructura superior de 6 paños de vidrio repartido.',
      quoteSector: 'Comedor/Living',
      quoteMaterial: 'MaderaMaciza',
      quoteItem: 'Mesa de madera maciza con vidrio repartido'
    },
    {
      index: 11,
      src: 'img/imagen13.jpg',
      alt: 'Modular y panel de TV en madera enchapada con varillado vertical fabricado por APPAS',
      category: 'MESAS Y LIVING',
      title: 'Modular y panel de TV',
      description: 'Mueble de living integral con panel trasero varillado, cajoneras laterales, puertas y estantes centrales.',
      quoteSector: 'Comedor/Living',
      quoteMaterial: 'MDF/Enchapado',
      quoteItem: 'Modular y panel de TV con varillado'
    },
    {
      index: 12,
      src: 'img/imagen16.jpg',
      alt: 'Bajo mesada y alacena de cocina completa en melamina negra fabricada por APPAS',
      category: 'COCINAS',
      title: 'Bajo mesada y alacena completa',
      description: 'Equipamiento integral de cocina con bajo mesada, cajonera y alacena superior a medida con módulo sobre heladera.',
      quoteSector: 'Cocina',
      quoteMaterial: 'Melamina',
      quoteItem: 'Bajo mesada y alacena de cocina completa'
    },
    {
      index: 13,
      src: 'img/imagen14.jpg',
      alt: 'Placard de piso a techo con puertas corredizas e interior completo fabricado por APPAS',
      category: 'PLACARES Y DORMITORIOS',
      title: 'Placard de piso a techo',
      description: 'Placard con puertas corredizas e interior distribuido con baulera superior, barral, cajonera y columna de estantes.',
      quoteSector: 'Dormitorio',
      quoteMaterial: 'Melamina',
      quoteItem: 'Placard de piso a techo con puertas corredizas'
    },
    {
      index: 14,
      src: 'img/imagen19.jpg',
      alt: 'Mueble vanitory y tocador moldurado blanco a medida con columnas espejadas fabricado por APPAS',
      category: 'BAÑOS Y TOCADORES',
      title: 'Tocador y guardado moldurado',
      description: 'Conjunto diseñado a medida entre ventanas con columnas espejadas, cajoneras molduradas y bajo mesada.',
      quoteSector: 'Baño',
      quoteMaterial: 'MDF/Enchapado',
      quoteItem: 'Mueble tocador / vanitory moldurado a medida'
    },
    {
      index: 15,
      src: 'img/imagen12.jpg',
      alt: 'Cama cucheta en L con cajonera de 4 cajones y escalera fabricada por APPAS',
      category: 'PLACARES Y DORMITORIOS',
      title: 'Cama cucheta en "L" con cajonera',
      description: 'Cama superpuesta funcional con baranda superior, escalera firme y módulo lateral de 4 cajones amplios.',
      quoteSector: 'Dormitorio',
      quoteMaterial: 'MDF/Enchapado',
      quoteItem: 'Cama cucheta en L con cajonera integrada'
    },
    {
      index: 16,
      src: 'img/imagen15.jpg',
      alt: 'Escritorio a medida combinado en melamina blanca y tapa madera con cajonera fabricado por APPAS',
      category: 'DORMITORIOS Y ESTUDIO',
      title: 'Escritorio a medida',
      description: 'Escritorio para dormitorio u oficina con cajón central deslizable y cajonera lateral de 3 cajones profundos.',
      quoteSector: 'Oficina',
      quoteMaterial: 'Melamina',
      quoteItem: 'Escritorio a medida con cajonera'
    },
    {
      index: 17,
      src: 'img/imagen17.jpg',
      alt: 'Cama cucheta en madera natural con barandas fabricada por APPAS',
      category: 'PLACARES Y DORMITORIOS',
      title: 'Cama cucheta con barandas',
      description: 'Cama doble superpuesta en madera natural con barandas de protección en ambos niveles y estructura reforzada.',
      quoteSector: 'Dormitorio',
      quoteMaterial: 'MaderaMaciza',
      quoteItem: 'Cama cucheta en madera natural con barandas'
    },
    {
      index: 18,
      src: 'img/imagen18.jpg',
      alt: 'Estanterías flotantes exhibidoras para local comercial fabricadas por APPAS',
      category: 'MOBILIARIO COMERCIAL',
      title: 'Exhibidores para local comercial',
      description: 'Estantes flotantes de espesor grueso fabricados a medida para exhibición comercial de calzado e indumentaria.',
      quoteSector: 'Comercio',
      quoteMaterial: 'Melamina',
      quoteItem: 'Estanterías exhibidoras para local comercial'
    },
    {
      index: 19,
      src: 'img/imagen20.jpg',
      alt: 'Puerta corrediza estilo granero laqueada blanca con herraje de hierro negro fabricada por APPAS',
      category: 'TRABAJOS ESPECIALES',
      title: 'Puerta corrediza estilo granero',
      description: 'Puerta corrediza a medida con riel superior y carros de hierro negro a la vista, ideal para dividir ambientes con estilo.',
      quoteSector: 'Otro',
      quoteMaterial: 'MaderaMaciza',
      quoteItem: 'Puerta corrediza estilo granero a medida'
    }
  ];

  /* Datos para cada etapa de "DEL ORIGEN AL DETALLE" */
  const PROCESS_STAGES_DATA = {
    1: {
      hudCode: 'ETAPA 01 / 05 · MATERIA PRIMA',
      progress: '20%',
      photoSrc: 'img/fondoDescrip.jpg',
      photoAlt: 'Textura y vetas de madera natural seleccionada',
      title: 'Vetas nobles y placas de primera línea',
      caption: 'Madera maciza, pino compensado, MDF enchapado y melaminas texturadas.',
      spec: 'Selección de vetas, placas de melamina, MDF y madera maciza'
    },
    2: {
      hudCode: 'ETAPA 02 / 05 · DISEÑO Y PLANO TÉCNICO',
      progress: '40%',
      photoSrc: 'img/imagen5.jpg',
      photoAlt: 'Mueble combinado de dormitorio diseñado a medida en taller APPAS',
      title: 'Diseño adaptado a tu espacio',
      caption: 'Planificación milimétrica de cajoneras, puertas, herrajes y guardado.',
      spec: 'Relevamiento de medidas, distribución interior y planteo en L o lineal'
    },
    3: {
      hudCode: 'ETAPA 03 / 05 · FABRICACIÓN EN TALLER',
      progress: '60%',
      photoSrc: 'img/imagen4.jpg',
      photoAlt: 'Bajo mesada en L laminado cemento en el taller de APPAS',
      title: 'Corte preciso, cantos y lustrado',
      caption: 'Mecanizado propio con más de 60 años de oficio en Rafaela.',
      spec: 'Escuadrado de placas, pegado de cantos, perforado y lustre artesanal'
    },
    4: {
      hudCode: 'ETAPA 04 / 05 · ENSAMBLAJE Y HERRAJES',
      progress: '80%',
      photoSrc: 'img/imagen1.jpg',
      photoAlt: 'Estructura de mesada en pino compensado ensamblada en taller APPAS',
      title: 'Unión firme y correderas telescópicas',
      caption: 'Cada módulo se prueba íntegramente en taller antes de salir a obra.',
      spec: 'Ensamble escuadrado, guías telescópicas, bisagras y perfilería de aluminio'
    },
    5: {
      hudCode: 'ETAPA 05 / 05 · RESULTADO FINAL',
      progress: '100%',
      photoSrc: 'img/imagen3.jpg',
      photoAlt: 'Isla de cocina terminada con tapa lustrada instalada por APPAS',
      title: 'El mueble terminado en tu hogar',
      caption: 'Calidad duradera respaldada por más de 60 años de trayectoria.',
      spec: 'Entrega, nivelación sobre mampostería e instalación final'
    }
  };

  /* ==========================================================================
     2. MENÚ MÓVIL Y NAVEGACIÓN STICKY
     ========================================================================== */
  const mobileDrawer = document.getElementById('mobile-menu');
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const mobileBackdrop = document.getElementById('mobileMenuBackdrop');
  const mobileNavLinks = document.querySelectorAll('#mobile-menu a');

  function toggleMenu(forceState) {
    if (!mobileDrawer) return;
    const isOpen = typeof forceState === 'boolean'
      ? forceState
      : !mobileDrawer.classList.contains('is-open');

    mobileDrawer.classList.toggle('is-open', isOpen);
    mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
    if (menuToggleBtn) {
      menuToggleBtn.setAttribute('aria-expanded', String(isOpen));
    }
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  // Exponer globalmente por compatibilidad con llamadas legacy si existieran
  window.toggleMenu = toggleMenu;

  if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', function () {
      toggleMenu();
    });
  }
  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', function () {
      toggleMenu(false);
    });
  }
  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', function () {
      toggleMenu(false);
    });
  }
  mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      toggleMenu(false);
    });
  });

  /* Header Sticky, Progreso de Scroll y Sección Activa */
  const siteHeader = document.getElementById('siteHeader');
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const trackedSections = ['inicio', 'sobre-nosotros', 'proceso', 'productos', 'servicios', 'pedidos', 'contacto']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  function updateScrollIndicators() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = progress.toFixed(1) + '%';
    }

    if (siteHeader) {
      siteHeader.classList.toggle('is-scrolled', scrollTop > 24);
    }

    // Actualizar link activo del menú
    let currentSectionId = 'inicio';
    const offsetTrigger = scrollTop + 180;
    for (let i = 0; i < trackedSections.length; i++) {
      const sec = trackedSections[i];
      if (sec.offsetTop <= offsetTrigger) {
        currentSectionId = sec.id;
      }
    }

    navLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === '#' + currentSectionId);
    });
  }

  window.addEventListener('scroll', updateScrollIndicators, { passive: true });
  updateScrollIndicators();

  /* ==========================================================================
     3. HERO SHOWCASE INTERACTIVO + CANVAS ATMOSFÉRICO (ESTILO SEASGEOSCIENCES)
     ========================================================================== */
  const heroMainImage = document.getElementById('heroMainImage');
  const heroShowcaseMaterial = document.getElementById('heroShowcaseMaterial');
  const heroShowcaseTitle = document.getElementById('heroShowcaseTitle');
  const heroShowcaseDesc = document.getElementById('heroShowcaseDesc');
  const showcaseThumbs = document.querySelectorAll('.showcase-thumb');

  showcaseThumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      const imgSrc = thumb.getAttribute('data-img');
      const material = thumb.getAttribute('data-material');
      const title = thumb.getAttribute('data-title');
      const desc = thumb.getAttribute('data-desc');

      showcaseThumbs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      thumb.classList.add('active');
      thumb.setAttribute('aria-selected', 'true');

      if (heroMainImage && imgSrc) {
        heroMainImage.style.opacity = '0.35';
        setTimeout(function () {
          heroMainImage.src = imgSrc;
          heroMainImage.alt = title + ' — APPAS Amoblamientos';
          heroMainImage.style.opacity = '1';
        }, 120);
      }
      if (heroShowcaseMaterial && material) heroShowcaseMaterial.textContent = material;
      if (heroShowcaseTitle && title) heroShowcaseTitle.textContent = title;
      if (heroShowcaseDesc && desc) heroShowcaseDesc.textContent = desc;
    });
  });

  // Canvas Atmosférico del Hero (Partículas de aserrín dorado en haz de luz + nodos técnicos)
  const heroCanvas = document.getElementById('heroAmbientCanvas');
  const heroSectionEl = document.getElementById('inicio');
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (heroCanvas && heroCanvas.getContext && !prefersReducedMotion) {
    const ctx = heroCanvas.getContext('2d');
    let canvasWidth = 0;
    let canvasHeight = 0;
    let isHeroVisible = true;
    let pointerX = 0.5;
    let pointerY = 0.5;

    function resizeHeroCanvas() {
      const rect = heroCanvas.parentElement ? heroCanvas.parentElement.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
      canvasWidth = Math.max(320, Math.floor(rect.width));
      canvasHeight = Math.max(400, Math.floor(rect.height));
      heroCanvas.width = canvasWidth;
      heroCanvas.height = canvasHeight;
    }

    resizeHeroCanvas();
    window.addEventListener('resize', resizeHeroCanvas, { passive: true });

    if (heroSectionEl) {
      heroSectionEl.addEventListener('mousemove', function (e) {
        const rect = heroSectionEl.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          pointerX = (e.clientX - rect.left) / rect.width;
          pointerY = (e.clientY - rect.top) / rect.height;
        }
      }, { passive: true });
    }

    const particleCount = window.innerWidth < 768 ? 24 : 46;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const isWarmDust = i % 3 !== 0;
      particles.push({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        radius: isWarmDust ? (Math.random() * 2.1 + 0.7) : (Math.random() * 1.6 + 0.6),
        vx: (Math.random() - 0.42) * 0.28,
        vy: -(Math.random() * 0.32 + 0.08),
        alpha: Math.random() * 0.55 + 0.18,
        phase: Math.random() * Math.PI * 2,
        isWarm: isWarmDust
      });
    }

    if ('IntersectionObserver' in window && heroSectionEl) {
      const heroVisObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          isHeroVisible = entry.isIntersecting;
        });
      }, { threshold: 0.05 });
      heroVisObserver.observe(heroSectionEl);
    }

    function renderHeroCanvas() {
      if (isHeroVisible && canvasWidth > 0 && canvasHeight > 0) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        const offsetX = (pointerX - 0.5) * 18;
        const offsetY = (pointerY - 0.5) * 14;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.phase += 0.018;

          if (p.y < -10) p.y = canvasHeight + 10;
          if (p.x < -10) p.x = canvasWidth + 10;
          if (p.x > canvasWidth + 10) p.x = -10;

          const drawX = p.x + offsetX * (p.isWarm ? 0.6 : 0.3);
          const drawY = p.y + offsetY * (p.isWarm ? 0.6 : 0.3);
          const currentAlpha = p.alpha * (0.65 + 0.35 * Math.sin(p.phase));

          ctx.beginPath();
          ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
          if (p.isWarm) {
            ctx.fillStyle = 'rgba(253, 186, 116, ' + currentAlpha.toFixed(3) + ')';
          } else {
            ctx.fillStyle = 'rgba(147, 197, 253, ' + (currentAlpha * 0.85).toFixed(3) + ')';
          }
          ctx.fill();

          // Conectar sutilmente nodos técnicos azules cercanos
          if (!p.isWarm) {
            for (let j = i + 1; j < particles.length; j++) {
              const p2 = particles[j];
              if (!p2.isWarm) {
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 135) {
                  const lineAlpha = (1 - dist / 135) * 0.11;
                  ctx.beginPath();
                  ctx.moveTo(drawX, drawY);
                  ctx.lineTo(p2.x + offsetX * 0.3, p2.y + offsetY * 0.3);
                  ctx.strokeStyle = 'rgba(147, 197, 253, ' + lineAlpha.toFixed(3) + ')';
                  ctx.lineWidth = 0.75;
                  ctx.stroke();
                }
              }
            }
          }
        }
      }
      window.requestAnimationFrame(renderHeroCanvas);
    }

    window.requestAnimationFrame(renderHeroCanvas);
  }

  /* ==========================================================================
     4. SCROLL NARRATIVO: "DEL ORIGEN AL DETALLE"
     ========================================================================== */
  const blueprintStage = document.getElementById('blueprintStage');
  const stageHudCode = document.getElementById('stageHudCode');
  const stageProgressPercent = document.getElementById('stageProgressPercent');
  const blueprintProgressFill = document.getElementById('blueprintProgressFill');
  const stageRealPhotoImg = document.getElementById('stageRealPhotoImg');
  const stageRealBadge = document.getElementById('stageRealBadge');
  const stageRealTitle = document.getElementById('stageRealTitle');
  const stageRealCaption = document.getElementById('stageRealCaption');
  const stageSpecText = document.getElementById('stageSpecText');
  const stageTabs = document.querySelectorAll('.stage-tab');
  const processStepCards = document.querySelectorAll('.process-step-card');

  let activeProcessStage = 1;

  function setProcessStage(stageNumber) {
    const num = Number(stageNumber);
    if (!PROCESS_STAGES_DATA[num] || num === activeProcessStage) return;
    activeProcessStage = num;

    const data = PROCESS_STAGES_DATA[num];
    if (blueprintStage) {
      blueprintStage.setAttribute('data-active-stage', String(num));
    }
    if (stageHudCode) stageHudCode.textContent = data.hudCode;
    if (stageProgressPercent) stageProgressPercent.textContent = data.progress;
    if (blueprintProgressFill) blueprintProgressFill.style.width = data.progress;
    if (stageRealPhotoImg) {
      stageRealPhotoImg.src = data.photoSrc;
      stageRealPhotoImg.alt = data.photoAlt;
    }
    if (stageRealBadge) stageRealBadge.textContent = data.badge;
    if (stageRealTitle) stageRealTitle.textContent = data.title;
    if (stageRealCaption) stageRealCaption.textContent = data.caption;
    if (stageSpecText) stageSpecText.textContent = data.spec;

    stageTabs.forEach(function (tab) {
      const isCurrent = Number(tab.getAttribute('data-stage-btn')) === num;
      tab.classList.toggle('active', isCurrent);
      tab.setAttribute('aria-selected', String(isCurrent));
    });

    processStepCards.forEach(function (card) {
      const isCurrent = Number(card.getAttribute('data-stage')) === num;
      card.classList.toggle('is-active', isCurrent);
    });
  }

  // Observer para activar cada etapa al hacer scroll
  if ('IntersectionObserver' in window && processStepCards.length > 0) {
    const stepObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const stageNum = entry.target.getAttribute('data-stage');
            if (stageNum) setProcessStage(stageNum);
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0.15
      }
    );

    processStepCards.forEach(function (card) {
      stepObserver.observe(card);
    });
  }

  // Permitir clic o teclado sobre las tarjetas y pestañas de etapa
  stageTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const targetStage = tab.getAttribute('data-stage-btn');
      setProcessStage(targetStage);
      const targetCard = document.querySelector('.process-step-card[data-stage="' + targetStage + '"]');
      if (targetCard && window.innerWidth > 1120) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  processStepCards.forEach(function (card) {
    card.addEventListener('click', function () {
      setProcessStage(card.getAttribute('data-stage'));
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setProcessStage(card.getAttribute('data-stage'));
      }
    });
  });

  /* ==========================================================================
     5. FILTROS DINÁMICOS DEL PORTFOLIO EDITORIAL
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioGrid = document.getElementById('product-container');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  function applyPortfolioFilter(filterValue) {
    if (!portfolioGrid) return;

    filterButtons.forEach(function (btn) {
      const isMatch = btn.getAttribute('data-filter') === filterValue;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', String(isMatch));
    });

    portfolioGrid.classList.toggle('is-filtered', filterValue !== 'todos');

    portfolioItems.forEach(function (item) {
      const categories = (item.getAttribute('data-category') || '').split(' ');
      const shouldShow = filterValue === 'todos' || categories.indexOf(filterValue) !== -1;
      item.classList.toggle('is-hidden', !shouldShow);
    });
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filterValue = btn.getAttribute('data-filter') || 'todos';
      applyPortfolioFilter(filterValue);
    });
  });

  // Enlaces del footer que filtran directamente una especialidad
  const filterJumpLinks = document.querySelectorAll('[data-filter-jump]');
  filterJumpLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      const filterTarget = link.getAttribute('data-filter-jump');
      if (filterTarget) {
        applyPortfolioFilter(filterTarget);
      }
    });
  });

  /* ==========================================================================
     6. LIGHTBOX ACCESIBLE CON NAVEGACIÓN POR TECLADO
     ========================================================================== */
  const lightboxModal = document.getElementById('portfolioLightbox');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDescription = document.getElementById('lightboxDescription');
  const lightboxQuoteBtn = document.getElementById('lightboxQuoteBtn');

  let currentLightboxIndex = 0;
  let lastFocusedElement = null;

  function renderLightboxItem(index) {
    const total = PORTFOLIO_ITEMS.length;
    currentLightboxIndex = (index + total) % total;
    const item = PORTFOLIO_ITEMS[currentLightboxIndex];
    if (!item) return;

    if (lightboxImage) {
      lightboxImage.src = item.src;
      lightboxImage.alt = item.alt;
    }
    if (lightboxCounter) {
      const numStr = String(currentLightboxIndex + 1).padStart(2, '0');
      const totalStr = String(total).padStart(2, '0');
      lightboxCounter.textContent = numStr + ' / ' + totalStr;
    }
    if (lightboxCategory) lightboxCategory.textContent = item.category;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDescription) lightboxDescription.textContent = item.description;
  }

  function openLightbox(index) {
    if (!lightboxModal) return;
    lastFocusedElement = document.activeElement;
    renderLightboxItem(Number(index) || 0);
    lightboxModal.classList.add('is-open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (lightboxCloseBtn) lightboxCloseBtn.focus();
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('is-open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  document.querySelectorAll('[data-lightbox-index]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const idx = Number(trigger.getAttribute('data-lightbox-index'));
      openLightbox(idx);
    });
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', function () {
      renderLightboxItem(currentLightboxIndex - 1);
    });
  }
  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', function () {
      renderLightboxItem(currentLightboxIndex + 1);
    });
  }

  if (lightboxQuoteBtn) {
    lightboxQuoteBtn.addEventListener('click', function () {
      const item = PORTFOLIO_ITEMS[currentLightboxIndex];
      closeLightbox();
      if (item) {
        prefillQuoteForm(item.quoteSector, item.quoteMaterial, item.quoteItem);
      }
    });
  }

  // Eventos globales de teclado (Escape, Flechas en Lightbox y cierre de Drawer móvil)
  document.addEventListener('keydown', function (e) {
    if (lightboxModal && lightboxModal.classList.contains('is-open')) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        renderLightboxItem(currentLightboxIndex - 1);
      } else if (e.key === 'ArrowRight') {
        renderLightboxItem(currentLightboxIndex + 1);
      }
    } else if (mobileDrawer && mobileDrawer.classList.contains('is-open') && e.key === 'Escape') {
      toggleMenu(false);
    }
  });

  /* ==========================================================================
     7. CONFIGURADOR DE PRESUPUESTOS Y ENVÍO A WHATSAPP
     ========================================================================== */
  const formularioPedido = document.getElementById('formularioPedido');
  const clienteNombre = document.getElementById('clienteNombre');
  const clienteTelefono = document.getElementById('clienteTelefono');
  const tipoMadera = document.getElementById('tipoMadera');
  const otroTipoMaderaContainer = document.getElementById('otroTipoMaderaContainer');
  const otroTipoMadera = document.getElementById('otroTipoMadera');
  const tipoSector = document.getElementById('tipoSector');
  const otroSectorContainer = document.getElementById('otroSectorContainer');
  const otroSector = document.getElementById('otroSector');
  const tipoMueble = document.getElementById('tipoMueble');
  const medidasAprox = document.getElementById('medidasAprox');
  const presupuestoOrientativo = document.getElementById('presupuestoOrientativo');
  const descripcionPedido = document.getElementById('descripcionPedido');
  const fotosReferencia = document.getElementById('fotosReferencia');
  const whatsappMessagePreview = document.getElementById('whatsappMessagePreview');
  const formErrorAlert = document.getElementById('formErrorAlert');

  function formatMaterialReadable(value) {
    const map = {
      'Melamina': 'Melamina',
      'MaderaMaciza': 'Madera Maciza',
      'MaderaComprensada': 'Madera Compensada',
      'MDF/Enchapado': 'MDF / Enchapado Lustrado',
      'A definir con asesoramiento': 'material a definir con asesoramiento'
    };
    return map[value] || value;
  }

  function buildWhatsAppMessage() {
    const nombreVal = clienteNombre ? clienteNombre.value.trim() : '';
    const telVal = clienteTelefono ? clienteTelefono.value.trim() : '';

    const madVal = tipoMadera ? tipoMadera.value : 'Melamina';
    const otroMadVal = otroTipoMadera ? otroTipoMadera.value.trim() : '';
    const materialFinal = madVal === 'Otro'
      ? (otroMadVal || 'otro material a especificar')
      : formatMaterialReadable(madVal);

    const sectVal = tipoSector ? tipoSector.value : 'Cocina';
    const otroSectVal = otroSector ? otroSector.value.trim() : '';
    const sectorFinal = sectVal === 'Otro'
      ? (otroSectVal || 'otro ambiente a especificar')
      : sectVal;

    const muebleVal = tipoMueble ? tipoMueble.value.trim() : '';
    const medidasVal = medidasAprox ? medidasAprox.value.trim() : '';
    const etapaVal = presupuestoOrientativo ? presupuestoOrientativo.value.trim() : '';
    const descVal = descripcionPedido ? descripcionPedido.value.trim() : '';

    let fileNames = [];
    if (fotosReferencia && fotosReferencia.files && fotosReferencia.files.length > 0) {
      for (let i = 0; i < fotosReferencia.files.length; i++) {
        fileNames.push(fotosReferencia.files[i].name);
      }
    }

    const lines = [];
    if (nombreVal) {
      lines.push('¡Hola Omar! Soy *' + nombreVal + '*' + (telVal ? ' (' + telVal + ')' : '') + '.');
    } else {
      lines.push('¡Hola Omar! Me contacto desde la web de *APPAS Amoblamientos*.');
    }

    lines.push(
      'Estoy interesado/a en solicitar un presupuesto para un amoblamiento en el sector de *' +
      sectorFinal + '* realizado en *' + materialFinal + '*.'
    );

    if (muebleVal) {
      lines.push('• *Tipo de mueble:* ' + muebleVal);
    }
    if (medidasVal) {
      lines.push('• *Medidas aproximadas:* ' + medidasVal);
    }
    if (etapaVal) {
      lines.push('• *Etapa del proyecto:* ' + etapaVal);
    }
    if (descVal) {
      lines.push('• *Detalles adicionales:* ' + descVal);
    }
    if (fileNames.length > 0) {
      lines.push('• *Fotos de referencia para enviarte en este chat:* ' + fileNames.join(', '));
    }

    lines.push('¿Podrían asesorarme? ¡Muchas gracias!');
    return lines.join('\n');
  }

  function updateWhatsAppPreview() {
    if (!whatsappMessagePreview) return;
    whatsappMessagePreview.textContent = buildWhatsAppMessage();
  }

  function handleDynamicSelects() {
    if (tipoMadera && otroTipoMaderaContainer) {
      otroTipoMaderaContainer.style.display = tipoMadera.value === 'Otro' ? 'block' : 'none';
    }
    if (tipoSector && otroSectorContainer) {
      otroSectorContainer.style.display = tipoSector.value === 'Otro' ? 'block' : 'none';
    }
    updateWhatsAppPreview();
  }

  if (tipoMadera) tipoMadera.addEventListener('change', handleDynamicSelects);
  if (tipoSector) tipoSector.addEventListener('change', handleDynamicSelects);

  [
    clienteNombre,
    clienteTelefono,
    otroTipoMadera,
    otroSector,
    tipoMueble,
    medidasAprox,
    presupuestoOrientativo,
    descripcionPedido,
    fotosReferencia
  ].forEach(function (inputEl) {
    if (inputEl) {
      inputEl.addEventListener('input', updateWhatsAppPreview);
      inputEl.addEventListener('change', updateWhatsAppPreview);
    }
  });

  // Pre-rellenar formulario desde botones "Cotizar similar" del Portfolio o Servicios
  function prefillQuoteForm(sector, material, itemTitle) {
    if (tipoSector && sector) {
      tipoSector.value = sector;
    }
    if (tipoMadera && material) {
      tipoMadera.value = material;
    }
    if (tipoMueble && itemTitle) {
      tipoMueble.value = itemTitle;
    }
    handleDynamicSelects();

    const pedidosSection = document.getElementById('pedidos');
    if (pedidosSection) {
      pedidosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(function () {
        if (tipoMueble) tipoMueble.focus();
      }, 450);
    }
  }

  document.querySelectorAll('[data-quote-sector]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const sector = btn.getAttribute('data-quote-sector');
      const material = btn.getAttribute('data-quote-material');
      const itemTitle = btn.getAttribute('data-quote-item');
      prefillQuoteForm(sector, material, itemTitle);
    });
  });

  if (formularioPedido) {
    formularioPedido.addEventListener('submit', function (e) {
      e.preventDefault();

      if (formErrorAlert) {
        formErrorAlert.hidden = true;
        formErrorAlert.textContent = '';
      }

      const tipoMad = tipoMadera ? tipoMadera.value : '';
      const otroTipMad = otroTipoMadera ? otroTipoMadera.value.trim() : '';
      const tipSect = tipoSector ? tipoSector.value : '';
      const otroSect = otroSector ? otroSector.value.trim() : '';

      if (tipoMad === 'Otro' && otroTipMad === '') {
        if (formErrorAlert) {
          formErrorAlert.textContent = 'Por favor especificá qué otro material estás buscando.';
          formErrorAlert.hidden = false;
        }
        if (otroTipoMadera) otroTipoMadera.focus();
        return;
      }

      if (tipSect === 'Otro' && otroSect === '') {
        if (formErrorAlert) {
          formErrorAlert.textContent = 'Por favor especificá para qué otro ambiente o sector es el mueble.';
          formErrorAlert.hidden = false;
        }
        if (otroSector) otroSector.focus();
        return;
      }

      const mensaje = buildWhatsAppMessage();
      // Número oficial de APPAS Amoblamientos (Rafaela: 3492327644 -> +54 9 3492 327644)
      const telefono = '5493492327644';
      const url = 'https://wa.me/' + telefono + '?text=' + encodeURIComponent(mensaje);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  updateWhatsAppPreview();

  /* ==========================================================================
     8. ANIMACIONES DE ENTRADA SUTIL Y FOOTER YEAR
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-up');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = String(new Date().getFullYear());
  }
})();
