;(function (env) {
  const BASE_URL = /stage|product/.test(env)
    ? `http://check.eqxiu.com/check-web`
    : `http://check.yqxiu.cn/check-web`
  let productId, sceneCode
  ;[productId, sceneCode] = window.audit_scene
    ? [window.audit_scene.productId, window.audit_scene.code]
    : [undefined, undefined]
  if (productId === undefined && sceneCode === undefined) {
    console.warn('申诉按钮添加失败! 请检查参数是否正确!')
    return
  }
  const href =
    BASE_URL +
    `?productId=${productId}&sceneCode=${sceneCode}&redirect=${encodeURIComponent(
      location.href,
    )}`

  initButton(true)

  const switchDom = document.querySelector('.preview-style[type=pc-preview]')
  if (switchDom) {
    document
      .querySelector('.preview-style[type=pc-preview]')
      .addEventListener('click', handlePadAppendBtn, false)

    function handlePadAppendBtn() {
      setTimeout(() => {
        initButton(false, { transform: 'translateY(-6em)' })
        document
          .querySelector('.preview-style[type=pc-preview]')
          .removeEventListener('click', handlePadAppendBtn, false)
      }, 100)
    }
  }

  function getTargetDom() {
    if (productId === 9) {
      return [...document.querySelectorAll('.layer-box span')].find(
        (node) => node.innerText.indexOf('易企秀公众号') > -1,
      ).parentElement
    }
    return document.querySelector('#edit_area')
  }

  function initButton(initStyle = true, style = {}) {
    const btn = document.createElement('a')
    btn.id = 'appeal-btn'
    btn.innerText = '发起申诉'
    btn.href = href
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
    })
    for (const key in style) {
      const value = style[key]
      btn.style[key] = value
    }
    const targetDom = getTargetDom()
    initStyle && initCss()
    targetDom.appendChild(btn)
  }

  function initCss() {
    let style = document.createElement('style')
    if (productId === 9) {
      // 表单
      style.innerHTML = `
        #appeal-btn {
          position: absolute;
          left: calc(50% - 2em);
          bottom: -34px;
          display: block;
          font-size: 1em;
          z-index: 22;
          color: #1593ff;
        }
      `
    } else {
      style.innerHTML = `
        #appeal-btn {
          position: fixed;
          left: calc(50% - 2.5rem);
          top: 130px;
          display: block;
          font-size: 12px;
          padding: 4px 10px;
          background: #1593ff;
          z-index: 22;
          color: #fff;
        }
      `
    }
    document.body.append(style)
  }
})('product')
