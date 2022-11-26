import{o as a,a as t,z as n}from"./vue-libs.d5ee895a.js";const l={class:"van-doc-markdown-body"},p=n(`<h1>BackTop \u56DE\u5230\u9876\u90E8</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u8FD4\u56DE\u9875\u9762\u9876\u90E8\u7684\u64CD\u4F5C\u6309\u94AE\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BackTop</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">BackTop</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u8BF7\u6EDA\u52A8\u793A\u4F8B\u9875\u9762\u6765\u67E5\u770B\u53F3\u4E0B\u89D2\u7684\u8FD4\u56DE\u9876\u90E8\u6309\u94AE\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];
    <span class="hljs-keyword">return</span> { list };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-wei-zhi" tabindex="-1">\u81EA\u5B9A\u4E49\u4F4D\u7F6E</h3><p>\u901A\u8FC7 <code>right</code> \u548C <code>bottom</code> \u5C5E\u6027\u6765\u8BBE\u7F6E\u7EC4\u4EF6\u8DDD\u79BB\u53F3\u4FA7\u548C\u5E95\u90E8\u7684\u4F4D\u7F6E\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;15vw&quot;</span> <span class="hljs-attr">bottom</span>=<span class="hljs-string">&quot;10vh&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];
    <span class="hljs-keyword">return</span> { list };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-nei-rong" tabindex="-1">\u81EA\u5B9A\u4E49\u5185\u5BB9</h3><p>\u4F7F\u7528\u9ED8\u8BA4\u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5C55\u793A\u7684\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom&quot;</span>&gt;</span>\u8FD4\u56DE\u9876\u90E8<span class="hljs-tag">&lt;/<span class="hljs-name">van-back-top</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.custom</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
    <span class="hljs-attribute">text-align</span>: center;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];
    <span class="hljs-keyword">return</span> { list };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="she-zhi-gun-dong-mu-biao" tabindex="-1">\u8BBE\u7F6E\u6EDA\u52A8\u76EE\u6807</h3><p>\u53EF\u4EE5\u901A\u8FC7 <code>target</code> \u5C5E\u6027\u6765\u8BBE\u7F6E\u89E6\u53D1\u6EDA\u52A8\u7684\u76EE\u6807\u5BF9\u8C61\uFF0C\u652F\u6301\u4F20\u5165\u9009\u62E9\u5668\u6216 <code>HTMLElement</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;.container&quot;</span> <span class="hljs-attr">bottom</span>=<span class="hljs-string">&quot;30vh&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.container</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">60vh</span>;
    <span class="hljs-attribute">overflow</span>: auto;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];
    <span class="hljs-keyword">return</span> { list };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>target</td><td>\u89E6\u53D1\u6EDA\u52A8\u7684\u76EE\u6807\u5BF9\u8C61\uFF0C\u652F\u6301\u4F20\u5165\u9009\u62E9\u5668\u6216 DOM \u5143\u7D20</td><td><em>string | HTMLElement</em></td><td>-</td></tr><tr><td>right</td><td>\u8DDD\u79BB\u9875\u9762\u53F3\u4FA7\u7684\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>30</code></td></tr><tr><td>bottom</td><td>\u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u7684\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>40</code></td></tr><tr><td>offset</td><td>\u6EDA\u52A8\u9AD8\u5EA6\u8FBE\u5230\u6B64\u53C2\u6570\u503C\u65F6\u624D\u663E\u793A\u7EC4\u4EF6</td><td><em>number</em></td><td><code>200</code></td></tr><tr><td>teleport</td><td>\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9\uFF0C\u7B49\u540C\u4E8E Teleport \u7EC4\u4EF6\u7684 <a href="https://v3.cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to \u5C5E\u6027</a></td><td><em>string | Element</em></td><td><code>body</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u6309\u94AE\u663E\u793A\u5185\u5BB9</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">BackTopProps</span>, <span class="hljs-title class_">BackTopThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-back-top-size</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-back-top-icon-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-back-top-right</td><td><em>30px</em></td><td>-</td></tr><tr><td>--van-back-top-bottom</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-back-top-text-color</td><td><em>#fff</em></td><td>-</td></tr><tr><td>--van-back-top-background</td><td><em>var(--van-blue)</em></td><td>-</td></tr></tbody></table></div>`,14),e=[p],i={__name:"README.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(o,r)=>(a(),t("div",l,e))}};export{i as default};
